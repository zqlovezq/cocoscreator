import { _decorator, Component, Label, log, Node } from 'cc';
import { LangMgr } from '../../mgr/LangMgr';
import { tab } from '../../../Table/table_gen';
import { LoginData } from '../login/LoginData';
import { CommonTipsPop, CommonTipsPopCloseType } from './CommonTipsPop';
import { Net } from '../../net/Net';
import { SceneMgr, ScenesName } from '../../mgr/SceneMgr';
import { Func } from '../../utils/Func';
import { LoginControl } from '../login/LoginControl';
import { ChannelMgr } from '../../../channel/ChannelMgr';
import { RoleData } from '../role/RoleData';
const { ccclass, property } = _decorator;

/**
 * 
 * ServerChooseItem
 * zhudingchao
 * Wed Aug 07 2024 15:22:19 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/common/ServerChooseItem.ts
 *
 */

@ccclass('ServerChooseItem')
export class ServerChooseItem extends Component {
    @property([Node])
    stateNodes: Node[] = [];
    @property(Label)
    levelLab: Label = null;
    @property(Label)
    nameLab: Label = null;
    serverData: any = null;
    initData(serverData: any) {
        this.serverData = serverData;
        this.nameLab.string = serverData["name"] || LangMgr.getCombineString("ui_chat_1", [1]);
        if (serverData["role_level"]) {
            this.levelLab.node.active = true;
            this.levelLab.string = LangMgr.getCombineString("ui_heroresonancepop_3", [serverData["role_level"]])
        } else {
            this.levelLab.node.active = false;
        }
        for (let key in this.stateNodes) {
            this.stateNodes[key].active = false;
        }
        this.stateNodes[serverData["status"]].active = true;
    }
    onTcouhItem() {
        if (LoginData.ins.default_area != this.serverData["id"]) {
            log("切换选服========");
            CommonTipsPop.create(LangMgr.getLab("Tips_server_1"), (closeType: CommonTipsPopCloseType) => {
                if (closeType == CommonTipsPopCloseType.confirm) {
                    LoginData.ins.default_area = this.serverData["id"];
                    LoginData.ins.default_area_name = this.serverData["name"];
                    LoginControl.ins.isChangeServer = true;
                    ChannelMgr.roleLogoutServer(RoleData.ins.sdkRole())
                    Net.Disconnect();
                    // SceneMgr.ins.loadScene(ScenesName.login)
                    // console.log("ok")
                    // MailControl.ins.requestDeleteMails(ids);
                } else {
                    console.log("cancel")
                }
            });
        }
    }
}