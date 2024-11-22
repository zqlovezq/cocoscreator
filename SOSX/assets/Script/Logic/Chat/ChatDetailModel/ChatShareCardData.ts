/*
 * @Descripttion: 聊天卡组分享数据
 */

export default class ChatShareCardData {
    public Title: string; /* 标题 */
    public CardIDList: number[]; /* 卡组ID列表 */

    constructor(title: string, cardIDList: number[]){
        this.Title = title;
        this.CardIDList = cardIDList;
    }
}
