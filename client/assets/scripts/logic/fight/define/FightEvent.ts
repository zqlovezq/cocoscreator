import { LocalEvent } from "../../define/LocalEvent"

/**
 *  战斗事件
 */
export enum FightEvent {
    Fight_Skill_Cding,//技能CD中
    Create_Role_Head,//创建角色头像
    Skill_Attack_Count_Change,//技能攻击次数变更
    Fight_Skill_Cd_Progress,//技能CD进度
    Fight_Role_Dead,//角色死亡
    Fight_Initiative_Revive,//复活
    Fight_Monster_Dead,//怪物死亡
    Fight_Start,//战斗开始
    Fight_Start_Complete,//战斗开始完成
    Fight_Drop_Item,//战斗普通掉落条目
    Fight_Drop_Remove_First,//删除第一个掉落
    Fight_Rogue_Add,//添加肉鸽
    Role_Level_Up,//角色升级
    Hit_Effect_Add,//受击特效添加
    Role_Active,//角色激活
    Role_Add_Weapon_SkillGroup,//角色添加技能组
    Pause,//暂停
    Time_Scale,//时间倍率
    AbsRole_Deal,//战场角色死亡
    Kill,//击杀
    buff_link,//buff链接
    Injured,//受伤
    Select_leader,//选择队长
    Monster_Enter,//怪物出生
    Boss_Dead_State,//boss死亡状态
    Boss_Dead,//boss死亡
    Boss_Enter,//boss出生
    Sort_AbsRole,//排序
    Warning,//警告
    Change_Revice_Count,//改变复活次数
    Enter_New_PhaseCount,//进入新阶段
    add_DeadEffect,//添加死亡特效（游魂）
    remove_DeadEffect,//添加死亡特效（移除）
    Create_HoldTime_Effect,//创建蓄力特效
    Effect_Add_To_Layer,//添加特效到层级内
    World_Boss_LvUp,//世界boss升级
    Clear_All_Monster,//清除所有怪物
    giveRogue,//赠送肉鸽
    checkHeroUp,//检测英雄升级
    addSkill,//添加技能
    checkAbsRoleGainBuff,//检测增益buff
    fight_Sec,//秒
    ReviveByItemid,//复活指定英雄配置id
    deal_clear_bullet,//死亡清除子弹
    Role_change_SkillGroup,//切换技能组
    Fight_Drop_Item_Anim,//战斗掉落动画

    Pvp_start,//pvp开始
    Pvp_recycle,//回收
    End_Max//最后一个
}