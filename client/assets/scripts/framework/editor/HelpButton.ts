import { _decorator, Button, Component, EventHandler, Node } from 'cc';
import { ShowTips, UIMgr } from '../../logic/mgr/UIMgr';
import { ViewName } from '../../logic/define/ViewDefine';
import { LangMgr } from '../../logic/mgr/LangMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * CustomComponent
 * zhudingchao
 * Tue Jun 25 2024 17:59:21 GMT+0800 (中国标准时间)
 * db://assets/scripts/framework/editor/customComponent.ts
 *
 */

@ccclass('HelpButton')
export class HelpButton extends Button {
    
    @property({ visible: true, tooltip: '语言key' })
    worldKey:string="";

    @property({ tooltip: "备注", displayName: "备注" })
    desc: string = ""
    protected onLoad(): void {
       

    }
   
    start() {
        if(this.clickEvents.length==0){
            let event=new EventHandler()
            event.target=this.node;
            event.component="HelpButton"
            event.handler="onClickBtn"
            this.clickEvents.push(event);
        }
       
    }
    onClickBtn(){
        if(this.worldKey==""){
            ShowTips("未配置key");
            return ;
        }
        UIMgr.ins.show({viewName:ViewName.CommonHelpPop,data:{"content":LangMgr.getLab(this.worldKey)}});
    }

  
}