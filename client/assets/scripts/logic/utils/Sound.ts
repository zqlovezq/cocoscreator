/*
 * @Date: 2024-04-19 15:09:14
 * @LastEditors: wzq
 * @LastEditTime: 2024-07-15 18:24:10
 */

//Sound.ts
import { Node, AudioSource, AudioClip, director, NodePool, Asset } from 'cc';
import { tab } from '../../Table/table_gen';
import { Func } from './Func';
import { LoadResAsync } from "../mgr/ResMgr";
const BGMFlag = "bgm_flag"
const SEFlag = "se_flag"
export function PlaySound(key: number): number {
    let soundTD = tab.getData().SoundTableById.getValue(key)
    if (soundTD.Type === tab.SoundType.SoundType_Music) {
        Sound.ins.StopBGM();
        return Sound.ins.Play(key);
    } else {
        return Sound.ins.PlayHitEffect(key);
    }
}
export default class Sound {
    private static _ins: Sound;
    public static get ins(): Sound {
        if (this._ins == null) {
            this._ins = new Sound();
        }
        return this._ins;
    }
    private _audioEffectPool: NodePool;
    private curAudioBGM: AudioSource;//BGM组件
    m_fVolumeBGM: number;
    m_fVolumeSount: number;
    m_iBgmId: any;
    m_iBgmFile: string
    protected _autoID: number = 0;
    protected _idMap: tab.Dictionary<number, number>; //<自增id，AudioID>
    protected _overlap: tab.Dictionary<number, boolean>;
    protected _idHitMap: tab.Dictionary<number, number>;
    protected enableBGM = true;
    protected enableSE = true;
    private main_bgm: AudioClip;
    private battle_bgm: AudioClip;
    private soundEffectParentNode: Node = null
    constructor() {
        //@en create a node as audioMgr
        //@zh 创建一个节点作为 audioMgr
        let Sound = new Node();
        Sound.name = '__Sound__';

        //@en add to the scene.
        //@zh 添加节点到场景
        director.getScene().addChild(Sound);

        //@en make it as a persistent node, so it won't be destroied when scene change.
        //@zh 标记为常驻节点，这样场景切换的时候就不会被销毁了
        director.addPersistRootNode(Sound);
        //@en add AudioSource componrnt to play audios.
        //@zh 添加 AudioSource 组件，用于播放音频。
        this.curAudioBGM = Sound.addComponent(AudioSource);
        this.curAudioBGM.loop = true;

        this.soundEffectParentNode = new Node("SoundEffectParentNode")
        Sound.addChild(this.soundEffectParentNode)

        this._idMap = new tab.Dictionary<number, number>()
        this._overlap = new tab.Dictionary<number, boolean>();
        this._idHitMap = new tab.Dictionary<number, number>();

        let bgmFlag = Func.getItem(BGMFlag)
        this.EnableBGM(bgmFlag !== "false")
        let seFlag = Func.getItem(SEFlag)
        this.EnableSE(seFlag !== "false")
        this._audioEffectPool = new NodePool();
    }
    async loadBgm() {
        this.main_bgm = await LoadResAsync('sound/main', AudioClip);
        this.battle_bgm = await LoadResAsync('sound/battle_main', AudioClip);
        this.addRef(this.main_bgm)
        this.addRef(this.battle_bgm)
    }
    addRef(ass: Asset) {
        if (ass) {
            ass.addRef()
        }
    }
    public Play(key: number, finishCallback?: Function): number {
        if (!key) {
            return;
        }
        if (tab.getData() == null) {
            return
        }
        if (!this.curAudioBGM) {
            console.error("audioSource is null");
        }
        let soundTD = tab.getData().SoundTableById.getValue(key)
        if (!soundTD) {
            console.error("cannot found sound:" + key)
            return undefined;
        }

        // let bgmFlag = Func.getItem(BGMFlag)
        if (!this.enableBGM && soundTD.Type === tab.SoundType.SoundType_Music
            // &&bgmFlag == "false"
        ) {
            return undefined;
        }
        if (soundTD.Type == tab.SoundType.SoundType_Music) {
            if (this.m_iBgmFile == soundTD.Path) {
                console.warn("同一个背景音乐-不播放")
                return undefined
            }
        }
        let id = ++this._autoID;
        let audioID = 0;
        if (soundTD.Id === 1) {
            audioID = this.playClip(this.main_bgm, soundTD);
        } else if (soundTD.Id === 2) {
            audioID = this.playClip(this.battle_bgm, soundTD);
        }
        this._idMap.setValue(id, audioID)
        return id
    }
    public PlayHitEffect(key: number, finishCallback?: Function): number {
        if (!key) {
            return undefined;
        }
        let soundTD = tab.getData().SoundTableById.getValue(key);
        if (!soundTD) {
            console.error("cannot found sound:" + key)
            return undefined;
        }

        // let seFlag = Func.getItem(SEFlag)
        if (!this.enableSE && soundTD.Type === tab.SoundType.SoundType_SoundEffect
            // &&seFlag == "false"
        ) {
            return undefined;
        }

        let id = this._idHitMap.getValue(key);
        if (id > 3) {
            return undefined; //已经不需要播放了
        }

        if (id) {
            id++;
            this._idHitMap.setValue(key, id);
        } else {
            id = 1;
            this._idHitMap.setValue(key, id);
        }
        LoadResAsync(soundTD.Path, AudioClip).then(audioClip => {
            this.playClip(audioClip, soundTD);
        })
        return id
    }
    protected playClip(audioClip: AudioClip, soundTD: tab.SoundTable) {
        let soundId = soundTD.Id;
        switch (soundTD.Type) {
            case tab.SoundType.SoundType_SoundEffect: {
                let audioSourceNode = this._audioEffectPool.get();
                if (!audioSourceNode) {
                    audioSourceNode = new Node();
                    audioSourceNode.addComponent(AudioSource);
                    this.soundEffectParentNode.addChild(audioSourceNode);
                }
                const audioSource = audioSourceNode.getComponent(AudioSource);
                audioSource.clip = audioClip;
                audioSource.play();
                audioSourceNode.off(AudioSource.EventType.ENDED);
                audioSourceNode.on(AudioSource.EventType.ENDED, () => {
                    this._idHitMap.setValue(soundId, this._idHitMap.getValue(soundId) - 1);
                    this._audioEffectPool.put(audioSourceNode);
                });
                break;
            }
            case tab.SoundType.SoundType_Music: {
                //背景音乐
                this.curAudioBGM.clip = audioClip;
                this.curAudioBGM.play();
                this.curAudioBGM.loop = soundTD.Loop;
                this.m_iBgmFile = soundTD.Path
                this.m_iBgmId = soundId;
                this.curAudioBGM.volume = soundTD.volume / 100
                break;
            }
        }
        return soundId;
    }
    /**
     * stop the audio play
     */
    stop(id: number) {
        let audioID = this._idMap.getValue(id)
        if (audioID !== undefined) {
            this.curAudioBGM.stop();
            this._idMap.remove(id)
        }
    }

    /**
     * pause the audio play
     */
    pause() {
        this.curAudioBGM.pause();
    }

    /**
     * resume the audio play
     */
    resume() {
        this.curAudioBGM.play();
    }

    destroyFightEffect() {
        this.soundEffectParentNode.destroyAllChildren()
        this._audioEffectPool.clear()
    }

    public StopAllSE() {
        this._idMap.clear()
        this._overlap.clear()
    }
    public StopBGM() {
        this.m_iBgmFile = null
        this.m_iBgmId = 0;
        this.curAudioBGM.stop();
        this.curAudioBGM.clip = null;
    }
    public EnableBGM(enable: boolean) {
        if (!enable) {
            this.StopBGM()
        }
        this.enableBGM = enable;

        // if (save) {
        //     Func.setItem(BGMFlag, enable ? "true" : "false")
        // }
    }

    public EnableSE(enable: boolean) {
        if (!enable) {
            this.StopAllSE()
        }
        this.enableSE = enable;

        // if (save) {
        //     Func.setItem(SEFlag, enable ? "true" : "false")
        // }
    }

    public isEnableBGM() {
        return this.enableBGM;
    }

    public isEnableSE() {
        return this.enableSE;
    }
}