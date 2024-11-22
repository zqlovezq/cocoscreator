
import { isValidObj, loadPvpCardInfoState, savePvpCardInfoState } from "../Common/CommonInterface";
import Role from "../Common/Role";
import PopLayer from "../Utils/PopLayer";
import Sound, { PlaySound } from "../Utils/Sound";

const {ccclass, property} = cc._decorator;
const pvp_card_info_key = "pvp_card_info";

@ccclass
export default class SettingNode extends PopLayer {

    // @property(cc.Label)
    // effectprecent: cc.Label = null;

    // @property(cc.Label)
    // musicprecent: cc.Label = null

    // @property(cc.Slider)
    // musicslider: cc.Slider = null

    // @property(cc.Slider)
    // effectslider:cc.Slider = null

    // @property(cc.Node)
    // musicbackground: cc.Node = null

    // @property(cc.Node)
    // effectbackground: cc.Node = null

    // @property(cc.Node)
    // musicbar: cc.Node = null

    // @property(cc.Node)
    // effectbar: cc.Node = null

    @property(cc.Toggle)
    musicOpenToggle:cc.Toggle = null

    @property(cc.Toggle)
    musicCloseToggle:cc.Toggle = null

    @property(cc.Toggle)
    effectOpenToggle:cc.Toggle = null

    @property(cc.Toggle)
    effectCloseToggle:cc.Toggle = null

    // @property(cc.Toggle)
    // toggle_card_info_open: cc.Toggle = null;

    // @property(cc.Toggle)
    // toggle_card_info_closed: cc.Toggle = null;

    start () {
        this.musicOpenToggle.isChecked = Sound.Instance.isEnableBGM();
        this.musicCloseToggle.isChecked = !Sound.Instance.isEnableBGM();

        this.effectOpenToggle.isChecked = Sound.Instance.isEnableSE();
        this.effectCloseToggle.isChecked = !Sound.Instance.isEnableSE();

        let bOpen = loadPvpCardInfoState();
        // this.toggle_card_info_open.isChecked   = bOpen;
        // this.toggle_card_info_closed.isChecked = !bOpen;
    }

    onSlideMusic() {
        // let value = this.musicslider.progress
        // this.musicprecent.string = Math.floor(value*100).toString() + '%'
        // Sound.Instance.setMusicVolume(Number(value.toFixed(2)))
        // this.musicbar.scaleX = value
    }

    onSlideEffect(){
        // let value = this.effectslider.progress
        // this.effectprecent.string = Math.floor(value*100).toString() + '%'
        // Sound.Instance.setEffectVolume(Number(value.toFixed(2)))
        // this.effectbar.scaleX = value
    }

    onCloseMusic(){
        Sound.Instance.EnableBGM(false);
    }

    onOpenMusic(){
        Sound.Instance.EnableBGM(true);
        PlaySound("BGM_Main")
    }

    onCloseEffect(){
        Sound.Instance.EnableSE(false);
    }

    onOpenEffect(){
        Sound.Instance.EnableSE(true);
    }

    onClickOpenPvpCardInfo(){
        savePvpCardInfoState(true);
    }

    onClickClosedPvpCardInfo(){
        savePvpCardInfoState(false);
    }
}
