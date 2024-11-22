import { kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import { setAnchorPoint } from "../Utils/GameUtils";
import InfiniteCell from "./InfiniteCell";


const { ccclass, property } = cc._decorator;

enum Direction {
	vertical = 1,
	horizontal,
}

interface GetCellNumber {
	/**
	 * 返回这个 List 中数据的总数量
	 */
	(): number;
}

interface GetCellIdentifer {
	/**
	 * 通过数据的下标返回这个 Cell 的表现类型的标志
	 * @param dataIndex: 当前 Cell 所渲染的数据在列表中的下标
	 */
	(dataIndex?:number): string;
}

interface GetCellSize {
	/**
	 * 通过数据的下标返回这个 Cell 的尺寸（垂直 List 为高度，水平 List 为宽度）
	 * @param dataIndex: 当前 Cell 所渲染的数据在列表中的下标
	 */
	(dataIndex?:number): number;
}

interface GetCellView {
	/**
	 * 获取一个 Cell 的 View 实例，记住这个控件必须已经挂在一个存在的 Node 上
	 * @param dataIndex: 当前 Cell 所渲染的数据在列表中的下标
	 * @param identifier: 这个 Cell 的表现类型标志
	 * 
	 * 这个回调函数只会出现在已经没有可以重用的 Cell 时，List 才会向这个函数请求新的 Cell 实例
	 * 所有已经请求的 Cell 实例都会被重复利用。
	 */
	(dataIndex?:number, identifier?:string): InfiniteCell;
}

interface GetCellData {
	/**
	 * 根据一个 Cell 的下标获取一个 Cell 的数据，这个数据会作为 Cell 的 UpdateContent 的参数
	 * 这个回调是可选的，可以不提供，如果不提供的话，Cell 需要自己在 UpdateContent 中向其他模块获取更新自己内容的数据
	 */
	(dataIndex?:number): any;
}

export interface InitParam {
	getCellNumber: GetCellNumber,
	getCellSize: GetCellSize,
	getCellIdentifer: GetCellIdentifer,
	getCellView: GetCellView,
	getCellData?: GetCellData
}

interface CellPools {
	[index:string]: cc.NodePool;
}

interface CellSize{
	[index: string]: number;
}

@ccclass
export default class InfiniteList extends cc.Component {
	@property({
		type: cc.Enum(Direction),
		tooltip: "List 滚动的方向，可以选择垂直或者水平"
	})
	public direction = Direction.vertical;

	@property({
		tooltip: "cell 之间的像素间隔，最开始和最后面不会添加"
	})
	public spacing = 0;

	@property({tooltip: "List 顶部（水平滚动则是最左边）的间隔空间"})
	public headPadding = 0;

	@property({tooltip: "List 底部（水平滚动则是最右边）的间隔空间"})
	public bottomPadding = 0;

	@property({tooltip: "侧边的间距，垂直滚动就是左右边的间距，水平滚动就是上下边的间距"})
	public sidePadding:cc.Vec2 = new cc.Vec2(0, 0);

	@property({tooltip: "取cell固定size，还是动态获取cell的size"})
	public bDynamicSize: boolean = false;
	
	@property({tooltip: "是否要Debug模式"})
	public bDebug: boolean = false;

	private _cell_anchor_x: number = 0.5;

	onDestroy() {
		this._destroyPool();
	}

	/**无特殊需求clearPool默认即可*/
	public Init(p:InitParam, clearPoool:boolean = false) {
		this._init(p,clearPoool);
	}

	public SetCellNodeAnchorX(val: number){
		this._cell_anchor_x = val;
	}

	public playMove(cellIndex: number, moveLength: number, bShow: boolean) {
		let actionTime = 0.1;
		let realThis = this;
		if (bShow) {
			realThis.Reload(true);
		} else {
			realThis.node.pauseSystemEvents(true);
			this.scheduleOnce(() => {
				realThis.Reload(true);
				realThis.node.resumeSystemEvents(true);
			}, actionTime);
		}
		let arTemp = new Array<InfiniteCell>();
		arTemp = arTemp.concat(this._activeCellViews);
		arTemp.sort((cell1: InfiniteCell, cell2: InfiniteCell): number => {
			if (cell1.node.y > cell2.node.y) {
				return -1;
			} else if (cell1.node.y < cell2.node.y) {
				return 1;
			}
			return 0;
		});
		for (let [index, data] of Array.from(arTemp.entries())) {
			if (index + arTemp[0].dataIndex > cellIndex) {
				if (bShow) {
					data.node.y += moveLength;
					data.node.runAction(cc.moveBy(actionTime, new cc.Vec2(0, -moveLength)));
				} else {
					data.node.runAction(cc.moveBy(actionTime, new cc.Vec2(0, moveLength)));
				}
			}
		}
	}

	/**
	 * Reload 整个 List，这时获取数据的回调函数会重新触发一遍，所有的 cell 也会更新一遍内容
	 */
	public Reload(keepPos:boolean = false, allclean:boolean = false) {
		this._clear(keepPos, allclean);
		this._load();
	}

	/**
	 * 重新刷新当前显示 cell 的内容，不会重新载入整个列表
	 * 所以如果列表的数据数量发生了变化，或是想要修改 Cell 的尺寸，调用 Refresh 是没有用处的，请调用 Reload
	 */
	public Refresh() {
		this._updateActiveCellContent();
	}

	/**
	 * 视图内容将在规定时间内滚动到视图顶部
	 */
	public scrollToTop(timeInSecond?: number, attenuated?: boolean)
	{
		this._scrollView.scrollToTop(timeInSecond, attenuated);
	}

	/**
	 * 视图内容将在规定时间内滚动到视图底部
	 */
	public scrollToBottom(timeInSecond?: number, attenuated?: boolean)
	{
		this._scrollView.scrollToBottom(timeInSecond, attenuated);
	}

	/**
	 * 返回相对于 ScrollView 的这个 Cell 的滚动坐标
	 * @param idx Cell 的索引下标
	 */
	public GetScrollPosOfCell(idx:number): cc.Vec2 {
		let sp = this._getCellPosOfIndex(idx);
		if (this.direction == Direction.vertical) {
			return new cc.Vec2(0, sp);
		} else {
			return new cc.Vec2(sp * -1, 0);
		}
	}

	/**
	 * 
	 * @returns 返回活动cell的index 范围
	 */

	/**
	 * 返回相对于 ScrollView 的滚动坐标
	*/

	public GetScrollOffset()
	{
		return this._scrollView.getScrollOffset();
	}

	/**
		!#en Get the maximize available  scroll offset
		!#zh 获取滚动视图最大可以滚动的偏移量 
	*/

	public getMaxScrollOffset()
	{
		return this._scrollView.getMaxScrollOffset();
	}
	/**
	 * 在规定的时间里滚动到指定的 Cell
	 * @param idx 目标的 Cell 的下标
	 */
	public ScrollToCell(idx:number, timeInSecond:number = 1, attenuated:boolean = true) {
		let pos = this.GetScrollPosOfCell(idx);
		this._scrollView.scrollToOffset(pos, timeInSecond, attenuated);
	}

	/**
	 * 在规定的时间里滚动到指定的 pt 
	*/
	public scrollToOffset(pos:cc.Vec2, timeInSecond:number = 1, attenuated:boolean = true)
	{
		this._scrollView.scrollToOffset(pos, timeInSecond, attenuated);
	}

	public getScrollOffset(){
		return this._scrollView.getScrollOffset();
	}
	/**
	 * 查看一个 Cell 是否当前可见
	 * @param idx Cell 的下标
	 */
	public IsCellVisible(idx:number): boolean {
		if (idx >= this._activeCellIndexRange.x && idx <= this._activeCellIndexRange.y) 
			return true;
		else 
			return false;
	}

	public getContent(){
		return this._scrollView.content;
	}
	////////////////////////////////////////////////////////////
	// Implenmentions
	////////////////////////////////////////////////////////////
	private _scrollView:cc.ScrollView;
	private _content:cc.Node;
	private _delegate:InitParam;
	private _inited = false;

	private _scrollPosition = 0;
	private _activeCellIndexRange:cc.Vec2;
	private _cellPools:CellPools = {};

	private _cellsOffset:Array<number>;	// bottom side of cell position
	private _cellsSize:Array<number>;
	private _activeCellViews = new Array<InfiniteCell>();
	private _cellSizePools: CellSize = {}; //cell的Size缓存

	public onLoad() {
		// setup scrollview component
		this._scrollView = this.node.getComponent(cc.ScrollView);
		if (!this._scrollView) {
			this._scrollView = this.node.addComponent(cc.ScrollView);
			if (this.direction == Direction.horizontal) {
				this._scrollView.vertical = false;
				this._scrollView.horizontal = true;
			} else {
				this._scrollView.vertical = true;
				this._scrollView.horizontal = false;
			}
		}

		// setup content node(which is root of every cell)
		this._content = new cc.Node();
		this._content.setAnchorPoint(this._cell_anchor_x, 1);
		this.node.addChild(this._content);
		this._scrollView.content = this._content;
		if (this.bDebug) {
			// set background color to content for debug use
			this._content.addComponent(cc.Graphics);
		}

		// Everything OK, let's start
		this._inited = true;
		if (this._delegate) {
			this._load();
		}
	}

	public update() {
		if (this.bDebug) {
			let g = this._content.getComponent(cc.Graphics);
			g.clear();
			g.fillColor = cc.Color.YELLOW;
			g.fillRect(0, 0, this._content.width, this._content.height);
		}
	}

	public onEnable() {
		// bind event to scrollview
		this.node.on("scrolling", this._onScrolling, this);
	}

	public onDisable() {
		this.node.targetOff(this);
	}
	public setContentPos(slPos:number,x:number,y:number){
		this._scrollPosition = slPos;
		this._content.x = x;
		this._content.y = y;
		this._scrollView.stopAutoScroll();
		this._onScrolling();
	}
	private  _onScrolling() {
		if (!this._delegate) 
			return;
		const offset = this._scrollView.getScrollOffset();
		if (this.direction == Direction.vertical) {
			this._scrollPosition = offset.y;
		} else {
			this._scrollPosition = offset.x * -1;
		}

		// refresh active cell with new scroll position
		this._refreshActiveCells();
	}

	private _init(p:InitParam,allclean?:boolean) {
		let needClear = false;
		if (this._delegate) needClear = true;
		this._delegate = p;
		if (this._inited) {
			if (needClear) this._clear(false,allclean);
			this._load();
		}
	}

	private _clear(keepPos:boolean = false,allclean:boolean = false) {
		if (this._activeCellViews) {
			while(this._activeCellViews.length > 0) {
				this._recycleCell(this._activeCellViews.length - 1, allclean);
			}
			if(allclean){this._destroyPool();}
		}

		this._activeCellIndexRange = new cc.Vec2(-1, -1);
		if (!keepPos) {
			this._scrollPosition = 0;
			this._content.x = 0;
			this._content.y = 0;
		}
	}

	/**
	 * Description: 清空cell缓存
	 */
	public CleanCellPools(){
		if (this._activeCellViews) {
			while(this._activeCellViews.length > kZeroNumber) {
				this._recycleCell(this._activeCellViews.length - kOneNumber, true);
			}
			this._destroyPool();
		}
	}

	private _destroyPool() {
		for(let id in this._cellPools) {
			let pool = this._cellPools[id]
			if(pool) {
				pool.clear()
			}
		}
		this._cellPools = {}

		this._cellSizePools = {};
	}

	/**
	 * Description: 预创建单元格，主要用在非固定size的单元格上
	 */
	private _preCreateCell(dataIndex: number){
		let id   = this._delegate.getCellIdentifer(dataIndex);
		let cell = this._getCellViewFromPool(id);
		if (!cell) {
			cell = this._delegate.getCellView(dataIndex, id);
		}
		
		if(!cell){
			return kZeroNumber;
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

		let data = null;
		if (this._delegate.getCellData) {
			data = this._delegate.getCellData(dataIndex);
		}

		cell.UpdateContent(data);
		let size = cell.GetCellSize();

		return size;
	}

	/**
	 * Description: 生成cell
	 * @param range 
	 */
	private* _generatorCell(range: cc.Vec2){
		for (let i = range.x; i <= range.y; i++) {
			yield this._addCellView(i);
		}
	}

	/**
	 * Description: 分帧执行Generator逻辑
	 * @param generator   生成器
	 * @param duration    持续时间【每次执行Generator的操作时，最长可持续执行时长】
	 * @returns 
	 */
	private _execute(generator: Generator, duration: number){
		return new Promise<void>(resolve =>{
			let gen = generator;
			//创建执行函数
			let func = ()=>{
				 //执行前，先记录开始时间戳
				 let startTime = new Date().getTime();
				 //然后一直从Generator中获取已经拆分好的代码段出来执行
				 for(let iter = gen.next(); ; iter = gen.next()){
					 //判断是否已经执行完所有Generator的小代码段
					 //如果是的话，那么就表示任务完成
					 if(null === iter || iter.done){
						 resolve();
						 return;
					 }
 
					 // 如果超过了，那么本帧就不在执行，开定时器，让下一帧再执行
					 if(new Date().getTime() - startTime > duration){
						 this.scheduleOnce(()=>{
							 func();
						 });
					 }
				 }
			};
 
			//运行执行函数
			func();
		});
	}

	private async _load() {
		// get all cell offset with spacing and padding
		const dataLen = this._delegate.getCellNumber();
		if (dataLen <= 0) return;

		let offset = this.headPadding;
		this._cellsOffset = new Array<number>(dataLen);
		this._cellsSize = new Array<number>(dataLen);
		for (let i = 0; i < dataLen; i++) {
			let s = this._delegate.getCellSize(i);
			//let s = this.bDynamicSize ? this._preCreateCell(i) : this._delegate.getCellSize(i);
			if(this.bDynamicSize && s == -1){
				s = this._preCreateCell(i);
			}
			this._cellsSize[i] = s;
			offset = s + (i == 0 ? 0 : this.spacing) + offset;
			this._cellsOffset[i] = offset;
		}
		offset += this.bottomPadding;

		if (this.direction == Direction.vertical) {
			this._content.setContentSize(this.node.width, offset);
		} else {
			this._content.setContentSize(offset, this.node.height);
		}

		// create visible cells
		const range = this._getActiveCellIndexRange();
		this._activeCellIndexRange = range;

		//分帧加载创建cell
		await this._execute(this._generatorCell(range), 1);
		/*for (let i = range.x; i <= range.y; i++) {
			this._addCellView(i);
		}*/
	}

	private async _refreshActiveCells() {
		// update current active cells with new scroll position
		const range = this._getActiveCellIndexRange();
		// check if any cell need update
		if (range.equals(this._activeCellIndexRange)) return;

		// recycle all out of range cell
		let i = 0;
		while (i < this._activeCellViews.length) {
			let cell = this._activeCellViews[i];
			if (cell.dataIndex < range.x || cell.dataIndex > range.y) {
				this._recycleCell(i);
			} else {
				i++;
			}
		}

		// add any not exist cell
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
		await this._execute(this._generatorActiveCell(range), 1);

		// update current active cell range
		this._activeCellIndexRange = range;
	}

	/**
	 * Description: 生成激活的cell
	 */
	private* _generatorActiveCell(range: cc.Vec2){
		for (let i = range.x; i <= range.y; i++) {
			let needadd = true;
			for (let j = 0; j < this._activeCellViews.length; j++) {
				if (this._activeCellViews[j].dataIndex == i) {
					needadd = false;
					break;
				}
			}

			if (needadd){
				yield this._addCellView(i);
			}
		}
	}

	/**
	 * remove one active cell from _activeCellViews array
	 * @param cellIndex index of active cell views array
	 */
	private _recycleCell(cellIndex:number ,allclean:boolean = false) {
		// !TODO: need store this cell in node pool
		if(cellIndex >= this._activeCellViews.length){
			return;
		}
		
		let cell = this._activeCellViews[cellIndex];
		if(null === cell || undefined === cell){
			return;
		}

		this._activeCellViews.splice(cellIndex, 1);
		cell.node.removeFromParent(false);
		if(allclean){
			cell.node.destroy();
			if(cell){cell.destroy();}
			return;
		}
		cell.dataIndex = -1;
		if (!this._cellPools[cell.cellIdentifier]) {
			this._cellPools[cell.cellIdentifier] = new cc.NodePool();
		}
		let pool = this._cellPools[cell.cellIdentifier];
		pool.put(cell.node);
	}

	private _getCellViewFromPool(id:string): InfiniteCell | null {
		if (!this._cellPools[id]) return null;
		let pool = this._cellPools[id];
		let cellNode = pool.get();
		if (!cellNode) return null;
		return cellNode.getComponent(InfiniteCell);
	}

	private _getCellSizeFromPool(id: string): number{
		if(!this._cellSizePools[id]){
			return -1;
		}

		let ret = this._cellSizePools[id];
		return ret;
	}

	/**
	 * Return vector2 for start and end cell index of current scroll position
	 */
	public _getActiveCellIndexRange():cc.Vec2 {
		let startPos = this._scrollPosition;
		let endPos = startPos + (this.direction == Direction.vertical ? this.node.height : this.node.width);
		return new cc.Vec2(this._getCellIndexOfPos(startPos), this._getCellIndexOfPos(endPos));
	}

	private _getCellIndexOfPos(pos:number): number {
		// !TODO: boost this function speed by using binary search
		if(!this._cellsOffset || this._cellsOffset.length <= 0){
			return -1;
		}

		for (let i = 0; i < this._cellsOffset.length; i++) {
			if (this._cellsOffset[i] >= pos) return i;
		}
		return this._cellsOffset.length - 1;
	}

	/**
	 * Get cell top position by its index
	 * @param idx Cell index
	 */
	private _getCellPosOfIndex(idx:number): number {
		if(!this._cellsOffset || this._cellsOffset.length <= 0){
			return 0;
		}

		return this._cellsOffset[idx] - this._cellsSize[idx];
	}

	private _addCellView(dataIndex:number) {
		const dataLen = this._delegate.getCellNumber();
		if(dataLen <= kZeroNumber){
			return;
		}
		
		let id = this._delegate.getCellIdentifer(dataIndex);
		let cell = this._getCellViewFromPool(id);
		if (!cell) {
			cell = this._delegate.getCellView(dataIndex, id);
			if(!cell){
				return;
			}

			// cell.node.setAnchorPoint(0, 1);
			setAnchorPoint(cell.node, this._cell_anchor_x, 1)
			cell.cellIdentifier = id;
		}

		cell.dataIndex = dataIndex;
		cell.enabled   = true;
		cell.node.name = `${dataIndex}`;
		this._activeCellViews.push(cell);
		this._content.addChild(cell.node);
		if (this.direction == Direction.vertical) {
			cell.node.x = this.sidePadding.x;
			cell.node.y = (this._cellsOffset[cell.dataIndex] - this._cellsSize[cell.dataIndex]) * -1;
			cell.node.setContentSize(this.node.width - this.sidePadding.x - this.sidePadding.y, this._cellsSize[dataIndex]);
		} else {
			cell.node.x = (this._cellsOffset[cell.dataIndex] - this._cellsSize[cell.dataIndex]);
			cell.node.y = this.sidePadding.x * -1;
			cell.node.setContentSize(this._cellsSize[dataIndex], this.node.height - this.sidePadding.x - this.sidePadding.y);
		}

		cell.dataIndex = dataIndex;
		this._updateCellContent(cell);
	}

	private _updateActiveCellContent() {
		this._activeCellViews.forEach(cell => {
			this._updateCellContent(cell);
		});
	}

	private _updateCellContent(cell:InfiniteCell) {
		let data = null
		if (this._delegate.getCellData) {
			data = this._delegate.getCellData(cell.dataIndex);
		}

		cell.UpdateContent(data);
	}

	/**
	 * Description: 根据child名称获取子节点
	 */
	public findCellOfIdx(dataIdx: number): InfiniteCell{
		let cell = this._content.getChildByName(`${dataIdx}`);
		if(cell){
			return cell.getComponent(InfiniteCell);
		}
		
		return null;
	}
}