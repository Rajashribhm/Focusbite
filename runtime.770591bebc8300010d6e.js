/*!For license information please see runtime.770591bebc8300010d6e.js.LICENSE.txt*/
( () => {
    "use strict";
    var r, e = {}, t = {};
    function o(r) {
        var n = t[r];
        if (void 0 !== n)
            return n.exports;
        var i = t[r] = {
            id: r,
            exports: {}
        };
        return e[r](i, i.exports, o),
        i.exports
    }
    o.m = e,
    r = [],
    o.O = (e, t, n, i) => {
        if (!t) {
            var a = 1 / 0;
            for (f = 0; f < r.length; f++) {
                for (var [t,n,i] = r[f], l = !0, c = 0; c < t.length; c++)
                    (!1 & i || a >= i) && Object.keys(o.O).every((r => o.O[r](t[c]))) ? t.splice(c--, 1) : (l = !1,
                    i < a && (a = i));
                if (l) {
                    r.splice(f--, 1);
                    var u = n();
                    void 0 !== u && (e = u)
                }
            }
            return e
        }
        i = i || 0;
        for (var f = r.length; f > 0 && r[f - 1][2] > i; f--)
            r[f] = r[f - 1];
        r[f] = [t, n, i]
    }
    ,
    o.n = r => {
        var e = r && r.__esModule ? () => r.default : () => r;
        return o.d(e, {
            a: e
        }),
        e
    }
    ,
    o.d = (r, e) => {
        for (var t in e)
            o.o(e, t) && !o.o(r, t) && Object.defineProperty(r, t, {
                enumerable: !0,
                get: e[t]
            })
    }
    ,
    o.u = r => {
        if (485 === r)
            return "timer-worker.js"
    }
    ,
    o.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (r) {
            if ("object" == typeof window)
                return window
        }
    }(),
    o.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e),
    o.r = r => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(r, "__esModule", {
            value: !0
        })
    }
    ,
    ( () => {
        var r;
        o.g.importScripts && (r = o.g.location + "");
        var e = o.g.document;
        if (!r && e && (e.currentScript && (r = e.currentScript.src),
        !r)) {
            var t = e.getElementsByTagName("script");
            t.length && (r = t[t.length - 1].src)
        }
        if (!r)
            throw new Error("Automatic publicPath is not supported in this browser");
        r = r.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        o.p = r
    }
    )(),
    ( () => {
        o.b = document.baseURI || self.location.href;
        var r = {
            666: 0
        };
        o.O.j = e => 0 === r[e];
        var e = (e, t) => {
            var n, i, [a,l,c] = t, u = 0;
            if (a.some((e => 0 !== r[e]))) {
                for (n in l)
                    o.o(l, n) && (o.m[n] = l[n]);
                if (c)
                    var f = c(o)
            }
            for (e && e(t); u < a.length; u++)
                i = a[u],
                o.o(r, i) && r[i] && r[i][0](),
                r[i] = 0;
            return o.O(f)
        }
          , t = self.webpackChunkgf_pomodoro = self.webpackChunkgf_pomodoro || [];
        t.forEach(e.bind(null, 0)),
        t.push = e.bind(null, t.push.bind(t))
    }
    )(),
    o.nc = void 0
}
)();