import { Director, DynamicAtlasManager, JsonAsset, Node, Prefab, Scene, SpriteFrame, assert, assetManager, director, js, log, resources } from "cc";
import { AbsMgr } from "../../framework/base/IAbs";
import { LocalEvent } from "../define/LocalEvent";
import { EventMgr } from "./EventMgr";
import { ResMgr } from "./ResMgr";
import { UIMgr } from "./UIMgr";
import { tab } from "../../Table/table_gen";
String.prototype["format"] = function (arr: Array<any>) {
    if (arr.length === 0) {
        return String(this);
    }
    let reg = /(\{\d\})/;
    let r = this;
    while (reg.test(r)) {
        let index: any = RegExp.$1.slice(1, -1);
        r = r.replace(new RegExp("\\{" + index + "\\}", "g"), (index >= arr.length) ? "" : arr[index]);
    }
    return r;
};

const constKey: { txt: string } = {
    txt: ""
}
const prefix_path = "world_lang_"

enum LanguageType {
    EN = "En_us",//英文
    JP = "Jp_jp",//日文
    TW = "Zh_tw"//中文繁体
}

/**
 * 多语言管理
 */
export class LangMgr extends AbsMgr {

    private static _instance: LangMgr;
   
    public static get ins() {
        if (null == this._instance) {
            this._instance = new LangMgr();
        }
        return this._instance;
    }

    public nowPath = prefix_path
    private _currLanguageValue: string;
    nowSuffix:string
    init(): void {
        this._currLanguageValue = LanguageType.TW
        let str = ""
        switch (this._currLanguageValue) {
            case LanguageType.EN:
                str = "en"
                break;
            case LanguageType.JP:
                str = "jp"
                break;
            case LanguageType.TW:
                str = "cn"
                break;
            default:
                break;
        }
        this.nowSuffix = str
        this.nowPath = prefix_path + this.nowSuffix
    }

    worldTable: any = {}
    InitData(){
        this.worldTable = {}
        let jsonAsset:JsonAsset = (resources.get(this.nowPath,JsonAsset) as JsonAsset)
        let len = jsonAsset.json.WordTable.length
        let v 
        for (let index = 0; index < len; index++) {
            v = jsonAsset.json.WordTable[index]
            this.worldTable[v.Key] = v[this._currLanguageValue].replace(/\\n/g, '\n')
        }
        console.log(this.worldTable)
        assetManager.releaseAsset(jsonAsset)
    }   

    static getLab(key: string) {
        if (LangMgr.ins.worldTable[key]) {
            return LangMgr.ins.worldTable[key]
        }
        return key
        // let worldTab = tab.getData().WordTableByKey.getValue(key);
        // if (worldTab) {
        //     constKey.txt = worldTab[LangMgr.ins._currLanguageValue];
        //     if (constKey.txt) {
        //         return constKey.txt.replace(/\\n/g, '\n')
        //     }
        //     return constKey.txt;
        // } else {
        //     return key;
        // }
    }

    /** 检测路径是否为多语言 */
    static checkPath(path: string) {
        return path.indexOf(prefix_path) != -1 && path.indexOf(LangMgr.ins.nowPath) == -1
    }

    static transformPath(path: string) {
        if (this.checkPath(path)){
            const pattern: RegExp = /world_lang_(.*?)\//;

            const replacement: string = LangMgr.ins.nowPath + '/';

            const result: string = path.replace(pattern, replacement);
            return result
        }
        return path
    }
    static setTexture() {

    }

    public static getCombineString(key: string, opt?: Array<any>) {
        let s = LangMgr.getLab(key);
        if (!s) s = key;
        if (opt) {
            s = s["format"](opt);
        }
        return s;
    }
}