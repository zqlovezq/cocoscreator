import { Animation, AnimationClip, Color, Component, Layers, Material, Node, Pool, Sorting, Sprite, SpriteAtlas, SpriteFrame, UIOpacity, UITransform, Vec3, View, animation, game, path, size, sp, v2, v3, view } from "cc";
import { tab } from "../../../Table/table_gen";
import { Func } from "../../utils/Func";
import { IReset } from "../../../framework/base/IAbs";
import { ResMgr } from "../../mgr/ResMgr";
import { AbsObj } from "../base/obj/AbsObj";
import { ShaderUtil } from "../../utils/ShaderUtil";
import { JSB } from "cc/env";
import { FightRootControl } from "../FightRootControl";
import { FightData } from "../data/FightData";
import { FightMacro } from "../define/FightDefine";
import { FPSAvatar } from "./FPSAvatar";


const tempPos: Vec3 = new Vec3(0, 0, 0)
const tempPos1: Vec3 = new Vec3(0, 0, 1)
const color: Color = new Color()
export class Avatar extends Component implements IReset {

    static avatars: Avatar[] = [];
    static selfId: number = 0

    static create() {
        let anim = Avatar.avatars.pop()

        if (anim == null) {
            let nn = new Node("Avatar");
            anim = nn.addComponent(Avatar)
            this.selfId += 1
            anim._selfId = this.selfId
        }
        anim.node.layer = Layers.Enum.DEFAULT
        anim.setFlashWhite(false)
        return anim
    }

    static put(anim: Avatar) {
        anim.node.removeFromParent()
        anim.reset()
        Avatar.avatars.push(anim)
    }

    static getSpriteWhiteMaterial(): Material {
        return ResMgr.get(ShaderUtil.flashWhiteSprite(), Material)
    }

    static getSpineWhiteMaterial(): Material {
        return ResMgr.get(ShaderUtil.flashWhiteSpine(), Material)
    }

    /** 销毁 */
    static destory() {
        for (let i = 0; i < Avatar.avatars.length; i++) {
            Avatar.avatars[i].reset()
            Avatar.avatars[i].node.destroy()
        }
        Avatar.avatars.length = 0
        Avatar.renderClear()
    }

    recycle() {
        Avatar.put(this)
    }

    reset(): void {

        if (this.sprite) {
            Avatar.putRender(tab.AnimationType.AnimationType_SpriteFrame, this.animTab.Path, this.sprite)
            this.sprite = null
        }

        if (this.fpsAvatar) {
            this.fpsAvatar.timeScale = 1
            this.fpsAvatar.spr.customMaterial = null
            this.animationSprMaterial = null
            Avatar.putRender(tab.AnimationType.AnimationType_Plist, this.animTab.Path, this.fpsAvatar)
            this.fpsAvatar = null
        }

        if (this.spine) {
            this.spine.timeScale = 1
            this.spine.customMaterial = null
            Avatar.putRender(tab.AnimationType.AnimationType_SkeletonData, this.animTab.Path, this.spine)
            this.spine = null
        }
        if (this.socketsPathV3Map) {
            this.socketsPathV3Map.clear()
        }
        if (this.node.children.length) {
            console.log("多个---")
        }
        let ui = this.node.getComponent(UIOpacity)
        if (ui) {
            ui.opacity = 255
        }
        this.animTab = null
        this.animationId = 0
        this.isUpdate = false
        this.isPause = false
        this.time = 0
        this.endTime = 0
        this.baseSpeedScale = 1
        this.otherSpeedScale = 1
    }

    private animationId: number
    animTab: tab.AnimationTable

    private sprite: Sprite
    public fpsAvatar: FPSAvatar
    public spine: sp.Skeleton


    private callack: Function
    private flashWhite: boolean = false
    private isPause: boolean = false
    baseSpeedScale: number = 1
    otherSpeedScale: number = 1
    private totalTimeScale: number = 1
    private _selfId: number

    setCb(cb: Function) {
        this.callack = cb
    }
    setFlashWhite(bo: boolean) {
        this.flashWhite = bo
    }

    setAnimationId(id: number) {
        let tempTab: tab.AnimationTable = tab.getData().AnimationTableById.getValue(id)
        if (tempTab == null) {
            console.error("找不到AnimationId", id)
            return
        }
        let isLoad = false
        if (this.animTab == null || (this.animTab && this.animTab.Path != tempTab.Path)) {
            // 换资源
            this.reset()
            isLoad = true
        }
        tempPos.x = tempPos.y = tempPos.z = 0
        this.node.position = tempPos
        this.animationId = id
        this.animTab = tempTab
        this.otherSpeedScale = 1
        if (isLoad) {
            this.load()
        }
        this.play()
        this.setFlashWhiteRate(1)
    }
    setOtherSpeedScale(speedScale: number) {
        this.otherSpeedScale = 1 + speedScale / FightMacro.PERCENT
        // console.log("设置攻击速度", this.otherSpeedScale)
        this.updateTimeScale()
    }

    updatePause(pause) {
        this.isPause = pause
        if (this.fpsAvatar) {
            if (pause) {
                this.fpsAvatar.pause()
            } else {
                this.fpsAvatar.resume()
            }
        }
        if (this.spine) {
            this.spine.paused = pause
        }
    }

    updateTimeScale() {
        this.totalTimeScale = this.otherSpeedScale * this.baseSpeedScale * FightData.ins.timeScale
        if (this.spine) {
            this.spine.timeScale = this.totalTimeScale
        } else if (this.fpsAvatar) {
            this.fpsAvatar.timeScale = this.totalTimeScale
        }
        // console.log(this.totalTimeScale, this.otherSpeedScale, this.baseSpeedScale, FightData.ins.timeScale)
    }

    setOpaticy(opacity: number) {
        let ui = this.node.getComponent(UIOpacity)
        if (ui == null) {
            ui = this.node.addComponent(UIOpacity)
        }
        ui.opacity = opacity
    }

    animationSprMaterial: Material
    setFlashWhiteRate(rate: number) {
        if (!this.flashWhite) {
            return
        }
        if (this.sprite) {
            if (this.animationSprMaterial == null) {
                this.animationSprMaterial = this.sprite.getMaterialInstance(0)
            }
            this.animationSprMaterial.setProperty('u_rate', rate)
        } else if (this.spine) {
            if (this.spine.skeletonData == null) {
                return
            }
            if (JSB) {
                this.spine.getSharedMaterial(0)!.setProperty("u_rate", rate);
                // @ts-ignore 
                this.spine.updateMaterial();
            } else {
                // @ts-ignore 
                let cache: any = this.spine._materialCache;
                for (let i in cache) {
                    let material = cache[i];
                    material.setProperty("u_rate", rate);
                }
                // @ts-ignore 
                // this.spine.updateMaterial();
            }
        } else if (this.fpsAvatar) {
            if (this.animationSprMaterial == null) {
                this.animationSprMaterial = this.fpsAvatar.spr.getMaterialInstance(0)
            }
            this.animationSprMaterial.setProperty('u_rate', rate)
        }
    }

    avatarPlayComplete(animName: string) {
        if (this.animTab && this.animTab.NextAnimation) {
            this.setAnimationId(this.animTab.NextAnimation)
            return
        }
        this.callack && this.callack(animName)
    }

    getPlayTime() {
        switch (this.animTab.Type) {
            case tab.AnimationType.AnimationType_SkeletonData:
                return this.animTab.FrameCount / 30
            case tab.AnimationType.AnimationType_Plist:
                return this.animTab.FrameCount / (this.animTab.FPS || 10)
        }
        return 0
    }
    private testTime: number = 0
    private testTime1: number = 0
    play() {
        this.isUpdate = false
        this.testTime = FightData.time
        this.testTime1 = new Date().getTime()
        switch (this.animTab.Type) {
            case tab.AnimationType.AnimationType_SkeletonData:
                this.endTime = this.getPlayTime()
                this.baseSpeedScale = ((this.animTab.AnimationSpeed || FightMacro.PERCENT) / FightMacro.PERCENT)
                this.updateTimeScale()
                if (this.spine.skeletonData && this.spine.animation != this.animTab.AnimationName) {
                    this.spine.setAnimation(0, this.animTab.AnimationName, this.animTab.Loop)
                }
                break
            case tab.AnimationType.AnimationType_Plist:
                this.updateNodeScale()

                this.baseSpeedScale = ((this.animTab.AnimationSpeed || FightMacro.PERCENT) / FightMacro.PERCENT)
                this.endTime = this.getPlayTime()
                this.updateTimeScale()
                if (!this.animTab["newName"]) {
                    this.animTab["newName"] = this.animTab.AnimationName == "" ? this.animTab.Path : this.animTab.AnimationName
                }
                if (this.fpsAvatar.actionName != this.animTab["newName"]) {
                    let atlast: SpriteAtlas = ResMgr.get(this.animTab.Path, SpriteAtlas)
                    if (atlast) {
                        this.fpsAvatar.createWithSpriteFrames(Avatar.setPlistArray(atlast, this.animTab), this.animTab.FPS)
                    }
                }
                if (this.fpsAvatar.hasImage()) {
                    this.fpsAvatar.actionName = this.animTab["newName"]
                    if (this.fpsAvatar.actionName == undefined) {
                    }

                    this.fpsAvatar.play(this.animTab.Loop)
                }


                break
            default:
                return
        }
        if (this.animTab.Loop) {
            return
        }
        this.time = 0
        this.isUpdate = true //开始计时

    }
    private isUpdate: boolean
    private time: number
    private endTime: number
    protected update(dt: number): void {
        if (!this.isPause && this.isUpdate) {
            this.time += dt * this.totalTimeScale
            if (this.time >= this.endTime) {
                this.time -= this.endTime
                // this.endTime = 0
                this.isUpdate = false
                this.avatarPlayComplete(this.animTab.AnimationName)
            }
        }
    }

    updateNodeScale() {
        tempPos.x = this.animTab.Offset[0] || 0
        tempPos.y = this.animTab.Offset[1] || 0

        tempPos1.x = (this.animTab.Scale[0] || FightMacro.PERCENT) / FightMacro.PERCENT
        tempPos1.y = (this.animTab.Scale[1] || FightMacro.PERCENT) / FightMacro.PERCENT

        if (this.fpsAvatar) {
            this.fpsAvatar.node.position = tempPos
            this.fpsAvatar.node.scale = tempPos1
        }
        if (this.sprite) {
            this.sprite.node.position = tempPos
            this.sprite.node.scale = tempPos1
        }
        if (this.spine) {
            this.spine.node.position = tempPos
            this.spine.node.scale = tempPos1
        }
    }

    load() {
        tempPos.x = this.animTab.Offset[0] || 0
        tempPos.y = this.animTab.Offset[1] || 0

        tempPos1.x = (this.animTab.Scale[0] || FightMacro.PERCENT) / FightMacro.PERCENT
        tempPos1.y = (this.animTab.Scale[1] || FightMacro.PERCENT) / FightMacro.PERCENT
        switch (this.animTab.Type) {
            case tab.AnimationType.AnimationType_SpriteFrame:
                this.loadSprite()
                break
            case tab.AnimationType.AnimationType_SkeletonData:
                this.loadSpine()
                break
            case tab.AnimationType.AnimationType_AnimationClip:
                break
            case tab.AnimationType.AnimationType_Plist:
                this.loadPlist()
                break
        }
    }

    loadSprite() {
        this.sprite = Avatar.getRender(tab.AnimationType.AnimationType_SpriteFrame) as Sprite
        this.node.addChild(this.sprite.node)
        this.sprite.setTexture(this.animTab.Path)
        this.sprite.node.position = tempPos
        this.sprite.node.scale = tempPos1
    }

    getSprite() {
        return this.sprite
    }

    loadSpine() {
        let animId = this.animationId
        this.spine = Avatar.getRender(tab.AnimationType.AnimationType_SkeletonData) as sp.Skeleton

        this.spine.skeletonData = ResMgr.get(this.animTab.Path, sp.SkeletonData)
        if (this.spine.skeletonData == null) {
            ResMgr.load(this.animTab.Path, sp.SkeletonData, null, (err: Error, resource: sp.SkeletonData) => {
                if (err) {
                    console.error(err)
                    return
                }
                if (animId != this.animationId) {
                    return
                }
                this.spine.skeletonData = resource
                this.spine.setAnimation(0, this.animTab.AnimationName, this.animTab.Loop)
            })
        }


        this.node.addChild(this.spine.node)
        this.updateNodeScale()


        this.spine.premultipliedAlpha = false
        this.spine.enableBatch = true

        if (this.flashWhite) {
            this.spine.customMaterial = Avatar.getSpineWhiteMaterial()
        }
    }

    loadPlist() {
        this.animTab.FPS = this.animTab.FPS || 30

        this.fpsAvatar = Avatar.getRender(tab.AnimationType.AnimationType_Plist, this.animTab.Path) as FPSAvatar
        this.node.addChild(this.fpsAvatar.node)

        if (this.flashWhite) {
            this.fpsAvatar.spr.customMaterial = Avatar.getSpriteWhiteMaterial()
        }

        let atlast: SpriteAtlas = ResMgr.get(this.animTab.Path, SpriteAtlas)
        if (atlast == null) {
            let animId = this.animationId
            ResMgr.load(this.animTab.Path, SpriteAtlas, null, (err: Error, resource: SpriteAtlas) => {
                if (err) {
                    console.error(err)
                    return
                }
                if (animId != this.animationId) {
                    if (this.animationId && this.animTab.Path == tab.getData().AnimationTableById.getValue(animId).Path) {
                        // console.log("换id后， 还是同一份资源")
                    } else {
                        return
                    }
                }
                this.updateNodeScale()
                this.fpsAvatar.createWithSpriteFrames(Avatar.setPlistArray(resource, this.animTab), this.animTab.FPS)
                this.fpsAvatar.actionName = this.animTab["newName"]
                this.fpsAvatar.play(this.animTab.Loop)
            })
        } else {
            this.updateNodeScale()
            this.fpsAvatar.actionName = this.animTab["newName"]
            this.fpsAvatar.createWithSpriteFrames(Avatar.setPlistArray(atlast, this.animTab), this.animTab.FPS)
        }

    }

    socketsPathV3Map: Map<string, sp.spine.Bone> = new Map()
    getSpineBonePos(path: string): sp.spine.Bone {
        if (this.spine && this.spine._skeleton) {
            if (this.socketsPathV3Map == null) {
                this.socketsPathV3Map = new Map()
            }
            let bone = this.socketsPathV3Map.get(path)
            if (bone) {
                return bone
            }
            if (JSB) {
                bone = this.spine._skeleton.bones[this.spine["_cachedSockets"].get(path)]
            } else {
                bone = this.spine._skeleton.bones[this.spine["_cachedSockets"].get(path)]
            }
            this.socketsPathV3Map.set(path, bone)
            return bone
        }

        return null
    }

    static spines: sp.Skeleton[] = []; //骨骼动画缓存池
    static sprites: Sprite[] = [];//精灵缓存池
    static fpsAnims: FPSAvatar[] = [] //动画  
    static plistSfs: Map<string, SpriteFrame[]> = new Map() //plist缓存池

    static getPlistArray(animTab: tab.AnimationTable) {
        let key = animTab.AnimationName == "" ? animTab.Path : animTab.AnimationName
        if (Avatar.plistSfs.has(key)) {
            return Avatar.plistSfs.get(key)
        }
        return null
    }

    static setPlistArray(atlas: SpriteAtlas, animTab: tab.AnimationTable) {
        let hasList = Avatar.getPlistArray(animTab)
        if (Avatar.getPlistArray(animTab)) {
            return hasList
        }

        let list = atlas.getSpriteFrames()
        if (animTab.AnimationName == "") {
            Avatar.plistSfs.set(animTab.Path, list)
            return list
        }
        let newList = []
        let validIndex = 0
        for (let index = 0; index < list.length; index++) {
            const v = list[index];
            let key
            if (animTab.FrameCount < 10) {
                key = validIndex.toString()
            } else {
                key = Avatar.getNum(validIndex)
            }
            if (v.name == (animTab.AnimationName + "_" + key)) {
                newList.push(v)
                validIndex += 1
            }
        }
        if (newList.length == 0) {
            newList = list
        }
        Avatar.plistSfs.set(animTab.AnimationName, newList)
        return newList
    }



    static getNum(num: number) {
        if (num < 10) {
            return "0" + num
        }
        return num.toString()
    }

    static getRender(type: tab.AnimationType, path?: string, fb?: Function) {
        switch (type) {
            case tab.AnimationType.AnimationType_SpriteFrame:
                let spr = Avatar.sprites.pop()
                if (spr == null) {
                    spr = Avatar.createNode().addComponent(Sprite)
                    spr.trim = false;
                    spr.sizeMode = Sprite.SizeMode.RAW;
                }
                spr.sizeMode = Sprite.SizeMode.RAW;
                spr.customMaterial = null
                if (path) {
                    spr.setTexture(path)
                }

                return spr
            case tab.AnimationType.AnimationType_SkeletonData:
                let spine = Avatar.createNode().addComponent(sp.Skeleton)
                return spine
            case tab.AnimationType.AnimationType_Plist:
                let fpsAni = Avatar.fpsAnims.pop()
                if (fpsAni == null) {
                    fpsAni = FPSAvatar.get()
                }
                fpsAni.setSprite(Avatar.getRender(tab.AnimationType.AnimationType_SpriteFrame) as Sprite)
                fpsAni.timeScale = 1
                return fpsAni
            case tab.AnimationType.AnimationType_AnimationClip:
                break
        }
    }

    static putRender(type: tab.AnimationType, path: string, render: any) {
        render.parent = null
        switch (type) {
            case tab.AnimationType.AnimationType_SpriteFrame:
                (render as Sprite).setTexture("");
                (render as Sprite).node.removeFromParent()
                Avatar.sprites.push(render)
                break
            case tab.AnimationType.AnimationType_SkeletonData:
                let _spine = render as sp.Skeleton
                _spine.setCompleteListener(null)
                _spine.skeletonData = null
                _spine.clearAnimations()
                _spine.clearTracks()
                _spine.node.removeFromParent()
                Avatar.spines.push(render)
                break
            case tab.AnimationType.AnimationType_Plist:
                let _animation = render as FPSAvatar
                _animation.stop()
                if (_animation.spr) {
                    Avatar.putRender(tab.AnimationType.AnimationType_SpriteFrame, path, _animation.spr)
                }
                _animation.reset()
                _animation.node.removeFromParent()
                Avatar.fpsAnims.push(render)
                break
            case tab.AnimationType.AnimationType_AnimationClip:
                break
        }
    }


    static createNode() {
        let nn = new Node("anim_node")
        nn.layer = Layers.Enum.DEFAULT
        nn.addComponent(UITransform)
        return nn
    }

    static renderClear() {
        Avatar.sprites.forEach(sp => {
            sp.node.destroy()
        })

        Avatar.spines.forEach(sp => {
            sp.node.destroy()
        })

        Avatar.fpsAnims.forEach(animation => {
            animation.node.destroy()
        })

        Avatar.spines.length = 0
        Avatar.fpsAnims.length = 0
        Avatar.plistSfs.clear()
        Avatar.sprites.length = 0
        Avatar.selfId = 0
    }

}