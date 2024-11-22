export class NestableScrollView extends cc.ScrollView {
    jumpToPageIndex(index:numbe):void;
    jumpToPageByName(name:string, duration?:number):void;
    getCurrentPageName():string;
    getPageIdxByName(name:string):number;
    removePageAtIndex(index:number):void;
    insertPage(page:cc.Node, index:number):void
    getPages():cc.Node[];
    setTouchEnabled(enable:boolean):void;
    setHorMoveEnabled(enable:boolean):void;
    jumpToPageByNameWithoutAction(name: string): void;
}