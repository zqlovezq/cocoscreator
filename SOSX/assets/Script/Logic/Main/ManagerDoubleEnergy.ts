/*
 * @Descripttion: 能量双倍管理类
 */

export default class ManagerDoubleEnergy {
    private _overUTCTimes: number;
    private _startUTCTimes: number;
    
    private static _instance: ManagerDoubleEnergy   = null;
    public static getInstance(): ManagerDoubleEnergy {
        if (!ManagerDoubleEnergy._instance){
            ManagerDoubleEnergy._instance = new ManagerDoubleEnergy();
        }
        return ManagerDoubleEnergy._instance;
    }

    public setData(startUTC: number, overUTC: number){
        this._startUTCTimes = startUTC;
        this._overUTCTimes  = overUTC;
    }

    public getStartUTC(){return this._startUTCTimes;}

    public getOverUTC(){return this._overUTCTimes;}
   
}
