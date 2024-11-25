import { _decorator, Component, EventTouch, instantiate, Node, Prefab, Toggle, Vec2 } from 'cc';
import { tab } from '../../../Table/table_gen';
import InfiniteList from '../../../Common/InfiniteList/InfiniteList';
import { RareBookData } from '../rareBook/RareBookData';
import { FincaFightStageWeaponLayoutItem } from './FincaFightStageWeaponLayoutItem';
import { RareBookInfo } from '../rareBook/RareBookInfo';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
import { FincaFightBookToggle } from './FincaFightBookToggle';
import { FincaFightData } from './FincaFightData';
import { FincaFightTeamState } from '../../../Common/script/EnumTypeMgr';
import { WeaponInfoItem } from '../common/WeaponInfoItem';
import { ButtonLock, moveZeroes } from '../../utils/GameUtil';
import { FincaFightControl } from './FincaFightControl';
import { proto } from 'client_protocol';
const { ccclass, property } = _decorator;

@ccclass('FincaFightStageViewBook')
export class FincaFightStageViewBook extends Component {
    @property(InfiniteList)
    list_books: InfiniteList = null;
    @property(Prefab)
    pfb_book_item: Prefab = null;
    @property(Node)
    vocationToggleNode: Node = null;
    @property([FincaFightBookToggle])
    teamToggleArray: FincaFightBookToggle[] = [];
    @property(WeaponInfoItem)
    WeaponInfoItem: WeaponInfoItem = null;
    @property(Node)
    node_no_weapon: Node = null;
    private _list = []
    private _vocationType = tab.HeroClass.HeroClass_Any;
    private _lineHeroCount = 4;
    protected onLoad(): void {
        EventMgr.onLocal(LocalEvent.Finca_Book_Change, this.teamBookChange, this);
        EventMgr.onMsg(proto.Ptl.SetFincaBattleBookIdsRsp, this.on_s2c_SetFincaBattleBookIdsRsp, this);
    }
    teamBookChange(index: number) {
        this.teamToggleArray[index - 1].setData(index - 1);
        this.checkEmpty();
        this.showBookView(true);
        this.updateWeaponInfoItem();
    }
    checkEmpty() {
        const _emptyIndex = FincaFightData.ins.getBookEmptyIndex()
        if (_emptyIndex) {
            this.onClickTeamToggle(null, String(_emptyIndex));
            const _toggle = this.teamToggleArray[_emptyIndex - 1].node.getComponent(Toggle);
            _toggle.isChecked = true;
            FincaFightData.ins.curSelectBook = FincaFightData.ins.bookIds[_emptyIndex - 1];
        }
    }
    initData() {
        for (let i = 0; i < this.teamToggleArray.length; i++) {
            const v = this.teamToggleArray[i];
            if (i === 0) {
                FincaFightData.ins.BookToggleIndex = 1;
            }
            v.setData(i)
        }

        this._vocationType = tab.HeroClass.HeroClass_Any;
        const _toggle = this.vocationToggleNode.getChildByName("Toggle" + this._vocationType).getComponent(Toggle);
        _toggle.isChecked = true;
        this.checkEmpty();
        this.updateWeaponInfoItem();
        this.showBookView(true)
    }
    groupBookList() {
        const result = [];
        const bookList = FincaFightData.ins.getBookList().get(this._vocationType);
        for (let i = 0; i < bookList.length; i += this._lineHeroCount) {
            result.push(bookList.slice(i, i + this._lineHeroCount));
        }
        return result;
    }
    showBookView(isInit: boolean) {
        // 刷新背包列表
        this._list = this.groupBookList();
        if (isInit) {
            this.list_books.Init({
                getCellNumber: this.getCellCount.bind(this),
                getCellSize: this.getCellHeight.bind(this),
                getCellIdentifer: this.getCellIdentifer.bind(this),
                getCellView: this.getCellView.bind(this),
                getCellData: this.GetCellData.bind(this),
            });
        } else {
            this.list_books.Refresh();
        }
        this.list_books.scrollToOffset(new Vec2(0, 0), 1, true)
    }
    getCellCount() {
        return this._list.length;
    }
    getCellHeight() {
        return 150;
    }
    getCellIdentifer() {
        return "FincaFightStageWeaponLayoutItem";
    }
    getCellView() {
        return instantiate(this.pfb_book_item).getComponent(FincaFightStageWeaponLayoutItem);
    }
    GetCellData(idx: number) {
        return this._list[idx]
    }
    switchVocation(event: EventTouch, vocationType: string) {
        if (this._vocationType == Number(vocationType)) {
            return;
        }
        this._vocationType = Number(vocationType);
        this.showBookView(true);
    }
    onClickTeamToggle(event: EventTouch, curIndex: string) {
        if (FincaFightData.ins.BookToggleIndex === Number(curIndex)) {
            return
        }

        if (FincaFightData.ins.getBookState(Number(curIndex)) === FincaFightTeamState.LOCK) {
            const _toggle = this.teamToggleArray[FincaFightData.ins.BookToggleIndex - 1].node.getComponent(Toggle);
            _toggle.isChecked = true;
            return;
        }
        FincaFightData.ins.BookToggleIndex = Number(curIndex);
        FincaFightData.ins.curSelectBook = FincaFightData.ins.bookIds[FincaFightData.ins.BookToggleIndex - 1];
        this.updateWeaponInfoItem();
        this.showBookView(true);
    }
    updateWeaponInfoItem() {
        if (FincaFightData.ins.curSelectBook) {
            this.node_no_weapon.active = false;
            this.WeaponInfoItem.node.active = true;
            let bookInfo = RareBookData.ins.getBookInfoByItemId(FincaFightData.ins.curSelectBook);
            this.WeaponInfoItem.initData(bookInfo);
            this.WeaponInfoItem.setShowStar(bookInfo.bookTable.Aptitude == tab.HeroAptitude.HeroAptitude_SR);
        } else {
            this.node_no_weapon.active = true;
            this.WeaponInfoItem.node.active = false;
        }
    }
    // 请求保存阵容
    @ButtonLock(1, () => { })
    onClickSaveTeam() {
        FincaFightData.ins.bookIds = moveZeroes(FincaFightData.ins.bookIds);
        FincaFightControl.ins.reqSetFincaBattleBookIds(FincaFightData.ins.bookIds);
    }
    on_s2c_SetFincaBattleBookIdsRsp(msg: proto.Msg_SetFincaBattleBookIdsRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        for (let i = 0; i < this.teamToggleArray.length; i++) {
            const v = this.teamToggleArray[i];
            if (i === 0) {
                FincaFightData.ins.BookToggleIndex = 1;
            }
            v.setData(i)
        }
        this.checkEmpty();
    }
}


