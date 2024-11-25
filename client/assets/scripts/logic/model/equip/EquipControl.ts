import { Node, _decorator, js, log, sys } from "cc";
import { AbsControl } from "../../../framework/base/IAbs";
import { EventMgr } from "../../mgr/EventMgr";
import { proto } from "client_protocol";
import { EquipData } from "./EquipData";
import { Net } from "../../net/Net";
import { tab } from "../../../Table/table_gen";
import { LocalEvent } from "../../define/LocalEvent";
import { ShowTips } from "../../mgr/UIMgr";
import { LangMgr } from "../../mgr/LangMgr";

const { ccclass, property } = _decorator;

/** 装备 */
export class EquipControl extends AbsControl {

    private static _instance: EquipControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new EquipControl();
        }
        return this._instance;
    }

    register(): void {
        EventMgr.onMsg(proto.Ptl.ChangeEquipRsp, this.on_s2c_ChangeEquipRsp, this);
        EventMgr.onMsg(proto.Ptl.EnhanceEquipRsp, this.on_s2c_EnhanceEquipRsp, this);
        EventMgr.onMsg(proto.Ptl.RefineEquipRsp, this.on_s2c_RefineEquipRsp, this);
        EventMgr.onMsg(proto.Ptl.UpdateHeroMasterLv, this.on_s2c_UpdateEquipMasterRsp, this);
        EventMgr.onMsg(proto.Ptl.DecomposeEquipRsp, this.on_s2c_DecomposeEquipRsp, this)
        EventMgr.onMsg(proto.Ptl.FeatherRecastRsp, this.on_s2c_FeatherRecastRsp, this)
        EventMgr.onMsg(proto.Ptl.FeatherRecastConfirmRsp, this.on_s2c_FeatherRecastConfirmRsp, this)
        EventMgr.onMsg(proto.Ptl.SwitchEquipRsp, this.on_s2c_SwitchEquipRsp, this);
        EventMgr.onMsg(proto.Ptl.UndressEquipRsp, this.on_s2c_UndressEquipRsp, this);
        EventMgr.onMsg(proto.Ptl.LockEquipRsp, this.on_s2c_LockEquipRsp, this);
       

    }

    requestEquips() {

    }
    /**
     * 请求替换 穿戴 装备
     */
    reqChangEquips(heroClass: number, euqipIds: Array<number>) {
        let msg = new proto.Msg_ChangeEquipReq();
        msg.equipList = euqipIds;
        msg.heroClass = heroClass;
        Net.Send(proto.Ptl.ChangeEquipReq, msg)
    }
    /**请求一键穿戴装备 */
    reqOnekeyEquips(heroClass: number) {
        let equipList = EquipData.ins.getEquipBagByHeroClass(heroClass);
        let types = [tab.EquipType.EquipType_Gloves, tab.EquipType.EquipType_Clothing, tab.EquipType.EquipType_Cloak, tab.EquipType.EquipType_Hat]
        let slots = EquipData.ins.getEquipContainerDataByHeroClass(heroClass).slotData;
        let ids = [];
        for (let key in types) {
            let type = types[key];
            let slot = slots[type];
            if (slot && slot.equipId != 0) {
                let equipInfo = EquipData.ins.getEquipInfoById(slot.equipId);
                let currInfo = null;
                for (let value of equipList) {
                    if (value.equipTable.Type == type) {
                        if (value.score > equipInfo.score) {
                            if (currInfo) {
                                if (value.score > currInfo.score) {
                                    currInfo = value;
                                }
                            } else {
                                currInfo = value;
                            }
                        }
                    }
                }
                if (currInfo) {
                    ids.push(currInfo.id);
                }
            } else {
                let currInfo = null;
                for (let value of equipList) {
                    if (value.equipTable.Type == type) {
                        if (currInfo) {
                            if (value.score > currInfo.score) {
                                currInfo = value;
                            }
                        } else {
                            currInfo = value;
                        }
                    }

                }
                if (currInfo) {
                    ids.push(currInfo.id);
                }
            }
        }
        if (ids.length > 0) {
            this.reqChangEquips(heroClass, ids);
        }else{
            //ShowTips("没有可穿戴的装备")
            ShowTips(LangMgr.getLab("ui_equip_28"))
        }

    }
    /**
     * 请求强化装备
     */
    reqEnhanceEquips(heroClass: number, slotList: Array<number>) {
        let msg = new proto.Msg_EnhanceEquipReq();
        msg.slotList = slotList;
        msg.heroClass = heroClass;
        Net.Send(proto.Ptl.EnhanceEquipReq, msg)
    }
    /**请求添加测试装备 */
    reqAddTestEquips() {
        // let msg = new proto.Msg_FinishStageReq;
        // Net.Send(proto.Ptl.FinishStageReq, msg);
    }

    /**
    * 请求淬炼装备
    */
    reqRefineEquips(heroClass: number, slotIndex: number) {
        let msg = new proto.Msg_RefineEquipReq();
        msg.slotIndex = slotIndex;
        msg.heroClass = heroClass;
        Net.Send(proto.Ptl.RefineEquipReq, msg)
    }
    /**
    * 请求分解装备
    */
    reqDecomposeEquips(equipIds: Array<number>) {
        log("分解---------", equipIds)
        let msg = new proto.Msg_DecomposeEquipReq();
        msg.equipList = equipIds;
        Net.Send(proto.Ptl.DecomposeEquipReq, msg)
    }

    /**
    * 请求羽毛重铸
    */
    reqFeatherRecast(equipId: number) {
        log("重铸---------", equipId)
        let msg = new proto.Msg_FeatherRecastReq();
        msg.equipId = equipId;
        Net.Send(proto.Ptl.FeatherRecastReq, msg)
    }
    /**
    * 请求羽毛重铸
    */
    reqFeatherRecastConfirmReq(equipId: number,result: proto.Msg_FeatherRecastConfirmReq.ConfirmResult) {
        log("重铸---------结果------", equipId)
        let msg = new proto.Msg_FeatherRecastConfirmReq();
        msg.equipId = equipId;
        msg.result=result;
        Net.Send(proto.Ptl.FeatherRecastConfirmReq, msg)
    }
    /**
     * 请求交换装备
     * @param id1 
     * @param id2 
     * @param heroClass1 
     * @param heroClass2 
     */
    reqSwitchEquip(id1:number,id2:number,heroClass1:number,heroClass2:number){
        let msg = new proto.Msg_SwitchEquipReq();
        msg.equipId1 = id1;
        msg.equipId2=id2;
        msg.heroClass1=heroClass1;
        msg.heroClass2=heroClass2;
        Net.Send(proto.Ptl.SwitchEquipReq, msg)
    }

    reqUndressEquip(id:number,heroClass:number){
        let msg = new proto.Msg_UndressEquipReq();
        msg.equipId = id;
        msg.heroClass=heroClass;
        Net.Send(proto.Ptl.UndressEquipReq, msg)
    }
    reqLockEquip(id:number,isLock:boolean){
        let msg = new proto.Msg_LockEquipReq();
        msg.equipId = id;
        msg.state=isLock?1:0;
        Net.Send(proto.Ptl.LockEquipReq, msg)
    }

    /**
     * 替换装备成功
     * @param msg 
     */
    on_s2c_ChangeEquipRsp(msg: proto.Msg_ChangeEquipRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            EquipData.ins.changeEquip(msg.equipList, msg.heroClass);
        }


    }
    /**
     * 强化装备成功
     * @param msg 
     */
    on_s2c_EnhanceEquipRsp(msg: proto.Msg_EnhanceEquipRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            EquipData.ins.updateEquipSlotData(msg.heroClass, msg.updateData);
         
        }

    }
    /**
    * 淬炼装备成功
    * @param msg 
    */
    on_s2c_RefineEquipRsp(msg: proto.Msg_RefineEquipRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            EquipData.ins.updateEquipSlotData(msg.heroClass, [msg.updateData]);
            
        }

    }
    /**
     * 更新装备大师数据
     * @param msg 
     */
    on_s2c_UpdateEquipMasterRsp(msg: proto.Msg_UpdateHeroMasterLv) {
        EquipData.ins.updateEquipMasterData(msg.heroClass, msg.masterData);
    }
    /**
    * 分解装备成功
    * @param msg 
    */
    on_s2c_DecomposeEquipRsp(msg: proto.Msg_DecomposeEquipRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            // EquipData.ins.removeEquipByIds(msg.equipList);
        }
        // EquipData.ins.updateEquipMasterData(msg.heroClass,msg.masterData);
    }

    /**
     * 羽毛重铸
     * @param msg 
     */
    on_s2c_FeatherRecastRsp(msg: proto.Msg_FeatherRecastRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            EquipData.ins.updateEquipInfo(msg.data as proto.EquipData);
        }
        // EquipData.ins.updateEquipMasterData(msg.heroClass,msg.masterData);
    }
    /**
    * 羽毛重铸
    * @param msg 
    */
    on_s2c_FeatherRecastConfirmRsp(msg: proto.Msg_FeatherRecastConfirmRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            EquipData.ins.updateEquipInfo(msg.data as proto.EquipData);
        }
        // EquipData.ins.updateEquipMasterData(msg.heroClass,msg.masterData);
    }
    
    on_s2c_SwitchEquipRsp(msg: proto.Msg_SwitchEquipRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            let id1=msg.equipId2;
            let id2=msg.equipId1; 
            //req的参数rsp时会原封返回给前端，前端需要根据回传自己做脱卸或穿戴操作

           EquipData.ins.switchEquip(id1,id2,msg.heroClass1,msg.heroClass2);
        //    if(msg.equipId1&&msg.equipId1!=0){
            
        //    }
           EventMgr.emitLocal(LocalEvent.Equip_Chang,msg.heroClass1,id1);
           EventMgr.emitLocal(LocalEvent.Equip_Chang,msg.heroClass2,id2);
            // EquipData.ins.updateEquipInfo();
        }
        // EquipData.ins.updateEquipMasterData(msg.heroClass,msg.masterData);
    }
    
    on_s2c_UndressEquipRsp(msg: proto.Msg_UndressEquipRsp){
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            // EquipData.ins.switchEquip(msg.equipId1,msg.equipId2,msg.heroClass1,msg.heroClass2)
             // EquipData.ins.updateEquipInfo();
             EquipData.ins.undressEquip(msg.equipId,msg.heroClass);
             EventMgr.emitLocal(LocalEvent.Equip_Chang,msg.heroClass,msg.equipId);
         }
    }
     
    on_s2c_LockEquipRsp(msg: proto.Msg_LockEquipRsp){
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            // EquipData.ins.switchEquip(msg.equipId1,msg.equipId2,msg.heroClass1,msg.heroClass2)
             // EquipData.ins.updateEquipInfo();
             EquipData.ins.lockEquip(msg.equipId,msg.state==1);
            //  EventMgr.emitLocal(LocalEvent.Equip_Chang,msg.heroClass,msg.equipId);
         }
    }
    
}