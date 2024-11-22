
var scrollInner = require("../Common/NestableScrollView_Inner");


var SizeMode = cc.Enum({
    /**
     * !#en Each page is unified in size
     * !#zh 每个页面统一大小
     * @property {Number} Unified
     */
    Unified: 0,
    /**
     * !#en Each page is in free size
     * !#zh 每个页面大小随意
     * @property {Number} Free
     */
    Free: 1
});

/**
 * !#en The Page View Direction
 * !#zh 页面视图滚动类型
 * @enum PageView.Direction
 */
var Direction = cc.Enum({
    /**
     * !#en Horizontal scroll.
     * !#zh 水平滚动
     * @property {Number} Horizontal
     */
    Horizontal: 0,
    /**
     * !#en Vertical scroll.
     * !#zh 垂直滚动
     * @property {Number} Vertical
     */
    Vertical: 1
});

/**
 * !#en Enum for ScrollView event type.
 * !#zh 滚动视图事件类型
 * @enum PageView.EventType
 */
var EventType = cc.Enum({
    /**
     * !#en The page turning event
     * !#zh 翻页事件
     * @property {Number} PAGE_TURNING
     */
    PAGE_TURNING: 0

});

cc.Class({
    extends: cc.ScrollView,
    ctor: function () {
        this._curPageIdx = 0;
        this._lastPageIdx = -1;
        this._pages = [];
        this._initContentPos = cc.v2();
        this._touchEndPosition = cc.v2();
        this._scrollCenterOffsetX = []; // 每一个页面居中时需要的偏移量（X）
        this._scrollCenterOffsetY = []; // 每一个页面居中时需要的偏移量（Y）
        this._enableTouch = true;
        this._enableHorTouch = true;
    },
    properties: {
        m_InnerScrollViews: [scrollInner],    //挂内嵌的ScrollView
        m_PlanDir: {                                                  //计划方向, 本次滑动的目的方向。根据刚开始滑动的方向决定 0为不限制方向, 1为横, -1为纵
            default: null,
            visible: false,
        },
        m_ScrollingInnerSv: {
            default: null,
            visible: false,
        },

        /**
         * !#en Specify the size type of each page in PageView.
         * !#zh 页面视图中每个页面大小类型
         * @property {PageView.SizeMode} sizeMode
         */
        sizeMode: {
            default: SizeMode.Unified,
            type: SizeMode,
            tooltip: CC_DEV && 'i18n:COMPONENT.pageview.sizeMode',
            notify: function() {
                this._syncSizeMode();
            }
        },

        /**
         * !#en The page view direction
         * !#zh 页面视图滚动类型
         * @property {PageView.Direction} direction
         */
        direction: {
            default: Direction.Horizontal,
            type: Direction,
            tooltip: CC_DEV && 'i18n:COMPONENT.pageview.direction',
            notify: function() {
                this._syncScrollDirection();
            }
        },

        /**
         * !#en
         * The scroll threshold value, when drag exceeds this value,
         * release the next page will automatically scroll, less than the restore
         * !#zh 滚动临界值，默认单位百分比，当拖拽超出该数值时，松开会自动滚动下一页，小于时则还原。
         * @property {Number} scrollThreshold
         */
        scrollThreshold: {
            default: 0.5,
            type: cc.Float,
            slide: true,
            range: [0, 1, 0.01],
            tooltip: CC_DEV && 'i18n:COMPONENT.pageview.scrollThreshold'
        },

        /**
         * !#en
         * Auto page turning velocity threshold. When users swipe the PageView quickly,
         * it will calculate a velocity based on the scroll distance and time,
         * if the calculated velocity is larger than the threshold, then it will trigger page turning.
         * !#zh
         * 快速滑动翻页临界值。
         * 当用户快速滑动时，会根据滑动开始和结束的距离与时间计算出一个速度值，
         * 该值与此临界值相比较，如果大于临界值，则进行自动翻页。
         * @property {Number} autoPageTurningThreshold
         */
        autoPageTurningThreshold: {
            default: 100,
            type: cc.Float,
            tooltip: CC_DEV && 'i18n:COMPONENT.pageview.autoPageTurningThreshold'
        },

        /**
         * !#en Change the PageTurning event timing of PageView.
         * !#zh 设置 PageView PageTurning 事件的发送时机。
         * @property {Number} pageTurningEventTiming
         */
        pageTurningEventTiming: {
            default: 0.1,
            type: cc.Float,
            range: [0, 1, 0.01],
            tooltip: CC_DEV && 'i18n:COMPONENT.pageview.pageTurningEventTiming'
        },

        /**
         * !#en The Page View Indicator
         * !#zh 页面视图指示器组件
         * @property {PageViewIndicator} indicator
         */
        indicator: {
            default: null,
            type: cc.PageViewIndicator,
            tooltip: CC_DEV && 'i18n:COMPONENT.pageview.indicator',
            notify:  function() {
                if (this.indicator) {
                    this.indicator.setPageView(this);
                }
            }
        },

        /**
         * !#en The time required to turn over a page. unit: second
         * !#zh 每个页面翻页时所需时间。单位：秒
         * @property {Number} pageTurningSpeed
         */
        pageTurningSpeed: {
            default: 0.3,
            type: cc.Float,
            tooltip: CC_DEV && 'i18n:COMPONENT.pageview.pageTurningSpeed'
        },

        /**
         * !#en PageView events callback
         * !#zh 滚动视图的事件回调函数
         * @property {Component.EventHandler[]} pageEvents
         */
        pageEvents: {
            default: [],
            type: cc.Component.EventHandler,
            tooltip: CC_DEV && 'i18n:COMPONENT.pageview.pageEvents'
        },
    },

    statics: {
        SizeMode: SizeMode,
        Direction: Direction,
        EventType: EventType
    },

    onEnable: function () {
        this._super();
        this.node.on(cc.Node.EventType.SIZE_CHANGED, this._updateAllPagesSize, this);
        if(!CC_EDITOR) {
            this.node.on('scroll-ended-with-threshold', this._dispatchPageTurningEvent, this);
        }
    },

    onDisable: function () {
        this._super();
        this.node.off(cc.Node.EventType.SIZE_CHANGED, this._updateAllPagesSize, this);
        if(!CC_EDITOR) {
            this.node.off('scroll-ended-with-threshold', this._dispatchPageTurningEvent, this);
        }
    },

    onLoad: function () {
        this.m_PlanDir = null;
        // this.m_InnerScrollViews.forEach(inner => {
        //     inner.setOuterScrollView(this);
        // });
        this._initPages();
        if (this.indicator) {
            this.indicator.setPageView(this);
        }

        for(var i=0; i<this.m_InnerScrollViews.length; i++)
        {
            this.m_InnerScrollViews[i].setOuterScrollView(this);
        }
    },

    pushInnerScrollView:function(inscroll){
        if(this.m_InnerScrollViews.indexOf(inscroll) <= 0){
            this.m_InnerScrollViews.push(inscroll);
        }
    },

    removeInnerScrollView:function(inscroll){
        var index = this.m_InnerScrollViews.indexOf(inscroll);
        if(index >= 0)
            this.m_InnerScrollViews.splice(index, 1);
    },

    //是否为子物体
    //注意，这里递归, 如果child藏的太深, 可能影响效率。其实也还好，只是开始滑动时执行一次。
    _isHisChild:function(child, undeterminedParent) {
        if (child == undeterminedParent) {
            return true;
        }
        if (child.parent != null) {
            if (child.parent == undeterminedParent) {
                return true;
            } else {
                return this._isHisChild(child.parent, undeterminedParent);
            }
        }
        return false;
    },

    //判断Target是否是InnerScrollView的子物体, 如果是，就返回这个InnerScrollView。
    //注意，这里遍历所有InnerScrollView, 如果InnerScrollView数量太多，可能影响效率。其实也还好，只是开始滑动时执行一次。
    _findScrollingInnerSv:function(target) {
        for (var i = 0; i < this.m_InnerScrollViews.length; i++) {
            var isHisChild = this._isHisChild(target, this.m_InnerScrollViews[i].node);
            if (isHisChild) {
                return this.m_InnerScrollViews[i];
            }
        }
        return null;
    },

    //检查实际与计划方向的一致性
    isDifferentBetweenSettingAndPlan:function(sv) {
        if (this.m_PlanDir == 0) {
            return false;
        }
        if (this.m_PlanDir == 1 && sv.horizontal) {
            return false;
        }
        if (this.m_PlanDir == -1 && sv.vertical) {
            return false;
        }
        return true;
    },

    //#region 重写cc.ScrollView的方法
    hasNestedViewGroup: function (event, captureListeners) {
        if (event.eventPhase !== cc.Event.CAPTURING_PHASE) return;
        //不阻止out上onTouch事件执行。
        return false;
    },

    _onTouchBegan: function (event, captureListeners) {
        this._touchBeganPosition = event.touch.getLocation();
        if (!this.enabledInHierarchy) return;
        if (this.hasNestedViewGroup(event, captureListeners)) return;

        //重置计划方向
        this.m_PlanDir = null;
        this.m_ScrollingInnerSv = null;

        var touch = event.touch;
        if (this.content) {
            this._handlePressLogic(touch);
        }
        this._touchMoved = false;
        this._stopPropagationIfTargetIsMe(event);
    },

    _onTouchMoved: function (event, captureListeners) {
        // 答疑：为什么确定 m_ScrollingInnerSv, 不用captureListeners, 而要用this._findScrollingInnerSv？
        // 因为，在子ScrollView上拖动时, captureListeners中并不包含该子ScrollView本身。
        // cc.log("----------------------------");
        // captureListeners.forEach((captureListener) => {
        //     cc.log(captureListener.name);
        // });

        if (!this.enabledInHierarchy) return;
        if (this.hasNestedViewGroup(event, captureListeners)) return;
        if (!this._enableTouch) return;

        var touch = event.touch;
        var deltaMove = touch.getLocation().sub(touch.getStartLocation());

        //在滑动时, 设置开始时滑动的方向为计划方向
        //为什么在Outer中做这件事？
        //因为Outer的_onTouchMoved比Inner的早执行, 如果在Inner里做, Outer中就得忽略一帧，体验可能会不好。
        if (this.m_PlanDir == null && deltaMove.mag() > 7) {
            this.m_ScrollingInnerSv = this._findScrollingInnerSv(event.target);
            if (this.m_ScrollingInnerSv != null) {
                var contentSize = this.m_ScrollingInnerSv.content.getContentSize();
                var scrollViewSize = this.m_ScrollingInnerSv.node.getContentSize();
                if ((this.m_ScrollingInnerSv.vertical && (contentSize.height > scrollViewSize.height)) || (this.m_ScrollingInnerSv.horizontal && (contentSize.width > scrollViewSize.width))) {
                    this.m_PlanDir = Math.abs(deltaMove.x) > Math.abs(deltaMove.y) ? 1 : -1;
                } else {
                    this.m_PlanDir = 0;
                }
            } else {
                this.m_PlanDir = 0;
            }
        }

        if (this.content) {
            if (!this.isDifferentBetweenSettingAndPlan(this)) {
                if(this._enableHorTouch)
                {
                    this._handleMoveLogic(touch);
                }
            }
        }

        if (!this.cancelInnerEvents) {
            return;
        }

        //只取消会捕获事件的直接子物体(如Button)上的事件
        if (this.m_ScrollingInnerSv == null) {
            if (deltaMove.mag() > 7) {
                if (!this._touchMoved && event.target !== this.node) {
                    var cancelEvent = new cc.Event.EventTouch(event.getTouches(), event.bubbles);
                    cancelEvent.type = cc.Node.EventType.TOUCH_CANCEL;
                    cancelEvent.touch = event.touch;
                    cancelEvent.simulate = true;
                    event.target.dispatchEvent(cancelEvent);
                    this._touchMoved = true;
                }
            }
            this._stopPropagationIfTargetIsMe(event);
        }
    },

    _onTouchEnded: function (event, captureListeners) {
        this._touchEndPosition = event.touch.getLocation();
      
        this._super(event, captureListeners);
    },

    _onTouchCancelled: function (event, captureListeners) {
        this._touchEndPosition = event.touch.getLocation();
    
        this._super(event, captureListeners);
    },

        /**
     * !#en Returns current page index
     * !#zh 返回当前页面索引
     * @method getCurrentPageIndex
     * @returns {Number}
     */
    getCurrentPageIndex: function () {
        return this._curPageIdx;
    },

    setCurPageIdx:function(idx){
        // console.warn("设置pageidx",this._curPageIdx)
    },

    getCurrentPageName: function () {
        if(this._curPageIdx >= 0 && this._curPageIdx < this._pages.length) {
            return this._pages[this._curPageIdx].name
        }
        return "";
    },

    jumpToPageIndex:function(index){
        if(index == this._curPageIdx)
        {
            return;
        }
        this.scrollToPage(index, 0);
    },

    jumpToPageByName:function(name, duration) {
        var idx = this.getPageIdxByName(name)
        if(idx == -1 || idx == this._curPageIdx) {
            return;
        }
        this.scrollToPage(idx, duration);
    },

    jumpToPageByNameWithoutAction:function(name) {
        var idx = this.getPageIdxByName(name)
        if(idx == -1 || idx == this._curPageIdx) {
            return;
        }
        this.scrollToOffsetWithoutAction(idx);
    },

    getPageIdxByName:function(name) {
        for (var i = 0; i < this._pages.length; ++i) {
            if(this._pages[i].name == name) {
                return i
            }
        }
        return -1
    },

    /**
     * !#en Returns all pages of pageview
     * !#zh 返回视图中的所有页面
     * @method getPages
     * @returns {Node[]}
     */
    getPages: function () {
        return this._pages;
    },

    /**
     * !#en At the end of the current page view to insert a new view
     * !#zh 在当前页面视图的尾部插入一个新视图
     * @method addPage
     * @param {Node} page
     */
    addPage: function (page) {
        if (!page || this._pages.indexOf(page) !== -1 || !this.content)
            return;
        this.content.addChild(page);
        this._pages.push(page);
        this._updatePageView();
    },

    /**
     * !#en Inserts a page in the specified location
     * !#zh 将页面插入指定位置中
     * @method insertPage
     * @param {Node} page
     * @param {Number} index
     */
    insertPage: function (page, index) {
        if (index < 0 || !page || this._pages.indexOf(page) !== -1 || !this.content)
            return;
        var pageCount = this._pages.length;
        if (index >= pageCount)
            this.addPage(page);
        else {
            this._pages.splice(index, 0, page);
            this.content.addChild(page);
            this._updatePageView();
        }
    },

    /**
     * !#en Removes a page from PageView.
     * !#zh 移除指定页面
     * @method removePage
     * @param {Node} page
     */
    removePage: function (page) {
        if (!page || !this.content) return;
        var index = this._pages.indexOf(page);
        if (index === -1) {
            cc.warnID(4300, page.name);
            return;
        }
        this.removePageAtIndex(index);
    },

    /**
     * !#en Removes a page at index of PageView.
     * !#zh 移除指定下标的页面
     * @method removePageAtIndex
     * @param {Number} index
     */
    removePageAtIndex: function (index) {
        var pageList = this._pages;
        if (index < 0 || index >= pageList.length) return;
        var page = pageList[index];
        if (!page) return;
        this.content.removeChild(page);
        pageList.splice(index, 1);
        this._updatePageView();
    },

    /**
     * !#en Removes all pages from PageView
     * !#zh 移除所有页面
     * @method removeAllPages
     */
    removeAllPages: function () {
        if (!this.content) { return; }
        var locPages = this._pages;
        for (var i = 0, len = locPages.length; i < len; i++)
            this.content.removeChild(locPages[i]);
        this._pages.length = 0;
        this._updatePageView();
    },

    /**
     * !#en Scroll PageView to index.
     * !#zh 滚动到指定页面
     * @method scrollToPage
     * @param {Number} idx index of page.
     * @param {Number} timeInSecond scrolling time
     */
    scrollToPage: function (idx, timeInSecond) {
        if (idx < 0 || idx >= this._pages.length)
            return;
        timeInSecond = timeInSecond !== undefined ? timeInSecond : 0.3;
        this._curPageIdx = idx;
        this.setCurPageIdx()
        this.scrollToOffset(this._moveOffsetValue(idx), timeInSecond, true);
        if (this.indicator) {
            this.indicator._changedState();
        }
    },

    /**
     * Description: 滚动到指定位置不带动画，直接定位到该位置
     * Create: 2021/9/17
     */
    scrollToOffsetWithoutAction(idx){
        if (idx < 0 || idx >= this._pages.length){
            return;
        }

        this._curPageIdx = idx;
        this.setCurPageIdx()
        let offset = this._moveOffsetValue(idx);
        let maxScrollOffset = this.getMaxScrollOffset();
        let anchor = cc.v2(0, 0);
        //if maxScrollOffset is 0, then always align the content's top left origin to the top left corner of its parent
        if (maxScrollOffset.x === 0) {
            anchor.x = 0;
        } else {
            anchor.x = offset.x / maxScrollOffset.x;
        }

        if (maxScrollOffset.y === 0) {
            anchor.y = 1;
        } else {
            anchor.y = (maxScrollOffset.y - offset.y ) / maxScrollOffset.y;
        }

        let moveDelta = this._calculateMovePercentDelta({
            anchor: cc.v2(anchor),
            applyToHorizontal: true,
            applyToVertical: true,
        });

        let adjustedMove = this._flattenVectorByDirection(moveDelta);
        let newPosition = this.getContentPosition().add(adjustedMove);

        this.setContentPosition(newPosition);

        if (this.indicator) {
            this.indicator._changedState();
        }
    },

    //override the method of ScrollView
    getScrollEndedEventTiming: function () {
        return this.pageTurningEventTiming;
    },

    _syncScrollDirection: function () {
        this.horizontal = this.direction === Direction.Horizontal;
        this.vertical = this.direction === Direction.Vertical;
    },

    _syncSizeMode: function () {
        if (!this.content) { return; }
        var layout = this.content.getComponent(cc.Layout);
        if (layout) {
            if (this.sizeMode === SizeMode.Free && this._pages.length > 0) {
                var lastPage = this._pages[this._pages.length - 1];
                if (this.direction === Direction.Horizontal) {
                    layout.paddingLeft = (this._view.width - this._pages[0].width) / 2;
                    layout.paddingRight = (this._view.width - lastPage.width) / 2;
                }
                else if (this.direction === Direction.Vertical) {
                    layout.paddingTop = (this._view.height - this._pages[0].height) / 2;
                    layout.paddingBottom = (this._view.height - lastPage.height) / 2;
                }
            }
            layout.updateLayout();
        }
    },

    // 刷新页面视图
    _updatePageView: function () {
        // 当页面数组变化时修改 content 大小
        var layout = this.content.getComponent(cc.Layout);
        if (layout && layout.enabled) {
            layout.updateLayout();
        }

        var pageCount = this._pages.length;

        if (this._curPageIdx >= pageCount) {
            this._curPageIdx = pageCount === 0 ? 0 : pageCount - 1;
            this.setCurPageIdx()
            this._lastPageIdx = this._curPageIdx;
        }
        // 进行排序
        var contentPos = this._initContentPos;
        for (var i = 0; i < pageCount; ++i) {
            var page = this._pages[i];
            page.setSiblingIndex(i);
            if (this.direction === Direction.Horizontal) {
                this._scrollCenterOffsetX[i] = Math.abs(contentPos.x + page.x);
            }
            else {
                this._scrollCenterOffsetY[i] = Math.abs(contentPos.y + page.y);
            }
        }

        // 刷新 indicator 信息与状态
        if (this.indicator) {
            this.indicator._refresh();
        }
    },

    // 刷新所有页面的大小
    _updateAllPagesSize: function () {
        if (this.sizeMode !== SizeMode.Unified || !this._view) {
            return;
        }
        var locPages = CC_EDITOR ? this.content.children : this._pages;
        var selfSize = this._view.getContentSize();
        for (var i = 0, len = locPages.length; i < len; i++) {
            locPages[i].setContentSize(selfSize);
        }
    },

    // 初始化页面
    _initPages: function () {
        if (!this.content) { return; }
        this._initContentPos = this.content.position;
        var children = this.content.children;
        for (var i = 0; i < children.length; ++i) {
            var page = children[i];
            if (this._pages.indexOf(page) >= 0) { continue; }
            this._pages.push(page);
        }
        this._syncScrollDirection();
        this._syncSizeMode();
        this._updatePageView();
    },

    _dispatchPageTurningEvent: function () {
        if (this._lastPageIdx === this._curPageIdx) return;
        if(!this._enableHorTouch) return;
        this._lastPageIdx = this._curPageIdx;
        cc.Component.EventHandler.emitEvents(this.pageEvents, this, EventType.PAGE_TURNING);
        this.node.emit('page-turning', this);
    },

    // 是否超过自动滚动临界值
    _isScrollable: function (offset, index, nextIndex) {
        if (this.sizeMode === SizeMode.Free) {
            var curPageCenter, nextPageCenter;
            if (this.direction === Direction.Horizontal) {
                curPageCenter = this._scrollCenterOffsetX[index];
                nextPageCenter = this._scrollCenterOffsetX[nextIndex];
                return Math.abs(offset.x) >= Math.abs(curPageCenter - nextPageCenter) * this.scrollThreshold;
            }
            else if (this.direction === Direction.Vertical) {
                curPageCenter = this._scrollCenterOffsetY[index];
                nextPageCenter = this._scrollCenterOffsetY[nextIndex];
                return Math.abs(offset.y) >= Math.abs(curPageCenter - nextPageCenter) * this.scrollThreshold;
            }
        }
        else {
            if (this.direction === Direction.Horizontal) {
                return Math.abs(offset.x) >= this._view.width * this.scrollThreshold;
            }
            else if (this.direction === Direction.Vertical) {
                return Math.abs(offset.y) >= this._view.height * this.scrollThreshold;
            }
        }
    },

    // 快速滑动
    _isQuicklyScrollable: function (touchMoveVelocity) {
        if (this.direction === Direction.Horizontal) {
            if (Math.abs(touchMoveVelocity.x) > this.autoPageTurningThreshold) {
                return true;
            }
        }
        else if (this.direction === Direction.Vertical) {
            if (Math.abs(touchMoveVelocity.y) > this.autoPageTurningThreshold) {
                return true;
            }
        }
        return false;
    },

    // 通过 idx 获取偏移值数值
    _moveOffsetValue: function (idx) {
        var offset = cc.v2(0, 0);
        if (this.sizeMode === SizeMode.Free) {
            if (this.direction === Direction.Horizontal) {
                offset.x = this._scrollCenterOffsetX[idx];
            }
            else if (this.direction === Direction.Vertical) {
                offset.y = this._scrollCenterOffsetY[idx];
            }
        }
        else {
            if (this.direction === Direction.Horizontal) {
                offset.x = idx * this._view.width;
            }
            else if (this.direction === Direction.Vertical) {
                offset.y = idx * this._view.height;
            }
        }
        return offset;
    },

    _getDragDirection: function (moveOffset) {
        if (this.direction === Direction.Horizontal) {
            if (moveOffset.x === 0) { return 0; }
            return (moveOffset.x > 0 ? 1 : -1);
        }
        else if (this.direction === Direction.Vertical) {
            // 由于滚动 Y 轴的原点在在右上角所以应该是小于 0
            if (moveOffset.y === 0) { return 0; }
            return (moveOffset.y < 0 ? 1 : -1);
        }
    },

    _handleReleaseLogic: function(touch) {
        if (!this._enableTouch) return;
        if(!this._enableHorTouch) return;
        this._autoScrollToPage();
        if (this._scrolling) {
            this._scrolling = false;
            if (!this._autoScrolling) {
                this._dispatchEvent('scroll-ended');
            }
        }
    },

    _autoScrollToPage: function () {
        var bounceBackStarted = this._startBounceBackIfNeeded();
        if (bounceBackStarted) {
            var bounceBackAmount = this._getHowMuchOutOfBoundary();
            bounceBackAmount = this._clampDelta(bounceBackAmount);
            if (bounceBackAmount.x > 0 || bounceBackAmount.y < 0) {
                // this._curPageIdx = this._pages.length === 0 ? 0 : this._pages.length - 1;
                this._curPageIdx = this._pages.length === 0 ? 0 : this.getHasPageLen() - 1;
                this.setCurPageIdx()
            }
            if (bounceBackAmount.x < 0 || bounceBackAmount.y > 0) {
                this._curPageIdx = 0;
                this.setCurPageIdx()
            }

            if (this.indicator) {
                this.indicator._changedState();
            }
        }
        else {
            var moveOffset = this._touchBeganPosition.sub(this._touchEndPosition);
            var index = this._curPageIdx, nextIndex = index + this._getDragDirection(moveOffset);
            var timeInSecond = this.pageTurningSpeed * Math.abs(index - nextIndex);
            // if (nextIndex < this._pages.length) {
            if (nextIndex < this.getHasPageLen()) {
                if (this._isScrollable(moveOffset, index, nextIndex)) {
                    this.scrollToPage(nextIndex, timeInSecond);
                    return;
                }
                else {
                    var touchMoveVelocity = this._calculateTouchMoveVelocity();
                    if (this._isQuicklyScrollable(touchMoveVelocity)) {
                        this.scrollToPage(nextIndex, timeInSecond);
                        return;
                    }
                }
            }
            this.scrollToPage(index, timeInSecond);
        }
    },

    getHasPageLen(){
        let hasTotal = 0
        for (let index = 0; index <  this._pages.length; index++) {
            if (this._pages[index].active){
                hasTotal++
            }
        }
        return hasTotal
    },

    setTouchEnabled(enable) {
        this._enableTouch = enable;
    },
    setHorMoveEnabled(enable){
        this._enableHorTouch = enable;
    }
    //#endregion
});