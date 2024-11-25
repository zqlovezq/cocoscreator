
/** 帧同步 */
export interface IFrame{
    updateFrame(dt:number):void
    insertFrame():void
    removeFrame():void
    lateUpdateFrame():void
    
}