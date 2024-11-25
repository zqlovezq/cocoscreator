import { Node, Prefab, _decorator } from "cc";
import { PREVIEW } from "cc/env";
import { proto } from "client_protocol";
import { Long } from "protobufjs";
import { IClear } from "../../../../framework/base/IAbs";
import { Func } from "../../../utils/Func";
import { HeroInfo } from "../../hero/HeroInfo";

const { ccclass, property } = _decorator;

/** 主线数据 */
export class MainLevelData implements IClear {

    private static _instance: MainLevelData;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new MainLevelData();
        }
        return this._instance;
    }

    purge(): void {
        
    }

    adds(list: proto.Hero[]) {

    }

}