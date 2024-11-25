import { _decorator, Component, Label, Node } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import Http from '../../../net/Http';
import { LoginData } from '../../login/LoginData';
import { Func } from '../../../utils/Func';
import { RedMgr } from '../../../mgr/RedMgr';
import { RedDotType } from '../../../red/RedDotType';
import { RoleControl } from '../RoleControl';
const { ccclass, property } = _decorator;

/**
 * 
 * RoleInfoNoticePop
 * zhudingchao
 * Tue Aug 20 2024 14:11:24 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/role/roleInfo/RoleInfoNoticePop.ts
 *
 */

@ccclass('RoleInfoNoticePop')
export class RoleInfoNoticePop extends ViewPop {
    @property(Label)
    wordLab:Label=null;
    register(): void {
        
    }
    onShow(): void {
        let addr = LoginData.ins.loginServerTab.NoticeAddr;
        Http.request({
            host: addr,
            method: "GET",
            reqParam: "",
            cb: (responseJson) => {
                // console.log(responseJson)
                if (responseJson&&responseJson.length>0) {
                    let notices:Array<any>=responseJson;
                    
                    notices.sort((a,b)=>{
                        return b.created_at-a.created_at;
                    })

                    let newNotice=notices[0];
                    this.initView(newNotice);
                    // if (responseJson.ret == 0 && responseJson.data) {
                    //     console.log("公告 ",responseJson.data)
                    // }
                     
                }
               
            }
        })
    }
    initView(notice:any){
        this.wordLab.string=notice.content;
        Func.setItem("notice_created_at",notice.created_at);
        RoleControl.ins.noticeRed=false;
        RedMgr.refreshEvent(RedDotType.notice);
    }
 
}