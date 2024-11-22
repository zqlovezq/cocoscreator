/*
 * @Descripttion: 普通文本聊天数据模块
 */

export default class NormalTextChat {
    public Content: string;      /* 聊天内容 */
    public PlayerHeadID: number; /* 玩家头像ID */
    public PlayerName: string;   /* 玩家名称 */
    public Timestamp: number;    /* 时间戳 */
    public PlayerUUID: string;  /* 玩家uuid */

   constructor(headID: number, uuid: string, name: string, content: string, time: number){
        this.Content      = content;
        this.PlayerHeadID = headID;
        this.PlayerName   = name;
        this.Timestamp    = time;
        this.PlayerUUID   = uuid;
   }
}
