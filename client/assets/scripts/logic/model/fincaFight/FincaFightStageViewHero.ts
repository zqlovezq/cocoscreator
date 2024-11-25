import { _decorator, Component, EventTouch, instantiate, Node, Prefab, Sprite, Toggle, UITransform, Vec2, Vec3 } from 'cc';
import InfiniteList from '../../../Common/InfiniteList/InfiniteList';
import { FincaFightTeamItem } from './FincaFightTeamItem';
import { FincaFightTeamToggle } from './FincaFightTeamToggle';
import { tab } from '../../../Table/table_gen';
import { HeroDataControl } from '../hero/herobag/HeroDataControl';
import { FincaFightTeamState } from '../../../Common/script/EnumTypeMgr';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
import { AmendmentEventLocation, ButtonLock, deepClone } from '../../utils/GameUtil';
import { HeroData } from '../hero/HeroData';
import { Func } from '../../utils/Func';
import { FincaBagLayoutCell } from './FincaBagLayoutCell';
import { FincaFightData } from './FincaFightData';
import { FincaFightControl } from './FincaFightControl';
import { ShowTips } from '../../mgr/UIMgr';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

@ccclass('FincaFightStageViewHero')
export class FincaFightStageViewHero extends Component {
    @property(InfiniteList)
    list_heros: InfiniteList = null;
    @property(Prefab)
    pfb_hero_item: Prefab = null;
    @property(Node)
    node_touch_area: Node = null;
    @property(UITransform)
    touch_transform: UITransform = null;
    @property([FincaFightTeamItem])
    teamMembersArray: FincaFightTeamItem[] = [];
    @property([FincaFightTeamToggle])
    teamToggleArray: FincaFightTeamToggle[] = [];
    @property([Node])
    boundingBoxArray: Node[] = [];
    @property(Node)
    vocationToggleNode:Node = null;

    private _lineHeroCount = 3;
    private _bagVocationType = tab.HeroClass.HeroClass_Warrior;
    private _touchHeroPos: Vec3 = new Vec3();
    private _bTouch: boolean = false;
    private _list = []
    private _curSelectIndex: number = 0;
    private teamArr: number[] = [];
    private teamPosArr: Vec3[] = [];
    private _moveNode: Node = null;
    private _tempNode: Node = null;
    protected onLoad(): void {
        EventMgr.onLocal(LocalEvent.Finca_Team_Change, this.teamHeroChange, this);
        this.node_touch_area.on(Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.node_touch_area.on(Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
        this.node_touch_area.on(Node.EventType.TOUCH_END, this.onTouchEnded, this);
        this.node_touch_area.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancelled, this);
    }
    teamHeroChange(index: number) {
        this.teamMembersArray[index - 1].setData(index - 1);
        this.teamToggleArray[index - 1].setData(index - 1);
        this.showHeroView(true);
        // 判断是否还有新的空位自动移到下一个空位
        this.checkEmpty();
    }
    checkEmpty(){
        const _emptyIndex = FincaFightData.ins.getHeroEmptyIndex()
        if (_emptyIndex) {
            this.onClickTeamToggle(null, String(_emptyIndex));
            const _toggle = this.teamToggleArray[_emptyIndex - 1].node.getComponent(Toggle);
            _toggle.isChecked = true;
        }else{
            FincaFightData.ins.HeroToggleIndex = 1;
        }
    }
    initData() {
        this.checkEmpty();
        FincaFightData.ins.curSelectHero = FincaFightData.ins.heroIds[FincaFightData.ins.HeroToggleIndex-1];
        for (let i = 0; i < this.teamMembersArray.length; i++) {
            const v = this.teamMembersArray[i];
            v.setData(i)
            this.teamPosArr.push(v.node.getPosition());
        }

        for (let i = 0; i < this.teamToggleArray.length; i++) {
            const v = this.teamToggleArray[i];
            v.setData(i)
        }
        this.setVocationToggle();
        this.showHeroView(true);
    }
    protected onDestroy(): void {
        HeroDataControl.ins.refreshBagData(0);
    }
    onTouchBegan(event: EventTouch) {
        this._touchHeroPos = this.touch_transform.convertToNodeSpaceAR(AmendmentEventLocation(new Vec3(event.getUILocation().x, event.getUILocation().y, 0)));
        for (let i = 0; i < this.boundingBoxArray.length; i++) {
            const v = this.boundingBoxArray[i];
            const areaId = Number(v.name);
            const heroId = FincaFightData.ins.heroIds[areaId-1];
            if (heroId && v.getComponent(UITransform).getBoundingBox().contains(new Vec2(this._touchHeroPos.x, this._touchHeroPos.y))) {
                this._bTouch = true;
                this._curSelectIndex = areaId;
                console.log("cocos 当前选择的index为=", this._curSelectIndex);
                this._moveNode = this.teamMembersArray[this._curSelectIndex-1].node;
                Func.cocosNodeZIndex(this._moveNode, 100);
            }
        }
    }
    onTouchMoved(event: EventTouch) {
        if (!this._bTouch) {
            return;
        }
        const touchMovePos = this.touch_transform.convertToNodeSpaceAR(AmendmentEventLocation(new Vec3(event.getUILocation().x, event.getUILocation().y, 0)));
        if (touchMovePos.x > this.touch_transform.width / 2) {
            touchMovePos.x = this.touch_transform.width / 2
        }
        if (touchMovePos.x < -this.touch_transform.width / 2) {
            touchMovePos.x = -this.touch_transform.width / 2
        }

        if (touchMovePos.y > this.touch_transform.height / 2) {
            touchMovePos.y = this.touch_transform.height / 2
        }
        if (touchMovePos.y < -this.touch_transform.height / 2) {
            touchMovePos.y = -this.touch_transform.height / 2
        }
        this._moveNode.setPosition(touchMovePos);
        this.temporaryExchangeHero();
    }
    onTouchEnded(event: EventTouch) {
        if (!this._bTouch) {
            return;
        }
        console.log("cocos 触发 onTouchEnded")
        const endPos = this.touch_transform.convertToNodeSpaceAR(AmendmentEventLocation(new Vec3(event.getUILocation().x, event.getUILocation().y, 0)));
        // if(this._touchHeroPos.subtract(endPos))
        let distPos = this._touchHeroPos.subtract(endPos)
        let dist = distPos.length();
        console.log("cocos向量的长度为-->",dist);
        this._touchHeroPos = endPos
        if(dist<5){
            // 下阵英雄
            FincaFightData.ins.heroIds[this._curSelectIndex-1] = 0;
            this.teamMembersArray[this._curSelectIndex - 1].node.setPosition(this.teamPosArr[this._curSelectIndex - 1]);
            EventMgr.emitLocal(LocalEvent.Finca_Team_Change,this._curSelectIndex);
            this.cleanTouchInfo();
        }else{
            this.confirmExchangeHero();
        }
    }
    onTouchCancelled(event: EventTouch) {
        console.log("cocos 触发 onTouchCancelled");
        if(this._moveNode){
            this._moveNode.setPosition(this.teamPosArr[this._curSelectIndex - 1]);
        }
        this.cleanTouchInfo();
    }
    // 判断是否进入区域
    checkEnterArea(): number {
        for (let i = 0; i < this.boundingBoxArray.length; i++) {
            const v = this.boundingBoxArray[i];
            const areaId = Number(v.name);
            const heroId = FincaFightData.ins.heroIds[areaId-1];
            if (heroId && areaId !== this._curSelectIndex && v.getComponent(UITransform).getBoundingBox().contains(new Vec2(this._touchHeroPos.x, this._touchHeroPos.y))) {
                return Number(v.name);
            }
        }
        return -1
    }
    // 临时交换英雄的位置
    temporaryExchangeHero() {
        if (this.checkEnterArea() > 0) {
            const v = this.teamMembersArray[this.checkEnterArea() - 1].node;
            if (!this._tempNode) {
                this._tempNode = v;
                this._tempNode.setPosition(this.teamPosArr[this._curSelectIndex - 1])
            }
        }
        else {
            if (this._tempNode) {
                const tempNodeIndex = Number(this._tempNode.name.replace("pos_node", ""));
                this._tempNode.setPosition(this.teamPosArr[tempNodeIndex - 1]);
                this._tempNode = null;
            }
        }
    }
    // 最终交换英雄的位置
    confirmExchangeHero() {
        if (this.checkEnterArea() > 0) {
            this.exchangeTeamMember(this._curSelectIndex, this.checkEnterArea());
        } else {
            // 位置没有发生变化
            if (this._tempNode) {
                const tempNodeIndex = Number(this._tempNode.name.replace("pos_node", ""));
                this._tempNode.setPosition(this.teamPosArr[tempNodeIndex - 1]);
            }
            this._moveNode.setPosition(this.teamPosArr[this._curSelectIndex - 1]);
        }
        this.cleanTouchInfo();
    }
    /* 最终确认能不能交换 */
    private cleanTouchInfo() {
        this._bTouch = false;
        if (this._moveNode) {
            Func.cocosNodeZIndex(this._moveNode, 0);
        }
        this._curSelectIndex = 0
        this._moveNode = null;
        this._tempNode = null;
    }
    async exchangeTeamMember(selectIndex, changeIndex) {
        console.log(`cocos 当前选择将=${selectIndex}和${changeIndex}互换`);
        let temp = FincaFightData.ins.heroIds[selectIndex - 1];
        FincaFightData.ins.heroIds[selectIndex - 1] = FincaFightData.ins.heroIds[changeIndex - 1];
        FincaFightData.ins.heroIds[changeIndex - 1] = temp;
        console.log(FincaFightData.ins.heroIds);
        this.teamMembersArray[selectIndex - 1].setData(selectIndex - 1);
        this.teamMembersArray[changeIndex - 1].setData(changeIndex - 1);
        this.teamMembersArray[selectIndex - 1].node.setPosition(this.teamPosArr[selectIndex - 1]);
        this.teamMembersArray[changeIndex - 1].node.setPosition(this.teamPosArr[changeIndex - 1]);
    }
    groupHeroList() {
        const result = [];
        let heroInfo = HeroData.ins.getById(HeroDataControl.ins.heroId);
        if (heroInfo) {
            let heroList = deepClone(HeroDataControl.ins.getHeroListByVocation(this._bagVocationType, true));
            if (this._bagVocationType === tab.HeroClass.HeroClass_Max) {
                for (let i = heroList.length - 1; i >= 0; i--) {
                    const heroId = heroList[i];
                    const heroInfo = HeroData.ins.getById(heroId);
                    if (heroInfo.heroClassTable.HeroClass === tab.HeroClass.HeroClass_Warrior) {
                        heroList.splice(i, 1);
                    }
                }
            }
            for (let i = 0; i < heroList.length; i += this._lineHeroCount) {
                result.push(heroList.slice(i, i + this._lineHeroCount));
            }
        }

        return result;
    }
    showHeroView(isInit: boolean) {
        // 刷新背包列表
        this._list = this.groupHeroList();
        if (isInit) {
            this.list_heros.Init({
                getCellNumber: this.getCellCount.bind(this),
                getCellSize: this.getCellHeight.bind(this),
                getCellIdentifer: this.getCellIdentifer.bind(this),
                getCellView: this.getCellView.bind(this),
                getCellData: this.GetCellData.bind(this),
            });
        } else {
            this.list_heros.Refresh();
        }
        this.list_heros.scrollToOffset(new Vec2(0, 0), 1, true);
    }
    getCellCount() {
        return this._list.length;
    }
    getCellHeight() {
        return 185;
    }
    getCellIdentifer() {
        return "HeroBagLayoutCell";
    }
    getCellView() {
        return instantiate(this.pfb_hero_item).getComponent(FincaBagLayoutCell);
    }
    GetCellData(idx: number) {
        return this._list[idx]
    }
    /* 根据职业刷新界面 */
    switchVocation(event: EventTouch, vocationType: string) {
        if (this._bagVocationType == Number(vocationType)) {
            return;
        }
        this._bagVocationType = Number(vocationType);
        let heroList = HeroDataControl.ins.getHeroListByVocation(this._bagVocationType, true);
        HeroDataControl.ins.refreshBagData(heroList[0]);
        this.showHeroView(true);
    }
    onClickTeamToggle(event: EventTouch, curIndex: string) {
        if (FincaFightData.ins.HeroToggleIndex === Number(curIndex)) {
            return
        }

        if (FincaFightData.ins.getState(Number(curIndex)) === FincaFightTeamState.LOCK) {
            const _toggle = this.teamToggleArray[FincaFightData.ins.HeroToggleIndex - 1].node.getComponent(Toggle);
            _toggle.isChecked = true;
            return;
        }

        if (Number(curIndex) !== 1) {
            this._bagVocationType = tab.HeroClass.HeroClass_Max;
        } else {
            this._bagVocationType = tab.HeroClass.HeroClass_Warrior
        }
        FincaFightData.ins.HeroToggleIndex = Number(curIndex);

        this.setVocationToggle();
        this.showHeroView(true);
    }
    // 设置职业toggle
    setVocationToggle() {
        for (let i = 0; i < this.vocationToggleNode.children.length; i++) {
            const toggle = this.vocationToggleNode.children[i];
            const vocation = Number(toggle.name.slice(-1));
            if (this._bagVocationType == tab.HeroClass.HeroClass_Warrior) {
                toggle.active = vocation === tab.HeroClass.HeroClass_Warrior
            } else {
                toggle.active = !(vocation === tab.HeroClass.HeroClass_Warrior);
            }
        }
        const _toggle = this.vocationToggleNode.getChildByName("Toggle" + this._bagVocationType).getComponent(Toggle);
        _toggle.isChecked = true;
    }
    // 点击战士上下阵
    clickWarrorBtn(){
        if(FincaFightData.ins.heroIds[0]){
            FincaFightData.ins.heroIds[0] = 0;
            EventMgr.emitLocal(LocalEvent.Finca_Team_Change,1);
        }else{
            this.onClickTeamToggle(null, String(1));
            const _toggle = this.teamToggleArray[0].node.getComponent(Toggle);
            _toggle.isChecked = true;
        }
    }
    // 请求保存阵容
    @ButtonLock(1, () => { })
    onClickSaveTeam(){
        if (this._bTouch) {
            return;
        }
        if(FincaFightData.ins.heroIds[0]){
            FincaFightControl.ins.reqSetFincaBattleHeroIds(FincaFightData.ins.heroIds);
        }else{
            // 至少上个战士
            ShowTips(LangMgr.getLab("Tips_finca_1"))
        }
    }
}


