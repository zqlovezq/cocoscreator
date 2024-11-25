import { _decorator, Button, Component, EventTouch, Label, Node, Sprite } from 'cc';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { ItemInfo } from '../item/ItemInfo';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { ModuleUtil } from '../../../Common/ModuleUtil';
import RedComp from '../../../Common/component/RedComp';
import RedEventComp from '../../../Common/component/RedEventComp';
import { RedDotType } from '../../red/RedDotType';
import { RedMgr } from '../../mgr/RedMgr';
import { OpenFunctionMgr } from '../../../Common/component/OpenFunctionMgr';
const { ccclass, property } = _decorator;

@ccclass('GameplayViewItem')
export class GameplayViewItem extends Component {
    @property(Label)
    lbl_name: Label = null;
    @property(Sprite)
    sp_icon: Sprite = null;
    @property(Node)
    node_layout: Node = null;
    @property(Node)
    node_red: Node = null;
    @property(Node)
    lock_node: Node = null
    private _data: tab.ChallengeButtonTable = null;
    private opName: tab.Module = tab.Module.Module_Unknown;
    private openFunc: tab.OpenFunctionName = tab.OpenFunctionName.OpenFunctionName_None
    setData(data: tab.ChallengeButtonTable) {
        this._data = data;
        this.opName = data.JumpUI;
        this.sp_icon.setTexture(data.Background);
        this.lbl_name.string = LangMgr.getLab(data.Name);
        this.node_layout.destroyAllChildren();
        this.setOpenFunc(data.Id);
        const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(this.openFunc);
        this.lock_node.active = !isOpen;
        if (isOpen) {
            // 添加红点逻辑
            this.addRedEvent(data.Id)
        } else {
            this.node_red.active = false;
        }
        for (let i = 0; i < data.ShowItemId.length; i++) {
            const itemInfo = new ItemInfo();
            itemInfo.itemId = data.ShowItemId[i];
            itemInfo.num = 0;
            ItemPoolMgr.ins.createItem(itemInfo, this.node_layout);
        }
    }
    // 获取openFunc
    setOpenFunc(id: number) {
        switch (id) {
            case 1:
                this.openFunc = tab.OpenFunctionName.OpenFunctionName_Challenge;
                break;
            case 2:
                this.openFunc = tab.OpenFunctionName.OpenFunctionName_DailyChallenge
                break;
            case 3:
                this.openFunc = tab.OpenFunctionName.OpenFunctionName_WorldBoss
                break;
            case 4:
                this.openFunc = tab.OpenFunctionName.OpenFunctionName_ClimbTower
                break;
            case 5:
                this.openFunc = tab.OpenFunctionName.OpenFunctionName_FincaFight
                break;
            default:
                break;
        }
    }
    addRedEvent(id: number) {
        if (id === 1) {
            const redCompTs = this.addComponent(RedComp);
            redCompTs.redNode = this.node_red;
            const type1: RedEventComp = new RedEventComp();
            type1.event = RedDotType.ChallengeDailyFreeTimes;
            const type2: RedEventComp = new RedEventComp();
            type2.event = RedDotType.ChallengeDailyAward;
            redCompTs.types = [type1, type2];

            redCompTs.addRed();
            RedMgr.refreshEvent(RedDotType.ChallengeDailyFreeTimes);
            RedMgr.refreshEvent(RedDotType.ChallengeDailyAward);
        } else if (id == 4) {
            const redCompTs = this.addComponent(RedComp);
            redCompTs.redNode = this.node_red;
            // const type1: RedEventComp = new RedEventComp();
            // type1.event = RedDotType.ClimbingTowerChallenge;
            const type2: RedEventComp = new RedEventComp();
            type2.event = RedDotType.ClimbingTowerDailyReward;
            const type3: RedEventComp = new RedEventComp();
            type3.event = RedDotType.ClimbingTowerStageReward;
            const type4: RedEventComp = new RedEventComp();
            type4.event = RedDotType.Battle_Pass;
            type4.child = "5";
            redCompTs.types = [type2, type3, type4];
            redCompTs.addRed();
            RedMgr.refreshEvent(RedDotType.ClimbingTowerChallenge);
            RedMgr.refreshEvent(RedDotType.ClimbingTowerDailyReward);
            RedMgr.refreshEvent(RedDotType.ClimbingTowerStageReward);
            RedMgr.refreshEvent(RedDotType.Battle_Pass);
        } else if (id == 2) {
            const redCompTs = this.addComponent(RedComp);
            redCompTs.redNode = this.node_red;
            const type1: RedEventComp = new RedEventComp();
            type1.event = RedDotType.EveryDayChallengeFreeNum;
            const type2: RedEventComp = new RedEventComp();
            type2.event = RedDotType.EveryDayChallengeUpReward;
            const type3: RedEventComp = new RedEventComp();
            type3.event = RedDotType.EveryDayChallengeBoxReward;

            redCompTs.types = [type1, type2, type3];
            redCompTs.addRed();
            RedMgr.refreshEvent(RedDotType.EveryDayChallengeFreeNum);
            RedMgr.refreshEvent(RedDotType.EveryDayChallengeUpReward);
            RedMgr.refreshEvent(RedDotType.EveryDayChallengeBoxReward);
        } else if (id == 3) {
            const redCompTs = this.addComponent(RedComp);
            redCompTs.redNode = this.node_red;
            const type1: RedEventComp = new RedEventComp();
            type1.event = RedDotType.TopWarChallengeFreeNum;

            redCompTs.types = [type1];
            redCompTs.addRed();
            RedMgr.refreshEvent(RedDotType.TopWarChallengeFreeNum);
        } else if (id === 99) {
            this.node.getComponent(Button).enabled = false;
        }else if(id===5){
            const redCompTs = this.addComponent(RedComp);
            redCompTs.redNode = this.node_red;
            const type1: RedEventComp = new RedEventComp();
            type1.event = RedDotType.Free_Fight_Token;

            redCompTs.types = [type1];
            redCompTs.addRed();
            RedMgr.refreshEvent(RedDotType.Free_Fight_Token);
        }
    }
    onClickBtn() {
        const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(this.openFunc);
        if (!isOpen) {
            OpenFunctionMgr.ins.showFunctionTips(this.openFunc);
            return;
        }
        if (this.opName) {
            UIMgr.ins.jumpLayer(this.opName)
        }
    }
}


