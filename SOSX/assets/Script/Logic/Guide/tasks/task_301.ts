/*
 * @Descripttion: 
 */
import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import changeName from "../../Common/changeName";
import Role from "../../Common/Role";
import { showPopLayer } from "../../Utils/GameUtils";
import { Command, DisableTouchMask, WaitLocalMsg, WaitEnterScene, EnableTouchMask } from "../GuideCommand";


export const task = {
    name: '领取赛季奖励',
    debug:false,
    //skip: SkipIfNotScene("MainScene"),
	finish:false,
    steps: [
        
        {
            onStart(callback) {
                WaitEnterScene("MainScene", callback)
            },
			
			desc: '点击竞技场等级按钮',
            command: { 
                cmd: Command.Parallel, args: [
                    { cmd: Command.DialogueNonmodal, args: [700] },
                    { cmd: Command.Click, args: "spr_rank_lv_bg" },
                ]
            },
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                cb();
            }
        },

		{
            //desc: '等待赛季界面打开',
            onStart(callback) {
				EnableTouchMask()
				WaitLocalMsg(LOCAL_MESSAGE.OpenSeasonPageLayer).then(()=>{
					callback()
				})
           },
      
            command: { cmd: Command.Parallel, args: [
               { cmd: Command.Click, args: "node_guide" },
            ]},

            onEnd(cb) {
                DisableTouchMask()
                Net.pushLoaclMessage(LOCAL_MESSAGE.EnableFightTips, false)
                cb();
            }
        },
        
        {
            desc: '点击领取拉克',
            onStart(callback) {
                //等待领取协议返回
                WaitLocalMsg(LOCAL_MESSAGE.LocalMsg_ReceiveSeasonReward).then(()=>{
                    Role.Instance.FinishGuide(301, true)
                    DisableTouchMask()
                    Net.pushLoaclMessage(LOCAL_MESSAGE.EnableFightTips, false)
                    callback()
                })
            },
            onEnd(cb) {
                WaitLocalMsg(LOCAL_MESSAGE.DestroyPopLayer).then(name=>{
                    if(name == "prefab_GetOneItem") {
                        //等待界面关闭
                        cb()
                    }
                })
            }
        },
		
		{
			desc: '点击竞技场关闭按钮',
            command: { 
                cmd: Command.Parallel, args: [
                    { cmd: Command.Click, args: "btn_closed" },
                ]
            },
            onEnd(cb) {
                cb();
            }
           
		},
    ]
}