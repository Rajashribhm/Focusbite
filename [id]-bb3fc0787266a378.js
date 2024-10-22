!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "eee7eb82-bc0d-4865-9a14-a6c1f95f77c5",
        e._sentryDebugIdIdentifier = "sentry-dbid-eee7eb82-bc0d-4865-9a14-a6c1f95f77c5")
    } catch (e) {}
}(),
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1094], {
    13675: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/playlist/[id]", function() {
            return n(60737)
        }
        ])
    },
    60737: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSP: function() {
                return _
            }
        });
        var r = n(85893)
          , s = n(37542)
          , u = n(67294)
          , d = n(67584)
          , i = n(53118)
          , c = n(93666)
          , f = n(95829)
          , l = n(76437)
          , o = n(35775)
          , _ = !0;
        t.default = e => {
            let t = (0,
            l.v)(e) ? e.rtl : e.state.settings.rtl;
            return (u.useEffect( () => {
                document.querySelector("html")?.setAttribute("dir", t ? "rtl" : "ltr")
            }
            , [t]),
            (0,
            l.v)(e)) ? (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(s.xB, {
                    styles: o.ue
                }), (0,
                r.jsx)(f.b, {
                    children: (0,
                    r.jsx)(i.Z, {
                        ...e
                    })
                })]
            }) : (0,
            r.jsx)(d.g, {
                ...e,
                children: (0,
                r.jsx)(c.b, {})
            })
        }
    }
}, function(e) {
    e.O(0, [3714, 3562, 2049, 347, 3666, 2888, 9774, 179], function() {
        return e(e.s = 13675)
    }),
    _N_E = e.O()
}
]);
