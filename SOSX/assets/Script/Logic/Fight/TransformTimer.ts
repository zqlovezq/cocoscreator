
const {ccclass, property} = cc._decorator;

@ccclass
export default class TransformTimer extends cc.Component {

    @property(cc.ProgressBar)
    pbCountdown:cc.ProgressBar = null;

    setProgress(progress:number) {
        if(progress > 1) {
            progress = 1;
        } else if(progress < 0) {
            progress = 0;
        }
        this.pbCountdown.progress = progress
    }
}
