
import { tab } from "../../Table/table_gen";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BossboxUnlockSuccess extends PopLayer {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Sprite)
    curLevelbg: cc.Sprite = null

    @property(cc.Node)
    spinenode: cc.Node = null

    setView(lv:number){
        this.label.string = lv.toString()
        let bossboxcfg = tab.Data.BossBoxTableByID.getValue(lv)
        if(bossboxcfg){
            this.curLevelbg.setTexture(bossboxcfg.indexIcon)
        }

        let spnode:sp.Skeleton = this.spinenode.getComponent(sp.Skeleton)
        if(spnode)
        {
            spnode.setAnimation(0, "idle1", false)
            spnode.setCompleteListener(()=>{
                this.hide()
            })
        }
    }

    start () {

    }

}
