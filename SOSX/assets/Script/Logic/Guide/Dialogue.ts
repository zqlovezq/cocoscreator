import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import HtmlTextParser from "../Utils/HtmlTextParser";
import { TextPrinter } from "../Utils/NewAction";

const {ccclass, property} = cc._decorator;

enum TalkStatus {
    None = 0,
    Showing,
    Printing,
    ShowComplete,
    Hiding,
}

const PrintWordDuration = 0.02

@ccclass
export default class Dialogue extends cc.Component {

    @property(cc.RichText)
    content:cc.RichText = null;

    @property(cc.Widget)
    offsetWidget:cc.Widget = null;

    @property(cc.Label)
    lbl_auto_closed: cc.Label = null;

    protected m_nPlayState:TalkStatus = TalkStatus.None;
    protected m_StoryArray:number[] = []
    protected m_HideCallback:Function;
    protected m_DialogueData:tab.GuideDialogueTable;
    protected m_ContentPos:cc.Vec2; //因为TextPrinter会改变位置，所以备份一下
    protected m_Modal :boolean = true;
    protected m_AutoHide: boolean = true;
    protected _parser:HtmlTextParser;

    onLoad() {
        this._parser = new HtmlTextParser()
        this.m_ContentPos = this.content.node.getPosition()

        this.node.on(cc.Node.EventType.TOUCH_START, (event:cc.Event)=>{
            switch(this.m_nPlayState) {
                case TalkStatus.ShowComplete:
                    if(this.m_StoryArray.length > 0) {
                        this.showNext();
                    } else {
                        //关闭
                        if(this.m_AutoHide) {
                            this.hide();
                        } else {
                            this.DoCallback()
                        }
                    }
                    break;
                case TalkStatus.Showing:
                case TalkStatus.Printing:
                    this.ShowComplete();
                    if(!this.m_Modal && this.m_StoryArray.length == 0) {
                        this.DoCallback()
                    }
                    break;
            }
            // event.stopPropagation();
        }, this)
    }

    start () {
        Net.listenLoaclMessage(LOCAL_MESSAGE.HideDialogue, ()=>{
            this.hide()
        }, this)
    }

    public showByArray(stroyIdArray:number[], hideCallback:Function) {
        this.m_StoryArray = stroyIdArray.slice();
        this.m_HideCallback = hideCallback;
        this.showNext();
    }

    private showNext() {
        let id = this.m_StoryArray.shift()
        this.showByID(id, this.m_HideCallback)
    }
    
    public showByID(id: number, callback:Function) {
        this.m_HideCallback = callback;

        let dialogueData = tab.Data.GuideDialogueTableByDialogueID.getValue(id)
        if(!dialogueData) {
            this.hide()
            return
        }

        switch(dialogueData.OffsetType) {
        case tab.OffsetType.OffsetType_Top:
            this.offsetWidget.isAlignTop = true;
            this.offsetWidget.isAlignBottom = false;
            this.offsetWidget.top = dialogueData.YOffset;
            break;
        case tab.OffsetType.OffsetType_Bottom:
            this.offsetWidget.isAlignTop = false;
            this.offsetWidget.isAlignBottom = true;
            this.offsetWidget.bottom = dialogueData.YOffset;
            break;
        default:
            this.offsetWidget.isAlignTop = false;
            this.offsetWidget.isAlignBottom = false;
            this.offsetWidget.node.y = dialogueData.YOffset;
            break;
        }

        this.m_nPlayState = TalkStatus.Showing;
        this.m_DialogueData = dialogueData
        this.PrintWords(dialogueData.Content)

        Net.pushLoaclMessage(LOCAL_MESSAGE.DialogueStart, id)
    }

    protected PrintWords(content:string) {
        this.m_nPlayState = TalkStatus.Printing;

        let length = 0
        let results = this._parser.parse(content)
        if(results) {
            for(let ret of results) {
                if(ret.text) {
                    length += ret.text.length
                }
            }
        } else {
            length = content.length
        }

        this.content.node.runAction(cc.sequence(
            new TextPrinter(length * PrintWordDuration, content)
            ,cc.callFunc(()=>{ 
                if(this.m_nPlayState == TalkStatus.Printing) {
                    this.m_nPlayState = TalkStatus.ShowComplete;
                }
            }))
        );
        // this.playVoice();
    }

    protected ShowComplete() {
        if(!this.m_DialogueData) {
            return
        }

        this.m_nPlayState = TalkStatus.ShowComplete;
        this.content.node.stopAllActions()
        this.content.string = "";
        this.content.string = this.m_DialogueData.Content;
        this.content.node.setPosition(this.m_ContentPos)
    }

    protected DoCallback() {
        if(this.m_HideCallback) {
            let callback = this.m_HideCallback;
            this.m_HideCallback = null;
            callback();
        }
    }

    protected hide() {
        this.DoCallback()
        this.node.removeFromParent()
        this.node.destroy();
    }

    public set Modal(value:boolean) {
        this.m_Modal = value;

        //_touchListener在调用过on后才会有值
        let node:any = this.node //这样写只写为了别让ts提示错误
        if(node._touchListener) {
            node._touchListener.setSwallowTouches(value)
        }
    }
    public set AutoHide(value:boolean) {
        this.m_AutoHide = value;
        this.lbl_auto_closed.node.active = value;
    }
}
