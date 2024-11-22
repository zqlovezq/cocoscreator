import { sensitive_tab } from '../../Table/sensitive_words_gen';
import SWH from '../../ThirdParty/sensitive_word_helper_plus/sensitiveWithStep';
import { LoadResAsync } from './GameUtils';

//敏感词检测
export default class SensitiveWordsManager {
    protected static _ins:SensitiveWordsManager = null
    public static get Instance(){
        if(SensitiveWordsManager._ins === null) {
            SensitiveWordsManager._ins = new SensitiveWordsManager();
        }
        return SensitiveWordsManager._ins;
    }

    private swh:any;

    public async Init() {
        if(this.swh !== undefined) {
            return
        }
        this.swh = null;

        let resource = await LoadResAsync('tabledata/sensitive_words_gen', cc.JsonAsset);
        if(resource) {
            sensitive_tab.InitData(resource.json)
            cc.assetManager.releaseAsset(resource)
            
            let sensitiveArray = []
            for(let data of sensitive_tab.Data.SensitiveWordsTable) {
                sensitiveArray.push(data.SensitiveWords)
            }

            this.swh = new SWH({
                keywords: sensitiveArray,
                step: 10, // 默认是0  // 比如 '敏09感23词sa数45组' 可以替换成 '*09*23*sa*45*'  // step 是从第一个不是节点的字符开始计数
                replacement: '*' // 默认是 *, 比如 'a b' 默认会替换成  '* *'
            });
        }
    }
    
    /**
     * 检测有没有敏感词，没有敏感词时返回true
     */
    public check(str:string): boolean {
        if(!this.swh) {
            return true;
        }
        return this.swh.everySync(str);
    }

    /**
     * 把字符串中的敏感词替换为*
     */
    public replace(str:string):string
    {
        if(!this.swh) {
            return str;
        }

        let result = this.swh.filterSync(str);
        if(result && result.text) {
            return result.text;
        }
        return str;
    }
}

// SensitiveWordsManager.Instance.Init().then(()=>{
//     let testStr = "75年前的今天，中国人民同世界人民一道，以顽强的意志和英勇的斗争，彻底打败了法西斯主义，取得了正义战胜邪恶、光明战胜黑暗、进步战胜反动的伟大胜利！"
//     cc.log(SensitiveWordsManager.Instance.replace(testStr))
//     cc.log(SensitiveWordsManager.Instance.check(testStr))
// })
