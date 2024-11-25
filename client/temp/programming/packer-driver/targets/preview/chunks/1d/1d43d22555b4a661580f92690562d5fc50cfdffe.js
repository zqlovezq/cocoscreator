System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Quat, Vec2, Vec3, Intersection2D, _crd, localP, maxDist, localCenter, obbToLocal, obbIntersect, tempR1, tempR2, tempR3, tempR4;

  // 计算球体到 AABB 的 SDF 距离
  function sphereAABBDistance(center, radius, size) {
    // 计算离包围盒最近的点
    maxDist.x = Math.max(-size.x, Math.min(center.x, size.x));
    maxDist.y = Math.max(-size.y, Math.min(center.y, size.y));
    maxDist.z = Math.max(-size.z, Math.min(center.z, size.z));
    Vec3.subtract(maxDist, maxDist, center);
    var distSqr = Vec3.dot(maxDist, maxDist);
    return distSqr <= radius * radius;
  } // 计算球体到 OBB 的 SDF 距离


  function sphereOBBDistance(sphereCenter, // 球体中心点坐标
  radius, // 球体半径
  obbCenter, // OBB 中心点坐标
  obbQuaternion, // OBB 旋转四元数
  obbHalfExtents) {
    Vec3.subtract(localCenter, sphereCenter, obbCenter);
    Quat.conjugate(obbToLocal, obbQuaternion);
    Vec3.transformQuat(localP, localCenter, obbToLocal);
    return sphereAABBDistance(localP, radius, obbHalfExtents);
  }

  /**
   * @en Test line and line
   * @zh 测试线段与线段是否相交
   */
  function lineLine(a1, a2, b1, b2) {
    // jshint camelcase:false
    var ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
    var ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
    var u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);

    if (u_b !== 0) {
      var ua = ua_t / u_b;
      var ub = ub_t / u_b;

      if (ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1) {
        return true;
      }
    }

    return false;
  }

  /**
   * @en Test line and rect
   * @zh 测试线段与矩形是否相交
   */
  function lineRect(a1, a2, b) {
    var r0 = tempR1.set(b.x, b.y);
    var r1 = tempR2.set(b.x, b.yMax);
    var r2 = tempR3.set(b.xMax, b.yMax);
    var r3 = tempR4.set(b.xMax, b.y);
    if (lineLine(a1, a2, r0, r1)) return true;
    if (lineLine(a1, a2, r1, r2)) return true;
    if (lineLine(a1, a2, r2, r3)) return true;
    if (lineLine(a1, a2, r3, r0)) return true;
    return false;
  }
  /**
   * @en Test line and polygon
   * @zh 测试线段与多边形是否相交
   */


  function linePolygon(a1, a2, b) {
    var length = b.length;

    for (var i = 0; i < length; ++i) {
      var b1 = b[i];
      var b2 = b[(i + 1) % length];
      if (lineLine(a1, a2, b1, b2)) return true;
    }

    return false;
  }
  /**
   * @en Test rect and rect
   * @zh 测试矩形与矩形是否相交
   */


  function rectRect(a, b) {
    // jshint camelcase:false
    var a_min_x = a.x;
    var a_min_y = a.y;
    var a_max_x = a.x + a.width;
    var a_max_y = a.y + a.height;
    var b_min_x = b.x;
    var b_min_y = b.y;
    var b_max_x = b.x + b.width;
    var b_max_y = b.y + b.height;
    return a_min_x <= b_max_x && a_max_x >= b_min_x && a_min_y <= b_max_y && a_max_y >= b_min_y;
  }
  /**
   * @en Test rect and polygon
   * @zh 测试矩形与多边形是否相交
   */


  function rectPolygon(a, b) {
    var r0 = tempR1.set(a.x, a.y);
    var r1 = tempR2.set(a.x, a.yMax);
    var r2 = tempR3.set(a.xMax, a.yMax);
    var r3 = tempR4.set(a.xMax, a.y); // intersection check

    if (linePolygon(r0, r1, b)) return true;
    if (linePolygon(r1, r2, b)) return true;
    if (linePolygon(r2, r3, b)) return true;
    if (linePolygon(r3, r0, b)) return true; // check if a contains b

    for (var i = 0, l = b.length; i < l; ++i) {
      if (a.contains(b[i])) return true;
    } // check if b contains a


    if (pointInPolygon(r0, b)) return true;
    if (pointInPolygon(r1, b)) return true;
    if (pointInPolygon(r2, b)) return true;
    if (pointInPolygon(r3, b)) return true;
    return false;
  }
  /**
   * @en Test polygon and polygon
   * @zh 测试多边形与多边形是否相交
   */


  function polygonPolygon(a, b) {
    var i;
    var l; // check if a intersects b

    for (i = 0, l = a.length; i < l; ++i) {
      var a1 = a[i];
      var a2 = a[(i + 1) % l];
      if (linePolygon(a1, a2, b)) return true;
    } // check if a contains b


    for (i = 0, l = b.length; i < l; ++i) {
      if (pointInPolygon(b[i], a)) return true;
    } // check if b contains a


    for (i = 0, l = a.length; i < l; ++i) {
      if (pointInPolygon(a[i], b)) return true;
    }

    return false;
  }
  /**
   * @en Test circle and circle
   * @zh 测试圆形与圆形是否相交
   */


  function circleCircle(c1p, c1r, c2p, c2r) {
    var distance = Vec2.distance(c1p, c2p);
    return distance < c1r + c2r;
  }
  /**
   * @en Test polygon and circle
   * @zh 测试多边形与圆形是否相交
   */


  function polygonCircle(polygon, cp, cr) {
    var position = cp;

    if (pointInPolygon(position, polygon)) {
      return true;
    }

    for (var i = 0, l = polygon.length; i < l; i++) {
      var start = i === 0 ? polygon[polygon.length - 1] : polygon[i - 1];
      var end = polygon[i];

      if (pointLineDistance(position, start, end, true) < cr) {
        return true;
      }
    }

    return false;
  }
  /**
   * @en Test rect and circle
   * @zh 测试矩形与圆形是否相交
   */


  function rectCircle(rect, cp, cr) {
    var cx = cp.x;
    var cy = cp.y;
    var rx = rect.x;
    var ry = rect.y;
    var rw = rect.width;
    var rh = rect.height; // temporary variables to set edges for testing

    var testX = cx;
    var testY = cy; // which edge is closest?

    if (cx < rx) testX = rx; // test left edge
    else if (cx > rx + rw) testX = rx + rw; // right edge

    if (cy < ry) testY = ry; // top edge
    else if (cy > ry + rh) testY = ry + rh; // bottom edge
    // get distance from closest edges

    var distX = cx - testX;
    var distY = cy - testY;
    var distance = Math.sqrt(distX * distX + distY * distY); // if the distance is less than the radius, collision!

    if (distance <= cr) {
      return true;
    }

    return false;
  }
  /**
   * @en Test whether the point is in the polygon
   * @zh 测试一个点是否在一个多边形中
   */


  function pointInPolygon(point, polygon) {
    var inside = false;
    var x = point.x;
    var y = point.y; // use some raycasting to test hits
    // https://github.com/substack/point-in-polygon/blob/master/index.js

    var length = polygon.length;

    for (var i = 0, j = length - 1; i < length; j = i++) {
      var xi = polygon[i].x;
      var yi = polygon[i].y;
      var xj = polygon[j].x;
      var yj = polygon[j].y;
      var intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }

    return inside;
  }
  /**
   * @en Calculate the distance of point to line.
   * @zh 计算点到直线的距离。如果这是一条线段并且垂足不在线段内，则会计算点到线段端点的距离。
   */


  function pointLineDistance(point, start, end, isSegment) {
    var dx = end.x - start.x;
    var dy = end.y - start.y;
    var d = dx * dx + dy * dy;
    var t = ((point.x - start.x) * dx + (point.y - start.y) * dy) / d;
    var p;

    if (!isSegment) {
      p = tempR1.set(start.x + t * dx, start.y + t * dy);
    } else if (d) {
      if (t < 0) p = start;else if (t > 1) p = end;else p = tempR1.set(start.x + t * dx, start.y + t * dy);
    } else {
      p = start;
    }

    dx = point.x - p.x;
    dy = point.y - p.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  /**
   * @en Intersection2D helper class
   * @zh 辅助类，用于测试形状与形状是否相交
   * @class Intersection2D
   */


  _export({
    sphereAABBDistance: sphereAABBDistance,
    sphereOBBDistance: sphereOBBDistance,
    default: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Quat = _cc.Quat;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e200arLWgRK2aEVd3mb65un", "AILib", undefined);

      __checkObsolete__(['Quat', 'Rect', 'Vec2', 'Vec3']);

      localP = {
        x: 0,
        y: 0,
        z: 0
      };
      maxDist = {
        x: 0,
        y: 0,
        z: 0
      };
      localCenter = {
        x: 0,
        y: 0,
        z: 0
      };
      obbToLocal = {
        x: 0,
        y: 0,
        z: 0,
        w: 1.0
      };

      _export("obbIntersect", obbIntersect = function obbIntersect(centerA, halfA, rotA, centerB, halfB, rotB) {
        var ae0 = halfA.x,
            ae1 = halfA.y,
            ae2 = halfA.z,
            au00 = rotA.m00,
            au01 = rotA.m01,
            au02 = rotA.m02,
            au10 = rotA.m03,
            au11 = rotA.m04,
            au12 = rotA.m05,
            au20 = rotA.m06,
            au21 = rotA.m07,
            au22 = rotA.m08;
        var be0 = halfB.x,
            be1 = halfB.y,
            be2 = halfB.z,
            bu00 = rotB.m00,
            bu01 = rotB.m01,
            bu02 = rotB.m02,
            bu10 = rotB.m03,
            bu11 = rotB.m04,
            bu12 = rotB.m05,
            bu20 = rotB.m06,
            bu21 = rotB.m07,
            bu22 = rotB.m08;
        var R00 = au00 * bu00 + au01 * bu01 + au02 * bu02;
        var R01 = au00 * bu10 + au01 * bu11 + au02 * bu12;
        var R02 = au00 * bu20 + au01 * bu21 + au02 * bu22;
        var R10 = au10 * bu00 + au11 * bu01 + au12 * bu02;
        var R11 = au10 * bu10 + au11 * bu11 + au12 * bu12;
        var R12 = au10 * bu20 + au11 * bu21 + au12 * bu22;
        var R20 = au20 * bu00 + au21 * bu01 + au22 * bu02;
        var R21 = au20 * bu10 + au21 * bu11 + au22 * bu12;
        var R22 = au20 * bu20 + au21 * bu21 + au22 * bu22;
        var v0 = centerB.x - centerA.x,
            v1 = centerB.y - centerA.y,
            v2 = centerB.z - centerA.z;
        var t0 = v0 * au00 + v1 * au01 + v2 * au02;
        var t1 = v0 * au10 + v1 * au11 + v2 * au12;
        var t2 = v0 * au20 + v1 * au21 + v2 * au22;
        var ra, rb, abs;
        var epsilon = Number.EPSILON;
        var A00 = (R00 >= 0 ? R00 : -R00) + epsilon,
            A01 = (R01 >= 0 ? R01 : -R01) + epsilon,
            A02 = (R02 >= 0 ? R02 : -R02) + epsilon;
        var A10 = (R10 >= 0 ? R10 : -R10) + epsilon,
            A11 = (R11 >= 0 ? R11 : -R11) + epsilon,
            A12 = (R12 >= 0 ? R12 : -R12) + epsilon;
        var A20 = (R20 >= 0 ? R20 : -R20) + epsilon,
            A21 = (R21 >= 0 ? R21 : -R21) + epsilon,
            A22 = (R22 >= 0 ? R22 : -R22) + epsilon;
        ra = ae0;
        rb = be0 * A00 + be1 * A01 + be2 * A02;
        if ((t0 >= 0 ? t0 : -t0) > ra + rb) return false;
        ra = ae1;
        rb = be0 * A10 + be1 * A11 + be2 * A12;
        if ((t1 >= 0 ? t1 : -t1) > ra + rb) return false;
        ra = ae2;
        rb = be0 * A20 + be1 * A21 + be2 * A22;
        if ((t2 >= 0 ? t2 : -t2) > ra + rb) return false;
        rb = be0;
        ra = ae0 * A00 + ae1 * A10 + ae2 * A20;
        abs = t0 * R00 + t1 * R10 + t2 * R20;
        if ((abs >= 0 ? abs : -abs) > ra + rb) return false;
        rb = be1;
        ra = ae0 * A01 + ae1 * A11 + ae2 * A21;
        abs = t0 * R01 + t1 * R11 + t2 * R21;
        if ((abs >= 0 ? abs : -abs) > ra + rb) return false;
        rb = be2;
        ra = ae0 * A02 + ae1 * A12 + ae2 * A22;
        abs = t0 * R02 + t1 * R12 + t2 * R22;
        if ((abs >= 0 ? abs : -abs) > ra + rb) return false; // test axis L = A0 x B0

        ra = ae1 * A20 + ae2 * A10;
        rb = be1 * A02 + be2 * A01;
        abs = t2 * R10 - t1 * R20;
        if ((abs >= 0 ? abs : -abs) > ra + rb) return false; // test axis L = A0 x B1

        ra = ae1 * A21 + ae2 * A11;
        rb = be0 * A02 + be2 * A00;
        abs = t2 * R11 - t1 * R21;
        if ((abs >= 0 ? abs : -abs) > ra + rb) return false; // test axis L = A0 x B2

        ra = ae1 * A22 + ae2 * A12;
        rb = be0 * A01 + be1 * A00;
        abs = t2 * R12 - t1 * R22;
        if ((abs >= 0 ? abs : -abs) > ra + rb) return false; // test axis L = A1 x B0

        ra = ae0 * A20 + ae2 * A00;
        rb = be1 * A12 + be2 * A11;
        abs = t0 * R20 - t2 * R00;
        if ((abs >= 0 ? abs : -abs) > ra + rb) return false; // test axis L = A1 x B1

        ra = ae0 * A21 + ae2 * A01;
        rb = be0 * A12 + be2 * A10;
        abs = t0 * R21 - t2 * R01;
        if ((abs >= 0 ? abs : -abs) > ra + rb) return false; // test axis L = A1 x B2

        ra = ae0 * A22 + ae2 * A02;
        rb = be0 * A11 + be1 * A10;
        abs = t0 * R22 - t2 * R02;
        if ((abs >= 0 ? abs : -abs) > ra + rb) return false; // test axis L = A2 x B0

        ra = ae0 * A10 + ae1 * A00;
        rb = be1 * A22 + be2 * A21;
        abs = t1 * R00 - t0 * R10;
        if ((abs >= 0 ? abs : -abs) > ra + rb) return false; // test axis L = A2 x B1

        ra = ae0 * A11 + ae1 * A01;
        rb = be0 * A22 + be2 * A20;
        abs = t1 * R01 - t0 * R11;
        if ((abs >= 0 ? abs : -abs) > ra + rb) return false; // test axis L = A2 x B2

        ra = ae0 * A12 + ae1 * A02;
        rb = be0 * A21 + be1 * A20;
        abs = t1 * R02 - t0 * R12;
        if ((abs >= 0 ? abs : -abs) > ra + rb) return false;
        return true;
      });

      tempR1 = new Vec2();
      tempR2 = new Vec2();
      tempR3 = new Vec2();
      tempR4 = new Vec2();

      _export("default", Intersection2D = class Intersection2D {});

      Intersection2D.lineLine = lineLine;
      Intersection2D.lineRect = lineRect;
      Intersection2D.linePolygon = linePolygon;
      Intersection2D.rectRect = rectRect;
      Intersection2D.rectPolygon = rectPolygon;
      Intersection2D.rectCircle = rectCircle;
      Intersection2D.polygonPolygon = polygonPolygon;
      Intersection2D.circleCircle = circleCircle;
      Intersection2D.polygonCircle = polygonCircle;
      Intersection2D.pointInPolygon = pointInPolygon;
      Intersection2D.pointLineDistance = pointLineDistance;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1d43d22555b4a661580f92690562d5fc50cfdffe.js.map