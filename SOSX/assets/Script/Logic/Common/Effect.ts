import { tab } from "../../Table/table_gen";
import { CreateSpine, CreateSpineFromPool, getRandomInt, getRes, LoadResAsync, PutToSpinePool } from "../Utils/GameUtils";
import Sound from "../Utils/Sound";

const { ccclass, property } = cc._decorator;

/*  */
export function EffectAutoRemove(effect: Effect) {
    if (effect && cc.isValid(effect.node)) {
        effect.node.removeFromParent()
        effect.node.destroy()
    }
}

/**
 *  
 */
@ccclass
export default class Effect extends cc.Component {

    protected table: tab.EffectTable = null; /*  */
    protected endCallback: Function = null; /*  */
    protected initPromise: Promise<any> = null; /*  */
    protected spine: sp.Skeleton;            /*  */

    /*  */
    public static create(effectId: number, endCallback?: Function) {
        let node = new cc.Node;
        let effect = node.addComponent(Effect);
        effect.init(effectId, endCallback);
        return effect;
    }

    /*  */
    onDestroy() {
        if (this.spine) {
            PutToSpinePool(this.table.SpineID, this.spine);
        }
    }

    /*  */
    protected init(effectId: number, endCallback: Function) {
        let effectData = tab.Data.EffectTableByID.getValue(effectId);
        if(effectData.Sound){
            Sound.Instance.PlayHitEffect(effectData.Sound);
        }
        if (!effectData) {
            throw `cannot find effect: ${effectId}`
        }
        this.table = effectData;
        this.endCallback = endCallback;
        this.node.zIndex = effectData.Zindex

        //随机旋转角度
        if (effectData.RandomRotate) {
            this.node.angle = getRandomInt(0, 360)
        }

        switch (effectData.Type) {
            case tab.EffectType.EffectType_SkeletonData: /*  */
                //骨骼动画
                this.initPromise = CreateSpineFromPool(effectData.SpineID).then(skel => {
                    if (skel && cc.isValid(this.node)) {
                        this.spine = skel;
                        this.node.addChild(skel.node);
                        if (effectData.AnimationName.length == 1) {
                            skel.setAnimation(0, effectData.AnimationName[0], effectData.Loop)
                        } else {
                            for (let i = 0; i < effectData.AnimationName.length; i++) {
                                if (i == 0) {
                                    skel.setAnimation(0, effectData.AnimationName[i], false)
                                } else if (i < effectData.AnimationName.length - 1) {
                                    skel.addAnimation(0, effectData.AnimationName[i], false)
                                } else {
                                    skel.addAnimation(0, effectData.AnimationName[i], effectData.Loop)
                                }
                            }
                        }

                        if (this.endCallback && !effectData.Loop) {
                            skel.setCompleteListener(() => {
                                this.endCallback(this)
                            })
                        } else {
                            skel.setCompleteListener(null)
                        }
                    }
                })
                break
            case tab.EffectType.EffectType_AnimationClip: /*  */
                //序列帧
                let prefab:cc.Prefab = getRes(effectData.Url, cc.Prefab);
                if (prefab && cc.isValid(this.node)) {
                    let node: cc.Node = cc.instantiate(prefab)
                    this.node.addChild(node)

                    let anim = node.getComponentInChildren(cc.Animation)
                    if (anim) {
                        if (effectData.AnimationName.length > 0) {
                            anim.play(effectData.AnimationName[0])
                        }
                        //todo

                        if (this.endCallback) {
                            anim.on(cc.Animation.EventType.FINISHED, event => {
                                this.endCallback(this)
                            }, this)
                        }
                        return;
                    }

                    //New Add 黑桃会有内存泄漏问题，补充这块  
                    // let skelData = node.getComponentInChildren(sp.Skeleton);
                    // if (skelData) {
                    //     if (this.endCallback && !effectData.Loop) {
                    //         skelData.setCompleteListener(() => {
                    //             this.endCallback(this);
                    //         });
                    //     } else {
                    //         skelData.setCompleteListener(null);
                    //     }
                    // }
                }
                // this.initPromise = LoadResAsync(effectData.Url, cc.Prefab).then(prefab => {
                //     if (prefab && cc.isValid(this.node)) {
                //         let node: cc.Node = cc.instantiate(prefab)
                //         this.node.addChild(node)

                //         let anim = node.getComponentInChildren(cc.Animation)
                //         if (anim) {
                //             if (effectData.AnimationName.length > 0) {
                //                 anim.play(effectData.AnimationName[0])
                //             }
                //             //todo

                //             if (this.endCallback) {
                //                 anim.on(cc.Animation.EventType.FINISHED, event => {
                //                     this.endCallback(this)
                //                 }, this)
                //             }
                //             return;
                //         }

                //         //New Add 黑桃会有内存泄漏问题，补充这块  
                //         let skelData = node.getComponentInChildren(sp.Skeleton);
                //         if (skelData) {
                //             if (this.endCallback && !effectData.Loop) {
                //                 skelData.setCompleteListener(() => {
                //                     this.endCallback(this);
                //                 });
                //             } else {
                //                 skelData.setCompleteListener(null);
                //             }
                //         }
                //     }
                // })
                break
            case tab.EffectType.EffectType_SpriteFrame: /*  */
                //静态图
                let sf:cc.SpriteFrame = getRes(effectData.Url, cc.SpriteFrame);
                if (sf && cc.isValid(this.node)) {
                    let sp = new cc.Node().addComponent(cc.Sprite)
                    sp.sizeMode = cc.Sprite.SizeMode.RAW;
                    sp.trim = false;
                    sp.spriteFrame = sf;
                    this.node.addChild(sp.node)
                }
                // this.initPromise = LoadResAsync(effectData.Url, cc.SpriteFrame).then(sf => {
                //     if (sf && cc.isValid(this.node)) {
                //         let sp = new cc.Node().addComponent(cc.Sprite)
                //         sp.sizeMode = cc.Sprite.SizeMode.RAW;
                //         sp.trim = false;
                //         sp.spriteFrame = sf;
                //         this.node.addChild(sp.node)
                //     }
                // })
                break
            case tab.EffectType.EffectType_Plist:
                let atlas:cc.SpriteAtlas = getRes(effectData.Url, cc.SpriteAtlas);
                let sp = this.node.addComponent(cc.Sprite);
                    let animation = this.node.addComponent(cc.Animation);
                    var spriteFrames = atlas.getSpriteFrames();
                    var clip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, effectData.FPS?effectData.FPS:10);
                    clip.name = effectData.AnimationName[0];
                    clip.wrapMode = this.table.Loop ? cc.WrapMode.Loop : cc.WrapMode.Normal;

                    animation.addClip(clip);
                    animation.play(clip.name);
                    if (this.endCallback) {
                        animation.on(cc.Animation.EventType.FINISHED, event => {
                            /* 特效回收 */
                            this.endCallback(this)
                        }, this)
                    }
                // this.initPromise = LoadResAsync(effectData.Url, cc.SpriteAtlas).then(atlas => {
                //     let sp = this.node.addComponent(cc.Sprite);
                //     let animation = this.node.addComponent(cc.Animation);
                //     var spriteFrames = atlas.getSpriteFrames();
                //     var clip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, effectData.FPS?effectData.FPS:10);
                //     clip.name = effectData.AnimationName[0];
                //     clip.wrapMode = this.table.Loop ? cc.WrapMode.Loop : cc.WrapMode.Normal;

                //     animation.addClip(clip);
                //     animation.play(clip.name);
                //     if (this.endCallback) {
                //         animation.on(cc.Animation.EventType.FINISHED, event => {
                //             /* 特效回收 */
                //             this.endCallback(this)
                //         }, this)
                //     }
                // })
                break;
        }
    }

    /* 没人call */
    public async getChildByName(childName: string) {
        if (!this.initPromise) {
            return null
        }

        await this.initPromise;
        for (let child of this.node.children) {
            let node = child.getChildByName(childName);
            if (node) {
                return node;
            }
        }
        return null;
    }

    /* 没人call */
    public setDirection(srcPos: cc.Vec2, dstPos: cc.Vec2) {
        this.calculateRotation(dstPos.sub(srcPos))
    }

    /* 废弃 */
    protected calculateRotation(pt: cc.Vec2) {
        let angle = cc.misc.radiansToDegrees(Math.atan2(pt.y, pt.x));
        this.node.angle = angle;
    }

    /* 没人call */
    public async getSpineAttach(attachName: string) {
        if (!this.initPromise) {
            return null
        }
        await this.initPromise;

        let skel = this.getComponentInChildren(sp.Skeleton)
        if (!skel) {
            return null
        }

        // skel.findAnimation("flsdjf")

        //获取挂点
        let attachUtil: sp.sp.AttachUtil = skel.attachUtil;
        attachUtil.generateAllAttachedNodes();
        let boneNodes = attachUtil.getAttachedNodes(attachName); // 因为同名骨骼可能不止一个，所以需要返回数组
        if (boneNodes.length > 0) {
            return boneNodes[0]; // 取第一个骨骼作为挂点
        }
        return null;
    }

    /* 没人call */
    public async getSpine() {
        if (!this.initPromise) {
            return null
        }
        await this.initPromise;
        return this.getComponentInChildren(sp.Skeleton)
    }

    /* 没人call */
    public async setColor(color: cc.Color) {
        if (!this.initPromise) {
            return
        }
        await this.initPromise;

        let skel = this.getComponentInChildren(sp.Skeleton)
        if (!skel) {
            return
        }
        skel.node.color = color;
    }

    /* 没人call */
    public getAnimeName(index = 0) {
        if (!this.table || index >= this.table.AnimationName.length) {
            return ""
        }
        return this.table.AnimationName[index]
    }
}