/*
 * @Descripttion: 
 * @LastEditTime: 2021-04-27 17:53:13
 */
cc.Class({
    extends: cc.ScrollView,

    properties: {
        m_OuterScrollView: {
            default: null,
            visible: false,
        }
    },

    setOuterScrollView:function(outer) {
        this.m_OuterScrollView = outer;
    },

     //#region 重写cc.ScrollView的方法
    _onTouchMoved: function (event, captureListeners) {
        if (!this.enabledInHierarchy) return;
        if (this.hasNestedViewGroup(event, captureListeners)) return;

        var touch = event.touch;
        var deltaMove = touch.getLocation().sub(touch.getStartLocation());
        
        if (this.content) {
            if (this.m_OuterScrollView && !this.m_OuterScrollView.isDifferentBetweenSettingAndPlan(this)) {
                this._handleMoveLogic(touch);
            }
        }

        if (!this.cancelInnerEvents) {
            return;
        }

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
    //#endregion
});

