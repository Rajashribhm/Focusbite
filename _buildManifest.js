self.__BUILD_MANIFEST = function(s, e, i, a, t, c, d, o, r, u, n, p, h, b, f, k, l) {
    return {
        __rewrites: {
            afterFiles: [{
                has: c,
                source: "/embed/:path*",
                destination: d
            }, {
                has: c,
                source: "/embed-podcast/:path*",
                destination: d
            }, {
                has: c,
                source: "/embed-legacy/:path*",
                destination: d
            }, {
                has: c,
                source: "/oembed",
                destination: "/api/oembed"
            }, {
                has: c,
                source: "/iframe-api/:version*",
                destination: "/api/iframe-api/:version*"
            }, {
                has: c,
                source: "/user/:userid/:type/:id*",
                destination: "/:type/:id*"
            }],
            beforeFiles: [{
                has: [{
                    type: o,
                    key: "uri",
                    value: "spotify:user:(?<userid>.*):(?<type>.*):(?<id>.*)"
                }],
                source: d,
                destination: u
            }, {
                has: [{
                    type: o,
                    key: "uri",
                    value: "spotify:(?<type>.*):(?<id>.*)"
                }],
                source: d,
                destination: u
            }, {
                has: [{
                    type: o,
                    key: "uri",
                    value: "(?<protocol>.*)://(?<domain>.*)/(?<type>.*)/(?<id>.*)"
                }],
                source: d,
                destination: u
            }],
            fallback: []
        },
        "/": ["static/chunks/pages/index-50573ab09b45dae9.js"],
        "/_error": ["static/chunks/pages/_error-2830b004ff100455.js"],
        "/album/[id]": [s, e, i, a, t, n, p, "static/chunks/pages/album/[id]-a09c8d8235c58377.js"],
        "/artist/[id]": [s, e, i, a, t, n, p, "static/chunks/pages/artist/[id]-5ef4d72b808f275b.js"],
        "/episode/[id]": [s, e, i, a, t, h, b, "static/chunks/pages/episode/[id]-58118d806286722f.js"],
        "/episode/[id]/video": [s, e, i, f, a, t, k, l, "static/chunks/pages/episode/[id]/video-911aa0fdfe7ef3f3.js"],
        "/playlist/[id]": [s, e, i, a, t, n, p, "static/chunks/pages/playlist/[id]-bb3fc0787266a378.js"],
        "/show/[id]": [s, e, i, a, t, h, b, "static/chunks/pages/show/[id]-d65e7769955859d2.js"],
        "/show/[id]/video": [s, e, i, f, a, t, k, l, "static/chunks/pages/show/[id]/video-17ae7b5dbb57a593.js"],
        "/track/[id]": [s, e, i, a, t, "static/css/fc491b3d4572532f.css", "static/chunks/pages/track/[id]-d45becf5b19e212f.js"],
        sortedPages: ["/", "/_app", "/_error", "/album/[id]", "/artist/[id]", "/episode/[id]", "/episode/[id]/video", "/playlist/[id]", "/show/[id]", "/show/[id]/video", "/track/[id]"]
    }
}("static/chunks/fec483df-87a6891f9916661b.js", "static/chunks/370d8c6a-ba7b9fa33b972102.js", "static/chunks/2049-d86aae427e069478.js", "static/css/9770fb915e213b81.css", "static/chunks/347-d580b9ac9657c45c.js", void 0, "/:path*", "query", "uri", "/:type/:id", "static/chunks/3666-e5aee60064d2ba28.js", "static/css/afedd1d1576c2de0.css", "static/css/c6975c1d3bf62553.css", "static/chunks/7854-ba21ef06048377c8.js", "static/chunks/7644-4270403cddb74ab9.js", "static/chunks/4761-33ae6acfbd66f793.js", "static/css/869cde00e4678fc1.css"),
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
