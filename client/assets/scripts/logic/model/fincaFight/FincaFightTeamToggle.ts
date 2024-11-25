import { _decorator, Component, Label, Node } from 'cc';
import { FincaFightTeamState } from '../../../Common/script/EnumTypeMgr';
import { HeroData } from '../hero/HeroData';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { HeroItem } from '../item/HeroItem';
import { FincaFightData } from './FincaFightData';
import { ShowTips } from '../../mgr/UIMgr';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

@ccclass('FincaFightTeamToggle')
export class FincaFightTeamToggle extends Component {
    private emptyNode:Node = null;
    private lockNode:Node = null;
    private heroNode:Node = null;
    private selectNode:Node = null;
    private heroItem:HeroItem = null;
    private lvNode:Label = null;
    public curIndex:number = 0;
    setData(index:number){
        let heroId = FincaFightData.ins.heroIds[index];
        this.curIndex = index;
        this.emptyNode = this.node.getChildByName("empty_node");
        this.lockNode = this.node.getChildByName("lock_node");
        this.heroNode = this.node.getChildByName("item");
        this.selectNode = this.node.getChildByName("select_node");
        this.lvNode = this.node.getChildByName("lv_node").getChildByName("lv_txt").getComponent(Label);
        this.lvNode.string = String(this.getHeroPvpLevel());
        
        const state = FincaFightData.ins.getState(index+1);

        this.emptyNode.active = state===FincaFightTeamState.EMPTY;
        this.lockNode.active = state===FincaFightTeamState.LOCK;
        this.heroNode.active = state===FincaFightTeamState.HERO;
        this.lvNode.node.parent.active =  state===FincaFightTeamState.HERO;
        let heroInfo = HeroData.ins.getById(heroId);
        if(heroId){
            if(!this.heroItem){
                let heroItemNode = ItemPoolMgr.ins.createHeroItem(heroInfo,this.heroNode);
                this.heroItem = heroItemNode.getComponent(HeroItem);
                this.heroItem.setTouchCallBack(()=>{
                    // console.log(`cocos 当前点击的index=${index}`)
                });
            }else{
                this.heroItem.UpdateContent(heroInfo);
            }
        }
    }
    setSelectState(isSelect:boolean){
        this.selectNode.active = isSelect;
    }
    refreshItem(heroId:number){
        let heroInfo = HeroData.ins.getById(heroId);
        this.heroItem.UpdateContent(heroInfo)
    }
    onClickLockBtn(){
        const level = FincaFightData.ins.getUnLockLevel(this.curIndex+1,true);
        ShowTips(LangMgr.getCombineString("Tips_finca_3",[level]))
    }
    // 获取pvp英雄的觉醒星级
    getHeroPvpLevel(){
        let defaultLevel = 5;
        let heroId = FincaFightData.ins.heroIds[this.curIndex];
        let heroInfo = HeroData.ins.getById(heroId);
        // 英雄星级>=16时，星级+1
        if(heroInfo&&heroInfo.star>=16){
            defaultLevel+=1;
        }
        return defaultLevel
    }
}


