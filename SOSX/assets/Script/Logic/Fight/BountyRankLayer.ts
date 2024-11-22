import { proto } from "../../Protocol/client_protocol";
import Role from "../Common/Role";
import { getRes } from "../Utils/GameUtils";
import BountyRankItem from "./BountyRankItem";
const {ccclass, property} = cc._decorator;

@ccclass
export default class BountyRankLayer extends cc.Component {
    @property(cc.Node)
    layout:cc.Node = null;
    onLoad () {
        // 监听排行榜变化
        let prefab:cc.Prefab = getRes("prefab/ShangJinItem",cc.Prefab); 
        for(let i=0;i<8;i++){
            let item = cc.instantiate(prefab);
            this.layout.addChild(item);
        }
    }
    refreshBountyData(data:proto.IBountyFightData[]){
        for(let i=0;i<data.length;i++){
            let item:BountyRankItem = this.layout.children[i].getComponent(BountyRankItem);
            item.setData(data[i],i+1);
        }
    }
}
