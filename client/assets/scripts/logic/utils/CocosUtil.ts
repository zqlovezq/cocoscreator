import { Node, TiledMap, Vec2, Vec3, sys, v3 } from "cc";

export class CocosUtil {
    static v3(x: number, y?: number, z?: number, out?: Vec3) {
        let v = v3() || out
        v.x = x || 0
        v.y = y || x
        v.z = z || x
        return v
    }

    static v3Out(out: Vec3) {
        out = out || this.v3(0)
        return out
    }

    static pos() {
    }

}

