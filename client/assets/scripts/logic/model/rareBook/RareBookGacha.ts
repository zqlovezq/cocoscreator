import { _decorator, Button, Component, EventTouch, Label, Node, RichText, sp, Sprite } from 'cc';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { EventMgr } from '../../mgr/EventMgr';
import { RareBookData } from './RareBookData';
import { tab } from '../../../Table/table_gen';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { LangMgr } from '../../mgr/LangMgr';
import { ItemData } from '../item/ItemData';
import { gachaReplace } from '../../utils/GameUtil';
import { AdMgr } from '../AdMgr';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
import { RoleData } from '../role/RoleData';
import { RecruitType } from '../../../Common/script/EnumTypeMgr';
const { ccclass, property } = _decorator;

@ccclass('RareBookGacha')
export class RareBookGacha extends Component {
    @property(Label)
    lbl_progress: Label = null;
    @property(Label)
    lbl_adv_time: Label = null;
    @property(RichText)
    lbl_desc: RichText = null;
    @property(Node)
    node_adv_btn: Node = null;
    @property(sp.Skeleton)
    spine_draw: sp.Skeleton = null;
    public _recruitEquipMap: Map<number, boolean> = new Map();
    private _isGacha: boolean = false
    protected onLoad(): void {
        EventMgr.onMsg(proto.Ptl.GachaRsp, this.on_s2c_GachaRsp, this);
    }
    initView() {
        this._recruitEquipMap.clear();
        const bookDatas = RareBookData.ins.getBookInfos();
        for (let i = 0; i < bookDatas.length; i++) {
            const bookData = bookDatas[i];
            if (bookData.bookTable.Aptitude === tab.HeroAptitude.HeroAptitude_R) {
                this._recruitEquipMap.set(bookData.itemId, bookData.isLock)
            }
        }
        this.asyncView();
    }
    on_s2c_GachaRsp(msg: proto.Msg_GachaRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        if (msg.id === 1000) {
            this.showNewBookPop(msg.rewards)
        } else {
            this.showGachaView(msg.rewards, msg.id)
        }
        this._isGacha = false;
        this.asyncView();
        RedMgr.refreshEvent(RedDotType.HeroGacha); //保底抽
        RedMgr.refreshEvent(RedDotType.GachaAds); //广告
    }
    /* 同步一些可变化的信息 */
    asyncView() {
        const type = tab.AdType.AdType_Gacha1001
        const maxCount = AdMgr.ins.getAdCountMaxByType(type);
        const curCount = AdMgr.ins.getAdCountByType(type);
        this.lbl_progress.string = ItemData.ins.getCount(82) + "/" + 1000;
        this.lbl_adv_time.string = (maxCount - curCount) + "/" + maxCount;
        if (AdMgr.ins.getAdCountByType(type) >= AdMgr.ins.getAdCountMaxByType(type)) {
            this.node_adv_btn.getComponent(Sprite).grayscale = true;
            this.node_adv_btn.getComponent(Button).interactable = false;
        }

        let totalCount = 10;
        for (let i = 0; i < RoleData.ins.drop.data.length; i++) {
            const data = RoleData.ins.drop.data[i];
            if (data.id == "book_94") {
                totalCount = totalCount - data.sum;
                break;
            }
        }
        this.lbl_desc.string = LangMgr.getCombineString("ui_rarebook_3", [totalCount]);
    }
    /* 十连抽 */
    private gachaTen() {
        if (this._isGacha) {
            return
        }
        this.sendGacha(1002);
    }
    /* 单抽 */
    private gachaOnce() {
        if (this._isGacha) {
            return
        }
        this.sendGacha(1001);
    }
    /* 广告抽 */
    sendAdvWatch() {
        const type = tab.AdType.AdType_Gacha1001;
        if (AdMgr.ins.getAdCountByType(type) >= AdMgr.ins.getAdCountMaxByType(type)) {
            return
        }


        AdMgr.ins.playVideoAd(tab.AdType.AdType_Gacha1001, () => {
            this.sendGacha(1001, true);
        }, false)
    }
    sendGacha(id: number, isAdv: boolean = false) {
        const self = this;
        const gachaTab = tab.getData().GachaTableById.getValue(id);
        const count = gachaTab.ItemCount;
        const itemId = gachaTab.ItemId;
        const itemCount = ItemData.ins.getCount(itemId);

        const sendMsg = (() => {
            self._isGacha = true;
            self.spine_draw.setAnimation(0, "xuanzhuan", false);
            self.spine_draw.setCompleteListener((listener) => {
                if (listener.animation.name === "xuanzhuan") {
                    let msg = new proto.Msg_GachaReq();
                    msg.id = id;
                    msg.fromAdv = isAdv;
                    Net.Send(proto.Ptl.GachaReq, msg);
                }
            })
        })

        if (!isAdv && itemCount < count) {
            let canSendMsg = gachaReplace(id, RecruitType.Book, sendMsg);
            if (!canSendMsg) {
                return;
            }
        }
        sendMsg();
    }
    /* 显示抽卡界面 */
    showGachaView(_rewards: proto.IItem[], _id: number) {
        UIMgr.ins.show({
            viewName: ViewName.RecruitGetPop, data: {
                rewards: _rewards,
                id: _id,
                type: RecruitType.Book,
                map: this._recruitEquipMap
            }
        });
    }
    /* 显示武器保底抽界面 */
    showGuaranteeView(event: EventTouch, type: string) {
        UIMgr.ins.show({
            viewName: ViewName.RareBookGuaranteedPop
        });
    }
    showNewBookPop(rewards: proto.IItem[]) {
        const self = this;
        const itemTab = tab.getData().ItemTableById.getValue(rewards[0].itemId);
        if (itemTab.Type === tab.ItemType.ItemType_Book) {
            UIMgr.ins.show({
                viewName: ViewName.RareBookGetPop, data: {
                    itemId: rewards[0].itemId
                }
            })
        } else {
            UIMgr.ins.show({
                viewName: ViewName.CongratulationPop, data: rewards
            })
        }
    }
    /* 显示概率公示界面 */
    showGachaProbabilityView(event: EventTouch, type: string) {
        UIMgr.ins.show({viewName:ViewName.RareBookProbabilityPop})
        // UIMgr.ins.show({
        //     viewName: ViewName.RecruitProbabilityPop, data: {
        //         type: RecruitType.Book
        //     }
        // });
    }
}


