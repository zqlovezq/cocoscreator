/*
 * @Descripttion: 公告数据模块
 */

export interface INoticeData{
     title: string;
     content: string[];
     timestamp: number;
};

export default class NoticeData {
     public LeftNotice: INoticeData;
     public MiddleNotice: INoticeData;
     public RightNotice: INoticeData;

     constructor(left: INoticeData, middle: INoticeData, right: INoticeData){
          this.LeftNotice   = left;
          this.MiddleNotice = middle;
          this.RightNotice  = right;
     }
}

/**
 * 公告版本号
 */
export class NoticeVer{
     public Version: string;
     
     constructor(ver: string){
          this.Version = ver;
     }
}