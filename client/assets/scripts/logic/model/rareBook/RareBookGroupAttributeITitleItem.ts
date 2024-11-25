import { _decorator, Color, Component, instantiate, Label, Node, Prefab } from 'cc';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * RareBookGroupAttributeITitleItem
 * zhudingchao
 * Mon May 27 2024 17:18:11 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/rareBook/RareBookGroupAttributeITitleItem.ts
 *
 */

@ccclass('RareBookGroupAttributeITitleItem')
export class RareBookGroupAttributeITitleItem extends Component {
    @property(Label)
    titleLab:Label=null;
    @property(Label)
    numLab:Label=null;
    @property(Node)
    attributeNode:Node=null;
    @property(Prefab)
    attrItemPrefab:Prefab=null;

    initData(table:tab.BookSeriesTable,curNum:number,totoal:number){
        //this.titleLab.string=table.Level+"星融汇效果";
        this.titleLab.string = LangMgr.getCombineString("ui_rarebook_25",[table.Level]);
        this.numLab.string=curNum+"/"+totoal;
        this.attributeNode.removeAllChildren();
        if(table.Skill&&table.Skill.length>0){
            for(let key in table.SkillShow ){
          
                let item=instantiate(this.attrItemPrefab);
                item.parent=this.attributeNode;
                let lab=item.getChildByName("attr_label").getComponent(Label);
                lab.string=LangMgr.getLab(table.SkillShow[key]);
            }
        }
        for(let key in table.AttrType ){
            let type=table.AttrType[key];
            let value=table.AttrValue[key];
            let attTable=tab.getData().HeroAttrClientTableByType.getValue(type);
            let item=instantiate(this.attrItemPrefab);
            item.parent=this.attributeNode;
            let lab=item.getChildByName("attr_label").getComponent(Label);
            let vStr=attTable&&attTable.ShowPercent?(value/100)+"%":value+""
            lab.string=LangMgr.getLab(tab.AttrType[type])+"+"+vStr;
        }
        let cStr=""
        if(curNum>=totoal){
            cStr=tab.getData().GetKeyValue_ConfigTable().InterfaceTxtGreen;
            
        }else{
            cStr=tab.getData().GetKeyValue_ConfigTable().InterfaceTxtRed;
        }
        this.numLab.color=new Color().fromHEX(cStr);
    }

    updateView(curNum:number,totoal:number){
        this.numLab.string=curNum+"/"+totoal;
        let cStr=""
        if(curNum>=totoal){
            cStr=tab.getData().GetKeyValue_ConfigTable().InterfaceTxtGreen;
            
        }else{
            cStr=tab.getData().GetKeyValue_ConfigTable().InterfaceTxtRed;
        }
        this.numLab.color=new Color().fromHEX(cStr);
    }
}