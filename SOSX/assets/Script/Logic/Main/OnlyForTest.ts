
import { LoadTable } from "../../Table/table";

const {ccclass, property} = cc._decorator;

const EnemyCount = 100

@ccclass
export default class OnlyForTest extends cc.Component {
    start () {
        let numNode = new cc.Node()
        this.node.addChild(numNode, 10)

        LoadTable().then(()=>{
            // for(let i = 0; i < EnemyCount; i++) {
            //     let id = i%2==0? 8 : 9;
            //     let zIdx = i%2==0? 1 : 100;
            //     let enemy = Enemy.create(id, 1, 100, 100)
            //     enemy.node.x = i * 10 - 320
            //     enemy.node.zIndex = zIdx
            //     this.node.addChild(enemy.node)
            //     // enemy.setColor(i%2==0? cc.Color.WHITE : cc.Color.RED)
            // }
        })
    }
}
