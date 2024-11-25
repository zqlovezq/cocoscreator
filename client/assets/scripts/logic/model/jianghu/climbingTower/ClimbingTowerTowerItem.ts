import { _decorator, Component, Label, Node, sp, Sprite } from 'cc';
import { tab } from '../../../../Table/table_gen';
import { LangMgr } from '../../../mgr/LangMgr';
import { LoadResAsync } from '../../../mgr/ResMgr';
import { createAnimation, setGraySpine } from '../../../utils/GameUtil';
const { ccclass, property } = _decorator;

/**
 * 
 * ClimbingTowerTowerItem
 * zhudingchao
 * Thu Jul 11 2024 19:52:31 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/jianghu/climbingTower/ClimbingTowerTowerItem.ts
 *
 */

@ccclass('ClimbingTowerTowerItem')
export class ClimbingTowerTowerItem extends Component {
    @property(sp.Skeleton)
    bossSp:sp.Skeleton=null;
    @property(Node)
    selectNode:Node=null;
    @property(Label)
    numLab:Label=null;
    @property(Node)
    lockNode:Node=null;
    @property(Node)
    gotNode:Node=null;
    @property(Sprite)
    bgSprite:Sprite=null;
    @property(Node)
    developNode:Node=null;
    @property(Node)
    bossNode:Node=null;
    async initView(state:number,table:tab.ClimbTowerTable){
        if(table){
            this.developNode.active=false;
            this.lockNode.active=state==2;
            this.gotNode.active=state==0;
            this.selectNode.active=state==1;
            this.numLab.string=LangMgr.getCombineString("ui_climbingtower_2",[table.Floor])
            this.bgSprite.setTexture(table.BackgroundUrl);
            let tempTab: tab.AnimationTable = tab.getData().AnimationTableById.getValue(Number(table.AnimationId))
            let spData = await LoadResAsync(tempTab.Path, sp.SkeletonData)
            this.bossSp.skeletonData = spData
            if(state==2){
                this.bgSprite.grayscale=true;
                createAnimation(this.bossSp.node, tempTab.Id, 0);
                setGraySpine(this.bossSp, true);
            }else{
                this.bgSprite.grayscale=false;
                this.bossSp.setAnimation(0, tempTab.AnimationName, true);
                setGraySpine(this.bossSp, false);
            }
        }else{
            //敬请期待
            this.bossNode.active=false;
            this.developNode.active=true;
            this.gotNode.active=false;

        }
    }

}