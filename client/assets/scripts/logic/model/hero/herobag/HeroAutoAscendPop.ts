import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { proto } from 'client_protocol';
import { Net } from '../../../net/Net';
import { HeroAutoAscendPopItem } from './HeroAutoAscendPopItem';
import { EventMgr } from '../../../mgr/EventMgr';
import { LocalEvent } from '../../../define/LocalEvent';
import { HeroInfo } from '../HeroInfo';
import { HeroData } from '../HeroData';
import { tab } from '../../../../Table/table_gen';
import { HeroDataControl } from './HeroDataControl';
const { ccclass, property } = _decorator;

@ccclass('HeroAutoAscendPop')
export class HeroAutoAscendPop extends ViewPop {
    @property(Prefab)
    pfb_item: Prefab;

    @property(Node)
    node_content: Node = null;

    @property(Node)
    node_kong:Node = null;
    @property(Node)
    node_ascend:Node = null;

    private herosMap = null;
    private deleteMap: Map<number, HeroInfo[]> = new Map();
    register(): void {
        /* 取消选择升星单位 */
        /* 当前切换英雄的时候 */
        EventMgr.onLocal(LocalEvent.Delete_Star_Up_Hero, this.changeMap, this);
    }
  
    private changeMap(heroId: number, isDelete: boolean) {
        if (isDelete) {
            this.deleteMap.set(heroId,this.herosMap.get(heroId))
            this.herosMap.delete(heroId);
        } else {
            this.herosMap.set(heroId, this.deleteMap.get(heroId));
        }
    }
    onShow(): void {
        /* 获取所有可以一键升星的数据 */
        this.herosMap = HeroDataControl.ins.getOneClickList();
        this.node_ascend.active = this.herosMap.size>0;
        this.node_kong.active = !(this.herosMap.size>0);
        this.node_content.removeAllChildren();
        this.herosMap.forEach((value, key) => {
            let item = instantiate(this.pfb_item);
            item.parent = this.node_content;
            let ts = item.getComponent(HeroAutoAscendPopItem);
            ts.initData(value, key);
        })
    }
    onDestroy(): void {
        super.onDestroy();
    }
    onClickUpHeros() {
        if(this.herosMap.size===0){
            return;
        }
        let msg = new proto.Msg_UpHeroStarOneClickReq()
        let upStarCosts: proto.IMsg_UpHeroStarReq[] = [];
        this.herosMap.forEach((value, key) => {
            let data: proto.IMsg_UpHeroStarReq = {};
            data.heroId = key;
            data.upStarCosts = [];
            //同名
            let heroInfo = HeroData.ins.getById(key);
            let sameHeroNameCount = heroInfo.getHerosByType(tab.HeroStarUpType.HeroStarUpType_SameNameHero).needCount;

            let objSameName: proto.IUpHeroStarCost = {};
            objSameName.costType = tab.HeroStarUpType.HeroStarUpType_SameNameHero;
            objSameName.costHeroIds = [];
            // 同职业
            let objSameClass: proto.IUpHeroStarCost = {};
            objSameClass.costType = tab.HeroStarUpType.HeroStarUpType_SameClassHero;
            objSameClass.costHeroIds = [];

            for (let i = 0; i < value.length; i++) {
                if (i < sameHeroNameCount) {
                    let heroId = value[i].id;
                    objSameName.costHeroIds.push(heroId);
                }else{
                    let heroId = value[i].id;
                    objSameClass.costHeroIds.push(heroId);
                }
            }

            data.upStarCosts.push(objSameName);
            data.upStarCosts.push(objSameClass);
            upStarCosts.push(data);
        })
        msg.upStarCosts = upStarCosts;
        Net.Send(proto.Ptl.UpHeroStarOneClickReq, msg)
    }
}


