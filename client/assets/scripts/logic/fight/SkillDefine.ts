
export enum MowBulletTargetType { 
    velocity    = 1,//速率
    target      = 2//目标
}

export enum MowBulletType { 
    BulletTrace_Empty = 0, // 不使用 
    Straight = 1, // 直线 
    Curve = 2, // 抛物线 
    self = 4, // 自身 
    target = 5, // 目标 
}