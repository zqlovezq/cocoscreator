/*
 * @Descripttion: PVP邀请聊天数据模块
 */

export default class PvpInvitationChat {
    public RoomID: number;        /* 房间号 */
    public Timestamp: number;    /* 时间戳 */
    public PlayerUUID: string;  /* 玩家uuid */

    constructor(roomID: number, playerID: string, timestamp: number){
        this.RoomID       = roomID;
        this.PlayerUUID   = playerID;
        this.Timestamp    = timestamp;
    }
}
