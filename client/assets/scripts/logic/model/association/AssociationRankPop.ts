import { _decorator, Component, EventTouch, instantiate, Node, Prefab } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { proto } from 'client_protocol';
import { AssociationData } from './AssociationData';
import { AssociationRankBottomItem } from './AssociationRankBottomItem';
import { AssociationRankTopItem } from './AssociationRankTopItem';
import InfiniteList from '../../../Common/InfiniteList/InfiniteList';
import { RoleData } from '../role/RoleData';
const { ccclass, property } = _decorator;

@ccclass('AssociationRankPop')
export class AssociationRankPop extends ViewPop {
    @property(InfiniteList)
    list_view: InfiniteList = null;
    @property(Node)
    node_top_items: Node = null;
    @property(Prefab)
    pfb_rank_top_item: Prefab = null;
    @property(Prefab)
    pfb_rank_item: Prefab = null;
    @property(AssociationRankBottomItem)
    node_my_rank_item: AssociationRankBottomItem = null;
    private bossGuildRank: proto.IGuildBossRank[] = []//公会排行榜
    private bossRoleRank: proto.ISimpleRank[] = []//公会个人排行榜
    private view_type: number = 0;//1:个人排行 2：公会排行
    private rank_list = [];
    private top_list = [];
    onShow(): void {
        this.view_type = 1;
        this.bossRoleRank = AssociationData.ins.getRoleRank();
        this.bossGuildRank = AssociationData.ins.getGuildRank();
        this.switchView(null, String(this.view_type));
    }
    // 根据view_type刷新数据
    switchView(e: EventTouch, type: string) {
        if(e&&Number(type)===this.view_type){
            return
        }
        this.view_type = Number(type);
        this.rank_list = [];
        this.top_list = [];
        const rankList = Number(type) === 1 ? this.bossRoleRank : this.bossGuildRank;
        for (let i = 0; i < rankList.length; i++) {
            if (i < 3) {
                this.top_list.push(rankList[i])
            } else {
                this.rank_list.push(rankList[i])
            }
        }
        this.initStaticView();
        this.createTopItem();
    }
    /* 创建前三的数据 */
    createTopItem() {
        for (let i = 0; i < 3; i++) {
            const parentNode = this.node_top_items.children[i];
            let item = null;
            if (!parentNode.children[0]) {
                item = instantiate(this.pfb_rank_top_item);
                item.parent = parentNode;
            } else {
                item = parentNode.children[0]
            }
            const itemTs: AssociationRankTopItem = item.getComponent(AssociationRankTopItem);
            itemTs.initData(this.top_list[i], this.view_type)
        }
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    register(): void {

    }
    unRegister(): void {
        super.unRegister();
    }
    initStaticView() {
        let canInit = this.rank_list.length > 0;
        this.list_view.stopAutoScroll();
        if (canInit) {
            this.list_view.node.parent.active = true;
            this.list_view.Init({
                getCellNumber: this.getCellCount.bind(this),
                getCellSize: this.getCellHeight.bind(this),
                getCellIdentifer: this.getCellIdentifer.bind(this),
                getCellView: this.getCellView.bind(this),
                getCellData: this.GetCellData.bind(this),
            });
        } else {
            this.list_view.node.parent.active = false;
        }
        this.createMyRank();
    }
    getCellCount() {
        return this.rank_list.length;
    }
    getCellHeight(idx: number) {
        return 82;
    }
    getCellIdentifer(idx: number) {
        return "RankBottomItem"
    }
    getCellView(idx: number, identifer: string) {
        return instantiate(this.pfb_rank_item).getComponent(AssociationRankBottomItem);
    }
    GetCellData(idx: number) {
        return { rankData: this.rank_list[idx], index: idx, view_type: this.view_type };
    }
    createMyRank() {
        const roleData = this.getMyData();
        if(roleData){
            this.setMyRank(roleData.data, roleData.ranking)
        }else{
            const rankData = this.createDataByRankId()
            this.setMyRank(rankData, -1)
        }
    }
    // 获取当前自己的数据
    getMyData(){
        let allRank = this.top_list.concat(this.rank_list);
        if(this.view_type===1){
            for(let i=0;i<allRank.length;i++){
                const roleData: proto.ISimpleRank = allRank[i];
                if(roleData.simple.id===RoleData.ins.id){
                    return {data:roleData,ranking:i}
                }
            }
        }else if(this.view_type===2){
            for(let i=0;i<allRank.length;i++){
                const roleData: proto.IGuildBossRank = allRank[i];
                if(roleData.guild.simple.id===AssociationData.ins.getAssocitionSimpleInfo().id){
                    return {data:roleData,ranking:i}
                }
            }
        }
    }
    setMyRank(rankData: proto.ISimpleRank | proto.IGuildBossRank,rankLevel: number) {
        this.node_my_rank_item.UpdateContent({ rankData: rankData, index: rankLevel + 1, view_type: this.view_type, isSelf: true })
        this.node_my_rank_item.setPlayerMyRank(rankLevel + 1);
    }
    createDataByRankId() {
        let data = null;
        switch (this.view_type) {
            case 1:
                data = new proto.SimpleRank();
                data.score = 0;
                data.simple = new proto.SimpleRole();
                data.simple.id = RoleData.ins.id;
                data.simple.level = RoleData.ins.level;
                data.simple.name = RoleData.ins.name;
                data.simple.powerScore = RoleData.ins.powerScore;
                data.simple.headIcon = RoleData.ins.avatarInfo.headIcon;
                data.simple.headFrame = RoleData.ins.avatarInfo.headFrame;
                break;
            case 2:
                data = new proto.GuildBossRank();
                data.score = 0;
                data.members = 0;
                data.guild = AssociationData.ins.getAssocitionInfo()
                break;
            default:
                break;
        }
        return data;
    }
}


