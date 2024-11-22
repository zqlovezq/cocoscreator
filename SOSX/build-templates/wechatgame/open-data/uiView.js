
function RoundRect(ctx, x, y, w, h, r, extra){
	// 开始绘制
	 ctx.beginPath();
	 // 因为边缘描边存在锯齿，最好指定使用 transparent 填充
	 // 这里是使用 fill 还是 stroke都可以，二选一即可
	 ctx.fillStyle = extra;
	 
	 // 左上角
	 ctx.arc(x + r, y + r, r, Math.PI, Math.PI * 1.5);
	 
	 // border-top
	 ctx.moveTo(x + r, y);
	 ctx.lineTo(x + w - r, y);
	 ctx.lineTo(x + w, y + r);
	 ctx.stroke();

	 // 右上角
	 ctx.arc(x + w - r, y + r, r, Math.PI * 1.5, Math.PI * 2);
	 
	 // border-right
	 ctx.lineTo(x + w, y + h - r);
	 ctx.lineTo(x + w - r, y + h);
	 ctx.stroke();

	 // 右下角
	 ctx.arc(x + w - r, y + h - r, r, 0, Math.PI * 0.5);
	 
	 // border-bottom
	 ctx.lineTo(x + r, y + h);
	 ctx.lineTo(x, y + h - r);
	 ctx.stroke();
	 
	 // 左下角
	 ctx.arc(x + r, y + h - r, r, Math.PI * 0.5, Math.PI);
	 
	 // border-left
	 ctx.lineTo(x, y + r);
	 ctx.lineTo(x + r, y);
	 ctx.stroke();
	 // 这里是使用 fill 还是 stroke都可以，二选一即可，但是需要与上面对应
	 ctx.fill();
	 // ctx.stroke()
	 ctx.closePath();
	 // 剪切
	 ctx.clip();
}

function View(context, l, t, w, h, corner) {
    this.context = context;
    this.position = {x: l || 0, y: t || 0}
    this.size = {width: w || 0, height: h || 0}
    this.background = null; // color="#000"
    this.margin = {left: 0, top: 0, right: 0, bottom: 0}
    this.anchor = {x: 0.5, y: 0.5};

    this.render = function () {

        if (this.beforeRender) {
            this.beforeRender();
        }
        this.context.save();
        const bgType = this.background && typeof this.background;
        if (bgType === "string") {
            if (this.background.charAt(0) === '#') {
                this.context.fillStyle = this.background;
				/*if(1 == corner){
					RoundRect(this.context, this.position.x, this.position.y, this.size.width, this.size.height, 10, this.background);
				}else{*/
					this.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
				//}
            } else {
                const img = wx.createImage();
                img.src = this.background;
                img.onload = () => {
                    context.drawImage(img, this.position.x, this.position.y, this.size.width, this.size.height);
                };
                //console.log("渲染图片尺寸:", this.position, this.size);
            }
        } else if (bgType === "object") {
            let x1 = this.size.width, y1 = this.size.height;
            if (this.background.arrow && this.background.arrow.length === 2) {
                x1 *= this.background.arrow[0];
                y1 *= this.background.arrow[1];
            }
            x1 += this.position.x;
            y1 += this.position.y;

            const gradient = context.createLinearGradient(this.position.x, this.position.y, x1, y1);
            Object.keys(this.background).forEach(key => {
                try {
                    let keyNum = parseFloat(key);
                    if (!isNaN(keyNum)) {
                        gradient.addColorStop(keyNum, this.background[key]);
                    }
                } catch (e) {
                }
            });
            this.context.fillStyle = gradient;
            this.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
        }
        this.context.restore();

        this.context.save();
        if (this.onRender) {
            this.onRender();
        }
        this.context.restore();

        if (this.afterRender) {
            this.afterRender();
        }
    }
    this.beforeRender = function () {
    }
    this.onRender = function () {
    }
    this.afterRender = function () {
    }
};

function Sleep(val){
	for(let t = Date.now(); Date.now() - t <= val;);
}

function ImageView(context, l, t, w, h) {
    View.call(this, context, l, t, w, h);

    this.src = null;
    this.scaleType = "center";// center, fill,anchor,centerInside

    this.onRender = function () {
        if (!this.src) return;
        const img = wx.createImage();
        img.src = this.src;
        img.onload = () => {
            const bound = this.measureImage(img);
            //console.log("图片bound:", bound);
            context.drawImage(img, bound.l, bound.t, bound.w, bound.h);
        };
		
        img.onError = (err) => {
            //console.log("头像加载错误:", err);
        }	
    }
    this.measureImage = function (img) {
        //console.log("图片尺寸:", img.width, img.height);
        const bound = {
            l: this.position.x,
            t: this.position.y,
            w: this.size.width,
            h: this.size.height
        }
        switch (this.scaleType) {
            case "fill": {
                break;
            }
            case "center": {
                this.anchor.x = 0.5;
                this.anchor.y = 0.5;
            }
            case "anchor": {
                this.anchor = this.anchor || {x: 0.5, y: 0.5}
                this.anchor.x = this.anchor.x || 0.5;
                this.anchor.y = this.anchor.y || 0.5;
                bound.l = this.position.x + this.size.width * this.anchor.x - img.width / 2;
                bound.t = this.position.y + this.size.height * this.anchor.y - img.height / 2;
                bound.w = img.width;
                bound.h = img.height;
                break;
            }
            case "centerInside": {
                if (this.size.width <= 0 || this.size.height <= 0) {
                    break;
                }
                const factor = this.size.width / this.size.height;
                if (factor <= img.width / img.height) {
                    bound.w = this.size.width;
                    bound.h = img.height * this.size.width / img.width;
                } else {
                    bound.h = this.size.height;
                    bound.w = img.width * this.size.height / img.height;
                }
                this.anchor.x = 0.5;
                this.anchor.y = 0.5;
                bound.l = this.position.x + this.size.width * this.anchor.x - bound.w / 2;
                bound.t = this.position.y + this.size.height * this.anchor.y - bound.h / 2;
                break;
            }
        }
        return bound;
    }
}

function TextView(context, l, t, w, h) {
    View.call(this, context, l, t, w, h);

    // 文本内容.
    this.text = null;

    // 文本颜色.
    this.textColor = "#000000";

    // 文本大小.
    this.textSize = 100;

    this.fontFamily = "Arial";

    // 文本对齐方式.
    this.textAlign = "center|middle"; // left, center,right;;top, middle, bottom

    // 文本显示不下时,是否裁剪,还是自适应.
    this.style = "clamp"; // clamp, shrink

    // 描边属性配置.
    this.strokeStyle = null;
    this.lineWidth = 0;

    this.onRender = function () {
        if (!this.text) return;
        const bound = this.measureText();
        //console.log("TextView 渲染.", bound);
        this.context.fillStyle = this.textColor;
        this.context.textAlign = "middle";
        this.context.textBaseLine = "bottom";

        // console.log("textView:strokeStyle=", this.strokeStyle);
        if (this.strokeStyle) {
            this.context.strokeStyle = this.strokeStyle;
            this.context.lineWidth = this.lineWidth || 0;
            this.context.strokeText(this.text, bound.l, bound.t);
        }
        this.context.fillText(this.text, bound.l, bound.t);
    };

    // 测量文本区域.
    this.measureText = function () {
        if (!this.text) return;
        if (this.textAlign) {
            const hor = ["left", "center", "right"];
            const ver = ["top", "middle", "bottom"];
            const aligns = this.textAlign.split("|");
            for (let align of aligns) {
                align = align.trim().toLowerCase();
                let index = hor.indexOf(align);
                if (index >= 0) {
                    this.anchor.x = index * 0.5;
                } else {
                    index = ver.indexOf(align);
                    if (index >= 0) {
                        this.anchor.y = index * 0.5;
                    }
                }
            }
        }
        this.context.font = this.textSize + "px " + this.fontFamily;
        this.context.textBaseLine = "bottom";
        let m = this.context.measureText(this.text);
        // 自适应缩小字体到指定区域大小.
        if (this.style === "shrink" && this.size.width > 0) {
            while (m.width > this.size.width) {
                this.textSize = this.textSize * this.size.width / m.width;
                this.context.font = this.textSize + "px " + this.fontFamily;
                m = this.context.measureText(this.text);

                if (this.textSize < 10) {
                    this.textSize = 10;
                    this.context.font = this.textSize + "px " + this.fontFamily;
                    m = this.context.measureText(this.text);
                    break;
                }
                //console.log("文本自适应缩小:", this.textSize);
            }
        }
        let bound = {l: this.position.x, t: this.position.y, w: m.width, h: this.textSize};
        let padW = this.size.width - bound.w;
        let padH = this.size.height - bound.h;
        bound.l = bound.l + padW * this.anchor.x;
        bound.t = bound.t + padH * this.anchor.y + Math.floor(this.textSize * 0.9);
        return bound;
    }
}

module.exports.View = View;
module.exports.ImageView = ImageView;
module.exports.TextView = TextView;

// ImageView
(function () {
    // 创建一个没有实例方法的类
    var Super = function () {
    };
    Super.prototype = View.prototype;
    //将实例作为子类的原型
    ImageView.prototype = new Super();
})();

// TextView
(function () {
    // 创建一个没有实例方法的类
    var Super = function () {
    };
    Super.prototype = View.prototype;
    //将实例作为子类的原型
    TextView.prototype = new Super();
})();
