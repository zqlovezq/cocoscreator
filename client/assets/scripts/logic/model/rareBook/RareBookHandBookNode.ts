import { _decorator, Component, instantiate, Label, Node, Prefab } from 'cc';
import { RareBookData } from './RareBookData';
import { tab } from '../../../Table/table_gen';
import { RareBookInfo } from './RareBookInfo';
import { RareBookItem } from './RareBookItem';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { GameUtil } from '../../utils/GameUtil';
const { ccclass, property } = _decorator;

/**
 * 
 * RareBookHandBookItem
 * zhudingchao
 * Wed May 22 2024 11:19:11 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/rareBook/RareBookHandBookItem.ts
 *
 */

@ccclass('RareBookHandBookNode')
export class RareBookHandBookNode extends Component {
    @property(Label)
    scoreLab:Label=null;
    @property(Node)
    contentNode:Node=null;
    @property(Label)
    numLab:Label=null;
    @property(Node)
    currTargetNode:Node=null;
    private currTag:number=0;
    private itemPrefab:Prefab=null;
    private allData:Array<RareBookInfo>;
    private rareItems:Array<RareBookItem>=[];
    // private currTargetNode:Node;
    start() {

    }
    initView(itemPrefab:Prefab=null){

        this.allData=[];
        if(itemPrefab){
            this.itemPrefab=itemPrefab;
        }
        this.updateScore();
        this.allData=RareBookData.ins.getBookInfos(true);
        let count=0;
        for(let key in this.allData){
            if(this.allData[key].isLock){
                count++;
            }
        }
        // this.allData.sort((a,b)=>{
        //     if(a.isRedPoint&&b.isRedPoint){
        //         return b.bookTable.Aptitude-a.bookTable.Aptitude;
        //     }
        //     if(a.isRedPoint){
        //         return -1;
        //     }
        //     if(b.isRedPoint){
        //         return 1;
        //     }
        //     if(a.isLock&&b.isLock){
        //         return b.bookTable.Aptitude-a.bookTable.Aptitude;
        //     }
        //     if(a.isLock){
        //         return -1;
        //     }
        //     if(b.isLock){
        //         return 1;
        //     }
        //     return b.bookTable.Aptitude-a.bookTable.Aptitude;
        // })
        
        // let tables=tab.getData().BookTable;
        // for(let key in tables){
        //     let info=havaBooks.find(a=>a.itemId==tables[key].Id);
        //     if(!info){
        //         info=new RareBookInfo();
        //         info.initItemId(tables[key].Id);
        //     }
            
        //     this.allData.push(info);
        // }
        this.numLab.string=count+"/"+this.allData.length;
        this.initItems();


    }
 
    public updateScore() {
        this.scoreLab.string=GameUtil.convertNumber(RareBookData.ins.powerScore)+"";
    }
    updateItem(itemId:number){
         for(let key in this.rareItems){
            if(this.rareItems[key]&&this.rareItems[key].info.itemId==itemId){
                    this.rareItems[key].updateView();
            }
         }
    }
    initItems(){
        for(let key in this.rareItems){
            this.rareItems[key].node.active=false;
        }
        let index=0;
        for(let key in this.allData){
            if(this.currTag==0||this.allData[key].bookTable.Class==this.currTag){
                if(!this.rareItems[index]){
                    let node=instantiate(this.itemPrefab);
                    node.parent=this.contentNode;
                    this.rareItems.push(node.getComponent(RareBookItem));
                }
                this.rareItems[index].node.active=true;
                this.rareItems[index].initData(this.allData[key],true,this.onTouchItem,true,false,true);
                index++;
            }
          
            // this.rareItems[k
        }
    }
    onTouchItem=(info:RareBookInfo)=>{
        
          UIMgr.ins.show({ viewName: ViewName.RareBookDetailView,data:{"bookInfos":this.allData,"currInfo":info}})
        // UIMgr.ins.show({ viewName: ViewName.RareBookRewardPreviewPop})
        // UIMgr.ins.show({ viewName: ViewName.RareBookEquipPop,data:{"bookInfo":info}})
        //    UIMgr.ins.show({ viewName: ViewName.WeaponPop})
    }

    onClickToggle(event,type){
        type=Number(type);
        if(this.currTag!=type){
            this.currTag=type;
            this.initItems();
            if (this.currTargetNode) {
                this.currTargetNode.getChildByName("redNode").active = true;
            }
            event.target.getChildByName("redNode").active = false;
            this.currTargetNode = event.target;
        }

    }
  


}