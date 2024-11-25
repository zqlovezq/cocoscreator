import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { JadeSelectItem } from './JadeSelectItem';
import { EquipData } from '../equip/EquipData';
import { EquipInfo } from '../equip/EquipInfo';
import { GuideController } from '../../guide/GuideController';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
const { ccclass, property } = _decorator;

@ccclass('JadeSelectPop')
export class JadeSelectPop extends ViewPop {
    @property(Node)
    public contentNode: Node = null;
    @property(JadeSelectItem)
    currItem:JadeSelectItem=null;
    @property(Prefab)
    itemPrefab:Prefab=null;
    private currHeroClass:number;
    register(): void {


    }
    start(): void {
        this.currHeroClass=this.openData["heroClass"]
        this.initView();
        if (GuideController.ins.isGuiding()) {
            EventMgr.emitLocal(LocalEvent.ShowPop);
        }
    }
    initView(){
        let list=EquipData.ins.getJadeEquipInfos();
        let currInfo:EquipInfo=null;
        let index = 0;
        for(let key in list){
            if(list[key].heroClass==this.currHeroClass){
                currInfo=list[key];
            }else{
                let item:Node=instantiate(this.itemPrefab);
                item.parent=this.contentNode;
                item.name = "item"+index;
                item.getComponent(JadeSelectItem).initData(list[key],this.currHeroClass);
                index++;
            }
        }
        this.currItem.initData(currInfo,this.currHeroClass);
    }


}


