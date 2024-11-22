/*
 * @Descripttion: 公告内容模板
 */

import { isInteger, kFiveNumber, kNegativeOneNumber, kTenNumber, kTwoNumber, kZeroNumber } from "../Common/CommonInterface";

const {ccclass, property} = cc._decorator;

/**
 * 字体大小类型
 */
enum FontSize{
    FontSize26 = 26,
    FontSize30 = 30,
    FontSize40 = 40,
    FontSize50 = 50,
}

@ccclass
export default class NoticeContentPfb extends cc.Component {

    @property(cc.RichText)
    lbl_content_26: cc.RichText = null;

    @property(cc.RichText)
    lbl_content_30: cc.RichText = null;

    @property(cc.RichText)
    lbl_content_40: cc.RichText = null;

    @property(cc.RichText)
    lbl_content_50: cc.RichText = null;

    @property(cc.Sprite)
    spr_line: cc.Sprite = null;

    private _content_string: string;
    private _max_font_size: number = kTenNumber;
    private _bCenter: boolean = false;

    start () {

    }

    public initData(content: string, bVisibleLine: boolean = false){
        //this.spr_line.node.active = bVisibleLine;
        this._content_string = content;
        this.checkIsCenter();
        this.findMaxFontSize();
        this.switchWhichRichText();
        this.node.getComponent(cc.Layout).updateLayout();
    }

    /* 查找最大的字体 */
    private findMaxFontSize(){
        let idx = kZeroNumber;
        let fontSize = kZeroNumber;
        let subStr = "";
        while(idx != kNegativeOneNumber){
            idx = this._content_string.indexOf("size=", idx);
            if(idx != kNegativeOneNumber){
                idx += kFiveNumber;
                subStr = this._content_string.substr(idx, kTwoNumber);
                fontSize = parseInt(subStr);
                if(isInteger(fontSize)){
                    this._max_font_size = fontSize > this._max_font_size ? fontSize : this._max_font_size;
                }else{
                    cc.error("公告文本字体大小有错误！");
                    return;
                }
            }else{
                return;
            }
        }
    }

    /* 检测文本要不要居中
     */
    private checkIsCenter(){
        let idx = this._content_string.indexOf("<center>", 0);
        if(idx != kNegativeOneNumber){
            this._content_string.replace("<center>", "");
            this._bCenter = true;
            return;
        }

        this._bCenter = false;
    }

    /* 切换使用哪个RichText【主要是lineHeight不同】
     */
    private switchWhichRichText(){
        this.lbl_content_26.node.active = this._max_font_size <= FontSize.FontSize26;
        this.lbl_content_30.node.active = this._max_font_size <= FontSize.FontSize30 && this._max_font_size > FontSize.FontSize26;
        this.lbl_content_40.node.active = this._max_font_size <= FontSize.FontSize40 && this._max_font_size > FontSize.FontSize30;
        this.lbl_content_50.node.active = this._max_font_size > FontSize.FontSize40;

        this.lbl_content_26.node.active && (this.lbl_content_26.string = this._content_string);
        this.lbl_content_30.node.active && (this.lbl_content_30.string = this._content_string);
        this.lbl_content_40.node.active && (this.lbl_content_40.string = this._content_string);
        this.lbl_content_50.node.active && (this.lbl_content_50.string = this._content_string);

        this.lbl_content_26.node.active && this._bCenter && (this.lbl_content_26.horizontalAlign = 1);
        this.lbl_content_30.node.active && this._bCenter && (this.lbl_content_30.horizontalAlign = 1);
        this.lbl_content_40.node.active && this._bCenter && (this.lbl_content_40.horizontalAlign = 1);
        this.lbl_content_50.node.active && this._bCenter && (this.lbl_content_50.horizontalAlign = 1);
    }
}
