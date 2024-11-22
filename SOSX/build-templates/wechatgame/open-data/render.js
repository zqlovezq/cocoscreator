const ui = require("uiView");
/**
 * 用于渲染界面的view. 根据配置信息进行相应的绘制.
 * @param context
 * @param left
 * @param top
 * @param width
 * @param height
 * @constructor
 */
const RenderView = function (context, left, top, width, height) {
    this._config = null;
    this.dataList = null;
    this.selfData = null;
    //记录当前page 数值.
    this.currPage = 0;
    this.maxPages = 0;
    this.countPerPage = 1;

    this.context = context;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    // 数据绘制区域大小. 可为空
    this.dataBound = [];
	
	this.bPvp = true;

    context.clearRect(left, top, width, height);

    this.onConfig = function (config) {
        this._config = config;
        ////console.log("子域找到配置信息:", config);

        let vertical = this._config.vertical || false;
        let itemSize = {width: this._config.item.width || width, height: this._config.item.height || height};
        let splitSize = {width: 1, height: 1};
        if (this._config.split) {
            splitSize.width = this._config.split.width || 1;
            splitSize.height = this._config.split.height || 1;
        }

        if (this._config.item.bound && this._config.item.bound.length === 4) {
            this.dataBound = this._config.item.bound;
        }
		
        if (vertical) {
            this.countPerPage = Math.ceil((this.dataBound[3] || height) / (itemSize.height + splitSize.height));
        } else {
            this.countPerPage = Math.ceil((this.dataBound[2] || width) / (itemSize.width + splitSize.width));
        }
        if (this._config.limitCount > 0 && this.countPerPage > this._config.limitCount) {
            this.countPerPage = Math.floor(this._config.limitCount);
        }
    };
	
    this.render = function (dataList, selfData, bPvp) {
        this.dataList = dataList;
        this.selfData = selfData;
		this.bPvp = bPvp;
		
        if (!this._config) {
            //console.error("子域绘制未找到相应UI配置.");
            return;
        }
        switch (this._config.mode) {
            case "single": {
                this.renderSingle();
                break;
            }
            case "relative": {
                this.renderRelative();
                break;
            }
            case "list": {
                // 只有在渲染前才有数据,才能计算总页数.
                this.maxPages = Math.ceil(this.dataList.length / this.countPerPage);
                if (this.maxPages === 0) this.maxPages = 1;
                this.renderList();
                break;
            }
        }

        if (this._config.selfItem) {
            const selfConfig = this._config.selfItem;
            this.renderItem(this.selfData, selfConfig.bound[0], selfConfig.bound[1], selfConfig.bound[2], selfConfig.bound[3], selfConfig);
        }
    };

    this.changePage = function (page, offset) {
        if (this._config.mode !== "list") {
            //console.warn("非列表模式,不能翻页.");
            return;
        }
	
		console.log("%%%%%%%%%% changePage");
        context.clearRect(left, top, width, height);
        if (!this.dataList || this.dataList.length <= 0) {
            console.log("子域没有数据.");
            return;
        }
        if (page !== undefined) {
            this.currPage = page;
        } else {
            if (this.currPage + offset <= this.maxPages - 1) {
                this.currPage += offset;
            }
        }
        if (this.currPage < 0) this.currPage = 0;
        if (this.currPage >= this.maxPages) {
            this.currPage = this.maxPages - 1;
            if (this.currPage < 0) this.currPage = 0;
        }
        this.renderList();
		
		if (this._config.selfItem) {
            const selfConfig = this._config.selfItem;
            this.renderItem(this.selfData, selfConfig.bound[0], selfConfig.bound[1], selfConfig.bound[2], selfConfig.bound[3], selfConfig);
        }
    };

    // 渲染单条.即将超越.
    this.renderSingle = function () {
        let rank = this._config.singleRank || 0;
        if (!this.selfData) {
            rank = this.dataList.length - 1;
        } else {
            rank = this.selfData.rank + rank;
            if (rank < 0) rank = 0;
        }
        if (this.dataList[rank]) {
            this.renderItem(this.dataList[rank], left, top);
        }
    };

    // 渲染列表.
    this.renderList = function () {
        // let limitSize = this._config.limitCount || 0;
        let vertical = this._config.vertical || false;
        let itemSize = {
            width: this._config.item.width || this.dataBound[2] || width,
            height: this._config.item.height || this.dataBound[3] || height
        };
        let splitSize = {width: 1, height: 1};
        if (this._config.split) {
            splitSize.width = this._config.split.width || 1;
            splitSize.height = this._config.split.height || 1;
        }
        let startIndex = this.currPage * this.countPerPage;
        let stopIndex = startIndex + this.countPerPage;
		console.log("############# startIndex: ", startIndex, "  stopIndex: ", stopIndex);
        const _left = this.dataBound[0] || this.left;
        const _top = this.dataBound[1] || this.top;

        const _w = (this.dataBound[2] || this.width) + _left;
        const _h = this.dataBound[3] || this.height + _top;
        let splitOffset = 0;
        if (this._config.split) {
            splitOffset = this._config.split.offset || 0;
        }

        let offsetX = _left, offsetY = _top;
        for (let i = startIndex; i < stopIndex; i++) {
			if(i >= this.dataList.length){
				this.renderSplit(0, 0);
				continue;
			}
			
            let item = this.dataList[i];
            if (vertical) {
                if (offsetY < _h) {
                    this.renderItem(item, offsetX, offsetY, itemSize.width, itemSize.height, null, i);
                    offsetY += itemSize.height;
                    this.renderSplit(splitOffset + offsetX, offsetY);
                    offsetY += splitSize.height;
					//console.log("$$$$$$$$$$$$$$$$: ", offsetY);
                } else {
                    break;
                }
            } else {
                if (offsetX < _w) {
                    this.renderItem(item, offsetX, offsetY, null, null, null, i);
                    offsetX += itemSize.width;
                    this.renderSplit(offsetX, splitOffset + offsetY);
                    offsetX += splitSize.width;
                } else {
                    break;
                }
            }
        }

        this.renderPager();
    };
    // 渲染有限条数据.
    this.renderRelative = function () {
        if (!this.selfData) {
            //console.log("无名次.");
            return;
        }
        let limitSize = this._config.limitCount || 3;
        let vertical = this._config.vertical || false;
        let itemSize = {
            width: this._config.item.width || this.dataBound[2] || width,
            height: this._config.item.height || this.dataBound[3] || height
        };
        let splitSize = {width: 1, height: 1};
        if (this._config.split) {
            splitSize.width = this._config.split.width || 1;
            splitSize.height = this._config.split.height || 1;
        }
        // 左右各显示几条.
        let leftCount = Math.floor(limitSize / 2) || 1;
        let indexes = [this.selfData.rank];
        for (let i = 1; i <= leftCount; i++) {
            indexes.push(this.selfData.rank - i);
            indexes.push(this.selfData.rank + i);
        }
        indexes.sort();
        const _left = this.dataBound[0] || this.left;
        const _top = this.dataBound[1] || this.top;
        const _w = this.dataBound[2] || this.width;
        const _h = this.dataBound[3] || this.height;
        let offsetX = _left, offsetY = _top;
        // 起始位置计算.
        if (vertical) {
            offsetY = _top + _h / 2 - leftCount * splitSize.height - (leftCount + 0.5) * itemSize.height;
        } else {
            offsetX = _left + _w / 2 - leftCount * splitSize.width - (leftCount + 0.5) * itemSize.width;
        }
        // 开始布局.
        for (let i = 0; i < indexes.length; i++) {
            // 判断是否超长了.
            if (indexes[i] >= this.dataList.length) {
                break;
            }
            if (vertical) {
                if (indexes[i] >= 0) {
                    let item = this.dataList[indexes[i]];
                    this.renderItem(item, offsetX, offsetY, null, null, null, i);
                    offsetY += itemSize.height;
                    this.renderSplit(offsetX, offsetY);
                    offsetY += splitSize.height;
                }
            } else {
                if (indexes[i] >= 0) {
                    let item = this.dataList[indexes[i]];
                    this.renderItem(item, offsetX, offsetY, null, null, null, i);
                    offsetX += itemSize.width;
                    this.renderSplit(offsetX, offsetY);
                    offsetX += splitSize.width;
                }
            }
        }
    };
    this.renderItem = function (item, offsetX, offsetY, itemWidth, itemHeight, defaultConfig, index) {
        if (!item) return;
        const itemConfig = defaultConfig || this._config.item;
        if (!itemConfig) return;
        let bg = null;
		let corner = 0;
        if (itemConfig.background instanceof Array && itemConfig.background.length > 0) {
            bg = itemConfig.background[0];
        } else if (typeof itemConfig.background === "string") {
            bg = itemConfig.background;
			corner = itemConfig.corner;
        }
        if (bg) {
            if (bg.charAt(0) === '#') {
            } else if (bg.indexOf("http") >= 0 || bg.indexOf("//") >= 0) {
            } else {
                bg = "open-data/res/" + bg;
            }
            const bgView = new ui.View(context, offsetX, offsetY, itemWidth || width, itemHeight || height, corner);
            bgView.background = bg;
            bgView.render();
        }
        // 是否需要显示前3名次的图标.
        const topTreeRes = !!this._config.extra ? this._config.extra.topThreeDrawable : null;
        const parts = Object.keys(itemConfig.layout);
        parts.forEach(part => {
            // 从item数据中查找相应字段.
            let value = (item[part] !== undefined && item[part] !== null) ? item[part] : item.data[part];
            const conf = itemConfig.layout[part];
            if (part === "lv") {
                if (topTreeRes && value < topTreeRes.length) {
                    const rank = new ui.ImageView(context, offsetX + conf.bound[0], offsetY + conf.bound[1], conf.bound[2], conf.bound[3]);
                    rank.src = "open-data/res/" + topTreeRes[value];
                    rank.scaleType = "center";
                    rank.render();
                }else {
                    const rank = new ui.TextView(context, offsetX + conf.bound[0], offsetY + conf.bound[1], conf.bound[2], conf.bound[3]);
                    rank.text = !!conf.format ? conf.format(value, item) : "" + value;
                    !!conf.textAlign && (rank.textAlign = conf.textAlign);
                    rank.textColor = conf.textColor || "#ffffff";
                    rank.textSize = conf.textSize || 22;
                    rank.background = conf.background;
                    rank.strokeStyle = conf.strokeStyle;
                    rank.lineWidth = conf.lineWidth;
                    !!conf.type && (rank.type = conf.type);
                    !!conf.style && (rank.style = conf.style);
                    rank.render();
                }
            } else {
                let view;
				
                if (conf.type === "text") {
					let textColor = conf.textColor;
					let textTxt = !!conf.format ? conf.format(value, item) : "" + value;
					if(part === "title1"){
						if(this.bPvp){
							textTxt = "积分:";
						}else{
						textTxt = "回合:";
						}
					}
					
                    view = new ui.TextView(context, offsetX + conf.bound[0], offsetY + conf.bound[1], conf.bound[2], conf.bound[3]);
                    view.text = textTxt;//!!conf.format ? conf.format(value, item) : "" + value;
                    !!conf.textAlign && (view.textAlign = conf.textAlign);
                    view.textColor = textColor || "#fffff";
                    view.textSize = conf.textSize || 22;
                    view.strokeStyle = conf.strokeStyle;
                    view.lineWidth = conf.lineWidth;
                    !!conf.type && (view.type = conf.type);
                    !!conf.style && (view.style = conf.style);
                } else if (conf.type === "image") {
                    view = new ui.ImageView(context, offsetX + conf.bound[0], offsetY + conf.bound[1], conf.bound[2], conf.bound[3]);
                    if (!value) {
                        value = conf.src;
                    }
                    if (value && value.indexOf("http") < 0) {
                        view.src = "open-data/res/" + value;
                    } else {
                        view.src = value;
                    }
                    view.scaleType = conf.scaleType || "fill";
                }
                if (view) {
                    view.background = conf.background;
                    view.render();
                }
            }
        })
    };
	
    this.renderSplit = function (offsetX, offsetY) {
        if (!this._config.split) return;
        const conf = this._config.split;
        if (conf.background) {
            // # 开头.
            if (conf.background.charCodeAt(0) === 35) {
                context.save();
                context.fillStyle = conf.background;
                context.shadowColor = "#000000";
                context.shadowOffsetX = 1;
                context.shadowOffsetY = 1;
                context.fillRect(offsetX, offsetY, conf.width || width, conf.height || height);
                context.restore();
            } else {
                const bg = new ui.ImageView(context, offsetX, offsetY, conf.width || width, conf.height || height);
                bg.src = conf.background;
                bg.render();
            }
        }
    };
    this.renderPager = function () {
        if (!this._config.pager) return;
        const conf = this._config.pager;
        if (!conf.bound) {
            conf.bound = [];
        }
        const pager = new ui.TextView(context, conf.bound[0] || 0, conf.bound[1] || 0, conf.bound[2] || 200, conf.bound[3] || 100);
        pager.text = !!conf.format ? conf.format(this.currPage, this.maxPages) : "" + value;
        !!conf.textAlign && (pager.textAlign = conf.textAlign);
        pager.textColor = conf.textColor || "#222222";
        pager.textSize = conf.textSize || 30;
        pager.background = conf.background;
        pager.strokeStyle = conf.strokeStyle;
        pager.lineWidth = conf.lineWidth;
        !!conf.type && (pager.type = conf.type);
        !!conf.style && (pager.style = conf.style);
        pager.render();
		console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    }
};

module.exports.view = RenderView;