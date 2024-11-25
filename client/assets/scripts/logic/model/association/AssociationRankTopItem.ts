import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { proto } from 'client_protocol';
import { GameUtil, refreshFlagImg } from '../../utils/GameUtil';
import { tab } from '../../../Table/table_gen';
import { SimpleRoleInfo } from '../friends/SimpleRoleInfo';
import { PlayerHeadItem } from '../common/PlayerHeadItem';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
const { ccclass, property } = _decorator;

@ccclass('AssociationRankTopItem')
export class AssociationRankTopItem extends Component {
    @property(Node)
    node_role:Node = null;
    @property(Node)
    node_guild:Node = null;
    @property(Node)
    node_null:Node = null;

    @property(Sprite)
    sp_guild_flag:Sprite = null;
    @property(Label)
    lbl_guild_name:Label = null;
    @property(Label)
    lbl_guild_force:Label = null;


    @property(PlayerHeadItem)
    palyerHerdItem:PlayerHeadItem=null;
    @property(Label)
    lbl_role_damage:Label = null;
    @property(Label)
    lbl_role_name:Label = null;
    private data:any = null;
    private simpleRole:proto.ISimpleRole = null;
    private simpleGuild:proto.ISimpleGuild = null;
    initData(data:any,view_type:number){
        this.node_role.active = false;
        this.node_guild.active = false;
        this.node_null.active = false;
        if(data){
            if(view_type===1){
                this.data = data as proto.ISimpleRank
                this.initPlayerData(this.data);
            }else{
                this.data = data as proto.IGuildBossRank
                this.initGuildData(this.data);
            }
        }else{
            this.node_null.active = true;
        }
    }
    initPlayerData(data:proto.ISimpleRank){
        this.simpleRole = data.simple;
        this.node_role.active = true;
        const playerInfo = new SimpleRoleInfo();
        playerInfo.merge(this.simpleRole);
        this.palyerHerdItem.initHeadInfo({roleInfo:playerInfo});

        this.lbl_role_damage.string = String(data.score);
        this.lbl_role_name.string = this.simpleRole.name;
    }
    initGuildData(data:proto.IGuildBossRank){
        this.node_guild.active = true;
        this.simpleGuild = data.guild.simple;
        this.createGuildData();
    }
    createGuildData(){
        refreshFlagImg(this.simpleGuild?this.simpleGuild.flagId:0,this.sp_guild_flag);
        this.lbl_guild_name.string = this.simpleGuild?this.simpleGuild.name:"";
        this.lbl_guild_force.string = GameUtil.convertNumber(this.data.score)
    }
    onClickGuild() {
        if(this.simpleGuild){
            UIMgr.ins.show({ viewName: ViewName.AssociationMainPop, data: { "rankData": this.simpleGuild } })
        }
    }
}


