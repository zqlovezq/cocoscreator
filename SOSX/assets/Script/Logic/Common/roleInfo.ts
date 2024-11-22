/*
 * @Descripttion: 
 */
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import DrawLayer from "../Activity/Draw/DrawLayer";
import { LoadResAsync, ShowTips } from "../Utils/GameUtils";
import { checkRechargeInterfaceIsOpen, isValidObj, kOneNumber, kZeroNumber, ShopItemType } from "./CommonInterface";
import Role from "./Role";

const {ccclass, property} = cc._decorator;

@ccclass
export default class roleInfo extends cc.Component {
    @property(cc.Label)
    zuanshi:cc.Label = null;

    @property(cc.Label)
    jinbi:cc.Label = null;

    @property(cc.Node)
    node_btn_diamond: cc.Node = null;

    @property(cc.Node)
    node_btn_gold_coin: cc.Node = null;

    @property(cc.Sprite)
    demond_coin: cc.Sprite = null

    @property(cc.Sprite)
    gold_coin: cc.Sprite = null

    @property(cc.Node)
    demond_node: cc.Node = null

    @property(cc.Node)
    gold_node: cc.Node = null
    
    getDemondWorldPos():cc.Vec2{
        return this.demond_coin.node.convertToWorldSpaceAR(cc.Vec2.ZERO)
    }

    getGoldWorldPos():cc.Vec2{
        return this.gold_coin.node.convertToWorldSpaceAR(cc.Vec2.ZERO)
    }

    scaleDemondNode(){
        this.demond_node.runAction(cc.sequence(cc.scaleTo(0.3,1.2,1.2),cc.scaleTo(0.3,1,1)))
    }

    scaleGoldNode(){
        this.gold_node.runAction(cc.sequence(cc.scaleTo(0.3,1.2,1.2),cc.scaleTo(0.3,1,1)))
    }

    onLoad () {
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateGold, (param: any)=>{
            this.resetMoney();
        }, this);

        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_updateDiamond, (param: any)=>{
            this.resetMoney();
        }, this);

        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateRoleExpAndLevel, (param: any)=>{
            this.setRoleLevelAndExp();
        }, this);
        
        this.node_btn_diamond.on("click", this.onClickAddDiamond, this);
        this.node_btn_gold_coin.on("click", this.onClickAddGoldCoin, this);
        this.zuanshi.node.on(cc.Node.EventType.TOUCH_END, this.onClickAddDiamond, this);
        this.jinbi.node.on(cc.Node.EventType.TOUCH_END, this.onClickAddGoldCoin, this);

        this.demond_coin.node.on(cc.Node.EventType.TOUCH_START, this.onTocuhdemond_coin, this)
        this.gold_coin.node.on(cc.Node.EventType.TOUCH_START, this.onTocuhgold_coin, this)

        let bOpenRecharge = checkRechargeInterfaceIsOpen();
        this.node_btn_diamond.active   = bOpenRecharge;
        this.node_btn_gold_coin.active = bOpenRecharge;
    }
    
    onTocuhdemond_coin(){
        if(!checkRechargeInterfaceIsOpen()){
            return;
        }
    }

    onTocuhgold_coin(){
        if(!checkRechargeInterfaceIsOpen()){
            return;
        }
    }

    start () {
        this.initData();
    }

    public async initData(){
        if (Role.Instance == null){
            return;
        }
        this.resetMoney();
        this.setRoleLevelAndExp();
    }

    protected resetMoney(){
        this.jinbi.string = String(Role.Instance.RoleData.gold);
        this.zuanshi.string = String(Role.Instance.RoleData.diamond);
    }

    private onClickAddGoldCoin(btn: cc.Button){
        if(Role.Instance.RoleGrade < kOneNumber){
            ShowTips("OpenConditionOfRankLv");
            return;
        }
        if(this.node.parent.name==="DrawLayer"){
            this.node.parent.getComponent(DrawLayer).setVisible(false);
        }
        
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_JumpShop, {shopItem: ShopItemType.ShopItemType_GoldCoin, bPlayEffect: false});
    }

    private onClickAddDiamond(btn: cc.Button){
        if(Role.Instance.RoleGrade < kOneNumber){
            ShowTips("OpenConditionOfRankLv");
            return;
        }
        if(this.node.parent.name==="DrawLayer"){
            this.node.parent.getComponent(DrawLayer).setVisible(false);
        }
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_JumpShop, {shopItem: ShopItemType.ShopItemType_Diamond, bPlayEffect: false});
    }

    /* 设置角色等级和经验值
     */
    private setRoleLevelAndExp(){
        let curLv          = Role.Instance.RoleData.level;
        let nextLv         = curLv + kOneNumber;
        let curExp         = Role.Instance.RoleData.exp;
        let molecularVal   = kZeroNumber;
        let denominatorVal = kOneNumber;
        let curLvExpTab    = tab.Data.RoleLevelTableByRoleLv.getValue(curLv);

        if(isValidObj(curLvExpTab)){
            molecularVal     = curExp - curLvExpTab.ExpLv;
            let nextLvExpTab = tab.Data.RoleLevelTableByRoleLv.getValue(nextLv);
            
            if(isValidObj(nextLvExpTab)){
                denominatorVal = nextLvExpTab.ExpLv - curLvExpTab.ExpLv;
            }else{
                denominatorVal = curLvExpTab.ExpLv;
            }
        } else {
            if(!cc.sys.isNative){
                throw new Error("当前等级都已经不在表中，赶紧给爷检查表去");
            }
            return;
        }
        let diffVal = molecularVal / denominatorVal;
    }

}
