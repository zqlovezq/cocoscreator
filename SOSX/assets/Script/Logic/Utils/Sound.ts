import { tab } from "../../Table/table_gen";
import { LoadResAsync } from "./GameUtils";

const BGMFlag = "bgm_flag"
const SEFlag = "se_flag"

export function PlaySound(key:string): number  {
    return Sound.Instance.Play(key);
}  

export default class Sound {

    protected static _instance: Sound;
    m_fVolumeBGM: number;
    m_fVolumeSount: number;
    m_iBgmId: any;
    public static get Instance() {
        if(Sound._instance === undefined) {
            Sound._instance = new Sound;
        }
        return Sound._instance
    }

    protected _autoID:number = 0;
    protected _idMap:tab.Dictionary<number, number>; //<自增id，AudioID>
    protected _overlap:tab.Dictionary<string, boolean>;
    protected _idHitMap:tab.Dictionary<string, number>;
    protected enableBGM = true;
    protected enableSE = true;

    constructor() {
        this._idMap = new tab.Dictionary<number, number>()
        this._overlap = new tab.Dictionary<string, boolean>();
        this._idHitMap = new tab.Dictionary<string, number>();

        let bgmFlag = cc.sys.localStorage.getItem(BGMFlag)
        this.EnableBGM(bgmFlag !== "0", false)
        let seFlag = cc.sys.localStorage.getItem(SEFlag)
        this.EnableSE(seFlag !== "0", false)
    }

    public Play(key: string, finishCallback?:Function): number {
        let soundTD = tab.Data.SoundTableByKey.getValue(key)
        if(!soundTD) {
            cc.error("cannot found sound:" + key)
            return undefined;
        }

        if(!this.enableBGM && soundTD.Type === tab.SoundType.SoundType_BGM) {
            return undefined;
        }
        if(!this.enableSE && soundTD.Type === tab.SoundType.SoundType_SE) {
            return undefined;
        }

        let id = ++this._autoID;
        this._idMap.setValue(id, -1)

        LoadResAsync(soundTD.File, cc.AudioClip).then(audioClip=>{
            if(!this._idMap.containsKey(id)) {
                return undefined; //已经不需要播放了
            }

            let audioID = this.playClip(audioClip, soundTD);
            this._idMap.setValue(id, audioID)

            cc.audioEngine.setFinishCallback(audioID, ()=>{
                this._idMap.remove(id)
                if(finishCallback !== undefined) {
                    finishCallback()
                }
            })
        })

        return id
    }


    public PlayHitEffect(key: string, finishCallback?:Function): number {
        let soundTD = tab.Data.SoundTableByKey.getValue(key)
        if(!soundTD) {
            cc.error("cannot found sound:" + key)
            return undefined;
        }

        if(!this.enableBGM && soundTD.Type === tab.SoundType.SoundType_BGM) {
            return undefined;
        }
        if(!this.enableSE && soundTD.Type === tab.SoundType.SoundType_SE) {
            return undefined;
        }

        let id = this._idHitMap.getValue(key);
        if(id>3) {
            return undefined; //已经不需要播放了
        }

        if(id){
            id++;
            this._idHitMap.setValue(key,id);
        }else{
            id=1;
            this._idHitMap.setValue(key,id);
        }
        LoadResAsync(soundTD.File, cc.AudioClip).then(audioClip=>{
            let audioID = this.playClip(audioClip, soundTD);
            cc.audioEngine.setFinishCallback(audioID, ()=>{
                this._idHitMap.setValue(key,this._idHitMap.getValue(key)-1);
                if(finishCallback !== undefined) {
                    finishCallback()
                }
            })
        })

        return id
    }

    public async PlayNonoverlap(key: string, target:cc.Object, duration:number = 0.1, finishCallback?:Function) {
        if(this._overlap.containsKey(key)) {
            return undefined;
        }
        let id = await this.Play(key, finishCallback)
        if(id !== undefined) {
            this._overlap.setValue(key, true)
            cc.director.getScheduler().schedule(()=>this._overlap.remove(key), target, duration, 1, 0, false)
        }
    }

    public Stop(id:number) {
        let audioID = this._idMap.getValue(id)
        if(audioID !== undefined) {
            cc.audioEngine.stop(audioID)
            this._idMap.remove(id)
        }
    }

    public StopAllSE() {
        cc.audioEngine.stopAllEffects()
        this._idMap.clear()
        this._overlap.clear()
    }

    public StopAll() {
        cc.audioEngine.stopAll()
        this._idMap.clear()
        this._overlap.clear()
    }

    public StopBGM() {
        cc.audioEngine.stopMusic()
    }

    protected playClip(audioClip: cc.AudioClip, soundTD: tab.SoundTable) {
        let soundId = -1;
        let loop = (soundTD.Loop == tab.BoolType.BoolType_True);
        switch(soundTD.Type) {
            case tab.SoundType.SoundType_SE: {
                //音效
                soundId = cc.audioEngine.playEffect(audioClip, loop)
                break;
            }
            case tab.SoundType.SoundType_BGM: {
                //背景音乐
                soundId = cc.audioEngine.playMusic(audioClip, loop)
                this.m_iBgmId = soundId
                break;
            }
            case tab.SoundType.SoundType_VOICE: {
                //对话
                break;
            }
        }

        cc.audioEngine.setVolume(soundId, soundTD.Volume / 100)
        return soundId;
    }

    public EnableBGM(enable:boolean, save = true) {
        if(!enable) {
            this.StopBGM()
        }
        this.enableBGM = enable;

        if(save) {
            cc.sys.localStorage.setItem(BGMFlag, enable?"1":"0")
        }
    }

    public EnableSE(enable:boolean, save = true) {
        if(!enable) {
            this.StopAllSE()
        }
        this.enableSE = enable;

        if(save) {
            cc.sys.localStorage.setItem(SEFlag, enable?"1":"0")
        }
    }

    public isEnableBGM() {
        return this.enableBGM;
    }

    public isEnableSE() {
        return this.enableSE;
    }
}

