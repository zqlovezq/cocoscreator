import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import PopLayer from "../Utils/PopLayer";
import CommonItem from "./CommonItem";
import SmallPortrait from "./SmallPortrait";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GetItem extends PopLayer {

    @property(cc.Button)
    m_btn_ok: cc.Button = null;

    @property(cc.ScrollView)
    m_srv:cc.ScrollView = null;

    @property(cc.Button)
    m_AdDouble: cc.Button = null;

    @property(cc.Node)
    m_doubleSpine: cc.Node = null;

    @property(cc.Prefab)
    pre_Card:cc.Prefab = null;

    @property(cc.Prefab)
    pre_item:cc.Prefab = null;

    protected m_doubleCall:Function = null

    protected m_itemArry:proto.IItemSimpleInfo[] = [];

    /*  */
    onLoad () {
        this.m_AdDouble.node.on("click", this.onDoulbe, this)
        this.m_AdDouble.node.active = false

        this.m_btn_ok.node.on("click", this.onBtnOK, this);
        this.setClickHide();

        this.m_doubleSpine.active = false;
        //PlaySoundToKey(119);
        this.setCloseCallBack(() =>{

        });
    }

    /*  */
    public async setItemData(items:proto.IItemSimpleInfo[]){
        this.m_srv.content.removeAllChildren();
        for(let j=0; j<items.length; j++){
            for(let i = 0; i < items[j].itemCount; ++i){
                let itemTab = tab.Data.ItemTableByID.getValue(items[j].itemId);
                if (itemTab == null){
                    continue;
                }

                if (itemTab.Type == tab.ItemType.ItemType_Tower){
                    let iNode = cc.instantiate(this.pre_Card).getComponent(SmallPortrait);
                    if(iNode != null){
                        iNode.initWithStaticId(items[j].itemId, null);
                        this.m_srv.content.addChild(iNode.node);
                    }
                } else if (itemTab.Type == tab.ItemType.ItemType_GiftBag) {
                    let iNode = cc.instantiate(this.pre_item).getComponent(CommonItem);
                    if(iNode != null){
                        iNode.initWithStaticId(items[j].itemId);
                        this.node.addChild(iNode.node);
                    }
                }
            }
        }
    }

    /*  */
    // async setItemByMap(items: ObjMap<number, number>){
    //     for (let [staticId, count] of Array.from(items.entries())){
    //         let cell: itemNode = await LoadPreNode("common/itemNode_k", itemNode);
    //         if (cell){
    //             cell.setItemInfoByItemId(staticId, count);
    //             this.m_node_layout.node.addChild(cell.node);
    //         }
    //     }
    //     this.adpterScrollViewSize()
    // }

    onBtnOK(btn){
        this.hide();
    }

    setAwardDoubleCall(callback:Function) {
        this.m_doubleCall = callback
    }

    AwardDoubleShow(bshow:boolean){
        this.m_AdDouble.node.active = bshow
    }

    onDoulbe(btn) {
        if(this.m_doubleCall){
            this.m_doubleCall()
        }
    }

    playToDouble(){
        return;
        this.m_doubleSpine.active = true;
        let spine:sp.Skeleton = this.m_doubleSpine.getComponent(sp.Skeleton);
        if (spine) {
            spine.setAnimation(0, "animation", false);
            //PlaySoundToKey(123);
            spine.setCompleteListener(()=> {
                this.rewardDouble();
            })
        } else {
            this.rewardDouble();
        }
    }

    protected rewardDouble(){
        // let bPlay = false;
        // let itemnodes:itemNode[]
        // if(this.m_node_layout.node.childrenCount > 0) {
        //     itemnodes = this.m_node_layout.getComponentsInChildren(itemNode)
        // }
        // for (let i = 0; i < itemnodes.length; i++) {
        //     if (!bPlay) {
        //         bPlay = true;
        //         // 数字滚动音效 不论多少一起滚动，只播放一次
        //         //PlaySoundToKey(117);
        //     }
        //     itemnodes[i].playToDouble()
        // }
    }
}
