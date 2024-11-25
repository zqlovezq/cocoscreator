/*
 * @Date: 2024-06-18 09:49:26
 * @LastEditors: wzq
 * @progress:枚举管理
 * @LastEditTime: 2024-11-12 16:12:07
 */

/* 排行榜枚举 */
export enum RANKING_TYPE {
    NONE = 0,
    HERO = 1,
    CHAPTER = 6,
    LEVEL = 7,
    POWER = 8,
    BOSS = 9,
    GUILD = 14,
    Fight = 17,//竞技场
}
/* 音频枚举 */
export enum SoundUrl {
    MainBGM = 1,
    BattleBGM = 2,
    ClickEffect = 3,
}
/* 抽卡枚举 */
export enum RecruitType {
    None = 0,
    Senior = 1,//高抽
    Vocation = 2,//职业抽
    Friend = 3,//友情抽
    Book = 4,//秘籍
    SeniorGuarantee = 5,//高抽保底
    BookGuarantee = 6,//秘籍保底
    BuyDailyShop = 7,//商店钻石购买
    BuyLevelUp = 8,//钻石购买等级
    PowerBattlePass = 200,//体力战令购买等级
    BossBattlePass = 201,//生化危机战令购买等级
    GaChaUp = 400,//UP池抽
    ChoiceSSR = 1001,
}
/* 背包切换类型枚举 */
export enum HERO_DETAIL_VIEW_TYPE {
    DETAIL = 1,
    RISINGSTAR,
    EQUIP,
    SKIN
}
/* 江湖页面切换 */
export enum JIANGHU_TYPE {
    NONE = 0,
    GoldStage = 1,//黄金矿洞
    FeedStage = 2,//饲料工厂 
}
/* 道具领取状态 */
export enum AWARD_STATE {
    NONE = 0,
    LOCK = 1,
    GOT = 2,
    RECEIVE = 3,
    GO = 4
}
export enum LevelRewardState {
    None = 0,
    Receive = 2,
    Got = 3,
    NotAchieved = 4
}
/* 精彩活动页面切换 */
export enum ACTIVITY_GIFT_VIEW {
    NONE = 0,
    CYCLE = 1,//特惠礼包
    CHAPTER = 2,//章节礼包
    NewPlayerMall = 3,//新手商城
    NewPlayerMall2 = 4,//精英商城
}
/* 商店管理 */
export enum MALLNAME {
    NONE = 0,              //占位
    DailyShop = 1,         //每日商店
    DismissalShop = 2,     //遣散商店
    AssassinShop = 3,      //刺客商店
    ArcherShop = 4,        //射手商店
    PriestShop = 5,        //牧师商店
    CasterShop = 6,        //法师商店
    WarriorShop = 7,       //战士商店
    BossShop = 8,          //boss商店
    PvpShop = 9,           //演武商店
    DiamondShop = 10,      //钻石商店
    GuildShop = 11,        //鸡舍宝库
    DailyGift = 51,        //日礼包 
    WeeklyGift = 52,       //日礼包 
    MonthlyGift = 53,      //日礼包 
    PvpToken = 60,         //庄园竞赛买券 
    NewPlayerMall = 70,    //新手商城
    NewPlayerMall2 = 71,   //精英商城
    HeroUpMall = 201,      //限时商店活动
}
/* 7日签到 */
export enum DEVELOPTYPE{
    NONE = 0,
    HERO = 1,//英雄
    BOOK = 2,//秘籍
}
/* 试炼页签 */
export enum TRIALTASK{
    NONE = 0,
    TASK1 = 1,
    TASK2 = 2,
    GIFT = 3
}
/* 试炼菜鸟试炼、精英试炼 */
export enum TRIALLAYER{
    NONE = 0,
    ROOKIE,
    ELITE,
}
/* 头像/头像框 */
export enum HEADTYPE{
    NONE = 0,
    HEADICON,
    HEADFRAME,
}
/* 帮会管理 */
export enum ASSOCIATION{
    NONE = 0,
    INASSOCIATION = 1,
}
/* 帮会弹窗 */
export enum ASSOCIATIONPOP{
    NONE = 0,
    CREATE = 1,//创建鸡舍
    NOTICE = 2,//鸡舍修改公告
    CHANGE = 3,//鸡舍修改信息
    DONATE = 4,//鸡舍捐献
    SKILLRESET = 5,//技能重置
}
/* 帮会页签 */
export enum ASSOCIATIONVIEW{
    NONE = 0,
    INFO = 1,
    EVENT = 2,
}
/* 每日任务 */
export enum TASKDAILY{
    NONE = 0,
    DAILY = 1,
    WEEK = 2,
    ACHIEVEMENT = 3,
    GUILD = 4,
}
/* 公会全选 */
export enum GuildPermission{
    KickOutMember = 0,//踢人
    SetJob = 1,//任职
    setNotice = 2,//写公告
    ProcessApply = 3,//处理申请
    GuildSetting = 4,//公会设置
}
/* 竞技场队伍状态 */
export enum FincaFightTeamState{
    NONE = 0,
    LOCK = 1,
    EMPTY = 2,
    HERO = 3,
    BOOK = 4,
}
