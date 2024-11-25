System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Enum, NodePool, Vec2, Vec3, tween, ScrollView, Graphics, UITransform, Color, InfiniteCell, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, Direction, InfiniteList;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfInfiniteCell(extras) {
    _reporterNs.report("InfiniteCell", "./InfiniteCell", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Enum = _cc.Enum;
      NodePool = _cc.NodePool;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      ScrollView = _cc.ScrollView;
      Graphics = _cc.Graphics;
      UITransform = _cc.UITransform;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      InfiniteCell = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b554f+xCwdK9qk1OTt1rHlw", "InfiniteList", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Enum', 'NodePool', 'Vec2', 'Vec3', 'tween', 'ScrollView', 'Graphics', 'UITransform', 'Color', 'SpriteFrame', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      Direction = /*#__PURE__*/function (Direction) {
        Direction[Direction["vertical"] = 1] = "vertical";
        Direction[Direction["horizontal"] = 2] = "horizontal";
        return Direction;
      }(Direction || {});

      _export("default", InfiniteList = (_dec = property({
        type: Enum(Direction),
        tooltip: "List 滚动的方向，可以选择垂直或者水平"
      }), _dec2 = property({
        tooltip: "cell 之间的像素间隔，最开始和最后面不会添加"
      }), _dec3 = property({
        tooltip: "List 顶部（水平滚动则是最左边）的间隔空间"
      }), _dec4 = property({
        tooltip: "List 底部（水平滚动则是最右边）的间隔空间"
      }), _dec5 = property({
        tooltip: "侧边的间距，垂直滚动就是左右边的间距，水平滚动就是上下边的间距"
      }), _dec6 = property({
        tooltip: "取cell固定size，还是动态获取cell的size"
      }), _dec7 = property({
        tooltip: "是否要Debug模式"
      }), _dec8 = property({
        tooltip: "滚动行为是否会取消节点注册的触摸事件"
      }), _dec9 = property({
        tooltip: "是否开启滚动惯性"
      }), _dec10 = property({
        tooltip: "是否允许滚动内容超过边界，并在停止触摸后回弹"
      }), ccclass(_class = (_class2 = class InfiniteList extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "direction", _descriptor, this);

          _initializerDefineProperty(this, "spacing", _descriptor2, this);

          _initializerDefineProperty(this, "headPadding", _descriptor3, this);

          _initializerDefineProperty(this, "bottomPadding", _descriptor4, this);

          _initializerDefineProperty(this, "sidePadding", _descriptor5, this);

          _initializerDefineProperty(this, "bDynamicSize", _descriptor6, this);

          _initializerDefineProperty(this, "bDebug", _descriptor7, this);

          _initializerDefineProperty(this, "cancelInnerEvents", _descriptor8, this);

          _initializerDefineProperty(this, "inertia", _descriptor9, this);

          _initializerDefineProperty(this, "elastic", _descriptor10, this);

          this._cell_anchor_x = 0.5;
          ////////////////////////////////////////////////////////////
          // Implenmentions
          ////////////////////////////////////////////////////////////
          this._scrollView = void 0;
          this._content = void 0;
          this._delegate = void 0;
          this._inited = false;
          this._scrollPosition = 0;
          this._activeCellIndexRange = void 0;
          this._cellPools = {};
          this._cellsOffset = void 0;
          // bottom side of cell position
          this._cellsSize = void 0;
          this._activeCellViews = new Array();
          this._cellSizePools = {};
        }

        onDestroy() {
          this._destroyPool();
        }
        /**无特殊需求clearPool默认即可*/


        Init(p, clearPoool) {
          if (clearPoool === void 0) {
            clearPoool = false;
          }

          this._init(p, clearPoool);
        }

        SetCellNodeAnchorX(val) {
          this._cell_anchor_x = val;
        }

        playMove(cellIndex, moveLength, bShow) {
          var actionTime = 0.1;
          var realThis = this;

          if (bShow) {
            realThis.Reload(true);
          } else {
            realThis.node.pauseSystemEvents(true);
            this.scheduleOnce(() => {
              realThis.Reload(true);
              realThis.node.resumeSystemEvents(true);
            }, actionTime);
          }

          var arTemp = new Array();
          arTemp = arTemp.concat(this._activeCellViews);
          arTemp.sort((cell1, cell2) => {
            if (cell1.node.getPosition().y > cell2.node.getPosition().y) {
              return -1;
            } else if (cell1.node.getPosition().y < cell2.node.getPosition().y) {
              return 1;
            }

            return 0;
          });

          for (var [_index, data] of Array.from(arTemp.entries())) {
            if (_index + arTemp[0].dataIndex > cellIndex) {
              if (bShow) {
                // data.node.getPosition().y += moveLength;
                data.node.setPosition(data.node.getPosition().x, data.node.getPosition().y += moveLength, 0);
                tween(data.node).by(actionTime, {
                  position: new Vec3(0, -moveLength, 0)
                }).start(); // data.node.runAction(cc.moveBy(actionTime, new cc.Vec2(0, -moveLength)));
              } else {
                // data.node.runAction(cc.moveBy(actionTime, new cc.Vec2(0, moveLength)));
                tween(data.node).by(actionTime, {
                  position: new Vec3(0, moveLength, 0)
                }).start();
              }
            }
          }
        }
        /**
         * Reload 整个 List，这时获取数据的回调函数会重新触发一遍，所有的 cell 也会更新一遍内容
         */


        Reload(keepPos, allclean) {
          if (keepPos === void 0) {
            keepPos = false;
          }

          if (allclean === void 0) {
            allclean = false;
          }

          this._clear(keepPos, allclean);

          this._load();
        }
        /**
         * 重新刷新当前显示 cell 的内容，不会重新载入整个列表
         * 所以如果列表的数据数量发生了变化，或是想要修改 Cell 的尺寸，调用 Refresh 是没有用处的，请调用 Reload
         */


        Refresh() {
          this._updateActiveCellContent();
        }
        /**
         * 视图内容将在规定时间内滚动到视图顶部
         */


        scrollToTop(timeInSecond, attenuated) {
          this._scrollView.scrollToTop(timeInSecond, attenuated);
        }
        /**
         * 视图内容将在规定时间内滚动到视图底部
         */


        scrollToBottom(timeInSecond, attenuated) {
          this._scrollView.scrollToBottom(timeInSecond, attenuated);
        }
        /**
         * 返回相对于 ScrollView 的这个 Cell 的滚动坐标
         * @param idx Cell 的索引下标
         */


        GetScrollPosOfCell(idx) {
          var sp = this._getCellPosOfIndex(idx);

          if (this.direction == Direction.vertical) {
            return new Vec2(0, sp);
          } else {
            return new Vec2(sp * 1, 0);
          }
        }
        /**
         * 
         * @returns 返回活动cell的index 范围
         */

        /**
         * 返回相对于 ScrollView 的滚动坐标
        */


        GetScrollOffset() {
          return this._scrollView.getScrollOffset();
        }
        /**
        	!#en Get the maximize available  scroll offset
        	!#zh 获取滚动视图最大可以滚动的偏移量 
        */


        getMaxScrollOffset() {
          return this._scrollView.getMaxScrollOffset();
        }
        /**
         * 在规定的时间里滚动到指定的 Cell
         * @param idx 目标的 Cell 的下标
         */


        ScrollToCell(idx, timeInSecond, attenuated) {
          if (timeInSecond === void 0) {
            timeInSecond = 1;
          }

          if (attenuated === void 0) {
            attenuated = true;
          }

          var pos = this.GetScrollPosOfCell(idx);

          this._scrollView.scrollToOffset(pos, timeInSecond, attenuated);

          if (timeInSecond == 0) {
            this._onScrolling();
          }
        }
        /**
         * 在规定的时间里滚动到指定的 pt 
        */


        scrollToOffset(pos, timeInSecond, attenuated) {
          if (timeInSecond === void 0) {
            timeInSecond = 1;
          }

          if (attenuated === void 0) {
            attenuated = true;
          }

          this._scrollView.scrollToOffset(pos, timeInSecond, attenuated);
        }

        getScrollOffset() {
          return this._scrollView.getScrollOffset();
        }
        /**
         * 查看一个 Cell 是否当前可见
         * @param idx Cell 的下标
         */


        IsCellVisible(idx) {
          if (idx >= this._activeCellIndexRange.x && idx <= this._activeCellIndexRange.y) return true;else return false;
        }

        getContent() {
          return this._scrollView.content;
        }

        //cell的Size缓存
        onLoad() {
          // setup scrollview component
          this._scrollView = this.node.getComponent(ScrollView);

          if (!this._scrollView) {
            this._scrollView = this.node.addComponent(ScrollView);

            if (this.direction == Direction.horizontal) {
              this._scrollView.vertical = false;
              this._scrollView.horizontal = true;
            } else {
              this._scrollView.vertical = true;
              this._scrollView.horizontal = false;
            }
          }

          this._scrollView.cancelInnerEvents = this.cancelInnerEvents;
          this._scrollView.inertia = this.inertia;
          this._scrollView.elastic = this.elastic; // setup content node(which is root of every cell)

          this._content = new Node();
          this._content.name = "list_content";

          this._content.addComponent(UITransform);

          this._content.getComponent(UITransform).setAnchorPoint(this._cell_anchor_x, 1);

          this.node.addChild(this._content);
          this._scrollView.content = this._content;

          if (this.bDebug) {
            // set background color to content for debug use
            this._content.addComponent(Graphics);
          } // Everything OK, let's start


          this._inited = true;

          if (this._delegate) {
            this._load();
          }
        }

        update() {
          if (this.bDebug) {
            var g = this._content.getComponent(Graphics);

            g.clear();
            g.fillColor = Color.YELLOW;
            g.fillRect(0, 0, this._content.getComponent(UITransform).width, this._content.getComponent(UITransform).height);
          }
        }

        onEnable() {
          // bind event to scrollview
          this.node.on("scrolling", this._onScrolling, this);
        }

        onDisable() {
          this.node.targetOff(this);
        }

        setContentPos(slPos, x, y) {
          this._scrollPosition = slPos;

          this._content.setPosition(new Vec3(x, y, 0));

          var dataLen = this._delegate.getCellNumber();

          if (dataLen <= 0) return;
          this.stopAutoScroll();
        }

        stopAutoScroll() {
          this._scrollView.stopAutoScroll();

          this._onScrolling();
        }

        _onScrolling() {
          if (!this._delegate) return;

          var offset = this._scrollView.getScrollOffset();

          if (this.direction == Direction.vertical) {
            this._scrollPosition = offset.y;
          } else {
            this._scrollPosition = offset.x * -1;
          } // refresh active cell with new scroll position


          this._refreshActiveCells();
        }

        _init(p, allclean) {
          var needClear = false;
          if (this._delegate) needClear = true;
          this._delegate = p;

          if (this._inited) {
            if (needClear) this._clear(false, allclean);

            this._load();
          }
        }

        _clear(keepPos, allclean) {
          if (keepPos === void 0) {
            keepPos = false;
          }

          if (allclean === void 0) {
            allclean = false;
          }

          if (this._activeCellViews) {
            while (this._activeCellViews.length > 0) {
              this._recycleCell(this._activeCellViews.length - 1, allclean);
            }

            if (allclean) {
              this._destroyPool();
            }
          }

          this._activeCellIndexRange = new Vec2(-1, -1);

          if (!keepPos) {
            this._scrollPosition = 0; // this._content.getPosition().x = 0;
            // this._content.getPosition().y = 0;

            this._content.setPosition(new Vec3(0, 0, 0));
          }
        }
        /**
         * Description: 清空cell缓存
         */


        CleanCellPools() {
          if (this._activeCellViews) {
            while (this._activeCellViews.length > 1) {
              this._recycleCell(this._activeCellViews.length - 1, true);
            }

            this._destroyPool();
          }
        }

        _destroyPool() {
          for (var id in this._cellPools) {
            var pool = this._cellPools[id];

            if (pool) {
              pool.clear();
            }
          }

          this._cellPools = {};
          this._cellSizePools = {};
        }
        /**
         * Description: 预创建单元格，主要用在非固定size的单元格上
         */


        _preCreateCell(dataIndex) {
          var id = this._delegate.getCellIdentifer(dataIndex);

          var cell = this._getCellViewFromPool(id);

          if (!cell) {
            cell = this._delegate.getCellView(dataIndex, id);
          }

          if (!cell) {
            return 1;
          }
          /*let size = this._getCellSizeFromPool(id);
          if(-1 == size){
          	let data = null;
          	if (this._delegate.getCellData) {
          		data = this._delegate.getCellData(dataIndex);
          	}
          			cell.UpdateContent(data);
          	size = cell.GetCellSize();
          }
          
          if(!this._cellSizePools[id]){
          	this._cellSizePools[id] = size;
          }*/


          var data = null;

          if (this._delegate.getCellData) {
            data = this._delegate.getCellData(dataIndex);
          }

          cell.UpdateContent(data);
          var size = cell.GetCellSize();
          return size;
        }
        /**
         * Description: 生成cell
         * @param range 
         */


        *_generatorCell(range) {
          for (var i = range.x; i <= range.y; i++) {
            yield this._addCellView(i);
          }
        }
        /**
         * Description: 分帧执行Generator逻辑
         * @param generator   生成器
         * @param duration    持续时间【每次执行Generator的操作时，最长可持续执行时长】
         * @returns 
         */


        _execute(generator, duration) {
          return new Promise(resolve => {
            var gen = generator; //创建执行函数

            var func = () => {
              //执行前，先记录开始时间戳
              var startTime = new Date().getTime(); //然后一直从Generator中获取已经拆分好的代码段出来执行

              for (var iter = gen.next();; iter = gen.next()) {
                //判断是否已经执行完所有Generator的小代码段
                //如果是的话，那么就表示任务完成
                if (null === iter || iter.done) {
                  resolve();
                  return;
                } // 如果超过了，那么本帧就不在执行，开定时器，让下一帧再执行


                if (new Date().getTime() - startTime > duration) {
                  this.scheduleOnce(() => {
                    func();
                  });
                }
              }
            }; //运行执行函数


            func();
          });
        }

        _load() {
          var _this = this;

          return _asyncToGenerator(function* () {
            // get all cell offset with spacing and padding
            var dataLen = _this._delegate.getCellNumber();

            if (dataLen <= 0) return;
            var offset = _this.headPadding;
            _this._cellsOffset = new Array(dataLen);
            _this._cellsSize = new Array(dataLen);

            for (var i = 0; i < dataLen; i++) {
              var s = _this._delegate.getCellSize(i); //let s = this.bDynamicSize ? this._preCreateCell(i) : this._delegate.getCellSize(i);


              if (_this.bDynamicSize && s == -1) {
                s = _this._preCreateCell(i);
              }

              _this._cellsSize[i] = s;
              offset = s + (i == 0 ? 0 : _this.spacing) + offset;
              _this._cellsOffset[i] = offset;
            }

            offset += _this.bottomPadding;

            if (_this.direction == Direction.vertical) {
              _this._content.getComponent(UITransform).setContentSize(_this.node.getComponent(UITransform).width, offset);
            } else {
              _this._content.getComponent(UITransform).setContentSize(offset, _this.node.getComponent(UITransform).height);
            } // create visible cells


            var range = _this._getActiveCellIndexRange();

            _this._activeCellIndexRange = range; //分帧加载创建cell

            yield _this._execute(_this._generatorCell(range), 1);
            /*for (let i = range.x; i <= range.y; i++) {
            	this._addCellView(i);
            }*/
          })();
        }

        _refreshActiveCells() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            // update current active cells with new scroll position
            var range = _this2._getActiveCellIndexRange(); // check if any cell need update


            if (range.equals(_this2._activeCellIndexRange)) return; // recycle all out of range cell

            var i = 0;

            while (i < _this2._activeCellViews.length) {
              var cell = _this2._activeCellViews[i];

              if (cell.dataIndex < range.x || cell.dataIndex > range.y) {
                _this2._recycleCell(i);
              } else {
                i++;
              }
            } // add any not exist cell
            // !TODO: boost this part effecient

            /*for (let i = range.x; i <= range.y; i++) {
            	let needadd = true;
            	for (let j = 0; j < this._activeCellViews.length; j++) {
            		if (this._activeCellViews[j].dataIndex == i) {
            			needadd = false;
            			break;
            		}
            	}
            			if (needadd) this._addCellView(i);
            }*/


            yield _this2._execute(_this2._generatorActiveCell(range), 1); // update current active cell range

            _this2._activeCellIndexRange = range;
          })();
        }
        /**
         * Description: 生成激活的cell
         */


        *_generatorActiveCell(range) {
          for (var i = range.x; i <= range.y; i++) {
            var needadd = true;

            for (var j = 0; j < this._activeCellViews.length; j++) {
              if (this._activeCellViews[j].dataIndex == i) {
                needadd = false;
                break;
              }
            }

            if (needadd) {
              yield this._addCellView(i);
            }
          }
        }
        /**
         * remove one active cell from _activeCellViews array
         * @param cellIndex index of active cell views array
         */


        _recycleCell(cellIndex, allclean) {
          if (allclean === void 0) {
            allclean = false;
          }

          // !TODO: need store this cell in node pool
          if (cellIndex >= this._activeCellViews.length) {
            return;
          }

          var cell = this._activeCellViews[cellIndex];

          if (null === cell || undefined === cell) {
            return;
          }

          this._activeCellViews.splice(cellIndex, 1);

          cell.node.removeFromParent();

          if (allclean) {
            cell.node.destroy();

            if (cell) {
              cell.destroy();
            }

            return;
          }

          cell.dataIndex = -1;

          if (!this._cellPools[cell.cellIdentifier]) {
            this._cellPools[cell.cellIdentifier] = new NodePool();
          }

          var pool = this._cellPools[cell.cellIdentifier];
          pool.put(cell.node);
        }

        _getCellViewFromPool(id) {
          if (!this._cellPools[id]) return null;
          var pool = this._cellPools[id];
          var cellNode = pool.get();
          if (!cellNode) return null;
          return cellNode.getComponent(_crd && InfiniteCell === void 0 ? (_reportPossibleCrUseOfInfiniteCell({
            error: Error()
          }), InfiniteCell) : InfiniteCell);
        }

        _getCellSizeFromPool(id) {
          if (!this._cellSizePools[id]) {
            return -1;
          }

          var ret = this._cellSizePools[id];
          return ret;
        }
        /**
         * Return vector2 for start and end cell index of current scroll position
         */


        _getActiveCellIndexRange() {
          var startPos = this._scrollPosition;
          var endPos = startPos + (this.direction == Direction.vertical ? this.node.getComponent(UITransform).height : this.node.getComponent(UITransform).width);
          return new Vec2(this._getCellIndexOfPos(startPos), this._getCellIndexOfPos(endPos));
        }

        _getCellIndexOfPos(pos) {
          // !TODO: boost this function speed by using binary search
          if (!this._cellsOffset || this._cellsOffset.length <= 0) {
            return -1;
          }

          for (var i = 0; i < this._cellsOffset.length; i++) {
            if (this._cellsOffset[i] >= pos) return i;
          }

          return this._cellsOffset.length - 1;
        }
        /**
         * Get cell top position by its index
         * @param idx Cell index
         */


        _getCellPosOfIndex(idx) {
          if (!this._cellsOffset || this._cellsOffset.length <= 0) {
            return 0;
          }

          return this._cellsOffset[idx] - this._cellsSize[idx];
        }

        _addCellView(dataIndex) {
          var dataLen = this._delegate.getCellNumber(); // if(dataLen <= 1){
          // 	return;
          // }


          var id = this._delegate.getCellIdentifer(dataIndex);

          var cell = this._getCellViewFromPool(id);

          if (!cell) {
            cell = this._delegate.getCellView(dataIndex, id);

            if (!cell) {
              return;
            } // cell.node.setAnchorPoint(0, 1);


            this.setAnchorPoint(cell.node, this._cell_anchor_x, 1);
            cell.cellIdentifier = id;
          }

          cell.dataIndex = dataIndex;
          cell.enabled = true;
          cell.node.name = "" + dataIndex;

          this._activeCellViews.push(cell);

          this._content.addChild(cell.node);

          if (this.direction == Direction.vertical) {
            // cell.node.getPosition().x = this.sidePadding.x;
            // cell.node.getPosition().y = (this._cellsOffset[cell.dataIndex] - this._cellsSize[cell.dataIndex]) * -1;
            cell.node.setPosition(new Vec3(this.sidePadding.x, (this._cellsOffset[cell.dataIndex] - this._cellsSize[cell.dataIndex]) * -1, 0));
            cell.node.getComponent(UITransform).setContentSize(this.node.getComponent(UITransform).width - this.sidePadding.x - this.sidePadding.y, this._cellsSize[dataIndex]);
          } else {
            // cell.node.getPosition().x = (this._cellsOffset[cell.dataIndex] - this._cellsSize[cell.dataIndex]);
            // cell.node.getPosition().y = this.sidePadding.x * -1;
            cell.node.setPosition(new Vec3(this._cellsOffset[cell.dataIndex] - this._cellsSize[cell.dataIndex], this.sidePadding.x * -1, 0));
            cell.node.getComponent(UITransform).setContentSize(this._cellsSize[dataIndex], this.node.getComponent(UITransform).height - this.sidePadding.x - this.sidePadding.y);
          }

          cell.dataIndex = dataIndex;

          this._updateCellContent(cell);
        }

        _updateActiveCellContent() {
          this._activeCellViews.forEach(cell => {
            this._updateCellContent(cell);
          });
        }

        _updateCellContent(cell) {
          var data = null;

          if (this._delegate.getCellData) {
            data = this._delegate.getCellData(cell.dataIndex);
          }

          cell.UpdateContent(data);
        }
        /**
         * Description: 根据child名称获取子节点
         */


        findCellOfIdx(dataIdx) {
          var cell = this._content.getChildByName("" + dataIdx);

          if (cell) {
            return cell.getComponent(_crd && InfiniteCell === void 0 ? (_reportPossibleCrUseOfInfiniteCell({
              error: Error()
            }), InfiniteCell) : InfiniteCell);
          }

          return null;
        }

        checkOverflow() {
          return this._content.getPosition().y > this.node.getComponent(UITransform).height || this._content.getPosition().y == this.node.getComponent(UITransform).height && this._content.getComponent(UITransform).height > this.node.getComponent(UITransform).height;
        }

        isAutoScrolling() {
          return this._scrollView.isAutoScrolling();
        }

        isScrolling() {
          return this._scrollView.isScrolling();
        }

        setAnchorPoint(node, anchorX, anchorY) {
          var dx = (anchorX - node.getComponent(UITransform).anchorX) * node.getComponent(UITransform).width;
          var dy = (anchorY - node.getComponent(UITransform).anchorY) * node.getComponent(UITransform).height; // node.getPosition().x += dx;
          // node.getPosition().y += dy;

          node.setPosition(new Vec3(node.getPosition().x += dx, node.getPosition().y += dy, 0));

          for (var child of node.children) {
            // child.getPosition().x -= dx;
            // child.getPosition().y -= dy;
            node.setPosition(new Vec3(child.getPosition().x -= dx, child.getPosition().y -= dy, 0));
          }

          node.getComponent(UITransform).setAnchorPoint(new Vec2(anchorX, anchorY));
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "direction", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Direction.vertical;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spacing", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "headPadding", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bottomPadding", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sidePadding", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(0, 0);
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bDynamicSize", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bDebug", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "cancelInnerEvents", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "inertia", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "elastic", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=64eb9459025b74394a926ece628745092214663b.js.map