/**
 *  血条
 */

const {ccclass, property} = cc._decorator;

@ccclass
export default class HpBar extends cc.Component {

    @property(cc.ProgressBar)
    progressBar: cc.ProgressBar = null;

    @property(cc.Sprite)
    bar0:cc.Sprite = null;

    @property(cc.Sprite)
    bar1:cc.Sprite = null;

    @property(cc.Sprite)
    shield_bar:cc.Sprite = null;

    protected barArray: cc.Sprite[] = []
    protected bgWidth:number;
    protected bgHeight:number;

    /*  */
    onLoad() {
        this.bgWidth = this.progressBar.node.width
        this.bgHeight = this.progressBar.node.height
           
        if(this.bar0) {
            this.barArray.push(this.bar0)
        }

        if(this.bar1) {
            this.barArray.push(this.bar1)
        }
    }

    /*  */
    public get progress() {
        return this.progressBar.progress;
    }

    /*  */
    public set progress(progress:number) {
        this.progressBar.progress = progress;
    }

    /*  */
    setBarIndex(index:number) {
        if (index >= 0 && index < this.barArray.length) {
            if(this.progressBar.barSprite == this.barArray[index]) {
                return
            }
            this.progressBar.barSprite  = this.barArray[index]
            this.progressBar.node.width = this.bgWidth;
            this.progressBar.node.height= this.bgHeight;
            this.barArray[index].node.x = 0
            this.barArray[index].node.active = true;
        }
    }
    showShieldBar(shield:number,hp:number,maxHp:number){
        this.shield_bar.node.opacity = 255;
        let max = maxHp;
        if(shield+hp>max){
            max = shield+hp;
            this.progress = hp/max;
            this.shield_bar.fillRange = 1-(hp/max);
            this.shield_bar.node.x = 25;
        }else{
            this.progress = hp/max;
            this.shield_bar.fillRange = shield/max;
            this.shield_bar.node.x = 50*((hp/max-0.5)+shield/max);
        }
    }
}
