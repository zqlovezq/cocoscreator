import { _decorator, Component, Label, Node, ProgressBar, Sprite } from 'cc';
import { ComponentBase } from '../../../framework/base/ComponentBase';
import { tab } from '../../../Table/table_gen';
import LangLabel from '../../../framework/editor/lang/LangLabel';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * PrestigeBarItem
 * zhudingchao
 * Thu Jun 06 2024 10:01:03 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/prestige/PrestigeBarItem.ts
 *
 */

@ccclass('PrestigeBarItem')
export class PrestigeBarItem extends ComponentBase {
    @property(Node)
    selectNode:Node=null;
    @property(ProgressBar)
    bar:ProgressBar=null;
    @property(Node)
    btnNode:Node=null;
 
    @property(Node)
    redPoint:Node=null;
    @property(Label)
    nameLab:Label=null;
    private touchCallBack:Function;
    public table:tab.QuestLogTable;

    register(): void {
        
    }
    initData(isUnLock:boolean,value:number,table:tab.QuestLogTable){
        this.table=table;
        this.selectNode.active=false;
        if(!table){
            // this.selectNode.active=false;
            this.btnNode.active=false;
            this.bar.progress=value;
        }else{
            this.btnNode.active=true;
            this.bar.progress=value;
            this.btnNode.getComponent(Sprite).grayscale=!isUnLock;
            this.nameLab.string=LangMgr.getLab(table.Name);
            
        }
        
    }
    setTouchCallBack(touchCallBack:Function){
        this.touchCallBack=touchCallBack;
    }
    setSelectState(b:boolean){
        this.selectNode.active=b;

    }
    onClickBtn(){
        if(this.touchCallBack&&this.table){
            this.touchCallBack(this);
        }

    }

}