import { _decorator, Component, Label, Node, RichText } from 'cc';
import InfiniteCell from '../../../Common/InfiniteList/InfiniteCell';
import { formatTimestamp } from '../../utils/GameUtil';
import { proto } from 'client_protocol';
import { LangMgr } from '../../mgr/LangMgr';
import { tab } from '../../../Table/table_gen';
const { ccclass, property } = _decorator;

@ccclass('FincaFightLogItem')
export class FincaFightLogItem extends InfiniteCell {
    @property(Node)
    node_win:Node = null;
    @property(Node)
    node_lose:Node = null;
    @property(RichText)
    lbl_log: RichText = null;
    @property(Label)
    lbl_time: Label = null;
    UpdateContent(data:proto.IFincaBattleFightRecord) {
        this.lbl_time.string = formatTimestamp(data.time);
        this.node_lose.active = !data.isWin;
        this.node_win.active = data.isWin;
        // type 0: 挑战他人，1: 被他人挑战

        let roleName = data.opponentRoleName
        if (data.opponentRoleId.indexOf("r_") > -1) {
            // 当前是机器人 SimpleRoleInfo
            const robotId = Number(data.opponentRoleId.replace("r_",""));
            const tabInfo = tab.getData().RobotTableById.getValue(robotId);
            roleName = LangMgr.getLab(tabInfo.Name)
        }

        if(data.type===0){
            const str = data.isWin?"ui_fincafight_14":"ui_fincafight_15"
            this.lbl_log.string = LangMgr.getCombineString(str,[roleName,data.changeScore]);
        }else{
            const str = data.isWin?"ui_fincafight_16":"ui_fincafight_17"
            this.lbl_log.string = LangMgr.getCombineString(str,[roleName,data.changeScore]);
        }
    }
}


