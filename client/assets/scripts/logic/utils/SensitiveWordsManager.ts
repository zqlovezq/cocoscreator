import { JsonAsset, assetManager, resources } from 'cc';
import { sensitive_tab } from '../../Table/sensitive_words_gen';
import { LoadResAsync } from '../mgr/ResMgr';
import Mint from '../../sensitive_word/src';

//敏感词检测
export default class SensitiveWordsManager {
    protected static _ins: SensitiveWordsManager = null
    public static get ins() {
        if (SensitiveWordsManager._ins === null) {
            SensitiveWordsManager._ins = new SensitiveWordsManager();
        }
        return SensitiveWordsManager._ins;
    }

    private mint: Mint

    public async Init() {
        if (this.mint !== undefined) {
            return
        }
        this.mint = null;

        await this.LoadTable();
        let sensitiveArray = []
        for (let data of sensitive_tab.getData().SensitiveWordsTable) {
            sensitiveArray.push(data.SensitiveWords)
        }
        this.mint = new Mint(sensitiveArray)

        this.test()
    }


    LoadTable(progressCallback?: (completedCount: number, totalCount: number, item: any) => void): Promise<void> {
        return new Promise(resolve => {
            resources.load('tabledata/sensitive_words_gen', JsonAsset, progressCallback, (error: Error, resource: any) => {
                if (error) {
                    throw error;
                }
                sensitive_tab.InitData(resource.json)
                assetManager.releaseAsset(resource)
                resolve();
            })
        })
    }

    /**
     * 检测有没有敏感词，没有敏感词时返回true
     */
    public check(str: string): boolean {
        if (!this.mint) {
            return true;
        }
        return this.mint.verify(str);
    }

    /**
     * 把字符串中的敏感词替换为*
     */
    public replace(str: string): string {
        if (!this.mint) {
            return str;
        }
        return this.mint.filter(str).text
    }

    test() {
        let testStr = "75年前的今天，中国人民同世界人民一道，以顽强的意志和英勇的斗争，彻底打败了法西斯主义，取得了正义战胜邪恶、光明战胜黑暗、进步战胜反动的伟大胜利！"
        console.log(SensitiveWordsManager.ins.replace(testStr))
        console.log(SensitiveWordsManager.ins.check(testStr))
    }
}

