/*!For license information please see timer-worker.js.LICENSE.txt*/
( () => {
    let t, e = Date.now(), a = 0, n = 0, o = !1;
    self.addEventListener("message", (r => {
        if ("timer" === r.data.type) {
            if ("pause" == r.data.action && o)
                return clearInterval(t),
                void (o = !1);
            var s;
            "start" == r.data.action && (s = r.data.duration,
            e = Date.now(),
            a = 0,
            n = s),
            o || (t = setInterval(( () => {
                const r = ( () => {
                    const t = Math.round((Date.now() - e) / 1e3) - a;
                    a += t;
                    const o = t - (a > n ? a - n : 0);
                    return o > 0 ? o : 1
                }
                )();
                if (a >= n)
                    return clearInterval(t),
                    o = !1,
                    void postMessage({
                        type: "timer",
                        data: "end",
                        counted: a,
                        countMax: n
                    });
                for (let t = 0; t < r; t++)
                    postMessage({
                        type: "timer",
                        gap: r,
                        counted: a,
                        countMax: n
                    })
            }
            ), 1e3),
            o = !0)
        }
    }
    )),
    addEventListener("push", (e => {
        console.log("SW", e, e.data.text()),
        clearInterval(t),
        clients.matchAll().then((t => {
            for (const e of t)
                console.log(t)
        }
        ))
    }
    ))
}
)();
