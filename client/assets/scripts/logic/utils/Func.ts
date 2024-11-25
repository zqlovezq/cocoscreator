import { Color, Graphics, Layers, Node, Rect, Vec2, Vec3, native, sp, sys } from "cc";
import { LoadResAsync, ResMgr } from "../mgr/ResMgr";
import { MathAngle } from "../../framework/collision/Maths";
import { Long } from "protobufjs";
import { ShowTips } from "../mgr/UIMgr";
import { LangMgr } from "../mgr/LangMgr";

export class Func {

    /**
     * 检测转换int
     * @param value 
     * @returns 
     */
    static checkInt(value: any): number {
        value = Number(value)
        return isNaN(value) ? 0 : value
    }


    static setItem(key: string, value: any) {
        sys.localStorage.setItem(key, value)
    }

    static getItem(key: string, value?: any) {
        return sys.localStorage.getItem(key)
    }

    static forBy = function <T extends any>(list: any, key: string, cId: any, type?: T): T {
        if (list) {
            var v
            for (let index = 0; index < list.length; index++) {
                v = list[index];
                if (v[key] == cId) {
                    return v
                }
            }
        }
        return null
    }
    static forBy2 = function <T extends any>(list: any, key: string, cId: any, key2: string, cId2: any, type?: T): T {
        if (list) {
            var v
            for (let index = 0; index < list.length; index++) {
                v = list[index];
                if (v[key] == cId && v[key2] == cId2) {
                    return v
                }
            }
        }
        return null
    }

    static removeBy(list: any, key: string, cId: any) {
        if (list) {
            var v
            for (let index = 0; index < list.length; index++) {
                v = list[index];
                if (v[key] == cId) {
                    list.splice(index, 1)
                }
            }
        }
    }

    static remove(list: any, item: any) {
        if (list) {
            var v
            for (let index = 0; index < list.length; index++) {
                v = list[index];
                if (v == item) {
                    list.splice(index, 1)
                }
            }
        }
    }

    static getValuesByKey(tables: any, key: string, value: any) {
        var list = []
        tables = tables || []
        if (tables) {
            var v
            for (let index = 0; index < tables.length; index++) {
                v = tables[index];
                if (v[key] == value) {
                    list.push(v)
                }
            }
        }
        return list
    }

    /**
    * 通过zIndex维护2D渲染顺序，(3.x后没有zIndex, 3.4没有priority)
    * 更改层级之前， 一定要先加到父对象内
    */
    static cocosNodeZIndex(node: Node, zindex: number) {
        node["zIndex"] = zindex
        if (node.parent) {
            Func.NodeSort(node.parent)
        }
    }

    static NodeSort(node: Node) {
        let children = node.children.concat();
        children.sort((a, b): number => {
            if (a['zIndex'] == null) {
                a['zIndex'] = 0;
            }
            if (b['zIndex'] == null) {
                b['zIndex'] = 0;
            }
            return a['zIndex'] - b['zIndex'];
        });
        let maxIndex = children.length;
        for (const nodeItem of children) {
            nodeItem.setSiblingIndex(maxIndex);
        }
    }

    static setzIndex(node: Node, zindex: number) {
        node["zIndex"] = zindex
    }


    static drawRect(box_rect: Rect, parent: Node, color?: Color, layer?: Layers.Enum, newctx?: Graphics) {
        let ctx = newctx
        if (ctx == null) {
            let line = new Node();
            line.layer = layer || Layers.Enum.UI_2D
            line.parent = parent
            ctx = line.addComponent(Graphics);
            ctx.lineWidth = 3;

        }

        ctx.clear()

        ctx.strokeColor = color || Color.RED;

        box_rect = box_rect || new Rect(-50, -50, 100, 100)
        ctx.rect(box_rect.x, box_rect.y, box_rect.width, box_rect.height);
        ctx.stroke();
        return ctx
    }

    static drawCircle(r: number, pos: Vec3 | Vec2, parent: Node, color?: Color, layer?: Layers.Enum, newctx?: Graphics) {
        let ctx = newctx

        if (ctx == null) {
            let line = new Node();
            line.layer = layer || Layers.Enum.UI_2D
            line.parent = parent
            ctx = line.addComponent(Graphics);
            ctx.lineWidth = 3;
            ctx.strokeColor = color || Color.RED;
        }

        ctx.clear()

        ctx.strokeColor = color || Color.RED;
        ctx.circle(pos.x, pos.y, r || 50)
        ctx.stroke();
        return ctx
    }

    static drawArc(r: number, angle: number, heading: number, parent: Node, color?: Color, layer?: Layers.Enum, newctx?: Graphics) {
        let ctx = newctx

        if (ctx == null) {
            let line = new Node();
            line.layer = layer || Layers.Enum.UI_2D
            line.parent = parent
            ctx = line.addComponent(Graphics);
            ctx.lineWidth = 3;
            ctx.strokeColor = color || Color.RED;
        }

        ctx.clear()

        ctx.strokeColor = color || Color.RED;
        ctx.arc(0, 0, r, heading * Math.PI / 180, (angle + heading) * Math.PI / 180, true)
        ctx.moveTo(0, 0)
        let v3 = MathAngle.angleToDirection(heading).multiplyScalar(r)
        ctx.lineTo(v3.x, v3.y)
        ctx.moveTo(0, 0)

        v3 = MathAngle.angleToDirection(angle + heading, v3).multiplyScalar(r)
        ctx.lineTo(v3.x, v3.y)

        ctx.stroke();
        return ctx
    }



    static createSpine(path: string) {
        let nn = new Node("spine")
        let spineComp = nn.addComponent(sp.Skeleton)
        let spData: sp.SkeletonData = ResMgr.get(path, sp.SkeletonData);
        spData.addRef()
        spineComp.skeletonData = spData
        spineComp.enableBatch = true
        return spineComp
    }

    /**
        获取随机整数
        @param min 随机的最小值
        @param max 随机的最大值(包括该值)
        @returns 返回一个整数，范围是 [min, max)
    */
    static random(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max + 1);
        return Math.floor(Math.random() * (max - min)) + min;
    }


    /**
     * 深度复制表数据（只可复制表内结构）
     * @param _obj 原始obj
     * @param toObj 目标obj
     * @returns 
     */
    static copyTab(_obj: any, toObj: any) {
        for (let key in _obj) {
            if (_obj.hasOwnProperty(key)) {
                if (typeof _obj[key] == "object") {
                    if (toObj[key] == null) {
                        toObj[key] = []
                    }
                    Func.copyTab(_obj[key], toObj[key])
                } else {
                    toObj[key] = _obj[key]
                }
            }
        }
        return toObj
    }
    static copyText(text: string) {
        var input = text || ""
        // if (isWechat()) {
        //     wx.setClipboardData({
        //         data: input,
        //         success(res) {
        //             console.log("复制成功")
        //             ShowTips("复制成功")
        //         },
        //         fail(res) {
        //             console.log("复制失败", res)
        //         }
        //     })
        // }
        // else if (cc.sys.isNative) {
        //     // writeToClipboard
        //     // jsb.
        //     // jsb["Device"].copyTextToClipboard(text)
        //     jsb.copyTextToClipboard(text)
        //     ShowTips("复制成功")
        // } else {

        if (sys.isNative) {
            native.copyTextToClipboard(input)
        } else {
            const el = document.createElement('textarea');
            el.value = input
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            el.style.fontSize = '12pt';

            const selection = getSelection();
            var originalRange: Range;
            if (selection.rangeCount > 0) {
                originalRange = selection.getRangeAt(0);
            }
            document.body.appendChild(el);
            el.select();
            el.selectionStart = 0;
            el.selectionEnd = input.length;

            var success = false;
            try {
                success = document.execCommand('copy');
            } catch (err) {
                console.log(err)
            }

            document.body.removeChild(el);

            if (originalRange) {
                selection.removeAllRanges();
                selection.addRange(originalRange);
            }
        }


        ShowTips(LangMgr.getLab("Tips_copysuccess"));
    }

    static getStrZhLen(str: string = "") {
        let len = 0
        var reg = new RegExp("([\u4E00-\u9FFF]|[\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b\uff01\u3010\u3011\uffe5])+");

        const japaneseRegex = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/;

        for (let index = 0; index < str.length; index++) {
            const element = str.charAt(index)
            if (reg.test(element)||japaneseRegex.test(element)) {
                len = len + 1
            } else {
                len = len + 0.5
            }

        }
        return len
    }

    static getStrZhWidth(str: string = "") {
        let len = 0;
        var pattern_Num = new RegExp("[0-9]");
        var pattern_Sy = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>《》/\?~！@#￥……&*（）——|{}【】‘；：”“'。，、？+-/ ]|[\\\\/]");
        var pattern_En1 = new RegExp("[A-Z]");
        var pattern_En2 = new RegExp("[a-z]");
        var pattern_Ch = new RegExp("[\u4E00-\u9FA5]");

        // var reg = new RegExp("([\u4E00-\u9FFF]|[\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b\uff01\u3010\u3011\uffe5])+");
        for (let index = 0; index < str.length; index++) {
            const element = str.charAt(index)
            if (pattern_Ch.test(element)) {
                //中文
                len = len + 1
            } else if (pattern_Num.test(element)) {
                //数字
                len = len + 0.53;
            } else if (pattern_En1.test(element)) {
                //大写字母
                len = len + 0.8;
            } else if (pattern_En2.test(element)) {
                //小写字母
                len = len + 0.56;
            } else {
                len = len + 0.28;
            }

        }
        return len;
    }

    /**
     * 版本号比较
     * @param versionA 
     * @param versionB 
     * @returns -1 b 大 0 相等 1 a 大
     */
    static compareVersion(versionA: string, versionB: string) {
        var vA = versionA.split('.');
        var vB = versionB.split('.');
        for (var i = 0; i < vA.length; ++i) {
            var a = parseInt(vA[i]);
            var b = parseInt(vB[i] || '0');
            if (a === b) {
                continue;
            }
            else {
                return a - b;
            }
        }
        if (vB.length > vA.length) {
            return -1;
        }
        else {
            return 0;
        }

    }

}

