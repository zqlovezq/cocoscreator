
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { LoadPreNode } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CopyTeamSelect extends cc.Component {

    @property(cc.Toggle)
    toggle_team_1: cc.Toggle = null;

    @property(cc.Toggle)
    toggle_team_2: cc.Toggle = null;

    @property(cc.Toggle)
    toggle_team_3: cc.Toggle = null;

    @property(cc.Toggle)
    toggle_team_4: cc.Toggle = null;

    @property(cc.Toggle)
    toggle_team_5: cc.Toggle = null;

    callback:Function = null

    public static async show(target:cc.Node, callback?:Function)
    {
        let team = cc.director.getScene().getComponentInChildren(CopyTeamSelect)
        if(!team)
        {
            team = await  LoadPreNode("prefab/copyteamnode",CopyTeamSelect)
            cc.director.getScene().addChild(team.node)
        }
        

        if(!team)
        {
            return
        }

        team.node.active = true
        team.node.zIndex = 9999

        team.reset()

        if(callback)
        {
            team.setClickCallback(callback)
        }

        let targetworldpos = target.convertToWorldSpaceAR(new cc.Vec2(0,0))
        let targetcontent = target.getContentSize()
        let targetanchor = target.getAnchorPoint()

        let thiscontent:cc.Size = team.node.getContentSize();
        let visiblesize = cc.view.getVisibleSize()
        let posx = targetworldpos.x
        let posy = targetworldpos.y
        if(targetworldpos.x + thiscontent.width / 2 > visiblesize.width)
        {
            posx -= (thiscontent.width / 2  - targetcontent.width * targetanchor.x )
        }
        else if(targetworldpos.x - thiscontent.width / 2 < 0)
        {
            posx += (thiscontent.width / 2 - targetcontent.width * targetanchor.x)
        }       
        
        posy -= (targetcontent.height * targetanchor.y)
        

        team.node.setPosition(new cc.Vec2(posx, posy))
    }

    public reset()
    {
        // this.toggle_team_1.isChecked = false
        // this.toggle_team_2.isChecked = false
        // this.toggle_team_3.isChecked = false
        // this.toggle_team_4.isChecked = false
        // this.toggle_team_5.isChecked = false
    }


    public setClickCallback(cb:Function)
    {
        this.callback = cb
    }

    private onSelectTeam1Click(node: cc.Toggle){
        this.callback(0)
        this.node.active = false
    } 

    private onSelectTeam2Click(node: cc.Toggle){
        this.callback(1)
        this.node.active = false

    } 

    private onSelectTeam3Click(node: cc.Toggle){
        this.callback(2)
        this.node.active = false

    } 

    private onSelectTeam4Click(node: cc.Toggle){
        this.callback(3)
        this.node.active = false

    } 

    private onSelectTeam5Click(node: cc.Toggle){
        this.callback(4)
        this.node.active = false

    } 
    
    onLoad () {
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCloseCopyDeck, (param: any)=>{
            this.node.active = false;
        }, this);
    }

    start () {}
}
