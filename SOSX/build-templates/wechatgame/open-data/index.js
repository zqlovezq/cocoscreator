const base = require('base');
const view = require("render");

const app = {
    canvas: null,
    context: null,
    views: {},
    start: function () {
        this.canvas = wx.getSharedCanvas();
        this.context = this.canvas.getContext('2d');
        this.context.imageSmoothingEnabled = true;
        this.context.imageSmoothingQuality = "high";
        wx.onMessage(msg => {
            console.log("subContext receive msg:", msg);
            switch (msg.what) {
                case "action_init_context": {console.log("$$$$$$$$$$ action_init_context");
                    if (msg.arguments.view) {
                        const bound = msg.arguments.bound;
                        if (!bound || !bound.hasOwnProperty("width") || !bound.hasOwnProperty("height")) {
                            console.error(`子域绘制:${msg.arguments.view}, 未设置bound,无法正常绘制`);
                            return;
                        }
                        if (!this.views[msg.arguments.view]) {
                            this.views[msg.arguments.view] = new view.view(this.context, bound.left || 0, bound.top || 0, bound.width || 100, bound.height || 100);
                            let configPath = msg.arguments.view;
                            if (msg.arguments.view.indexOf("/") < 0) {
                                configPath = "pages/" + configPath;
                            }
                            const config = require(configPath);
                            if (config) {
                                this.views[msg.arguments.view].onConfig(config);
                            }
                        }
                    }
                    break;
                }
				
                case "action_paging": {
                    //翻页动作.
                    if (!msg.arguments.view) {
                        console.error("翻页参数未指定viewName");
                        return;
                    }
                    const render = this.views[msg.arguments.view];
                    if (!render) {
                        console.warn("排行榜页面还未初始化.");
                        return;
                    }
                    render.changePage(msg.arguments.page, msg.arguments.offset);
                    break;
                }
				
                default: {console.log("$$$$ onMessage: ", msg.what);
                    if (msg.what && this.views[msg.what]) {
                        base.RankUtil.getSelfData(msg.arguments.key).then(selfData => {
                            base.RankUtil.getRankData(msg.arguments.key).then(data => {
                                // console.log("获取到当前玩家的排行数据:", data);
                                base.RankUtil.sortData(data);
                                base.RankUtil.filterSelfData(data, selfData);
                                const render = this.views[msg.what];
                                render.render(data, selfData, msg.arguments.key === "pvpRanking");
                            });
                        });
                    }
                    break;
                }
            }
        })
    }
};
app.start();