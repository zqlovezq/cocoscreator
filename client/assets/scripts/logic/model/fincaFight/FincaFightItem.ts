import { _decorator, Component, EventTouch, Label, Node, Sprite } from 'cc';
import { proto } from 'client_protocol';
import { PlayerHeadItem } from '../common/PlayerHeadItem';
import { SimpleRoleInfo } from '../friends/SimpleRoleInfo';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { ButtonLock, GameUtil } from '../../utils/GameUtil';
import { LangMgr } from '../../mgr/LangMgr';
import { FincaFightControl } from './FincaFightControl';
import { tab } from '../../../Table/table_gen';
import { RoleData } from '../role/RoleData';
const { ccclass, property } = _decorator;

@ccclass('FincaFightItem')
export class FincaFightItem extends Component {
    @property(PlayerHeadItem)
    palyerHerdItem: PlayerHeadItem = null;
    @property(Label)
    lbl_name: Label = null;
    @property(Label)
    lbl_force: Label = null;
    @property(Label)
    lbl_score: Label = null
    @property(Label)
    lbl_lv:Label = null;
    @property(Sprite)
    sp_head:Sprite = null;
    @property(Node)
    node_sweep:Node = null;
    private roleId: string = "";
    setData(data: proto.IFincaBattleRole) {
        this.roleId = data.roleId;
        if (this.roleId.indexOf("r_") > -1) {
            // 当前是机器人 SimpleRoleInfo
            const robotId = Number(this.roleId.replace("r_",""));
            const tabInfo = tab.getData().RobotTableById.getValue(robotId);
            this.palyerHerdItem.setCloseCallBack(()=>{})
            this.lbl_lv.string = String(tabInfo.PlayerLevel);
            let itemHeadTab = tab.getData().ItemTableById.getValue(tabInfo.Head);
            this.sp_head.setTexture(itemHeadTab.Icon);

            this.lbl_name.string = LangMgr.getLab(tabInfo.Name);
            this.lbl_score.string = LangMgr.getCombineString("ui_fincafight_13", [data.score]);
            this.lbl_force.string = GameUtil.convertNumber(data.powerScore);
        } else {
            const playerInfo = new SimpleRoleInfo();
            playerInfo.merge(data.simpleRole);
            this.palyerHerdItem.initHeadInfo({ roleInfo: playerInfo });
            this.palyerHerdItem.setCloseCallBack(() => {
                UIMgr.ins.show({ viewName: ViewName.CheckRoleInfoPop, data: { "roleId": data.roleId } })
            })

            this.lbl_name.string = data.simpleRole.name;
            this.lbl_force.string = GameUtil.convertNumber(data.powerScore);
            this.lbl_score.string = LangMgr.getCombineString("ui_fincafight_13", [data.score]);
        }
        // 是否显示扫荡按钮
        this.node_sweep.active = RoleData.ins.powerScore>=data.powerScore*(1+tab.getData().GetKeyValue_ConfigTable().FincaFightBattleSkip/10000)
    }
    // 竞技场攻击
    @ButtonLock(1, () => { })
    onClickFight(event: EventTouch, isSweep: string) {
        FincaFightControl.ins.reqFincaBattleFight(this.roleId, Boolean(Number(isSweep)));
    }
}


