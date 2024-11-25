import { _decorator, Color, Component, Label, Node, Sprite } from 'cc';
import { tab } from '../../../Table/table_gen';
import { ItemInfo } from '../item/ItemInfo';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { CommonItem } from '../item/CommonItem';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { OpenFunctionMgr } from '../../../Common/component/OpenFunctionMgr';
import { LangMgr } from '../../mgr/LangMgr';
import { RoleData } from '../role/RoleData';
import { BattleMainDataControl } from '../home/battle/BattleMainDataControl';
const { ccclass, property } = _decorator;

@ccclass('HandbookItem')
export class HandbookItem extends Component {
    @property(Sprite)
    openIcon: Sprite = null;
    @property([CommonItem])
    commonItems: CommonItem[] = [];
    @property(Node)
    node_finish: Node = null;
    @property(Node)
    node_waiting: Node = null;
    @property(Node)
    node_got: Node = null;
    @property(Node)
    node_lock: Node = null;
    @property(Node)
    node_get: Node = null;
    @property(Label)
    lbl_condition_txt1: Label = null;
    @property(Label)
    lbl_condition_txt2: Label = null;
    @property(Label)
    lbl_condition_txt3: Label = null;
    @property(Node)
    node_content: Node = null;
    private _openTab: tab.OpenFunctionTable = null;
    initData(_tab: tab.OpenFunctionTable) {
        this._openTab = _tab;
        this.openIcon.setTexture(_tab.Icon);
        const showType = _tab.ShowType;
        this.node_waiting.active = showType === 2;
        this.node_finish.active = showType === 1;
        this.node_content.destroyAllChildren();
        // 显示奖励
        for (let i = 0; i < _tab.RewardItemId.length; i++) {
            const itemId = _tab.RewardItemId[i];
            const itemCount = _tab.RewardItemNum[i];

            const info = new ItemInfo();
            info.itemId = itemId;
            info.num = itemCount;

            const itemItem = ItemPoolMgr.ins.createItem(info, this.node_content);
            const itemTs = itemItem.getComponent(CommonItem);
            itemTs.initData(info);
        }
        // 是否已经领取奖励
        const funcData = OpenFunctionMgr.ins.getOpenFunctionData(_tab.Name);
        for (let k = 1; k <= 3; k++) {
            const lbl = this["lbl_condition_txt" + k];
            lbl.string = "";
        }
        if (!funcData.isOpen) {
            this.node_lock.active = true;
            // 如果没有开放显示开放条件ui_handbook_
            /* 1：主線關卡到達{0}|2：玩家等級達到{0}級|3：創角時間達到{0}天 */
            if (_tab.BattleLv) {
                this.lbl_condition_txt1.node.active = true;
                this.lbl_condition_txt1.string = LangMgr.getCombineString("ui_handbook_1", [_tab.BattleLv]);
                const ids = BattleMainDataControl.ins.getStageClearIds();
                if(ids.indexOf(_tab.BattleLv)>-1){
                    this.lbl_condition_txt1.color = new Color().fromHEX("#47FA1E");
                }else{
                    this.lbl_condition_txt1.color = new Color().fromHEX("#95AAC2");
                }
            }else{
                this.lbl_condition_txt1.node.active = false;
                this.lbl_condition_txt1.string = "";
            }
            if (_tab.PlayerLv) {
                this.lbl_condition_txt2.node.active = true;
                this.lbl_condition_txt2.string = LangMgr.getCombineString("ui_handbook_2", [_tab.PlayerLv]);
                if(RoleData.ins.level>=_tab.PlayerLv){
                    this.lbl_condition_txt2.color = new Color().fromHEX("#47FA1E");
                }else{
                    this.lbl_condition_txt2.color = new Color().fromHEX("#95AAC2");
                }
            }else{
                this.lbl_condition_txt2.node.active = false;
                this.lbl_condition_txt2.string = "";
            }
            if (_tab.CreateDay) {
                this.lbl_condition_txt3.node.active = true;
                this.lbl_condition_txt3.string = LangMgr.getCombineString("ui_handbook_3", [_tab.CreateDay]);

                const newDate = new Date(RoleData.ins.createTime*1000);
                const tomorrow = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 1);
                const times = RoleData.ins.getServerUtcTime()- tomorrow.getTime()/1000;
                let nowDay = 1;
                if(times>0){
                    nowDay = Math.ceil((RoleData.ins.getServerUtcTime() - tomorrow.getTime()/1000) / 86400) + 1;
                }

                if(nowDay>=_tab.CreateDay){
                    this.lbl_condition_txt3.color = new Color().fromHEX("#47FA1E");
                }else{
                    this.lbl_condition_txt3.color = new Color().fromHEX("#95AAC2");
                }

            }else{
                this.lbl_condition_txt3.node.active = false;
                this.lbl_condition_txt3.string = "";
            }
            console.log(this.lbl_condition_txt1.string, this.lbl_condition_txt2.string, this.lbl_condition_txt3.string)
            this.node_get.active = false;
        } else {
            this.node_got.active = funcData.isReceivedRewards;
            this.node_get.active = !funcData.isReceivedRewards;
        }
        console.log(this.lbl_condition_txt1.string, this.lbl_condition_txt2.string, this.lbl_condition_txt3.string)
    }
    // 领取奖励
    sendMsg() {
        const funcData = OpenFunctionMgr.ins.getOpenFunctionData(this._openTab.Name);
        if (funcData.isOpen && !funcData.isReceivedRewards) {
            let msg = new proto.Msg_ReceiveOpenFunctionRewardReq();
            msg.name = this._openTab.Name;
            Net.Send(proto.Ptl.ReceiveOpenFunctionRewardReq, msg)
        }
    }
}


