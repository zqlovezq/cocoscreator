
import { tab } from "../../Table/table_gen";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TalentTotalCell extends cc.Component {    
    @property(cc.Node)
    talentNode: cc.Node = null

    @property(cc.Sprite)
    statusFrame: cc.Sprite = null

    @property(cc.Sprite)
    specialFrame: cc.Sprite = null

    @property(cc.Sprite)
    icon: cc.Sprite = null

    @property(cc.Node)
    normal: cc.Node = null

    @property(cc.Label)
    normal_label_1: cc.Label = null;

    @property(cc.Label)
    normal_label_2: cc.Label = null

    @property(cc.Node)
    specail: cc.Node = null

    @property(cc.RichText)
    specail_label_1: cc.RichText = null;

    desc:string = ""
    normalValue:number = 0

    @property(cc.Node)
    emptyNode: cc.Node = null

    setView(talentId, value){
        let cfg:tab.TalentTable = tab.Data.TalentTableByID.getValue(talentId)
        if(cfg == undefined){
            this.talentNode.active = false
            this.emptyNode.active = true
            return;
        }

        this.talentNode.active = true
        this.emptyNode.active = false

        this.icon.setTexture(cfg.Icon)
        this.statusFrame.node.active = cfg.Type == tab.TalentType.TalentType_Status
        this.specialFrame.node.active = cfg.Type == tab.TalentType.TalentType_Special

        this.normal.active = cfg.Type == tab.TalentType.TalentType_Status
        this.specail.active = cfg.Type == tab.TalentType.TalentType_Special

        if(this.normal.active){
            this.normal_label_1.string = cfg.AttrDesc
            this.normalValue = this.getTalentNumberByID(talentId) * value
            this.normal_label_2.string = String(this.normalValue) + "%"
        } else if(this.specail.active) {
            this.specail_label_1.string = cfg.Tips
        }

        this.desc = cfg.AttrDesc
    }

    getAttrType():string {
        return this.desc
    }


    addValue(arg0: number) {
        this.normalValue += arg0
        this.normal_label_2.string = String(this.normalValue) + "%"
    }

    //只获得状态类的属性加成,不考虑特殊天赋
    getTalentNumberByID(talentId){
        let num:number = 0
        let cfg:tab.TalentTable = tab.Data.TalentTableByID.getValue(talentId)
        if(cfg == undefined){
            return num;
        }
        num = cfg.AtkDamage || cfg.CriticalRate || cfg.AtkSpeed || cfg.CriticalDamage || cfg.LowLvAtk || cfg.HightLvAtk
        return num;
    }
}
