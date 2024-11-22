/*
 *  
 */
import LoadingPrefab from "../Loading/LoadingPrefab";
import LoadingScene from "../Loading/LoadingScene";
import { LoadScene } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FightEnd extends cc.Component {

    @property(cc.Node)
    nodeWin: cc.Node = null;

    @property(cc.Node)
    nodeLose: cc.Node = null;

    setFightEndData(isWin:boolean) {
        this.nodeWin.active = isWin;
        this.nodeLose.active = !isWin;
    }

    onQuitClick() {
        //LoadScene("MainScene");
        LoadScene('LoadingScene', (error, scene:cc.Scene)=>{
            let loadingTs = scene.children[0].getComponent(LoadingScene);
            let loading = null;
            loadingTs.setLoading(false);
            loading = scene.getComponentInChildren(LoadingPrefab)
            loading.loadRes('MainScene',async ()=>{
            }, async ()=>{
                loading.enterScene('MainScene');
            }, false);
        });
    }
}
