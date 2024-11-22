/*
 * @Descripttion: 表情聊天数据模块
 */

export default class EmotionChat {
    public EmotionID: number;    /* 表情ID */
    public PlayerHeadID: number; /* 玩家头像ID */
    public PlayerName: string;   /* 玩家名称 */
    public Timestamp: number;    /* 时间戳 */
    public PlayerUUID: string;  /* 玩家uuid */

    constructor(emotionID: number, playerID: string, playerName: string, headID: number, timestamp: number){
        this.EmotionID    = emotionID;
        this.PlayerUUID   = playerID;
        this.PlayerName   = playerName;
        this.PlayerHeadID = headID;
        this.Timestamp    = timestamp;
    }
}
