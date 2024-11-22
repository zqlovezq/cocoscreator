/*
 * @Descripttion: 
 */
export const FightBuildEffectID 	= 20000; // 建塔特效
export const FightDropMoneyEffectID = 20001; // 掉落金币特效
export const FightBeginEffectID 	= 20002; // 
export const FightBossEffectID 		= 20003; // 
export const FightPlayerInfoEffectID= 20004; // 
export const PvePlayerInfoEffectID 	= 20028; // 
export const FightStrengthEid 		= 20006; // 
export const FightDropGoldEid 		= 20025; // 合作模式金币掉落特效

export const FightEnemyDisappearEid = 20012;
export const FightEnemyFlyToBossEid = 20013;
// export const BossChangeCardForecastEid = 20010;
export const BossChangeCardEid 		= 20011;
export const EnemyBornRed 			= 20014;
export const EnemyBornBlue 			= 20015;
export const TowerShieldOnce 		= 20064;

export const PoisonEid 				= 30018;
export const PoisonExplosionEid 	= 30019;
export const BossChangeWoodEid 		= 20035;
export const AddCompoundOneEid 		= 20036; //史莱姆王加星星特效
export const AddCompoundTwoEid 		= 20037; //史莱姆王加星星特效
export const LockOnEid 				= 20039; //瞄准特效
export const SpineSucceedEid 		= 20052; //狙击成功
export const SpineFailEid 			= 20053; //狙击失败

export const EffectYDNReflect 		= 20045; //雅典娜反击子弹特效
export const YDNLockOnEid 			= 20079; //瞄准特效
export const YDNLockOnEidBeHIt 		= 20080; //受击特效

export const ThrowPoisonEffectId 	= 20081; //毒雾特效

export const MaxTowerCompoundLv 	= 7; //最大合成等级

export const SlimeSpineID = 11040;

/*  */
export enum FightZIndex {
	Floor 	= 0, 	/*  */
	Enemy 	= 5000,	/*  */
	Effect 	= 10000,/*  */
	Bullet 	= 15000,/*  */
	Tips 	= 20000,/*  */
	Max 	= cc.macro.MAX_ZINDEX,/*  */
}

/*  */
export enum AnimationType {
	None, /*  */
    Idle,/*  */
    Walk,/*  */
	Attack,/*  */
	Die,/*  */
	Skill,/*  */
	Appear,/*  */
	TowerAppear,	//建塔
	TowerDisappear, //塔消失
	TowerCompound,  //合成塔
	Transform,/*  */
}

export enum AnimationDirection {
	RIGHT 			= 0,	//右
	RIGHTBOTTOM 	= 1, 	//右下
	BOTTOM 			= 2,	//下
	LEFT_BOTTOM 	= 3,	//左下
	LEFT 			= 4,	//左
	LEFTTOP 		= 5,	//左上
	TOP 			= 6,	//上
	RIGHTTOP 		= 7,	//右上
	MAX = 8,//无效的方向值
}

/*  */
export function getAnimationDirection(src:cc.Vec2, dst?:cc.Vec2): AnimationDirection[] {
	let sub = dst===undefined ? src : dst.sub(src);
	if (sub.x == 0 && sub.y == 0) {
		return [AnimationDirection.MAX]
	}

	sub.x = sub.x;
	sub.y = sub.y;
	let r = Math.atan2(-sub.y, sub.x)
	if (r < 0) {
		r += 2 * Math.PI;
	}
	let d = cc.misc.radiansToDegrees(r);
	let index = Math.floor(d / 45 + ((d % 45) > 22 ? 1 : 0));//45和22分别是1/8和1/16圆周。

	let interval: number;
	if (d > index * 45)
		interval = 1;
	else
		interval = -1;
	let dirVec:AnimationDirection[] = [];
	dirVec.push(index);
	dirVec.push(index + interval);
	dirVec.push(index - interval);

	dirVec.push(index + interval * 2);
	dirVec.push(index - interval * 2);

	dirVec.push(index + interval * 3);
	dirVec.push(index - interval * 3);

	dirVec.push(index + interval * 4);

	let result:AnimationDirection[] = [];
	for (let i = 0; i < dirVec.length; ++i){
		let value: AnimationDirection = (dirVec[i] + AnimationDirection.MAX) % AnimationDirection.MAX;
		result.push(value);
	}
	result.push(AnimationDirection.MAX);
	return result;
}

/*  */
export function getZIndexWithPos(zindex:FightZIndex, pos:cc.Vec2):number {
	return -pos.y * 2 - pos.x + zindex;
}