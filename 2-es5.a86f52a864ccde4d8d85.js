(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2], {
  /***/
  "./node_modules/mobile-drag-drop/index.min.js":
  /*!****************************************************!*\
    !*** ./node_modules/mobile-drag-drop/index.min.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMobileDragDropIndexMinJs(module, exports, __webpack_require__) {
    /*! mobile-drag-drop 2.3.0-rc.1 | Copyright (c) 2019 Tim Ruffles | MIT License */
    !function (t, i) {
      true ? i(exports) : undefined;
    }(this, function (t) {
      "use strict";

      var i = "dnd-poly-",
          s = i + "snapback",
          n = "dnd-poly-",
          h = n + "dragstart-pending",
          e = n + "dragstart-cancel",
          r = ["none", "copy", "copyLink", "copyMove", "link", "linkMove", "move", "all"],
          o = ["none", "copy", "move", "link"];

      var u = function () {
        var t = !1;

        try {
          var i = Object.defineProperty({}, "passive", {
            get: function get() {
              t = !0;
            }
          });
          window.addEventListener("test", null, i);
        } catch (t) {}

        return t;
      }();

      function a(t) {
        return t && t.tagName;
      }

      function c(t, i, s) {
        void 0 === s && (s = !0), document.addEventListener(t, i, !!u && {
          passive: s
        });
      }

      function f(t, i) {
        document.removeEventListener(t, i);
      }

      function l(t, i, s, n) {
        void 0 === n && (n = !1);
        var h = u ? {
          passive: !0,
          capture: n
        } : n;
        return t.addEventListener(i, s, h), {
          off: function off() {
            t.removeEventListener(i, s, h);
          }
        };
      }

      function d(t) {
        return 0 === t.length ? 0 : t.reduce(function (t, i) {
          return i + t;
        }, 0) / t.length;
      }

      function v(t, i) {
        for (var s = 0; s < t.changedTouches.length; s++) {
          if (t.changedTouches[s].identifier === i) return !0;
        }

        return !1;
      }

      function p(t, i, s) {
        for (var n = [], h = [], e = 0; e < i.touches.length; e++) {
          var r = i.touches[e];
          n.push(r[t + "X"]), h.push(r[t + "Y"]);
        }

        s.x = d(n), s.y = d(h);
      }

      var g = ["", "-webkit-"];

      function m(t, i, s, n, h) {
        void 0 === h && (h = !0);
        var e = i.x,
            r = i.y;
        n && (e += n.x, r += n.y), h && (e -= parseInt(t.offsetWidth, 10) / 2, r -= parseInt(t.offsetHeight, 10) / 2);

        for (var o = "translate3d(" + e + "px," + r + "px, 0)", u = 0; u < g.length; u++) {
          var a = g[u] + "transform";
          t.style[a] = o + " " + s[u];
        }
      }

      var b = function () {
        function t(t, i) {
          this.t = t, this.i = i, this.s = o[0];
        }

        return Object.defineProperty(t.prototype, "dropEffect", {
          get: function get() {
            return this.s;
          },
          set: function set(t) {
            0 !== this.t.mode && r.indexOf(t) > -1 && (this.s = t);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "types", {
          get: function get() {
            if (0 !== this.t.mode) return Object.freeze(this.t.types);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "effectAllowed", {
          get: function get() {
            return this.t.effectAllowed;
          },
          set: function set(t) {
            2 === this.t.mode && r.indexOf(t) > -1 && (this.t.effectAllowed = t);
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.setData = function (t, i) {
          if (2 === this.t.mode) {
            if (t.indexOf(" ") > -1) throw new Error("illegal arg: type contains space");
            this.t.data[t] = i, -1 === this.t.types.indexOf(t) && this.t.types.push(t);
          }
        }, t.prototype.getData = function (t) {
          if (1 === this.t.mode || 2 === this.t.mode) return this.t.data[t] || "";
        }, t.prototype.clearData = function (t) {
          if (2 === this.t.mode) {
            if (t && this.t.data[t]) {
              delete this.t.data[t];
              var i = this.t.types.indexOf(t);
              return void (i > -1 && this.t.types.splice(i, 1));
            }

            this.t.data = {}, this.t.types = [];
          }
        }, t.prototype.setDragImage = function (t, i, s) {
          2 === this.t.mode && this.i(t, i, s);
        }, t;
      }();

      function y(t, i) {
        return t ? t === r[0] ? o[0] : 0 === t.indexOf(r[1]) || t === r[7] ? o[1] : 0 === t.indexOf(r[4]) ? o[3] : t === r[6] ? o[2] : o[1] : 3 === i.nodeType && "A" === i.tagName ? o[3] : o[1];
      }

      function w(t, i, s, n, h, e, r) {
        void 0 === e && (e = !0), void 0 === r && (r = null);

        var o = function (t, i, s, n, h, e, r) {
          void 0 === r && (r = null);
          var o = i.changedTouches[0],
              u = new Event(s, {
            bubbles: !0,
            cancelable: n
          });
          u.dataTransfer = e, u.relatedTarget = r, u.screenX = o.screenX, u.screenY = o.screenY, u.clientX = o.clientX, u.clientY = o.clientY, u.pageX = o.pageX, u.pageY = o.pageY;
          var a = t.getBoundingClientRect();
          return u.offsetX = u.clientX - a.left, u.offsetY = u.clientY - a.top, u;
        }(i, s, t, e, document.defaultView, h, r),
            u = !i.dispatchEvent(o);

        return n.mode = 0, u;
      }

      function x(t, i) {
        if (!t || t === r[7]) return i;

        if (i === o[1]) {
          if (0 === t.indexOf(o[1])) return o[1];
        } else if (i === o[3]) {
          if (0 === t.indexOf(o[3]) || t.indexOf("Link") > -1) return o[3];
        } else if (i === o[2] && (0 === t.indexOf(o[2]) || t.indexOf("Move") > -1)) return o[2];

        return o[0];
      }

      var I,
          j = function () {
        function t(t, i, s, n) {
          this.h = t, this.o = i, this.u = s, this.l = n, this.v = 0, this.p = null, this.g = null, this.m = t, this.I = t.changedTouches[0], this.j = this.C.bind(this), this.S = this.k.bind(this), c("touchmove", this.j, !1), c("touchend", this.S, !1), c("touchcancel", this.S, !1);
        }

        return t.prototype.A = function () {
          var t = this;
          this.v = 1, this.O = o[0], this.D = {
            data: {},
            effectAllowed: void 0,
            mode: 3,
            types: []
          }, this.M = {
            x: null,
            y: null
          }, this.F = {
            x: null,
            y: null
          };
          var i = this.u;
          if (this.N = new b(this.D, function (s, n, h) {
            i = s, "number" != typeof n && "number" != typeof h || (t.P = {
              x: n || 0,
              y: h || 0
            });
          }), this.D.mode = 2, this.N.dropEffect = o[0], w("dragstart", this.u, this.m, this.D, this.N)) return this.v = 3, this.T(), !1;
          p("page", this.m, this.F);
          var s,
              n = this.o.dragImageSetup(i);
          if (this.L = (s = n, g.map(function (t) {
            var i = s.style[t + "transform"];
            return i && "none" !== i ? i.replace(/translate\(\D*\d+[^,]*,\D*\d+[^,]*\)\s*/g, "") : "";
          })), n.style.position = "absolute", n.style.left = "0px", n.style.top = "0px", n.style.zIndex = "999999", n.classList.add("dnd-poly-drag-image"), n.classList.add("dnd-poly-icon"), this._ = n, !this.P) if (this.o.dragImageOffset) this.P = {
            x: this.o.dragImageOffset.x,
            y: this.o.dragImageOffset.y
          };else if (this.o.dragImageCenterOnTouch) {
            var h = getComputedStyle(i);
            this.P = {
              x: 0 - parseInt(h.marginLeft, 10),
              y: 0 - parseInt(h.marginTop, 10)
            };
          } else {
            var e = i.getBoundingClientRect();
            h = getComputedStyle(i);
            this.P = {
              x: e.left - this.I.clientX - parseInt(h.marginLeft, 10) + e.width / 2,
              y: e.top - this.I.clientY - parseInt(h.marginTop, 10) + e.height / 2
            };
          }
          return m(this._, this.F, this.L, this.P, this.o.dragImageCenterOnTouch), document.body.appendChild(this._), this.V = window.setInterval(function () {
            t.X || (t.X = !0, t.Y(), t.X = !1);
          }, this.o.iterationInterval), !0;
        }, t.prototype.T = function () {
          this.V && (clearInterval(this.V), this.V = null), f("touchmove", this.j), f("touchend", this.S), f("touchcancel", this.S), this._ && (this._.parentNode.removeChild(this._), this._ = null), this.l(this.o, this.m, this.v);
        }, t.prototype.C = function (t) {
          var i = this;

          if (!1 !== v(t, this.I.identifier)) {
            if (this.m = t, 0 === this.v) {
              var s = void 0;
              if (this.o.dragStartConditionOverride) try {
                s = this.o.dragStartConditionOverride(t);
              } catch (t) {
                s = !1;
              } else s = 1 === t.touches.length;
              return s ? void (!0 === this.A() && (this.h.preventDefault(), t.preventDefault())) : void this.T();
            }

            if (t.preventDefault(), p("client", t, this.M), p("page", t, this.F), this.o.dragImageTranslateOverride) try {
              var n = !1;
              if (this.o.dragImageTranslateOverride(t, {
                x: this.M.x,
                y: this.M.y
              }, this.p, function (t, s) {
                i._ && (n = !0, i.M.x += t, i.M.y += s, i.F.x += t, i.F.y += s, m(i._, i.F, i.L, i.P, i.o.dragImageCenterOnTouch));
              }), n) return;
            } catch (t) {}
            m(this._, this.F, this.L, this.P, this.o.dragImageCenterOnTouch);
          }
        }, t.prototype.k = function (t) {
          if (!1 !== v(t, this.I.identifier)) {
            if (this.o.dragImageTranslateOverride) try {
              this.o.dragImageTranslateOverride(void 0, void 0, void 0, function () {});
            } catch (t) {}
            0 !== this.v ? (t.preventDefault(), this.v = "touchcancel" === t.type ? 3 : 2) : this.T();
          }
        }, t.prototype.Y = function () {
          var t = this,
              n = this.O;
          this.D.mode = 3, this.N.dropEffect = o[0];
          var h = w("drag", this.u, this.m, this.D, this.N);
          if (h && (this.O = o[0]), h || 2 === this.v || 3 === this.v) return this.q(this.v) ? void function (t, i, n, h) {
            var e = getComputedStyle(t);

            if ("hidden" !== e.visibility && "none" !== e.display) {
              i.classList.add(s);
              var r = getComputedStyle(i),
                  o = parseFloat(r.transitionDuration);
              if (isNaN(o) || 0 === o) h();else {
                var u = t.getBoundingClientRect(),
                    a = {
                  x: u.left,
                  y: u.top
                };
                a.x += document.body.scrollLeft || document.documentElement.scrollLeft, a.y += document.body.scrollTop || document.documentElement.scrollTop, a.x -= parseInt(e.marginLeft, 10), a.y -= parseInt(e.marginTop, 10);
                var c = parseFloat(r.transitionDelay),
                    f = Math.round(1e3 * (o + c));
                m(i, a, n, void 0, !1), setTimeout(h, f);
              }
            } else h();
          }(this.u, this._, this.L, function () {
            t.B();
          }) : void this.B();
          var e = this.o.elementFromPoint(this.M.x, this.M.y),
              r = this.g;
          e !== this.p && e !== this.g && (this.p = e, null !== this.g && (this.D.mode = 3, this.N.dropEffect = o[0], w("dragexit", this.g, this.m, this.D, this.N, !1)), null === this.p ? this.g = this.p : (this.D.mode = 3, this.N.dropEffect = y(this.D.effectAllowed, this.u), w("dragenter", this.p, this.m, this.D, this.N) ? (this.g = this.p, this.O = x(this.N.effectAllowed, this.N.dropEffect)) : this.p !== document.body && (this.g = document.body))), r !== this.g && a(r) && (this.D.mode = 3, this.N.dropEffect = o[0], w("dragleave", r, this.m, this.D, this.N, !1, this.g)), a(this.g) && (this.D.mode = 3, this.N.dropEffect = y(this.D.effectAllowed, this.u), !1 === w("dragover", this.g, this.m, this.D, this.N) ? this.O = o[0] : this.O = x(this.N.effectAllowed, this.N.dropEffect)), n !== this.O && this._.classList.remove(i + n);
          var u = i + this.O;

          this._.classList.add(u);
        }, t.prototype.q = function (t) {
          var i = this.O === o[0] || null === this.g || 3 === t;
          return i ? a(this.g) && (this.D.mode = 3, this.N.dropEffect = o[0], w("dragleave", this.g, this.m, this.D, this.N, !1)) : a(this.g) && (this.D.mode = 1, this.N.dropEffect = this.O, !0 === w("drop", this.g, this.m, this.D, this.N) ? this.O = this.N.dropEffect : this.O = o[0]), i;
        }, t.prototype.B = function () {
          this.D.mode = 3, this.N.dropEffect = this.O, w("dragend", this.u, this.m, this.D, this.N, !1), this.v = 2, this.T();
        }, t;
      }(),
          C = {
        iterationInterval: 150,
        tryFindDraggableTarget: function tryFindDraggableTarget(t) {
          var i = t.target;

          do {
            if (!1 !== i.draggable) {
              if (!0 === i.draggable) return i;
              if (i.getAttribute && "true" === i.getAttribute("draggable")) return i;
            }
          } while ((i = i.parentNode) && i !== document.body);
        },
        dragImageSetup: function dragImageSetup(t) {
          var i = t.cloneNode(!0);
          return function t(i, s) {
            if (1 === i.nodeType) {
              for (var n = getComputedStyle(i), h = 0; h < n.length; h++) {
                var e = n[h];
                s.style.setProperty(e, n.getPropertyValue(e), n.getPropertyPriority(e));
              }

              if (s.style.pointerEvents = "none", s.removeAttribute("id"), s.removeAttribute("class"), s.removeAttribute("draggable"), "CANVAS" === s.nodeName) {
                var r = i,
                    o = s,
                    u = r.getContext("2d").getImageData(0, 0, r.width, r.height);
                o.getContext("2d").putImageData(u, 0, 0);
              }
            }

            if (i.hasChildNodes()) for (h = 0; h < i.childNodes.length; h++) t(i.childNodes[h], s.childNodes[h]);
          }(t, i), i;
        },
        elementFromPoint: function elementFromPoint(t, i) {
          return document.elementFromPoint(t, i);
        }
      };

      function S(t) {
        if (!I) {
          var i = C.tryFindDraggableTarget(t);
          if (i) try {
            I = new j(t, C, i, A);
          } catch (i) {
            throw A(C, t, 3), i;
          }
        }
      }

      function k(t) {
        var i = t.target,
            s = function s(t) {
          r.off(), o.off(), u.off(), a.off(), i && i.dispatchEvent(new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0
          })), clearTimeout(n);
        };

        i && i.dispatchEvent(new CustomEvent(h, {
          bubbles: !0,
          cancelable: !0
        }));
        var n = window.setTimeout(function () {
          r.off(), o.off(), u.off(), a.off(), S(t);
        }, C.holdToDrag),
            r = l(i, "touchend", s),
            o = l(i, "touchcancel", s),
            u = l(i, "touchmove", s),
            a = l(window, "scroll", s, !0);
      }

      function A(t, i, s) {
        if (0 === s && t.defaultActionOverride) try {
          t.defaultActionOverride(i), i.defaultPrevented;
        } catch (t) {}
        I = null;
      }

      t.polyfill = function (t) {
        if (t && Object.keys(t).forEach(function (i) {
          C[i] = t[i];
        }), !C.forceApply) {
          var i = (s = {
            dragEvents: "ondragstart" in document.documentElement,
            draggable: "draggable" in document.documentElement,
            userAgentSupportingNativeDnD: void 0
          }, n = !!window.chrome || /chrome/i.test(navigator.userAgent), s.userAgentSupportingNativeDnD = !(/iPad|iPhone|iPod|Android/.test(navigator.userAgent) || n && "ontouchstart" in document.documentElement), s);
          if (i.userAgentSupportingNativeDnD && i.draggable && i.dragEvents) return !1;
        }

        var s, n;
        return C.holdToDrag ? c("touchstart", k, !1) : c("touchstart", S, !1), !0;
      }, Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }); //# sourceMappingURL=index.min.js.map

    /***/
  }
}]);