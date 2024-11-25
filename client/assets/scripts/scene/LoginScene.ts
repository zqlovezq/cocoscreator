import { _decorator, Component, director, DynamicAtlasManager, Label, macro, Node, Prefab, ResolutionPolicy, sp, SpriteAtlas, SpriteFrame, Texture2D, view } from 'cc';
import { SceneBase } from './SceneBase';
import { GameInit } from '../GameInit';
import { LoadTable } from '../Table/table';
import { tab } from '../Table/table_gen';
import { proto } from 'client_protocol';
import { Writer } from 'protobufjs';
import { SceneMgr } from '../logic/mgr/SceneMgr';
import { ClientView } from '../logic/mgr/ClientView';
import { ResMgr } from '../logic/mgr/ResMgr';
import { Global } from '../Global';
import { AdMgr } from '../logic/model/AdMgr';
import { ItemPoolMgr } from '../logic/model/item/ItemPoolMgr';
import Sound from '../logic/utils/Sound';
const { ccclass, property } = _decorator;

@ccclass('LoginScene')
export class LoginScene extends SceneBase {
    @property(Label)
    verLab: Label = null

    protected onLoad(): void {
        super.onLoad()

        this.showDefaultPfb()

        this.verLab.string = Global.getVersionStr()
        let conf = tab.getData().ChannelTableByChannelType.getValue(0)
        console.log(conf)


    }
    protected start(): void {
       
        this.initLoadRes()
    }

    initLoadRes() {
        ItemPoolMgr.ins.loadItemPrefab();
        Sound.ins.loadBgm();
        ResMgr.addRef("textrue/bg_1", SpriteFrame)
        ResMgr.addRef("Animation/common/star_1", SpriteFrame)
        ResMgr.addRef("Animation/common/star_2", SpriteFrame)
        ResMgr.addRef("Animation/common/star_3", SpriteAtlas)
        ResMgr.addRef("Animation/common/star_4", SpriteAtlas)
        ResMgr.addRef("Animation/common/star_5", SpriteAtlas)
    }

    testPb() {
        console.log("测试打印protobuff")
        console.log(proto.Ptl)
        let aa = new proto.Msg_LoginReq()
        aa.uid = "uid"
        aa.group = "group"
        aa.token = "token"
        // aa.PlatID = 1
        // aa.openId = "2"
        // aa.uid = "3"
        console.log(aa)
        let unit8 = this.PbEncode(aa)
        console.log(unit8)
        let pb = this.decode(proto.Ptl.LoginReq, unit8)
    }
    PbEncode(message: any): Uint8Array {
        let writer = message.constructor.encode(message) as Writer;
        return writer?.finish();
    }

    decode(ptl: number, unit8: Uint8Array) {
        let pb = proto["Msg_" + (proto.Ptl[ptl])].decode(unit8)
        console.log(pb)
        return pb
    }

}

