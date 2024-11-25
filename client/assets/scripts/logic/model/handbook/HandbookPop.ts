/*
 * @Date: 2024-06-11 09:37:28
 * @LastEditors: wzq
 * @program:江湖指南
 * @LastEditTime: 2024-07-24 10:46:09
 */

import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { tab } from '../../../Table/table_gen';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { OpenFunctionMgr } from '../../../Common/component/OpenFunctionMgr';
import { HandbookItem } from './HandbookItem';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
const { ccclass, property } = _decorator;
const statusPriority: { [key: string]: number } = {
    '可领取': 1,
    '未开启': 2,
    '开发中': 3,
    '已领取': 4,
    'NONE':5
};
@ccclass('HandbookPop')
export class HandbookPop extends ViewPop {
    @property(Prefab)
    pfb_item: Prefab = null;
    @property(Node)
    node_content: Node = null;
    onShow(): void {
        this.node_content.destroyAllChildren();
        const tabs = tab.getData().OpenFunctionTable;
        const showTabs = [];
        for (let i = 0; i < tabs.length; i++) {
            const openTab = tabs[i];
            if (openTab.ShowType === 0) {
                continue;
            }
            showTabs.push(openTab);
        }
        const newList = this.sortList(showTabs);
        console.log(newList)
        for (let k = 0; k < newList.length; k++) {
            const openTab = newList[k];
            const item = instantiate(this.pfb_item);
            item.parent = this.node_content;
            const itemTs = item.getComponent(HandbookItem);
            itemTs.initData(openTab);
        }
    }
    protected onDestroy(): void {
        super.onDestroy()
    }
    register(): void {
        // 获取奖励刷新列表
        EventMgr.onMsg(proto.Ptl.ReceiveOpenFunctionRewardRsp, this.on_s2c_ReceiveOpenFunctionRewardRsp, this)
    }
    unRegister(): void {
        super.unRegister();
    }
    on_s2c_ReceiveOpenFunctionRewardRsp(msg: proto.Msg_ReceiveOpenFunctionRewardRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
        OpenFunctionMgr.ins.changeOpenFunctionDataByName(msg.name);
        RedMgr.refreshEvent(RedDotType.Hand_book);
        this.onShow();
    }
    // 列表排序规则 可领取 未开启 开发中 已领取
    sortList(list: tab.OpenFunctionTable[]) {
        for(let i=0;i<list.length;i++){
            let listItem:tab.OpenFunctionTable = list[i]
            const funcData = OpenFunctionMgr.ins.getOpenFunctionData(listItem.Name);
            if(!funcData.isReceivedRewards&&funcData.isOpen&&listItem.ShowType === 1){
                listItem["status"] = "可领取"
                continue;
            }
            if(!funcData.isOpen&&listItem.ShowType === 1){
                listItem["status"] = "未开启";
                continue;
            }
            if(listItem.ShowType === 2){
                listItem["status"] = "开发中"
                continue;
            }
            if(funcData.isReceivedRewards){
                listItem["status"] = "已领取"
                continue
            }
            listItem["status"] = "NONE"
        }
        list.sort((a, b) => {
            return statusPriority[a['status']] - statusPriority[b['status']];
        });
        return list;
    }
}


