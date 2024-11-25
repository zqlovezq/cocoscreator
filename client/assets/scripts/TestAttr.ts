import { tab } from "./Table/table_gen";


export class TestAttr {
    //攻击者属性
    static attack = [
        { type: tab.AttrType.AttrType_Attack, value: 100 },
        { type: tab.AttrType.AttrType_Hp, value: 1000 },
        { type: tab.AttrType.AttrType_BreakDefenceFixed, value: 768 },
        { type: tab.AttrType.AttrType_BreakDefencePer, value: 1200 },
        { type: tab.AttrType.AttrType_Defence, value: 100 },
        { type: tab.AttrType.AttrType_TearCoe, value: 2000 },
        { type: tab.AttrType.AttrType_TearDeep, value: 1500 },
        { type: tab.AttrType.AttrType_HealDeep, value: 1000 },
        { type: tab.AttrType.AttrType_AttackTear, value: 1100 },
        { type: tab.AttrType.AttrType_RogueLevel, value: 6
         },
   
    ]

    static defanse = [
        { type: tab.AttrType.AttrType_Attack, value: 30 },
        { type: tab.AttrType.AttrType_Hp, value: 50000000 },
        { type: tab.AttrType.AttrType_Block, value: 0 },
        { type: tab.AttrType.AttrType_Defence, value: 0 },
    ]
}

