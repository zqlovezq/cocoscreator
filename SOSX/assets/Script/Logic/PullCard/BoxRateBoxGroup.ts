/*
 * @Descripttion: 宝箱概率宝箱组
 */

import { tab } from "../../Table/table_gen";
import { isValidObj, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import { checkIconPathIsValid } from "../Common/SeasonRankCommonFunc";
import { LoadResAsync, showPopLayerV2 } from "../Utils/GameUtils";
import BoxRateDetailPopLayer from "./BoxRateDetailPopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BoxRateBoxGroup extends cc.Component {

    @property(cc.Node)
    node_box_1: cc.Node = null;

    @property(cc.Node)
    node_box_2: cc.Node = null;

    @property(cc.Node)
    node_box_3: cc.Node = null;

    @property(cc.Sprite)
    spr_box_icon_1: cc.Sprite = null;

    @property(cc.Sprite)
    spr_box_icon_2: cc.Sprite = null;

    @property(cc.Sprite)
    spr_box_icon_3: cc.Sprite = null;

    @property(cc.Label)
    lbl_title_1: cc.Label = null;

    @property(cc.Label)
    lbl_title_2: cc.Label = null;

    @property(cc.Label)
    lbl_title_3: cc.Label = null;

    private _box_id_to_idx_map: Map<number, number> = new Map<number, number>();
    private _box_icon_list: cc.Sprite[] = [];
    private _box_node_list: cc.Node[]   = [];
    private _box_title_list: cc.Label[] = [];
    private _season_level: number = kOneNumber;

    onLoad () {
        this.initBoxIconList();
    }

    onDestroy(){
        this.cleanData();
    }
    
    private cleanData(){
        this._box_icon_list  = [];
        this._box_title_list = [];
        this._box_id_to_idx_map.clear();
    }

    public initData(boxIDArr: number[], seasonLv: number){
        this._season_level = seasonLv;
        
        let boxIDArrLen = boxIDArr.length;
        for(let idx = kZeroNumber; idx < boxIDArrLen; idx++){
            this._box_id_to_idx_map.set(idx, boxIDArr[idx]);
            this._box_node_list[idx].active = true;
            this.groupBoxIconPath(boxIDArr[idx], this._box_icon_list[idx], this._box_title_list[idx]);
        }
    }

    /* 初始化宝箱ICON列表
     */
    private initBoxIconList(){
        this.cleanData();
        this._box_icon_list.push(this.spr_box_icon_1);
        this._box_icon_list.push(this.spr_box_icon_2);
        this._box_icon_list.push(this.spr_box_icon_3);
        this._box_title_list.push(this.lbl_title_1);
        this._box_title_list.push(this.lbl_title_2);
        this._box_title_list.push(this.lbl_title_3);
        this._box_node_list.push(this.node_box_1);
        this._box_node_list.push(this.node_box_2);
        this._box_node_list.push(this.node_box_3);
        
        this.node_box_1.active = false;
        this.node_box_2.active = false;
        this.node_box_3.active = false;
    }

    /* 组织宝箱图标路径
     */
    private groupBoxIconPath(boxID: number, sprBox: cc.Sprite, lblTitle: cc.Label){
        let boxTab = tab.Data.BoxTableByBoxID.getValue(boxID);
        if(isValidObj(boxTab)){
            this.setBoxName(boxTab.BoxName, lblTitle)
            if(!checkIconPathIsValid(boxTab.ItemIcon)){return;}
            this.setBoxIcon(boxTab.ItemIcon, sprBox);
        }
    }

    /* 设置宝箱名称
     */
    private setBoxName(name: string, lblTitle: cc.Label){
        lblTitle.string = name;
    }

    /* 设置宝箱ICON
     */
    private async setBoxIcon(icon: string, sprBox: cc.Sprite){
        let sf = await LoadResAsync(icon, cc.SpriteFrame)
        if(sf) {
            sprBox.spriteFrame = sf;
        }
        sprBox.node.scale = 1;
    }

    /* 打开宝箱事件
     */
    public onClickOpenBox(event: Event, data: any){
        let idx = Number(data);
        if(this._box_id_to_idx_map.has(idx)){
            showPopLayerV2("prefab/BoxRateDetailPopLayer", BoxRateDetailPopLayer).then(layer =>{
                layer.initData(this._box_id_to_idx_map.get(idx), this._season_level);
            });
        }
    } 
}
