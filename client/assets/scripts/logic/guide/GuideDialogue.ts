import { _decorator, AudioClip, AudioSource, Component, Node, RichText, Sprite, Vec3 } from 'cc';
import { EventMgr } from '../mgr/EventMgr';
import { LocalEvent } from '../define/LocalEvent';
import { tab } from '../../Table/table_gen';
import { LangMgr } from '../mgr/LangMgr';
import Sound, { PlaySound } from '../utils/Sound';
import { LoadResAsync } from '../mgr/ResMgr';
const { ccclass, property } = _decorator;

@ccclass('GuideDialogue')
export class GuideDialogue extends Component {
    @property(Node)
    node_block: Node = null;
    @property(AudioSource)
    guide_audio:AudioSource = null;
    protected m_HideCallback: Function;
    protected m_AutoHide: boolean = true;
    private soundId: number = 0;
    private canHide:boolean = false;
    start() {
        EventMgr.onLocal(LocalEvent.HideDialogue, () => {
            this.hide()
        }, this)
    }
    setDialogude(id: string, callback?: Function) {
        var self = this;
        this.canHide = true;
        if (callback) {
            this.node.on(Node.EventType.TOUCH_START, (event: Event) => {
                this.hide();
            }, this)
        } else {
            this.node.targetOff(this.node);
        }
        // 通过id获取tab列表
        const dialogueTab = tab.getData().GuideDialogueTableById.getValue(id);
        this.m_HideCallback = callback;
        const leftNode = this.node.getChildByName("left_node");
        const rightNode = this.node.getChildByName("right_node");
        leftNode.active = false;
        rightNode.active = false;
        const showNode: Node = dialogueTab.IsLeft ? leftNode : rightNode;
        this.node_block.active = false;
        const pos = showNode.getPosition();
        showNode.setPosition(new Vec3(pos.x + dialogueTab.PosX, pos.y + dialogueTab.PosY, 0))
        showNode.active = true;
        const richTextLbl = showNode.getChildByName("bg").getChildByName("RichText").getComponent(RichText);
        richTextLbl.string = LangMgr.getLab(id);
        showNode.getChildByName("img").getComponent(Sprite).setTexture(dialogueTab.Head);
        if(dialogueTab.Sound){
            let soundTD = tab.getData().SoundTableById.getValue(dialogueTab.Sound);
            if (!soundTD) {
                console.error("cannot found sound:" + dialogueTab.Sound)
                return undefined;
            }
            if(soundTD.Path){
                LoadResAsync(soundTD.Path, AudioClip).then(audioClip => {
                    if(self.canHide){
                        this.guide_audio.clip = audioClip;
                        this.guide_audio.play();
                    }
                })
            }
        }
    }
    protected hide() {
        this.canHide = false;
        this.guide_audio.stop();
        this.DoCallback()
        this.node.removeFromParent()
        this.node.destroy();
    }
    protected DoCallback() {
        if (this.m_HideCallback) {
            let callback = this.m_HideCallback;
            this.m_HideCallback = null;
            callback();
        }
    }
}


