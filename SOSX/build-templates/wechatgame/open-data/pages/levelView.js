/**
 * 此类为配置模板,包含各项配置以及说明.
 * @type {{mode: string, scrollable: boolean, vertical: boolean, limitCount: number, item: {width: number, height: number, background: string, layout: {rank: {bound: number[], type: string, textAlign: string, textColor: string, textSize: number, background: string, format: (function(*): *)}, avatar: {bound: number[], type: string, scaleType: string, background: string}, nickname: {bound: number[], type: string, textAlign: string, textColor: string, textSize: number, background: string}, score: {bound: number[], type: string, textAlign: string, textColor: string, textSize: number, background: string}, forth: {bound: number[], type: string, textAlign: string, textColor: string, textSize: number, background: string, format: (function(*): string)}}}, split: {width: number, height: number, background: string}, extra: {topThreeDrawable: string[]}}}
 */

module.exports = {
    /**
     *  指示渲染模式:
     *      single : 仅渲染一条(自己的上一条,即将超越);
     *      list : 渲染完整的列表, 如果选择滚动模式,则滚动渲染所有,否则仅渲染最大高度的数据.
     *      relative : 渲染与自己数据相关的若干条数据.即向前/向后各渲染有限条数据.
     */
    mode: "list",
    /**
     * 是否允许滚动. 默认为false,不触发滚动显示. 注: single模式下不生效.无法滚动.
     */
    scrollable: false,
    /**
     * 默认竖向滚动布局.即由上到下依次布局.
     */
    vertical: true,

    /**
     * 条数限制. <=0 : 无限制
     */
    limitCount: 5,
    /**
     * 数据区绘制范围. 用于控制列表数据区域大小.
     */
    pager: {
        bound: [450/2, 490, 150, 70],
        type: "text",
        textAlign: "center|middle",
        textColor: "#ffffff",
        style: "shrink",
        textSize: 30,
        strokeStyle: "#000000",
        lineWidth: 2,
        format: function (cur, total) {
            return `${cur + 1} / ${total}`
        }
    },
    /**
     * 单条item 尺寸信息.注: single 模式下不生效,将以显示容器的尺寸为准.
     * 由UI设计师设计并标注. 开发者只需按标注填写相应位置及尺寸即可.
     * background 可以为 颜色字符串:#000000, 也可以为图片资源"no1.png", 还可以是渐变背景.
     * {
     *       0: "#ffcc00",
     *       1: "#004499",
     *       arrow: [1, 1], // arrow 指的是渐变方向. 1为铺满view.
     *   },
     */
    item: {
        bound: [0, 0, 600, 500],
        width: 600,     // item 宽度, 可以省略, 省略时使用显示容器的宽度
        height: 74,    // item 高度. 横向布局时可省略,省略时使用显示容器的高度.
        background: "#4b4744", //["friend_rank_bg.png", "self_rank_bg.png"],  // item 背景颜色,可以配置资源路径,路径基于open-data/res/目录,省略open-data/res/ "#4b4744",
		corner: 1,
        layout: {       
			//排名背景图
			lv: {     // 名次信息. 如果extra 中包含topTree资源,则前三名次会替换为相应图片显示.
                bound: [20, 12, 56, 56],
                type: "text",
                textAlign: "center|middle",
                textColor: "#ffffff",
                textSize: 22,
                strokeStyle: "#000000",
                lineWidth: 1,
                format: function (v) {
                    return v + 1;
                },
            },
            
            avatar: {   // 头像.
                bound: [100, 18, 47, 47],
                type: "image",
                scaleType: "centerInside",
            },
			
            nickname: {
                bound: [159, 10, 150, 27.72],
                type: "text",
                textAlign: "left|middle",
                textColor: "#ffffff",
                textSize: 22,
				strokeStyle: "#000000",
                lineWidth: 1,
            },
			
			gamename: {
				bound: [159, 45, 144, 22.68],
                type: "text",
                textAlign: "left|middle",
                textColor: "#ffffff",
                textSize: 20,
				strokeStyle: "#000000",
                lineWidth: 1,
			},
			
			title1: {
                bound: [450, 2, 67, 70],
                type: "text",
                textAlign: "center|middle",
                textColor: "#ffffff",
                style: "shrink",
                textSize: 20,
                strokeStyle: "#000000",
                lineWidth: 1,
            },
			
			
			
            score: {
                bound: [520, 2, 67, 70],
                type: "text",
                textAlign: "left|middle",
                textColor: "#ffffff",
                style: "shrink",
                textSize: 20,
                strokeStyle: "#000000",
                lineWidth: 1,
            }
        }
    },

    /**
     * 可单独规定自身的数据绘制. 具布局可与item 相同.
     */
     selfItem: {
         bound: [0, 400, 600, 74],
         background: "#4d7596",
		 corner: 1,
         layout: {

             lv: {     // 名次信息. 如果extra 中包含topTree资源,则前三名次会替换为相应图片显示.
                bound: [20, 12, 56, 56],
                type: "text",
                textAlign: "center|middle",
                textColor: "#ffffff",
                textSize: 22,
                strokeStyle: "#000000",
                lineWidth: 1,
                format: function (v) {
                    return v + 1;
                },
            },
            
            avatar: {   // 头像.
                bound: [100, 18, 47, 47],
                type: "image",
                scaleType: "centerInside",
            },
            
            nickname: {
                bound: [159, 10, 150, 27.72],
                type: "text",
                textAlign: "left|middle",
                textColor: "#ffffff",
                textSize: 22,
                strokeStyle: "#000000",
                lineWidth: 2,
            },

             gamename: {
                bound: [159, 45, 144, 22.68],
                type: "text",
                textAlign: "left|middle",
                textColor: "#ffffff",
                textSize: 18,
                strokeStyle: "#000000",
                lineWidth: 1,
            },
            
            title1: {
                bound: [450, 2, 67, 70],
                type: "text",
                textAlign: "center|middle",
                textColor: "#ffffff",
                style: "shrink",
                textSize: 20,
                strokeStyle: "#000000",
                lineWidth: 1,
            },
            
            

             score: {
                bound: [520, 2, 67, 70],
                type: "text",
                textAlign: "left|middle",
                textColor: "#ffffff",
                style: "shrink",
                textSize: 18,
                strokeStyle: "#000000",
                lineWidth: 1,
            }
         }
     },
    /**
     * 多条数据时的分割线.同item. 可以使用图片资源.
     * 注: 单条数据时忽略split.
     */
     split: {
         offset: 20,
         width: 600,
         height: 1,
         background: "#00000000",
     },
    // 可以存放一些其他额外的配置信息.
    extra: {
        topThreeDrawable: ["phb_tb_1.png", "phb_tb_2.png", "phb_tb_3.png"],
    }
};