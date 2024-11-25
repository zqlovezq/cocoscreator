import { Node, Prefab, _decorator } from "cc";
import { AbsControl, AbsData, AbsMgr } from "../../../framework/base/IAbs";
import { tab } from "../../../Table/table_gen";
import { PREVIEW } from "cc/env";


const { ccclass, property } = _decorator;

export class LoginData extends AbsData {
    private static _instance: LoginData;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new LoginData();
        }
        return this._instance;
    }

    public gatewayAddrs: string[]
    public uid: string = ""
    public token: string = ""
    public nickName: string = "";
    public openId: string = ""
    public default_area: number = 0
    public default_area_name:string = ""

    public password: string = ""

    public serverAddress: string = "";
    public loginGroup: string = "";
    public serverName: string = "";
    public recommendRoleID: string = "";

    public loginServerTab: tab.ServerlistTable

    public isCreatRole = false;

    public isLogin = false

    public serverId: number
    purge(): void {

    }

    setServerId(id: number) {
        this.serverId = id || 1
        this.loginServerTab = this.getServerlistTable()
        this.serverAddress = this.loginServerTab.Address;
        this.serverName = this.loginServerTab.Name;
        console.log(this.loginServerTab)
        console.log("当前服务器id", this.serverId)
    }

    getServerlistTable(): tab.ServerlistTable {
        let data: tab.ServerlistTable;
        // if (window.login_addr_id) {
        //     id = window.login_addr_id
        //     if (id == AppType.release) {
        //         return WechatServerTab
        //     }
        // }

        data = tab.getData().ServerlistTableByID.getValue(this.serverId)
        if (!data) {
            throw `cannot find serverlist i=${this.serverId}`
        }
        return data
    }
}