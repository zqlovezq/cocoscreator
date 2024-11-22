import { tab } from "../../Table/table_gen";

export default class LoginData {

    public gatewayAddrs: string[]
    public uid: string = ""
    public token: string = ""
    public nickName:string = "";

    public loginAddress:string = "";
    public loginGroup:string = "";
    public loginName:string = "";
    public recommendRoleID:string = "";

    public loginServerTab:tab.ServerlistTable

    public wechatNickname:string = "";
    public wechatAvatarUrl:string = "";

    public isCreatRole = false;

    public isLogin = false

    protected static _ins:LoginData = null
    public static get Instance() {
        if(LoginData._ins == null) {
            LoginData._ins = new LoginData()
        }
        return LoginData._ins;
    }
    public static Purge() {
        LoginData._ins = null
    }


}