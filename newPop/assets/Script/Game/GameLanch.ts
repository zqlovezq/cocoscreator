import AssetsBundle from "./AssetsBundle";
import Login from "./Login";
const {ccclass,property} = cc._decorator;
@ccclass
export default class GameLanch extends cc.Component{
    private static Instance:GameLanch = null;
    protected onLoad(): void {
        if(GameLanch.Instance === null){
            GameLanch.Instance = this;
        }else{
            this.destroy();
            return;
        }
        this.node.addComponent(AssetsBundle);
        this.node.addComponent(Login);
    }
    protected start(): void {
        Login.Instance.LoginGame();
    }
}