export enum ChannelType {
    DEV = "DEV",
    P8 = "P8",
    P8ZA = "P8ZA",
    S37 = "S37",
    P8HW="P8HW"
}

export enum P8PostEventName{
     test="test",
     /** 通过普通关卡第3章*/
     dungeon_completed_3 = "dungeon_completed_3",
     /** 通过普通关卡第10章*/
     dungeon_completed_10 = "dungeon_completed_10",
     /**通过普通关卡第20章 */
     dungeon_completed_20 = "dungeon_completed_20",
     /**每日活跃度达到40 */
     daily_40 = "daily_40",
     /**每日活跃度达到100 */
     daily_100 = "daily_100",
     /**单笔成功储值0.99美金 */
     pay_0_99 = "pay_0.99",
     /**单笔成功储值10美金 */
     pay_10 = "pay_10",
     /**单笔成功储值50美金 */
     pay_50="pay_50",
     /**单笔成功储值100美金 */
     pay_100="pay_100",
     /** 次日登录*/
     day2_login="day2_login",
     /**点击广告次数 */
     ad_click="ad_click",
     /**点击广告完成观看次数 */
     ad_Impression="ad_Impression"
}