
/**
 * 网络状态事件
 */
export enum NetStateEvent {
    NONE,				// 无额外信息
    CONNCET,	        // 连接成功
    CLOSE,			// 连接关闭
};


/**
 *  本地事件
 */
export enum LocalEvent {
    LocalEvent_Begin = 0,
    LocalEvent_Common_Net_ErrorCode,
    SceneLoaded,
    FightResLoadComplete,
    LoginProcessComplete,//登录流程完成
    Item_Update,//道具更新（包含钻石和金币）
    Gole_Update, //金币变化
    Diamond_Update, //钻石变化
    Hero_Change,    //切换查看英雄信息
    Rank_Change,    //切换排行榜
    Hero_Material_Select,//选择英雄材料
    Level_Item_Select,//点击关卡
    Click_Recommend_Hero,//点击查看推荐阵容英雄信息
    Delete_Star_Up_Hero,//取消选中一键升星的某个英雄
    Equip_Chang, //装备变化
    Prestige_Change,//冒险日志变化
    ChatMessage_Change,//聊天消息变化
    LimitedBenefits_Change,//限时奖励活动变化
    FirstRecharge_Chang,// 首充活动状态变化
    BreakEgg_change,   //砸金鸡活动变化
    quitFight,//退出战斗
    Chapter_Gift_Change,//章节礼包切换
    VipLevel_Change, //vip等级变化
    TrialRed,//监听一下试炼红点
    checkOpenFuncPop, //检测功能开启弹窗,
    updateBookRedPoint, //刷新秘籍红点
    openFunctions,    //功能开启
    CancelRunningGuide,//取消新手引导
    CheckGuide,         // 检测新手引导
    HideDialogue,       //新手引导关闭dialogue
    ShowPop,           //检测页面弹出
    ShowMonster,        //出怪
    ReviveHero,         //小鸡复活
    hidePop,            //检测页面关闭
    hideHeroPop,        //检测新英雄界面关闭
    checkMainView,      //检测当前只有主界面 没有弹窗
    heroInTeam,         //英雄上阵
    JadeDrop,           //羽毛掉落
    FightWin,           //战斗胜利

    JadeDropFinger,     //羽毛掉落小手软引导
    roleIdleState,      //英雄处于空闲状态
    JumpLayerSuceess ,  //跳转界面成功
    ServerMaintain,    //服务器维护
    updateInspireBtn,  //刷新评分按钮状态
    openFuncRed,        //开启红点刷新

    LocalMsg_QueueUI_check,//队列检查
    LocalMsg_QueueUI_deleteUI,//队列弹出
    showNewOver,                //新英雄展示关闭
    Finca_Team_Change,      //竞技场英雄变动
    Finca_Book_Change,      // 竞技场秘籍变动
}

