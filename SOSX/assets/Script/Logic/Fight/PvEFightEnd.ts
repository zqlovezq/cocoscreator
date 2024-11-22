
import Analytics, { CAEvtID, CAEvtName } from "../../../Update/Analytics";
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { addFriend, isValidObj, kNoneString } from "../Common/CommonInterface";
import ManagerShareType from "../Common/ManagerShareType";
import Role from "../Common/Role";
import ShareBtnModel from "../Common/ShareBtnModel";
import LoadingPrefab from "../Loading/LoadingPrefab";
import LoadingScene from "../Loading/LoadingScene";
import { LoadResAsync, LoadScene, showPopLayerV2 } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import Sound, { PlaySound } from "../Utils/Sound";
import FightDataStatistics, { IFightDamageData } from "./FightDataStatistics";
import FightMsgManager from "./FightMsgManager";
import FightRewardCell from "./FightRewardCell";
import FightShowPlayer from "./FightShowPlayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PvEFightEnd extends PopLayer {

    @property(sp.Skeleton)
    spineEnd:sp.Skeleton = null;

    @property(cc.Prefab)
    prefabPlayer: cc.Prefab = null;

    @property(cc.Layout)
    bossLayout:cc.Layout = null;

    @property(cc.Prefab)
    prefabReward: cc.Prefab = null;

    @property(cc.Layout)
    rewardLayout:cc.Layout = null;

    @property(cc.Node)
    noBoxSpace:cc.Node = null;

    @property(cc.Label)
    lblWave:cc.Label = null;
    
    @property(cc.Button)
    btn_add_friend: cc.Button = null;

    @property(cc.Button)
    btn_fight_data: cc.Button = null;

    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(ShareBtnModel)
    node_share_btn: ShareBtnModel = null;
    
    private msg_data: proto.IMsg_FightEnd;
    private _self_damage_list: IFightDamageData[]  = [];
    private _other_damage_list: IFightDamageData[] = [];

    onLoad () {
        this.btn_add_friend.node.on("click", ()=>{
            let bValidRoleID = isValidObj(FightMsgManager.Instance.otherFightData.roleId);
            addFriend(FightMsgManager.Instance.otherFightData.roleId, 
                bValidRoleID ? FightMsgManager.Instance.otherFightData.name : kNoneString);
        }, this);
        this.btn_add_friend && (this.btn_add_friend.node.active = Role.Instance.IsGuideFinished());
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this, true)

        this.btn_fight_data.node.on("click", this.onClickOpenDamage, this);
        this.btn_fight_data.node.active = Role.Instance.IsGuideFinished();
        this.node_share_btn.initData(tab.SharedType.SharedType_PVE);
    }

    onTouchBegan(event){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_FightRewardCellHideTips, null)
    }

    public async setFightEndData(data: proto.IMsg_FightEnd) {
        this.msg_data = data;
        let firstAnimationName = "coopwin";
        let secondAnimationName = "coopwinloop";
        PlaySound("PvPWin")
        PlaySound("CrowdWin")

        this.spineEnd.setAnimation(0, firstAnimationName, false);
        this.spineEnd.addAnimation(0, secondAnimationName, true)
        this.scheduleOnce(()=>{
            // 设置角色名字
            this.setAttachedNode(this.spineEnd, "text1", FightMsgManager.Instance.otherFightData.name
                , FightMsgManager.Instance.otherFightData.allianceName
                , FightMsgManager.Instance.otherFightData.allianceIcon);
            this.setAttachedNode(this.spineEnd, "text2", FightMsgManager.Instance.myFightData.name
                , FightMsgManager.Instance.myFightData.allianceName
                , FightMsgManager.Instance.myFightData.allianceIcon);
        }, 1);

        //boss
        if(data.killedBoss && data.killedBoss.length > 0) {
            this.schedule(()=>{
                let bossID = data.killedBoss.shift()
                let bossData = tab.Data.EnemyTableByID.getValue(bossID)
                if(bossData) {
                    LoadResAsync(bossData.Icon, cc.SpriteFrame).then(sf=>{
                        let sp = new cc.Node().addComponent(cc.Sprite)
                        sp.sizeMode = cc.Sprite.SizeMode.RAW;
                        sp.spriteFrame = sf;
                        // sp.node.anchorY = 1;
                        this.bossLayout.node.addChild(sp.node)
    
                        if(this.bossLayout.node.children.length >= 10 
                            && this.bossLayout.type != cc.Layout.Type.GRID) {
                            this.bossLayout.type = cc.Layout.Type.GRID;
                            this.bossLayout.node.anchorY = 1;
                        }
                    })
                }
            }, 0.2, data.killedBoss.length, 1.5)
        }

        //奖励
        this.rewardLayout.node.removeAllChildren()
        for(let reward of data.rewards) {
            this.setReward(reward);
        }
        if(data.noBoxSpace) {
            this.noBoxSpace.active = true;
        }

        this.lblWave.string = `${data.waveNum}`
        Role.Instance.FightType = data.fightType
        Role.Instance.AddCup = data.changeCup; 
        Role.Instance.AddShanDian = data.addLighting; 
        this.groupDamageData();
    }
    
    start () {
        // //for test
        // this.scheduleOnce(()=>{
        //     let data = new proto.Msg_FightEnd()
        //     let bossArray = [100, 101, 104]
        //     data.bossID = [];
        //     for(let i = 0; i < 8; i++) {
        //         data.bossID = data.bossID.concat(bossArray)
        //     }
        //     data.rewards = [
        //         {rewardType:tab.RewardType.RewardType_ItemType, rewardId:1, rewardCount:1},
        //         {rewardType:tab.RewardType.RewardType_ItemType, rewardId:2, rewardCount:2},
        //         {rewardType:tab.RewardType.RewardType_ItemType, rewardId:3, rewardCount:3},
        //         {rewardType:tab.RewardType.RewardType_BoxType,  rewardId:10001},
        //     ]
        //     data.noBoxSpace = true;
        //     this.setFightEndData(data, "玩家1", "玩家2")
        // }, 0.2)
        this.btn_closed.node.active = true;
        this.node_share_btn.node.active = Role.Instance.IsGuideFinished() && !ManagerShareType.getInstance().getIsShared(tab.SharedType.SharedType_PVE);
        //上报打点数据
        //Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.PveParticipation);/* zhibo-@20230410 for <删除打点> */
    }

    private setAttachedNode(skel: sp.Skeleton, attachName: string, playerName:string, allianceName?:string, allianceIcon?:number) {
        let attachUtil: sp.sp.AttachUtil = skel.attachUtil;
        attachUtil.generateAllAttachedNodes();
        let boneNodes = attachUtil.getAttachedNodes(attachName);
        if (boneNodes.length > 0) {
            let firstNode = boneNodes[0]; // 取第一个骨骼挂点
            if (firstNode) {
                let playerInfo = cc.instantiate(this.prefabPlayer).getComponent(FightShowPlayer);
                if(playerInfo) {
                    playerInfo.setData(playerName, allianceName, allianceIcon)
                    firstNode.addChild(playerInfo.node);
                }  
            }
        }
    }

    private setReward(data:proto.IRewardSimpleInfo) {
        let icon:string
        let count:number
        if(data.rewardType == tab.RewardType.RewardType_ItemType) {
            let itemData = tab.Data.ItemTableByID.getValue(data.rewardId)
            if(!itemData) {
                return;
            }
            icon = itemData.Icon;
            count = data.rewardCount

            if(data.rewardId == proto.ConstItemID.CTI_Gold) {
                Role.Instance.addGold = data.rewardCount; //记录一下金币
            }
        } else if(data.rewardType == tab.RewardType.RewardType_BoxType) {
            let boxData = tab.Data.BoxTableByBoxID.getValue(data.rewardId);
            if(!boxData) {
                return;
            }
            icon = boxData.ItemIcon;
        }

        if(!icon) {
            return;
        }

        let rewardCell = cc.instantiate(this.prefabReward).getComponent(FightRewardCell);
        if (rewardCell) {
            this.rewardLayout.node.addChild(rewardCell.node);
            rewardCell.setIcon(icon);
            rewardCell.setTxt(`${count}`);
            if(data.rewardType == tab.RewardType.RewardType_ItemType) {
                rewardCell.setItemInfo(data)
            }
        }
    }

    onCloseClick() {
        LoadScene('LoadingScene', (error, scene:cc.Scene)=>{
            let loadingTs = scene.children[0].getComponent(LoadingScene);
            let loading = null;
            loadingTs.setLoading(false);
            loading = scene.getComponentInChildren(LoadingPrefab)
            loading.loadRes('MainScene', null, async ()=>{
                loading.enterScene('MainScene');
            }, false);
        });
    }

    /* 组织敌我双方伤害数据
     */
     private groupDamageData(){
        this._self_damage_list = []
        for(let data in this.msg_data.myDamage.damageRecord){
            this._self_damage_list.push({cardID: Number(data), damageVal: Number(this.msg_data.myDamage.damageRecord[data])});   
        }

        this._other_damage_list = []
        for(let data in this.msg_data.otherDamage.damageRecord){
            this._other_damage_list.push({cardID: Number(data), damageVal: Number(this.msg_data.otherDamage.damageRecord[data])});   
        }
    }

    /* 
     */
    private onClickOpenDamage(){
        let self = this;
        showPopLayerV2("prefab/FightDataStatistics", FightDataStatistics).then(layer =>{
            layer.initData( self._self_damage_list, 
                            self._other_damage_list, 
                            self.msg_data.waveNum, 
                            self.msg_data.isWin, false);
        });
    }
}
