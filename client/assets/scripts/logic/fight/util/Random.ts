import { tab } from "../../../Table/table_gen";
import { FightMacro } from "../define/FightDefine";

/**
 * 随机数
 */
export class Random {

    static seed: number = 0

    public static range(min: number, max: number): number {
        if (!this.seed && this.seed != 0) {
            this.seed = new Date().getTime();
        }
        max = max || 1;
        min = min || 0;

        this.seed = (this.seed * 9301 + 49297) % 233280;
        var rnd = this.seed / 233280.0;
        return min + rnd * (max - min);
    }

    /**
    获取随机整数
    @param min 随机的最小值
    @param max 随机的最大值(不包括该值)
    @returns 返回一个整数，范围是 [min, max)
    */
    static getRandomInt(min: number, max: number) {
        // return Math.floor(Math.random() * (max - min)) + min;
        return Math.floor(this.range(min, max))
    }

    /** 获取一个0-100的随机数 */
    static getInt() {
        return Random.getRandomInt(0, 101)
    }
    /** 获取一个0-10000的随机数*/
    static getInt10000() {
        return Random.getRandomInt(0, 10001)
    }

    /** 检测概率是否成功 获取一个0-10000的随机数 */
    static isSuccess(chance: number) {
        return chance && (chance >= FightMacro.MAX_CHANCE || chance >= Random.getInt10000())
    }



    static PFromC(C: number): number {
        let dCurP: number = 0.0;
        let dPreSuccessP: number = 0.0;
        let dPE: number = 0;
        let nMaxFail: number = Math.ceil(1.0 / C);
        for (let i = 1; i <= nMaxFail; ++i) {
            dCurP = Math.min(1.0, i * C) * (1 - dPreSuccessP);
            dPreSuccessP += dCurP;
            dPE += i * dCurP;
        }
        return 1.0 / dPE;
    }

    static CFromP(P: number): number {
        let conf  = tab.getData().PRBTableById.getValue(Math.floor(P))
        if (conf){
            return conf.CValue
        }
        return P

        // let dUp: number = P;
        // let dLow: number = 0.0;
        // let dMid: number = P;
        // let dPLast: number = 1.0;
        // while (true) {
        //     dMid = (dUp + dLow) / 2.0;
        //     let dPtested: number = Random.PFromC(dMid);
        //     if (Math.abs(dPtested - dPLast) <= 0.0) {
        //         break;
        //     }
        //     if (dPtested > P) {
        //         dUp = dMid;
        //     } else {
        //         dLow = dMid;
        //     }
        //     dPLast = dPtested;
        // }
        // return dMid;
    }
}
