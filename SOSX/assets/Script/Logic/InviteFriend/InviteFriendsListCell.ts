
import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { HttpClient } from "../Common/HttpClient";
import ManagerNotice from "../Notices/ManagerNotice";
import PlayerInfo from "../PlayerInfo/PlayerInfo";
import { showPopLayerV2 } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class InviteFriendsListCell extends cc.Component {

    @property(cc.Label)
    rank: cc.Label = null;

    @property(cc.Label)
    pname: cc.Label = null;

    @property(cc.Label)
    score: cc.Label = null;

    @property(cc.Sprite)
    icon: cc.Sprite = null;
    info: proto.ISharedFriends;

    setView(rank:number, info:proto.ISharedFriends){
        if(!info){
            return
        }

        this.info = info
        info.rankScore  = info.rankScore || 0
        this.rank.string = rank.toString();
        this.pname.string = info.wechatName || info.name
        this.score.string = info.rankScore.toString()
        
        if(info.wechatHeadIconURl.length > 0){
            ManagerNotice.getInstance().downloadImg(info.wechatHeadIconURl, this.icon, null, ()=>{
                let cfg = tab.Data.ItemTableByID.getValue(info.indexCard)
                if(cfg)
                {
                    this.icon.setTexture(cfg.Icon)
                }
            })
        }
    }

    public onClickOpenRoleSys(){
        let self = this;
        showPopLayerV2("prefab/PlayerInfo", PlayerInfo).then(layer =>{
            layer.initData(self.info.playerUid);
        });
    }

    start () {}
}
