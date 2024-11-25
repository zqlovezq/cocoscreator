/*
 * @Date: 2024-06-20 13:52:50
 * @LastEditors: wzq
 * @program:江湖
 * @LastEditTime: 2024-07-23 09:57:08
 */

import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { EventMgr } from '../../mgr/EventMgr';
import { GameplayViewDataMgr } from './GameplayViewDataMgr';
import { tab } from '../../../Table/table_gen';
import { GameplayViewItem } from './GameplayViewItem';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
import { GameplayControl } from './GameplayControl';
const { ccclass, property } = _decorator;

@ccclass('GameplayView')
export class GameplayView extends ViewPop {
    @property(Prefab)
    pfb_item:Prefab = null;
    @property(Node)
    node_content:Node = null;
    register(): void {
        
    }
    onShow(): void {
        GameplayControl.ins.requestGetClimbTowerInfo();
        this.showViewList();
    }
    showViewList(){
        this.node_content.destroyAllChildren();
        for(let i=0;i<tab.getData().ChallengeButtonTable.length;i++){
            const item = instantiate(this.pfb_item);
            item.parent = this.node_content;
            const itemTs = item.getComponent(GameplayViewItem);
            itemTs.setData(tab.getData().ChallengeButtonTable[i])
        }
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
}


