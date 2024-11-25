import { _decorator, Component, ForwardFlow, Node } from 'cc';
import { AbsControl } from '../../../framework/base/IAbs';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { RareBookData } from './RareBookData';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
import { tab } from '../../../Table/table_gen';
import { OpenFunctionMgr } from '../../../Common/component/OpenFunctionMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * BareBookControl
 * zhudingchao
 * Wed May 22 2024 15:38:23 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/rareBook/BareBookControl.ts
 *
 */

@ccclass('RareBookControl')
export class RareBookControl extends AbsControl {
    private static _instance: RareBookControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new RareBookControl();
        }
        return this._instance;
    }

    register(): void {
        EventMgr.onMsg(proto.Ptl.CombineBookFragmentRsp, this.on_s2c_CombineBookFragmentRsp, this);
        EventMgr.onMsg(proto.Ptl.UpgradeBookLevelRsp, this.on_s2c_UpgradeBookLevelRsp, this);
        EventMgr.onMsg(proto.Ptl.UpgradeBookStarRsp, this.on_s2c_UpgradeBookStarRsp, this);
        EventMgr.onMsg(proto.Ptl.BookFragmentSwitchRsp, this.on_s2c_BookFragmentSwitchRsp, this);
        EventMgr.onMsg(proto.Ptl.UpdateBookSeriesData, this.on_s2c_Msg_UpdateBookSeriesData, this);
        EventMgr.onMsg(proto.Ptl.TakeBookRsp, this.on_s2c_Msg_TakeBookRsp, this);
        EventMgr.onMsg(proto.Ptl.DropBookRsp, this.on_s2c_Msg_DropBookRsp, this);
        EventMgr.onMsg(proto.Ptl.UpdateBookPowerScore, this.on_s2c_Msg_UpdateBookPowerScore, this);

        RedMgr.ins.registerCalculateFb(RedDotType.Weapon_Job_Archer, this.on_red_Tujian_Weapon_Job_Archer, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Weapon_Job_Assassin, this.on_red_Tujian_Weapon_Job_Assassin, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Weapon_Job_Priest, this.on_red_Tujian_Weapon_Job_Priest, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Weapon_Job_Caster, this.on_red_Tujian_Weapon_Job_Caster, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Weapon_Job_Warrior, this.on_red_Tujian_Weapon_Job_Warrior, this);


        RedMgr.ins.registerCalculateFb(RedDotType.Book_Job, this.on_red_Book_Job, this);
        RedMgr.ins.registerCalculateFb(RedDotType.BooK_Equip, this.on_red_Book_Equip, this);

        RedMgr.ins.registerCalculateFb(RedDotType.Book_collect, this.on_red_Book_collect, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Weapon_recovery, this.on_red_Weapon_recovery, this);



    }

    requestCombineBookFragment(fragmentItemId: number) {
        let msg = new proto.Msg_CombineBookFragmentReq();
        msg.itemId = fragmentItemId;
        Net.Send(proto.Ptl.CombineBookFragmentReq, msg)

    }
    requestUpgradeBookLevel(bookId: number) {
        let msg = new proto.Msg_UpgradeBookLevelReq();
        msg.bookId = bookId;
        Net.Send(proto.Ptl.UpgradeBookLevelReq, msg)
    }
    requestUpgradeBookStar(bookId: number) {
        let msg = new proto.Msg_UpgradeBookStarReq();
        msg.bookId = bookId;
        Net.Send(proto.Ptl.UpgradeBookStarReq, msg)
    }
    requestBookFragmentSwitch() {
        let msg = new proto.Msg_BookFragmentSwitchReq();
        Net.Send(proto.Ptl.BookFragmentSwitchReq, msg)
    }
    requestTakeBook(id: number) {
        let msg = new proto.Msg_TakeBookReq();
        msg.bookId = id;
        Net.Send(proto.Ptl.TakeBookReq, msg)
    }
    requestDropBook(id: number) {
        let msg = new proto.Msg_DropBookReq();
        msg.bookId = id;
        Net.Send(proto.Ptl.DropBookReq, msg)
    }
    on_s2c_CombineBookFragmentRsp(msg: proto.Msg_CombineBookFragmentRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {

        }
    }
    on_s2c_UpgradeBookLevelRsp(msg: proto.Msg_UpgradeBookLevelRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            RareBookData.ins.updateBook(msg.book as proto.BookData)
            RareBookData.ins.updateBookCanUpLevelAndStar();
        }
    }
    on_s2c_UpgradeBookStarRsp(msg: proto.Msg_UpgradeBookStarRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            RareBookData.ins.updateBook(msg.book as proto.BookData)
            RareBookData.ins.updateBookCanUpLevelAndStar();
        }
    }
    on_s2c_BookFragmentSwitchRsp(msg: proto.Msg_BookFragmentSwitchRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {

            // RareBookData.ins.updateBook(msg.book as proto.BookData)

            RedMgr.refreshEvent(RedDotType.Weapon_recovery);

        }
    }
    on_s2c_Msg_UpdateBookSeriesData(msg: proto.Msg_UpdateBookSeriesData) {

        RareBookData.ins.updateBookSeriesData(msg.seriesData as proto.BookSeriesData[])
    }
    on_s2c_Msg_TakeBookRsp(msg: proto.Msg_TakeBookRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            RareBookData.ins.updateSlotInfo(msg.bookId, msg.slot, true);
            RedMgr.refreshEvent(RedDotType.BooK_Equip);
            // RareBookData.ins.updateBook(msg.book as proto.BookData)
        }
    }
    on_s2c_Msg_DropBookRsp(msg: proto.Msg_DropBookRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            RareBookData.ins.updateSlotInfo(msg.bookId, msg.slot, false);
            RedMgr.refreshEvent(RedDotType.BooK_Equip);
            // RareBookData.ins.updateBook(msg.book as proto.BookData)
        }
    }
    on_s2c_Msg_UpdateBookPowerScore(msg: proto.Msg_UpdateBookPowerScore) {

        RareBookData.ins.powerScore = msg.powerScore;
        // RareBookData.ins.updateBook(msg.book as proto.BookData)

    }

    on_red_Tujian_Weapon_Job_Archer() {
        let table = RareBookData.ins.getBookDicTabByHeroClass(tab.HeroClass.HeroClass_Archer);
        if (table) {
            let list = table.PhaseThreeBook;
            for (let key in list) {
                let info = RareBookData.ins.getBookInfoByItemId(list[key]);
                if (info && info.tujianRedPoint) {
                    return true;
                }
            }
        }
        return false;
    }
    on_red_Tujian_Weapon_Job_Assassin() {
        let table = RareBookData.ins.getBookDicTabByHeroClass(tab.HeroClass.HeroClass_Assassin);
        if (table) {
            let list = table.PhaseThreeBook;
            for (let key in list) {
                let info = RareBookData.ins.getBookInfoByItemId(list[key]);
                if (info && info.tujianRedPoint) {
                    return true;
                }
            }
        }
        return false;

    }
    on_red_Tujian_Weapon_Job_Priest() {
        let table = RareBookData.ins.getBookDicTabByHeroClass(tab.HeroClass.HeroClass_Priest);
        if (table) {
            let list = table.PhaseThreeBook;
            for (let key in list) {
                let info = RareBookData.ins.getBookInfoByItemId(list[key]);
                if (info && info.tujianRedPoint) {
                    return true;
                }
            }
        }
        return false;
    }
    on_red_Tujian_Weapon_Job_Caster() {
        let table = RareBookData.ins.getBookDicTabByHeroClass(tab.HeroClass.HeroClass_Caster);
        if (table) {
            let list = table.PhaseThreeBook;
            for (let key in list) {
                let info = RareBookData.ins.getBookInfoByItemId(list[key]);
                if (info && info.tujianRedPoint) {
                    return true;
                }
            }
        }
        return false;
    }
    on_red_Tujian_Weapon_Job_Warrior() {
        let table = RareBookData.ins.getBookDicTabByHeroClass(tab.HeroClass.HeroClass_Warrior);
        if (table) {
            let list = table.PhaseThreeBook;
            for (let key in list) {
                let info = RareBookData.ins.getBookInfoByItemId(list[key]);
                if (info && info.tujianRedPoint) {
                    return true;
                }
            }
        }
        return false;
    }

    refreshfTujianRedPoint(heroClass: tab.HeroClass) {
        if (heroClass == tab.HeroClass.HeroClass_Warrior) {
            RedMgr.refreshEvent(RedDotType.Weapon_Job_Warrior);
        } else if (heroClass == tab.HeroClass.HeroClass_Caster) {
            RedMgr.refreshEvent(RedDotType.Weapon_Job_Caster);
        } else if (heroClass == tab.HeroClass.HeroClass_Priest) {
            RedMgr.refreshEvent(RedDotType.Weapon_Job_Priest);
        } else if (heroClass == tab.HeroClass.HeroClass_Archer) {
            RedMgr.refreshEvent(RedDotType.Weapon_Job_Archer);
        } else if (heroClass == tab.HeroClass.HeroClass_Assassin) {
            RedMgr.refreshEvent(RedDotType.Weapon_Job_Assassin);
        }
    }

    on_red_Book_Job() {
        let stateToChange = {}
        stateToChange[tab.HeroClass.HeroClass_Assassin] = false;
        stateToChange[tab.HeroClass.HeroClass_Archer] = false;
        stateToChange[tab.HeroClass.HeroClass_Priest] = false;
        stateToChange[tab.HeroClass.HeroClass_Caster] = false;
        stateToChange[tab.HeroClass.HeroClass_Warrior] = false;
        if (OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_RareBook)) {
            let infos = RareBookData.ins.getBookInfos(false);
            for (let key in infos) {
                if (infos[key].bookTable) {
                    let heroClass = infos[key].bookTable.Class;
                    if (!stateToChange[heroClass]) {
                        stateToChange[heroClass] = infos[key].isRedPoint;
                    }
                }
            }
        }
        return stateToChange;
    }

    // on_red_Book_Job_Archer() {
    //     //---------因为初始化秘籍数据的时候功能开启数据没有 没有办法判断是否开启------------
    //     // if (OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_RareBook)) {
    //     let list = RareBookData.ins.getBookInfosByHeroClass(tab.HeroClass.HeroClass_Archer);
    //     for (let key in list) {
    //         if (list[key].isRedPoint) {
    //             return true;
    //         }
    //     }
    //     // }
    //     return false;
    // }
    // on_red_Book_Job_Assassin() {
    //     //---------因为初始化秘籍数据的时候功能开启数据没有 没有办法判断是否开启------------
    //     // if (OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_RareBook)) {
    //     let list = RareBookData.ins.getBookInfosByHeroClass(tab.HeroClass.HeroClass_Assassin);
    //     for (let key in list) {
    //         if (list[key].isRedPoint) {
    //             return true;
    //         }
    //     }
    //     // }
    //     return false;

    // }
    // on_red_Book_Job_Priest() {
    //     //---------因为初始化秘籍数据的时候功能开启数据没有 没有办法判断是否开启------------
    //     if (OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_RareBook)) {
    //         let list = RareBookData.ins.getBookInfosByHeroClass(tab.HeroClass.HeroClass_Priest);
    //         for (let key in list) {
    //             if (list[key].isRedPoint) {
    //                 return true;
    //             }
    //         }
    //     }
    //     return false;
    // }
    // on_red_Book_Job_Caster() {
    //     //---------因为初始化秘籍数据的时候功能开启数据没有 没有办法判断是否开启------------
    //     if (OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_RareBook)) {
    //         let list = RareBookData.ins.getBookInfosByHeroClass(tab.HeroClass.HeroClass_Caster);
    //         for (let key in list) {
    //             if (list[key].isRedPoint) {
    //                 return true;
    //             }
    //         }
    //     }
    //     return false;
    // }
    // on_red_Book_Job_Warrior() {
    //     //---------因为初始化秘籍数据的时候功能开启数据没有 没有办法判断是否开启------------
    //     if (OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_RareBook)) {
    //         let list = RareBookData.ins.getBookInfosByHeroClass(tab.HeroClass.HeroClass_Warrior);
    //         for (let key in list) {
    //             if (list[key].isRedPoint) {
    //                 return true;
    //             }
    //         }
    //     }
    //     return false;
    // }

    // refreshfBookJobRedPoint(heroClass: tab.HeroClass = tab.HeroClass.HeroClass_Any) {
    //     if (heroClass == tab.HeroClass.HeroClass_Any) {
    //         RedMgr.refreshEvent(RedDotType.Book_Job);
    //         RedMgr.refreshEvent(RedDotType.Book_Job_Caster);
    //         RedMgr.refreshEvent(RedDotType.Book_Job_Priest);
    //         RedMgr.refreshEvent(RedDotType.Book_Job_Archer);
    //         RedMgr.refreshEvent(RedDotType.Book_Job_Assassin);
    //     } else if (heroClass == tab.HeroClass.HeroClass_Warrior) {
    //         RedMgr.refreshEvent(RedDotType.Book_Job_Warrior);
    //     } else if (heroClass == tab.HeroClass.HeroClass_Caster) {
    //         RedMgr.refreshEvent(RedDotType.Book_Job_Caster);
    //     } else if (heroClass == tab.HeroClass.HeroClass_Priest) {
    //         RedMgr.refreshEvent(RedDotType.Book_Job_Priest);
    //     } else if (heroClass == tab.HeroClass.HeroClass_Archer) {
    //         RedMgr.refreshEvent(RedDotType.Book_Job_Archer);
    //     } else if (heroClass == tab.HeroClass.HeroClass_Assassin) {
    //         RedMgr.refreshEvent(RedDotType.Book_Job_Assassin);
    //     }
    // }

    on_red_Book_Equip() {
        let stateToChange = {}
        stateToChange[tab.HeroClass.HeroClass_Assassin] = false;
        stateToChange[tab.HeroClass.HeroClass_Archer] = false;
        stateToChange[tab.HeroClass.HeroClass_Priest] = false;
        stateToChange[tab.HeroClass.HeroClass_Caster] = false;
        stateToChange[tab.HeroClass.HeroClass_Warrior] = false;
        //---------因为初始化秘籍数据的时候功能开启数据没有 没有办法判断是否开启------------
        if (!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_RareBook)) {
            return stateToChange;
        }

        let allSlots = Array.from(RareBookData.ins.getContainerMap().values());
        for (let k in allSlots) {
            let slots = allSlots[k];
            for (let key in slots) {
                if (!stateToChange[slots[key].bookSlotTable.Class] && !slots[key].bookInfo && slots[key].isLock) {
                    let isHave = RareBookData.ins.getCanBookInfosByHeroClass(slots[key].bookSlotTable.Class).length > 0;
                    stateToChange[slots[key].bookSlotTable.Class] = isHave;
                }
            }
        }
        return stateToChange;

    }

    on_red_Book_collect() {
        if (!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_RareBook)) {
            return false;
        }
        return RareBookData.ins.bookCollectRedPointId != "";
    }
    on_red_Weapon_recovery() {
        if (!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_RareBook)) {
            return false;
        }
        let canExchangItems = RareBookData.ins.getExchangBookFragments();
        for (let key in canExchangItems) {
            let item = canExchangItems[key];
            let bookfraTab = tab.getData().BookFragmentTableById.getValue(item.itemId)
            let t = Math.floor(item.num / bookfraTab.BaseAmount);
            if (t >= 1) {
                return true;
            }
        }
        return false;

    }

}