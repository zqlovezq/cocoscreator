import { _decorator} from 'cc';
import { AbsMgr } from '../../framework/base/IAbs';

const { ccclass, property } = _decorator;

/**
 * 
 * PlatformMgr 平台管理类 处理sdk接口
 * zhudingchao
 * Fri Jun 28 2024 10:13:42 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/mgr/PlatformMgr.ts
 *
 */

@ccclass('PlatformMgr')
export class PlatformMgr extends AbsMgr{ 
    private static _instance: PlatformMgr;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new PlatformMgr();
        }
        return this._instance;
    }
    init(){

    }
   
    
}