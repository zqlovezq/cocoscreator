export default class Stopwatch {
    protected startMs:number = 0
    protected countdownSec:number = 0
    protected customElapse:number = 0;

    public static create(countdownSec:number): Stopwatch {
        let ins = new Stopwatch();
        ins.init(countdownSec);
        return ins;
    }

    protected init(countdownSec:number) {
        this.startMs = Date.now();
        if(countdownSec < 0) {
            countdownSec = 0;
        }
        this.countdownSec = countdownSec; 
    }

    //获取倒计时
    public Countdown() {
        return this.calculateCountdown(this.Elapse())
    }

    //获取经过的时间
    public Elapse():number {
        return (Date.now() - this.startMs) / 1000
    }


    public AddCustomElapse(dt:number) {
        this.customElapse += dt
    }
    public CustomCountdown() {
        return this.calculateCountdown(this.customElapse)
    }

    protected calculateCountdown(elapse:number) {
        let second = this.countdownSec - elapse;
        if(second < 0) {
            second = 0;
        }
        // return Math.floor(second);
        return Math.ceil(second)
    }

    public Progress():number {
        return this.calculateProgress(this.Elapse())
    } 

    public CustomProgress():number {
        return this.calculateProgress(this.customElapse)
    }

    protected calculateProgress(elapse:number):number {
        if(this.countdownSec == 0) {
            return 1
        }
        let leftTime = this.countdownSec - elapse;
        if(leftTime < 0) {
            leftTime = 0;
        }
        return leftTime / this.countdownSec;
    }

    public static Format(second:number, fmt:string) {
        let h = Math.floor(second / (60 * 60));
        let hRemain = second % (60 * 60);
        let m = Math.floor(hRemain / 60);
        let mRemain = hRemain % 60;
        let s = mRemain;

        let obj = {
            "h+": ('00' + h).substr(-2),
            "m+": ('00' + m).substr(-2),
            "s+": ('00' + s).substr(-2),
        }

        for (let key in obj) {
            let pat = `(${key})`
            if (new RegExp(pat).test(fmt)) {
                let str = obj[key] + '';
                // RegExp.$1 hh mm ss贪婪匹配
                fmt = fmt.replace(RegExp.$1, str)
            }
        }
        return fmt;
    }
}