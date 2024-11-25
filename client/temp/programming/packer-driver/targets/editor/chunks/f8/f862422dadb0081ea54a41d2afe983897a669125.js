System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, Line, RVOMath, Vector2, ObserverObj, KeyValuePair, RVOConfig, Agent, _crd;

  function _reportPossibleCrUseOfCollisionBody(extras) {
    _reporterNs.report("CollisionBody", "./CollisionBody", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLine(extras) {
    _reporterNs.report("Line", "./Maths", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRVOMath(extras) {
    _reporterNs.report("RVOMath", "./Maths", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVector(extras) {
    _reporterNs.report("Vector2", "./Maths", _context.meta, extras);
  }

  _export({
    ObserverObj: void 0,
    KeyValuePair: void 0,
    RVOConfig: void 0,
    Agent: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Line = _unresolved_2.Line;
      RVOMath = _unresolved_2.RVOMath;
      Vector2 = _unresolved_2.Vector2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27880uNZi9CTLwDzDTO1CDR", "Agent", undefined);

      __checkObsolete__(['Vec3']);

      _export("ObserverObj", ObserverObj = class ObserverObj {
        constructor(val) {
          this.value = void 0;
          if (val) this.value = val;
        }

      });

      _export("KeyValuePair", KeyValuePair = class KeyValuePair {
        constructor(key, value) {
          this.Key = void 0;
          this.Value = void 0;
          this.Key = key;
          this.Value = value;
        }

      });

      _export("RVOConfig", RVOConfig = class RVOConfig {});

      /**代理对象总数 */
      RVOConfig.agentCount = 10;

      /**代理对象之间的距离 */
      RVOConfig.neighborDist = 0.75;
      //25;

      /**代理对象的半径 */
      RVOConfig.radius = 0.5;
      //10;

      /**代理对象的最大移动速度 */
      RVOConfig.maxSpeed = 1;

      /**代理对象的初始速度 */
      RVOConfig.velocity = new Vec3();

      /**最大邻居数 */
      RVOConfig.maxNeighbors = 10;

      /**安全单位时间，值越大，就会越早做出避让行为 */
      RVOConfig.timeHorizon = 5;
      //25;

      /**与timeHorizon类似，只针对障碍物 */
      RVOConfig.timeHorizonObst = 0;

      /**步骤帧 */
      RVOConfig.timeStep = 0.05;

      _export("Agent", Agent = class Agent {
        static get inst() {
          if (this._inst == null) {
            this._inst = new Agent();
          }

          return this._inst;
        }

        check(a, b) {
          let invTimeHorizon = 1.0 / RVOConfig.timeHorizon;
          let relativePosition = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2).subtract(b.getCenter(), a.getCenter());
          let relativeVelocity = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2).subtract(a.newVelocity, b.newVelocity);
          let combinedRadius = a.neighborDist + b.neighborDist;
          let combinedRadiusSq = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
            error: Error()
          }), RVOMath) : RVOMath).sqr(combinedRadius);
          let distSq = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
            error: Error()
          }), RVOMath) : RVOMath).absSq(relativePosition);
          let u = new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2)();
          let direction = new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2)();

          if (distSq > combinedRadiusSq) {
            let w = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(relativeVelocity, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply2(invTimeHorizon, relativePosition));
            let wLengthSq = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).absSq(w);
            let dotProduct1 = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply(w, relativePosition);

            if (dotProduct1 < 0 && (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).sqr(dotProduct1) > combinedRadiusSq * wLengthSq) {
              let wLength = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).sqrt(wLengthSq);
              let unitW = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).division(w, wLength);
              direction = new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2)(unitW.y, -unitW.x);
              u = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(combinedRadius * invTimeHorizon - wLength, unitW);
            } else {
              let leg = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).sqrt(distSq - combinedRadiusSq);

              if ((_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).det(relativePosition, w) > 0) {
                direction = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                  error: Error()
                }), Vector2) : Vector2).division(new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                  error: Error()
                }), Vector2) : Vector2)(relativePosition.x * leg - relativePosition.y * combinedRadius, relativePosition.x * combinedRadius + relativePosition.y * leg), distSq);
              } else {
                direction = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                  error: Error()
                }), Vector2) : Vector2).division(new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                  error: Error()
                }), Vector2) : Vector2)(relativePosition.x * leg + relativePosition.y * combinedRadius, -relativePosition.x * combinedRadius + relativePosition.y * leg), -distSq);
              }

              let dotProduct2 = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply(relativeVelocity, direction);
              u = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).subtract((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(dotProduct2, direction), relativeVelocity);
            }
          } else {
            let invTimeStep = 1.0 / RVOConfig.timeStep;
            let w = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(relativeVelocity, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply2(invTimeStep, relativePosition));
            let wLength = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).abs(w);
            let unitW = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).division(w, wLength);
            direction = new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2)(unitW.y, -unitW.x);
            u = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply2(combinedRadius * invTimeStep - wLength, unitW);
          }

          let lineA = new (_crd && Line === void 0 ? (_reportPossibleCrUseOfLine({
            error: Error()
          }), Line) : Line)();
          lineA.direction = new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2)(direction.x, direction.y);
          lineA.point = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2).addition(a.newVelocity, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2).multiply2(0.5, u));
          a.orcaLines.push(lineA);
        }

        process(bodys) {
          for (let i = 0, j = bodys.length; i < j; i++) {
            let body = bodys[i];

            if (body.isAgent && body.orcaLines.length > 0) {
              if (!body.isRemove && body.object) {
                let numObstLines = 0; //默认0wh

                let tempVelocity_ = new ObserverObj(new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                  error: Error()
                }), Vector2) : Vector2)(body.newVelocity.x, body.newVelocity.y));
                let lineFail = this.linearProgram2(body.orcaLines, body.maxVelocity, body.prefVelocity, false, tempVelocity_);

                if (lineFail < body.orcaLines.length) {
                  this.linearProgram3(body.orcaLines, numObstLines, lineFail, body.maxVelocity, tempVelocity_);
                }

                let value = tempVelocity_.value;
                body.prefVelocity.x = body.newVelocity.x;
                body.prefVelocity.y = body.newVelocity.y; // body.newVelocity.x = value.x;
                // body.newVelocity.y = value.y;

                if (body.object) {
                  let v = body.object.velocity;
                  v.x = value.x;
                  v.y = value.y;
                  v.z = 0;
                }
              }

              body.orcaLines.length = 0;
            }
          }
        }

        linearProgram1(lines, lineNo, radius, optVelocity, directionOpt, result) {
          let dotProduct = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2).multiply(lines[lineNo].point, lines[lineNo].direction);
          let discriminant = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
            error: Error()
          }), RVOMath) : RVOMath).sqr(dotProduct) + (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
            error: Error()
          }), RVOMath) : RVOMath).sqr(radius) - (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
            error: Error()
          }), RVOMath) : RVOMath).absSq(lines[lineNo].point);

          if (discriminant < 0) {
            return false;
          }

          let sqrtDiscriminant = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
            error: Error()
          }), RVOMath) : RVOMath).sqrt(discriminant);
          let tLeft = -dotProduct - sqrtDiscriminant;
          let tRight = -dotProduct + sqrtDiscriminant;

          for (let i = 0; i < lineNo; ++i) {
            let denominator = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).det(lines[lineNo].direction, lines[i].direction);
            let numerator = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).det(lines[i].direction, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(lines[lineNo].point, lines[i].point));

            if ((_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).fabs(denominator) <= (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).RVO_EPSILON) {
              if (numerator < 0) {
                return false;
              }

              continue;
            }

            let t = numerator / denominator;

            if (denominator > 0) {
              tRight = Math.min(tRight, t);
            } else {
              tLeft = Math.max(tLeft, t);
            }

            if (tLeft > tRight) {
              return false;
            }
          }

          if (directionOpt) {
            if ((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply(optVelocity, lines[lineNo].direction) > 0) {
              result.value = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).addition(lines[lineNo].point, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(tRight, lines[lineNo].direction));
            } else {
              result.value = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).addition(lines[lineNo].point, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(tLeft, lines[lineNo].direction));
            }
          } else {
            let t = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply(lines[lineNo].direction, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(optVelocity, lines[lineNo].point));

            if (t < tLeft) {
              result.value = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).addition(lines[lineNo].point, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(tLeft, lines[lineNo].direction));
            } else if (t > tRight) {
              result.value = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).addition(lines[lineNo].point, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(tRight, lines[lineNo].direction));
            } else {
              result.value = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).addition(lines[lineNo].point, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(t, lines[lineNo].direction));
            }
          }

          return true;
        }

        linearProgram2(lines, radius, optVelocity, directionOpt, result) {
          if (directionOpt) {
            result.value = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply2(radius, optVelocity);
          } else if ((_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
            error: Error()
          }), RVOMath) : RVOMath).absSq(optVelocity) > (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
            error: Error()
          }), RVOMath) : RVOMath).sqr(radius)) {
            result.value = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply2(radius, (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).normalize(optVelocity));
          } else {
            result.value = optVelocity;
          }

          for (let i = 0; i < lines.length; ++i) {
            if ((_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).det(lines[i].direction, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(lines[i].point, result.value)) > 0) {
              let tempResult = new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2)(result.value.x, result.value.y);

              if (!this.linearProgram1(lines, i, radius, optVelocity, directionOpt, result)) {
                result.value = tempResult;
                return i;
              }
            }
          }

          return lines.length;
        }

        linearProgram3(lines, numObstLines, beginLine, radius, result) {
          let distance = 0;

          for (let i = beginLine; i < lines.length; ++i) {
            if ((_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).det(lines[i].direction, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(lines[i].point, result.value)) > distance) {
              let projLines = [];

              for (let ii = 0; ii < numObstLines; ++ii) {
                projLines[projLines.length] = lines[ii];
              }

              for (let j = numObstLines; j < i; ++j) {
                let line = new (_crd && Line === void 0 ? (_reportPossibleCrUseOfLine({
                  error: Error()
                }), Line) : Line)();
                let determinant = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                  error: Error()
                }), RVOMath) : RVOMath).det(lines[i].direction, lines[j].direction);

                if ((_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                  error: Error()
                }), RVOMath) : RVOMath).fabs(determinant) <= (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                  error: Error()
                }), RVOMath) : RVOMath).RVO_EPSILON) {
                  if ((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                    error: Error()
                  }), Vector2) : Vector2).multiply(lines[i].direction, lines[j].direction) > 0.0) {
                    continue;
                  } else {
                    line.point = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                      error: Error()
                    }), Vector2) : Vector2).multiply2(0.5, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                      error: Error()
                    }), Vector2) : Vector2).addition(lines[i].point, lines[j].point));
                  }
                } else {
                  line.point = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                    error: Error()
                  }), Vector2) : Vector2).addition(lines[i].point, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                    error: Error()
                  }), Vector2) : Vector2).multiply2((_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                    error: Error()
                  }), RVOMath) : RVOMath).det(lines[j].direction, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                    error: Error()
                  }), Vector2) : Vector2).subtract(lines[i].point, lines[j].point)) / determinant, lines[i].direction));
                } // line.direction = RVOMath.normalize(Vector2.subtract(lines[j].direction, lines[i].direction));
                // projLines[projLines.length] = line;


                let d = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                  error: Error()
                }), Vector2) : Vector2).subtract(lines[j].direction, lines[i].direction);

                if ((_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                  error: Error()
                }), RVOMath) : RVOMath).absSq(d) > 0) {
                  line.direction = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                    error: Error()
                  }), RVOMath) : RVOMath).normalize(d);
                  projLines[projLines.length] = line;
                }
              }

              let tempResult = new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2)(result.value.x, result.value.y);

              if (this.linearProgram2(projLines, radius, new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2)(-lines[i].direction.y, lines[i].direction.x), true, result) < projLines.length) {
                result.value = tempResult;
              }

              distance = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).det(lines[i].direction, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).subtract(lines[i].point, result.value));
            }
          }
        }

      });

      Agent._inst = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f862422dadb0081ea54a41d2afe983897a669125.js.map