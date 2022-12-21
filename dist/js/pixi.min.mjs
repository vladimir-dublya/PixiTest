var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _b, _g, _j, _k, _m, _q, _v;
var eh = Object.defineProperty, ih = Object.defineProperties;
var sh = Object.getOwnPropertyDescriptors;
var bi = Object.getOwnPropertySymbols;
var xn = Object.prototype.hasOwnProperty, vn = Object.prototype.propertyIsEnumerable;
var gn = function (i, t, e) { return t in i ? eh(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e; }, Xt = function (i, t) { for (var e in t || (t = {}))
    xn.call(t, e) && gn(i, e, t[e]); if (bi)
    for (var _b = 0, _g = bi(t); _b < _g.length; _b++) {
        var e = _g[_b];
        vn.call(t, e) && gn(i, e, t[e]);
    } return i; }, Ts = function (i, t) { return ih(i, sh(t)); };
var Es = function (i, t) { var e = {}; for (var s in i)
    xn.call(i, s) && t.indexOf(s) < 0 && (e[s] = i[s]); if (i != null && bi)
    for (var _b = 0, _g = bi(i); _b < _g.length; _b++) {
        var s = _g[_b];
        t.indexOf(s) < 0 && vn.call(i, s) && (e[s] = i[s]);
    } return e; }; /*!
 * pixi.js - v7.0.5
 * Compiled Mon, 12 Dec 2022 15:56:40 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
var re = (function (i) { return (i[i.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", i[i.WEBGL = 1] = "WEBGL", i[i.WEBGL2 = 2] = "WEBGL2", i); })(re || {}), yn = (function (i) { return (i[i.UNKNOWN = 0] = "UNKNOWN", i[i.WEBGL = 1] = "WEBGL", i[i.CANVAS = 2] = "CANVAS", i); })(yn || {}), Ti = (function (i) { return (i[i.COLOR = 16384] = "COLOR", i[i.DEPTH = 256] = "DEPTH", i[i.STENCIL = 1024] = "STENCIL", i); })(Ti || {}), k = (function (i) { return (i[i.NORMAL = 0] = "NORMAL", i[i.ADD = 1] = "ADD", i[i.MULTIPLY = 2] = "MULTIPLY", i[i.SCREEN = 3] = "SCREEN", i[i.OVERLAY = 4] = "OVERLAY", i[i.DARKEN = 5] = "DARKEN", i[i.LIGHTEN = 6] = "LIGHTEN", i[i.COLOR_DODGE = 7] = "COLOR_DODGE", i[i.COLOR_BURN = 8] = "COLOR_BURN", i[i.HARD_LIGHT = 9] = "HARD_LIGHT", i[i.SOFT_LIGHT = 10] = "SOFT_LIGHT", i[i.DIFFERENCE = 11] = "DIFFERENCE", i[i.EXCLUSION = 12] = "EXCLUSION", i[i.HUE = 13] = "HUE", i[i.SATURATION = 14] = "SATURATION", i[i.COLOR = 15] = "COLOR", i[i.LUMINOSITY = 16] = "LUMINOSITY", i[i.NORMAL_NPM = 17] = "NORMAL_NPM", i[i.ADD_NPM = 18] = "ADD_NPM", i[i.SCREEN_NPM = 19] = "SCREEN_NPM", i[i.NONE = 20] = "NONE", i[i.SRC_OVER = 0] = "SRC_OVER", i[i.SRC_IN = 21] = "SRC_IN", i[i.SRC_OUT = 22] = "SRC_OUT", i[i.SRC_ATOP = 23] = "SRC_ATOP", i[i.DST_OVER = 24] = "DST_OVER", i[i.DST_IN = 25] = "DST_IN", i[i.DST_OUT = 26] = "DST_OUT", i[i.DST_ATOP = 27] = "DST_ATOP", i[i.ERASE = 26] = "ERASE", i[i.SUBTRACT = 28] = "SUBTRACT", i[i.XOR = 29] = "XOR", i); })(k || {}), Pt = (function (i) { return (i[i.POINTS = 0] = "POINTS", i[i.LINES = 1] = "LINES", i[i.LINE_LOOP = 2] = "LINE_LOOP", i[i.LINE_STRIP = 3] = "LINE_STRIP", i[i.TRIANGLES = 4] = "TRIANGLES", i[i.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", i[i.TRIANGLE_FAN = 6] = "TRIANGLE_FAN", i); })(Pt || {}), C = (function (i) { return (i[i.RGBA = 6408] = "RGBA", i[i.RGB = 6407] = "RGB", i[i.RG = 33319] = "RG", i[i.RED = 6403] = "RED", i[i.RGBA_INTEGER = 36249] = "RGBA_INTEGER", i[i.RGB_INTEGER = 36248] = "RGB_INTEGER", i[i.RG_INTEGER = 33320] = "RG_INTEGER", i[i.RED_INTEGER = 36244] = "RED_INTEGER", i[i.ALPHA = 6406] = "ALPHA", i[i.LUMINANCE = 6409] = "LUMINANCE", i[i.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", i[i.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", i[i.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL", i); })(C || {}), ce = (function (i) { return (i[i.TEXTURE_2D = 3553] = "TEXTURE_2D", i[i.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", i[i.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", i[i.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", i[i.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", i[i.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", i[i.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", i[i.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", i[i.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z", i); })(ce || {}), O = (function (i) { return (i[i.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", i[i.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", i[i.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", i[i.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", i[i.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", i[i.UNSIGNED_INT = 5125] = "UNSIGNED_INT", i[i.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", i[i.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", i[i.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", i[i.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", i[i.BYTE = 5120] = "BYTE", i[i.SHORT = 5122] = "SHORT", i[i.INT = 5124] = "INT", i[i.FLOAT = 5126] = "FLOAT", i[i.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", i[i.HALF_FLOAT = 36193] = "HALF_FLOAT", i); })(O || {}), Ei = (function (i) { return (i[i.FLOAT = 0] = "FLOAT", i[i.INT = 1] = "INT", i[i.UINT = 2] = "UINT", i); })(Ei || {}), Vt = (function (i) { return (i[i.NEAREST = 0] = "NEAREST", i[i.LINEAR = 1] = "LINEAR", i); })(Vt || {}), zt = (function (i) { return (i[i.CLAMP = 33071] = "CLAMP", i[i.REPEAT = 10497] = "REPEAT", i[i.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT", i); })(zt || {}), Mt = (function (i) { return (i[i.OFF = 0] = "OFF", i[i.POW2 = 1] = "POW2", i[i.ON = 2] = "ON", i[i.ON_MANUAL = 3] = "ON_MANUAL", i); })(Mt || {}), At = (function (i) { return (i[i.NPM = 0] = "NPM", i[i.UNPACK = 1] = "UNPACK", i[i.PMA = 2] = "PMA", i[i.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", i[i.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", i[i.PREMULTIPLIED_ALPHA = 2] = "PREMULTIPLIED_ALPHA", i); })(At || {}), Bt = (function (i) { return (i[i.NO = 0] = "NO", i[i.YES = 1] = "YES", i[i.AUTO = 2] = "AUTO", i[i.BLEND = 0] = "BLEND", i[i.CLEAR = 1] = "CLEAR", i[i.BLIT = 2] = "BLIT", i); })(Bt || {}), wi = (function (i) { return (i[i.AUTO = 0] = "AUTO", i[i.MANUAL = 1] = "MANUAL", i); })(wi || {}), bt = (function (i) { return (i.LOW = "lowp", i.MEDIUM = "mediump", i.HIGH = "highp", i); })(bt || {}), ht = (function (i) { return (i[i.NONE = 0] = "NONE", i[i.SCISSOR = 1] = "SCISSOR", i[i.STENCIL = 2] = "STENCIL", i[i.SPRITE = 3] = "SPRITE", i[i.COLOR = 4] = "COLOR", i); })(ht || {}), bn = (function (i) { return (i[i.RED = 1] = "RED", i[i.GREEN = 2] = "GREEN", i[i.BLUE = 4] = "BLUE", i[i.ALPHA = 8] = "ALPHA", i); })(bn || {}), nt = (function (i) { return (i[i.NONE = 0] = "NONE", i[i.LOW = 2] = "LOW", i[i.MEDIUM = 4] = "MEDIUM", i[i.HIGH = 8] = "HIGH", i); })(nt || {}), Dt = (function (i) { return (i[i.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", i[i.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", i[i.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER", i); })(Dt || {});
var Tn = { createCanvas: function (i, t) { var e = document.createElement("canvas"); return e.width = i, e.height = t, e; }, getWebGLRenderingContext: function () { return WebGLRenderingContext; }, getNavigator: function () { return navigator; }, getBaseUrl: function () { var i; return (i = document.baseURI) != null ? i : window.location.href; }, getFontFaceSet: function () { return document.fonts; }, fetch: function (i, t) { return fetch(i, t); }, parseXML: function (i) { return new DOMParser().parseFromString(i, "text/xml"); } };
var ws = /iPhone/i, En = /iPod/i, wn = /iPad/i, An = /\biOS-universal(?:.+)Mac\b/i, As = /\bAndroid(?:.+)Mobile\b/i, Sn = /Android/i, Re = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i, Ai = /Silk/i, qt = /Windows Phone/i, Rn = /\bWindows(?:.+)ARM\b/i, Cn = /BlackBerry/i, In = /BB10/i, Pn = /Opera Mini/i, Mn = /\b(CriOS|Chrome)(?:.+)Mobile/i, Bn = /Mobile(?:.+)Firefox\b/i, Dn = function (i) { return typeof i != "undefined" && i.platform === "MacIntel" && typeof i.maxTouchPoints == "number" && i.maxTouchPoints > 1 && typeof MSStream == "undefined"; };
function rh(i) { return function (t) { return t.test(i); }; }
function nh(i) { var t = { userAgent: "", platform: "", maxTouchPoints: 0 }; !i && typeof navigator != "undefined" ? t = { userAgent: navigator.userAgent, platform: navigator.platform, maxTouchPoints: navigator.maxTouchPoints || 0 } : typeof i == "string" ? t.userAgent = i : i && i.userAgent && (t = { userAgent: i.userAgent, platform: i.platform, maxTouchPoints: i.maxTouchPoints || 0 }); var e = t.userAgent, s = e.split("[FBAN"); typeof s[1] != "undefined" && (e = s[0]), s = e.split("Twitter"), typeof s[1] != "undefined" && (e = s[0]); var r = rh(e), n = { apple: { phone: r(ws) && !r(qt), ipod: r(En), tablet: !r(ws) && (r(wn) || Dn(t)) && !r(qt), universal: r(An), device: (r(ws) || r(En) || r(wn) || r(An) || Dn(t)) && !r(qt) }, amazon: { phone: r(Re), tablet: !r(Re) && r(Ai), device: r(Re) || r(Ai) }, android: { phone: !r(qt) && r(Re) || !r(qt) && r(As), tablet: !r(qt) && !r(Re) && !r(As) && (r(Ai) || r(Sn)), device: !r(qt) && (r(Re) || r(Ai) || r(As) || r(Sn)) || r(/\bokhttp\b/i) }, windows: { phone: r(qt), tablet: r(Rn), device: r(qt) || r(Rn) }, other: { blackberry: r(Cn), blackberry10: r(In), opera: r(Pn), firefox: r(Bn), chrome: r(Mn), device: r(Cn) || r(In) || r(Pn) || r(Bn) || r(Mn) }, any: !1, phone: !1, tablet: !1 }; return n.any = n.apple.device || n.android.device || n.windows.device || n.other.device, n.phone = n.apple.phone || n.android.phone || n.windows.phone, n.tablet = n.apple.tablet || n.android.tablet || n.windows.tablet, n; }
var Nt = nh(globalThis.navigator);
function oh() { return !Nt.apple.device; }
function ah(i) { var t = !0; if (Nt.tablet || Nt.phone) {
    if (Nt.apple.device) {
        var e = navigator.userAgent.match(/OS (\d+)_(\d+)?/);
        e && parseInt(e[1], 10) < 11 && (t = !1);
    }
    if (Nt.android.device) {
        var e = navigator.userAgent.match(/Android\s([0-9.]*)/);
        e && parseInt(e[1], 10) < 7 && (t = !1);
    }
} return t ? i : 4; }
var w = { ADAPTER: Tn, MIPMAP_TEXTURES: Mt.POW2, ANISOTROPIC_LEVEL: 0, RESOLUTION: 1, FILTER_RESOLUTION: 1, FILTER_MULTISAMPLE: nt.NONE, SPRITE_MAX_TEXTURES: ah(32), SPRITE_BATCH_SIZE: 4096, RENDER_OPTIONS: { view: null, antialias: !1, autoDensity: !1, backgroundColor: 0, backgroundAlpha: 1, premultipliedAlpha: !0, clearBeforeRender: !0, preserveDrawingBuffer: !1, width: 800, height: 600, legacy: !1, hello: !1 }, GC_MODE: wi.AUTO, GC_MAX_IDLE: 60 * 60, GC_MAX_CHECK_COUNT: 60 * 10, WRAP_MODE: zt.CLAMP, SCALE_MODE: Vt.LINEAR, PRECISION_VERTEX: bt.HIGH, PRECISION_FRAGMENT: Nt.apple.device ? bt.HIGH : bt.MEDIUM, CAN_UPLOAD_SAME_BUFFER: oh(), CREATE_IMAGE_BITMAP: !1, ROUND_PIXELS: !1 };
w.PREFER_ENV = re.WEBGL2, w.STRICT_TEXTURE_CACHE = !1;
var P = (function (i) { return (i.Renderer = "renderer", i.Application = "application", i.RendererSystem = "renderer-webgl-system", i.RendererPlugin = "renderer-webgl-plugin", i.CanvasRendererSystem = "renderer-canvas-system", i.CanvasRendererPlugin = "renderer-canvas-plugin", i.Asset = "asset", i.LoadParser = "load-parser", i.ResolveParser = "resolve-parser", i.CacheParser = "cache-parser", i.DetectionParser = "detection-parser", i); })(P || {});
var Ss = function (i) { if (typeof i == "function" || typeof i == "object" && i.extension) {
    if (!i.extension)
        throw new Error("Extension class must have an extension object");
    var t = typeof i.extension != "object" ? { type: i.extension } : i.extension;
    i = Ts(Xt({}, t), { ref: i });
} if (typeof i == "object")
    i = Xt({}, i);
else
    throw new Error("Invalid extension type"); return typeof i.type == "string" && (i.type = [i.type]), i; }, Nn = function (i, t) { var e; return (e = Ss(i).priority) != null ? e : t; }, U = { _addHandlers: {}, _removeHandlers: {}, _queue: {}, remove: function () {
        var _this = this;
        var i = [];
        for (var _b = 0; _b < arguments.length; _b++) {
            i[_b] = arguments[_b];
        }
        return i.map(Ss).forEach(function (t) { t.type.forEach(function (e) { var s, r; return (r = (s = _this._removeHandlers)[e]) == null ? void 0 : r.call(s, t); }); }), this;
    }, add: function () {
        var _this = this;
        var i = [];
        for (var _b = 0; _b < arguments.length; _b++) {
            i[_b] = arguments[_b];
        }
        return i.map(Ss).forEach(function (t) { t.type.forEach(function (e) { var s = _this._addHandlers, r = _this._queue; s[e] ? s[e](t) : (r[e] = r[e] || [], r[e].push(t)); }); }), this;
    }, handle: function (i, t, e) { var s = this._addHandlers, r = this._removeHandlers; if (s[i] || r[i])
        throw new Error("Extension type ".concat(i, " already has a handler")); s[i] = t, r[i] = e; var n = this._queue; return n[i] && (n[i].forEach(function (o) { return t(o); }), delete n[i]), this; }, handleByMap: function (i, t) { return this.handle(i, function (e) { t[e.name] = e.ref; }, function (e) { delete t[e.name]; }); }, handleByList: function (i, t, e) {
        if (e === void 0) { e = -1; }
        return this.handle(i, function (s) { t.includes(s.ref) || (t.push(s.ref), t.sort(function (r, n) { return Nn(n, e) - Nn(r, e); })); }, function (s) { var r = t.indexOf(s.ref); r !== -1 && t.splice(r, 1); });
    } }, Xe = Math.PI * 2, Fn = 180 / Math.PI, Ln = Math.PI / 180;
var dt = (function (i) { return (i[i.POLY = 0] = "POLY", i[i.RECT = 1] = "RECT", i[i.CIRC = 2] = "CIRC", i[i.ELIP = 3] = "ELIP", i[i.RREC = 4] = "RREC", i); })(dt || {});
var j = /** @class */ (function () {
    function j(t, e) {
        if (t === void 0) { t = 0; }
        if (e === void 0) { e = 0; }
        this.x = 0, this.y = 0, this.x = t, this.y = e;
    }
    j.prototype.clone = function () { return new j(this.x, this.y); };
    j.prototype.copyFrom = function (t) { return this.set(t.x, t.y), this; };
    j.prototype.copyTo = function (t) { return t.set(this.x, this.y), t; };
    j.prototype.equals = function (t) { return t.x === this.x && t.y === this.y; };
    j.prototype.set = function (t, e) {
        if (t === void 0) { t = 0; }
        if (e === void 0) { e = t; }
        return this.x = t, this.y = e, this;
    };
    j.prototype.toString = function () { return "[@pixi/math:Point x=".concat(this.x, " y=").concat(this.y, "]"); };
    return j;
}());
var Si = [new j, new j, new j, new j];
var V = /** @class */ (function () {
    function V(t, e, s, r) {
        if (t === void 0) { t = 0; }
        if (e === void 0) { e = 0; }
        if (s === void 0) { s = 0; }
        if (r === void 0) { r = 0; }
        this.x = Number(t), this.y = Number(e), this.width = Number(s), this.height = Number(r), this.type = dt.RECT;
    }
    Object.defineProperty(V.prototype, "left", {
        get: function () { return this.x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(V.prototype, "right", {
        get: function () { return this.x + this.width; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(V.prototype, "top", {
        get: function () { return this.y; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(V.prototype, "bottom", {
        get: function () { return this.y + this.height; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(V, "EMPTY", {
        get: function () { return new V(0, 0, 0, 0); },
        enumerable: false,
        configurable: true
    });
    V.prototype.clone = function () { return new V(this.x, this.y, this.width, this.height); };
    V.prototype.copyFrom = function (t) { return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this; };
    V.prototype.copyTo = function (t) { return t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t; };
    V.prototype.contains = function (t, e) { return this.width <= 0 || this.height <= 0 ? !1 : t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height; };
    V.prototype.intersects = function (t, e) { if (!e) {
        var A = this.x < t.x ? t.x : this.x;
        if ((this.right > t.right ? t.right : this.right) <= A)
            return !1;
        var G = this.y < t.y ? t.y : this.y;
        return (this.bottom > t.bottom ? t.bottom : this.bottom) > G;
    } var s = this.left, r = this.right, n = this.top, o = this.bottom; if (r <= s || o <= n)
        return !1; var a = Si[0].set(t.left, t.top), h = Si[1].set(t.left, t.bottom), l = Si[2].set(t.right, t.top), c = Si[3].set(t.right, t.bottom); if (l.x <= a.x || h.y <= a.y)
        return !1; var u = Math.sign(e.a * e.d - e.b * e.c); if (u === 0 || (e.apply(a, a), e.apply(h, h), e.apply(l, l), e.apply(c, c), Math.max(a.x, h.x, l.x, c.x) <= s || Math.min(a.x, h.x, l.x, c.x) >= r || Math.max(a.y, h.y, l.y, c.y) <= n || Math.min(a.y, h.y, l.y, c.y) >= o))
        return !1; var d = u * (h.y - a.y), f = u * (a.x - h.x), p = d * s + f * n, m = d * r + f * n, _ = d * s + f * o, x = d * r + f * o; if (Math.max(p, m, _, x) <= d * a.x + f * a.y || Math.min(p, m, _, x) >= d * c.x + f * c.y)
        return !1; var y = u * (a.y - l.y), g = u * (l.x - a.x), v = y * s + g * n, T = y * r + g * n, M = y * s + g * o, R = y * r + g * o; return !(Math.max(v, T, M, R) <= y * a.x + g * a.y || Math.min(v, T, M, R) >= y * c.x + g * c.y); };
    V.prototype.pad = function (t, e) {
        if (t === void 0) { t = 0; }
        if (e === void 0) { e = t; }
        return this.x -= t, this.y -= e, this.width += t * 2, this.height += e * 2, this;
    };
    V.prototype.fit = function (t) { var e = Math.max(this.x, t.x), s = Math.min(this.x + this.width, t.x + t.width), r = Math.max(this.y, t.y), n = Math.min(this.y + this.height, t.y + t.height); return this.x = e, this.width = Math.max(s - e, 0), this.y = r, this.height = Math.max(n - r, 0), this; };
    V.prototype.ceil = function (t, e) {
        if (t === void 0) { t = 1; }
        if (e === void 0) { e = .001; }
        var s = Math.ceil((this.x + this.width - e) * t) / t, r = Math.ceil((this.y + this.height - e) * t) / t;
        return this.x = Math.floor((this.x + e) * t) / t, this.y = Math.floor((this.y + e) * t) / t, this.width = s - this.x, this.height = r - this.y, this;
    };
    V.prototype.enlarge = function (t) { var e = Math.min(this.x, t.x), s = Math.max(this.x + this.width, t.x + t.width), r = Math.min(this.y, t.y), n = Math.max(this.y + this.height, t.y + t.height); return this.x = e, this.width = s - e, this.y = r, this.height = n - r, this; };
    V.prototype.toString = function () { return "[@pixi/math:Rectangle x=".concat(this.x, " y=").concat(this.y, " width=").concat(this.width, " height=").concat(this.height, "]"); };
    return V;
}());
var ms = /** @class */ (function () {
    function ms(t, e, s) {
        if (t === void 0) { t = 0; }
        if (e === void 0) { e = 0; }
        if (s === void 0) { s = 0; }
        this.x = t, this.y = e, this.radius = s, this.type = dt.CIRC;
    }
    ms.prototype.clone = function () { return new ms(this.x, this.y, this.radius); };
    ms.prototype.contains = function (t, e) { if (this.radius <= 0)
        return !1; var s = this.radius * this.radius; var r = this.x - t, n = this.y - e; return r *= r, n *= n, r + n <= s; };
    ms.prototype.getBounds = function () { return new V(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2); };
    ms.prototype.toString = function () { return "[@pixi/math:Circle x=".concat(this.x, " y=").concat(this.y, " radius=").concat(this.radius, "]"); };
    return ms;
}());
var _s = /** @class */ (function () {
    function _s(t, e, s, r) {
        if (t === void 0) { t = 0; }
        if (e === void 0) { e = 0; }
        if (s === void 0) { s = 0; }
        if (r === void 0) { r = 0; }
        this.x = t, this.y = e, this.width = s, this.height = r, this.type = dt.ELIP;
    }
    _s.prototype.clone = function () { return new _s(this.x, this.y, this.width, this.height); };
    _s.prototype.contains = function (t, e) { if (this.width <= 0 || this.height <= 0)
        return !1; var s = (t - this.x) / this.width, r = (e - this.y) / this.height; return s *= s, r *= r, s + r <= 1; };
    _s.prototype.getBounds = function () { return new V(this.x - this.width, this.y - this.height, this.width, this.height); };
    _s.prototype.toString = function () { return "[@pixi/math:Ellipse x=".concat(this.x, " y=").concat(this.y, " width=").concat(this.width, " height=").concat(this.height, "]"); };
    return _s;
}());
var Ae = /** @class */ (function () {
    function Ae() {
        var t = [];
        for (var _b = 0; _b < arguments.length; _b++) {
            t[_b] = arguments[_b];
        }
        var e = Array.isArray(t[0]) ? t[0] : t;
        if (typeof e[0] != "number") {
            var s = [];
            for (var r = 0, n = e.length; r < n; r++)
                s.push(e[r].x, e[r].y);
            e = s;
        }
        this.points = e, this.type = dt.POLY, this.closeStroke = !0;
    }
    Ae.prototype.clone = function () { var t = this.points.slice(), e = new Ae(t); return e.closeStroke = this.closeStroke, e; };
    Ae.prototype.contains = function (t, e) { var s = !1; var r = this.points.length / 2; for (var n = 0, o = r - 1; n < r; o = n++) {
        var a = this.points[n * 2], h = this.points[n * 2 + 1], l = this.points[o * 2], c = this.points[o * 2 + 1];
        h > e != c > e && t < (l - a) * ((e - h) / (c - h)) + a && (s = !s);
    } return s; };
    Ae.prototype.toString = function () { return "[@pixi/math:PolygoncloseStroke=".concat(this.closeStroke, "points=").concat(this.points.reduce(function (t, e) { return "".concat(t, ", ").concat(e); }, ""), "]"); };
    return Ae;
}());
var gs = /** @class */ (function () {
    function gs(t, e, s, r, n) {
        if (t === void 0) { t = 0; }
        if (e === void 0) { e = 0; }
        if (s === void 0) { s = 0; }
        if (r === void 0) { r = 0; }
        if (n === void 0) { n = 20; }
        this.x = t, this.y = e, this.width = s, this.height = r, this.radius = n, this.type = dt.RREC;
    }
    gs.prototype.clone = function () { return new gs(this.x, this.y, this.width, this.height, this.radius); };
    gs.prototype.contains = function (t, e) { if (this.width <= 0 || this.height <= 0)
        return !1; if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
        var s = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
        if (e >= this.y + s && e <= this.y + this.height - s || t >= this.x + s && t <= this.x + this.width - s)
            return !0;
        var r = t - (this.x + s), n = e - (this.y + s);
        var o = s * s;
        if (r * r + n * n <= o || (r = t - (this.x + this.width - s), r * r + n * n <= o) || (n = e - (this.y + this.height - s), r * r + n * n <= o) || (r = t - (this.x + s), r * r + n * n <= o))
            return !0;
    } return !1; };
    gs.prototype.toString = function () { return "[@pixi/math:RoundedRectangle x=".concat(this.x, " y=").concat(this.y, "width=").concat(this.width, " height=").concat(this.height, " radius=").concat(this.radius, "]"); };
    return gs;
}());
var te = /** @class */ (function () {
    function te(t, e, s, r) {
        if (s === void 0) { s = 0; }
        if (r === void 0) { r = 0; }
        this._x = s, this._y = r, this.cb = t, this.scope = e;
    }
    te.prototype.clone = function (t, e) {
        if (t === void 0) { t = this.cb; }
        if (e === void 0) { e = this.scope; }
        return new te(t, e, this._x, this._y);
    };
    te.prototype.set = function (t, e) {
        if (t === void 0) { t = 0; }
        if (e === void 0) { e = t; }
        return (this._x !== t || this._y !== e) && (this._x = t, this._y = e, this.cb.call(this.scope)), this;
    };
    te.prototype.copyFrom = function (t) { return (this._x !== t.x || this._y !== t.y) && (this._x = t.x, this._y = t.y, this.cb.call(this.scope)), this; };
    te.prototype.copyTo = function (t) { return t.set(this._x, this._y), t; };
    te.prototype.equals = function (t) { return t.x === this._x && t.y === this._y; };
    te.prototype.toString = function () { return "[@pixi/math:ObservablePoint x=".concat(0, " y=").concat(0, " scope=").concat(this.scope, "]"); };
    Object.defineProperty(te.prototype, "x", {
        get: function () { return this._x; },
        set: function (t) { this._x !== t && (this._x = t, this.cb.call(this.scope)); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(te.prototype, "y", {
        get: function () { return this._y; },
        set: function (t) { this._y !== t && (this._y = t, this.cb.call(this.scope)); },
        enumerable: false,
        configurable: true
    });
    return te;
}());
var Z = /** @class */ (function () {
    function Z(t, e, s, r, n, o) {
        if (t === void 0) { t = 1; }
        if (e === void 0) { e = 0; }
        if (s === void 0) { s = 0; }
        if (r === void 0) { r = 1; }
        if (n === void 0) { n = 0; }
        if (o === void 0) { o = 0; }
        this.array = null, this.a = t, this.b = e, this.c = s, this.d = r, this.tx = n, this.ty = o;
    }
    Z.prototype.fromArray = function (t) { this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]; };
    Z.prototype.set = function (t, e, s, r, n, o) { return this.a = t, this.b = e, this.c = s, this.d = r, this.tx = n, this.ty = o, this; };
    Z.prototype.toArray = function (t, e) { this.array || (this.array = new Float32Array(9)); var s = e || this.array; return t ? (s[0] = this.a, s[1] = this.b, s[2] = 0, s[3] = this.c, s[4] = this.d, s[5] = 0, s[6] = this.tx, s[7] = this.ty, s[8] = 1) : (s[0] = this.a, s[1] = this.c, s[2] = this.tx, s[3] = this.b, s[4] = this.d, s[5] = this.ty, s[6] = 0, s[7] = 0, s[8] = 1), s; };
    Z.prototype.apply = function (t, e) { e = e || new j; var s = t.x, r = t.y; return e.x = this.a * s + this.c * r + this.tx, e.y = this.b * s + this.d * r + this.ty, e; };
    Z.prototype.applyInverse = function (t, e) { e = e || new j; var s = 1 / (this.a * this.d + this.c * -this.b), r = t.x, n = t.y; return e.x = this.d * s * r + -this.c * s * n + (this.ty * this.c - this.tx * this.d) * s, e.y = this.a * s * n + -this.b * s * r + (-this.ty * this.a + this.tx * this.b) * s, e; };
    Z.prototype.translate = function (t, e) { return this.tx += t, this.ty += e, this; };
    Z.prototype.scale = function (t, e) { return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this; };
    Z.prototype.rotate = function (t) { var e = Math.cos(t), s = Math.sin(t), r = this.a, n = this.c, o = this.tx; return this.a = r * e - this.b * s, this.b = r * s + this.b * e, this.c = n * e - this.d * s, this.d = n * s + this.d * e, this.tx = o * e - this.ty * s, this.ty = o * s + this.ty * e, this; };
    Z.prototype.append = function (t) { var e = this.a, s = this.b, r = this.c, n = this.d; return this.a = t.a * e + t.b * r, this.b = t.a * s + t.b * n, this.c = t.c * e + t.d * r, this.d = t.c * s + t.d * n, this.tx = t.tx * e + t.ty * r + this.tx, this.ty = t.tx * s + t.ty * n + this.ty, this; };
    Z.prototype.setTransform = function (t, e, s, r, n, o, a, h, l) { return this.a = Math.cos(a + l) * n, this.b = Math.sin(a + l) * n, this.c = -Math.sin(a - h) * o, this.d = Math.cos(a - h) * o, this.tx = t - (s * this.a + r * this.c), this.ty = e - (s * this.b + r * this.d), this; };
    Z.prototype.prepend = function (t) { var e = this.tx; if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1) {
        var s = this.a, r = this.c;
        this.a = s * t.a + this.b * t.c, this.b = s * t.b + this.b * t.d, this.c = r * t.a + this.d * t.c, this.d = r * t.b + this.d * t.d;
    } return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this; };
    Z.prototype.decompose = function (t) { var e = this.a, s = this.b, r = this.c, n = this.d, o = t.pivot, a = -Math.atan2(-r, n), h = Math.atan2(s, e), l = Math.abs(a + h); return l < 1e-5 || Math.abs(Xe - l) < 1e-5 ? (t.rotation = h, t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = a, t.skew.y = h), t.scale.x = Math.sqrt(e * e + s * s), t.scale.y = Math.sqrt(r * r + n * n), t.position.x = this.tx + (o.x * e + o.y * r), t.position.y = this.ty + (o.x * s + o.y * n), t; };
    Z.prototype.invert = function () { var t = this.a, e = this.b, s = this.c, r = this.d, n = this.tx, o = t * r - e * s; return this.a = r / o, this.b = -e / o, this.c = -s / o, this.d = t / o, this.tx = (s * this.ty - r * n) / o, this.ty = -(t * this.ty - e * n) / o, this; };
    Z.prototype.identity = function () { return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this; };
    Z.prototype.clone = function () { var t = new Z; return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t; };
    Z.prototype.copyTo = function (t) { return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t; };
    Z.prototype.copyFrom = function (t) { return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this; };
    Z.prototype.toString = function () { return "[@pixi/math:Matrix a=".concat(this.a, " b=").concat(this.b, " c=").concat(this.c, " d=").concat(this.d, " tx=").concat(this.tx, " ty=").concat(this.ty, "]"); };
    Object.defineProperty(Z, "IDENTITY", {
        get: function () { return new Z; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Z, "TEMP_MATRIX", {
        get: function () { return new Z; },
        enumerable: false,
        configurable: true
    });
    return Z;
}());
var ue = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1], de = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1], fe = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1], pe = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1], Rs = [], Un = [], Ri = Math.sign;
function hh() { for (var i = 0; i < 16; i++) {
    var t = [];
    Rs.push(t);
    for (var e = 0; e < 16; e++) {
        var s = Ri(ue[i] * ue[e] + fe[i] * de[e]), r = Ri(de[i] * ue[e] + pe[i] * de[e]), n = Ri(ue[i] * fe[e] + fe[i] * pe[e]), o = Ri(de[i] * fe[e] + pe[i] * pe[e]);
        for (var a = 0; a < 16; a++)
            if (ue[a] === s && de[a] === r && fe[a] === n && pe[a] === o) {
                t.push(a);
                break;
            }
    }
} for (var i = 0; i < 16; i++) {
    var t = new Z;
    t.set(ue[i], de[i], fe[i], pe[i], 0, 0), Un.push(t);
} }
hh();
var tt = { E: 0, SE: 1, S: 2, SW: 3, W: 4, NW: 5, N: 6, NE: 7, MIRROR_VERTICAL: 8, MAIN_DIAGONAL: 10, MIRROR_HORIZONTAL: 12, REVERSE_DIAGONAL: 14, uX: function (i) { return ue[i]; }, uY: function (i) { return de[i]; }, vX: function (i) { return fe[i]; }, vY: function (i) { return pe[i]; }, inv: function (i) { return i & 8 ? i & 15 : -i & 7; }, add: function (i, t) { return Rs[i][t]; }, sub: function (i, t) { return Rs[i][tt.inv(t)]; }, rotate180: function (i) { return i ^ 4; }, isVertical: function (i) { return (i & 3) === 2; }, byDirection: function (i, t) { return Math.abs(i) * 2 <= Math.abs(t) ? t >= 0 ? tt.S : tt.N : Math.abs(t) * 2 <= Math.abs(i) ? i > 0 ? tt.E : tt.W : t > 0 ? i > 0 ? tt.SE : tt.SW : i > 0 ? tt.NE : tt.NW; }, matrixAppendRotationInv: function (i, t, e, s) {
        if (e === void 0) { e = 0; }
        if (s === void 0) { s = 0; }
        var r = Un[tt.inv(t)];
        r.tx = e, r.ty = s, i.append(r);
    } }, On = /** @class */ (function () {
    function On() {
        this.worldTransform = new Z, this.localTransform = new Z, this.position = new te(this.onChange, this, 0, 0), this.scale = new te(this.onChange, this, 1, 1), this.pivot = new te(this.onChange, this, 0, 0), this.skew = new te(this.updateSkew, this, 0, 0), this._rotation = 0, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._localID = 0, this._currentLocalID = 0, this._worldID = 0, this._parentID = 0;
    }
    On.prototype.onChange = function () { this._localID++; };
    On.prototype.updateSkew = function () { this._cx = Math.cos(this._rotation + this.skew.y), this._sx = Math.sin(this._rotation + this.skew.y), this._cy = -Math.sin(this._rotation - this.skew.x), this._sy = Math.cos(this._rotation - this.skew.x), this._localID++; };
    On.prototype.toString = function () { return "[@pixi/math:Transform position=(".concat(this.position.x, ", ").concat(this.position.y, ") rotation=").concat(this.rotation, " scale=(").concat(this.scale.x, ", ").concat(this.scale.y, ") skew=(").concat(this.skew.x, ", ").concat(this.skew.y, ") ]"); };
    On.prototype.updateLocalTransform = function () { var i = this.localTransform; this._localID !== this._currentLocalID && (i.a = this._cx * this.scale.x, i.b = this._sx * this.scale.x, i.c = this._cy * this.scale.y, i.d = this._sy * this.scale.y, i.tx = this.position.x - (this.pivot.x * i.a + this.pivot.y * i.c), i.ty = this.position.y - (this.pivot.x * i.b + this.pivot.y * i.d), this._currentLocalID = this._localID, this._parentID = -1); };
    On.prototype.updateTransform = function (i) { var t = this.localTransform; if (this._localID !== this._currentLocalID && (t.a = this._cx * this.scale.x, t.b = this._sx * this.scale.x, t.c = this._cy * this.scale.y, t.d = this._sy * this.scale.y, t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c), t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== i._worldID) {
        var e = i.worldTransform, s = this.worldTransform;
        s.a = t.a * e.a + t.b * e.c, s.b = t.a * e.b + t.b * e.d, s.c = t.c * e.a + t.d * e.c, s.d = t.c * e.b + t.d * e.d, s.tx = t.tx * e.a + t.ty * e.c + e.tx, s.ty = t.tx * e.b + t.ty * e.d + e.ty, this._parentID = i._worldID, this._worldID++;
    } };
    On.prototype.setFromMatrix = function (i) { i.decompose(this), this._localID++; };
    Object.defineProperty(On.prototype, "rotation", {
        get: function () { return this._rotation; },
        set: function (i) { this._rotation !== i && (this._rotation = i, this.updateSkew()); },
        enumerable: false,
        configurable: true
    });
    return On;
}());
var Ve = On;
Ve.IDENTITY = new On;
var Tt = /** @class */ (function () {
    function Tt(t) {
        this.items = [], this._name = t, this._aliasCount = 0;
    }
    Tt.prototype.emit = function (t, e, s, r, n, o, a, h) { if (arguments.length > 8)
        throw new Error("max arguments reached"); var _b = this, l = _b.name, c = _b.items; this._aliasCount++; for (var u = 0, d = c.length; u < d; u++)
        c[u][l](t, e, s, r, n, o, a, h); return c === this.items && this._aliasCount--, this; };
    Tt.prototype.ensureNonAliasedItems = function () { this._aliasCount > 0 && this.items.length > 1 && (this._aliasCount = 0, this.items = this.items.slice(0)); };
    Tt.prototype.add = function (t) { return t[this._name] && (this.ensureNonAliasedItems(), this.remove(t), this.items.push(t)), this; };
    Tt.prototype.remove = function (t) { var e = this.items.indexOf(t); return e !== -1 && (this.ensureNonAliasedItems(), this.items.splice(e, 1)), this; };
    Tt.prototype.contains = function (t) { return this.items.includes(t); };
    Tt.prototype.removeAll = function () { return this.ensureNonAliasedItems(), this.items.length = 0, this; };
    Tt.prototype.destroy = function () { this.removeAll(), this.items = null, this._name = null; };
    Object.defineProperty(Tt.prototype, "empty", {
        get: function () { return this.items.length === 0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tt.prototype, "name", {
        get: function () { return this._name; },
        enumerable: false,
        configurable: true
    });
    return Tt;
}());
Object.defineProperties(Tt.prototype, { dispatch: { value: Tt.prototype.emit }, run: { value: Tt.prototype.emit } }), w.TARGET_FPMS = .06;
var ne = (function (i) { return (i[i.HIGH = 25] = "HIGH", i[i.NORMAL = 0] = "NORMAL", i[i.LOW = -25] = "LOW", i[i.UTILITY = -50] = "UTILITY", i); })(ne || {});
var Cs = /** @class */ (function () {
    function Cs(t, e, s, r) {
        if (e === void 0) { e = null; }
        if (s === void 0) { s = 0; }
        if (r === void 0) { r = !1; }
        this.next = null, this.previous = null, this._destroyed = !1, this.fn = t, this.context = e, this.priority = s, this.once = r;
    }
    Cs.prototype.match = function (t, e) {
        if (e === void 0) { e = null; }
        return this.fn === t && this.context === e;
    };
    Cs.prototype.emit = function (t) { this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t)); var e = this.next; return this.once && this.destroy(!0), this._destroyed && (this.next = null), e; };
    Cs.prototype.connect = function (t) { this.previous = t, t.next && (t.next.previous = this), this.next = t.next, t.next = this; };
    Cs.prototype.destroy = function (t) {
        if (t === void 0) { t = !1; }
        this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
        var e = this.next;
        return this.next = t ? null : e, this.previous = null, e;
    };
    return Cs;
}());
var Q = /** @class */ (function () {
    function Q() {
        var _this = this;
        this.autoStart = !1, this.deltaTime = 1, this.lastTime = -1, this.speed = 1, this.started = !1, this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this._protected = !1, this._lastFrame = -1, this._head = new Cs(null, null, 1 / 0), this.deltaMS = 1 / w.TARGET_FPMS, this.elapsedMS = 1 / w.TARGET_FPMS, this._tick = function (t) { _this._requestId = null, _this.started && (_this.update(t), _this.started && _this._requestId === null && _this._head.next && (_this._requestId = requestAnimationFrame(_this._tick))); };
    }
    Q.prototype._requestIfNeeded = function () { this._requestId === null && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick)); };
    Q.prototype._cancelIfNeeded = function () { this._requestId !== null && (cancelAnimationFrame(this._requestId), this._requestId = null); };
    Q.prototype._startIfPossible = function () { this.started ? this._requestIfNeeded() : this.autoStart && this.start(); };
    Q.prototype.add = function (t, e, s) {
        if (s === void 0) { s = ne.NORMAL; }
        return this._addListener(new Cs(t, e, s));
    };
    Q.prototype.addOnce = function (t, e, s) {
        if (s === void 0) { s = ne.NORMAL; }
        return this._addListener(new Cs(t, e, s, !0));
    };
    Q.prototype._addListener = function (t) { var e = this._head.next, s = this._head; if (!e)
        t.connect(s);
    else {
        for (; e;) {
            if (t.priority > e.priority) {
                t.connect(s);
                break;
            }
            s = e, e = e.next;
        }
        t.previous || t.connect(s);
    } return this._startIfPossible(), this; };
    Q.prototype.remove = function (t, e) { var s = this._head.next; for (; s;)
        s.match(t, e) ? s = s.destroy() : s = s.next; return this._head.next || this._cancelIfNeeded(), this; };
    Object.defineProperty(Q.prototype, "count", {
        get: function () { if (!this._head)
            return 0; var t = 0, e = this._head; for (; e = e.next;)
            t++; return t; },
        enumerable: false,
        configurable: true
    });
    Q.prototype.start = function () { this.started || (this.started = !0, this._requestIfNeeded()); };
    Q.prototype.stop = function () { this.started && (this.started = !1, this._cancelIfNeeded()); };
    Q.prototype.destroy = function () { if (!this._protected) {
        this.stop();
        var t = this._head.next;
        for (; t;)
            t = t.destroy(!0);
        this._head.destroy(), this._head = null;
    } };
    Q.prototype.update = function (t) {
        if (t === void 0) { t = performance.now(); }
        var e;
        if (t > this.lastTime) {
            if (e = this.elapsedMS = t - this.lastTime, e > this._maxElapsedMS && (e = this._maxElapsedMS), e *= this.speed, this._minElapsedMS) {
                var n = t - this._lastFrame | 0;
                if (n < this._minElapsedMS)
                    return;
                this._lastFrame = t - n % this._minElapsedMS;
            }
            this.deltaMS = e, this.deltaTime = this.deltaMS * w.TARGET_FPMS;
            var s = this._head;
            var r = s.next;
            for (; r;)
                r = r.emit(this.deltaTime);
            s.next || this._cancelIfNeeded();
        }
        else
            this.deltaTime = this.deltaMS = this.elapsedMS = 0;
        this.lastTime = t;
    };
    Object.defineProperty(Q.prototype, "FPS", {
        get: function () { return 1e3 / this.elapsedMS; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Q.prototype, "minFPS", {
        get: function () { return 1e3 / this._maxElapsedMS; },
        set: function (t) { var e = Math.min(this.maxFPS, t), s = Math.min(Math.max(0, e) / 1e3, w.TARGET_FPMS); this._maxElapsedMS = 1 / s; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Q.prototype, "maxFPS", {
        get: function () { return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0; },
        set: function (t) { if (t === 0)
            this._minElapsedMS = 0;
        else {
            var e = Math.max(this.minFPS, t);
            this._minElapsedMS = 1 / (e / 1e3);
        } },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Q, "shared", {
        get: function () { if (!Q._shared) {
            var t = Q._shared = new Q;
            t.autoStart = !0, t._protected = !0;
        } return Q._shared; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Q, "system", {
        get: function () { if (!Q._system) {
            var t = Q._system = new Q;
            t.autoStart = !0, t._protected = !0;
        } return Q._system; },
        enumerable: false,
        configurable: true
    });
    return Q;
}());
var Is = /** @class */ (function () {
    function Is() {
    }
    Is.init = function (t) {
        var _this = this;
        t = Object.assign({ autoStart: !0, sharedTicker: !1 }, t), Object.defineProperty(this, "ticker", { set: function (e) { this._ticker && this._ticker.remove(this.render, this), this._ticker = e, e && e.add(this.render, this, ne.LOW); }, get: function () { return this._ticker; } }), this.stop = function () { _this._ticker.stop(); }, this.start = function () { _this._ticker.start(); }, this._ticker = null, this.ticker = t.sharedTicker ? Q.shared : new Q, t.autoStart && this.start();
    };
    Is.destroy = function () { if (this._ticker) {
        var t = this._ticker;
        this.ticker = null, t.destroy();
    } };
    return Is;
}());
Is.extension = P.Application, U.add(Is);
var Ps = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function Lp(i) { return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i; }
function Ms(i, t, e) { return e = { path: t, exports: {}, require: function (s, r) { return lh(s, r == null ? e.path : r); } }, i(e, e.exports), e.exports; }
function Up(i) { return i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i; }
function Op(i) { return i && Object.prototype.hasOwnProperty.call(i, "default") && Object.keys(i).length === 1 ? i.default : i; }
function kp(i) { if (i.__esModule)
    return i; var t = Object.defineProperty({}, "__esModule", { value: !0 }); return Object.keys(i).forEach(function (e) { var s = Object.getOwnPropertyDescriptor(i, e); Object.defineProperty(t, e, s.get ? s : { enumerable: !0, get: function () { return i[e]; } }); }), t; }
function lh() { throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs"); }
var Ce = Ms(function (i) {
    "use strict";
    var t = Object.prototype.hasOwnProperty, e = "~";
    function s() { }
    Object.create && (s.prototype = Object.create(null), new s().__proto__ || (e = !1));
    function r(h, l, c) { this.fn = h, this.context = l, this.once = c || !1; }
    function n(h, l, c, u, d) { if (typeof c != "function")
        throw new TypeError("The listener must be a function"); var f = new r(c, u || h, d), p = e ? e + l : l; return h._events[p] ? h._events[p].fn ? h._events[p] = [h._events[p], f] : h._events[p].push(f) : (h._events[p] = f, h._eventsCount++), h; }
    function o(h, l) { --h._eventsCount === 0 ? h._events = new s : delete h._events[l]; }
    function a() { this._events = new s, this._eventsCount = 0; }
    a.prototype.eventNames = function () { var l = [], c, u; if (this._eventsCount === 0)
        return l; for (u in c = this._events)
        t.call(c, u) && l.push(e ? u.slice(1) : u); return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(c)) : l; }, a.prototype.listeners = function (l) { var c = e ? e + l : l, u = this._events[c]; if (!u)
        return []; if (u.fn)
        return [u.fn]; for (var d = 0, f = u.length, p = new Array(f); d < f; d++)
        p[d] = u[d].fn; return p; }, a.prototype.listenerCount = function (l) { var c = e ? e + l : l, u = this._events[c]; return u ? u.fn ? 1 : u.length : 0; }, a.prototype.emit = function (l, c, u, d, f, p) { var m = e ? e + l : l; if (!this._events[m])
        return !1; var _ = this._events[m], x = arguments.length, y, g; if (_.fn) {
        switch (_.once && this.removeListener(l, _.fn, void 0, !0), x) {
            case 1: return _.fn.call(_.context), !0;
            case 2: return _.fn.call(_.context, c), !0;
            case 3: return _.fn.call(_.context, c, u), !0;
            case 4: return _.fn.call(_.context, c, u, d), !0;
            case 5: return _.fn.call(_.context, c, u, d, f), !0;
            case 6: return _.fn.call(_.context, c, u, d, f, p), !0;
        }
        for (g = 1, y = new Array(x - 1); g < x; g++)
            y[g - 1] = arguments[g];
        _.fn.apply(_.context, y);
    }
    else {
        var v = _.length, T;
        for (g = 0; g < v; g++)
            switch (_[g].once && this.removeListener(l, _[g].fn, void 0, !0), x) {
                case 1:
                    _[g].fn.call(_[g].context);
                    break;
                case 2:
                    _[g].fn.call(_[g].context, c);
                    break;
                case 3:
                    _[g].fn.call(_[g].context, c, u);
                    break;
                case 4:
                    _[g].fn.call(_[g].context, c, u, d);
                    break;
                default:
                    if (!y)
                        for (T = 1, y = new Array(x - 1); T < x; T++)
                            y[T - 1] = arguments[T];
                    _[g].fn.apply(_[g].context, y);
            }
    } return !0; }, a.prototype.on = function (l, c, u) { return n(this, l, c, u, !1); }, a.prototype.once = function (l, c, u) { return n(this, l, c, u, !0); }, a.prototype.removeListener = function (l, c, u, d) { var f = e ? e + l : l; if (!this._events[f])
        return this; if (!c)
        return o(this, f), this; var p = this._events[f]; if (p.fn)
        p.fn === c && (!d || p.once) && (!u || p.context === u) && o(this, f);
    else {
        for (var m = 0, _ = [], x = p.length; m < x; m++)
            (p[m].fn !== c || d && !p[m].once || u && p[m].context !== u) && _.push(p[m]);
        _.length ? this._events[f] = _.length === 1 ? _[0] : _ : o(this, f);
    } return this; }, a.prototype.removeAllListeners = function (l) { var c; return l ? (c = e ? e + l : l, this._events[c] && o(this, c)) : (this._events = new s, this._eventsCount = 0), this; }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = e, a.EventEmitter = a, i.exports = a;
}), Bs = Ci, ch = Ci;
function Ci(i, t, e) { e = e || 2; var s = t && t.length, r = s ? t[0] * e : i.length, n = kn(i, 0, r, e, !0), o = []; if (!n || n.next === n.prev)
    return o; var a, h, l, c, u, d, f; if (s && (n = mh(i, t, n, e)), i.length > 80 * e) {
    a = l = i[0], h = c = i[1];
    for (var p = e; p < r; p += e)
        u = i[p], d = i[p + 1], u < a && (a = u), d < h && (h = d), u > l && (l = u), d > c && (c = d);
    f = Math.max(l - a, c - h), f = f !== 0 ? 32767 / f : 0;
} return ze(n, o, e, a, h, f, 0), o; }
function kn(i, t, e, s, r) { var n, o; if (r === Fs(i, t, e, s) > 0)
    for (n = t; n < e; n += s)
        o = Xn(n, i[n], i[n + 1], o);
else
    for (n = e - s; n >= t; n -= s)
        o = Xn(n, i[n], i[n + 1], o); return o && Ii(o, o.next) && (je(o), o = o.next), o; }
function me(i, t) { if (!i)
    return i; t || (t = i); var e = i, s; do
    if (s = !1, !e.steiner && (Ii(e, e.next) || it(e.prev, e, e.next) === 0)) {
        if (je(e), e = t = e.prev, e === e.next)
            break;
        s = !0;
    }
    else
        e = e.next;
while (s || e !== t); return t; }
function ze(i, t, e, s, r, n, o) { if (!!i) {
    !o && n && yh(i, s, r, n);
    for (var a = i, h, l; i.prev !== i.next;) {
        if (h = i.prev, l = i.next, n ? dh(i, s, r, n) : uh(i)) {
            t.push(h.i / e | 0), t.push(i.i / e | 0), t.push(l.i / e | 0), je(i), i = l.next, a = l.next;
            continue;
        }
        if (i = l, i === a) {
            o ? o === 1 ? (i = fh(me(i), t, e), ze(i, t, e, s, r, n, 2)) : o === 2 && ph(i, t, e, s, r, n) : ze(me(i), t, e, s, r, n, 1);
            break;
        }
    }
} }
function uh(i) { var t = i.prev, e = i, s = i.next; if (it(t, e, s) >= 0)
    return !1; for (var r = t.x, n = e.x, o = s.x, a = t.y, h = e.y, l = s.y, c = r < n ? r < o ? r : o : n < o ? n : o, u = a < h ? a < l ? a : l : h < l ? h : l, d = r > n ? r > o ? r : o : n > o ? n : o, f = a > h ? a > l ? a : l : h > l ? h : l, p = s.next; p !== t;) {
    if (p.x >= c && p.x <= d && p.y >= u && p.y <= f && Ie(r, a, n, h, o, l, p.x, p.y) && it(p.prev, p, p.next) >= 0)
        return !1;
    p = p.next;
} return !0; }
function dh(i, t, e, s) { var r = i.prev, n = i, o = i.next; if (it(r, n, o) >= 0)
    return !1; for (var a = r.x, h = n.x, l = o.x, c = r.y, u = n.y, d = o.y, f = a < h ? a < l ? a : l : h < l ? h : l, p = c < u ? c < d ? c : d : u < d ? u : d, m = a > h ? a > l ? a : l : h > l ? h : l, _ = c > u ? c > d ? c : d : u > d ? u : d, x = Ds(f, p, t, e, s), y = Ds(m, _, t, e, s), g = i.prevZ, v = i.nextZ; g && g.z >= x && v && v.z <= y;) {
    if (g.x >= f && g.x <= m && g.y >= p && g.y <= _ && g !== r && g !== o && Ie(a, c, h, u, l, d, g.x, g.y) && it(g.prev, g, g.next) >= 0 || (g = g.prevZ, v.x >= f && v.x <= m && v.y >= p && v.y <= _ && v !== r && v !== o && Ie(a, c, h, u, l, d, v.x, v.y) && it(v.prev, v, v.next) >= 0))
        return !1;
    v = v.nextZ;
} for (; g && g.z >= x;) {
    if (g.x >= f && g.x <= m && g.y >= p && g.y <= _ && g !== r && g !== o && Ie(a, c, h, u, l, d, g.x, g.y) && it(g.prev, g, g.next) >= 0)
        return !1;
    g = g.prevZ;
} for (; v && v.z <= y;) {
    if (v.x >= f && v.x <= m && v.y >= p && v.y <= _ && v !== r && v !== o && Ie(a, c, h, u, l, d, v.x, v.y) && it(v.prev, v, v.next) >= 0)
        return !1;
    v = v.nextZ;
} return !0; }
function fh(i, t, e) { var s = i; do {
    var r = s.prev, n = s.next.next;
    !Ii(r, n) && Gn(r, s, s.next, n) && We(r, n) && We(n, r) && (t.push(r.i / e | 0), t.push(s.i / e | 0), t.push(n.i / e | 0), je(s), je(s.next), s = i = n), s = s.next;
} while (s !== i); return me(s); }
function ph(i, t, e, s, r, n) { var o = i; do {
    for (var a = o.next.next; a !== o.prev;) {
        if (o.i !== a.i && Eh(o, a)) {
            var h = Hn(o, a);
            o = me(o, o.next), h = me(h, h.next), ze(o, t, e, s, r, n, 0), ze(h, t, e, s, r, n, 0);
            return;
        }
        a = a.next;
    }
    o = o.next;
} while (o !== i); }
function mh(i, t, e, s) { var r = [], n, o, a, h, l; for (n = 0, o = t.length; n < o; n++)
    a = t[n] * s, h = n < o - 1 ? t[n + 1] * s : i.length, l = kn(i, a, h, s, !1), l === l.next && (l.steiner = !0), r.push(Th(l)); for (r.sort(_h), n = 0; n < r.length; n++)
    e = gh(r[n], e); return e; }
function _h(i, t) { return i.x - t.x; }
function gh(i, t) { var e = xh(i, t); if (!e)
    return t; var s = Hn(e, i); return me(s, s.next), me(e, e.next); }
function xh(i, t) { var e = t, s = i.x, r = i.y, n = -1 / 0, o; do {
    if (r <= e.y && r >= e.next.y && e.next.y !== e.y) {
        var a = e.x + (r - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
        if (a <= s && a > n && (n = a, o = e.x < e.next.x ? e : e.next, a === s))
            return o;
    }
    e = e.next;
} while (e !== t); if (!o)
    return null; var h = o, l = o.x, c = o.y, u = 1 / 0, d; e = o; do
    s >= e.x && e.x >= l && s !== e.x && Ie(r < c ? s : n, r, l, c, r < c ? n : s, r, e.x, e.y) && (d = Math.abs(r - e.y) / (s - e.x), We(e, i) && (d < u || d === u && (e.x > o.x || e.x === o.x && vh(o, e))) && (o = e, u = d)), e = e.next;
while (e !== h); return o; }
function vh(i, t) { return it(i.prev, i, t.prev) < 0 && it(t.next, i, i.next) < 0; }
function yh(i, t, e, s) { var r = i; do
    r.z === 0 && (r.z = Ds(r.x, r.y, t, e, s)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next;
while (r !== i); r.prevZ.nextZ = null, r.prevZ = null, bh(r); }
function bh(i) { var t, e, s, r, n, o, a, h, l = 1; do {
    for (e = i, i = null, n = null, o = 0; e;) {
        for (o++, s = e, a = 0, t = 0; t < l && (a++, s = s.nextZ, !!s); t++)
            ;
        for (h = l; a > 0 || h > 0 && s;)
            a !== 0 && (h === 0 || !s || e.z <= s.z) ? (r = e, e = e.nextZ, a--) : (r = s, s = s.nextZ, h--), n ? n.nextZ = r : i = r, r.prevZ = n, n = r;
        e = s;
    }
    n.nextZ = null, l *= 2;
} while (o > 1); return i; }
function Ds(i, t, e, s, r) { return i = (i - e) * r | 0, t = (t - s) * r | 0, i = (i | i << 8) & 16711935, i = (i | i << 4) & 252645135, i = (i | i << 2) & 858993459, i = (i | i << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, i | t << 1; }
function Th(i) { var t = i, e = i; do
    (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t), t = t.next;
while (t !== i); return e; }
function Ie(i, t, e, s, r, n, o, a) { return (r - o) * (t - a) >= (i - o) * (n - a) && (i - o) * (s - a) >= (e - o) * (t - a) && (e - o) * (n - a) >= (r - o) * (s - a); }
function Eh(i, t) { return i.next.i !== t.i && i.prev.i !== t.i && !wh(i, t) && (We(i, t) && We(t, i) && Ah(i, t) && (it(i.prev, i, t.prev) || it(i, t.prev, t)) || Ii(i, t) && it(i.prev, i, i.next) > 0 && it(t.prev, t, t.next) > 0); }
function it(i, t, e) { return (t.y - i.y) * (e.x - t.x) - (t.x - i.x) * (e.y - t.y); }
function Ii(i, t) { return i.x === t.x && i.y === t.y; }
function Gn(i, t, e, s) { var r = Mi(it(i, t, e)), n = Mi(it(i, t, s)), o = Mi(it(e, s, i)), a = Mi(it(e, s, t)); return !!(r !== n && o !== a || r === 0 && Pi(i, e, t) || n === 0 && Pi(i, s, t) || o === 0 && Pi(e, i, s) || a === 0 && Pi(e, t, s)); }
function Pi(i, t, e) { return t.x <= Math.max(i.x, e.x) && t.x >= Math.min(i.x, e.x) && t.y <= Math.max(i.y, e.y) && t.y >= Math.min(i.y, e.y); }
function Mi(i) { return i > 0 ? 1 : i < 0 ? -1 : 0; }
function wh(i, t) { var e = i; do {
    if (e.i !== i.i && e.next.i !== i.i && e.i !== t.i && e.next.i !== t.i && Gn(e, e.next, i, t))
        return !0;
    e = e.next;
} while (e !== i); return !1; }
function We(i, t) { return it(i.prev, i, i.next) < 0 ? it(i, t, i.next) >= 0 && it(i, i.prev, t) >= 0 : it(i, t, i.prev) < 0 || it(i, i.next, t) < 0; }
function Ah(i, t) { var e = i, s = !1, r = (i.x + t.x) / 2, n = (i.y + t.y) / 2; do
    e.y > n != e.next.y > n && e.next.y !== e.y && r < (e.next.x - e.x) * (n - e.y) / (e.next.y - e.y) + e.x && (s = !s), e = e.next;
while (e !== i); return s; }
function Hn(i, t) { var e = new Ns(i.i, i.x, i.y), s = new Ns(t.i, t.x, t.y), r = i.next, n = t.prev; return i.next = t, t.prev = i, e.next = r, r.prev = e, s.next = e, e.prev = s, n.next = s, s.prev = n, s; }
function Xn(i, t, e, s) { var r = new Ns(i, t, e); return s ? (r.next = s.next, r.prev = s, s.next.prev = r, s.next = r) : (r.prev = r, r.next = r), r; }
function je(i) { i.next.prev = i.prev, i.prev.next = i.next, i.prevZ && (i.prevZ.nextZ = i.nextZ), i.nextZ && (i.nextZ.prevZ = i.prevZ); }
function Ns(i, t, e) { this.i = i, this.x = t, this.y = e, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1; }
Ci.deviation = function (i, t, e, s) { var r = t && t.length, n = r ? t[0] * e : i.length, o = Math.abs(Fs(i, 0, n, e)); if (r)
    for (var a = 0, h = t.length; a < h; a++) {
        var l = t[a] * e, c = a < h - 1 ? t[a + 1] * e : i.length;
        o -= Math.abs(Fs(i, l, c, e));
    } var u = 0; for (a = 0; a < s.length; a += 3) {
    var d = s[a] * e, f = s[a + 1] * e, p = s[a + 2] * e;
    u += Math.abs((i[d] - i[p]) * (i[f + 1] - i[d + 1]) - (i[d] - i[f]) * (i[p + 1] - i[d + 1]));
} return o === 0 && u === 0 ? 0 : Math.abs((u - o) / o); };
function Fs(i, t, e, s) { for (var r = 0, n = t, o = e - s; n < e; n += s)
    r += (i[o] - i[n]) * (i[n + 1] + i[o + 1]), o = n; return r; }
Ci.flatten = function (i) { for (var t = i[0][0].length, e = { vertices: [], holes: [], dimensions: t }, s = 0, r = 0; r < i.length; r++) {
    for (var n = 0; n < i[r].length; n++)
        for (var o = 0; o < t; o++)
            e.vertices.push(i[r][n][o]);
    r > 0 && (s += i[r - 1].length, e.holes.push(s));
} return e; }, Bs.default = ch;
var Sh = Ms(function (i, t) { /*! https://mths.be/punycode v1.3.2 by @mathias */ (function (e) { var s = t && !t.nodeType && t, r = i && !i.nodeType && i, n = typeof Ps == "object" && Ps; (n.global === n || n.window === n || n.self === n) && (e = n); var o, a = 2147483647, h = 36, l = 1, c = 26, u = 38, d = 700, f = 72, p = 128, m = "-", _ = /^xn--/, x = /[^\x20-\x7E]/, y = /[\x2E\u3002\uFF0E\uFF61]/g, g = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, v = h - l, T = Math.floor, M = String.fromCharCode, R; function A(S) { throw RangeError(g[S]); } function L(S, H) { for (var Y = S.length, q = []; Y--;)
    q[Y] = H(S[Y]); return q; } function G(S, H) { var Y = S.split("@"), q = ""; Y.length > 1 && (q = Y[0] + "@", S = Y[1]), S = S.replace(y, "."); var K = S.split("."), ct = L(K, H).join("."); return q + ct; } function I(S) { for (var H = [], Y = 0, q = S.length, K, ct; Y < q;)
    K = S.charCodeAt(Y++), K >= 55296 && K <= 56319 && Y < q ? (ct = S.charCodeAt(Y++), (ct & 64512) == 56320 ? H.push(((K & 1023) << 10) + (ct & 1023) + 65536) : (H.push(K), Y--)) : H.push(K); return H; } function N(S) { return L(S, function (H) { var Y = ""; return H > 65535 && (H -= 65536, Y += M(H >>> 10 & 1023 | 55296), H = 56320 | H & 1023), Y += M(H), Y; }).join(""); } function E(S) { return S - 48 < 10 ? S - 22 : S - 65 < 26 ? S - 65 : S - 97 < 26 ? S - 97 : h; } function b(S, H) { return S + 22 + 75 * (S < 26) - ((H != 0) << 5); } function X(S, H, Y) { var q = 0; for (S = Y ? T(S / d) : S >> 1, S += T(S / H); S > v * c >> 1; q += h)
    S = T(S / v); return T(q + (v + 1) * S / (S + u)); } function z(S) { var H = [], Y = S.length, q, K = 0, ct = p, ot = f, ut, mt, vt, pt, J, at, lt, Gt, Ht; for (ut = S.lastIndexOf(m), ut < 0 && (ut = 0), mt = 0; mt < ut; ++mt)
    S.charCodeAt(mt) >= 128 && A("not-basic"), H.push(S.charCodeAt(mt)); for (vt = ut > 0 ? ut + 1 : 0; vt < Y;) {
    for (pt = K, J = 1, at = h; vt >= Y && A("invalid-input"), lt = E(S.charCodeAt(vt++)), (lt >= h || lt > T((a - K) / J)) && A("overflow"), K += lt * J, Gt = at <= ot ? l : at >= ot + c ? c : at - ot, !(lt < Gt); at += h)
        Ht = h - Gt, J > T(a / Ht) && A("overflow"), J *= Ht;
    q = H.length + 1, ot = X(K - pt, q, pt == 0), T(K / q) > a - ct && A("overflow"), ct += T(K / q), K %= q, H.splice(K++, 0, ct);
} return N(H); } function D(S) { var H, Y, q, K, ct, ot, ut, mt, vt, pt, J, at = [], lt, Gt, Ht, He; for (S = I(S), lt = S.length, H = p, Y = 0, ct = f, ot = 0; ot < lt; ++ot)
    J = S[ot], J < 128 && at.push(M(J)); for (q = K = at.length, K && at.push(m); q < lt;) {
    for (ut = a, ot = 0; ot < lt; ++ot)
        J = S[ot], J >= H && J < ut && (ut = J);
    for (Gt = q + 1, ut - H > T((a - Y) / Gt) && A("overflow"), Y += (ut - H) * Gt, H = ut, ot = 0; ot < lt; ++ot)
        if (J = S[ot], J < H && ++Y > a && A("overflow"), J == H) {
            for (mt = Y, vt = h; pt = vt <= ct ? l : vt >= ct + c ? c : vt - ct, !(mt < pt); vt += h)
                He = mt - pt, Ht = h - pt, at.push(M(b(pt + He % Ht, 0))), mt = T(He / Ht);
            at.push(M(b(mt, 0))), ct = X(Y, Gt, q == K), Y = 0, ++q;
        }
    ++Y, ++H;
} return at.join(""); } function $(S) { return G(S, function (H) { return _.test(H) ? z(H.slice(4).toLowerCase()) : H; }); } function st(S) { return G(S, function (H) { return x.test(H) ? "xn--" + D(H) : H; }); } if (o = { version: "1.3.2", ucs2: { decode: I, encode: N }, decode: z, encode: D, toASCII: st, toUnicode: $ }, s && r)
    if (i.exports == s)
        r.exports = o;
    else
        for (R in o)
            o.hasOwnProperty(R) && (s[R] = o[R]);
else
    e.punycode = o; })(Ps); }), Wt = { isString: function (i) { return typeof i == "string"; }, isObject: function (i) { return typeof i == "object" && i !== null; }, isNull: function (i) { return i === null; }, isNullOrUndefined: function (i) { return i == null; } };
function Rh(i, t) { return Object.prototype.hasOwnProperty.call(i, t); }
var Ch = function (i, t, e, s) { t = t || "&", e = e || "="; var r = {}; if (typeof i != "string" || i.length === 0)
    return r; var n = /\+/g; i = i.split(t); var o = 1e3; s && typeof s.maxKeys == "number" && (o = s.maxKeys); var a = i.length; o > 0 && a > o && (a = o); for (var h = 0; h < a; ++h) {
    var l = i[h].replace(n, "%20"), c = l.indexOf(e), u, d, f, p;
    c >= 0 ? (u = l.substr(0, c), d = l.substr(c + 1)) : (u = l, d = ""), f = decodeURIComponent(u), p = decodeURIComponent(d), Rh(r, f) ? Array.isArray(r[f]) ? r[f].push(p) : r[f] = [r[f], p] : r[f] = p;
} return r; }, Ye = function (i) { switch (typeof i) {
    case "string": return i;
    case "boolean": return i ? "true" : "false";
    case "number": return isFinite(i) ? i : "";
    default: return "";
} }, Ih = function (i, t, e, s) { return t = t || "&", e = e || "=", i === null && (i = void 0), typeof i == "object" ? Object.keys(i).map(function (r) { var n = encodeURIComponent(Ye(r)) + e; return Array.isArray(i[r]) ? i[r].map(function (o) { return n + encodeURIComponent(Ye(o)); }).join(t) : n + encodeURIComponent(Ye(i[r])); }).join(t) : s ? encodeURIComponent(Ye(s)) + e + encodeURIComponent(Ye(i)) : ""; }, Ls = Ms(function (i, t) {
    "use strict";
    t.decode = t.parse = Ch, t.encode = t.stringify = Ih;
}), Vn = $e, zn = Hh, Ph = Xh, Wn = Gh, Mh = St;
function St() { this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null; }
var Bh = /^([a-z0-9.+-]+:)/i, Dh = /:[0-9]*$/, Nh = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Fh = ["<", ">", '"', "`", " ", "\r", "\n", "	"], Lh = ["{", "}", "|", "\\", "^", "`"].concat(Fh), Us = ["'"].concat(Lh), jn = ["%", "/", "?", ";", "#"].concat(Us), Yn = ["/", "?", "#"], Uh = 255, $n = /^[+a-z0-9A-Z_-]{0,63}$/, Oh = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, kh = { javascript: !0, "javascript:": !0 }, Os = { javascript: !0, "javascript:": !0 }, Pe = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 };
function $e(i, t, e) { if (i && Wt.isObject(i) && i instanceof St)
    return i; var s = new St; return s.parse(i, t, e), s; }
St.prototype.parse = function (i, t, e) { if (!Wt.isString(i))
    throw new TypeError("Parameter 'url' must be a string, not " + typeof i); var s = i.indexOf("?"), r = s !== -1 && s < i.indexOf("#") ? "?" : "#", n = i.split(r), o = /\\/g; n[0] = n[0].replace(o, "/"), i = n.join(r); var a = i; if (a = a.trim(), !e && i.split("#").length === 1) {
    var h = Nh.exec(a);
    if (h)
        return this.path = a, this.href = a, this.pathname = h[1], h[2] ? (this.search = h[2], t ? this.query = Ls.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this;
} var l = Bh.exec(a); if (l) {
    l = l[0];
    var c = l.toLowerCase();
    this.protocol = c, a = a.substr(l.length);
} if (e || l || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var u = a.substr(0, 2) === "//";
    u && !(l && Os[l]) && (a = a.substr(2), this.slashes = !0);
} if (!Os[l] && (u || l && !Pe[l])) {
    for (var d = -1, f = 0; f < Yn.length; f++) {
        var p = a.indexOf(Yn[f]);
        p !== -1 && (d === -1 || p < d) && (d = p);
    }
    var m, _;
    d === -1 ? _ = a.lastIndexOf("@") : _ = a.lastIndexOf("@", d), _ !== -1 && (m = a.slice(0, _), a = a.slice(_ + 1), this.auth = decodeURIComponent(m)), d = -1;
    for (var f = 0; f < jn.length; f++) {
        var p = a.indexOf(jn[f]);
        p !== -1 && (d === -1 || p < d) && (d = p);
    }
    d === -1 && (d = a.length), this.host = a.slice(0, d), a = a.slice(d), this.parseHost(), this.hostname = this.hostname || "";
    var x = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!x)
        for (var y = this.hostname.split(/\./), f = 0, g = y.length; f < g; f++) {
            var v = y[f];
            if (!!v && !v.match($n)) {
                for (var T = "", M = 0, R = v.length; M < R; M++)
                    v.charCodeAt(M) > 127 ? T += "x" : T += v[M];
                if (!T.match($n)) {
                    var A = y.slice(0, f), L = y.slice(f + 1), G = v.match(Oh);
                    G && (A.push(G[1]), L.unshift(G[2])), L.length && (a = "/" + L.join(".") + a), this.hostname = A.join(".");
                    break;
                }
            }
        }
    this.hostname.length > Uh ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), x || (this.hostname = Sh.toASCII(this.hostname));
    var I = this.port ? ":" + this.port : "", N = this.hostname || "";
    this.host = N + I, this.href += this.host, x && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), a[0] !== "/" && (a = "/" + a));
} if (!kh[c])
    for (var f = 0, g = Us.length; f < g; f++) {
        var E = Us[f];
        if (a.indexOf(E) !== -1) {
            var b = encodeURIComponent(E);
            b === E && (b = escape(E)), a = a.split(E).join(b);
        }
    } var X = a.indexOf("#"); X !== -1 && (this.hash = a.substr(X), a = a.slice(0, X)); var z = a.indexOf("?"); if (z !== -1 ? (this.search = a.substr(z), this.query = a.substr(z + 1), t && (this.query = Ls.parse(this.query)), a = a.slice(0, z)) : t && (this.search = "", this.query = {}), a && (this.pathname = a), Pe[c] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var I = this.pathname || "", D = this.search || "";
    this.path = I + D;
} return this.href = this.format(), this; };
function Gh(i) { return Wt.isString(i) && (i = $e(i)), i instanceof St ? i.format() : St.prototype.format.call(i); }
St.prototype.format = function () { var i = this.auth || ""; i && (i = encodeURIComponent(i), i = i.replace(/%3A/i, ":"), i += "@"); var t = this.protocol || "", e = this.pathname || "", s = this.hash || "", r = !1, n = ""; this.host ? r = i + this.host : this.hostname && (r = i + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (r += ":" + this.port)), this.query && Wt.isObject(this.query) && Object.keys(this.query).length && (n = Ls.stringify(this.query)); var o = this.search || n && "?" + n || ""; return t && t.substr(-1) !== ":" && (t += ":"), this.slashes || (!t || Pe[t]) && r !== !1 ? (r = "//" + (r || ""), e && e.charAt(0) !== "/" && (e = "/" + e)) : r || (r = ""), s && s.charAt(0) !== "#" && (s = "#" + s), o && o.charAt(0) !== "?" && (o = "?" + o), e = e.replace(/[?#]/g, function (a) { return encodeURIComponent(a); }), o = o.replace("#", "%23"), t + r + e + o + s; };
function Hh(i, t) { return $e(i, !1, !0).resolve(t); }
St.prototype.resolve = function (i) { return this.resolveObject($e(i, !1, !0)).format(); };
function Xh(i, t) { return i ? $e(i, !1, !0).resolveObject(t) : t; }
St.prototype.resolveObject = function (i) { if (Wt.isString(i)) {
    var t = new St;
    t.parse(i, !1, !0), i = t;
} for (var e = new St, s = Object.keys(this), r = 0; r < s.length; r++) {
    var n = s[r];
    e[n] = this[n];
} if (e.hash = i.hash, i.href === "")
    return e.href = e.format(), e; if (i.slashes && !i.protocol) {
    for (var o = Object.keys(i), a = 0; a < o.length; a++) {
        var h = o[a];
        h !== "protocol" && (e[h] = i[h]);
    }
    return Pe[e.protocol] && e.hostname && !e.pathname && (e.path = e.pathname = "/"), e.href = e.format(), e;
} if (i.protocol && i.protocol !== e.protocol) {
    if (!Pe[i.protocol]) {
        for (var l = Object.keys(i), c = 0; c < l.length; c++) {
            var u = l[c];
            e[u] = i[u];
        }
        return e.href = e.format(), e;
    }
    if (e.protocol = i.protocol, !i.host && !Os[i.protocol]) {
        for (var g = (i.pathname || "").split("/"); g.length && !(i.host = g.shift());)
            ;
        i.host || (i.host = ""), i.hostname || (i.hostname = ""), g[0] !== "" && g.unshift(""), g.length < 2 && g.unshift(""), e.pathname = g.join("/");
    }
    else
        e.pathname = i.pathname;
    if (e.search = i.search, e.query = i.query, e.host = i.host || "", e.auth = i.auth, e.hostname = i.hostname || i.host, e.port = i.port, e.pathname || e.search) {
        var d = e.pathname || "", f = e.search || "";
        e.path = d + f;
    }
    return e.slashes = e.slashes || i.slashes, e.href = e.format(), e;
} var p = e.pathname && e.pathname.charAt(0) === "/", m = i.host || i.pathname && i.pathname.charAt(0) === "/", _ = m || p || e.host && i.pathname, x = _, y = e.pathname && e.pathname.split("/") || [], g = i.pathname && i.pathname.split("/") || [], v = e.protocol && !Pe[e.protocol]; if (v && (e.hostname = "", e.port = null, e.host && (y[0] === "" ? y[0] = e.host : y.unshift(e.host)), e.host = "", i.protocol && (i.hostname = null, i.port = null, i.host && (g[0] === "" ? g[0] = i.host : g.unshift(i.host)), i.host = null), _ = _ && (g[0] === "" || y[0] === "")), m)
    e.host = i.host || i.host === "" ? i.host : e.host, e.hostname = i.hostname || i.hostname === "" ? i.hostname : e.hostname, e.search = i.search, e.query = i.query, y = g;
else if (g.length)
    y || (y = []), y.pop(), y = y.concat(g), e.search = i.search, e.query = i.query;
else if (!Wt.isNullOrUndefined(i.search)) {
    if (v) {
        e.hostname = e.host = y.shift();
        var T = e.host && e.host.indexOf("@") > 0 ? e.host.split("@") : !1;
        T && (e.auth = T.shift(), e.host = e.hostname = T.shift());
    }
    return e.search = i.search, e.query = i.query, (!Wt.isNull(e.pathname) || !Wt.isNull(e.search)) && (e.path = (e.pathname ? e.pathname : "") + (e.search ? e.search : "")), e.href = e.format(), e;
} if (!y.length)
    return e.pathname = null, e.search ? e.path = "/" + e.search : e.path = null, e.href = e.format(), e; for (var M = y.slice(-1)[0], R = (e.host || i.host || y.length > 1) && (M === "." || M === "..") || M === "", A = 0, L = y.length; L >= 0; L--)
    M = y[L], M === "." ? y.splice(L, 1) : M === ".." ? (y.splice(L, 1), A++) : A && (y.splice(L, 1), A--); if (!_ && !x)
    for (; A--; A)
        y.unshift(".."); _ && y[0] !== "" && (!y[0] || y[0].charAt(0) !== "/") && y.unshift(""), R && y.join("/").substr(-1) !== "/" && y.push(""); var G = y[0] === "" || y[0] && y[0].charAt(0) === "/"; if (v) {
    e.hostname = e.host = G ? "" : y.length ? y.shift() : "";
    var T = e.host && e.host.indexOf("@") > 0 ? e.host.split("@") : !1;
    T && (e.auth = T.shift(), e.host = e.hostname = T.shift());
} return _ = _ || e.host && y.length, _ && !G && y.unshift(""), y.length ? e.pathname = y.join("/") : (e.pathname = null, e.path = null), (!Wt.isNull(e.pathname) || !Wt.isNull(e.search)) && (e.path = (e.pathname ? e.pathname : "") + (e.search ? e.search : "")), e.auth = i.auth || e.auth, e.slashes = e.slashes || i.slashes, e.href = e.format(), e; }, St.prototype.parseHost = function () { var i = this.host, t = Dh.exec(i); t && (t = t[0], t !== ":" && (this.port = t.substr(1)), i = i.substr(0, i.length - t.length)), i && (this.hostname = i); };
var Gp = { parse: Vn, resolve: zn, resolveObject: Ph, format: Wn, Url: Mh };
var qn = { parse: Vn, format: Wn, resolve: zn };
function Ft(i) { if (typeof i != "string")
    throw new TypeError("Path must be a string. Received ".concat(JSON.stringify(i))); }
function Kn(i) { return i.split("?")[0].split("#")[0]; }
function Vh(i) { return i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
function zh(i, t, e) { return i.replace(new RegExp(Vh(t), "g"), e); }
function Wh(i, t) { var e = "", s = 0, r = -1, n = 0, o; for (var a = 0; a <= i.length; ++a) {
    if (a < i.length)
        o = i.charCodeAt(a);
    else {
        if (o === 47)
            break;
        o = 47;
    }
    if (o === 47) {
        if (!(r === a - 1 || n === 1))
            if (r !== a - 1 && n === 2) {
                if (e.length < 2 || s !== 2 || e.charCodeAt(e.length - 1) !== 46 || e.charCodeAt(e.length - 2) !== 46) {
                    if (e.length > 2) {
                        var h = e.lastIndexOf("/");
                        if (h !== e.length - 1) {
                            h === -1 ? (e = "", s = 0) : (e = e.slice(0, h), s = e.length - 1 - e.lastIndexOf("/")), r = a, n = 0;
                            continue;
                        }
                    }
                    else if (e.length === 2 || e.length === 1) {
                        e = "", s = 0, r = a, n = 0;
                        continue;
                    }
                }
                t && (e.length > 0 ? e += "/.." : e = "..", s = 2);
            }
            else
                e.length > 0 ? e += "/".concat(i.slice(r + 1, a)) : e = i.slice(r + 1, a), s = a - r - 1;
        r = a, n = 0;
    }
    else
        o === 46 && n !== -1 ? ++n : n = -1;
} return e; }
var ft = { toPosix: function (i) { return zh(i, "\\", "/"); }, isUrl: function (i) { return /^https?:/.test(this.toPosix(i)); }, isDataUrl: function (i) { return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(i); }, hasProtocol: function (i) { return /^[^/:]+:\//.test(this.toPosix(i)); }, getProtocol: function (i) { Ft(i), i = this.toPosix(i); var t = ""; var e = /^file:\/\/\//.exec(i), s = /^[^/:]+:\/\//.exec(i), r = /^[^/:]+:\//.exec(i); if (e || s || r) {
        var n = (e == null ? void 0 : e[0]) || (s == null ? void 0 : s[0]) || (r == null ? void 0 : r[0]);
        t = n, i = i.slice(n.length);
    } return t; }, toAbsolute: function (i, t, e) { if (this.isDataUrl(i))
        return i; var s = Kn(this.toPosix(t != null ? t : w.ADAPTER.getBaseUrl())), r = Kn(this.toPosix(e != null ? e : this.rootname(s))); return Ft(i), i = this.toPosix(i), i.startsWith("/") ? ft.join(r, i.slice(1)) : this.isAbsolute(i) ? i : this.join(s, i); }, normalize: function (i) { if (i = this.toPosix(i), Ft(i), i.length === 0)
        return "."; var t = ""; var e = i.startsWith("/"); this.hasProtocol(i) && (t = this.rootname(i), i = i.slice(t.length)); var s = i.endsWith("/"); return i = Wh(i, !1), i.length > 0 && s && (i += "/"), e ? "/".concat(i) : t + i; }, isAbsolute: function (i) { return Ft(i), i = this.toPosix(i), this.hasProtocol(i) ? !0 : i.startsWith("/"); }, join: function () {
        var i = [];
        for (var _b = 0; _b < arguments.length; _b++) {
            i[_b] = arguments[_b];
        }
        var e;
        if (i.length === 0)
            return ".";
        var t;
        for (var s = 0; s < i.length; ++s) {
            var r = i[s];
            if (Ft(r), r.length > 0)
                if (t === void 0)
                    t = r;
                else {
                    var n = (e = i[s - 1]) != null ? e : "";
                    this.extname(n) ? t += "/../".concat(r) : t += "/".concat(r);
                }
        }
        return t === void 0 ? "." : this.normalize(t);
    }, dirname: function (i) { if (Ft(i), i.length === 0)
        return "."; i = this.toPosix(i); var t = i.charCodeAt(0); var e = t === 47; var s = -1, r = !0; var n = this.getProtocol(i), o = i; i = i.slice(n.length); for (var a = i.length - 1; a >= 1; --a)
        if (t = i.charCodeAt(a), t === 47) {
            if (!r) {
                s = a;
                break;
            }
        }
        else
            r = !1; return s === -1 ? e ? "/" : this.isUrl(o) ? n + i : n : e && s === 1 ? "//" : n + i.slice(0, s); }, rootname: function (i) { Ft(i), i = this.toPosix(i); var t = ""; if (i.startsWith("/") ? t = "/" : t = this.getProtocol(i), this.isUrl(i)) {
        var e = i.indexOf("/", t.length);
        e !== -1 ? t = i.slice(0, e) : t = i, t.endsWith("/") || (t += "/");
    } return t; }, basename: function (i, t) { Ft(i), t && Ft(t), i = this.toPosix(i); var e = 0, s = -1, r = !0, n; if (t !== void 0 && t.length > 0 && t.length <= i.length) {
        if (t.length === i.length && t === i)
            return "";
        var o = t.length - 1, a = -1;
        for (n = i.length - 1; n >= 0; --n) {
            var h = i.charCodeAt(n);
            if (h === 47) {
                if (!r) {
                    e = n + 1;
                    break;
                }
            }
            else
                a === -1 && (r = !1, a = n + 1), o >= 0 && (h === t.charCodeAt(o) ? --o === -1 && (s = n) : (o = -1, s = a));
        }
        return e === s ? s = a : s === -1 && (s = i.length), i.slice(e, s);
    } for (n = i.length - 1; n >= 0; --n)
        if (i.charCodeAt(n) === 47) {
            if (!r) {
                e = n + 1;
                break;
            }
        }
        else
            s === -1 && (r = !1, s = n + 1); return s === -1 ? "" : i.slice(e, s); }, extname: function (i) { Ft(i), i = this.toPosix(i); var t = -1, e = 0, s = -1, r = !0, n = 0; for (var o = i.length - 1; o >= 0; --o) {
        var a = i.charCodeAt(o);
        if (a === 47) {
            if (!r) {
                e = o + 1;
                break;
            }
            continue;
        }
        s === -1 && (r = !1, s = o + 1), a === 46 ? t === -1 ? t = o : n !== 1 && (n = 1) : t !== -1 && (n = -1);
    } return t === -1 || s === -1 || n === 0 || n === 1 && t === s - 1 && t === e + 1 ? "" : i.slice(t, s); }, parse: function (i) { Ft(i); var t = { root: "", dir: "", base: "", ext: "", name: "" }; if (i.length === 0)
        return t; i = this.toPosix(i); var e = i.charCodeAt(0); var s = this.isAbsolute(i); var r; var n = ""; t.root = this.rootname(i), s || this.hasProtocol(i) ? r = 1 : r = 0; var o = -1, a = 0, h = -1, l = !0, c = i.length - 1, u = 0; for (; c >= r; --c) {
        if (e = i.charCodeAt(c), e === 47) {
            if (!l) {
                a = c + 1;
                break;
            }
            continue;
        }
        h === -1 && (l = !1, h = c + 1), e === 46 ? o === -1 ? o = c : u !== 1 && (u = 1) : o !== -1 && (u = -1);
    } return o === -1 || h === -1 || u === 0 || u === 1 && o === h - 1 && o === a + 1 ? h !== -1 && (a === 0 && s ? t.base = t.name = i.slice(1, h) : t.base = t.name = i.slice(a, h)) : (a === 0 && s ? (t.name = i.slice(1, o), t.base = i.slice(1, h)) : (t.name = i.slice(a, o), t.base = i.slice(a, h)), t.ext = i.slice(o, h)), t.dir = this.dirname(i), n && (t.dir = n + t.dir), t; }, sep: "/", delimiter: ":" };
w.RETINA_PREFIX = /@([0-9\.]+)x/, w.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1;
var Zn = {};
function _t(i, t, e) {
    if (e === void 0) { e = 3; }
    if (Zn[t])
        return;
    var s = new Error().stack;
    typeof s == "undefined" ? console.warn("PixiJS Deprecation Warning: ", "".concat(t, "\nDeprecated since v").concat(i)) : (s = s.split("\n").splice(e).join("\n"), console.groupCollapsed ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", "".concat(t, "\nDeprecated since v").concat(i)), console.warn(s), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", "".concat(t, "\nDeprecated since v").concat(i)), console.warn(s))), Zn[t] = !0;
}
function jh() { _t("7.0.0", "skipHello is deprecated, please use PIXI.settings.RENDER_OPTIONS.hello"); }
function Yh() { _t("7.0.0", "sayHello is deprecated, please use Renderer's \"hello\" option"); }
var ks;
function Qn() { return typeof ks == "undefined" && (ks = function () { var t = { stencil: !0, failIfMajorPerformanceCaveat: w.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT }; try {
    if (!w.ADAPTER.getWebGLRenderingContext())
        return !1;
    var e = w.ADAPTER.createCanvas();
    var s = e.getContext("webgl", t) || e.getContext("experimental-webgl", t);
    var r = !!(s && s.getContextAttributes().stencil);
    if (s) {
        var n = s.getExtension("WEBGL_lose_context");
        n && n.loseContext();
    }
    return s = null, r;
}
catch (e) {
    return !1;
} }()), ks; }
var $h = "#f0f8ff", qh = "#faebd7", Kh = "#00ffff", Zh = "#7fffd4", Qh = "#f0ffff", Jh = "#f5f5dc", tl = "#ffe4c4", el = "#000000", il = "#ffebcd", sl = "#0000ff", rl = "#8a2be2", nl = "#a52a2a", ol = "#deb887", al = "#5f9ea0", hl = "#7fff00", ll = "#d2691e", cl = "#ff7f50", ul = "#6495ed", dl = "#fff8dc", fl = "#dc143c", pl = "#00ffff", ml = "#00008b", _l = "#008b8b", gl = "#b8860b", xl = "#a9a9a9", vl = "#006400", yl = "#a9a9a9", bl = "#bdb76b", Tl = "#8b008b", El = "#556b2f", wl = "#ff8c00", Al = "#9932cc", Sl = "#8b0000", Rl = "#e9967a", Cl = "#8fbc8f", Il = "#483d8b", Pl = "#2f4f4f", Ml = "#2f4f4f", Bl = "#00ced1", Dl = "#9400d3", Nl = "#ff1493", Fl = "#00bfff", Ll = "#696969", Ul = "#696969", Ol = "#1e90ff", kl = "#b22222", Gl = "#fffaf0", Hl = "#228b22", Xl = "#ff00ff", Vl = "#dcdcdc", zl = "#f8f8ff", Wl = "#daa520", jl = "#ffd700", Yl = "#808080", $l = "#008000", ql = "#adff2f", Kl = "#808080", Zl = "#f0fff0", Ql = "#ff69b4", Jl = "#cd5c5c", tc = "#4b0082", ec = "#fffff0", ic = "#f0e68c", sc = "#fff0f5", rc = "#e6e6fa", nc = "#7cfc00", oc = "#fffacd", ac = "#add8e6", hc = "#f08080", lc = "#e0ffff", cc = "#fafad2", uc = "#d3d3d3", dc = "#90ee90", fc = "#d3d3d3", pc = "#ffb6c1", mc = "#ffa07a", _c = "#20b2aa", gc = "#87cefa", xc = "#778899", vc = "#778899", yc = "#b0c4de", bc = "#ffffe0", Tc = "#00ff00", Ec = "#32cd32", wc = "#faf0e6", Ac = "#ff00ff", Sc = "#800000", Rc = "#66cdaa", Cc = "#0000cd", Ic = "#ba55d3", Pc = "#9370db", Mc = "#3cb371", Bc = "#7b68ee", Dc = "#00fa9a", Nc = "#48d1cc", Fc = "#c71585", Lc = "#191970", Uc = "#f5fffa", Oc = "#ffe4e1", kc = "#ffe4b5", Gc = "#ffdead", Hc = "#000080", Xc = "#fdf5e6", Vc = "#808000", zc = "#6b8e23", Wc = "#ffa500", jc = "#ff4500", Yc = "#da70d6", $c = "#eee8aa", qc = "#98fb98", Kc = "#afeeee", Zc = "#db7093", Qc = "#ffefd5", Jc = "#ffdab9", tu = "#cd853f", eu = "#ffc0cb", iu = "#dda0dd", su = "#b0e0e6", ru = "#800080", nu = "#663399", ou = "#ff0000", au = "#bc8f8f", hu = "#4169e1", lu = "#8b4513", cu = "#fa8072", uu = "#f4a460", du = "#2e8b57", fu = "#fff5ee", pu = "#a0522d", mu = "#c0c0c0", _u = "#87ceeb", gu = "#6a5acd", xu = "#708090", vu = "#708090", yu = "#fffafa", bu = "#00ff7f", Tu = "#4682b4", Eu = "#d2b48c", wu = "#008080", Au = "#d8bfd8", Su = "#ff6347", Ru = "#40e0d0", Cu = "#ee82ee", Iu = "#f5deb3", Pu = "#ffffff", Mu = "#f5f5f5", Bu = "#ffff00", Du = "#9acd32", Nu = { aliceblue: $h, antiquewhite: qh, aqua: Kh, aquamarine: Zh, azure: Qh, beige: Jh, bisque: tl, black: el, blanchedalmond: il, blue: sl, blueviolet: rl, brown: nl, burlywood: ol, cadetblue: al, chartreuse: hl, chocolate: ll, coral: cl, cornflowerblue: ul, cornsilk: dl, crimson: fl, cyan: pl, darkblue: ml, darkcyan: _l, darkgoldenrod: gl, darkgray: xl, darkgreen: vl, darkgrey: yl, darkkhaki: bl, darkmagenta: Tl, darkolivegreen: El, darkorange: wl, darkorchid: Al, darkred: Sl, darksalmon: Rl, darkseagreen: Cl, darkslateblue: Il, darkslategray: Pl, darkslategrey: Ml, darkturquoise: Bl, darkviolet: Dl, deeppink: Nl, deepskyblue: Fl, dimgray: Ll, dimgrey: Ul, dodgerblue: Ol, firebrick: kl, floralwhite: Gl, forestgreen: Hl, fuchsia: Xl, gainsboro: Vl, ghostwhite: zl, goldenrod: Wl, gold: jl, gray: Yl, green: $l, greenyellow: ql, grey: Kl, honeydew: Zl, hotpink: Ql, indianred: Jl, indigo: tc, ivory: ec, khaki: ic, lavenderblush: sc, lavender: rc, lawngreen: nc, lemonchiffon: oc, lightblue: ac, lightcoral: hc, lightcyan: lc, lightgoldenrodyellow: cc, lightgray: uc, lightgreen: dc, lightgrey: fc, lightpink: pc, lightsalmon: mc, lightseagreen: _c, lightskyblue: gc, lightslategray: xc, lightslategrey: vc, lightsteelblue: yc, lightyellow: bc, lime: Tc, limegreen: Ec, linen: wc, magenta: Ac, maroon: Sc, mediumaquamarine: Rc, mediumblue: Cc, mediumorchid: Ic, mediumpurple: Pc, mediumseagreen: Mc, mediumslateblue: Bc, mediumspringgreen: Dc, mediumturquoise: Nc, mediumvioletred: Fc, midnightblue: Lc, mintcream: Uc, mistyrose: Oc, moccasin: kc, navajowhite: Gc, navy: Hc, oldlace: Xc, olive: Vc, olivedrab: zc, orange: Wc, orangered: jc, orchid: Yc, palegoldenrod: $c, palegreen: qc, paleturquoise: Kc, palevioletred: Zc, papayawhip: Qc, peachpuff: Jc, peru: tu, pink: eu, plum: iu, powderblue: su, purple: ru, rebeccapurple: nu, red: ou, rosybrown: au, royalblue: hu, saddlebrown: lu, salmon: cu, sandybrown: uu, seagreen: du, seashell: fu, sienna: pu, silver: mu, skyblue: _u, slateblue: gu, slategray: xu, slategrey: vu, snow: yu, springgreen: bu, steelblue: Tu, tan: Eu, teal: wu, thistle: Au, tomato: Su, turquoise: Ru, violet: Cu, wheat: Iu, white: Pu, whitesmoke: Mu, yellow: Bu, yellowgreen: Du };
function _e(i, t) {
    if (t === void 0) { t = []; }
    return t[0] = (i >> 16 & 255) / 255, t[1] = (i >> 8 & 255) / 255, t[2] = (i & 255) / 255, t;
}
function Gs(i) { var t = i.toString(16); return t = "000000".substring(0, 6 - t.length) + t, "#".concat(t); }
function Bi(i) { if (typeof i == "string" && (i = Nu[i.toLowerCase()] || i, i[0] === "#" && (i = i.slice(1)), i.length === 3)) {
    var t = i[0], e = i[1], s = i[2];
    i = t + t + e + e + s + s;
} return parseInt(i, 16); }
function Fu(i) { return (i[0] * 255 << 16) + (i[1] * 255 << 8) + (i[2] * 255 | 0); }
function Lu() { var i = [], t = []; for (var s = 0; s < 32; s++)
    i[s] = s, t[s] = s; i[k.NORMAL_NPM] = k.NORMAL, i[k.ADD_NPM] = k.ADD, i[k.SCREEN_NPM] = k.SCREEN, t[k.NORMAL] = k.NORMAL_NPM, t[k.ADD] = k.ADD_NPM, t[k.SCREEN] = k.SCREEN_NPM; var e = []; return e.push(t), e.push(i), e; }
var Hs = Lu();
function Xs(i, t) { return Hs[t ? 1 : 0][i]; }
function Jn(i, t, e, s) { return e = e || new Float32Array(4), s || s === void 0 ? (e[0] = i[0] * t, e[1] = i[1] * t, e[2] = i[2] * t) : (e[0] = i[0], e[1] = i[1], e[2] = i[2]), e[3] = t, e; }
function Di(i, t) { if (t === 1)
    return (t * 255 << 24) + i; if (t === 0)
    return 0; var e = i >> 16 & 255, s = i >> 8 & 255, r = i & 255; return e = e * t + .5 | 0, s = s * t + .5 | 0, r = r * t + .5 | 0, (t * 255 << 24) + (e << 16) + (s << 8) + r; }
function Vs(i, t, e, s) { return e = e || new Float32Array(4), e[0] = (i >> 16 & 255) / 255, e[1] = (i >> 8 & 255) / 255, e[2] = (i & 255) / 255, (s || s === void 0) && (e[0] *= t, e[1] *= t, e[2] *= t), e[3] = t, e; }
function to(i, t) {
    if (t === void 0) { t = null; }
    var e = i * 6;
    if (t = t || new Uint16Array(e), t.length !== e)
        throw new Error("Out buffer length is incorrect, got ".concat(t.length, " and expected ").concat(e));
    for (var s = 0, r = 0; s < e; s += 6, r += 4)
        t[s + 0] = r + 0, t[s + 1] = r + 1, t[s + 2] = r + 2, t[s + 3] = r + 0, t[s + 4] = r + 2, t[s + 5] = r + 3;
    return t;
}
function Ni(i) { if (i.BYTES_PER_ELEMENT === 4)
    return i instanceof Float32Array ? "Float32Array" : i instanceof Uint32Array ? "Uint32Array" : "Int32Array"; if (i.BYTES_PER_ELEMENT === 2) {
    if (i instanceof Uint16Array)
        return "Uint16Array";
}
else if (i.BYTES_PER_ELEMENT === 1 && i instanceof Uint8Array)
    return "Uint8Array"; return null; }
var Uu = { Float32Array: Float32Array, Uint32Array: Uint32Array, Int32Array: Int32Array, Uint8Array: Uint8Array };
function Ou(i, t) { var e = 0, s = 0; var r = {}; for (var h = 0; h < i.length; h++)
    s += t[h], e += i[h].length; var n = new ArrayBuffer(e * 4); var o = null, a = 0; for (var h = 0; h < i.length; h++) {
    var l = t[h], c = i[h], u = Ni(c);
    r[u] || (r[u] = new Uu[u](n)), o = r[u];
    for (var d = 0; d < c.length; d++) {
        var f = (d / l | 0) * s + a, p = d % l;
        o[f + p] = c[d];
    }
    a += l;
} return new Float32Array(n); }
function qe(i) { return i += i === 0 ? 1 : 0, --i, i |= i >>> 1, i |= i >>> 2, i |= i >>> 4, i |= i >>> 8, i |= i >>> 16, i + 1; }
function zs(i) { return !(i & i - 1) && !!i; }
function Ws(i) { var t = (i > 65535 ? 1 : 0) << 4; i >>>= t; var e = (i > 255 ? 1 : 0) << 3; return i >>>= e, t |= e, e = (i > 15 ? 1 : 0) << 2, i >>>= e, t |= e, e = (i > 3 ? 1 : 0) << 1, i >>>= e, t |= e, t | i >> 1; }
function ge(i, t, e) { var s = i.length; var r; if (t >= s || e === 0)
    return; e = t + e > s ? s - t : e; var n = s - e; for (r = t; r < n; ++r)
    i[r] = i[r + e]; i.length = n; }
function xe(i) { return i === 0 ? 0 : i < 0 ? -1 : 1; }
var ku = 0;
function oe() { return ++ku; }
var js = {}, gt = Object.create(null), Et = Object.create(null);
function Gu() { var i; for (i in gt)
    gt[i].destroy(); for (i in Et)
    Et[i].destroy(); }
function Hu() { var i; for (i in gt)
    delete gt[i]; for (i in Et)
    delete Et[i]; }
var Ys = /** @class */ (function () {
    function Ys(t, e, s) {
        this.canvas = w.ADAPTER.createCanvas(), this.context = this.canvas.getContext("2d"), this.resolution = s || w.RESOLUTION, this.resize(t, e);
    }
    Ys.prototype.clear = function () { this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); };
    Ys.prototype.resize = function (t, e) { this.canvas.width = Math.round(t * this.resolution), this.canvas.height = Math.round(e * this.resolution); };
    Ys.prototype.destroy = function () { this.context = null, this.canvas = null; };
    Object.defineProperty(Ys.prototype, "width", {
        get: function () { return this.canvas.width; },
        set: function (t) { this.canvas.width = Math.round(t); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ys.prototype, "height", {
        get: function () { return this.canvas.height; },
        set: function (t) { this.canvas.height = Math.round(t); },
        enumerable: false,
        configurable: true
    });
    return Ys;
}());
function eo(i, t, e) { for (var s = 0, r = 4 * e * t; s < t; ++s, r += 4)
    if (i[r + 3] !== 0)
        return !1; return !0; }
function io(i, t, e, s, r) { var n = 4 * t; for (var o = s, a = s * n + 4 * e; o <= r; ++o, a += n)
    if (i[a + 3] !== 0)
        return !1; return !0; }
function so(i) { var t = i.width, e = i.height; var s = i.getContext("2d", { willReadFrequently: !0 }), n = s.getImageData(0, 0, t, e).data; var o = 0, a = e - 1, h = 0, l = t - 1; for (; o < e && eo(n, t, o);)
    ++o; if (o === e)
    return { width: 0, height: 0, data: null }; for (; eo(n, t, a);)
    --a; for (; io(n, t, h, o, a);)
    ++h; for (; io(n, t, l, o, a);)
    --l; return t = l - h + 1, e = a - o + 1, { width: t, height: e, data: s.getImageData(h, o, t, e) }; }
var ro = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;
function Xu(i) { var t = ro.exec(i); if (t)
    return { mediaType: t[1] ? t[1].toLowerCase() : void 0, subType: t[2] ? t[2].toLowerCase() : void 0, charset: t[3] ? t[3].toLowerCase() : void 0, encoding: t[4] ? t[4].toLowerCase() : void 0, data: t[5] }; }
var Fi;
function no(i, t) {
    if (t === void 0) { t = globalThis.location; }
    if (i.startsWith("data:"))
        return "";
    t = t || globalThis.location, Fi || (Fi = document.createElement("a")), Fi.href = i;
    var e = qn.parse(Fi.href), s = !e.port && t.port === "" || e.port === t.port;
    return e.hostname !== t.hostname || !s || e.protocol !== t.protocol ? "anonymous" : "";
}
function Kt(i, t) {
    if (t === void 0) { t = 1; }
    var e = w.RETINA_PREFIX.exec(i);
    return e ? parseFloat(e[1]) : t;
}
var Vu = { __proto__: null, isMobile: Nt, EventEmitter: Ce, earcut: Bs, url: qn, path: ft, sayHello: Yh, skipHello: jh, isWebGLSupported: Qn, hex2rgb: _e, hex2string: Gs, rgb2hex: Fu, string2hex: Bi, correctBlendMode: Xs, premultiplyBlendMode: Hs, premultiplyRgba: Jn, premultiplyTint: Di, premultiplyTintToRgba: Vs, createIndicesForQuads: to, getBufferType: Ni, interleaveTypedArrays: Ou, isPow2: zs, log2: Ws, nextPow2: qe, removeItems: ge, sign: xe, uid: oe, deprecation: _t, BaseTextureCache: Et, ProgramCache: js, TextureCache: gt, clearTextureCache: Hu, destroyTextureCache: Gu, CanvasRenderTarget: Ys, trimCanvas: so, decomposeDataUri: Xu, determineCrossOrigin: no, getResolutionOfUrl: Kt, DATA_URI: ro };
var Li = [];
function $s(i, t) { if (!i)
    return null; var e = ""; if (typeof i == "string") {
    var s = /\.(\w{3,4})(?:$|\?|#)/i.exec(i);
    s && (e = s[1].toLowerCase());
} for (var s = Li.length - 1; s >= 0; --s) {
    var r = Li[s];
    if (r.test && r.test(i, e))
        return new r(i, t);
} throw new Error("Unrecognized source type to auto-detect Resource"); }
var Me = /** @class */ (function () {
    function Me(t, e) {
        if (t === void 0) { t = 0; }
        if (e === void 0) { e = 0; }
        this._width = t, this._height = e, this.destroyed = !1, this.internal = !1, this.onResize = new Tt("setRealSize"), this.onUpdate = new Tt("update"), this.onError = new Tt("onError");
    }
    Me.prototype.bind = function (t) { this.onResize.add(t), this.onUpdate.add(t), this.onError.add(t), (this._width || this._height) && this.onResize.emit(this._width, this._height); };
    Me.prototype.unbind = function (t) { this.onResize.remove(t), this.onUpdate.remove(t), this.onError.remove(t); };
    Me.prototype.resize = function (t, e) { (t !== this._width || e !== this._height) && (this._width = t, this._height = e, this.onResize.emit(t, e)); };
    Object.defineProperty(Me.prototype, "valid", {
        get: function () { return !!this._width && !!this._height; },
        enumerable: false,
        configurable: true
    });
    Me.prototype.update = function () { this.destroyed || this.onUpdate.emit(); };
    Me.prototype.load = function () { return Promise.resolve(this); };
    Object.defineProperty(Me.prototype, "width", {
        get: function () { return this._width; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Me.prototype, "height", {
        get: function () { return this._height; },
        enumerable: false,
        configurable: true
    });
    Me.prototype.style = function (t, e, s) { return !1; };
    Me.prototype.dispose = function () { };
    Me.prototype.destroy = function () { this.destroyed || (this.destroyed = !0, this.dispose(), this.onError.removeAll(), this.onError = null, this.onResize.removeAll(), this.onResize = null, this.onUpdate.removeAll(), this.onUpdate = null); };
    Me.test = function (t, e) { return !1; };
    return Me;
}());
var Be = /** @class */ (function (_super) {
    __extends(Be, _super);
    function Be(t, e) {
        var _this = this;
        var _b = e || {}, s = _b.width, r = _b.height;
        if (!s || !r)
            throw new Error("BufferResource width or height invalid");
        _this = _super.call(this, s, r) || this, _this.data = t;
        return _this;
    }
    Be.prototype.upload = function (t, e, s) { var r = t.gl; r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === At.UNPACK); var n = e.realWidth, o = e.realHeight; return s.width === n && s.height === o ? r.texSubImage2D(e.target, 0, 0, 0, n, o, e.format, s.type, this.data) : (s.width = n, s.height = o, r.texImage2D(e.target, 0, s.internalFormat, n, o, 0, e.format, s.type, this.data)), !0; };
    Be.prototype.dispose = function () { this.data = null; };
    Be.test = function (t) { return t instanceof Float32Array || t instanceof Uint8Array || t instanceof Uint32Array; };
    return Be;
}(Me));
var zu = { scaleMode: Vt.NEAREST, format: C.RGBA, alphaMode: At.NPM }, Ke = /** @class */ (function (_super) {
    __extends(Ke, _super);
    function Ke(i, t) {
        if (i === void 0) { i = null; }
        if (t === void 0) { t = null; }
        var _this = this;
        _this = _super.call(this) || this, t = t || {};
        var e = t.alphaMode, s = t.mipmap, r = t.anisotropicLevel, n = t.scaleMode, o = t.width, a = t.height, h = t.wrapMode, l = t.format, c = t.type, u = t.target, d = t.resolution, f = t.resourceOptions;
        i && !(i instanceof Me) && (i = $s(i, f), i.internal = !0), _this.resolution = d || w.RESOLUTION, _this.width = Math.round((o || 0) * _this.resolution) / _this.resolution, _this.height = Math.round((a || 0) * _this.resolution) / _this.resolution, _this._mipmap = s != null ? s : w.MIPMAP_TEXTURES, _this.anisotropicLevel = r != null ? r : w.ANISOTROPIC_LEVEL, _this._wrapMode = h || w.WRAP_MODE, _this._scaleMode = n != null ? n : w.SCALE_MODE, _this.format = l || C.RGBA, _this.type = c || O.UNSIGNED_BYTE, _this.target = u || ce.TEXTURE_2D, _this.alphaMode = e != null ? e : At.UNPACK, _this.uid = oe(), _this.touched = 0, _this.isPowerOfTwo = !1, _this._refreshPOT(), _this._glTextures = {}, _this.dirtyId = 0, _this.dirtyStyleId = 0, _this.cacheId = null, _this.valid = o > 0 && a > 0, _this.textureCacheIds = [], _this.destroyed = !1, _this.resource = null, _this._batchEnabled = 0, _this._batchLocation = 0, _this.parentTextureArray = null, _this.setResource(i);
        return _this;
    }
    Object.defineProperty(Ke.prototype, "realWidth", {
        get: function () { return Math.round(this.width * this.resolution); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ke.prototype, "realHeight", {
        get: function () { return Math.round(this.height * this.resolution); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ke.prototype, "mipmap", {
        get: function () { return this._mipmap; },
        set: function (i) { this._mipmap !== i && (this._mipmap = i, this.dirtyStyleId++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ke.prototype, "scaleMode", {
        get: function () { return this._scaleMode; },
        set: function (i) { this._scaleMode !== i && (this._scaleMode = i, this.dirtyStyleId++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ke.prototype, "wrapMode", {
        get: function () { return this._wrapMode; },
        set: function (i) { this._wrapMode !== i && (this._wrapMode = i, this.dirtyStyleId++); },
        enumerable: false,
        configurable: true
    });
    Ke.prototype.setStyle = function (i, t) { var e; return i !== void 0 && i !== this.scaleMode && (this.scaleMode = i, e = !0), t !== void 0 && t !== this.mipmap && (this.mipmap = t, e = !0), e && this.dirtyStyleId++, this; };
    Ke.prototype.setSize = function (i, t, e) { return e = e || this.resolution, this.setRealSize(i * e, t * e, e); };
    Ke.prototype.setRealSize = function (i, t, e) { return this.resolution = e || this.resolution, this.width = Math.round(i) / this.resolution, this.height = Math.round(t) / this.resolution, this._refreshPOT(), this.update(), this; };
    Ke.prototype._refreshPOT = function () { this.isPowerOfTwo = zs(this.realWidth) && zs(this.realHeight); };
    Ke.prototype.setResolution = function (i) { var t = this.resolution; return t === i ? this : (this.resolution = i, this.valid && (this.width = Math.round(this.width * t) / i, this.height = Math.round(this.height * t) / i, this.emit("update", this)), this._refreshPOT(), this); };
    Ke.prototype.setResource = function (i) { if (this.resource === i)
        return this; if (this.resource)
        throw new Error("Resource can be set only once"); return i.bind(this), this.resource = i, this; };
    Ke.prototype.update = function () { this.valid ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this)) : this.width > 0 && this.height > 0 && (this.valid = !0, this.emit("loaded", this), this.emit("update", this)); };
    Ke.prototype.onError = function (i) { this.emit("error", this, i); };
    Ke.prototype.destroy = function () { this.resource && (this.resource.unbind(this), this.resource.internal && this.resource.destroy(), this.resource = null), this.cacheId && (delete Et[this.cacheId], delete gt[this.cacheId], this.cacheId = null), this.dispose(), Ke.removeFromCache(this), this.textureCacheIds = null, this.destroyed = !0; };
    Ke.prototype.dispose = function () { this.emit("dispose", this); };
    Ke.prototype.castToBaseTexture = function () { return this; };
    Ke.from = function (i, t, e) {
        if (e === void 0) { e = w.STRICT_TEXTURE_CACHE; }
        var s = typeof i == "string";
        var r = null;
        if (s)
            r = i;
        else {
            if (!i._pixiId) {
                var o = (t == null ? void 0 : t.pixiIdPrefix) || "pixiid";
                i._pixiId = "".concat(o, "_").concat(oe());
            }
            r = i._pixiId;
        }
        var n = Et[r];
        if (s && e && !n)
            throw new Error("The cacheId \"".concat(r, "\" does not exist in BaseTextureCache."));
        return n || (n = new Ke(i, t), n.cacheId = r, Ke.addToCache(n, r)), n;
    };
    Ke.fromBuffer = function (i, t, e, s) { i = i || new Float32Array(t * e * 4); var r = new Be(i, { width: t, height: e }), n = i instanceof Float32Array ? O.FLOAT : O.UNSIGNED_BYTE; return new Ke(r, Object.assign({}, zu, s || { width: t, height: e, type: n })); };
    Ke.addToCache = function (i, t) { t && (i.textureCacheIds.includes(t) || i.textureCacheIds.push(t), Et[t] && Et[t] !== i && console.warn("BaseTexture added to the cache with an id [".concat(t, "] that already had an entry")), Et[t] = i); };
    Ke.removeFromCache = function (i) { if (typeof i == "string") {
        var t = Et[i];
        if (t) {
            var e = t.textureCacheIds.indexOf(i);
            return e > -1 && t.textureCacheIds.splice(e, 1), delete Et[i], t;
        }
    }
    else if (i != null && i.textureCacheIds) {
        for (var t = 0; t < i.textureCacheIds.length; ++t)
            delete Et[i.textureCacheIds[t]];
        return i.textureCacheIds.length = 0, i;
    } return null; };
    return Ke;
}(Ce));
var W = Ke;
W._globalBatch = 0;
var qs = /** @class */ (function (_super) {
    __extends(qs, _super);
    function qs(t, e) {
        var _this = this;
        var _b = e || {}, s = _b.width, r = _b.height;
        _this = _super.call(this, s, r) || this, _this.items = [], _this.itemDirtyIds = [];
        for (var n = 0; n < t; n++) {
            var o = new W;
            _this.items.push(o), _this.itemDirtyIds.push(-2);
        }
        _this.length = t, _this._load = null, _this.baseTexture = null;
        return _this;
    }
    qs.prototype.initFromArray = function (t, e) { for (var s = 0; s < this.length; s++)
        !t[s] || (t[s].castToBaseTexture ? this.addBaseTextureAt(t[s].castToBaseTexture(), s) : t[s] instanceof Me ? this.addResourceAt(t[s], s) : this.addResourceAt($s(t[s], e), s)); };
    qs.prototype.dispose = function () { for (var t = 0, e = this.length; t < e; t++)
        this.items[t].destroy(); this.items = null, this.itemDirtyIds = null, this._load = null; };
    qs.prototype.addResourceAt = function (t, e) { if (!this.items[e])
        throw new Error("Index ".concat(e, " is out of bounds")); return t.valid && !this.valid && this.resize(t.width, t.height), this.items[e].setResource(t), this; };
    qs.prototype.bind = function (t) { if (this.baseTexture !== null)
        throw new Error("Only one base texture per TextureArray is allowed"); _super.prototype.bind.call(this, t); for (var e = 0; e < this.length; e++)
        this.items[e].parentTextureArray = t, this.items[e].on("update", t.update, t); };
    qs.prototype.unbind = function (t) { _super.prototype.unbind.call(this, t); for (var e = 0; e < this.length; e++)
        this.items[e].parentTextureArray = null, this.items[e].off("update", t.update, t); };
    qs.prototype.load = function () {
        var _this = this;
        if (this._load)
            return this._load;
        var e = this.items.map(function (s) { return s.resource; }).filter(function (s) { return s; }).map(function (s) { return s.load(); });
        return this._load = Promise.all(e).then(function () { var _b = _this.items[0], s = _b.realWidth, r = _b.realHeight; return _this.resize(s, r), Promise.resolve(_this); }), this._load;
    };
    return qs;
}(Me));
var oo = /** @class */ (function (_super) {
    __extends(oo, _super);
    function oo(t, e) {
        var _this = this;
        var _b = e || {}, s = _b.width, r = _b.height;
        var n, o;
        Array.isArray(t) ? (n = t, o = t.length) : o = t, _this = _super.call(this, o, { width: s, height: r }) || this, n && _this.initFromArray(n, e);
        return _this;
    }
    oo.prototype.addBaseTextureAt = function (t, e) { if (t.resource)
        this.addResourceAt(t.resource, e);
    else
        throw new Error("ArrayResource does not support RenderTexture"); return this; };
    oo.prototype.bind = function (t) { _super.prototype.bind.call(this, t), t.target = ce.TEXTURE_2D_ARRAY; };
    oo.prototype.upload = function (t, e, s) { var _b = this, r = _b.length, n = _b.itemDirtyIds, o = _b.items, a = t.gl; s.dirtyId < 0 && a.texImage3D(a.TEXTURE_2D_ARRAY, 0, s.internalFormat, this._width, this._height, r, 0, e.format, s.type, null); for (var h = 0; h < r; h++) {
        var l = o[h];
        n[h] < l.dirtyId && (n[h] = l.dirtyId, l.valid && a.texSubImage3D(a.TEXTURE_2D_ARRAY, 0, 0, 0, h, l.resource.width, l.resource.height, 1, e.format, s.type, l.resource.source));
    } return !0; };
    return oo;
}(qs));
var Zt = /** @class */ (function (_super) {
    __extends(Zt, _super);
    function Zt(t) {
        var _this = this;
        var e = t, s = e.naturalWidth || e.videoWidth || e.width, r = e.naturalHeight || e.videoHeight || e.height;
        _this = _super.call(this, s, r) || this, _this.source = t, _this.noSubImage = !1;
        return _this;
    }
    Zt.crossOrigin = function (t, e, s) { s === void 0 && !e.startsWith("data:") ? t.crossOrigin = no(e) : s !== !1 && (t.crossOrigin = typeof s == "string" ? s : "anonymous"); };
    Zt.prototype.upload = function (t, e, s, r) { var n = t.gl, o = e.realWidth, a = e.realHeight; if (r = r || this.source, typeof HTMLImageElement != "undefined" && r instanceof HTMLImageElement) {
        if (!r.complete || r.naturalWidth === 0)
            return !1;
    }
    else if (typeof HTMLVideoElement != "undefined" && r instanceof HTMLVideoElement && r.readyState <= 1 && r.buffered.length === 0)
        return !1; return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === At.UNPACK), !this.noSubImage && e.target === n.TEXTURE_2D && s.width === o && s.height === a ? n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, e.format, s.type, r) : (s.width = o, s.height = a, n.texImage2D(e.target, 0, s.internalFormat, e.format, s.type, r)), !0; };
    Zt.prototype.update = function () { if (this.destroyed)
        return; var t = this.source, e = t.naturalWidth || t.videoWidth || t.width, s = t.naturalHeight || t.videoHeight || t.height; this.resize(e, s), _super.prototype.update.call(this); };
    Zt.prototype.dispose = function () { this.source = null; };
    return Zt;
}(Me));
var ao = /** @class */ (function (_super) {
    __extends(ao, _super);
    function ao(t) {
        return _super.call(this, t) || this;
    }
    ao.test = function (t) { var e = globalThis.OffscreenCanvas; return e && t instanceof e ? !0 : globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement; };
    return ao;
}(Zt));
var Ze = /** @class */ (function (_super) {
    __extends(Ze, _super);
    function Ze(i, t) {
        var _this = this;
        var _b = t || {}, e = _b.width, s = _b.height, r = _b.autoLoad, n = _b.linkBaseTexture;
        if (i && i.length !== Ze.SIDES)
            throw new Error("Invalid length. Got ".concat(i.length, ", expected 6"));
        _this = _super.call(this, 6, { width: e, height: s }) || this;
        for (var o = 0; o < Ze.SIDES; o++)
            _this.items[o].target = ce.TEXTURE_CUBE_MAP_POSITIVE_X + o;
        _this.linkBaseTexture = n !== !1, i && _this.initFromArray(i, t), r !== !1 && _this.load();
        return _this;
    }
    Ze.prototype.bind = function (i) { _super.prototype.bind.call(this, i), i.target = ce.TEXTURE_CUBE_MAP; };
    Ze.prototype.addBaseTextureAt = function (i, t, e) { if (e === void 0 && (e = this.linkBaseTexture), !this.items[t])
        throw new Error("Index ".concat(t, " is out of bounds")); if (!this.linkBaseTexture || i.parentTextureArray || Object.keys(i._glTextures).length > 0)
        if (i.resource)
            this.addResourceAt(i.resource, t);
        else
            throw new Error("CubeResource does not support copying of renderTexture.");
    else
        i.target = ce.TEXTURE_CUBE_MAP_POSITIVE_X + t, i.parentTextureArray = this.baseTexture, this.items[t] = i; return i.valid && !this.valid && this.resize(i.realWidth, i.realHeight), this.items[t] = i, this; };
    Ze.prototype.upload = function (i, t, e) { var s = this.itemDirtyIds; for (var r = 0; r < Ze.SIDES; r++) {
        var n = this.items[r];
        (s[r] < n.dirtyId || e.dirtyId < t.dirtyId) && (n.valid && n.resource ? (n.resource.upload(i, n, e), s[r] = n.dirtyId) : s[r] < -1 && (i.gl.texImage2D(n.target, 0, e.internalFormat, t.realWidth, t.realHeight, 0, t.format, e.type, null), s[r] = -1));
    } return !0; };
    Ze.test = function (i) { return Array.isArray(i) && i.length === Ze.SIDES; };
    return Ze;
}(qs));
var Ks = Ze;
Ks.SIDES = 6;
var Zs = /** @class */ (function (_super) {
    __extends(Zs, _super);
    function Zs(t, e) {
        var _this = this;
        var s;
        if (e = e || {}, typeof t == "string") {
            var r = new Image;
            Zt.crossOrigin(r, t, e.crossorigin), r.src = t, t = r;
        }
        _this = _super.call(this, t) || this, !t.complete && !!_this._width && !!_this._height && (_this._width = 0, _this._height = 0), _this.url = t.src, _this._process = null, _this.preserveBitmap = !1, _this.createBitmap = ((s = e.createBitmap) != null ? s : w.CREATE_IMAGE_BITMAP) && !!globalThis.createImageBitmap, _this.alphaMode = typeof e.alphaMode == "number" ? e.alphaMode : null, _this.bitmap = null, _this._load = null, e.autoLoad !== !1 && _this.load();
        return _this;
    }
    Zs.prototype.load = function (t) {
        var _this = this;
        return this._load ? this._load : (t !== void 0 && (this.createBitmap = t), this._load = new Promise(function (e, s) { var r = _this.source; _this.url = r.src; var n = function () { _this.destroyed || (r.onload = null, r.onerror = null, _this.resize(r.width, r.height), _this._load = null, _this.createBitmap ? e(_this.process()) : e(_this)); }; r.complete && r.src ? n() : (r.onload = n, r.onerror = function (o) { s(o), _this.onError.emit(o); }); }), this._load);
    };
    Zs.prototype.process = function () {
        var _this = this;
        var t = this.source;
        if (this._process !== null)
            return this._process;
        if (this.bitmap !== null || !globalThis.createImageBitmap)
            return Promise.resolve(this);
        var e = globalThis.createImageBitmap, s = !t.crossOrigin || t.crossOrigin === "anonymous";
        return this._process = fetch(t.src, { mode: s ? "cors" : "no-cors" }).then(function (r) { return r.blob(); }).then(function (r) { return e(r, 0, 0, t.width, t.height, { premultiplyAlpha: _this.alphaMode === null || _this.alphaMode === At.UNPACK ? "premultiply" : "none" }); }).then(function (r) { return _this.destroyed ? Promise.reject() : (_this.bitmap = r, _this.update(), _this._process = null, Promise.resolve(_this)); }), this._process;
    };
    Zs.prototype.upload = function (t, e, s) { if (typeof this.alphaMode == "number" && (e.alphaMode = this.alphaMode), !this.createBitmap)
        return _super.prototype.upload.call(this, t, e, s); if (!this.bitmap && (this.process(), !this.bitmap))
        return !1; if (_super.prototype.upload.call(this, t, e, s, this.bitmap), !this.preserveBitmap) {
        var r = !0;
        var n = e._glTextures;
        for (var o in n) {
            var a = n[o];
            if (a !== s && a.dirtyId !== e.dirtyId) {
                r = !1;
                break;
            }
        }
        r && (this.bitmap.close && this.bitmap.close(), this.bitmap = null);
    } return !0; };
    Zs.prototype.dispose = function () { this.source.onload = null, this.source.onerror = null, _super.prototype.dispose.call(this), this.bitmap && (this.bitmap.close(), this.bitmap = null), this._process = null, this._load = null; };
    Zs.test = function (t) { return typeof HTMLImageElement != "undefined" && (typeof t == "string" || t instanceof HTMLImageElement); };
    return Zs;
}(Zt));
var Ui = /** @class */ (function (_super) {
    __extends(Ui, _super);
    function Ui(i, t) {
        var _this = this;
        t = t || {}, _this = _super.call(this, w.ADAPTER.createCanvas()) || this, _this._width = 0, _this._height = 0, _this.svg = i, _this.scale = t.scale || 1, _this._overrideWidth = t.width, _this._overrideHeight = t.height, _this._resolve = null, _this._crossorigin = t.crossorigin, _this._load = null, t.autoLoad !== !1 && _this.load();
        return _this;
    }
    Ui.prototype.load = function () {
        var _this = this;
        return this._load ? this._load : (this._load = new Promise(function (i) { if (_this._resolve = function () { _this.resize(_this.source.width, _this.source.height), i(_this); }, Ui.SVG_XML.test(_this.svg.trim())) {
            if (!btoa)
                throw new Error("Your browser doesn't support base64 conversions.");
            _this.svg = "data:image/svg+xml;base64,".concat(btoa(unescape(encodeURIComponent(_this.svg))));
        } _this._loadSvg(); }), this._load);
    };
    Ui.prototype._loadSvg = function () {
        var _this = this;
        var i = new Image;
        Zt.crossOrigin(i, this.svg, this._crossorigin), i.src = this.svg, i.onerror = function (t) { !_this._resolve || (i.onerror = null, _this.onError.emit(t)); }, i.onload = function () { if (!_this._resolve)
            return; var t = i.width, e = i.height; if (!t || !e)
            throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them."); var s = t * _this.scale, r = e * _this.scale; (_this._overrideWidth || _this._overrideHeight) && (s = _this._overrideWidth || _this._overrideHeight / e * t, r = _this._overrideHeight || _this._overrideWidth / t * e), s = Math.round(s), r = Math.round(r); var n = _this.source; n.width = s, n.height = r, n._pixiId = "canvas_".concat(oe()), n.getContext("2d").drawImage(i, 0, 0, t, e, 0, 0, s, r), _this._resolve(), _this._resolve = null; };
    };
    Ui.getSize = function (i) { var t = Ui.SVG_SIZE.exec(i), e = {}; return t && (e[t[1]] = Math.round(parseFloat(t[3])), e[t[5]] = Math.round(parseFloat(t[7]))), e; };
    Ui.prototype.dispose = function () { _super.prototype.dispose.call(this), this._resolve = null, this._crossorigin = null; };
    Ui.test = function (i, t) { return t === "svg" || typeof i == "string" && i.startsWith("data:image/svg+xml") || typeof i == "string" && Ui.SVG_XML.test(i); };
    return Ui;
}(Zt));
var De = Ui;
De.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m, De.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;
var Qs = /** @class */ (function (_super) {
    __extends(Qs, _super);
    function Qs(i, t) {
        var _this = this;
        if (t = t || {}, !(i instanceof HTMLVideoElement)) {
            var e = document.createElement("video");
            e.setAttribute("preload", "auto"), e.setAttribute("webkit-playsinline", ""), e.setAttribute("playsinline", ""), typeof i == "string" && (i = [i]);
            var s = i[0].src || i[0];
            Zt.crossOrigin(e, s, t.crossorigin);
            for (var r = 0; r < i.length; ++r) {
                var n = document.createElement("source");
                var _b = i[r], o = _b.src, a = _b.mime;
                o = o || i[r];
                var h = o.split("?").shift().toLowerCase(), l = h.slice(h.lastIndexOf(".") + 1);
                a = a || Qs.MIME_TYPES[l] || "video/".concat(l), n.src = o, n.type = a, e.appendChild(n);
            }
            i = e;
        }
        _this = _super.call(this, i) || this, _this.noSubImage = !0, _this._autoUpdate = !0, _this._isConnectedToTicker = !1, _this._updateFPS = t.updateFPS || 0, _this._msToNextUpdate = 0, _this.autoPlay = t.autoPlay !== !1, _this._load = null, _this._resolve = null, _this._onCanPlay = _this._onCanPlay.bind(_this), _this._onError = _this._onError.bind(_this), t.autoLoad !== !1 && _this.load();
        return _this;
    }
    Qs.prototype.update = function (i) {
        if (i === void 0) { i = 0; }
        if (!this.destroyed) {
            var t = Q.shared.elapsedMS * this.source.playbackRate;
            this._msToNextUpdate = Math.floor(this._msToNextUpdate - t), (!this._updateFPS || this._msToNextUpdate <= 0) && (_super.prototype.update.call(this), this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0);
        }
    };
    Qs.prototype.load = function () {
        var _this = this;
        if (this._load)
            return this._load;
        var i = this.source;
        return (i.readyState === i.HAVE_ENOUGH_DATA || i.readyState === i.HAVE_FUTURE_DATA) && i.width && i.height && (i.complete = !0), i.addEventListener("play", this._onPlayStart.bind(this)), i.addEventListener("pause", this._onPlayStop.bind(this)), this._isSourceReady() ? this._onCanPlay() : (i.addEventListener("canplay", this._onCanPlay), i.addEventListener("canplaythrough", this._onCanPlay), i.addEventListener("error", this._onError, !0)), this._load = new Promise(function (t) { _this.valid ? t(_this) : (_this._resolve = t, i.load()); }), this._load;
    };
    Qs.prototype._onError = function (i) { this.source.removeEventListener("error", this._onError, !0), this.onError.emit(i); };
    Qs.prototype._isSourcePlaying = function () { var i = this.source; return !i.paused && !i.ended && this._isSourceReady(); };
    Qs.prototype._isSourceReady = function () { return this.source.readyState > 2; };
    Qs.prototype._onPlayStart = function () { this.valid || this._onCanPlay(), this.autoUpdate && !this._isConnectedToTicker && (Q.shared.add(this.update, this), this._isConnectedToTicker = !0); };
    Qs.prototype._onPlayStop = function () { this._isConnectedToTicker && (Q.shared.remove(this.update, this), this._isConnectedToTicker = !1); };
    Qs.prototype._onCanPlay = function () { var i = this.source; i.removeEventListener("canplay", this._onCanPlay), i.removeEventListener("canplaythrough", this._onCanPlay); var t = this.valid; this.resize(i.videoWidth, i.videoHeight), !t && this._resolve && (this._resolve(this), this._resolve = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && i.play(); };
    Qs.prototype.dispose = function () { this._isConnectedToTicker && (Q.shared.remove(this.update, this), this._isConnectedToTicker = !1); var i = this.source; i && (i.removeEventListener("error", this._onError, !0), i.pause(), i.src = "", i.load()), _super.prototype.dispose.call(this); };
    Object.defineProperty(Qs.prototype, "autoUpdate", {
        get: function () { return this._autoUpdate; },
        set: function (i) { i !== this._autoUpdate && (this._autoUpdate = i, !this._autoUpdate && this._isConnectedToTicker ? (Q.shared.remove(this.update, this), this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._isSourcePlaying() && (Q.shared.add(this.update, this), this._isConnectedToTicker = !0)); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Qs.prototype, "updateFPS", {
        get: function () { return this._updateFPS; },
        set: function (i) { i !== this._updateFPS && (this._updateFPS = i); },
        enumerable: false,
        configurable: true
    });
    Qs.test = function (i, t) { return globalThis.HTMLVideoElement && i instanceof HTMLVideoElement || Qs.TYPES.includes(t); };
    return Qs;
}(Zt));
var Oi = Qs;
Oi.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"], Oi.MIME_TYPES = { ogv: "video/ogg", mov: "video/quicktime", m4v: "video/mp4" };
var Se = /** @class */ (function (_super) {
    __extends(Se, _super);
    function Se(t, e) {
        var _this = this;
        var r;
        var s = function () {
            var n = [];
            for (var _b = 0; _b < arguments.length; _b++) {
                n[_b] = arguments[_b];
            }
            _this = _super.apply(this, n) || this;
        };
        e = e || {}, typeof t == "string" ? (s(Se.EMPTY), _this.url = t) : (s(t), _this.url = null), _this.crossOrigin = (r = e.crossOrigin) != null ? r : !0, _this.alphaMode = typeof e.alphaMode == "number" ? e.alphaMode : null, _this._load = null, e.autoLoad !== !1 && _this.load();
        return _this;
    }
    Se.prototype.load = function () {
        var _this = this;
        return this._load ? this._load : (this._load = new Promise(function (t, e) { return __awaiter(_this, void 0, void 0, function () { var s, r, n, s_1; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (this.url === null) {
                        t(this);
                        return [2 /*return*/];
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, w.ADAPTER.fetch(this.url, { mode: this.crossOrigin ? "cors" : "no-cors" })];
                case 2:
                    s = _b.sent();
                    if (this.destroyed)
                        return [2 /*return*/];
                    return [4 /*yield*/, s.blob()];
                case 3:
                    r = _b.sent();
                    if (this.destroyed)
                        return [2 /*return*/];
                    return [4 /*yield*/, createImageBitmap(r, { premultiplyAlpha: this.alphaMode === null || this.alphaMode === At.UNPACK ? "premultiply" : "none" })];
                case 4:
                    n = _b.sent();
                    if (this.destroyed)
                        return [2 /*return*/];
                    this.source = n, this.update(), t(this);
                    return [3 /*break*/, 6];
                case 5:
                    s_1 = _b.sent();
                    if (this.destroyed)
                        return [2 /*return*/];
                    e(s_1), this.onError.emit(s_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        }); }); }), this._load);
    };
    Se.prototype.upload = function (t, e, s) { return this.source instanceof ImageBitmap ? (typeof this.alphaMode == "number" && (e.alphaMode = this.alphaMode), _super.prototype.upload.call(this, t, e, s)) : (this.load(), !1); };
    Se.prototype.dispose = function () { this.source instanceof ImageBitmap && this.source.close(), _super.prototype.dispose.call(this), this._load = null; };
    Se.test = function (t) { return !!globalThis.createImageBitmap && typeof ImageBitmap != "undefined" && (typeof t == "string" || t instanceof ImageBitmap); };
    Object.defineProperty(Se, "EMPTY", {
        get: function () { var t; return Se._EMPTY = (t = Se._EMPTY) != null ? t : w.ADAPTER.createCanvas(0, 0), Se._EMPTY; },
        enumerable: false,
        configurable: true
    });
    return Se;
}(Zt));
Li.push(Se, Zs, ao, Oi, De, Be, Ks, oo);
var Wu = /** @class */ (function (_super) {
    __extends(Wu, _super);
    function Wu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wu.prototype.upload = function (t, e, s) { var r = t.gl; r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === At.UNPACK); var n = e.realWidth, o = e.realHeight; return s.width === n && s.height === o ? r.texSubImage2D(e.target, 0, 0, 0, n, o, e.format, s.type, this.data) : (s.width = n, s.height = o, r.texImage2D(e.target, 0, s.internalFormat, n, o, 0, e.format, s.type, this.data)), !0; };
    return Wu;
}(Be));
var ki = /** @class */ (function () {
    function ki(t, e) {
        this.width = Math.round(t || 100), this.height = Math.round(e || 100), this.stencil = !1, this.depth = !1, this.dirtyId = 0, this.dirtyFormat = 0, this.dirtySize = 0, this.depthTexture = null, this.colorTextures = [], this.glFramebuffers = {}, this.disposeRunner = new Tt("disposeFramebuffer"), this.multisample = nt.NONE;
    }
    Object.defineProperty(ki.prototype, "colorTexture", {
        get: function () { return this.colorTextures[0]; },
        enumerable: false,
        configurable: true
    });
    ki.prototype.addColorTexture = function (t, e) {
        if (t === void 0) { t = 0; }
        return this.colorTextures[t] = e || new W(null, { scaleMode: Vt.NEAREST, resolution: 1, mipmap: Mt.OFF, width: this.width, height: this.height }), this.dirtyId++, this.dirtyFormat++, this;
    };
    ki.prototype.addDepthTexture = function (t) { return this.depthTexture = t || new W(new Wu(null, { width: this.width, height: this.height }), { scaleMode: Vt.NEAREST, resolution: 1, width: this.width, height: this.height, mipmap: Mt.OFF, format: C.DEPTH_COMPONENT, type: O.UNSIGNED_SHORT }), this.dirtyId++, this.dirtyFormat++, this; };
    ki.prototype.enableDepth = function () { return this.depth = !0, this.dirtyId++, this.dirtyFormat++, this; };
    ki.prototype.enableStencil = function () { return this.stencil = !0, this.dirtyId++, this.dirtyFormat++, this; };
    ki.prototype.resize = function (t, e) { if (t = Math.round(t), e = Math.round(e), !(t === this.width && e === this.height)) {
        this.width = t, this.height = e, this.dirtyId++, this.dirtySize++;
        for (var s = 0; s < this.colorTextures.length; s++) {
            var r = this.colorTextures[s], n = r.resolution;
            r.setSize(t / n, e / n);
        }
        if (this.depthTexture) {
            var s = this.depthTexture.resolution;
            this.depthTexture.setSize(t / s, e / s);
        }
    } };
    ki.prototype.dispose = function () { this.disposeRunner.emit(this, !1); };
    ki.prototype.destroyDepthTexture = function () { this.depthTexture && (this.depthTexture.destroy(), this.depthTexture = null, ++this.dirtyId, ++this.dirtyFormat); };
    return ki;
}());
var Js = /** @class */ (function (_super) {
    __extends(Js, _super);
    function Js(t) {
        if (t === void 0) { t = {}; }
        var _this = this;
        var e;
        if (typeof t == "number") {
            var s = arguments[0], r = arguments[1], n = arguments[2], o = arguments[3];
            t = { width: s, height: r, scaleMode: n, resolution: o };
        }
        t.width = t.width || 100, t.height = t.height || 100, (e = t.multisample) != null || (t.multisample = nt.NONE), _this = _super.call(this, null, t) || this, _this.mipmap = Mt.OFF, _this.valid = !0, _this.clearColor = [0, 0, 0, 0], _this.framebuffer = new ki(_this.realWidth, _this.realHeight).addColorTexture(0, _this), _this.framebuffer.multisample = t.multisample, _this.maskStack = [], _this.filterStack = [{}];
        return _this;
    }
    Js.prototype.resize = function (t, e) { this.framebuffer.resize(t * this.resolution, e * this.resolution), this.setRealSize(this.framebuffer.width, this.framebuffer.height); };
    Js.prototype.dispose = function () { this.framebuffer.dispose(), _super.prototype.dispose.call(this); };
    Js.prototype.destroy = function () { _super.prototype.destroy.call(this), this.framebuffer.destroyDepthTexture(), this.framebuffer = null; };
    return Js;
}(W));
var tr = /** @class */ (function () {
    function tr() {
        this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsFloat32 = new Float32Array(8);
    }
    tr.prototype.set = function (t, e, s) { var r = e.width, n = e.height; if (s) {
        var o = t.width / 2 / r, a = t.height / 2 / n, h = t.x / r + o, l = t.y / n + a;
        s = tt.add(s, tt.NW), this.x0 = h + o * tt.uX(s), this.y0 = l + a * tt.uY(s), s = tt.add(s, 2), this.x1 = h + o * tt.uX(s), this.y1 = l + a * tt.uY(s), s = tt.add(s, 2), this.x2 = h + o * tt.uX(s), this.y2 = l + a * tt.uY(s), s = tt.add(s, 2), this.x3 = h + o * tt.uX(s), this.y3 = l + a * tt.uY(s);
    }
    else
        this.x0 = t.x / r, this.y0 = t.y / n, this.x1 = (t.x + t.width) / r, this.y1 = t.y / n, this.x2 = (t.x + t.width) / r, this.y2 = (t.y + t.height) / n, this.x3 = t.x / r, this.y3 = (t.y + t.height) / n; this.uvsFloat32[0] = this.x0, this.uvsFloat32[1] = this.y0, this.uvsFloat32[2] = this.x1, this.uvsFloat32[3] = this.y1, this.uvsFloat32[4] = this.x2, this.uvsFloat32[5] = this.y2, this.uvsFloat32[6] = this.x3, this.uvsFloat32[7] = this.y3; };
    tr.prototype.toString = function () { return "[@pixi/core:TextureUvs x0=".concat(this.x0, " y0=").concat(this.y0, " x1=").concat(this.x1, " y1=").concat(this.y1, " x2=").concat(this.x2, " y2=").concat(this.y2, " x3=").concat(this.x3, " y3=").concat(this.y3, "]"); };
    return tr;
}());
var ho = new tr;
function Gi(i) { i.destroy = function () { }, i.on = function () { }, i.once = function () { }, i.emit = function () { }; }
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B(t, e, s, r, n, o) {
        var _this = this;
        if (_this = _super.call(this) || this, _this.noFrame = !1, e || (_this.noFrame = !0, e = new V(0, 0, 1, 1)), t instanceof B && (t = t.baseTexture), _this.baseTexture = t, _this._frame = e, _this.trim = r, _this.valid = !1, _this._uvs = ho, _this.uvMatrix = null, _this.orig = s || e, _this._rotate = Number(n || 0), n === !0)
            _this._rotate = 2;
        else if (_this._rotate % 2 !== 0)
            throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
        _this.defaultAnchor = o ? new j(o.x, o.y) : new j(0, 0), _this._updateID = 0, _this.textureCacheIds = [], t.valid ? _this.noFrame ? t.valid && _this.onBaseTextureUpdated(t) : _this.frame = e : t.once("loaded", _this.onBaseTextureUpdated, _this), _this.noFrame && t.on("update", _this.onBaseTextureUpdated, _this);
        return _this;
    }
    B.prototype.update = function () { this.baseTexture.resource && this.baseTexture.resource.update(); };
    B.prototype.onBaseTextureUpdated = function (t) { if (this.noFrame) {
        if (!this.baseTexture.valid)
            return;
        this._frame.width = t.width, this._frame.height = t.height, this.valid = !0, this.updateUvs();
    }
    else
        this.frame = this._frame; this.emit("update", this); };
    B.prototype.destroy = function (t) { if (this.baseTexture) {
        if (t) {
            var e = this.baseTexture.resource;
            (e == null ? void 0 : e.url) && gt[e.url] && B.removeFromCache(e.url), this.baseTexture.destroy();
        }
        this.baseTexture.off("loaded", this.onBaseTextureUpdated, this), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture = null;
    } this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, B.removeFromCache(this), this.textureCacheIds = null; };
    B.prototype.clone = function () { var r; var t = this._frame.clone(), e = this._frame === this.orig ? t : this.orig.clone(), s = new B(this.baseTexture, !this.noFrame && t, e, (r = this.trim) == null ? void 0 : r.clone(), this.rotate, this.defaultAnchor); return this.noFrame && (s._frame = t), s; };
    B.prototype.updateUvs = function () { this._uvs === ho && (this._uvs = new tr), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++; };
    B.from = function (t, e, s) {
        if (e === void 0) { e = {}; }
        if (s === void 0) { s = w.STRICT_TEXTURE_CACHE; }
        var r = typeof t == "string";
        var n = null;
        if (r)
            n = t;
        else if (t instanceof W) {
            if (!t.cacheId) {
                var a = (e == null ? void 0 : e.pixiIdPrefix) || "pixiid";
                t.cacheId = "".concat(a, "-").concat(oe()), W.addToCache(t, t.cacheId);
            }
            n = t.cacheId;
        }
        else {
            if (!t._pixiId) {
                var a = (e == null ? void 0 : e.pixiIdPrefix) || "pixiid";
                t._pixiId = "".concat(a, "_").concat(oe());
            }
            n = t._pixiId;
        }
        var o = gt[n];
        if (r && s && !o)
            throw new Error("The cacheId \"".concat(n, "\" does not exist in TextureCache."));
        return !o && !(t instanceof W) ? (e.resolution || (e.resolution = Kt(t)), o = new B(new W(t, e)), o.baseTexture.cacheId = n, W.addToCache(o.baseTexture, n), B.addToCache(o, n)) : !o && t instanceof W && (o = new B(t), B.addToCache(o, n)), o;
    };
    B.fromURL = function (t, e) { var s = Object.assign({ autoLoad: !1 }, e == null ? void 0 : e.resourceOptions), r = B.from(t, Object.assign({ resourceOptions: s }, e), !1), n = r.baseTexture.resource; return r.baseTexture.valid ? Promise.resolve(r) : n.load().then(function () { return Promise.resolve(r); }); };
    B.fromBuffer = function (t, e, s, r) { return new B(W.fromBuffer(t, e, s, r)); };
    B.fromLoader = function (t, e, s, r) { var n = new W(t, Object.assign({ scaleMode: w.SCALE_MODE, resolution: Kt(e) }, r)), o = n.resource; o instanceof Zs && (o.url = e); var a = new B(n); return s || (s = e), W.addToCache(a.baseTexture, s), B.addToCache(a, s), s !== e && (W.addToCache(a.baseTexture, e), B.addToCache(a, e)), a.baseTexture.valid ? Promise.resolve(a) : new Promise(function (h) { a.baseTexture.once("loaded", function () { return h(a); }); }); };
    B.addToCache = function (t, e) { e && (t.textureCacheIds.includes(e) || t.textureCacheIds.push(e), gt[e] && gt[e] !== t && console.warn("Texture added to the cache with an id [".concat(e, "] that already had an entry")), gt[e] = t); };
    B.removeFromCache = function (t) { if (typeof t == "string") {
        var e = gt[t];
        if (e) {
            var s = e.textureCacheIds.indexOf(t);
            return s > -1 && e.textureCacheIds.splice(s, 1), delete gt[t], e;
        }
    }
    else if (t != null && t.textureCacheIds) {
        for (var e = 0; e < t.textureCacheIds.length; ++e)
            gt[t.textureCacheIds[e]] === t && delete gt[t.textureCacheIds[e]];
        return t.textureCacheIds.length = 0, t;
    } return null; };
    Object.defineProperty(B.prototype, "resolution", {
        get: function () { return this.baseTexture.resolution; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(B.prototype, "frame", {
        get: function () { return this._frame; },
        set: function (t) { this._frame = t, this.noFrame = !1; var e = t.x, s = t.y, r = t.width, n = t.height, o = e + r > this.baseTexture.width, a = s + n > this.baseTexture.height; if (o || a) {
            var h = o && a ? "and" : "or", l = "X: ".concat(e, " + ").concat(r, " = ").concat(e + r, " > ").concat(this.baseTexture.width), c = "Y: ".concat(s, " + ").concat(n, " = ").concat(s + n, " > ").concat(this.baseTexture.height);
            throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: ".concat(l, " ").concat(h, " ").concat(c));
        } this.valid = r && n && this.baseTexture.valid, !this.trim && !this.rotate && (this.orig = t), this.valid && this.updateUvs(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(B.prototype, "rotate", {
        get: function () { return this._rotate; },
        set: function (t) { this._rotate = t, this.valid && this.updateUvs(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(B.prototype, "width", {
        get: function () { return this.orig.width; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(B.prototype, "height", {
        get: function () { return this.orig.height; },
        enumerable: false,
        configurable: true
    });
    B.prototype.castToBaseTexture = function () { return this.baseTexture; };
    Object.defineProperty(B, "EMPTY", {
        get: function () { return B._EMPTY || (B._EMPTY = new B(new W), Gi(B._EMPTY), Gi(B._EMPTY.baseTexture)), B._EMPTY; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(B, "WHITE", {
        get: function () { if (!B._WHITE) {
            var t = w.ADAPTER.createCanvas(16, 16), e = t.getContext("2d");
            t.width = 16, t.height = 16, e.fillStyle = "white", e.fillRect(0, 0, 16, 16), B._WHITE = new B(W.from(t)), Gi(B._WHITE), Gi(B._WHITE.baseTexture);
        } return B._WHITE; },
        enumerable: false,
        configurable: true
    });
    return B;
}(Ce));
var ee = /** @class */ (function (_super) {
    __extends(ee, _super);
    function ee(t, e) {
        var _this = this;
        _this = _super.call(this, t, e) || this, _this.valid = !0, _this.filterFrame = null, _this.filterPoolKey = null, _this.updateUvs();
        return _this;
    }
    Object.defineProperty(ee.prototype, "framebuffer", {
        get: function () { return this.baseTexture.framebuffer; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ee.prototype, "multisample", {
        get: function () { return this.framebuffer.multisample; },
        set: function (t) { this.framebuffer.multisample = t; },
        enumerable: false,
        configurable: true
    });
    ee.prototype.resize = function (t, e, s) {
        if (s === void 0) { s = !0; }
        var r = this.baseTexture.resolution, n = Math.round(t * r) / r, o = Math.round(e * r) / r;
        this.valid = n > 0 && o > 0, this._frame.width = this.orig.width = n, this._frame.height = this.orig.height = o, s && this.baseTexture.resize(n, o), this.updateUvs();
    };
    ee.prototype.setResolution = function (t) { var e = this.baseTexture; e.resolution !== t && (e.setResolution(t), this.resize(e.width, e.height, !1)); };
    ee.create = function (t) { return new ee(new Js(t)); };
    return ee;
}(B));
var er = /** @class */ (function () {
    function er(t) {
        this.texturePool = {}, this.textureOptions = t || {}, this.enableFullScreen = !1, this._pixelsWidth = 0, this._pixelsHeight = 0;
    }
    er.prototype.createTexture = function (t, e, s) {
        if (s === void 0) { s = nt.NONE; }
        var r = new Js(Object.assign({ width: t, height: e, resolution: 1, multisample: s }, this.textureOptions));
        return new ee(r);
    };
    er.prototype.getOptimalTexture = function (t, e, s, r) {
        if (s === void 0) { s = 1; }
        if (r === void 0) { r = nt.NONE; }
        var n;
        t = Math.ceil(t * s - 1e-6), e = Math.ceil(e * s - 1e-6), !this.enableFullScreen || t !== this._pixelsWidth || e !== this._pixelsHeight ? (t = qe(t), e = qe(e), n = ((t & 65535) << 16 | e & 65535) >>> 0, r > 1 && (n += r * 4294967296)) : n = r > 1 ? -r : -1, this.texturePool[n] || (this.texturePool[n] = []);
        var o = this.texturePool[n].pop();
        return o || (o = this.createTexture(t, e, r)), o.filterPoolKey = n, o.setResolution(s), o;
    };
    er.prototype.getFilterTexture = function (t, e, s) { var r = this.getOptimalTexture(t.width, t.height, e || t.resolution, s || nt.NONE); return r.filterFrame = t.filterFrame, r; };
    er.prototype.returnTexture = function (t) { var e = t.filterPoolKey; t.filterFrame = null, this.texturePool[e].push(t); };
    er.prototype.returnFilterTexture = function (t) { this.returnTexture(t); };
    er.prototype.clear = function (t) { if (t = t !== !1, t)
        for (var e in this.texturePool) {
            var s = this.texturePool[e];
            if (s)
                for (var r = 0; r < s.length; r++)
                    s[r].destroy(!0);
        } this.texturePool = {}; };
    er.prototype.setScreenSize = function (t) { if (!(t.width === this._pixelsWidth && t.height === this._pixelsHeight)) {
        this.enableFullScreen = t.width > 0 && t.height > 0;
        for (var e in this.texturePool) {
            if (!(Number(e) < 0))
                continue;
            var s = this.texturePool[e];
            if (s)
                for (var r = 0; r < s.length; r++)
                    s[r].destroy(!0);
            this.texturePool[e] = [];
        }
        this._pixelsWidth = t.width, this._pixelsHeight = t.height;
    } };
    return er;
}());
er.SCREEN_KEY = -1;
var xi = /** @class */ (function () {
    function xi(t, e, s, r, n, o, a) {
        if (e === void 0) { e = 0; }
        if (s === void 0) { s = !1; }
        if (r === void 0) { r = O.FLOAT; }
        this.buffer = t, this.size = e, this.normalized = s, this.type = r, this.stride = n, this.start = o, this.instance = a;
    }
    xi.prototype.destroy = function () { this.buffer = null; };
    xi.from = function (t, e, s, r, n) { return new xi(t, e, s, r, n); };
    return xi;
}());
var ju = 0;
var rt = /** @class */ (function () {
    function rt(t, e, s) {
        if (e === void 0) { e = !0; }
        if (s === void 0) { s = !1; }
        this.data = t || new Float32Array(1), this._glBuffers = {}, this._updateID = 0, this.index = s, this.static = e, this.id = ju++, this.disposeRunner = new Tt("disposeBuffer");
    }
    rt.prototype.update = function (t) { t instanceof Array && (t = new Float32Array(t)), this.data = t || this.data, this._updateID++; };
    rt.prototype.dispose = function () { this.disposeRunner.emit(this, !1); };
    rt.prototype.destroy = function () { this.dispose(), this.data = null; };
    Object.defineProperty(rt.prototype, "index", {
        get: function () { return this.type === Dt.ELEMENT_ARRAY_BUFFER; },
        set: function (t) { this.type = t ? Dt.ELEMENT_ARRAY_BUFFER : Dt.ARRAY_BUFFER; },
        enumerable: false,
        configurable: true
    });
    rt.from = function (t) { return t instanceof Array && (t = new Float32Array(t)), new rt(t); };
    return rt;
}());
var Yu = { Float32Array: Float32Array, Uint32Array: Uint32Array, Int32Array: Int32Array, Uint8Array: Uint8Array };
function $u(i, t) { var e = 0, s = 0; var r = {}; for (var h = 0; h < i.length; h++)
    s += t[h], e += i[h].length; var n = new ArrayBuffer(e * 4); var o = null, a = 0; for (var h = 0; h < i.length; h++) {
    var l = t[h], c = i[h], u = Ni(c);
    r[u] || (r[u] = new Yu[u](n)), o = r[u];
    for (var d = 0; d < c.length; d++) {
        var f = (d / l | 0) * s + a, p = d % l;
        o[f + p] = c[d];
    }
    a += l;
} return new Float32Array(n); }
var lo = { 5126: 4, 5123: 2, 5121: 1 };
var qu = 0;
var Ku = { Float32Array: Float32Array, Uint32Array: Uint32Array, Int32Array: Int32Array, Uint8Array: Uint8Array, Uint16Array: Uint16Array };
var se = /** @class */ (function () {
    function se(t, e) {
        if (t === void 0) { t = []; }
        if (e === void 0) { e = {}; }
        this.buffers = t, this.indexBuffer = null, this.attributes = e, this.glVertexArrayObjects = {}, this.id = qu++, this.instanced = !1, this.instanceCount = 1, this.disposeRunner = new Tt("disposeGeometry"), this.refCount = 0;
    }
    se.prototype.addAttribute = function (t, e, s, r, n, o, a, h) {
        if (s === void 0) { s = 0; }
        if (r === void 0) { r = !1; }
        if (h === void 0) { h = !1; }
        if (!e)
            throw new Error("You must pass a buffer when creating an attribute");
        e instanceof rt || (e instanceof Array && (e = new Float32Array(e)), e = new rt(e));
        var l = t.split("|");
        if (l.length > 1) {
            for (var u = 0; u < l.length; u++)
                this.addAttribute(l[u], e, s, r, n);
            return this;
        }
        var c = this.buffers.indexOf(e);
        return c === -1 && (this.buffers.push(e), c = this.buffers.length - 1), this.attributes[t] = new xi(c, s, r, n, o, a, h), this.instanced = this.instanced || h, this;
    };
    se.prototype.getAttribute = function (t) { return this.attributes[t]; };
    se.prototype.getBuffer = function (t) { return this.buffers[this.getAttribute(t).buffer]; };
    se.prototype.addIndex = function (t) { return t instanceof rt || (t instanceof Array && (t = new Uint16Array(t)), t = new rt(t)), t.type = Dt.ELEMENT_ARRAY_BUFFER, this.indexBuffer = t, this.buffers.includes(t) || this.buffers.push(t), this; };
    se.prototype.getIndex = function () { return this.indexBuffer; };
    se.prototype.interleave = function () { if (this.buffers.length === 1 || this.buffers.length === 2 && this.indexBuffer)
        return this; var t = [], e = [], s = new rt; var r; for (r in this.attributes) {
        var n = this.attributes[r], o = this.buffers[n.buffer];
        t.push(o.data), e.push(n.size * lo[n.type] / 4), n.buffer = 0;
    } for (s.data = $u(t, e), r = 0; r < this.buffers.length; r++)
        this.buffers[r] !== this.indexBuffer && this.buffers[r].destroy(); return this.buffers = [s], this.indexBuffer && this.buffers.push(this.indexBuffer), this; };
    se.prototype.getSize = function () { for (var t in this.attributes) {
        var e = this.attributes[t];
        return this.buffers[e.buffer].data.length / (e.stride / 4 || e.size);
    } return 0; };
    se.prototype.dispose = function () { this.disposeRunner.emit(this, !1); };
    se.prototype.destroy = function () { this.dispose(), this.buffers = null, this.indexBuffer = null, this.attributes = null; };
    se.prototype.clone = function () { var t = new se; for (var e = 0; e < this.buffers.length; e++)
        t.buffers[e] = new rt(this.buffers[e].data.slice(0)); for (var e in this.attributes) {
        var s = this.attributes[e];
        t.attributes[e] = new xi(s.buffer, s.size, s.normalized, s.type, s.stride, s.start, s.instance);
    } return this.indexBuffer && (t.indexBuffer = t.buffers[this.buffers.indexOf(this.indexBuffer)], t.indexBuffer.type = Dt.ELEMENT_ARRAY_BUFFER), t; };
    se.merge = function (t) { var e = new se, s = [], r = [], n = []; var o; for (var a = 0; a < t.length; a++) {
        o = t[a];
        for (var h = 0; h < o.buffers.length; h++)
            r[h] = r[h] || 0, r[h] += o.buffers[h].data.length, n[h] = 0;
    } for (var a = 0; a < o.buffers.length; a++)
        s[a] = new Ku[Ni(o.buffers[a].data)](r[a]), e.buffers[a] = new rt(s[a]); for (var a = 0; a < t.length; a++) {
        o = t[a];
        for (var h = 0; h < o.buffers.length; h++)
            s[h].set(o.buffers[h].data, n[h]), n[h] += o.buffers[h].data.length;
    } if (e.attributes = o.attributes, o.indexBuffer) {
        e.indexBuffer = e.buffers[o.buffers.indexOf(o.indexBuffer)], e.indexBuffer.type = Dt.ELEMENT_ARRAY_BUFFER;
        var a = 0, h = 0, l = 0, c = 0;
        for (var u = 0; u < o.buffers.length; u++)
            if (o.buffers[u] !== o.indexBuffer) {
                c = u;
                break;
            }
        for (var u in o.attributes) {
            var d = o.attributes[u];
            (d.buffer | 0) === c && (h += d.size * lo[d.type] / 4);
        }
        for (var u = 0; u < t.length; u++) {
            var d = t[u].indexBuffer.data;
            for (var f = 0; f < d.length; f++)
                e.indexBuffer.data[f + l] += a;
            a += t[u].buffers[c].data.length / h, l += d.length;
        }
    } return e; };
    return se;
}());
var co = /** @class */ (function (_super) {
    __extends(co, _super);
    function co() {
        var _this = this;
        _this = _super.call(this) || this, _this.addAttribute("aVertexPosition", new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])).addIndex([0, 1, 3, 2]);
        return _this;
    }
    return co;
}(se));
var ir = /** @class */ (function (_super) {
    __extends(ir, _super);
    function ir() {
        var _this = this;
        _this = _super.call(this) || this, _this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), _this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), _this.vertexBuffer = new rt(_this.vertices), _this.uvBuffer = new rt(_this.uvs), _this.addAttribute("aVertexPosition", _this.vertexBuffer).addAttribute("aTextureCoord", _this.uvBuffer).addIndex([0, 1, 2, 0, 2, 3]);
        return _this;
    }
    ir.prototype.map = function (t, e) { var s = 0, r = 0; return this.uvs[0] = s, this.uvs[1] = r, this.uvs[2] = s + e.width / t.width, this.uvs[3] = r, this.uvs[4] = s + e.width / t.width, this.uvs[5] = r + e.height / t.height, this.uvs[6] = s, this.uvs[7] = r + e.height / t.height, s = e.x, r = e.y, this.vertices[0] = s, this.vertices[1] = r, this.vertices[2] = s + e.width, this.vertices[3] = r, this.vertices[4] = s + e.width, this.vertices[5] = r + e.height, this.vertices[6] = s, this.vertices[7] = r + e.height, this.invalidate(), this; };
    ir.prototype.invalidate = function () { return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this; };
    return ir;
}(se));
var Zu = 0;
var It = /** @class */ (function () {
    function It(t, e, s) {
        this.group = !0, this.syncUniforms = {}, this.dirtyId = 0, this.id = Zu++, this.static = !!e, this.ubo = !!s, t instanceof rt ? (this.buffer = t, this.buffer.type = Dt.UNIFORM_BUFFER, this.autoManage = !1, this.ubo = !0) : (this.uniforms = t, this.ubo && (this.buffer = new rt(new Float32Array(1)), this.buffer.type = Dt.UNIFORM_BUFFER, this.autoManage = !0));
    }
    It.prototype.update = function () { this.dirtyId++, !this.autoManage && this.buffer && this.buffer.update(); };
    It.prototype.add = function (t, e, s) { if (!this.ubo)
        this.uniforms[t] = new It(e, s);
    else
        throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them"); };
    It.from = function (t, e, s) { return new It(t, e, s); };
    It.uboFrom = function (t, e) { return new It(t, e != null ? e : !0, !0); };
    return It;
}());
var uo = /** @class */ (function () {
    function uo() {
        this.renderTexture = null, this.target = null, this.legacy = !1, this.resolution = 1, this.multisample = nt.NONE, this.sourceFrame = new V, this.destinationFrame = new V, this.bindingSourceFrame = new V, this.bindingDestinationFrame = new V, this.filters = [], this.transform = null;
    }
    uo.prototype.clear = function () { this.target = null, this.filters = null, this.renderTexture = null; };
    return uo;
}());
var Hi = [new j, new j, new j, new j], sr = new Z;
var rr = /** @class */ (function () {
    function rr(t) {
        this.renderer = t, this.defaultFilterStack = [{}], this.texturePool = new er, this.statePool = [], this.quad = new co, this.quadUv = new ir, this.tempRect = new V, this.activeState = {}, this.globalUniforms = new It({ outputFrame: new V, inputSize: new Float32Array(4), inputPixel: new Float32Array(4), inputClamp: new Float32Array(4), resolution: 1, filterArea: new Float32Array(4), filterClamp: new Float32Array(4) }, !0), this.forceClear = !1, this.useMaxPadding = !1;
    }
    rr.prototype.init = function () { this.texturePool.setScreenSize(this.renderer.view); };
    rr.prototype.push = function (t, e) { var p, m; var s = this.renderer, r = this.defaultFilterStack, n = this.statePool.pop() || new uo, o = this.renderer.renderTexture; var a = e[0].resolution, h = e[0].multisample, l = e[0].padding, c = e[0].autoFit, u = (p = e[0].legacy) != null ? p : !0; for (var _ = 1; _ < e.length; _++) {
        var x = e[_];
        a = Math.min(a, x.resolution), h = Math.min(h, x.multisample), l = this.useMaxPadding ? Math.max(l, x.padding) : l + x.padding, c = c && x.autoFit, u = u || ((m = x.legacy) != null ? m : !0);
    } r.length === 1 && (this.defaultFilterStack[0].renderTexture = o.current), r.push(n), n.resolution = a, n.multisample = h, n.legacy = u, n.target = t, n.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)), n.sourceFrame.pad(l); var d = this.tempRect.copyFrom(o.sourceFrame); s.projection.transform && this.transformAABB(sr.copyFrom(s.projection.transform).invert(), d), c ? (n.sourceFrame.fit(d), (n.sourceFrame.width <= 0 || n.sourceFrame.height <= 0) && (n.sourceFrame.width = 0, n.sourceFrame.height = 0)) : n.sourceFrame.intersects(d) || (n.sourceFrame.width = 0, n.sourceFrame.height = 0), this.roundFrame(n.sourceFrame, o.current ? o.current.resolution : s.resolution, o.sourceFrame, o.destinationFrame, s.projection.transform), n.renderTexture = this.getOptimalFilterTexture(n.sourceFrame.width, n.sourceFrame.height, a, h), n.filters = e, n.destinationFrame.width = n.renderTexture.width, n.destinationFrame.height = n.renderTexture.height; var f = this.tempRect; f.x = 0, f.y = 0, f.width = n.sourceFrame.width, f.height = n.sourceFrame.height, n.renderTexture.filterFrame = n.sourceFrame, n.bindingSourceFrame.copyFrom(o.sourceFrame), n.bindingDestinationFrame.copyFrom(o.destinationFrame), n.transform = s.projection.transform, s.projection.transform = null, o.bind(n.renderTexture, n.sourceFrame, f), s.framebuffer.clear(0, 0, 0, 0); };
    rr.prototype.pop = function () { var t = this.defaultFilterStack, e = t.pop(), s = e.filters; this.activeState = e; var r = this.globalUniforms.uniforms; r.outputFrame = e.sourceFrame, r.resolution = e.resolution; var n = r.inputSize, o = r.inputPixel, a = r.inputClamp; if (n[0] = e.destinationFrame.width, n[1] = e.destinationFrame.height, n[2] = 1 / n[0], n[3] = 1 / n[1], o[0] = Math.round(n[0] * e.resolution), o[1] = Math.round(n[1] * e.resolution), o[2] = 1 / o[0], o[3] = 1 / o[1], a[0] = .5 * o[2], a[1] = .5 * o[3], a[2] = e.sourceFrame.width * n[2] - .5 * o[2], a[3] = e.sourceFrame.height * n[3] - .5 * o[3], e.legacy) {
        var l = r.filterArea;
        l[0] = e.destinationFrame.width, l[1] = e.destinationFrame.height, l[2] = e.sourceFrame.x, l[3] = e.sourceFrame.y, r.filterClamp = r.inputClamp;
    } this.globalUniforms.update(); var h = t[t.length - 1]; if (this.renderer.framebuffer.blit(), s.length === 1)
        s[0].apply(this, e.renderTexture, h.renderTexture, Bt.BLEND, e), this.returnFilterTexture(e.renderTexture);
    else {
        var l = e.renderTexture, c = this.getOptimalFilterTexture(l.width, l.height, e.resolution);
        c.filterFrame = l.filterFrame;
        var u = 0;
        for (u = 0; u < s.length - 1; ++u) {
            u === 1 && e.multisample > 1 && (c = this.getOptimalFilterTexture(l.width, l.height, e.resolution), c.filterFrame = l.filterFrame), s[u].apply(this, l, c, Bt.CLEAR, e);
            var d = l;
            l = c, c = d;
        }
        s[u].apply(this, l, h.renderTexture, Bt.BLEND, e), u > 1 && e.multisample > 1 && this.returnFilterTexture(e.renderTexture), this.returnFilterTexture(l), this.returnFilterTexture(c);
    } e.clear(), this.statePool.push(e); };
    rr.prototype.bindAndClear = function (t, e) {
        if (e === void 0) { e = Bt.CLEAR; }
        var _b = this.renderer, s = _b.renderTexture, r = _b.state;
        if (t === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? this.renderer.projection.transform = this.activeState.transform : this.renderer.projection.transform = null, t != null && t.filterFrame) {
            var o = this.tempRect;
            o.x = 0, o.y = 0, o.width = t.filterFrame.width, o.height = t.filterFrame.height, s.bind(t, t.filterFrame, o);
        }
        else
            t !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? s.bind(t) : this.renderer.renderTexture.bind(t, this.activeState.bindingSourceFrame, this.activeState.bindingDestinationFrame);
        var n = r.stateId & 1 || this.forceClear;
        (e === Bt.CLEAR || e === Bt.BLIT && n) && this.renderer.framebuffer.clear(0, 0, 0, 0);
    };
    rr.prototype.applyFilter = function (t, e, s, r) { var n = this.renderer; n.state.set(t.state), this.bindAndClear(s, r), t.uniforms.uSampler = e, t.uniforms.filterGlobals = this.globalUniforms, n.shader.bind(t), t.legacy = !!t.program.attributeData.aTextureCoord, t.legacy ? (this.quadUv.map(e._frame, e.filterFrame), n.geometry.bind(this.quadUv), n.geometry.draw(Pt.TRIANGLES)) : (n.geometry.bind(this.quad), n.geometry.draw(Pt.TRIANGLE_STRIP)); };
    rr.prototype.calculateSpriteMatrix = function (t, e) { var _b = this.activeState, s = _b.sourceFrame, r = _b.destinationFrame, n = e._texture.orig, o = t.set(r.width, 0, 0, r.height, s.x, s.y), a = e.worldTransform.copyTo(Z.TEMP_MATRIX); return a.invert(), o.prepend(a), o.scale(1 / n.width, 1 / n.height), o.translate(e.anchor.x, e.anchor.y), o; };
    rr.prototype.destroy = function () { this.renderer = null, this.texturePool.clear(!1); };
    rr.prototype.getOptimalFilterTexture = function (t, e, s, r) {
        if (s === void 0) { s = 1; }
        if (r === void 0) { r = nt.NONE; }
        return this.texturePool.getOptimalTexture(t, e, s, r);
    };
    rr.prototype.getFilterTexture = function (t, e, s) { if (typeof t == "number") {
        var n = t;
        t = e, e = n;
    } t = t || this.activeState.renderTexture; var r = this.texturePool.getOptimalTexture(t.width, t.height, e || t.resolution, s || nt.NONE); return r.filterFrame = t.filterFrame, r; };
    rr.prototype.returnFilterTexture = function (t) { this.texturePool.returnTexture(t); };
    rr.prototype.emptyPool = function () { this.texturePool.clear(!0); };
    rr.prototype.resize = function () { this.texturePool.setScreenSize(this.renderer.view); };
    rr.prototype.transformAABB = function (t, e) { var s = Hi[0], r = Hi[1], n = Hi[2], o = Hi[3]; s.set(e.left, e.top), r.set(e.left, e.bottom), n.set(e.right, e.top), o.set(e.right, e.bottom), t.apply(s, s), t.apply(r, r), t.apply(n, n), t.apply(o, o); var a = Math.min(s.x, r.x, n.x, o.x), h = Math.min(s.y, r.y, n.y, o.y), l = Math.max(s.x, r.x, n.x, o.x), c = Math.max(s.y, r.y, n.y, o.y); e.x = a, e.y = h, e.width = l - a, e.height = c - h; };
    rr.prototype.roundFrame = function (t, e, s, r, n) { if (!(t.width <= 0 || t.height <= 0 || s.width <= 0 || s.height <= 0)) {
        if (n) {
            var o = n.a, a = n.b, h = n.c, l = n.d;
            if ((Math.abs(a) > 1e-4 || Math.abs(h) > 1e-4) && (Math.abs(o) > 1e-4 || Math.abs(l) > 1e-4))
                return;
        }
        n = n ? sr.copyFrom(n) : sr.identity(), n.translate(-s.x, -s.y).scale(r.width / s.width, r.height / s.height).translate(r.x, r.y), this.transformAABB(n, t), t.ceil(e), this.transformAABB(n.invert(), t);
    } };
    return rr;
}());
rr.extension = { type: P.RendererSystem, name: "filter" }, U.add(rr);
var Qe = /** @class */ (function () {
    function Qe(t) {
        this.renderer = t;
    }
    Qe.prototype.flush = function () { };
    Qe.prototype.destroy = function () { this.renderer = null; };
    Qe.prototype.start = function () { };
    Qe.prototype.stop = function () { this.flush(); };
    Qe.prototype.render = function (t) { };
    return Qe;
}());
var nr = /** @class */ (function () {
    function nr(t) {
        this.renderer = t, this.emptyRenderer = new Qe(t), this.currentRenderer = this.emptyRenderer;
    }
    nr.prototype.setObjectRenderer = function (t) { this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start()); };
    nr.prototype.flush = function () { this.setObjectRenderer(this.emptyRenderer); };
    nr.prototype.reset = function () { this.setObjectRenderer(this.emptyRenderer); };
    nr.prototype.copyBoundTextures = function (t, e) { var s = this.renderer.texture.boundTextures; for (var r = e - 1; r >= 0; --r)
        t[r] = s[r] || null, t[r] && (t[r]._batchLocation = r); };
    nr.prototype.boundArray = function (t, e, s, r) { var n = t.elements, o = t.ids, a = t.count; var h = 0; for (var l = 0; l < a; l++) {
        var c = n[l], u = c._batchLocation;
        if (u >= 0 && u < r && e[u] === c) {
            o[l] = u;
            continue;
        }
        for (; h < r;) {
            var d = e[h];
            if (d && d._batchEnabled === s && d._batchLocation === h) {
                h++;
                continue;
            }
            o[l] = h, c._batchLocation = h, e[h] = c;
            break;
        }
    } };
    nr.prototype.destroy = function () { this.renderer = null; };
    return nr;
}());
nr.extension = { type: P.RendererSystem, name: "batch" }, U.add(nr);
var fo = 0;
var or = /** @class */ (function () {
    function or(t) {
        this.renderer = t, this.webGLVersion = 1, this.extensions = {}, this.supports = { uint32Indices: !1 }, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this);
    }
    Object.defineProperty(or.prototype, "isLost", {
        get: function () { return !this.gl || this.gl.isContextLost(); },
        enumerable: false,
        configurable: true
    });
    or.prototype.contextChange = function (t) { this.gl = t, this.renderer.gl = t, this.renderer.CONTEXT_UID = fo++; };
    or.prototype.init = function (t) { if (t.context)
        this.initFromContext(t.context);
    else {
        var e = this.renderer.background.alpha < 1, s = t.premultipliedAlpha;
        this.preserveDrawingBuffer = t.preserveDrawingBuffer, this.useContextAlpha = t.useContextAlpha, this.powerPreference = t.powerPreference, this.initFromOptions({ alpha: e, premultipliedAlpha: s, antialias: t.antialias, stencil: !0, preserveDrawingBuffer: t.preserveDrawingBuffer, powerPreference: t.powerPreference });
    } };
    or.prototype.initFromContext = function (t) { this.gl = t, this.validateContext(t), this.renderer.gl = t, this.renderer.CONTEXT_UID = fo++, this.renderer.runners.contextChange.emit(t); var e = this.renderer.view; e.addEventListener !== void 0 && (e.addEventListener("webglcontextlost", this.handleContextLost, !1), e.addEventListener("webglcontextrestored", this.handleContextRestored, !1)); };
    or.prototype.initFromOptions = function (t) { var e = this.createContext(this.renderer.view, t); this.initFromContext(e); };
    or.prototype.createContext = function (t, e) { var s; if (w.PREFER_ENV >= re.WEBGL2 && (s = t.getContext("webgl2", e)), s)
        this.webGLVersion = 2;
    else if (this.webGLVersion = 1, s = t.getContext("webgl", e) || t.getContext("experimental-webgl", e), !s)
        throw new Error("This browser does not support WebGL. Try using the canvas renderer"); return this.gl = s, this.getExtensions(), this.gl; };
    or.prototype.getExtensions = function () { var t = this.gl, e = { loseContext: t.getExtension("WEBGL_lose_context"), anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"), floatTextureLinear: t.getExtension("OES_texture_float_linear"), s3tc: t.getExtension("WEBGL_compressed_texture_s3tc"), s3tc_sRGB: t.getExtension("WEBGL_compressed_texture_s3tc_srgb"), etc: t.getExtension("WEBGL_compressed_texture_etc"), etc1: t.getExtension("WEBGL_compressed_texture_etc1"), pvrtc: t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"), atc: t.getExtension("WEBGL_compressed_texture_atc"), astc: t.getExtension("WEBGL_compressed_texture_astc") }; this.webGLVersion === 1 ? Object.assign(this.extensions, e, { drawBuffers: t.getExtension("WEBGL_draw_buffers"), depthTexture: t.getExtension("WEBGL_depth_texture"), vertexArrayObject: t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object"), uint32ElementIndex: t.getExtension("OES_element_index_uint"), floatTexture: t.getExtension("OES_texture_float"), floatTextureLinear: t.getExtension("OES_texture_float_linear"), textureHalfFloat: t.getExtension("OES_texture_half_float"), textureHalfFloatLinear: t.getExtension("OES_texture_half_float_linear") }) : this.webGLVersion === 2 && Object.assign(this.extensions, e, { colorBufferFloat: t.getExtension("EXT_color_buffer_float") }); };
    or.prototype.handleContextLost = function (t) {
        var _this = this;
        t.preventDefault(), setTimeout(function () { _this.gl.isContextLost() && _this.extensions.loseContext && _this.extensions.loseContext.restoreContext(); }, 0);
    };
    or.prototype.handleContextRestored = function () { this.renderer.runners.contextChange.emit(this.gl); };
    or.prototype.destroy = function () { var t = this.renderer.view; this.renderer = null, t.removeEventListener !== void 0 && (t.removeEventListener("webglcontextlost", this.handleContextLost), t.removeEventListener("webglcontextrestored", this.handleContextRestored)), this.gl.useProgram(null), this.extensions.loseContext && this.extensions.loseContext.loseContext(); };
    or.prototype.postrender = function () { this.renderer.objectRenderer.renderingToScreen && this.gl.flush(); };
    or.prototype.validateContext = function (t) { var e = t.getContextAttributes(), s = "WebGL2RenderingContext" in globalThis && t instanceof globalThis.WebGL2RenderingContext; s && (this.webGLVersion = 2), e && !e.stencil && console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly"); var r = s || !!t.getExtension("OES_element_index_uint"); this.supports.uint32Indices = r, r || console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly"); };
    return or;
}());
or.extension = { type: P.RendererSystem, name: "context" }, U.add(or);
var po = /** @class */ (function () {
    function po(t) {
        this.framebuffer = t, this.stencil = null, this.dirtyId = -1, this.dirtyFormat = -1, this.dirtySize = -1, this.multisample = nt.NONE, this.msaaBuffer = null, this.blitFramebuffer = null, this.mipLevel = 0;
    }
    return po;
}());
var Qu = new V;
var ar = /** @class */ (function () {
    function ar(t) {
        this.renderer = t, this.managedFramebuffers = [], this.unknownFramebuffer = new ki(10, 10), this.msaaSamples = null;
    }
    ar.prototype.contextChange = function () { this.disposeAll(!0); var t = this.gl = this.renderer.gl; if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.current = this.unknownFramebuffer, this.viewport = new V, this.hasMRT = !0, this.writeDepthTexture = !0, this.renderer.context.webGLVersion === 1) {
        var e_1 = this.renderer.context.extensions.drawBuffers, s = this.renderer.context.extensions.depthTexture;
        w.PREFER_ENV === re.WEBGL_LEGACY && (e_1 = null, s = null), e_1 ? t.drawBuffers = function (r) { return e_1.drawBuffersWEBGL(r); } : (this.hasMRT = !1, t.drawBuffers = function () { }), s || (this.writeDepthTexture = !1);
    }
    else
        this.msaaSamples = t.getInternalformatParameter(t.RENDERBUFFER, t.RGBA8, t.SAMPLES); };
    ar.prototype.bind = function (t, e, s) {
        if (s === void 0) { s = 0; }
        var r = this.gl;
        if (t) {
            var n = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
            this.current !== t && (this.current = t, r.bindFramebuffer(r.FRAMEBUFFER, n.framebuffer)), n.mipLevel !== s && (t.dirtyId++, t.dirtyFormat++, n.mipLevel = s), n.dirtyId !== t.dirtyId && (n.dirtyId = t.dirtyId, n.dirtyFormat !== t.dirtyFormat ? (n.dirtyFormat = t.dirtyFormat, n.dirtySize = t.dirtySize, this.updateFramebuffer(t, s)) : n.dirtySize !== t.dirtySize && (n.dirtySize = t.dirtySize, this.resizeFramebuffer(t)));
            for (var o = 0; o < t.colorTextures.length; o++) {
                var a = t.colorTextures[o];
                this.renderer.texture.unbind(a.parentTextureArray || a);
            }
            if (t.depthTexture && this.renderer.texture.unbind(t.depthTexture), e) {
                var o = e.width >> s, a = e.height >> s, h = o / e.width;
                this.setViewport(e.x * h, e.y * h, o, a);
            }
            else {
                var o = t.width >> s, a = t.height >> s;
                this.setViewport(0, 0, o, a);
            }
        }
        else
            this.current && (this.current = null, r.bindFramebuffer(r.FRAMEBUFFER, null)), e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height);
    };
    ar.prototype.setViewport = function (t, e, s, r) { var n = this.viewport; t = Math.round(t), e = Math.round(e), s = Math.round(s), r = Math.round(r), (n.width !== s || n.height !== r || n.x !== t || n.y !== e) && (n.x = t, n.y = e, n.width = s, n.height = r, this.gl.viewport(t, e, s, r)); };
    Object.defineProperty(ar.prototype, "size", {
        get: function () { return this.current ? { x: 0, y: 0, width: this.current.width, height: this.current.height } : { x: 0, y: 0, width: this.renderer.width, height: this.renderer.height }; },
        enumerable: false,
        configurable: true
    });
    ar.prototype.clear = function (t, e, s, r, n) {
        if (n === void 0) { n = Ti.COLOR | Ti.DEPTH; }
        var o = this.gl;
        o.clearColor(t, e, s, r), o.clear(n);
    };
    ar.prototype.initFramebuffer = function (t) { var e = this.gl, s = new po(e.createFramebuffer()); return s.multisample = this.detectSamples(t.multisample), t.glFramebuffers[this.CONTEXT_UID] = s, this.managedFramebuffers.push(t), t.disposeRunner.add(this), s; };
    ar.prototype.resizeFramebuffer = function (t) { var e = this.gl, s = t.glFramebuffers[this.CONTEXT_UID]; s.stencil && (e.bindRenderbuffer(e.RENDERBUFFER, s.stencil), s.msaaBuffer ? e.renderbufferStorageMultisample(e.RENDERBUFFER, s.multisample, e.DEPTH24_STENCIL8, t.width, t.height) : e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, t.width, t.height)); var r = t.colorTextures; var n = r.length; e.drawBuffers || (n = Math.min(n, 1)); for (var o = 0; o < n; o++) {
        var a = r[o], h = a.parentTextureArray || a;
        this.renderer.texture.bind(h, 0), o === 0 && s.msaaBuffer && (e.bindRenderbuffer(e.RENDERBUFFER, s.msaaBuffer), e.renderbufferStorageMultisample(e.RENDERBUFFER, s.multisample, h._glTextures[this.CONTEXT_UID].internalFormat, t.width, t.height));
    } t.depthTexture && this.writeDepthTexture && this.renderer.texture.bind(t.depthTexture, 0); };
    ar.prototype.updateFramebuffer = function (t, e) { var s = this.gl, r = t.glFramebuffers[this.CONTEXT_UID], n = t.colorTextures; var o = n.length; s.drawBuffers || (o = Math.min(o, 1)), r.multisample > 1 && this.canMultisampleFramebuffer(t) ? r.msaaBuffer = r.msaaBuffer || s.createRenderbuffer() : r.msaaBuffer && (s.deleteRenderbuffer(r.msaaBuffer), r.msaaBuffer = null, r.blitFramebuffer && (r.blitFramebuffer.dispose(), r.blitFramebuffer = null)); var a = []; for (var h = 0; h < o; h++) {
        var l = n[h], c = l.parentTextureArray || l;
        this.renderer.texture.bind(c, 0), h === 0 && r.msaaBuffer ? (s.bindRenderbuffer(s.RENDERBUFFER, r.msaaBuffer), s.renderbufferStorageMultisample(s.RENDERBUFFER, r.multisample, c._glTextures[this.CONTEXT_UID].internalFormat, t.width, t.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.RENDERBUFFER, r.msaaBuffer)) : (s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + h, l.target, c._glTextures[this.CONTEXT_UID].texture, e), a.push(s.COLOR_ATTACHMENT0 + h));
    } if (a.length > 1 && s.drawBuffers(a), t.depthTexture && this.writeDepthTexture) {
        var l = t.depthTexture;
        this.renderer.texture.bind(l, 0), s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, l._glTextures[this.CONTEXT_UID].texture, e);
    } (t.stencil || t.depth) && !(t.depthTexture && this.writeDepthTexture) ? (r.stencil = r.stencil || s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, r.stencil), r.msaaBuffer ? s.renderbufferStorageMultisample(s.RENDERBUFFER, r.multisample, s.DEPTH24_STENCIL8, t.width, t.height) : s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_STENCIL, t.width, t.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.RENDERBUFFER, r.stencil)) : r.stencil && (s.deleteRenderbuffer(r.stencil), r.stencil = null); };
    ar.prototype.canMultisampleFramebuffer = function (t) { return this.renderer.context.webGLVersion !== 1 && t.colorTextures.length <= 1 && !t.depthTexture; };
    ar.prototype.detectSamples = function (t) { var e = this.msaaSamples; var s = nt.NONE; if (t <= 1 || e === null)
        return s; for (var r = 0; r < e.length; r++)
        if (e[r] <= t) {
            s = e[r];
            break;
        } return s === 1 && (s = nt.NONE), s; };
    ar.prototype.blit = function (t, e, s) { var _b = this, r = _b.current, n = _b.renderer, o = _b.gl, a = _b.CONTEXT_UID; if (n.context.webGLVersion !== 2 || !r)
        return; var h = r.glFramebuffers[a]; if (!h)
        return; if (!t) {
        if (!h.msaaBuffer)
            return;
        var c = r.colorTextures[0];
        if (!c)
            return;
        h.blitFramebuffer || (h.blitFramebuffer = new ki(r.width, r.height), h.blitFramebuffer.addColorTexture(0, c)), t = h.blitFramebuffer, t.colorTextures[0] !== c && (t.colorTextures[0] = c, t.dirtyId++, t.dirtyFormat++), (t.width !== r.width || t.height !== r.height) && (t.width = r.width, t.height = r.height, t.dirtyId++, t.dirtySize++);
    } e || (e = Qu, e.width = r.width, e.height = r.height), s || (s = e); var l = e.width === s.width && e.height === s.height; this.bind(t), o.bindFramebuffer(o.READ_FRAMEBUFFER, h.framebuffer), o.blitFramebuffer(e.left, e.top, e.right, e.bottom, s.left, s.top, s.right, s.bottom, o.COLOR_BUFFER_BIT, l ? o.NEAREST : o.LINEAR); };
    ar.prototype.disposeFramebuffer = function (t, e) { var s = t.glFramebuffers[this.CONTEXT_UID], r = this.gl; if (!s)
        return; delete t.glFramebuffers[this.CONTEXT_UID]; var n = this.managedFramebuffers.indexOf(t); n >= 0 && this.managedFramebuffers.splice(n, 1), t.disposeRunner.remove(this), e || (r.deleteFramebuffer(s.framebuffer), s.msaaBuffer && r.deleteRenderbuffer(s.msaaBuffer), s.stencil && r.deleteRenderbuffer(s.stencil)), s.blitFramebuffer && s.blitFramebuffer.dispose(); };
    ar.prototype.disposeAll = function (t) { var e = this.managedFramebuffers; this.managedFramebuffers = []; for (var s = 0; s < e.length; s++)
        this.disposeFramebuffer(e[s], t); };
    ar.prototype.forceStencil = function () { var t = this.current; if (!t)
        return; var e = t.glFramebuffers[this.CONTEXT_UID]; if (!e || e.stencil)
        return; t.stencil = !0; var s = t.width, r = t.height, n = this.gl, o = n.createRenderbuffer(); n.bindRenderbuffer(n.RENDERBUFFER, o), e.msaaBuffer ? n.renderbufferStorageMultisample(n.RENDERBUFFER, e.multisample, n.DEPTH24_STENCIL8, s, r) : n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_STENCIL, s, r), e.stencil = o, n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.RENDERBUFFER, o); };
    ar.prototype.reset = function () { this.current = this.unknownFramebuffer, this.viewport = new V; };
    ar.prototype.destroy = function () { this.renderer = null; };
    return ar;
}());
ar.extension = { type: P.RendererSystem, name: "framebuffer" }, U.add(ar);
var hr = { 5126: 4, 5123: 2, 5121: 1 };
var lr = /** @class */ (function () {
    function lr(t) {
        this.renderer = t, this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, this.hasInstance = !0, this.canUseUInt32ElementIndex = !1, this.managedGeometries = {};
    }
    lr.prototype.contextChange = function () { this.disposeAll(!0); var t = this.gl = this.renderer.gl, e = this.renderer.context; if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, e.webGLVersion !== 2) {
        var s_2 = this.renderer.context.extensions.vertexArrayObject;
        w.PREFER_ENV === re.WEBGL_LEGACY && (s_2 = null), s_2 ? (t.createVertexArray = function () { return s_2.createVertexArrayOES(); }, t.bindVertexArray = function (r) { return s_2.bindVertexArrayOES(r); }, t.deleteVertexArray = function (r) { return s_2.deleteVertexArrayOES(r); }) : (this.hasVao = !1, t.createVertexArray = function () { return null; }, t.bindVertexArray = function () { return null; }, t.deleteVertexArray = function () { return null; });
    } if (e.webGLVersion !== 2) {
        var s_3 = t.getExtension("ANGLE_instanced_arrays");
        s_3 ? (t.vertexAttribDivisor = function (r, n) { return s_3.vertexAttribDivisorANGLE(r, n); }, t.drawElementsInstanced = function (r, n, o, a, h) { return s_3.drawElementsInstancedANGLE(r, n, o, a, h); }, t.drawArraysInstanced = function (r, n, o, a) { return s_3.drawArraysInstancedANGLE(r, n, o, a); }) : this.hasInstance = !1;
    } this.canUseUInt32ElementIndex = e.webGLVersion === 2 || !!e.extensions.uint32ElementIndex; };
    lr.prototype.bind = function (t, e) { e = e || this.renderer.shader.shader; var s = this.gl; var r = t.glVertexArrayObjects[this.CONTEXT_UID], n = !1; r || (this.managedGeometries[t.id] = t, t.disposeRunner.add(this), t.glVertexArrayObjects[this.CONTEXT_UID] = r = {}, n = !0); var o = r[e.program.id] || this.initGeometryVao(t, e, n); this._activeGeometry = t, this._activeVao !== o && (this._activeVao = o, this.hasVao ? s.bindVertexArray(o) : this.activateVao(t, e.program)), this.updateBuffers(); };
    lr.prototype.reset = function () { this.unbind(); };
    lr.prototype.updateBuffers = function () { var t = this._activeGeometry, e = this.renderer.buffer; for (var s = 0; s < t.buffers.length; s++) {
        var r = t.buffers[s];
        e.update(r);
    } };
    lr.prototype.checkCompatibility = function (t, e) { var s = t.attributes, r = e.attributeData; for (var n in r)
        if (!s[n])
            throw new Error("shader and geometry incompatible, geometry missing the \"".concat(n, "\" attribute")); };
    lr.prototype.getSignature = function (t, e) { var s = t.attributes, r = e.attributeData, n = ["g", t.id]; for (var o in s)
        r[o] && n.push(o, r[o].location); return n.join("-"); };
    lr.prototype.initGeometryVao = function (t, e, s) {
        if (s === void 0) { s = !0; }
        var r = this.gl, n = this.CONTEXT_UID, o = this.renderer.buffer, a = e.program;
        a.glPrograms[n] || this.renderer.shader.generateProgram(e), this.checkCompatibility(t, a);
        var h = this.getSignature(t, a), l = t.glVertexArrayObjects[this.CONTEXT_UID];
        var c = l[h];
        if (c)
            return l[a.id] = c, c;
        var u = t.buffers, d = t.attributes, f = {}, p = {};
        for (var m in u)
            f[m] = 0, p[m] = 0;
        for (var m in d)
            !d[m].size && a.attributeData[m] ? d[m].size = a.attributeData[m].size : d[m].size || console.warn("PIXI Geometry attribute '".concat(m, "' size cannot be determined (likely the bound shader does not have the attribute)")), f[d[m].buffer] += d[m].size * hr[d[m].type];
        for (var m in d) {
            var _ = d[m], x = _.size;
            _.stride === void 0 && (f[_.buffer] === x * hr[_.type] ? _.stride = 0 : _.stride = f[_.buffer]), _.start === void 0 && (_.start = p[_.buffer], p[_.buffer] += x * hr[_.type]);
        }
        c = r.createVertexArray(), r.bindVertexArray(c);
        for (var m = 0; m < u.length; m++) {
            var _ = u[m];
            o.bind(_), s && _._glBuffers[n].refCount++;
        }
        return this.activateVao(t, a), l[a.id] = c, l[h] = c, r.bindVertexArray(null), o.unbind(Dt.ARRAY_BUFFER), c;
    };
    lr.prototype.disposeGeometry = function (t, e) { var a; if (!this.managedGeometries[t.id])
        return; delete this.managedGeometries[t.id]; var s = t.glVertexArrayObjects[this.CONTEXT_UID], r = this.gl, n = t.buffers, o = (a = this.renderer) == null ? void 0 : a.buffer; if (t.disposeRunner.remove(this), !!s) {
        if (o)
            for (var h = 0; h < n.length; h++) {
                var l = n[h]._glBuffers[this.CONTEXT_UID];
                l && (l.refCount--, l.refCount === 0 && !e && o.dispose(n[h], e));
            }
        if (!e) {
            for (var h in s)
                if (h[0] === "g") {
                    var l = s[h];
                    this._activeVao === l && this.unbind(), r.deleteVertexArray(l);
                }
        }
        delete t.glVertexArrayObjects[this.CONTEXT_UID];
    } };
    lr.prototype.disposeAll = function (t) { var e = Object.keys(this.managedGeometries); for (var s = 0; s < e.length; s++)
        this.disposeGeometry(this.managedGeometries[e[s]], t); };
    lr.prototype.activateVao = function (t, e) { var s = this.gl, r = this.CONTEXT_UID, n = this.renderer.buffer, o = t.buffers, a = t.attributes; t.indexBuffer && n.bind(t.indexBuffer); var h = null; for (var l in a) {
        var c = a[l], u = o[c.buffer], d = u._glBuffers[r];
        if (e.attributeData[l]) {
            h !== d && (n.bind(u), h = d);
            var f = e.attributeData[l].location;
            if (s.enableVertexAttribArray(f), s.vertexAttribPointer(f, c.size, c.type || s.FLOAT, c.normalized, c.stride, c.start), c.instance)
                if (this.hasInstance)
                    s.vertexAttribDivisor(f, 1);
                else
                    throw new Error("geometry error, GPU Instancing is not supported on this device");
        }
    } };
    lr.prototype.draw = function (t, e, s, r) { var n = this.gl, o = this._activeGeometry; if (o.indexBuffer) {
        var a = o.indexBuffer.data.BYTES_PER_ELEMENT, h = a === 2 ? n.UNSIGNED_SHORT : n.UNSIGNED_INT;
        a === 2 || a === 4 && this.canUseUInt32ElementIndex ? o.instanced ? n.drawElementsInstanced(t, e || o.indexBuffer.data.length, h, (s || 0) * a, r || 1) : n.drawElements(t, e || o.indexBuffer.data.length, h, (s || 0) * a) : console.warn("unsupported index buffer type: uint32");
    }
    else
        o.instanced ? n.drawArraysInstanced(t, s, e || o.getSize(), r || 1) : n.drawArrays(t, s, e || o.getSize()); return this; };
    lr.prototype.unbind = function () { this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null; };
    lr.prototype.destroy = function () { this.renderer = null; };
    return lr;
}());
lr.extension = { type: P.RendererSystem, name: "geometry" }, U.add(lr);
var mo = /** @class */ (function () {
    function mo(t) {
        if (t === void 0) { t = null; }
        this.type = ht.NONE, this.autoDetect = !0, this.maskObject = t || null, this.pooled = !1, this.isMaskData = !0, this.resolution = null, this.multisample = w.FILTER_MULTISAMPLE, this.enabled = !0, this.colorMask = 15, this._filters = null, this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null, this._scissorRectLocal = null, this._colorMask = 15, this._target = null;
    }
    Object.defineProperty(mo.prototype, "filter", {
        get: function () { return this._filters ? this._filters[0] : null; },
        set: function (t) { t ? this._filters ? this._filters[0] = t : this._filters = [t] : this._filters = null; },
        enumerable: false,
        configurable: true
    });
    mo.prototype.reset = function () { this.pooled && (this.maskObject = null, this.type = ht.NONE, this.autoDetect = !0), this._target = null, this._scissorRectLocal = null; };
    mo.prototype.copyCountersOrReset = function (t) { t ? (this._stencilCounter = t._stencilCounter, this._scissorCounter = t._scissorCounter, this._scissorRect = t._scissorRect) : (this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null); };
    return mo;
}());
function _o(i, t, e) { var s = i.createShader(t); return i.shaderSource(s, e), i.compileShader(s), s; }
function go(i, t) {
    var e = i.getShaderSource(t).split("\n").map(function (l, c) { return "".concat(c, ": ").concat(l); }), s = i.getShaderInfoLog(t), r = s.split("\n"), n = {}, o = r.map(function (l) { return parseFloat(l.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1")); }).filter(function (l) { return l && !n[l] ? (n[l] = !0, !0) : !1; }), a = [""];
    o.forEach(function (l) { e[l - 1] = "%c".concat(e[l - 1], "%c"), a.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px"); });
    var h = e.join("\n");
    a[0] = h, console.error(s), console.groupCollapsed("click to view full shader code"), console.warn.apply(console, a), console.groupEnd();
}
function Ju(i, t, e, s) { i.getProgramParameter(t, i.LINK_STATUS) || (i.getShaderParameter(e, i.COMPILE_STATUS) || go(i, e), i.getShaderParameter(s, i.COMPILE_STATUS) || go(i, s), console.error("PixiJS Error: Could not initialize shader."), i.getProgramInfoLog(t) !== "" && console.warn("PixiJS Warning: gl.getProgramInfoLog()", i.getProgramInfoLog(t))); }
function cr(i) { var t = new Array(i); for (var e = 0; e < t.length; e++)
    t[e] = !1; return t; }
function xo(i, t) { switch (i) {
    case "float": return 0;
    case "vec2": return new Float32Array(2 * t);
    case "vec3": return new Float32Array(3 * t);
    case "vec4": return new Float32Array(4 * t);
    case "int":
    case "uint":
    case "sampler2D":
    case "sampler2DArray": return 0;
    case "ivec2": return new Int32Array(2 * t);
    case "ivec3": return new Int32Array(3 * t);
    case "ivec4": return new Int32Array(4 * t);
    case "uvec2": return new Uint32Array(2 * t);
    case "uvec3": return new Uint32Array(3 * t);
    case "uvec4": return new Uint32Array(4 * t);
    case "bool": return !1;
    case "bvec2": return cr(2 * t);
    case "bvec3": return cr(3 * t);
    case "bvec4": return cr(4 * t);
    case "mat2": return new Float32Array([1, 0, 0, 1]);
    case "mat3": return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    case "mat4": return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
} return null; }
var vo = {};
var Ne = vo;
function yo() { if (Ne === vo || (Ne == null ? void 0 : Ne.isContextLost())) {
    var i = w.ADAPTER.createCanvas();
    var t = void 0;
    w.PREFER_ENV >= re.WEBGL2 && (t = i.getContext("webgl2", {})), t || (t = i.getContext("webgl", {}) || i.getContext("experimental-webgl", {}), t ? t.getExtension("WEBGL_draw_buffers") : t = null), Ne = t;
} return Ne; }
var Xi;
function td() { if (!Xi) {
    Xi = bt.MEDIUM;
    var i = yo();
    i && i.getShaderPrecisionFormat && (Xi = i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision ? bt.HIGH : bt.MEDIUM);
} return Xi; }
function bo(i, t, e) {
    if (i.substring(0, 9) !== "precision") {
        var s = t;
        return t === bt.HIGH && e !== bt.HIGH && (s = bt.MEDIUM), "precision ".concat(s, " float;\n").concat(i);
    }
    else if (e !== bt.HIGH && i.substring(0, 15) === "precision highp")
        return i.replace("precision highp", "precision mediump");
    return i;
}
var ed = { float: 1, vec2: 2, vec3: 3, vec4: 4, int: 1, ivec2: 2, ivec3: 3, ivec4: 4, uint: 1, uvec2: 2, uvec3: 3, uvec4: 4, bool: 1, bvec2: 2, bvec3: 3, bvec4: 4, mat2: 4, mat3: 9, mat4: 16, sampler2D: 1 };
function To(i) { return ed[i]; }
var Vi = null;
var Eo = { FLOAT: "float", FLOAT_VEC2: "vec2", FLOAT_VEC3: "vec3", FLOAT_VEC4: "vec4", INT: "int", INT_VEC2: "ivec2", INT_VEC3: "ivec3", INT_VEC4: "ivec4", UNSIGNED_INT: "uint", UNSIGNED_INT_VEC2: "uvec2", UNSIGNED_INT_VEC3: "uvec3", UNSIGNED_INT_VEC4: "uvec4", BOOL: "bool", BOOL_VEC2: "bvec2", BOOL_VEC3: "bvec3", BOOL_VEC4: "bvec4", FLOAT_MAT2: "mat2", FLOAT_MAT3: "mat3", FLOAT_MAT4: "mat4", SAMPLER_2D: "sampler2D", INT_SAMPLER_2D: "sampler2D", UNSIGNED_INT_SAMPLER_2D: "sampler2D", SAMPLER_CUBE: "samplerCube", INT_SAMPLER_CUBE: "samplerCube", UNSIGNED_INT_SAMPLER_CUBE: "samplerCube", SAMPLER_2D_ARRAY: "sampler2DArray", INT_SAMPLER_2D_ARRAY: "sampler2DArray", UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray" };
function wo(i, t) { if (!Vi) {
    var e = Object.keys(Eo);
    Vi = {};
    for (var s = 0; s < e.length; ++s) {
        var r = e[s];
        Vi[i[r]] = Eo[r];
    }
} return Vi[t]; }
var ve = [{ test: function (i) { return i.type === "float" && i.size === 1 && !i.isArray; }, code: function (i) { return "\n            if(uv[\"".concat(i, "\"] !== ud[\"").concat(i, "\"].value)\n            {\n                ud[\"").concat(i, "\"].value = uv[\"").concat(i, "\"]\n                gl.uniform1f(ud[\"").concat(i, "\"].location, uv[\"").concat(i, "\"])\n            }\n            "); } }, { test: function (i, t) { return (i.type === "sampler2D" || i.type === "samplerCube" || i.type === "sampler2DArray") && i.size === 1 && !i.isArray && (t == null || t.castToBaseTexture !== void 0); }, code: function (i) { return "t = syncData.textureCount++;\n\n            renderer.texture.bind(uv[\"".concat(i, "\"], t);\n\n            if(ud[\"").concat(i, "\"].value !== t)\n            {\n                ud[\"").concat(i, "\"].value = t;\n                gl.uniform1i(ud[\"").concat(i, "\"].location, t);\n; // eslint-disable-line max-len\n            }"); } }, { test: function (i, t) { return i.type === "mat3" && i.size === 1 && !i.isArray && t.a !== void 0; }, code: function (i) { return "\n            gl.uniformMatrix3fv(ud[\"".concat(i, "\"].location, false, uv[\"").concat(i, "\"].toArray(true));\n            "); }, codeUbo: function (i) { return "\n                var ".concat(i, "_matrix = uv.").concat(i, ".toArray(true);\n\n                data[offset] = ").concat(i, "_matrix[0];\n                data[offset+1] = ").concat(i, "_matrix[1];\n                data[offset+2] = ").concat(i, "_matrix[2];\n        \n                data[offset + 4] = ").concat(i, "_matrix[3];\n                data[offset + 5] = ").concat(i, "_matrix[4];\n                data[offset + 6] = ").concat(i, "_matrix[5];\n        \n                data[offset + 8] = ").concat(i, "_matrix[6];\n                data[offset + 9] = ").concat(i, "_matrix[7];\n                data[offset + 10] = ").concat(i, "_matrix[8];\n            "); } }, { test: function (i, t) { return i.type === "vec2" && i.size === 1 && !i.isArray && t.x !== void 0; }, code: function (i) { return "\n                cv = ud[\"".concat(i, "\"].value;\n                v = uv[\"").concat(i, "\"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud[\"").concat(i, "\"].location, v.x, v.y);\n                }"); }, codeUbo: function (i) { return "\n                v = uv.".concat(i, ";\n\n                data[offset] = v.x;\n                data[offset+1] = v.y;\n            "); } }, { test: function (i) { return i.type === "vec2" && i.size === 1 && !i.isArray; }, code: function (i) { return "\n                cv = ud[\"".concat(i, "\"].value;\n                v = uv[\"").concat(i, "\"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud[\"").concat(i, "\"].location, v[0], v[1]);\n                }\n            "); } }, { test: function (i, t) { return i.type === "vec4" && i.size === 1 && !i.isArray && t.width !== void 0; }, code: function (i) { return "\n                cv = ud[\"".concat(i, "\"].value;\n                v = uv[\"").concat(i, "\"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud[\"").concat(i, "\"].location, v.x, v.y, v.width, v.height)\n                }"); }, codeUbo: function (i) { return "\n                    v = uv.".concat(i, ";\n\n                    data[offset] = v.x;\n                    data[offset+1] = v.y;\n                    data[offset+2] = v.width;\n                    data[offset+3] = v.height;\n                "); } }, { test: function (i) { return i.type === "vec4" && i.size === 1 && !i.isArray; }, code: function (i) { return "\n                cv = ud[\"".concat(i, "\"].value;\n                v = uv[\"").concat(i, "\"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud[\"").concat(i, "\"].location, v[0], v[1], v[2], v[3])\n                }"); } }], id = { float: "\n    if (cv !== v)\n    {\n        cu.value = v;\n        gl.uniform1f(location, v);\n    }", vec2: "\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2f(location, v[0], v[1])\n    }", vec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }", vec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4f(location, v[0], v[1], v[2], v[3]);\n    }", int: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }", ivec2: "\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2i(location, v[0], v[1]);\n    }", ivec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3i(location, v[0], v[1], v[2]);\n    }", ivec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n    }", uint: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1ui(location, v);\n    }", uvec2: "\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2ui(location, v[0], v[1]);\n    }", uvec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3ui(location, v[0], v[1], v[2]);\n    }", uvec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);\n    }", bool: "\n    if (cv !== v)\n    {\n        cu.value = v;\n        gl.uniform1i(location, v);\n    }", bvec2: "\n    if (cv[0] != v[0] || cv[1] != v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2i(location, v[0], v[1]);\n    }", bvec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3i(location, v[0], v[1], v[2]);\n    }", bvec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n    }", mat2: "gl.uniformMatrix2fv(location, false, v)", mat3: "gl.uniformMatrix3fv(location, false, v)", mat4: "gl.uniformMatrix4fv(location, false, v)", sampler2D: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }", samplerCube: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }", sampler2DArray: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }" }, sd = { float: "gl.uniform1fv(location, v)", vec2: "gl.uniform2fv(location, v)", vec3: "gl.uniform3fv(location, v)", vec4: "gl.uniform4fv(location, v)", mat4: "gl.uniformMatrix4fv(location, false, v)", mat3: "gl.uniformMatrix3fv(location, false, v)", mat2: "gl.uniformMatrix2fv(location, false, v)", int: "gl.uniform1iv(location, v)", ivec2: "gl.uniform2iv(location, v)", ivec3: "gl.uniform3iv(location, v)", ivec4: "gl.uniform4iv(location, v)", uint: "gl.uniform1uiv(location, v)", uvec2: "gl.uniform2uiv(location, v)", uvec3: "gl.uniform3uiv(location, v)", uvec4: "gl.uniform4uiv(location, v)", bool: "gl.uniform1iv(location, v)", bvec2: "gl.uniform2iv(location, v)", bvec3: "gl.uniform3iv(location, v)", bvec4: "gl.uniform4iv(location, v)", sampler2D: "gl.uniform1iv(location, v)", samplerCube: "gl.uniform1iv(location, v)", sampler2DArray: "gl.uniform1iv(location, v)" };
function rd(i, t) {
    var s;
    var e = ["\n        var v = null;\n        var cv = null;\n        var cu = null;\n        var t = 0;\n        var gl = renderer.gl;\n    "];
    for (var r in i.uniforms) {
        var n = t[r];
        if (!n) {
            (s = i.uniforms[r]) != null && s.group && (i.uniforms[r].ubo ? e.push("\n                        renderer.shader.syncUniformBufferGroup(uv.".concat(r, ", '").concat(r, "');\n                    ")) : e.push("\n                        renderer.shader.syncUniformGroup(uv.".concat(r, ", syncData);\n                    ")));
            continue;
        }
        var o = i.uniforms[r];
        var a = !1;
        for (var h = 0; h < ve.length; h++)
            if (ve[h].test(n, o)) {
                e.push(ve[h].code(r, o)), a = !0;
                break;
            }
        if (!a) {
            var l = (n.size === 1 && !n.isArray ? id : sd)[n.type].replace("location", "ud[\"".concat(r, "\"].location"));
            e.push("\n            cu = ud[\"".concat(r, "\"];\n            cv = cu.value;\n            v = uv[\"").concat(r, "\"];\n            ").concat(l, ";"));
        }
    }
    return new Function("ud", "uv", "renderer", "syncData", e.join("\n"));
}
var nd = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n");
function od(i) {
    var t = "";
    for (var e = 0; e < i; ++e)
        e > 0 && (t += "\nelse "), e < i - 1 && (t += "if(test == ".concat(e, ".0){}"));
    return t;
}
function Ao(i, t) { if (i === 0)
    throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`"); var e = t.createShader(t.FRAGMENT_SHADER); for (;;) {
    var s = nd.replace(/%forloop%/gi, od(i));
    if (t.shaderSource(e, s), t.compileShader(e), !t.getShaderParameter(e, t.COMPILE_STATUS))
        i = i / 2 | 0;
    else
        break;
} return i; }
var Je;
function ad() { if (typeof Je == "boolean")
    return Je; try {
    Je = new Function("param1", "param2", "param3", "return param1[param2] === param3;")({ a: "b" }, "a", "b") === !0;
}
catch (i) {
    Je = !1;
} return Je; }
var hd = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}", ld = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n";
var cd = 0;
var zi = {};
var $t = /** @class */ (function () {
    function $t(t, e, s, r) {
        if (s === void 0) { s = "pixi-shader"; }
        if (r === void 0) { r = {}; }
        this.extra = {}, this.id = cd++, this.vertexSrc = t || $t.defaultVertexSrc, this.fragmentSrc = e || $t.defaultFragmentSrc, this.vertexSrc = this.vertexSrc.trim(), this.fragmentSrc = this.fragmentSrc.trim(), this.extra = r, this.vertexSrc.substring(0, 8) !== "#version" && (s = s.replace(/\s+/g, "-"), zi[s] ? (zi[s]++, s += "-".concat(zi[s])) : zi[s] = 1, this.vertexSrc = "#define SHADER_NAME ".concat(s, "\n").concat(this.vertexSrc), this.fragmentSrc = "#define SHADER_NAME ".concat(s, "\n").concat(this.fragmentSrc), this.vertexSrc = bo(this.vertexSrc, w.PRECISION_VERTEX, bt.HIGH), this.fragmentSrc = bo(this.fragmentSrc, w.PRECISION_FRAGMENT, td())), this.glPrograms = {}, this.syncUniforms = null;
    }
    Object.defineProperty($t, "defaultVertexSrc", {
        get: function () { return ld; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($t, "defaultFragmentSrc", {
        get: function () { return hd; },
        enumerable: false,
        configurable: true
    });
    $t.from = function (t, e, s) { var r = t + e; var n = js[r]; return n || (js[r] = n = new $t(t, e, s)), n; };
    return $t;
}());
var kt = /** @class */ (function () {
    function kt(t, e) {
        this.uniformBindCount = 0, this.program = t, e ? e instanceof It ? this.uniformGroup = e : this.uniformGroup = new It(e) : this.uniformGroup = new It({}), this.disposeRunner = new Tt("disposeShader");
    }
    kt.prototype.checkUniformExists = function (t, e) { if (e.uniforms[t])
        return !0; for (var s in e.uniforms) {
        var r = e.uniforms[s];
        if (r.group && this.checkUniformExists(t, r))
            return !0;
    } return !1; };
    kt.prototype.destroy = function () { this.uniformGroup = null, this.disposeRunner.emit(this), this.disposeRunner.destroy(); };
    Object.defineProperty(kt.prototype, "uniforms", {
        get: function () { return this.uniformGroup.uniforms; },
        enumerable: false,
        configurable: true
    });
    kt.from = function (t, e, s) { var r = $t.from(t, e); return new kt(r, s); };
    return kt;
}());
var ur = 0, dr = 1, fr = 2, pr = 3, mr = 4, _r = 5;
var Yt = /** @class */ (function () {
    function Yt() {
        this.data = 0, this.blendMode = k.NORMAL, this.polygonOffset = 0, this.blend = !0, this.depthMask = !0;
    }
    Object.defineProperty(Yt.prototype, "blend", {
        get: function () { return !!(this.data & 1 << ur); },
        set: function (t) { !!(this.data & 1 << ur) !== t && (this.data ^= 1 << ur); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Yt.prototype, "offsets", {
        get: function () { return !!(this.data & 1 << dr); },
        set: function (t) { !!(this.data & 1 << dr) !== t && (this.data ^= 1 << dr); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Yt.prototype, "culling", {
        get: function () { return !!(this.data & 1 << fr); },
        set: function (t) { !!(this.data & 1 << fr) !== t && (this.data ^= 1 << fr); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Yt.prototype, "depthTest", {
        get: function () { return !!(this.data & 1 << pr); },
        set: function (t) { !!(this.data & 1 << pr) !== t && (this.data ^= 1 << pr); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Yt.prototype, "depthMask", {
        get: function () { return !!(this.data & 1 << _r); },
        set: function (t) { !!(this.data & 1 << _r) !== t && (this.data ^= 1 << _r); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Yt.prototype, "clockwiseFrontFace", {
        get: function () { return !!(this.data & 1 << mr); },
        set: function (t) { !!(this.data & 1 << mr) !== t && (this.data ^= 1 << mr); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Yt.prototype, "blendMode", {
        get: function () { return this._blendMode; },
        set: function (t) { this.blend = t !== k.NONE, this._blendMode = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Yt.prototype, "polygonOffset", {
        get: function () { return this._polygonOffset; },
        set: function (t) { this.offsets = !!t, this._polygonOffset = t; },
        enumerable: false,
        configurable: true
    });
    Yt.prototype.toString = function () { return "[@pixi/core:State blendMode=".concat(this.blendMode, " clockwiseFrontFace=").concat(this.clockwiseFrontFace, " culling=").concat(this.culling, " depthMask=").concat(this.depthMask, " polygonOffset=").concat(this.polygonOffset, "]"); };
    Yt.for2d = function () { var t = new Yt; return t.depthTest = !1, t.blend = !0, t; };
    return Yt;
}());
var ud = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n", dd = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";
var Ct = /** @class */ (function (_super) {
    __extends(Ct, _super);
    function Ct(t, e, s) {
        var _this = this;
        var r = $t.from(t || Ct.defaultVertexSrc, e || Ct.defaultFragmentSrc);
        _this = _super.call(this, r, s) || this, _this.padding = 0, _this.resolution = w.FILTER_RESOLUTION, _this.multisample = w.FILTER_MULTISAMPLE, _this.enabled = !0, _this.autoFit = !0, _this.state = new Yt;
        return _this;
    }
    Ct.prototype.apply = function (t, e, s, r, n) { t.applyFilter(this, e, s, r); };
    Object.defineProperty(Ct.prototype, "blendMode", {
        get: function () { return this.state.blendMode; },
        set: function (t) { this.state.blendMode = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ct.prototype, "resolution", {
        get: function () { return this._resolution; },
        set: function (t) { this._resolution = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ct, "defaultVertexSrc", {
        get: function () { return dd; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ct, "defaultFragmentSrc", {
        get: function () { return ud; },
        enumerable: false,
        configurable: true
    });
    return Ct;
}(kt));
var fd = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n", pd = "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n";
var So = new Z;
var Wi = /** @class */ (function () {
    function Wi(t, e) {
        this._texture = t, this.mapCoord = new Z, this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._textureID = -1, this._updateID = 0, this.clampOffset = 0, this.clampMargin = typeof e == "undefined" ? .5 : e, this.isSimple = !1;
    }
    Object.defineProperty(Wi.prototype, "texture", {
        get: function () { return this._texture; },
        set: function (t) { this._texture = t, this._textureID = -1; },
        enumerable: false,
        configurable: true
    });
    Wi.prototype.multiplyUvs = function (t, e) { e === void 0 && (e = t); var s = this.mapCoord; for (var r = 0; r < t.length; r += 2) {
        var n = t[r], o = t[r + 1];
        e[r] = n * s.a + o * s.c + s.tx, e[r + 1] = n * s.b + o * s.d + s.ty;
    } return e; };
    Wi.prototype.update = function (t) { var e = this._texture; if (!e || !e.valid || !t && this._textureID === e._updateID)
        return !1; this._textureID = e._updateID, this._updateID++; var s = e._uvs; this.mapCoord.set(s.x1 - s.x0, s.y1 - s.y0, s.x3 - s.x0, s.y3 - s.y0, s.x0, s.y0); var r = e.orig, n = e.trim; n && (So.set(r.width / n.width, 0, 0, r.height / n.height, -n.x / n.width, -n.y / n.height), this.mapCoord.append(So)); var o = e.baseTexture, a = this.uClampFrame, h = this.clampMargin / o.resolution, l = this.clampOffset; return a[0] = (e._frame.x + h + l) / o.width, a[1] = (e._frame.y + h + l) / o.height, a[2] = (e._frame.x + e._frame.width - h + l) / o.width, a[3] = (e._frame.y + e._frame.height - h + l) / o.height, this.uClampOffset[0] = l / o.realWidth, this.uClampOffset[1] = l / o.realHeight, this.isSimple = e._frame.width === o.width && e._frame.height === o.height && e.rotate === 0, !0; };
    return Wi;
}());
var Ro = /** @class */ (function (_super) {
    __extends(Ro, _super);
    function Ro(t, e, s) {
        var _this = this;
        var r = null;
        typeof t != "string" && e === void 0 && s === void 0 && (r = t, t = void 0, e = void 0, s = void 0), _this = _super.call(this, t || fd, e || pd, s) || this, _this.maskSprite = r, _this.maskMatrix = new Z;
        return _this;
    }
    Object.defineProperty(Ro.prototype, "maskSprite", {
        get: function () { return this._maskSprite; },
        set: function (t) { this._maskSprite = t, this._maskSprite && (this._maskSprite.renderable = !1); },
        enumerable: false,
        configurable: true
    });
    Ro.prototype.apply = function (t, e, s, r) { var n = this._maskSprite, o = n._texture; !o.valid || (o.uvMatrix || (o.uvMatrix = new Wi(o, 0)), o.uvMatrix.update(), this.uniforms.npmAlpha = o.baseTexture.alphaMode ? 0 : 1, this.uniforms.mask = o, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, n).prepend(o.uvMatrix.mapCoord), this.uniforms.alpha = n.worldAlpha, this.uniforms.maskClamp = o.uvMatrix.uClampFrame, t.applyFilter(this, e, s, r)); };
    return Ro;
}(Ct));
var gr = /** @class */ (function () {
    function gr(t) {
        this.renderer = t, this.enableScissor = !0, this.alphaMaskPool = [], this.maskDataPool = [], this.maskStack = [], this.alphaMaskIndex = 0;
    }
    gr.prototype.setMaskStack = function (t) { this.maskStack = t, this.renderer.scissor.setMaskStack(t), this.renderer.stencil.setMaskStack(t); };
    gr.prototype.push = function (t, e) { var s = e; if (!s.isMaskData) {
        var n = this.maskDataPool.pop() || new mo;
        n.pooled = !0, n.maskObject = e, s = n;
    } var r = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null; if (s.copyCountersOrReset(r), s._colorMask = r ? r._colorMask : 15, s.autoDetect && this.detect(s), s._target = t, s.type !== ht.SPRITE && this.maskStack.push(s), s.enabled)
        switch (s.type) {
            case ht.SCISSOR:
                this.renderer.scissor.push(s);
                break;
            case ht.STENCIL:
                this.renderer.stencil.push(s);
                break;
            case ht.SPRITE:
                s.copyCountersOrReset(null), this.pushSpriteMask(s);
                break;
            case ht.COLOR:
                this.pushColorMask(s);
                break;
            default: break;
        } s.type === ht.SPRITE && this.maskStack.push(s); };
    gr.prototype.pop = function (t) { var e = this.maskStack.pop(); if (!(!e || e._target !== t)) {
        if (e.enabled)
            switch (e.type) {
                case ht.SCISSOR:
                    this.renderer.scissor.pop(e);
                    break;
                case ht.STENCIL:
                    this.renderer.stencil.pop(e.maskObject);
                    break;
                case ht.SPRITE:
                    this.popSpriteMask(e);
                    break;
                case ht.COLOR:
                    this.popColorMask(e);
                    break;
                default: break;
            }
        if (e.reset(), e.pooled && this.maskDataPool.push(e), this.maskStack.length !== 0) {
            var s = this.maskStack[this.maskStack.length - 1];
            s.type === ht.SPRITE && s._filters && (s._filters[0].maskSprite = s.maskObject);
        }
    } };
    gr.prototype.detect = function (t) { var e = t.maskObject; e ? e.isSprite ? t.type = ht.SPRITE : this.enableScissor && this.renderer.scissor.testScissor(t) ? t.type = ht.SCISSOR : t.type = ht.STENCIL : t.type = ht.COLOR; };
    gr.prototype.pushSpriteMask = function (t) { var c, u; var e = t.maskObject, s = t._target; var r = t._filters; r || (r = this.alphaMaskPool[this.alphaMaskIndex], r || (r = this.alphaMaskPool[this.alphaMaskIndex] = [new Ro])); var n = this.renderer, o = n.renderTexture; var a, h; if (o.current) {
        var d = o.current;
        a = t.resolution || d.resolution, h = (c = t.multisample) != null ? c : d.multisample;
    }
    else
        a = t.resolution || n.resolution, h = (u = t.multisample) != null ? u : n.multisample; r[0].resolution = a, r[0].multisample = h, r[0].maskSprite = e; var l = s.filterArea; s.filterArea = e.getBounds(!0), n.filter.push(s, r), s.filterArea = l, t._filters || this.alphaMaskIndex++; };
    gr.prototype.popSpriteMask = function (t) { this.renderer.filter.pop(), t._filters ? t._filters[0].maskSprite = null : (this.alphaMaskIndex--, this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null); };
    gr.prototype.pushColorMask = function (t) { var e = t._colorMask, s = t._colorMask = e & t.colorMask; s !== e && this.renderer.gl.colorMask((s & 1) !== 0, (s & 2) !== 0, (s & 4) !== 0, (s & 8) !== 0); };
    gr.prototype.popColorMask = function (t) { var e = t._colorMask, s = this.maskStack.length > 0 ? this.maskStack[this.maskStack.length - 1]._colorMask : 15; s !== e && this.renderer.gl.colorMask((s & 1) !== 0, (s & 2) !== 0, (s & 4) !== 0, (s & 8) !== 0); };
    gr.prototype.destroy = function () { this.renderer = null; };
    return gr;
}());
gr.extension = { type: P.RendererSystem, name: "mask" }, U.add(gr);
var Co = /** @class */ (function () {
    function Co(t) {
        this.renderer = t, this.maskStack = [], this.glConst = 0;
    }
    Co.prototype.getStackLength = function () { return this.maskStack.length; };
    Co.prototype.setMaskStack = function (t) { var e = this.renderer.gl, s = this.getStackLength(); this.maskStack = t; var r = this.getStackLength(); r !== s && (r === 0 ? e.disable(this.glConst) : (e.enable(this.glConst), this._useCurrent())); };
    Co.prototype._useCurrent = function () { };
    Co.prototype.destroy = function () { this.renderer = null, this.maskStack = null; };
    return Co;
}());
var Io = new Z, Po = [], ji = /** @class */ (function (_super) {
    __extends(ji, _super);
    function ji(i) {
        var _this = this;
        _this = _super.call(this, i) || this, _this.glConst = w.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST;
        return _this;
    }
    ji.prototype.getStackLength = function () { var i = this.maskStack[this.maskStack.length - 1]; return i ? i._scissorCounter : 0; };
    ji.prototype.calcScissorRect = function (i) { var o; if (i._scissorRectLocal)
        return; var t = i._scissorRect, e = i.maskObject, s = this.renderer, r = s.renderTexture, n = e.getBounds(!0, (o = Po.pop()) != null ? o : new V); this.roundFrameToPixels(n, r.current ? r.current.resolution : s.resolution, r.sourceFrame, r.destinationFrame, s.projection.transform), t && n.fit(t), i._scissorRectLocal = n; };
    ji.isMatrixRotated = function (i) { if (!i)
        return !1; var t = i.a, e = i.b, s = i.c, r = i.d; return (Math.abs(e) > 1e-4 || Math.abs(s) > 1e-4) && (Math.abs(t) > 1e-4 || Math.abs(r) > 1e-4); };
    ji.prototype.testScissor = function (i) { var t = i.maskObject; if (!t.isFastRect || !t.isFastRect() || ji.isMatrixRotated(t.worldTransform) || ji.isMatrixRotated(this.renderer.projection.transform))
        return !1; this.calcScissorRect(i); var e = i._scissorRectLocal; return e.width > 0 && e.height > 0; };
    ji.prototype.roundFrameToPixels = function (i, t, e, s, r) { ji.isMatrixRotated(r) || (r = r ? Io.copyFrom(r) : Io.identity(), r.translate(-e.x, -e.y).scale(s.width / e.width, s.height / e.height).translate(s.x, s.y), this.renderer.filter.transformAABB(r, i), i.fit(s), i.x = Math.round(i.x * t), i.y = Math.round(i.y * t), i.width = Math.round(i.width * t), i.height = Math.round(i.height * t)); };
    ji.prototype.push = function (i) { i._scissorRectLocal || this.calcScissorRect(i); var t = this.renderer.gl; i._scissorRect || t.enable(t.SCISSOR_TEST), i._scissorCounter++, i._scissorRect = i._scissorRectLocal, this._useCurrent(); };
    ji.prototype.pop = function (i) { var t = this.renderer.gl; i && Po.push(i._scissorRectLocal), this.getStackLength() > 0 ? this._useCurrent() : t.disable(t.SCISSOR_TEST); };
    ji.prototype._useCurrent = function () { var i = this.maskStack[this.maskStack.length - 1]._scissorRect; var t; this.renderer.renderTexture.current ? t = i.y : t = this.renderer.height - i.height - i.y, this.renderer.gl.scissor(i.x, t, i.width, i.height); };
    return ji;
}(Co));
var xr = ji;
xr.extension = { type: P.RendererSystem, name: "scissor" }, U.add(xr);
var vr = /** @class */ (function (_super) {
    __extends(vr, _super);
    function vr(t) {
        var _this = this;
        _this = _super.call(this, t) || this, _this.glConst = w.ADAPTER.getWebGLRenderingContext().STENCIL_TEST;
        return _this;
    }
    vr.prototype.getStackLength = function () { var t = this.maskStack[this.maskStack.length - 1]; return t ? t._stencilCounter : 0; };
    vr.prototype.push = function (t) { var e = t.maskObject, s = this.renderer.gl, r = t._stencilCounter; r === 0 && (this.renderer.framebuffer.forceStencil(), s.clearStencil(0), s.clear(s.STENCIL_BUFFER_BIT), s.enable(s.STENCIL_TEST)), t._stencilCounter++; var n = t._colorMask; n !== 0 && (t._colorMask = 0, s.colorMask(!1, !1, !1, !1)), s.stencilFunc(s.EQUAL, r, 4294967295), s.stencilOp(s.KEEP, s.KEEP, s.INCR), e.renderable = !0, e.render(this.renderer), this.renderer.batch.flush(), e.renderable = !1, n !== 0 && (t._colorMask = n, s.colorMask((n & 1) !== 0, (n & 2) !== 0, (n & 4) !== 0, (n & 8) !== 0)), this._useCurrent(); };
    vr.prototype.pop = function (t) { var e = this.renderer.gl; if (this.getStackLength() === 0)
        e.disable(e.STENCIL_TEST);
    else {
        var s = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null, r = s ? s._colorMask : 15;
        r !== 0 && (s._colorMask = 0, e.colorMask(!1, !1, !1, !1)), e.stencilOp(e.KEEP, e.KEEP, e.DECR), t.renderable = !0, t.render(this.renderer), this.renderer.batch.flush(), t.renderable = !1, r !== 0 && (s._colorMask = r, e.colorMask((r & 1) !== 0, (r & 2) !== 0, (r & 4) !== 0, (r & 8) !== 0)), this._useCurrent();
    } };
    vr.prototype._useCurrent = function () { var t = this.renderer.gl; t.stencilFunc(t.EQUAL, this.getStackLength(), 4294967295), t.stencilOp(t.KEEP, t.KEEP, t.KEEP); };
    return vr;
}(Co));
vr.extension = { type: P.RendererSystem, name: "stencil" }, U.add(vr);
var yr = /** @class */ (function () {
    function yr(t) {
        this.renderer = t, this.destinationFrame = null, this.sourceFrame = null, this.defaultFrame = null, this.projectionMatrix = new Z, this.transform = null;
    }
    yr.prototype.update = function (t, e, s, r) { this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = e || this.sourceFrame || t, this.calculateProjection(this.destinationFrame, this.sourceFrame, s, r), this.transform && this.projectionMatrix.append(this.transform); var n = this.renderer; n.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix, n.globalUniforms.update(), n.shader.shader && n.shader.syncUniformGroup(n.shader.shader.uniforms.globals); };
    yr.prototype.calculateProjection = function (t, e, s, r) { var n = this.projectionMatrix, o = r ? -1 : 1; n.identity(), n.a = 1 / e.width * 2, n.d = o * (1 / e.height * 2), n.tx = -1 - e.x * n.a, n.ty = -o - e.y * n.d; };
    yr.prototype.setTransform = function (t) { };
    yr.prototype.destroy = function () { this.renderer = null; };
    return yr;
}());
yr.extension = { type: P.RendererSystem, name: "projection" }, U.add(yr);
var ye = new V, ti = new V;
var br = /** @class */ (function () {
    function br(t) {
        this.renderer = t, this.defaultMaskStack = [], this.current = null, this.sourceFrame = new V, this.destinationFrame = new V, this.viewportFrame = new V;
    }
    br.prototype.bind = function (t, e, s) {
        if (t === void 0) { t = null; }
        var r = this.renderer;
        this.current = t;
        var n, o, a;
        t ? (n = t.baseTexture, a = n.resolution, e || (ye.width = t.frame.width, ye.height = t.frame.height, e = ye), s || (ti.x = t.frame.x, ti.y = t.frame.y, ti.width = e.width, ti.height = e.height, s = ti), o = n.framebuffer) : (a = r.resolution, e || (ye.width = r._view.screen.width, ye.height = r._view.screen.height, e = ye), s || (s = ye, s.width = e.width, s.height = e.height));
        var h = this.viewportFrame;
        h.x = s.x * a, h.y = s.y * a, h.width = s.width * a, h.height = s.height * a, t || (h.y = r.view.height - (h.y + h.height)), h.ceil(), this.renderer.framebuffer.bind(o, h), this.renderer.projection.update(s, e, a, !o), t ? this.renderer.mask.setMaskStack(n.maskStack) : this.renderer.mask.setMaskStack(this.defaultMaskStack), this.sourceFrame.copyFrom(e), this.destinationFrame.copyFrom(s);
    };
    br.prototype.clear = function (t, e) { this.current ? t = t || this.current.baseTexture.clearColor : t = t || this.renderer.background.colorRgba; var s = this.destinationFrame, r = this.current ? this.current.baseTexture : this.renderer._view.screen, n = s.width !== r.width || s.height !== r.height; if (n) {
        var _b = this.viewportFrame, o = _b.x, a = _b.y, h = _b.width, l = _b.height;
        o = Math.round(o), a = Math.round(a), h = Math.round(h), l = Math.round(l), this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST), this.renderer.gl.scissor(o, a, h, l);
    } this.renderer.framebuffer.clear(t[0], t[1], t[2], t[3], e), n && this.renderer.scissor.pop(); };
    br.prototype.resize = function () { this.bind(null); };
    br.prototype.reset = function () { this.bind(null); };
    br.prototype.destroy = function () { this.renderer = null; };
    return br;
}());
br.extension = { type: P.RendererSystem, name: "renderTexture" }, U.add(br);
function md(i, t, e, s, r) { e.buffer.update(r); }
var _d = { float: "\n        data[offset] = v;\n    ", vec2: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n    ", vec3: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n    ", vec4: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n        data[offset+3] = v[3];\n    ", mat2: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n\n        data[offset+4] = v[2];\n        data[offset+5] = v[3];\n    ", mat3: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n        data[offset + 4] = v[3];\n        data[offset + 5] = v[4];\n        data[offset + 6] = v[5];\n\n        data[offset + 8] = v[6];\n        data[offset + 9] = v[7];\n        data[offset + 10] = v[8];\n    ", mat4: "\n        for(var i = 0; i < 16; i++)\n        {\n            data[offset + i] = v[i];\n        }\n    " }, Mo = { float: 4, vec2: 8, vec3: 12, vec4: 16, int: 4, ivec2: 8, ivec3: 12, ivec4: 16, uint: 4, uvec2: 8, uvec3: 12, uvec4: 16, bool: 4, bvec2: 8, bvec3: 12, bvec4: 16, mat2: 16 * 2, mat3: 16 * 3, mat4: 16 * 4 };
function Bo(i) { var t = i.map(function (n) { return ({ data: n, offset: 0, dataLen: 0, dirty: 0 }); }); var e = 0, s = 0, r = 0; for (var n = 0; n < t.length; n++) {
    var o = t[n];
    if (e = Mo[o.data.type], o.data.size > 1 && (e = Math.max(e, 16) * o.data.size), o.dataLen = e, s % e !== 0 && s < 16) {
        var a = s % e % 16;
        s += a, r += a;
    }
    s + e > 16 ? (r = Math.ceil(r / 16) * 16, o.offset = r, r += e, s = e) : (o.offset = r, s += e, r += e);
} return r = Math.ceil(r / 16) * 16, { uboElements: t, size: r }; }
function Do(i, t) { var e = []; for (var s in i)
    t[s] && e.push(t[s]); return e.sort(function (s, r) { return s.index - r.index; }), e; }
function No(i, t) {
    if (!i.autoManage)
        return { size: 0, syncFunc: md };
    var e = Do(i.uniforms, t), _b = Bo(e), s = _b.uboElements, r = _b.size, n = ["\n    var v = null;\n    var v2 = null;\n    var cv = null;\n    var t = 0;\n    var gl = renderer.gl\n    var index = 0;\n    var data = buffer.data;\n    "];
    for (var o = 0; o < s.length; o++) {
        var a = s[o], h = i.uniforms[a.data.name], l = a.data.name;
        var c = !1;
        for (var u = 0; u < ve.length; u++) {
            var d = ve[u];
            if (d.codeUbo && d.test(a.data, h)) {
                n.push("offset = ".concat(a.offset / 4, ";"), ve[u].codeUbo(a.data.name, h)), c = !0;
                break;
            }
        }
        if (!c)
            if (a.data.size > 1) {
                var u = To(a.data.type), d = Math.max(Mo[a.data.type] / 16, 1), f = u / d, p = (4 - f % 4) % 4;
                n.push("\n                cv = ud.".concat(l, ".value;\n                v = uv.").concat(l, ";\n                offset = ").concat(a.offset / 4, ";\n\n                t = 0;\n\n                for(var i=0; i < ").concat(a.data.size * d, "; i++)\n                {\n                    for(var j = 0; j < ").concat(f, "; j++)\n                    {\n                        data[offset++] = v[t++];\n                    }\n                    offset += ").concat(p, ";\n                }\n\n                "));
            }
            else {
                var u = _d[a.data.type];
                n.push("\n                cv = ud.".concat(l, ".value;\n                v = uv.").concat(l, ";\n                offset = ").concat(a.offset / 4, ";\n                ").concat(u, ";\n                "));
            }
    }
    return n.push("\n       renderer.buffer.update(buffer);\n    "), { size: r, syncFunc: new Function("ud", "uv", "renderer", "syncData", "buffer", n.join("\n")) };
}
var gd = /** @class */ (function () {
    function gd() {
    }
    return gd;
}());
var Fo = /** @class */ (function () {
    function Fo(t, e) {
        this.program = t, this.uniformData = e, this.uniformGroups = {}, this.uniformDirtyGroups = {}, this.uniformBufferBindings = {};
    }
    Fo.prototype.destroy = function () { this.uniformData = null, this.uniformGroups = null, this.uniformDirtyGroups = null, this.uniformBufferBindings = null, this.program = null; };
    return Fo;
}());
function xd(i, t) { var e = {}, s = t.getProgramParameter(i, t.ACTIVE_ATTRIBUTES); for (var r = 0; r < s; r++) {
    var n = t.getActiveAttrib(i, r);
    if (n.name.startsWith("gl_"))
        continue;
    var o = wo(t, n.type), a = { type: o, name: n.name, size: To(o), location: t.getAttribLocation(i, n.name) };
    e[n.name] = a;
} return e; }
function vd(i, t) { var e = {}, s = t.getProgramParameter(i, t.ACTIVE_UNIFORMS); for (var r = 0; r < s; r++) {
    var n = t.getActiveUniform(i, r), o = n.name.replace(/\[.*?\]$/, ""), a = !!n.name.match(/\[.*?\]$/), h = wo(t, n.type);
    e[o] = { name: o, index: r, type: h, size: n.size, isArray: a, value: xo(h, n.size) };
} return e; }
function Lo(i, t) { var h; var e = _o(i, i.VERTEX_SHADER, t.vertexSrc), s = _o(i, i.FRAGMENT_SHADER, t.fragmentSrc), r = i.createProgram(); i.attachShader(r, e), i.attachShader(r, s); var n = (h = t.extra) == null ? void 0 : h.transformFeedbackVaryings; if (n && (typeof i.transformFeedbackVaryings != "function" ? console.warn("TransformFeedback is not supported but TransformFeedbackVaryings are given.") : i.transformFeedbackVaryings(r, n.names, n.bufferMode === "separate" ? i.SEPARATE_ATTRIBS : i.INTERLEAVED_ATTRIBS)), i.linkProgram(r), i.getProgramParameter(r, i.LINK_STATUS) || Ju(i, r, e, s), t.attributeData = xd(r, i), t.uniformData = vd(r, i), !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertexSrc)) {
    var l = Object.keys(t.attributeData);
    l.sort(function (c, u) { return c > u ? 1 : -1; });
    for (var c = 0; c < l.length; c++)
        t.attributeData[l[c]].location = c, i.bindAttribLocation(r, c, l[c]);
    i.linkProgram(r);
} i.deleteShader(e), i.deleteShader(s); var o = {}; for (var l in t.uniformData) {
    var c = t.uniformData[l];
    o[l] = { location: i.getUniformLocation(r, l), value: xo(c.type, c.size) };
} return new Fo(r, o); }
var yd = 0;
var Yi = { textureCount: 0, uboCount: 0 };
var Tr = /** @class */ (function () {
    function Tr(t) {
        this.destroyed = !1, this.renderer = t, this.systemCheck(), this.gl = null, this.shader = null, this.program = null, this.cache = {}, this._uboCache = {}, this.id = yd++;
    }
    Tr.prototype.systemCheck = function () { if (!ad())
        throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support."); };
    Tr.prototype.contextChange = function (t) { this.gl = t, this.reset(); };
    Tr.prototype.bind = function (t, e) { t.disposeRunner.add(this), t.uniforms.globals = this.renderer.globalUniforms; var s = t.program, r = s.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(t); return this.shader = t, this.program !== s && (this.program = s, this.gl.useProgram(r.program)), e || (Yi.textureCount = 0, Yi.uboCount = 0, this.syncUniformGroup(t.uniformGroup, Yi)), r; };
    Tr.prototype.setUniforms = function (t) { var e = this.shader.program, s = e.glPrograms[this.renderer.CONTEXT_UID]; e.syncUniforms(s.uniformData, t, this.renderer); };
    Tr.prototype.syncUniformGroup = function (t, e) { var s = this.getGlProgram(); (!t.static || t.dirtyId !== s.uniformDirtyGroups[t.id]) && (s.uniformDirtyGroups[t.id] = t.dirtyId, this.syncUniforms(t, s, e)); };
    Tr.prototype.syncUniforms = function (t, e, s) { (t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(e.uniformData, t.uniforms, this.renderer, s); };
    Tr.prototype.createSyncGroups = function (t) { var e = this.getSignature(t, this.shader.program.uniformData, "u"); return this.cache[e] || (this.cache[e] = rd(t, this.shader.program.uniformData)), t.syncUniforms[this.shader.program.id] = this.cache[e], t.syncUniforms[this.shader.program.id]; };
    Tr.prototype.syncUniformBufferGroup = function (t, e) { var s = this.getGlProgram(); if (!t.static || t.dirtyId !== 0 || !s.uniformGroups[t.id]) {
        t.dirtyId = 0;
        var r = s.uniformGroups[t.id] || this.createSyncBufferGroup(t, s, e);
        t.buffer.update(), r(s.uniformData, t.uniforms, this.renderer, Yi, t.buffer);
    } this.renderer.buffer.bindBufferBase(t.buffer, s.uniformBufferBindings[e]); };
    Tr.prototype.createSyncBufferGroup = function (t, e, s) { var r = this.renderer.gl; this.renderer.buffer.bind(t.buffer); var n = this.gl.getUniformBlockIndex(e.program, s); e.uniformBufferBindings[s] = this.shader.uniformBindCount, r.uniformBlockBinding(e.program, n, this.shader.uniformBindCount), this.shader.uniformBindCount++; var o = this.getSignature(t, this.shader.program.uniformData, "ubo"); var a = this._uboCache[o]; if (a || (a = this._uboCache[o] = No(t, this.shader.program.uniformData)), t.autoManage) {
        var h = new Float32Array(a.size / 4);
        t.buffer.update(h);
    } return e.uniformGroups[t.id] = a.syncFunc, e.uniformGroups[t.id]; };
    Tr.prototype.getSignature = function (t, e, s) { var r = t.uniforms, n = ["".concat(s, "-")]; for (var o in r)
        n.push(o), e[o] && n.push(e[o].type); return n.join("-"); };
    Tr.prototype.getGlProgram = function () { return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null; };
    Tr.prototype.generateProgram = function (t) { var e = this.gl, s = t.program, r = Lo(e, s); return s.glPrograms[this.renderer.CONTEXT_UID] = r, r; };
    Tr.prototype.reset = function () { this.program = null, this.shader = null; };
    Tr.prototype.disposeShader = function (t) { this.shader === t && (this.shader = null); };
    Tr.prototype.destroy = function () { this.renderer = null, this.destroyed = !0; };
    return Tr;
}());
Tr.extension = { type: P.RendererSystem, name: "shader" }, U.add(Tr);
function bd(i, t) {
    if (t === void 0) { t = []; }
    return t[k.NORMAL] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[k.ADD] = [i.ONE, i.ONE], t[k.MULTIPLY] = [i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA], t[k.SCREEN] = [i.ONE, i.ONE_MINUS_SRC_COLOR, i.ONE, i.ONE_MINUS_SRC_ALPHA], t[k.OVERLAY] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[k.DARKEN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[k.LIGHTEN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[k.COLOR_DODGE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[k.COLOR_BURN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[k.HARD_LIGHT] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[k.SOFT_LIGHT] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[k.DIFFERENCE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[k.EXCLUSION] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[k.HUE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[k.SATURATION] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[k.COLOR] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[k.LUMINOSITY] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[k.NONE] = [0, 0], t[k.NORMAL_NPM] = [i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA], t[k.ADD_NPM] = [i.SRC_ALPHA, i.ONE, i.ONE, i.ONE], t[k.SCREEN_NPM] = [i.SRC_ALPHA, i.ONE_MINUS_SRC_COLOR, i.ONE, i.ONE_MINUS_SRC_ALPHA], t[k.SRC_IN] = [i.DST_ALPHA, i.ZERO], t[k.SRC_OUT] = [i.ONE_MINUS_DST_ALPHA, i.ZERO], t[k.SRC_ATOP] = [i.DST_ALPHA, i.ONE_MINUS_SRC_ALPHA], t[k.DST_OVER] = [i.ONE_MINUS_DST_ALPHA, i.ONE], t[k.DST_IN] = [i.ZERO, i.SRC_ALPHA], t[k.DST_OUT] = [i.ZERO, i.ONE_MINUS_SRC_ALPHA], t[k.DST_ATOP] = [i.ONE_MINUS_DST_ALPHA, i.SRC_ALPHA], t[k.XOR] = [i.ONE_MINUS_DST_ALPHA, i.ONE_MINUS_SRC_ALPHA], t[k.SUBTRACT] = [i.ONE, i.ONE, i.ONE, i.ONE, i.FUNC_REVERSE_SUBTRACT, i.FUNC_ADD], t;
}
var Td = 0, Ed = 1, wd = 2, Ad = 3, Sd = 4, Rd = 5, Er = /** @class */ (function () {
    function Er() {
        this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = k.NONE, this._blendEq = !1, this.map = [], this.map[Td] = this.setBlend, this.map[Ed] = this.setOffset, this.map[wd] = this.setCullFace, this.map[Ad] = this.setDepthTest, this.map[Sd] = this.setFrontFace, this.map[Rd] = this.setDepthMask, this.checks = [], this.defaultState = new Yt, this.defaultState.blend = !0;
    }
    Er.prototype.contextChange = function (i) { this.gl = i, this.blendModes = bd(i), this.set(this.defaultState), this.reset(); };
    Er.prototype.set = function (i) { if (i = i || this.defaultState, this.stateId !== i.data) {
        var t = this.stateId ^ i.data, e = 0;
        for (; t;)
            t & 1 && this.map[e].call(this, !!(i.data & 1 << e)), t = t >> 1, e++;
        this.stateId = i.data;
    } for (var t = 0; t < this.checks.length; t++)
        this.checks[t](this, i); };
    Er.prototype.forceState = function (i) { i = i || this.defaultState; for (var t = 0; t < this.map.length; t++)
        this.map[t].call(this, !!(i.data & 1 << t)); for (var t = 0; t < this.checks.length; t++)
        this.checks[t](this, i); this.stateId = i.data; };
    Er.prototype.setBlend = function (i) { this.updateCheck(Er.checkBlendMode, i), this.gl[i ? "enable" : "disable"](this.gl.BLEND); };
    Er.prototype.setOffset = function (i) { this.updateCheck(Er.checkPolygonOffset, i), this.gl[i ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL); };
    Er.prototype.setDepthTest = function (i) { this.gl[i ? "enable" : "disable"](this.gl.DEPTH_TEST); };
    Er.prototype.setDepthMask = function (i) { this.gl.depthMask(i); };
    Er.prototype.setCullFace = function (i) { this.gl[i ? "enable" : "disable"](this.gl.CULL_FACE); };
    Er.prototype.setFrontFace = function (i) { this.gl.frontFace(this.gl[i ? "CW" : "CCW"]); };
    Er.prototype.setBlendMode = function (i) { if (i === this.blendMode)
        return; this.blendMode = i; var t = this.blendModes[i], e = this.gl; t.length === 2 ? e.blendFunc(t[0], t[1]) : e.blendFuncSeparate(t[0], t[1], t[2], t[3]), t.length === 6 ? (this._blendEq = !0, e.blendEquationSeparate(t[4], t[5])) : this._blendEq && (this._blendEq = !1, e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD)); };
    Er.prototype.setPolygonOffset = function (i, t) { this.gl.polygonOffset(i, t); };
    Er.prototype.reset = function () { this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(this.defaultState), this._blendEq = !0, this.blendMode = -1, this.setBlendMode(0); };
    Er.prototype.updateCheck = function (i, t) { var e = this.checks.indexOf(i); t && e === -1 ? this.checks.push(i) : !t && e !== -1 && this.checks.splice(e, 1); };
    Er.checkBlendMode = function (i, t) { i.setBlendMode(t.blendMode); };
    Er.checkPolygonOffset = function (i, t) { i.setPolygonOffset(1, t.polygonOffset); };
    Er.prototype.destroy = function () { this.gl = null; };
    return Er;
}());
var wr = Er;
wr.extension = { type: P.RendererSystem, name: "state" }, U.add(wr);
var Ar = /** @class */ (function () {
    function Ar(t) {
        this.renderer = t, this.count = 0, this.checkCount = 0, this.maxIdle = w.GC_MAX_IDLE, this.checkCountMax = w.GC_MAX_CHECK_COUNT, this.mode = w.GC_MODE;
    }
    Ar.prototype.postrender = function () { !this.renderer.objectRenderer.renderingToScreen || (this.count++, this.mode !== wi.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run()))); };
    Ar.prototype.run = function () { var t = this.renderer.texture, e = t.managedTextures; var s = !1; for (var r = 0; r < e.length; r++) {
        var n = e[r];
        !n.framebuffer && this.count - n.touched > this.maxIdle && (t.destroyTexture(n, !0), e[r] = null, s = !0);
    } if (s) {
        var r = 0;
        for (var n = 0; n < e.length; n++)
            e[n] !== null && (e[r++] = e[n]);
        e.length = r;
    } };
    Ar.prototype.unload = function (t) { var e = this.renderer.texture, s = t._texture; s && !s.framebuffer && e.destroyTexture(s); for (var r = t.children.length - 1; r >= 0; r--)
        this.unload(t.children[r]); };
    Ar.prototype.destroy = function () { this.renderer = null; };
    return Ar;
}());
Ar.extension = { type: P.RendererSystem, name: "textureGC" }, U.add(Ar);
function Cd(i) {
    var _b, _g, _j, _k, _m, _q, _v, _w, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12;
    var t;
    return "WebGL2RenderingContext" in globalThis && i instanceof globalThis.WebGL2RenderingContext ? t = (_b = {}, _b[O.UNSIGNED_BYTE] = (_g = {}, _g[C.RGBA] = i.RGBA8, _g[C.RGB] = i.RGB8, _g[C.RG] = i.RG8, _g[C.RED] = i.R8, _g[C.RGBA_INTEGER] = i.RGBA8UI, _g[C.RGB_INTEGER] = i.RGB8UI, _g[C.RG_INTEGER] = i.RG8UI, _g[C.RED_INTEGER] = i.R8UI, _g[C.ALPHA] = i.ALPHA, _g[C.LUMINANCE] = i.LUMINANCE, _g[C.LUMINANCE_ALPHA] = i.LUMINANCE_ALPHA, _g), _b[O.BYTE] = (_j = {}, _j[C.RGBA] = i.RGBA8_SNORM, _j[C.RGB] = i.RGB8_SNORM, _j[C.RG] = i.RG8_SNORM, _j[C.RED] = i.R8_SNORM, _j[C.RGBA_INTEGER] = i.RGBA8I, _j[C.RGB_INTEGER] = i.RGB8I, _j[C.RG_INTEGER] = i.RG8I, _j[C.RED_INTEGER] = i.R8I, _j), _b[O.UNSIGNED_SHORT] = (_k = {}, _k[C.RGBA_INTEGER] = i.RGBA16UI, _k[C.RGB_INTEGER] = i.RGB16UI, _k[C.RG_INTEGER] = i.RG16UI, _k[C.RED_INTEGER] = i.R16UI, _k[C.DEPTH_COMPONENT] = i.DEPTH_COMPONENT16, _k), _b[O.SHORT] = (_m = {}, _m[C.RGBA_INTEGER] = i.RGBA16I, _m[C.RGB_INTEGER] = i.RGB16I, _m[C.RG_INTEGER] = i.RG16I, _m[C.RED_INTEGER] = i.R16I, _m), _b[O.UNSIGNED_INT] = (_q = {}, _q[C.RGBA_INTEGER] = i.RGBA32UI, _q[C.RGB_INTEGER] = i.RGB32UI, _q[C.RG_INTEGER] = i.RG32UI, _q[C.RED_INTEGER] = i.R32UI, _q[C.DEPTH_COMPONENT] = i.DEPTH_COMPONENT24, _q), _b[O.INT] = (_v = {}, _v[C.RGBA_INTEGER] = i.RGBA32I, _v[C.RGB_INTEGER] = i.RGB32I, _v[C.RG_INTEGER] = i.RG32I, _v[C.RED_INTEGER] = i.R32I, _v), _b[O.FLOAT] = (_w = {}, _w[C.RGBA] = i.RGBA32F, _w[C.RGB] = i.RGB32F, _w[C.RG] = i.RG32F, _w[C.RED] = i.R32F, _w[C.DEPTH_COMPONENT] = i.DEPTH_COMPONENT32F, _w), _b[O.HALF_FLOAT] = (_z = {}, _z[C.RGBA] = i.RGBA16F, _z[C.RGB] = i.RGB16F, _z[C.RG] = i.RG16F, _z[C.RED] = i.R16F, _z), _b[O.UNSIGNED_SHORT_5_6_5] = (_0 = {}, _0[C.RGB] = i.RGB565, _0), _b[O.UNSIGNED_SHORT_4_4_4_4] = (_1 = {}, _1[C.RGBA] = i.RGBA4, _1), _b[O.UNSIGNED_SHORT_5_5_5_1] = (_2 = {}, _2[C.RGBA] = i.RGB5_A1, _2), _b[O.UNSIGNED_INT_2_10_10_10_REV] = (_3 = {}, _3[C.RGBA] = i.RGB10_A2, _3[C.RGBA_INTEGER] = i.RGB10_A2UI, _3), _b[O.UNSIGNED_INT_10F_11F_11F_REV] = (_4 = {}, _4[C.RGB] = i.R11F_G11F_B10F, _4), _b[O.UNSIGNED_INT_5_9_9_9_REV] = (_5 = {}, _5[C.RGB] = i.RGB9_E5, _5), _b[O.UNSIGNED_INT_24_8] = (_6 = {}, _6[C.DEPTH_STENCIL] = i.DEPTH24_STENCIL8, _6), _b[O.FLOAT_32_UNSIGNED_INT_24_8_REV] = (_7 = {}, _7[C.DEPTH_STENCIL] = i.DEPTH32F_STENCIL8, _7), _b) : t = (_8 = {}, _8[O.UNSIGNED_BYTE] = (_9 = {}, _9[C.RGBA] = i.RGBA, _9[C.RGB] = i.RGB, _9[C.ALPHA] = i.ALPHA, _9[C.LUMINANCE] = i.LUMINANCE, _9[C.LUMINANCE_ALPHA] = i.LUMINANCE_ALPHA, _9), _8[O.UNSIGNED_SHORT_5_6_5] = (_10 = {}, _10[C.RGB] = i.RGB, _10), _8[O.UNSIGNED_SHORT_4_4_4_4] = (_11 = {}, _11[C.RGBA] = i.RGBA, _11), _8[O.UNSIGNED_SHORT_5_5_5_1] = (_12 = {}, _12[C.RGBA] = i.RGBA, _12), _8), t;
}
var $i = /** @class */ (function () {
    function $i(t) {
        this.texture = t, this.width = -1, this.height = -1, this.dirtyId = -1, this.dirtyStyleId = -1, this.mipmap = !1, this.wrapMode = 33071, this.type = O.UNSIGNED_BYTE, this.internalFormat = C.RGBA, this.samplerType = 0;
    }
    return $i;
}());
var Sr = /** @class */ (function () {
    function Sr(t) {
        this.renderer = t, this.boundTextures = [], this.currentLocation = -1, this.managedTextures = [], this._unknownBoundTextures = !1, this.unknownTexture = new W, this.hasIntegerTextures = !1;
    }
    Sr.prototype.contextChange = function () { var t = this.gl = this.renderer.gl; this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.webGLVersion = this.renderer.context.webGLVersion, this.internalFormats = Cd(t); var e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS); this.boundTextures.length = e; for (var r = 0; r < e; r++)
        this.boundTextures[r] = null; this.emptyTextures = {}; var s = new $i(t.createTexture()); t.bindTexture(t.TEXTURE_2D, s.texture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(4)), this.emptyTextures[t.TEXTURE_2D] = s, this.emptyTextures[t.TEXTURE_CUBE_MAP] = new $i(t.createTexture()), t.bindTexture(t.TEXTURE_CUBE_MAP, this.emptyTextures[t.TEXTURE_CUBE_MAP].texture); for (var r = 0; r < 6; r++)
        t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + r, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null); t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR); for (var r = 0; r < this.boundTextures.length; r++)
        this.bind(null, r); };
    Sr.prototype.bind = function (t, e) {
        if (e === void 0) { e = 0; }
        var s = this.gl;
        if (t = t == null ? void 0 : t.castToBaseTexture(), (t == null ? void 0 : t.valid) && !t.parentTextureArray) {
            t.touched = this.renderer.textureGC.count;
            var r = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
            this.boundTextures[e] !== t && (this.currentLocation !== e && (this.currentLocation = e, s.activeTexture(s.TEXTURE0 + e)), s.bindTexture(t.target, r.texture)), r.dirtyId !== t.dirtyId ? (this.currentLocation !== e && (this.currentLocation = e, s.activeTexture(s.TEXTURE0 + e)), this.updateTexture(t)) : r.dirtyStyleId !== t.dirtyStyleId && this.updateTextureStyle(t), this.boundTextures[e] = t;
        }
        else
            this.currentLocation !== e && (this.currentLocation = e, s.activeTexture(s.TEXTURE0 + e)), s.bindTexture(s.TEXTURE_2D, this.emptyTextures[s.TEXTURE_2D].texture), this.boundTextures[e] = null;
    };
    Sr.prototype.reset = function () { this._unknownBoundTextures = !0, this.hasIntegerTextures = !1, this.currentLocation = -1; for (var t = 0; t < this.boundTextures.length; t++)
        this.boundTextures[t] = this.unknownTexture; };
    Sr.prototype.unbind = function (t) { var _b = this, e = _b.gl, s = _b.boundTextures; if (this._unknownBoundTextures) {
        this._unknownBoundTextures = !1;
        for (var r = 0; r < s.length; r++)
            s[r] === this.unknownTexture && this.bind(null, r);
    } for (var r = 0; r < s.length; r++)
        s[r] === t && (this.currentLocation !== r && (e.activeTexture(e.TEXTURE0 + r), this.currentLocation = r), e.bindTexture(t.target, this.emptyTextures[t.target].texture), s[r] = null); };
    Sr.prototype.ensureSamplerType = function (t) { var _b = this, e = _b.boundTextures, s = _b.hasIntegerTextures, r = _b.CONTEXT_UID; if (!!s)
        for (var n = t - 1; n >= 0; --n) {
            var o = e[n];
            o && o._glTextures[r].samplerType !== Ei.FLOAT && this.renderer.texture.unbind(o);
        } };
    Sr.prototype.initTexture = function (t) { var e = new $i(this.gl.createTexture()); return e.dirtyId = -1, t._glTextures[this.CONTEXT_UID] = e, this.managedTextures.push(t), t.on("dispose", this.destroyTexture, this), e; };
    Sr.prototype.initTextureType = function (t, e) { var s, r; e.internalFormat = (r = (s = this.internalFormats[t.type]) == null ? void 0 : s[t.format]) != null ? r : t.format, this.webGLVersion === 2 && t.type === O.HALF_FLOAT ? e.type = this.gl.HALF_FLOAT : e.type = t.type; };
    Sr.prototype.updateTexture = function (t) { var r; var e = t._glTextures[this.CONTEXT_UID]; if (!e)
        return; var s = this.renderer; if (this.initTextureType(t, e), (r = t.resource) != null && r.upload(s, t, e))
        e.samplerType !== Ei.FLOAT && (this.hasIntegerTextures = !0);
    else {
        var n = t.realWidth, o = t.realHeight, a = s.gl;
        (e.width !== n || e.height !== o || e.dirtyId < 0) && (e.width = n, e.height = o, a.texImage2D(t.target, 0, e.internalFormat, n, o, 0, t.format, e.type, null));
    } t.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(t), e.dirtyId = t.dirtyId; };
    Sr.prototype.destroyTexture = function (t, e) { var s = this.gl; if (t = t.castToBaseTexture(), t._glTextures[this.CONTEXT_UID] && (this.unbind(t), s.deleteTexture(t._glTextures[this.CONTEXT_UID].texture), t.off("dispose", this.destroyTexture, this), delete t._glTextures[this.CONTEXT_UID], !e)) {
        var r = this.managedTextures.indexOf(t);
        r !== -1 && ge(this.managedTextures, r, 1);
    } };
    Sr.prototype.updateTextureStyle = function (t) { var s; var e = t._glTextures[this.CONTEXT_UID]; !e || ((t.mipmap === Mt.POW2 || this.webGLVersion !== 2) && !t.isPowerOfTwo ? e.mipmap = !1 : e.mipmap = t.mipmap >= 1, this.webGLVersion !== 2 && !t.isPowerOfTwo ? e.wrapMode = zt.CLAMP : e.wrapMode = t.wrapMode, (s = t.resource) != null && s.style(this.renderer, t, e) || this.setStyle(t, e), e.dirtyStyleId = t.dirtyStyleId); };
    Sr.prototype.setStyle = function (t, e) { var s = this.gl; if (e.mipmap && t.mipmap !== Mt.ON_MANUAL && s.generateMipmap(t.target), s.texParameteri(t.target, s.TEXTURE_WRAP_S, e.wrapMode), s.texParameteri(t.target, s.TEXTURE_WRAP_T, e.wrapMode), e.mipmap) {
        s.texParameteri(t.target, s.TEXTURE_MIN_FILTER, t.scaleMode === Vt.LINEAR ? s.LINEAR_MIPMAP_LINEAR : s.NEAREST_MIPMAP_NEAREST);
        var r = this.renderer.context.extensions.anisotropicFiltering;
        if (r && t.anisotropicLevel > 0 && t.scaleMode === Vt.LINEAR) {
            var n = Math.min(t.anisotropicLevel, s.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
            s.texParameterf(t.target, r.TEXTURE_MAX_ANISOTROPY_EXT, n);
        }
    }
    else
        s.texParameteri(t.target, s.TEXTURE_MIN_FILTER, t.scaleMode === Vt.LINEAR ? s.LINEAR : s.NEAREST); s.texParameteri(t.target, s.TEXTURE_MAG_FILTER, t.scaleMode === Vt.LINEAR ? s.LINEAR : s.NEAREST); };
    Sr.prototype.destroy = function () { this.renderer = null; };
    return Sr;
}());
Sr.extension = { type: P.RendererSystem, name: "texture" }, U.add(Sr);
var Id = new Ve;
var Rr = /** @class */ (function () {
    function Rr(t) {
        this.renderer = t, this._tempMatrix = new Z;
    }
    Rr.prototype.generateTexture = function (t, e) { var h = e || {}, s = h.region, r = Es(h, ["region"]), n = s || t.getLocalBounds(null, !0); n.width === 0 && (n.width = 1), n.height === 0 && (n.height = 1); var o = ee.create(Xt({ width: n.width, height: n.height }, r)); this._tempMatrix.tx = -n.x, this._tempMatrix.ty = -n.y; var a = t.transform; return t.transform = Id, this.renderer.render(t, { renderTexture: o, transform: this._tempMatrix, skipUpdateTransform: !!t.parent, blit: !0 }), t.transform = a, o; };
    Rr.prototype.destroy = function () { };
    return Rr;
}());
Rr.extension = { type: [P.RendererSystem, P.CanvasRendererSystem], name: "textureGenerator" }, U.add(Rr);
var Cr = /** @class */ (function () {
    function Cr() {
        this.clearBeforeRender = !0, this._backgroundColor = 0, this._backgroundColorRgba = [0, 0, 0, 1], this._backgroundColorString = "#000000", this.color = this._backgroundColor, this.alpha = 1;
    }
    Cr.prototype.init = function (t) { this.clearBeforeRender = t.clearBeforeRender, t.color && (this.color = typeof t.color == "string" ? Bi(t.color) : t.color), this.alpha = t.alpha; };
    Object.defineProperty(Cr.prototype, "color", {
        get: function () { return this._backgroundColor; },
        set: function (t) { this._backgroundColor = t, this._backgroundColorString = Gs(t), _e(t, this._backgroundColorRgba); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cr.prototype, "alpha", {
        get: function () { return this._backgroundColorRgba[3]; },
        set: function (t) { this._backgroundColorRgba[3] = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cr.prototype, "colorRgba", {
        get: function () { return this._backgroundColorRgba; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cr.prototype, "colorString", {
        get: function () { return this._backgroundColorString; },
        enumerable: false,
        configurable: true
    });
    Cr.prototype.destroy = function () { };
    return Cr;
}());
Cr.extension = { type: [P.RendererSystem, P.CanvasRendererSystem], name: "background" }, U.add(Cr);
var Ir = /** @class */ (function () {
    function Ir(t) {
        this.renderer = t;
    }
    Ir.prototype.init = function (t) { this.screen = new V(0, 0, t.width, t.height), this.element = t.view || w.ADAPTER.createCanvas(), this.resolution = t.resolution || w.RESOLUTION, this.autoDensity = !!t.autoDensity; };
    Ir.prototype.resizeView = function (t, e) { this.element.width = Math.round(t * this.resolution), this.element.height = Math.round(e * this.resolution); var s = this.element.width / this.resolution, r = this.element.height / this.resolution; this.screen.width = s, this.screen.height = r, this.autoDensity && (this.element.style.width = "".concat(s, "px"), this.element.style.height = "".concat(r, "px")), this.renderer.emit("resize", s, r), this.renderer.runners.resize.emit(this.screen.width, this.screen.height); };
    Ir.prototype.destroy = function (t) { var e; t && ((e = this.element.parentNode) == null || e.removeChild(this.element)), this.renderer = null, this.element = null, this.screen = null; };
    return Ir;
}());
Ir.extension = { type: [P.RendererSystem, P.CanvasRendererSystem], name: "_view" }, U.add(Ir);
var Pr = /** @class */ (function () {
    function Pr(t) {
        this.renderer = t, this.plugins = {}, Object.defineProperties(this.plugins, { extract: { enumerable: !1, get: function () { return _t("7.0.0", "renderer.plugins.extract has moved to renderer.extract"), t.extract; } }, prepare: { enumerable: !1, get: function () { return _t("7.0.0", "renderer.plugins.prepare has moved to renderer.prepare"), t.prepare; } }, interaction: { enumerable: !1, get: function () { return _t("7.0.0", "renderer.plugins.interaction has been deprecated, use renderer.events"), t.events; } } });
    }
    Pr.prototype.init = function (t) { for (var e in t)
        this.plugins[e] = new t[e](this.renderer); };
    Pr.prototype.destroy = function () { for (var t in this.plugins)
        this.plugins[t].destroy(), this.plugins[t] = null; };
    return Pr;
}());
Pr.extension = { type: [P.RendererSystem, P.CanvasRendererSystem], name: "_plugin" }, U.add(Pr);
var Uo = /** @class */ (function (_super) {
    __extends(Uo, _super);
    function Uo() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.runners = {}, _this._systemsHash = {};
        return _this;
    }
    Uo.prototype.setup = function (t) { var r; this.addRunners.apply(this, t.runners); var e = ((r = t.priority) != null ? r : []).filter(function (n) { return t.systems[n]; }), s = __spreadArray(__spreadArray([], e, true), Object.keys(t.systems).filter(function (n) { return !e.includes(n); }), true); for (var _b = 0, s_4 = s; _b < s_4.length; _b++) {
        var n = s_4[_b];
        this.addSystem(t.systems[n], n);
    } };
    Uo.prototype.addRunners = function () {
        var _this = this;
        var t = [];
        for (var _b = 0; _b < arguments.length; _b++) {
            t[_b] = arguments[_b];
        }
        t.forEach(function (e) { _this.runners[e] = new Tt(e); });
    };
    Uo.prototype.addSystem = function (t, e) { var s = new t(this); if (this[e])
        throw new Error("Whoops! The name \"".concat(e, "\" is already in use")); this[e] = s, this._systemsHash[e] = s; for (var r in this.runners)
        this.runners[r].add(s); return this; };
    Uo.prototype.emitWithCustomOptions = function (t, e) {
        var _this = this;
        var s = Object.keys(this._systemsHash);
        t.items.forEach(function (r) { var n = s.find(function (o) { return _this._systemsHash[o] === r; }); r[t.name](e[n]); });
    };
    Uo.prototype.destroy = function () { Object.values(this.runners).forEach(function (t) { t.destroy(); }), this._systemsHash = {}; };
    return Uo;
}(Ce));
var Mr = /** @class */ (function () {
    function Mr(t) {
        this.renderer = t;
    }
    Mr.prototype.run = function (t) { var e = this.renderer; e.emitWithCustomOptions(e.runners.init, t), t.hello && console.log("PixiJS 7.0.5 - ".concat(e.rendererLogId, " - https://pixijs.com")), e.resize(this.renderer.screen.width, this.renderer.screen.height); };
    Mr.prototype.destroy = function () { };
    return Mr;
}());
Mr.extension = { type: [P.RendererSystem, P.CanvasRendererSystem], name: "startup" }, U.add(Mr);
var Br = /** @class */ (function () {
    function Br(t) {
        this.renderer = t;
    }
    Br.prototype.contextChange = function () { this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID; };
    Br.prototype.bind = function (t) { var _b = this, e = _b.gl, s = _b.CONTEXT_UID, r = t._glTransformFeedbacks[s] || this.createGLTransformFeedback(t); e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, r); };
    Br.prototype.unbind = function () { var t = this.gl; t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, null); };
    Br.prototype.beginTransformFeedback = function (t, e) { var _b = this, s = _b.gl, r = _b.renderer; e && r.shader.bind(e), s.beginTransformFeedback(t); };
    Br.prototype.endTransformFeedback = function () { var t = this.gl; t.endTransformFeedback(); };
    Br.prototype.createGLTransformFeedback = function (t) { var _b = this, e = _b.gl, s = _b.renderer, r = _b.CONTEXT_UID, n = e.createTransformFeedback(); t._glTransformFeedbacks[r] = n, e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, n); for (var o = 0; o < t.buffers.length; o++) {
        var a = t.buffers[o];
        !a || (s.buffer.update(a), a._glBuffers[r].refCount++, e.bindBufferBase(e.TRANSFORM_FEEDBACK_BUFFER, o, a._glBuffers[r].buffer || null));
    } return e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, null), t.disposeRunner.add(this), n; };
    Br.prototype.disposeTransformFeedback = function (t, e) { var s = t._glTransformFeedbacks[this.CONTEXT_UID], r = this.gl; t.disposeRunner.remove(this); var n = this.renderer.buffer; if (n)
        for (var o = 0; o < t.buffers.length; o++) {
            var a = t.buffers[o];
            if (!a)
                continue;
            var h = a._glBuffers[this.CONTEXT_UID];
            h && (h.refCount--, h.refCount === 0 && !e && n.dispose(a, e));
        } !s || (e || r.deleteTransformFeedback(s), delete t._glTransformFeedbacks[this.CONTEXT_UID]); };
    Br.prototype.destroy = function () { this.renderer = null; };
    return Br;
}());
Br.extension = { type: P.RendererSystem, name: "transformFeedback" }, U.add(Br);
var Oo = [];
U.handleByList(P.Renderer, Oo);
function ko(i) { for (var _b = 0, Oo_1 = Oo; _b < Oo_1.length; _b++) {
    var t = Oo_1[_b];
    if (t.test(i))
        return new t(i);
} throw new Error("Unable to auto-detect a suitable renderer."); }
var Pd = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", Md = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";
var Go = Pd, Dr = Md, Nr = /** @class */ (function (_super) {
    __extends(Nr, _super);
    function Nr(i) {
        var _this = this;
        var s;
        _this = _super.call(this) || this, i = Object.assign({}, w.RENDER_OPTIONS, i), _this.gl = null, _this.CONTEXT_UID = 0, _this.globalUniforms = new It({ projectionMatrix: new Z }, !0);
        var t = { runners: ["init", "destroy", "contextChange", "resolutionChange", "reset", "update", "postrender", "prerender", "resize"], systems: Nr.__systems, priority: ["_view", "textureGenerator", "background", "_plugin", "startup", "context", "state", "texture", "buffer", "geometry", "framebuffer", "transformFeedback", "mask", "scissor", "stencil", "projection", "textureGC", "filter", "renderTexture", "batch", "objectRenderer", "_multisample"] };
        _this.setup(t), "useContextAlpha" in i && (_t("7.0.0", "options.useContextAlpha is deprecated, use options.premultipliedAlpha and options.backgroundAlpha instead"), i.premultipliedAlpha = i.useContextAlpha && i.useContextAlpha !== "notMultiplied", i.backgroundAlpha = i.useContextAlpha === !1 ? 1 : i.backgroundAlpha);
        var e = { hello: i.hello, _plugin: Nr.__plugins, background: { alpha: i.backgroundAlpha, color: (s = i.background) != null ? s : i.backgroundColor, clearBeforeRender: i.clearBeforeRender }, _view: { height: i.height, width: i.width, autoDensity: i.autoDensity, resolution: i.resolution, view: i.view }, context: { antialias: i.antialias, context: i.context, powerPreference: i.powerPreference, premultipliedAlpha: i.premultipliedAlpha, preserveDrawingBuffer: i.preserveDrawingBuffer } };
        _this.startup.run(e);
        return _this;
    }
    Nr.test = function (i) { return i != null && i.forceCanvas ? !1 : Qn(); };
    Nr.prototype.render = function (i, t) { this.objectRenderer.render(i, t); };
    Nr.prototype.resize = function (i, t) { this._view.resizeView(i, t); };
    Nr.prototype.reset = function () { return this.runners.reset.emit(), this; };
    Nr.prototype.clear = function () { this.renderTexture.bind(), this.renderTexture.clear(); };
    Nr.prototype.destroy = function (i) {
        if (i === void 0) { i = !1; }
        this.runners.destroy.items.reverse(), this.emitWithCustomOptions(this.runners.destroy, { _view: i }), _super.prototype.destroy.call(this);
    };
    Object.defineProperty(Nr.prototype, "plugins", {
        get: function () { return this._plugin.plugins; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nr.prototype, "multisample", {
        get: function () { return this._multisample.multisample; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nr.prototype, "width", {
        get: function () { return this._view.element.width; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nr.prototype, "height", {
        get: function () { return this._view.element.height; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nr.prototype, "resolution", {
        get: function () { return this._view.resolution; },
        set: function (i) { this._view.resolution = i, this.runners.resolutionChange.emit(i); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nr.prototype, "autoDensity", {
        get: function () { return this._view.autoDensity; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nr.prototype, "view", {
        get: function () { return this._view.element; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nr.prototype, "screen", {
        get: function () { return this._view.screen; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nr.prototype, "lastObjectRendered", {
        get: function () { return this.objectRenderer.lastObjectRendered; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nr.prototype, "renderingToScreen", {
        get: function () { return this.objectRenderer.renderingToScreen; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nr.prototype, "rendererLogId", {
        get: function () { return "WebGL ".concat(this.context.webGLVersion); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nr.prototype, "clearBeforeRender", {
        get: function () { return _t("7.0.0", "renderer.clearBeforeRender has been deprecated, please use renderer.background.clearBeforeRender instead."), this.background.clearBeforeRender; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nr.prototype, "useContextAlpha", {
        get: function () { return _t("7.0.0", "renderer.useContextAlpha has been deprecated, please use renderer.context.premultipliedAlpha instead."), this.context.useContextAlpha; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nr.prototype, "preserveDrawingBuffer", {
        get: function () { return _t("7.0.0", "renderer.preserveDrawingBuffer has been deprecated, we cannot truly know this unless pixi created the context"), this.context.preserveDrawingBuffer; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nr.prototype, "backgroundColor", {
        get: function () { return _t("7.0.0", "renderer.backgroundColor has been deprecated, use renderer.background.color instead."), this.background.color; },
        set: function (i) { _t("7.0.0", "renderer.backgroundColor has been deprecated, use renderer.background.color instead."), this.background.color = i; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nr.prototype, "backgroundAlpha", {
        get: function () { return _t("7.0.0", "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."), this.background.color; },
        set: function (i) { _t("7.0.0", "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."), this.background.alpha = i; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nr.prototype, "powerPreference", {
        get: function () { return _t("7.0.0", "renderer.powerPreference has been deprecated, we can only know this if pixi creates the context"), this.context.powerPreference; },
        enumerable: false,
        configurable: true
    });
    Nr.prototype.generateTexture = function (i, t) { return this.textureGenerator.generateTexture(i, t); };
    return Nr;
}(Uo));
var be = Nr;
be.extension = { type: P.Renderer, priority: 1 }, be.__plugins = {}, be.__systems = {}, U.handleByMap(P.RendererPlugin, be.__plugins), U.handleByMap(P.RendererSystem, be.__systems), U.add(be);
var qi = /** @class */ (function () {
    function qi() {
        this.texArray = null, this.blend = 0, this.type = Pt.TRIANGLES, this.start = 0, this.size = 0, this.data = null;
    }
    return qi;
}());
var Ki = /** @class */ (function () {
    function Ki() {
        this.elements = [], this.ids = [], this.count = 0;
    }
    Ki.prototype.clear = function () { for (var t = 0; t < this.count; t++)
        this.elements[t] = null; this.count = 0; };
    return Ki;
}());
var Zi = /** @class */ (function () {
    function Zi(t) {
        typeof t == "number" ? this.rawBinaryData = new ArrayBuffer(t) : t instanceof Uint8Array ? this.rawBinaryData = t.buffer : this.rawBinaryData = t, this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData);
    }
    Object.defineProperty(Zi.prototype, "int8View", {
        get: function () { return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zi.prototype, "uint8View", {
        get: function () { return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zi.prototype, "int16View", {
        get: function () { return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zi.prototype, "uint16View", {
        get: function () { return this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)), this._uint16View; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zi.prototype, "int32View", {
        get: function () { return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View; },
        enumerable: false,
        configurable: true
    });
    Zi.prototype.view = function (t) { return this["".concat(t, "View")]; };
    Zi.prototype.destroy = function () { this.rawBinaryData = null, this._int8View = null, this._uint8View = null, this._int16View = null, this._uint16View = null, this._int32View = null, this.uint32View = null, this.float32View = null; };
    Zi.sizeOf = function (t) { switch (t) {
        case "int8":
        case "uint8": return 1;
        case "int16":
        case "uint16": return 2;
        case "int32":
        case "uint32":
        case "float32": return 4;
        default: throw new Error("".concat(t, " isn't a valid view type"));
    } };
    return Zi;
}());
var Ho = /** @class */ (function () {
    function Ho(t, e) {
        if (this.vertexSrc = t, this.fragTemplate = e, this.programCache = {}, this.defaultGroupCache = {}, !e.includes("%count%"))
            throw new Error('Fragment template must contain "%count%".');
        if (!e.includes("%forloop%"))
            throw new Error('Fragment template must contain "%forloop%".');
    }
    Ho.prototype.generateShader = function (t) { if (!this.programCache[t]) {
        var s = new Int32Array(t);
        for (var n = 0; n < t; n++)
            s[n] = n;
        this.defaultGroupCache[t] = It.from({ uSamplers: s }, !0);
        var r = this.fragTemplate;
        r = r.replace(/%count%/gi, "".concat(t)), r = r.replace(/%forloop%/gi, this.generateSampleSrc(t)), this.programCache[t] = new $t(this.vertexSrc, r);
    } var e = { tint: new Float32Array([1, 1, 1, 1]), translationMatrix: new Z, default: this.defaultGroupCache[t] }; return new kt(this.programCache[t], e); };
    Ho.prototype.generateSampleSrc = function (t) {
        var e = "";
        e += "\n", e += "\n";
        for (var s = 0; s < t; s++)
            s > 0 && (e += "\nelse "), s < t - 1 && (e += "if(vTextureId < ".concat(s, ".5)")), e += "\n{", e += "\n\tcolor = texture2D(uSamplers[".concat(s, "], vTextureCoord);"), e += "\n}";
        return e += "\n", e += "\n", e;
    };
    return Ho;
}());
var Fr = /** @class */ (function (_super) {
    __extends(Fr, _super);
    function Fr(t) {
        if (t === void 0) { t = !1; }
        var _this = this;
        _this = _super.call(this) || this, _this._buffer = new rt(null, t, !1), _this._indexBuffer = new rt(null, t, !0), _this.addAttribute("aVertexPosition", _this._buffer, 2, !1, O.FLOAT).addAttribute("aTextureCoord", _this._buffer, 2, !1, O.FLOAT).addAttribute("aColor", _this._buffer, 4, !0, O.UNSIGNED_BYTE).addAttribute("aTextureId", _this._buffer, 1, !0, O.FLOAT).addIndex(_this._indexBuffer);
        return _this;
    }
    return Fr;
}(se));
var Bd = "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n", Dd = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n";
var Te = /** @class */ (function (_super) {
    __extends(Te, _super);
    function Te(i) {
        var _this = this;
        _this = _super.call(this, i) || this, _this.setShaderGenerator(), _this.geometryClass = Fr, _this.vertexSize = 6, _this.state = Yt.for2d(), _this.size = w.SPRITE_BATCH_SIZE * 4, _this._vertexCount = 0, _this._indexCount = 0, _this._bufferedElements = [], _this._bufferedTextures = [], _this._bufferSize = 0, _this._shader = null, _this._packedGeometries = [], _this._packedGeometryPoolSize = 2, _this._flushId = 0, _this._aBuffers = {}, _this._iBuffers = {}, _this.MAX_TEXTURES = 1, _this.renderer.on("prerender", _this.onPrerender, _this), i.runners.contextChange.add(_this), _this._dcIndex = 0, _this._aIndex = 0, _this._iIndex = 0, _this._attributeBuffer = null, _this._indexBuffer = null, _this._tempBoundTextures = [];
        return _this;
    }
    Object.defineProperty(Te, "defaultVertexSrc", {
        get: function () { return Bd; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Te, "defaultFragmentTemplate", {
        get: function () { return Dd; },
        enumerable: false,
        configurable: true
    });
    Te.prototype.setShaderGenerator = function (_b) {
        var _g = _b === void 0 ? {} : _b, _j = _g.vertex, i = _j === void 0 ? Te.defaultVertexSrc : _j, _k = _g.fragment, t = _k === void 0 ? Te.defaultFragmentTemplate : _k;
        this.shaderGenerator = new Ho(i, t);
    };
    Te.prototype.contextChange = function () { var i = this.renderer.gl; w.PREFER_ENV === re.WEBGL_LEGACY ? this.MAX_TEXTURES = 1 : (this.MAX_TEXTURES = Math.min(i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), w.SPRITE_MAX_TEXTURES), this.MAX_TEXTURES = Ao(this.MAX_TEXTURES, i)), this._shader = this.shaderGenerator.generateShader(this.MAX_TEXTURES); for (var t = 0; t < this._packedGeometryPoolSize; t++)
        this._packedGeometries[t] = new this.geometryClass; this.initFlushBuffers(); };
    Te.prototype.initFlushBuffers = function () { var i = Te._drawCallPool, t = Te._textureArrayPool, e = this.size / 4, s = Math.floor(e / this.MAX_TEXTURES) + 1; for (; i.length < e;)
        i.push(new qi); for (; t.length < s;)
        t.push(new Ki); for (var r = 0; r < this.MAX_TEXTURES; r++)
        this._tempBoundTextures[r] = null; };
    Te.prototype.onPrerender = function () { this._flushId = 0; };
    Te.prototype.render = function (i) { !i._texture.valid || (this._vertexCount + i.vertexData.length / 2 > this.size && this.flush(), this._vertexCount += i.vertexData.length / 2, this._indexCount += i.indices.length, this._bufferedTextures[this._bufferSize] = i._texture.baseTexture, this._bufferedElements[this._bufferSize++] = i); };
    Te.prototype.buildTexturesAndDrawCalls = function () { var _b = this, i = _b._bufferedTextures, t = _b.MAX_TEXTURES, e = Te._textureArrayPool, s = this.renderer.batch, r = this._tempBoundTextures, n = this.renderer.textureGC.count; var o = ++W._globalBatch, a = 0, h = e[0], l = 0; s.copyBoundTextures(r, t); for (var c = 0; c < this._bufferSize; ++c) {
        var u = i[c];
        i[c] = null, u._batchEnabled !== o && (h.count >= t && (s.boundArray(h, r, o, t), this.buildDrawCalls(h, l, c), l = c, h = e[++a], ++o), u._batchEnabled = o, u.touched = n, h.elements[h.count++] = u);
    } h.count > 0 && (s.boundArray(h, r, o, t), this.buildDrawCalls(h, l, this._bufferSize), ++a, ++o); for (var c = 0; c < r.length; c++)
        r[c] = null; W._globalBatch = o; };
    Te.prototype.buildDrawCalls = function (i, t, e) { var _b = this, s = _b._bufferedElements, r = _b._attributeBuffer, n = _b._indexBuffer, o = _b.vertexSize, a = Te._drawCallPool; var h = this._dcIndex, l = this._aIndex, c = this._iIndex, u = a[h]; u.start = this._iIndex, u.texArray = i; for (var d = t; d < e; ++d) {
        var f = s[d], p = f._texture.baseTexture, m = Hs[p.alphaMode ? 1 : 0][f.blendMode];
        s[d] = null, t < d && u.blend !== m && (u.size = c - u.start, t = d, u = a[++h], u.texArray = i, u.start = c), this.packInterleavedGeometry(f, r, n, l, c), l += f.vertexData.length / 2 * o, c += f.indices.length, u.blend = m;
    } t < e && (u.size = c - u.start, ++h), this._dcIndex = h, this._aIndex = l, this._iIndex = c; };
    Te.prototype.bindAndClearTexArray = function (i) { var t = this.renderer.texture; for (var e = 0; e < i.count; e++)
        t.bind(i.elements[e], i.ids[e]), i.elements[e] = null; i.count = 0; };
    Te.prototype.updateGeometry = function () { var _b = this, i = _b._packedGeometries, t = _b._attributeBuffer, e = _b._indexBuffer; w.CAN_UPLOAD_SAME_BUFFER ? (i[this._flushId]._buffer.update(t.rawBinaryData), i[this._flushId]._indexBuffer.update(e), this.renderer.geometry.updateBuffers()) : (this._packedGeometryPoolSize <= this._flushId && (this._packedGeometryPoolSize++, i[this._flushId] = new this.geometryClass), i[this._flushId]._buffer.update(t.rawBinaryData), i[this._flushId]._indexBuffer.update(e), this.renderer.geometry.bind(i[this._flushId]), this.renderer.geometry.updateBuffers(), this._flushId++); };
    Te.prototype.drawBatches = function () { var i = this._dcIndex, _b = this.renderer, t = _b.gl, e = _b.state, s = Te._drawCallPool; var r = null; for (var n = 0; n < i; n++) {
        var _g = s[n], o = _g.texArray, a = _g.type, h = _g.size, l = _g.start, c = _g.blend;
        r !== o && (r = o, this.bindAndClearTexArray(o)), this.state.blendMode = c, e.set(this.state), t.drawElements(a, h, t.UNSIGNED_SHORT, l * 2);
    } };
    Te.prototype.flush = function () { this._vertexCount !== 0 && (this._attributeBuffer = this.getAttributeBuffer(this._vertexCount), this._indexBuffer = this.getIndexBuffer(this._indexCount), this._aIndex = 0, this._iIndex = 0, this._dcIndex = 0, this.buildTexturesAndDrawCalls(), this.updateGeometry(), this.drawBatches(), this._bufferSize = 0, this._vertexCount = 0, this._indexCount = 0); };
    Te.prototype.start = function () { this.renderer.state.set(this.state), this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES), this.renderer.shader.bind(this._shader), w.CAN_UPLOAD_SAME_BUFFER && this.renderer.geometry.bind(this._packedGeometries[this._flushId]); };
    Te.prototype.stop = function () { this.flush(); };
    Te.prototype.destroy = function () { for (var i = 0; i < this._packedGeometryPoolSize; i++)
        this._packedGeometries[i] && this._packedGeometries[i].destroy(); this.renderer.off("prerender", this.onPrerender, this), this._aBuffers = null, this._iBuffers = null, this._packedGeometries = null, this._attributeBuffer = null, this._indexBuffer = null, this._shader && (this._shader.destroy(), this._shader = null), _super.prototype.destroy.call(this); };
    Te.prototype.getAttributeBuffer = function (i) { var t = qe(Math.ceil(i / 8)), e = Ws(t), s = t * 8; this._aBuffers.length <= e && (this._iBuffers.length = e + 1); var r = this._aBuffers[s]; return r || (this._aBuffers[s] = r = new Zi(s * this.vertexSize * 4)), r; };
    Te.prototype.getIndexBuffer = function (i) { var t = qe(Math.ceil(i / 12)), e = Ws(t), s = t * 12; this._iBuffers.length <= e && (this._iBuffers.length = e + 1); var r = this._iBuffers[e]; return r || (this._iBuffers[e] = r = new Uint16Array(s)), r; };
    Te.prototype.packInterleavedGeometry = function (i, t, e, s, r) { var n = t.uint32View, o = t.float32View, a = s / this.vertexSize, h = i.uvs, l = i.indices, c = i.vertexData, u = i._texture.baseTexture._batchLocation, d = Math.min(i.worldAlpha, 1), f = d < 1 && i._texture.baseTexture.alphaMode ? Di(i._tintRGB, d) : i._tintRGB + (d * 255 << 24); for (var p = 0; p < c.length; p += 2)
        o[s++] = c[p], o[s++] = c[p + 1], o[s++] = h[p], o[s++] = h[p + 1], n[s++] = f, o[s++] = u; for (var p = 0; p < l.length; p++)
        e[r++] = a + l[p]; };
    return Te;
}(Qe));
var ei = Te;
ei.extension = { name: "batch", type: P.RendererPlugin }, ei._drawCallPool = [], ei._textureArrayPool = [], U.add(ei);
var Nd = /** @class */ (function () {
    function Nd() {
        this._glTransformFeedbacks = {}, this.buffers = [], this.disposeRunner = new Tt("disposeTransformFeedback");
    }
    Nd.prototype.bindBuffer = function (t, e) { this.buffers[t] = e; };
    Nd.prototype.destroy = function () { this.disposeRunner.emit(this, !1); };
    return Nd;
}());
var Fd = /** @class */ (function () {
    function Fd(t) {
        this.buffer = t || null, this.updateID = -1, this.byteLength = -1, this.refCount = 0;
    }
    return Fd;
}());
var Lr = /** @class */ (function () {
    function Lr(t) {
        this.renderer = t, this.managedBuffers = {}, this.boundBufferBases = {};
    }
    Lr.prototype.destroy = function () { this.renderer = null; };
    Lr.prototype.contextChange = function () { this.disposeAll(!0), this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID; };
    Lr.prototype.bind = function (t) { var _b = this, e = _b.gl, s = _b.CONTEXT_UID, r = t._glBuffers[s] || this.createGLBuffer(t); e.bindBuffer(t.type, r.buffer); };
    Lr.prototype.unbind = function (t) { var e = this.gl; e.bindBuffer(t, null); };
    Lr.prototype.bindBufferBase = function (t, e) { var _b = this, s = _b.gl, r = _b.CONTEXT_UID; if (this.boundBufferBases[e] !== t) {
        var n = t._glBuffers[r] || this.createGLBuffer(t);
        this.boundBufferBases[e] = t, s.bindBufferBase(s.UNIFORM_BUFFER, e, n.buffer);
    } };
    Lr.prototype.bindBufferRange = function (t, e, s) { var _b = this, r = _b.gl, n = _b.CONTEXT_UID; s = s || 0; var o = t._glBuffers[n] || this.createGLBuffer(t); r.bindBufferRange(r.UNIFORM_BUFFER, e || 0, o.buffer, s * 256, 256); };
    Lr.prototype.update = function (t) { var _b = this, e = _b.gl, s = _b.CONTEXT_UID, r = t._glBuffers[s] || this.createGLBuffer(t); if (t._updateID !== r.updateID)
        if (r.updateID = t._updateID, e.bindBuffer(t.type, r.buffer), r.byteLength >= t.data.byteLength)
            e.bufferSubData(t.type, 0, t.data);
        else {
            var n = t.static ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
            r.byteLength = t.data.byteLength, e.bufferData(t.type, t.data, n);
        } };
    Lr.prototype.dispose = function (t, e) { if (!this.managedBuffers[t.id])
        return; delete this.managedBuffers[t.id]; var s = t._glBuffers[this.CONTEXT_UID], r = this.gl; t.disposeRunner.remove(this), s && (e || r.deleteBuffer(s.buffer), delete t._glBuffers[this.CONTEXT_UID]); };
    Lr.prototype.disposeAll = function (t) { var e = Object.keys(this.managedBuffers); for (var s = 0; s < e.length; s++)
        this.dispose(this.managedBuffers[e[s]], t); };
    Lr.prototype.createGLBuffer = function (t) { var _b = this, e = _b.CONTEXT_UID, s = _b.gl; return t._glBuffers[e] = new Fd(s.createBuffer()), this.managedBuffers[t.id] = t, t.disposeRunner.add(this), t._glBuffers[e]; };
    return Lr;
}());
Lr.extension = { type: P.RendererSystem, name: "buffer" }, U.add(Lr);
var Ur = /** @class */ (function () {
    function Ur(t) {
        this.renderer = t;
    }
    Ur.prototype.contextChange = function (t) { var e; if (this.renderer.context.webGLVersion === 1) {
        var s = t.getParameter(t.FRAMEBUFFER_BINDING);
        t.bindFramebuffer(t.FRAMEBUFFER, null), e = t.getParameter(t.SAMPLES), t.bindFramebuffer(t.FRAMEBUFFER, s);
    }
    else {
        var s = t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);
        t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null), e = t.getParameter(t.SAMPLES), t.bindFramebuffer(t.DRAW_FRAMEBUFFER, s);
    } e >= nt.HIGH ? this.multisample = nt.HIGH : e >= nt.MEDIUM ? this.multisample = nt.MEDIUM : e >= nt.LOW ? this.multisample = nt.LOW : this.multisample = nt.NONE; };
    Ur.prototype.destroy = function () { };
    return Ur;
}());
Ur.extension = { type: P.RendererSystem, name: "_multisample" }, U.add(Ur);
var Or = /** @class */ (function () {
    function Or(t) {
        this.renderer = t;
    }
    Or.prototype.render = function (t, e) { var s = this.renderer; var r, n, o, a; if (e && (r = e.renderTexture, n = e.clear, o = e.transform, a = e.skipUpdateTransform), this.renderingToScreen = !r, s.runners.prerender.emit(), s.emit("prerender"), s.projection.transform = o, !s.context.isLost) {
        if (r || (this.lastObjectRendered = t), !a) {
            var h = t.enableTempParent();
            t.updateTransform(), t.disableTempParent(h);
        }
        s.renderTexture.bind(r), s.batch.currentRenderer.start(), (n != null ? n : s.background.clearBeforeRender) && s.renderTexture.clear(), t.render(s), s.batch.currentRenderer.flush(), r && (e.blit && s.framebuffer.blit(), r.baseTexture.update()), s.runners.postrender.emit(), s.projection.transform = null, s.emit("postrender");
    } };
    Or.prototype.destroy = function () { this.renderer = null, this.lastObjectRendered = null; };
    return Or;
}());
Or.extension = { type: P.RendererSystem, name: "objectRenderer" }, U.add(Or);
var Ld = "7.0.5";
var Ud = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n";
var Od = /** @class */ (function (_super) {
    __extends(Od, _super);
    function Od(t) {
        if (t === void 0) { t = 1; }
        var _this = this;
        _this = _super.call(this, Go, Ud, { uAlpha: 1 }) || this, _this.alpha = t;
        return _this;
    }
    Object.defineProperty(Od.prototype, "alpha", {
        get: function () { return this.uniforms.uAlpha; },
        set: function (t) { this.uniforms.uAlpha = t; },
        enumerable: false,
        configurable: true
    });
    return Od;
}(Ct));
var kd = "\n    attribute vec2 aVertexPosition;\n\n    uniform mat3 projectionMatrix;\n\n    uniform float strength;\n\n    varying vec2 vBlurTexCoords[%size%];\n\n    uniform vec4 inputSize;\n    uniform vec4 outputFrame;\n\n    vec4 filterVertexPosition( void )\n    {\n        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n    }\n\n    vec2 filterTextureCoord( void )\n    {\n        return aVertexPosition * (outputFrame.zw * inputSize.zw);\n    }\n\n    void main(void)\n    {\n        gl_Position = filterVertexPosition();\n\n        vec2 textureCoord = filterTextureCoord();\n        %blur%\n    }";
function Gd(i, t) {
    var e = Math.ceil(i / 2);
    var s = kd, r = "", n;
    t ? n = "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);" : n = "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
    for (var o = 0; o < i; o++) {
        var a = n.replace("%index%", o.toString());
        a = a.replace("%sampleIndex%", "".concat(o - (e - 1), ".0")), r += a, r += "\n";
    }
    return s = s.replace("%blur%", r), s = s.replace("%size%", i.toString()), s;
}
var Hd = { 5: [.153388, .221461, .250301], 7: [.071303, .131514, .189879, .214607], 9: [.028532, .067234, .124009, .179044, .20236], 11: [.0093, .028002, .065984, .121703, .175713, .198596], 13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641], 15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448] }, Xd = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join("\n");
function Vd(i) {
    var t = Hd[i], e = t.length;
    var s = Xd, r = "";
    var n = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;";
    var o;
    for (var a = 0; a < i; a++) {
        var h = n.replace("%index%", a.toString());
        o = a, a >= e && (o = i - a - 1), h = h.replace("%value%", t[o].toString()), r += h, r += "\n";
    }
    return s = s.replace("%blur%", r), s = s.replace("%size%", i.toString()), s;
}
var kr = /** @class */ (function (_super) {
    __extends(kr, _super);
    function kr(t, e, s, r, n) {
        if (e === void 0) { e = 8; }
        if (s === void 0) { s = 4; }
        if (r === void 0) { r = w.FILTER_RESOLUTION; }
        if (n === void 0) { n = 5; }
        var _this = this;
        var o = Gd(n, t), a = Vd(n);
        _this = _super.call(this, o, a) || this, _this.horizontal = t, _this.resolution = r, _this._quality = 0, _this.quality = s, _this.blur = e;
        return _this;
    }
    kr.prototype.apply = function (t, e, s, r) { if (s ? this.horizontal ? this.uniforms.strength = 1 / s.width * (s.width / e.width) : this.uniforms.strength = 1 / s.height * (s.height / e.height) : this.horizontal ? this.uniforms.strength = 1 / t.renderer.width * (t.renderer.width / e.width) : this.uniforms.strength = 1 / t.renderer.height * (t.renderer.height / e.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, this.passes === 1)
        t.applyFilter(this, e, s, r);
    else {
        var n = t.getFilterTexture(), o = t.renderer;
        var a = e, h = n;
        this.state.blend = !1, t.applyFilter(this, a, h, Bt.CLEAR);
        for (var l = 1; l < this.passes - 1; l++) {
            t.bindAndClear(a, Bt.BLIT), this.uniforms.uSampler = h;
            var c = h;
            h = a, a = c, o.shader.bind(this), o.geometry.draw(5);
        }
        this.state.blend = !0, t.applyFilter(this, h, s, r), t.returnFilterTexture(n);
    } };
    Object.defineProperty(kr.prototype, "blur", {
        get: function () { return this.strength; },
        set: function (t) { this.padding = 1 + Math.abs(t) * 2, this.strength = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(kr.prototype, "quality", {
        get: function () { return this._quality; },
        set: function (t) { this._quality = t, this.passes = t; },
        enumerable: false,
        configurable: true
    });
    return kr;
}(Ct));
var zd = /** @class */ (function (_super) {
    __extends(zd, _super);
    function zd(t, e, s, r) {
        if (t === void 0) { t = 8; }
        if (e === void 0) { e = 4; }
        if (s === void 0) { s = w.FILTER_RESOLUTION; }
        if (r === void 0) { r = 5; }
        var _this = this;
        _this = _super.call(this) || this, _this.blurXFilter = new kr(!0, t, e, s, r), _this.blurYFilter = new kr(!1, t, e, s, r), _this.resolution = s, _this.quality = e, _this.blur = t, _this.repeatEdgePixels = !1;
        return _this;
    }
    zd.prototype.apply = function (t, e, s, r) { var n = Math.abs(this.blurXFilter.strength), o = Math.abs(this.blurYFilter.strength); if (n && o) {
        var a = t.getFilterTexture();
        this.blurXFilter.apply(t, e, a, Bt.CLEAR), this.blurYFilter.apply(t, a, s, r), t.returnFilterTexture(a);
    }
    else
        o ? this.blurYFilter.apply(t, e, s, r) : this.blurXFilter.apply(t, e, s, r); };
    zd.prototype.updatePadding = function () { this._repeatEdgePixels ? this.padding = 0 : this.padding = Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength)) * 2; };
    Object.defineProperty(zd.prototype, "blur", {
        get: function () { return this.blurXFilter.blur; },
        set: function (t) { this.blurXFilter.blur = this.blurYFilter.blur = t, this.updatePadding(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(zd.prototype, "quality", {
        get: function () { return this.blurXFilter.quality; },
        set: function (t) { this.blurXFilter.quality = this.blurYFilter.quality = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(zd.prototype, "blurX", {
        get: function () { return this.blurXFilter.blur; },
        set: function (t) { this.blurXFilter.blur = t, this.updatePadding(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(zd.prototype, "blurY", {
        get: function () { return this.blurYFilter.blur; },
        set: function (t) { this.blurYFilter.blur = t, this.updatePadding(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(zd.prototype, "blendMode", {
        get: function () { return this.blurYFilter.blendMode; },
        set: function (t) { this.blurYFilter.blendMode = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(zd.prototype, "repeatEdgePixels", {
        get: function () { return this._repeatEdgePixels; },
        set: function (t) { this._repeatEdgePixels = t, this.updatePadding(); },
        enumerable: false,
        configurable: true
    });
    return zd;
}(Ct));
var Wd = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n";
var Gr = /** @class */ (function (_super) {
    __extends(Gr, _super);
    function Gr() {
        var _this = this;
        var t = { m: new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]), uAlpha: 1 };
        _this = _super.call(this, Dr, Wd, t) || this, _this.alpha = 1;
        return _this;
    }
    Gr.prototype._loadMatrix = function (t, e) {
        if (e === void 0) { e = !1; }
        var s = t;
        e && (this._multiply(s, this.uniforms.m, t), s = this._colorMatrix(s)), this.uniforms.m = s;
    };
    Gr.prototype._multiply = function (t, e, s) { return t[0] = e[0] * s[0] + e[1] * s[5] + e[2] * s[10] + e[3] * s[15], t[1] = e[0] * s[1] + e[1] * s[6] + e[2] * s[11] + e[3] * s[16], t[2] = e[0] * s[2] + e[1] * s[7] + e[2] * s[12] + e[3] * s[17], t[3] = e[0] * s[3] + e[1] * s[8] + e[2] * s[13] + e[3] * s[18], t[4] = e[0] * s[4] + e[1] * s[9] + e[2] * s[14] + e[3] * s[19] + e[4], t[5] = e[5] * s[0] + e[6] * s[5] + e[7] * s[10] + e[8] * s[15], t[6] = e[5] * s[1] + e[6] * s[6] + e[7] * s[11] + e[8] * s[16], t[7] = e[5] * s[2] + e[6] * s[7] + e[7] * s[12] + e[8] * s[17], t[8] = e[5] * s[3] + e[6] * s[8] + e[7] * s[13] + e[8] * s[18], t[9] = e[5] * s[4] + e[6] * s[9] + e[7] * s[14] + e[8] * s[19] + e[9], t[10] = e[10] * s[0] + e[11] * s[5] + e[12] * s[10] + e[13] * s[15], t[11] = e[10] * s[1] + e[11] * s[6] + e[12] * s[11] + e[13] * s[16], t[12] = e[10] * s[2] + e[11] * s[7] + e[12] * s[12] + e[13] * s[17], t[13] = e[10] * s[3] + e[11] * s[8] + e[12] * s[13] + e[13] * s[18], t[14] = e[10] * s[4] + e[11] * s[9] + e[12] * s[14] + e[13] * s[19] + e[14], t[15] = e[15] * s[0] + e[16] * s[5] + e[17] * s[10] + e[18] * s[15], t[16] = e[15] * s[1] + e[16] * s[6] + e[17] * s[11] + e[18] * s[16], t[17] = e[15] * s[2] + e[16] * s[7] + e[17] * s[12] + e[18] * s[17], t[18] = e[15] * s[3] + e[16] * s[8] + e[17] * s[13] + e[18] * s[18], t[19] = e[15] * s[4] + e[16] * s[9] + e[17] * s[14] + e[18] * s[19] + e[19], t; };
    Gr.prototype._colorMatrix = function (t) { var e = new Float32Array(t); return e[4] /= 255, e[9] /= 255, e[14] /= 255, e[19] /= 255, e; };
    Gr.prototype.brightness = function (t, e) { var s = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0]; this._loadMatrix(s, e); };
    Gr.prototype.tint = function (t, e) { var s = t >> 16 & 255, r = t >> 8 & 255, n = t & 255, o = [s / 255, 0, 0, 0, 0, 0, r / 255, 0, 0, 0, 0, 0, n / 255, 0, 0, 0, 0, 0, 1, 0]; this._loadMatrix(o, e); };
    Gr.prototype.greyscale = function (t, e) { var s = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0]; this._loadMatrix(s, e); };
    Gr.prototype.blackAndWhite = function (t) { var e = [.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0]; this._loadMatrix(e, t); };
    Gr.prototype.hue = function (t, e) { t = (t || 0) / 180 * Math.PI; var s = Math.cos(t), r = Math.sin(t), n = Math.sqrt, o = 1 / 3, a = n(o), h = s + (1 - s) * o, l = o * (1 - s) - a * r, c = o * (1 - s) + a * r, u = o * (1 - s) + a * r, d = s + o * (1 - s), f = o * (1 - s) - a * r, p = o * (1 - s) - a * r, m = o * (1 - s) + a * r, _ = s + o * (1 - s), x = [h, l, c, 0, 0, u, d, f, 0, 0, p, m, _, 0, 0, 0, 0, 0, 1, 0]; this._loadMatrix(x, e); };
    Gr.prototype.contrast = function (t, e) { var s = (t || 0) + 1, r = -.5 * (s - 1), n = [s, 0, 0, 0, r, 0, s, 0, 0, r, 0, 0, s, 0, r, 0, 0, 0, 1, 0]; this._loadMatrix(n, e); };
    Gr.prototype.saturate = function (t, e) {
        if (t === void 0) { t = 0; }
        var s = t * 2 / 3 + 1, r = (s - 1) * -.5, n = [s, r, r, 0, 0, r, s, r, 0, 0, r, r, s, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(n, e);
    };
    Gr.prototype.desaturate = function () { this.saturate(-1); };
    Gr.prototype.negative = function (t) { var e = [-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0]; this._loadMatrix(e, t); };
    Gr.prototype.sepia = function (t) { var e = [.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0]; this._loadMatrix(e, t); };
    Gr.prototype.technicolor = function (t) { var e = [1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0]; this._loadMatrix(e, t); };
    Gr.prototype.polaroid = function (t) { var e = [1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0]; this._loadMatrix(e, t); };
    Gr.prototype.toBGR = function (t) { var e = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0]; this._loadMatrix(e, t); };
    Gr.prototype.kodachrome = function (t) { var e = [1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0]; this._loadMatrix(e, t); };
    Gr.prototype.browni = function (t) { var e = [.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0]; this._loadMatrix(e, t); };
    Gr.prototype.vintage = function (t) { var e = [.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0]; this._loadMatrix(e, t); };
    Gr.prototype.colorTone = function (t, e, s, r, n) { t = t || .2, e = e || .15, s = s || 16770432, r = r || 3375104; var o = (s >> 16 & 255) / 255, a = (s >> 8 & 255) / 255, h = (s & 255) / 255, l = (r >> 16 & 255) / 255, c = (r >> 8 & 255) / 255, u = (r & 255) / 255, d = [.3, .59, .11, 0, 0, o, a, h, t, 0, l, c, u, e, 0, o - l, a - c, h - u, 0, 0]; this._loadMatrix(d, n); };
    Gr.prototype.night = function (t, e) { t = t || .1; var s = [t * -2, -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, t * 2, 0, 0, 0, 0, 0, 1, 0]; this._loadMatrix(s, e); };
    Gr.prototype.predator = function (t, e) { var s = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0]; this._loadMatrix(s, e); };
    Gr.prototype.lsd = function (t) { var e = [2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0]; this._loadMatrix(e, t); };
    Gr.prototype.reset = function () { var t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]; this._loadMatrix(t, !1); };
    Object.defineProperty(Gr.prototype, "matrix", {
        get: function () { return this.uniforms.m; },
        set: function (t) { this.uniforms.m = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gr.prototype, "alpha", {
        get: function () { return this.uniforms.uAlpha; },
        set: function (t) { this.uniforms.uAlpha = t; },
        enumerable: false,
        configurable: true
    });
    return Gr;
}(Ct));
Gr.prototype.grayscale = Gr.prototype.greyscale;
var jd = "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\nuniform mat2 rotation;\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform highp vec4 inputSize;\nuniform vec4 inputClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy = scale * inputSize.zw * (rotation * map.xy);\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));\n}\n", Yd = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n\tgl_Position = filterVertexPosition();\n\tvTextureCoord = filterTextureCoord();\n\tvFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;\n}\n";
var $d = /** @class */ (function (_super) {
    __extends($d, _super);
    function $d(t, e) {
        var _this = this;
        var s = new Z;
        t.renderable = !1, _this = _super.call(this, Yd, jd, { mapSampler: t._texture, filterMatrix: s, scale: { x: 1, y: 1 }, rotation: new Float32Array([1, 0, 0, 1]) }) || this, _this.maskSprite = t, _this.maskMatrix = s, e == null && (e = 20), _this.scale = new j(e, e);
        return _this;
    }
    $d.prototype.apply = function (t, e, s, r) { this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x, this.uniforms.scale.y = this.scale.y; var n = this.maskSprite.worldTransform, o = Math.sqrt(n.a * n.a + n.b * n.b), a = Math.sqrt(n.c * n.c + n.d * n.d); o !== 0 && a !== 0 && (this.uniforms.rotation[0] = n.a / o, this.uniforms.rotation[1] = n.b / o, this.uniforms.rotation[2] = n.c / a, this.uniforms.rotation[3] = n.d / a), t.applyFilter(this, e, s, r); };
    Object.defineProperty($d.prototype, "map", {
        get: function () { return this.uniforms.mapSampler; },
        set: function (t) { this.uniforms.mapSampler = t; },
        enumerable: false,
        configurable: true
    });
    return $d;
}(Ct));
var qd = "\nattribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvoid texcoords(vec2 fragCoord, vec2 inverseVP,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = filterVertexPosition();\n\n   vFragCoord = aVertexPosition * outputFrame.zw;\n\n   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n", Kd = "varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\nuniform sampler2D uSampler;\nuniform highp vec4 inputSize;\n\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it's\n unsupported by WebGL.\n\n --\n\n From:\n https://github.com/mitsuhiko/webgl-meincraft\n\n Copyright (c) 2011 by Armin Ronacher.\n\n Some rights reserved.\n\n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n\n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n\n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n\n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec4 color;\n\n      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n";
var Zd = /** @class */ (function (_super) {
    __extends(Zd, _super);
    function Zd() {
        return _super.call(this, qd, Kd) || this;
    }
    return Zd;
}(Ct));
var Qd = "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n";
var Jd = /** @class */ (function (_super) {
    __extends(Jd, _super);
    function Jd(t, e) {
        if (t === void 0) { t = .5; }
        if (e === void 0) { e = Math.random(); }
        var _this = this;
        _this = _super.call(this, Dr, Qd, { uNoise: 0, uSeed: 0 }) || this, _this.noise = t, _this.seed = e;
        return _this;
    }
    Object.defineProperty(Jd.prototype, "noise", {
        get: function () { return this.uniforms.uNoise; },
        set: function (t) { this.uniforms.uNoise = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jd.prototype, "seed", {
        get: function () { return this.uniforms.uSeed; },
        set: function (t) { this.uniforms.uSeed = t; },
        enumerable: false,
        configurable: true
    });
    return Jd;
}(Ct));
w.SORTABLE_CHILDREN = !1;
var ii = /** @class */ (function () {
    function ii() {
        this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.rect = null, this.updateID = -1;
    }
    ii.prototype.isEmpty = function () { return this.minX > this.maxX || this.minY > this.maxY; };
    ii.prototype.clear = function () { this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0; };
    ii.prototype.getRectangle = function (t) { return this.minX > this.maxX || this.minY > this.maxY ? V.EMPTY : (t = t || new V(0, 0, 1, 1), t.x = this.minX, t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, t); };
    ii.prototype.addPoint = function (t) { this.minX = Math.min(this.minX, t.x), this.maxX = Math.max(this.maxX, t.x), this.minY = Math.min(this.minY, t.y), this.maxY = Math.max(this.maxY, t.y); };
    ii.prototype.addPointMatrix = function (t, e) { var s = t.a, r = t.b, n = t.c, o = t.d, a = t.tx, h = t.ty, l = s * e.x + n * e.y + a, c = r * e.x + o * e.y + h; this.minX = Math.min(this.minX, l), this.maxX = Math.max(this.maxX, l), this.minY = Math.min(this.minY, c), this.maxY = Math.max(this.maxY, c); };
    ii.prototype.addQuad = function (t) { var e = this.minX, s = this.minY, r = this.maxX, n = this.maxY, o = t[0], a = t[1]; e = o < e ? o : e, s = a < s ? a : s, r = o > r ? o : r, n = a > n ? a : n, o = t[2], a = t[3], e = o < e ? o : e, s = a < s ? a : s, r = o > r ? o : r, n = a > n ? a : n, o = t[4], a = t[5], e = o < e ? o : e, s = a < s ? a : s, r = o > r ? o : r, n = a > n ? a : n, o = t[6], a = t[7], e = o < e ? o : e, s = a < s ? a : s, r = o > r ? o : r, n = a > n ? a : n, this.minX = e, this.minY = s, this.maxX = r, this.maxY = n; };
    ii.prototype.addFrame = function (t, e, s, r, n) { this.addFrameMatrix(t.worldTransform, e, s, r, n); };
    ii.prototype.addFrameMatrix = function (t, e, s, r, n) { var o = t.a, a = t.b, h = t.c, l = t.d, c = t.tx, u = t.ty; var d = this.minX, f = this.minY, p = this.maxX, m = this.maxY, _ = o * e + h * s + c, x = a * e + l * s + u; d = _ < d ? _ : d, f = x < f ? x : f, p = _ > p ? _ : p, m = x > m ? x : m, _ = o * r + h * s + c, x = a * r + l * s + u, d = _ < d ? _ : d, f = x < f ? x : f, p = _ > p ? _ : p, m = x > m ? x : m, _ = o * e + h * n + c, x = a * e + l * n + u, d = _ < d ? _ : d, f = x < f ? x : f, p = _ > p ? _ : p, m = x > m ? x : m, _ = o * r + h * n + c, x = a * r + l * n + u, d = _ < d ? _ : d, f = x < f ? x : f, p = _ > p ? _ : p, m = x > m ? x : m, this.minX = d, this.minY = f, this.maxX = p, this.maxY = m; };
    ii.prototype.addVertexData = function (t, e, s) { var r = this.minX, n = this.minY, o = this.maxX, a = this.maxY; for (var h = e; h < s; h += 2) {
        var l = t[h], c = t[h + 1];
        r = l < r ? l : r, n = c < n ? c : n, o = l > o ? l : o, a = c > a ? c : a;
    } this.minX = r, this.minY = n, this.maxX = o, this.maxY = a; };
    ii.prototype.addVertices = function (t, e, s, r) { this.addVerticesMatrix(t.worldTransform, e, s, r); };
    ii.prototype.addVerticesMatrix = function (t, e, s, r, n, o) {
        if (n === void 0) { n = 0; }
        if (o === void 0) { o = n; }
        var a = t.a, h = t.b, l = t.c, c = t.d, u = t.tx, d = t.ty;
        var f = this.minX, p = this.minY, m = this.maxX, _ = this.maxY;
        for (var x = s; x < r; x += 2) {
            var y = e[x], g = e[x + 1], v = a * y + l * g + u, T = c * g + h * y + d;
            f = Math.min(f, v - n), m = Math.max(m, v + n), p = Math.min(p, T - o), _ = Math.max(_, T + o);
        }
        this.minX = f, this.minY = p, this.maxX = m, this.maxY = _;
    };
    ii.prototype.addBounds = function (t) { var e = this.minX, s = this.minY, r = this.maxX, n = this.maxY; this.minX = t.minX < e ? t.minX : e, this.minY = t.minY < s ? t.minY : s, this.maxX = t.maxX > r ? t.maxX : r, this.maxY = t.maxY > n ? t.maxY : n; };
    ii.prototype.addBoundsMask = function (t, e) { var s = t.minX > e.minX ? t.minX : e.minX, r = t.minY > e.minY ? t.minY : e.minY, n = t.maxX < e.maxX ? t.maxX : e.maxX, o = t.maxY < e.maxY ? t.maxY : e.maxY; if (s <= n && r <= o) {
        var a = this.minX, h = this.minY, l = this.maxX, c = this.maxY;
        this.minX = s < a ? s : a, this.minY = r < h ? r : h, this.maxX = n > l ? n : l, this.maxY = o > c ? o : c;
    } };
    ii.prototype.addBoundsMatrix = function (t, e) { this.addFrameMatrix(e, t.minX, t.minY, t.maxX, t.maxY); };
    ii.prototype.addBoundsArea = function (t, e) { var s = t.minX > e.x ? t.minX : e.x, r = t.minY > e.y ? t.minY : e.y, n = t.maxX < e.x + e.width ? t.maxX : e.x + e.width, o = t.maxY < e.y + e.height ? t.maxY : e.y + e.height; if (s <= n && r <= o) {
        var a = this.minX, h = this.minY, l = this.maxX, c = this.maxY;
        this.minX = s < a ? s : a, this.minY = r < h ? r : h, this.maxX = n > l ? n : l, this.maxY = o > c ? o : c;
    } };
    ii.prototype.pad = function (t, e) {
        if (t === void 0) { t = 0; }
        if (e === void 0) { e = t; }
        this.isEmpty() || (this.minX -= t, this.maxX += t, this.minY -= e, this.maxY += e);
    };
    ii.prototype.addFramePad = function (t, e, s, r, n, o) { t -= n, e -= o, s += n, r += o, this.minX = this.minX < t ? this.minX : t, this.maxX = this.maxX > s ? this.maxX : s, this.minY = this.minY < e ? this.minY : e, this.maxY = this.maxY > r ? this.maxY : r; };
    return ii;
}());
var et = /** @class */ (function (_super) {
    __extends(et, _super);
    function et() {
        var _this = this;
        _this = _super.call(this) || this, _this.tempDisplayObjectParent = null, _this.transform = new Ve, _this.alpha = 1, _this.visible = !0, _this.renderable = !0, _this.cullable = !1, _this.cullArea = null, _this.parent = null, _this.worldAlpha = 1, _this._lastSortedIndex = 0, _this._zIndex = 0, _this.filterArea = null, _this.filters = null, _this._enabledFilters = null, _this._bounds = new ii, _this._localBounds = null, _this._boundsID = 0, _this._boundsRect = null, _this._localBoundsRect = null, _this._mask = null, _this._maskRefCount = 0, _this._destroyed = !1, _this.isSprite = !1, _this.isMask = !1;
        return _this;
    }
    et.mixin = function (t) { var e = Object.keys(t); for (var s = 0; s < e.length; ++s) {
        var r = e[s];
        Object.defineProperty(et.prototype, r, Object.getOwnPropertyDescriptor(t, r));
    } };
    Object.defineProperty(et.prototype, "destroyed", {
        get: function () { return this._destroyed; },
        enumerable: false,
        configurable: true
    });
    et.prototype._recursivePostUpdateTransform = function () { this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform); };
    et.prototype.updateTransform = function () { this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha; };
    et.prototype.getBounds = function (t, e) { return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._bounds.updateID !== this._boundsID && (this.calculateBounds(), this._bounds.updateID = this._boundsID), e || (this._boundsRect || (this._boundsRect = new V), e = this._boundsRect), this._bounds.getRectangle(e); };
    et.prototype.getLocalBounds = function (t) { t || (this._localBoundsRect || (this._localBoundsRect = new V), t = this._localBoundsRect), this._localBounds || (this._localBounds = new ii); var e = this.transform, s = this.parent; this.parent = null, this.transform = this._tempDisplayObjectParent.transform; var r = this._bounds, n = this._boundsID; this._bounds = this._localBounds; var o = this.getBounds(!1, t); return this.parent = s, this.transform = e, this._bounds = r, this._bounds.updateID += this._boundsID - n, o; };
    et.prototype.toGlobal = function (t, e, s) {
        if (s === void 0) { s = !1; }
        return s || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t, e);
    };
    et.prototype.toLocal = function (t, e, s, r) { return e && (t = e.toGlobal(t, s, r)), r || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t, s); };
    et.prototype.setParent = function (t) { if (!t || !t.addChild)
        throw new Error("setParent: Argument must be a Container"); return t.addChild(this), t; };
    et.prototype.removeFromParent = function () { var t; (t = this.parent) == null || t.removeChild(this); };
    et.prototype.setTransform = function (t, e, s, r, n, o, a, h, l) {
        if (t === void 0) { t = 0; }
        if (e === void 0) { e = 0; }
        if (s === void 0) { s = 1; }
        if (r === void 0) { r = 1; }
        if (n === void 0) { n = 0; }
        if (o === void 0) { o = 0; }
        if (a === void 0) { a = 0; }
        if (h === void 0) { h = 0; }
        if (l === void 0) { l = 0; }
        return this.position.x = t, this.position.y = e, this.scale.x = s || 1, this.scale.y = r || 1, this.rotation = n, this.skew.x = o, this.skew.y = a, this.pivot.x = h, this.pivot.y = l, this;
    };
    et.prototype.destroy = function (t) { this.removeFromParent(), this._destroyed = !0, this.transform = null, this.parent = null, this._bounds = null, this.mask = null, this.cullArea = null, this.filters = null, this.filterArea = null, this.hitArea = null, this.interactive = !1, this.interactiveChildren = !1, this.emit("destroyed"), this.removeAllListeners(); };
    Object.defineProperty(et.prototype, "_tempDisplayObjectParent", {
        get: function () { return this.tempDisplayObjectParent === null && (this.tempDisplayObjectParent = new Xo), this.tempDisplayObjectParent; },
        enumerable: false,
        configurable: true
    });
    et.prototype.enableTempParent = function () { var t = this.parent; return this.parent = this._tempDisplayObjectParent, t; };
    et.prototype.disableTempParent = function (t) { this.parent = t; };
    Object.defineProperty(et.prototype, "x", {
        get: function () { return this.position.x; },
        set: function (t) { this.transform.position.x = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(et.prototype, "y", {
        get: function () { return this.position.y; },
        set: function (t) { this.transform.position.y = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(et.prototype, "worldTransform", {
        get: function () { return this.transform.worldTransform; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(et.prototype, "localTransform", {
        get: function () { return this.transform.localTransform; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(et.prototype, "position", {
        get: function () { return this.transform.position; },
        set: function (t) { this.transform.position.copyFrom(t); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(et.prototype, "scale", {
        get: function () { return this.transform.scale; },
        set: function (t) { this.transform.scale.copyFrom(t); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(et.prototype, "pivot", {
        get: function () { return this.transform.pivot; },
        set: function (t) { this.transform.pivot.copyFrom(t); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(et.prototype, "skew", {
        get: function () { return this.transform.skew; },
        set: function (t) { this.transform.skew.copyFrom(t); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(et.prototype, "rotation", {
        get: function () { return this.transform.rotation; },
        set: function (t) { this.transform.rotation = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(et.prototype, "angle", {
        get: function () { return this.transform.rotation * Fn; },
        set: function (t) { this.transform.rotation = t * Ln; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(et.prototype, "zIndex", {
        get: function () { return this._zIndex; },
        set: function (t) { this._zIndex = t, this.parent && (this.parent.sortDirty = !0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(et.prototype, "worldVisible", {
        get: function () { var t = this; do {
            if (!t.visible)
                return !1;
            t = t.parent;
        } while (t); return !0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(et.prototype, "mask", {
        get: function () { return this._mask; },
        set: function (t) { if (this._mask !== t) {
            if (this._mask) {
                var e = this._mask.isMaskData ? this._mask.maskObject : this._mask;
                e && (e._maskRefCount--, e._maskRefCount === 0 && (e.renderable = !0, e.isMask = !1));
            }
            if (this._mask = t, this._mask) {
                var e = this._mask.isMaskData ? this._mask.maskObject : this._mask;
                e && (e._maskRefCount === 0 && (e.renderable = !1, e.isMask = !0), e._maskRefCount++);
            }
        } },
        enumerable: false,
        configurable: true
    });
    return et;
}(Ce));
var Xo = /** @class */ (function (_super) {
    __extends(Xo, _super);
    function Xo() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.sortDirty = null;
        return _this;
    }
    return Xo;
}(et));
et.prototype.displayObjectUpdateTransform = et.prototype.updateTransform;
var tf = new Z;
function ef(i, t) { return i.zIndex === t.zIndex ? i._lastSortedIndex - t._lastSortedIndex : i.zIndex - t.zIndex; }
var wt = /** @class */ (function (_super) {
    __extends(wt, _super);
    function wt() {
        var _this = this;
        _this = _super.call(this) || this, _this.children = [], _this.sortableChildren = w.SORTABLE_CHILDREN, _this.sortDirty = !1;
        return _this;
    }
    wt.prototype.onChildrenChange = function (t) { };
    wt.prototype.addChild = function () {
        var t = [];
        for (var _b = 0; _b < arguments.length; _b++) {
            t[_b] = arguments[_b];
        }
        if (t.length > 1)
            for (var e = 0; e < t.length; e++)
                this.addChild(t[e]);
        else {
            var e = t[0];
            e.parent && e.parent.removeChild(e), e.parent = this, this.sortDirty = !0, e.transform._parentID = -1, this.children.push(e), this._boundsID++, this.onChildrenChange(this.children.length - 1), this.emit("childAdded", e, this, this.children.length - 1), e.emit("added", this);
        }
        return t[0];
    };
    wt.prototype.addChildAt = function (t, e) { if (e < 0 || e > this.children.length)
        throw new Error("".concat(t, "addChildAt: The index ").concat(e, " supplied is out of bounds ").concat(this.children.length)); return t.parent && t.parent.removeChild(t), t.parent = this, this.sortDirty = !0, t.transform._parentID = -1, this.children.splice(e, 0, t), this._boundsID++, this.onChildrenChange(e), t.emit("added", this), this.emit("childAdded", t, this, e), t; };
    wt.prototype.swapChildren = function (t, e) { if (t === e)
        return; var s = this.getChildIndex(t), r = this.getChildIndex(e); this.children[s] = e, this.children[r] = t, this.onChildrenChange(s < r ? s : r); };
    wt.prototype.getChildIndex = function (t) { var e = this.children.indexOf(t); if (e === -1)
        throw new Error("The supplied DisplayObject must be a child of the caller"); return e; };
    wt.prototype.setChildIndex = function (t, e) { if (e < 0 || e >= this.children.length)
        throw new Error("The index ".concat(e, " supplied is out of bounds ").concat(this.children.length)); var s = this.getChildIndex(t); ge(this.children, s, 1), this.children.splice(e, 0, t), this.onChildrenChange(e); };
    wt.prototype.getChildAt = function (t) { if (t < 0 || t >= this.children.length)
        throw new Error("getChildAt: Index (".concat(t, ") does not exist.")); return this.children[t]; };
    wt.prototype.removeChild = function () {
        var t = [];
        for (var _b = 0; _b < arguments.length; _b++) {
            t[_b] = arguments[_b];
        }
        if (t.length > 1)
            for (var e = 0; e < t.length; e++)
                this.removeChild(t[e]);
        else {
            var e = t[0], s = this.children.indexOf(e);
            if (s === -1)
                return null;
            e.parent = null, e.transform._parentID = -1, ge(this.children, s, 1), this._boundsID++, this.onChildrenChange(s), e.emit("removed", this), this.emit("childRemoved", e, this, s);
        }
        return t[0];
    };
    wt.prototype.removeChildAt = function (t) { var e = this.getChildAt(t); return e.parent = null, e.transform._parentID = -1, ge(this.children, t, 1), this._boundsID++, this.onChildrenChange(t), e.emit("removed", this), this.emit("childRemoved", e, this, t), e; };
    wt.prototype.removeChildren = function (t, e) {
        if (t === void 0) { t = 0; }
        if (e === void 0) { e = this.children.length; }
        var s = t, r = e, n = r - s;
        var o;
        if (n > 0 && n <= r) {
            o = this.children.splice(s, n);
            for (var a = 0; a < o.length; ++a)
                o[a].parent = null, o[a].transform && (o[a].transform._parentID = -1);
            this._boundsID++, this.onChildrenChange(t);
            for (var a = 0; a < o.length; ++a)
                o[a].emit("removed", this), this.emit("childRemoved", o[a], this, a);
            return o;
        }
        else if (n === 0 && this.children.length === 0)
            return [];
        throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
    };
    wt.prototype.sortChildren = function () { var t = !1; for (var e = 0, s = this.children.length; e < s; ++e) {
        var r = this.children[e];
        r._lastSortedIndex = e, !t && r.zIndex !== 0 && (t = !0);
    } t && this.children.length > 1 && this.children.sort(ef), this.sortDirty = !1; };
    wt.prototype.updateTransform = function () { this.sortableChildren && this.sortDirty && this.sortChildren(), this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha; for (var t = 0, e = this.children.length; t < e; ++t) {
        var s = this.children[t];
        s.visible && s.updateTransform();
    } };
    wt.prototype.calculateBounds = function () { this._bounds.clear(), this._calculateBounds(); for (var t = 0; t < this.children.length; t++) {
        var e = this.children[t];
        if (!(!e.visible || !e.renderable))
            if (e.calculateBounds(), e._mask) {
                var s = e._mask.isMaskData ? e._mask.maskObject : e._mask;
                s ? (s.calculateBounds(), this._bounds.addBoundsMask(e._bounds, s._bounds)) : this._bounds.addBounds(e._bounds);
            }
            else
                e.filterArea ? this._bounds.addBoundsArea(e._bounds, e.filterArea) : this._bounds.addBounds(e._bounds);
    } this._bounds.updateID = this._boundsID; };
    wt.prototype.getLocalBounds = function (t, e) {
        if (e === void 0) { e = !1; }
        var s = _super.prototype.getLocalBounds.call(this, t);
        if (!e)
            for (var r = 0, n = this.children.length; r < n; ++r) {
                var o = this.children[r];
                o.visible && o.updateTransform();
            }
        return s;
    };
    wt.prototype._calculateBounds = function () { };
    wt.prototype._renderWithCulling = function (t) { var e = t.renderTexture.sourceFrame; if (!(e.width > 0 && e.height > 0))
        return; var s, r; this.cullArea ? (s = this.cullArea, r = this.worldTransform) : this._render !== wt.prototype._render && (s = this.getBounds(!0)); var n = t.projection.transform; if (n && (r ? (r = tf.copyFrom(r), r.prepend(n)) : r = n), s && e.intersects(s, r))
        this._render(t);
    else if (this.cullArea)
        return; for (var o = 0, a = this.children.length; o < a; ++o) {
        var h = this.children[o], l = h.cullable;
        h.cullable = l || !this.cullArea, h.render(t), h.cullable = l;
    } };
    wt.prototype.render = function (t) { var e; if (!(!this.visible || this.worldAlpha <= 0 || !this.renderable))
        if (this._mask || ((e = this.filters) == null ? void 0 : e.length))
            this.renderAdvanced(t);
        else if (this.cullable)
            this._renderWithCulling(t);
        else {
            this._render(t);
            for (var s = 0, r = this.children.length; s < r; ++s)
                this.children[s].render(t);
        } };
    wt.prototype.renderAdvanced = function (t) { var n, o, a; var e = this.filters, s = this._mask; if (e) {
        this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0;
        for (var h = 0; h < e.length; h++)
            e[h].enabled && this._enabledFilters.push(e[h]);
    } var r = e && ((n = this._enabledFilters) == null ? void 0 : n.length) || s && (!s.isMaskData || s.enabled && (s.autoDetect || s.type !== ht.NONE)); if (r && t.batch.flush(), e && ((o = this._enabledFilters) == null ? void 0 : o.length) && t.filter.push(this, this._enabledFilters), s && t.mask.push(this, this._mask), this.cullable)
        this._renderWithCulling(t);
    else {
        this._render(t);
        for (var h = 0, l = this.children.length; h < l; ++h)
            this.children[h].render(t);
    } r && t.batch.flush(), s && t.mask.pop(this), e && ((a = this._enabledFilters) == null ? void 0 : a.length) && t.filter.pop(); };
    wt.prototype._render = function (t) { };
    wt.prototype.destroy = function (t) { _super.prototype.destroy.call(this), this.sortDirty = !1; var e = typeof t == "boolean" ? t : t == null ? void 0 : t.children, s = this.removeChildren(0, this.children.length); if (e)
        for (var r = 0; r < s.length; ++r)
            s[r].destroy(t); };
    Object.defineProperty(wt.prototype, "width", {
        get: function () { return this.scale.x * this.getLocalBounds().width; },
        set: function (t) { var e = this.getLocalBounds().width; e !== 0 ? this.scale.x = t / e : this.scale.x = 1, this._width = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(wt.prototype, "height", {
        get: function () { return this.scale.y * this.getLocalBounds().height; },
        set: function (t) { var e = this.getLocalBounds().height; e !== 0 ? this.scale.y = t / e : this.scale.y = 1, this._height = t; },
        enumerable: false,
        configurable: true
    });
    return wt;
}(et));
wt.prototype.containerUpdateTransform = wt.prototype.updateTransform;
var si = new j, sf = new Uint16Array([0, 1, 2, 0, 2, 3]);
var he = /** @class */ (function (_super) {
    __extends(he, _super);
    function he(t) {
        var _this = this;
        _this = _super.call(this) || this, _this._anchor = new te(_this._onAnchorUpdate, _this, t ? t.defaultAnchor.x : 0, t ? t.defaultAnchor.y : 0), _this._texture = null, _this._width = 0, _this._height = 0, _this._tint = null, _this._tintRGB = null, _this.tint = 16777215, _this.blendMode = k.NORMAL, _this._cachedTint = 16777215, _this.uvs = null, _this.texture = t || B.EMPTY, _this.vertexData = new Float32Array(8), _this.vertexTrimmedData = null, _this._transformID = -1, _this._textureID = -1, _this._transformTrimmedID = -1, _this._textureTrimmedID = -1, _this.indices = sf, _this.pluginName = "batch", _this.isSprite = !0, _this._roundPixels = w.ROUND_PIXELS;
        return _this;
    }
    he.prototype._onTextureUpdate = function () { this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this._width && (this.scale.x = xe(this.scale.x) * this._width / this._texture.orig.width), this._height && (this.scale.y = xe(this.scale.y) * this._height / this._texture.orig.height); };
    he.prototype._onAnchorUpdate = function () { this._transformID = -1, this._transformTrimmedID = -1; };
    he.prototype.calculateVertices = function () { var t = this._texture; if (this._transformID === this.transform._worldID && this._textureID === t._updateID)
        return; this._textureID !== t._updateID && (this.uvs = this._texture._uvs.uvsFloat32), this._transformID = this.transform._worldID, this._textureID = t._updateID; var e = this.transform.worldTransform, s = e.a, r = e.b, n = e.c, o = e.d, a = e.tx, h = e.ty, l = this.vertexData, c = t.trim, u = t.orig, d = this._anchor; var f = 0, p = 0, m = 0, _ = 0; if (c ? (p = c.x - d._x * u.width, f = p + c.width, _ = c.y - d._y * u.height, m = _ + c.height) : (p = -d._x * u.width, f = p + u.width, _ = -d._y * u.height, m = _ + u.height), l[0] = s * p + n * _ + a, l[1] = o * _ + r * p + h, l[2] = s * f + n * _ + a, l[3] = o * _ + r * f + h, l[4] = s * f + n * m + a, l[5] = o * m + r * f + h, l[6] = s * p + n * m + a, l[7] = o * m + r * p + h, this._roundPixels) {
        var x = w.RESOLUTION;
        for (var y = 0; y < l.length; ++y)
            l[y] = Math.round(l[y] * x) / x;
    } };
    he.prototype.calculateTrimmedVertices = function () { if (!this.vertexTrimmedData)
        this.vertexTrimmedData = new Float32Array(8);
    else if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID)
        return; this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID; var t = this._texture, e = this.vertexTrimmedData, s = t.orig, r = this._anchor, n = this.transform.worldTransform, o = n.a, a = n.b, h = n.c, l = n.d, c = n.tx, u = n.ty, d = -r._x * s.width, f = d + s.width, p = -r._y * s.height, m = p + s.height; e[0] = o * d + h * p + c, e[1] = l * p + a * d + u, e[2] = o * f + h * p + c, e[3] = l * p + a * f + u, e[4] = o * f + h * m + c, e[5] = l * m + a * f + u, e[6] = o * d + h * m + c, e[7] = l * m + a * d + u; };
    he.prototype._render = function (t) { this.calculateVertices(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this); };
    he.prototype._calculateBounds = function () { var t = this._texture.trim, e = this._texture.orig; !t || t.width === e.width && t.height === e.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData)); };
    he.prototype.getLocalBounds = function (t) { return this.children.length === 0 ? (this._localBounds || (this._localBounds = new ii), this._localBounds.minX = this._texture.orig.width * -this._anchor._x, this._localBounds.minY = this._texture.orig.height * -this._anchor._y, this._localBounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._localBounds.maxY = this._texture.orig.height * (1 - this._anchor._y), t || (this._localBoundsRect || (this._localBoundsRect = new V), t = this._localBoundsRect), this._localBounds.getRectangle(t)) : _super.prototype.getLocalBounds.call(this, t); };
    he.prototype.containsPoint = function (t) { this.worldTransform.applyInverse(t, si); var e = this._texture.orig.width, s = this._texture.orig.height, r = -e * this.anchor.x; var n = 0; return si.x >= r && si.x < r + e && (n = -s * this.anchor.y, si.y >= n && si.y < n + s); };
    he.prototype.destroy = function (t) { if (_super.prototype.destroy.call(this, t), this._texture.off("update", this._onTextureUpdate, this), this._anchor = null, typeof t == "boolean" ? t : t == null ? void 0 : t.texture) {
        var s = typeof t == "boolean" ? t : t == null ? void 0 : t.baseTexture;
        this._texture.destroy(!!s);
    } this._texture = null; };
    he.from = function (t, e) { var s = t instanceof B ? t : B.from(t, e); return new he(s); };
    Object.defineProperty(he.prototype, "roundPixels", {
        get: function () { return this._roundPixels; },
        set: function (t) { this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(he.prototype, "width", {
        get: function () { return Math.abs(this.scale.x) * this._texture.orig.width; },
        set: function (t) { var e = xe(this.scale.x) || 1; this.scale.x = e * t / this._texture.orig.width, this._width = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(he.prototype, "height", {
        get: function () { return Math.abs(this.scale.y) * this._texture.orig.height; },
        set: function (t) { var e = xe(this.scale.y) || 1; this.scale.y = e * t / this._texture.orig.height, this._height = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(he.prototype, "anchor", {
        get: function () { return this._anchor; },
        set: function (t) { this._anchor.copyFrom(t); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(he.prototype, "tint", {
        get: function () { return this._tint; },
        set: function (t) { this._tint = t, this._tintRGB = (t >> 16) + (t & 65280) + ((t & 255) << 16); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(he.prototype, "texture", {
        get: function () { return this._texture; },
        set: function (t) { this._texture !== t && (this._texture && this._texture.off("update", this._onTextureUpdate, this), this._texture = t || B.EMPTY, this._cachedTint = 16777215, this._textureID = -1, this._textureTrimmedID = -1, t && (t.baseTexture.valid ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this))); },
        enumerable: false,
        configurable: true
    });
    return he;
}(wt));
var Vo = new Z;
et.prototype._cacheAsBitmap = !1, et.prototype._cacheData = null, et.prototype._cacheAsBitmapResolution = null, et.prototype._cacheAsBitmapMultisample = null;
var rf = /** @class */ (function () {
    function rf() {
        this.textureCacheId = null, this.originalRender = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.originalContainsPoint = null, this.sprite = null;
    }
    return rf;
}());
Object.defineProperties(et.prototype, { cacheAsBitmapResolution: { get: function () { return this._cacheAsBitmapResolution; }, set: function (i) { i !== this._cacheAsBitmapResolution && (this._cacheAsBitmapResolution = i, this.cacheAsBitmap && (this.cacheAsBitmap = !1, this.cacheAsBitmap = !0)); } }, cacheAsBitmapMultisample: { get: function () { return this._cacheAsBitmapMultisample; }, set: function (i) { i !== this._cacheAsBitmapMultisample && (this._cacheAsBitmapMultisample = i, this.cacheAsBitmap && (this.cacheAsBitmap = !1, this.cacheAsBitmap = !0)); } }, cacheAsBitmap: { get: function () { return this._cacheAsBitmap; }, set: function (i) { if (this._cacheAsBitmap === i)
            return; this._cacheAsBitmap = i; var t; i ? (this._cacheData || (this._cacheData = new rf), t = this._cacheData, t.originalRender = this.render, t.originalRenderCanvas = this.renderCanvas, t.originalUpdateTransform = this.updateTransform, t.originalCalculateBounds = this.calculateBounds, t.originalGetLocalBounds = this.getLocalBounds, t.originalDestroy = this.destroy, t.originalContainsPoint = this.containsPoint, t.originalMask = this._mask, t.originalFilterArea = this.filterArea, this.render = this._renderCached, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : (t = this._cacheData, t.sprite && this._destroyCachedDisplayObject(), this.render = t.originalRender, this.renderCanvas = t.originalRenderCanvas, this.calculateBounds = t.originalCalculateBounds, this.getLocalBounds = t.originalGetLocalBounds, this.destroy = t.originalDestroy, this.updateTransform = t.originalUpdateTransform, this.containsPoint = t.originalContainsPoint, this._mask = t.originalMask, this.filterArea = t.originalFilterArea); } } }), et.prototype._renderCached = function (t) { !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._render(t)); }, et.prototype._initCachedDisplayObject = function (t) { var d, f, p; if ((d = this._cacheData) != null && d.sprite)
    return; var e = this.alpha; this.alpha = 1, t.batch.flush(); var s = this.getLocalBounds(null, !0).clone(); if ((f = this.filters) != null && f.length) {
    var m = this.filters[0].padding;
    s.pad(m);
} s.ceil(w.RESOLUTION); var r = t.renderTexture.current, n = t.renderTexture.sourceFrame.clone(), o = t.renderTexture.destinationFrame.clone(), a = t.projection.transform, h = ee.create({ width: s.width, height: s.height, resolution: this.cacheAsBitmapResolution || t.resolution, multisample: (p = this.cacheAsBitmapMultisample) != null ? p : t.multisample }), l = "cacheAsBitmap_".concat(oe()); this._cacheData.textureCacheId = l, W.addToCache(h.baseTexture, l), B.addToCache(h, l); var c = this.transform.localTransform.copyTo(Vo).invert().translate(-s.x, -s.y); this.render = this._cacheData.originalRender, t.render(this, { renderTexture: h, clear: !0, transform: c, skipUpdateTransform: !1 }), t.framebuffer.blit(), t.projection.transform = a, t.renderTexture.bind(r, n, o), this.render = this._renderCached, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = e; var u = new he(h); u.transform.worldTransform = this.transform.worldTransform, u.anchor.x = -(s.x / s.width), u.anchor.y = -(s.y / s.height), u.alpha = e, u._bounds = this._bounds, this._cacheData.sprite = u, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.enableTempParent(), this.updateTransform(), this.disableTempParent(null)), this.containsPoint = u.containsPoint.bind(u); }, et.prototype._renderCachedCanvas = function (t) { !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderCanvas(t)); }, et.prototype._initCachedDisplayObjectCanvas = function (t) { var c; if ((c = this._cacheData) != null && c.sprite)
    return; var e = this.getLocalBounds(null, !0), s = this.alpha; this.alpha = 1; var r = t.canvasContext.activeContext, n = t._projTransform; e.ceil(w.RESOLUTION); var o = ee.create({ width: e.width, height: e.height }), a = "cacheAsBitmap_".concat(oe()); this._cacheData.textureCacheId = a, W.addToCache(o.baseTexture, a), B.addToCache(o, a); var h = Vo; this.transform.localTransform.copyTo(h), h.invert(), h.tx -= e.x, h.ty -= e.y, this.renderCanvas = this._cacheData.originalRenderCanvas, t.render(this, { renderTexture: o, clear: !0, transform: h, skipUpdateTransform: !1 }), t.canvasContext.activeContext = r, t._projTransform = n, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = s; var l = new he(o); l.transform.worldTransform = this.transform.worldTransform, l.anchor.x = -(e.x / e.width), l.anchor.y = -(e.y / e.height), l.alpha = s, l._bounds = this._bounds, this._cacheData.sprite = l, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = l.containsPoint.bind(l); }, et.prototype._calculateCachedBounds = function () { this._bounds.clear(), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite._calculateBounds(), this._bounds.updateID = this._boundsID; }, et.prototype._getCachedLocalBounds = function () { return this._cacheData.sprite.getLocalBounds(null); }, et.prototype._destroyCachedDisplayObject = function () { this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null, W.removeFromCache(this._cacheData.textureCacheId), B.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null; }, et.prototype._cacheAsBitmapDestroy = function (t) { this.cacheAsBitmap = !1, this.destroy(t); }, et.prototype.name = null, wt.prototype.getChildByName = function (t, e) { for (var s = 0, r = this.children.length; s < r; s++)
    if (this.children[s].name === t)
        return this.children[s]; if (e)
    for (var s = 0, r = this.children.length; s < r; s++) {
        var n = this.children[s];
        if (!n.getChildByName)
            continue;
        var o = n.getChildByName(t, !0);
        if (o)
            return o;
    } return null; }, et.prototype.getGlobalPosition = function (t, e) {
    if (t === void 0) { t = new j; }
    if (e === void 0) { e = !1; }
    return this.parent ? this.parent.toGlobal(this.position, t, e) : (t.x = this.position.x, t.y = this.position.y), t;
};
var zo = { accessible: !1, accessibleTitle: null, accessibleHint: null, tabIndex: 0, _accessibleActive: !1, _accessibleDiv: null, accessibleType: "button", accessiblePointerEvents: "auto", accessibleChildren: !0, renderId: -1 };
var Ge = /** @class */ (function () {
    function Ge(t) {
        this.bubbles = !0, this.cancelBubble = !0, this.cancelable = !1, this.composed = !1, this.defaultPrevented = !1, this.eventPhase = Ge.prototype.NONE, this.propagationStopped = !1, this.propagationImmediatelyStopped = !1, this.layer = new j, this.page = new j, this.AT_TARGET = 1, this.BUBBLING_PHASE = 2, this.CAPTURING_PHASE = 3, this.NONE = 0, this.manager = t;
    }
    Object.defineProperty(Ge.prototype, "layerX", {
        get: function () { return this.layer.x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ge.prototype, "layerY", {
        get: function () { return this.layer.y; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ge.prototype, "pageX", {
        get: function () { return this.page.x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ge.prototype, "pageY", {
        get: function () { return this.page.y; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ge.prototype, "data", {
        get: function () { return this; },
        enumerable: false,
        configurable: true
    });
    Ge.prototype.composedPath = function () { return this.manager && (!this.path || this.path[this.path.length - 1] !== this.target) && (this.path = this.target ? this.manager.propagationPath(this.target) : []), this.path; };
    Ge.prototype.initEvent = function (t, e, s) { throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API."); };
    Ge.prototype.initUIEvent = function (t, e, s, r, n) { throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API."); };
    Ge.prototype.preventDefault = function () { this.nativeEvent instanceof Event && this.nativeEvent.cancelable && this.nativeEvent.preventDefault(), this.defaultPrevented = !0; };
    Ge.prototype.stopImmediatePropagation = function () { this.propagationImmediatelyStopped = !0; };
    Ge.prototype.stopPropagation = function () { this.propagationStopped = !0; };
    return Ge;
}());
var ri = /** @class */ (function (_super) {
    __extends(ri, _super);
    function ri() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.client = new j, _this.movement = new j, _this.offset = new j, _this.global = new j, _this.screen = new j;
        return _this;
    }
    Object.defineProperty(ri.prototype, "clientX", {
        get: function () { return this.client.x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ri.prototype, "clientY", {
        get: function () { return this.client.y; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ri.prototype, "x", {
        get: function () { return this.clientX; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ri.prototype, "y", {
        get: function () { return this.clientY; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ri.prototype, "movementX", {
        get: function () { return this.movement.x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ri.prototype, "movementY", {
        get: function () { return this.movement.y; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ri.prototype, "offsetX", {
        get: function () { return this.offset.x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ri.prototype, "offsetY", {
        get: function () { return this.offset.y; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ri.prototype, "globalX", {
        get: function () { return this.global.x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ri.prototype, "globalY", {
        get: function () { return this.global.y; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ri.prototype, "screenX", {
        get: function () { return this.screen.x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ri.prototype, "screenY", {
        get: function () { return this.screen.y; },
        enumerable: false,
        configurable: true
    });
    ri.prototype.getModifierState = function (t) { return "getModifierState" in this.nativeEvent && this.nativeEvent.getModifierState(t); };
    ri.prototype.initMouseEvent = function (t, e, s, r, n, o, a, h, l, c, u, d, f, p, m) { throw new Error("Method not implemented."); };
    return ri;
}(Ge));
var Rt = /** @class */ (function (_super) {
    __extends(Rt, _super);
    function Rt() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.width = 0, _this.height = 0, _this.isPrimary = !1;
        return _this;
    }
    Rt.prototype.getCoalescedEvents = function () { return this.type === "pointermove" || this.type === "mousemove" || this.type === "touchmove" ? [this] : []; };
    Rt.prototype.getPredictedEvents = function () { throw new Error("getPredictedEvents is not supported!"); };
    return Rt;
}(ri));
var Qi = /** @class */ (function (_super) {
    __extends(Qi, _super);
    function Qi() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.DOM_DELTA_LINE = 0, _this.DOM_DELTA_PAGE = 1, _this.DOM_DELTA_PIXEL = 2;
        return _this;
    }
    return Qi;
}(ri));
var nf = 2048, of = new j, Hr = new j;
var Wo = /** @class */ (function () {
    function Wo(t) {
        this.dispatch = new Ce, this.moveOnAll = !1, this.mappingState = { trackingData: {} }, this.eventPool = new Map, this.rootTarget = t, this.hitPruneFn = this.hitPruneFn.bind(this), this.hitTestFn = this.hitTestFn.bind(this), this.mapPointerDown = this.mapPointerDown.bind(this), this.mapPointerMove = this.mapPointerMove.bind(this), this.mapPointerOut = this.mapPointerOut.bind(this), this.mapPointerOver = this.mapPointerOver.bind(this), this.mapPointerUp = this.mapPointerUp.bind(this), this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this), this.mapWheel = this.mapWheel.bind(this), this.mappingTable = {}, this.addEventMapping("pointerdown", this.mapPointerDown), this.addEventMapping("pointermove", this.mapPointerMove), this.addEventMapping("pointerout", this.mapPointerOut), this.addEventMapping("pointerleave", this.mapPointerOut), this.addEventMapping("pointerover", this.mapPointerOver), this.addEventMapping("pointerup", this.mapPointerUp), this.addEventMapping("pointerupoutside", this.mapPointerUpOutside), this.addEventMapping("wheel", this.mapWheel);
    }
    Wo.prototype.addEventMapping = function (t, e) { this.mappingTable[t] || (this.mappingTable[t] = []), this.mappingTable[t].push({ fn: e, priority: 0 }), this.mappingTable[t].sort(function (s, r) { return s.priority - r.priority; }); };
    Wo.prototype.dispatchEvent = function (t, e) { t.propagationStopped = !1, t.propagationImmediatelyStopped = !1, this.propagate(t, e), this.dispatch.emit(e || t.type, t); };
    Wo.prototype.mapEvent = function (t) { if (!this.rootTarget)
        return; var e = this.mappingTable[t.type]; if (e)
        for (var s = 0, r = e.length; s < r; s++)
            e[s].fn(t);
    else
        console.warn("[EventBoundary]: Event mapping not defined for ".concat(t.type)); };
    Wo.prototype.hitTest = function (t, e) { var s = this.hitTestRecursive(this.rootTarget, this.rootTarget.interactive, of.set(t, e), this.hitTestFn, this.hitPruneFn); return s && s[0]; };
    Wo.prototype.propagate = function (t, e) { if (!t.target)
        return; var s = t.composedPath(); t.eventPhase = t.CAPTURING_PHASE; for (var r = 0, n = s.length - 1; r < n; r++)
        if (t.currentTarget = s[r], this.notifyTarget(t, e), t.propagationStopped || t.propagationImmediatelyStopped)
            return; if (t.eventPhase = t.AT_TARGET, t.currentTarget = t.target, this.notifyTarget(t, e), !(t.propagationStopped || t.propagationImmediatelyStopped)) {
        t.eventPhase = t.BUBBLING_PHASE;
        for (var r = s.length - 2; r >= 0; r--)
            if (t.currentTarget = s[r], this.notifyTarget(t, e), t.propagationStopped || t.propagationImmediatelyStopped)
                return;
    } };
    Wo.prototype.all = function (t, e, s) {
        if (s === void 0) { s = this.rootTarget; }
        t.eventPhase = t.BUBBLING_PHASE;
        var r = s.children;
        if (r)
            for (var n = 0; n < r.length; n++)
                this.all(t, e, r[n]);
        t.currentTarget = s, this.notifyTarget(t, e);
    };
    Wo.prototype.propagationPath = function (t) { var e = [t]; for (var s = 0; s < nf && t !== this.rootTarget; s++) {
        if (!t.parent)
            throw new Error("Cannot find propagation path to disconnected target");
        e.push(t.parent), t = t.parent;
    } return e.reverse(), e; };
    Wo.prototype.hitTestRecursive = function (t, e, s, r, n) { if (!t || !t.visible || n(t, s))
        return null; if (t.interactiveChildren && t.children) {
        var o = t.children;
        for (var a = o.length - 1; a >= 0; a--) {
            var h = o[a], l = this.hitTestRecursive(h, e || h.interactive, s, r, n);
            if (l) {
                if (l.length > 0 && !l[l.length - 1].parent)
                    continue;
                return (l.length > 0 || t.interactive) && l.push(t), l;
            }
        }
    } return e && r(t, s) ? t.interactive ? [t] : [] : null; };
    Wo.prototype.hitPruneFn = function (t, e) { var s; if (t.hitArea && (t.worldTransform.applyInverse(e, Hr), !t.hitArea.contains(Hr.x, Hr.y)))
        return !0; if (t._mask) {
        var r = t._mask.isMaskData ? t._mask.maskObject : t._mask;
        if (r && !((s = r.containsPoint) != null && s.call(r, e)))
            return !0;
    } return !1; };
    Wo.prototype.hitTestFn = function (t, e) { return t.hitArea ? !0 : t.containsPoint ? t.containsPoint(e) : !1; };
    Wo.prototype.notifyTarget = function (t, e) { e = e != null ? e : t.type; var s = t.eventPhase === t.CAPTURING_PHASE || t.eventPhase === t.AT_TARGET ? "".concat(e, "capture") : e; this.notifyListeners(t, s), t.eventPhase === t.AT_TARGET && this.notifyListeners(t, e); };
    Wo.prototype.mapPointerDown = function (t) { if (!(t instanceof Rt)) {
        console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
    } var e = this.createPointerEvent(t); if (this.dispatchEvent(e, "pointerdown"), e.pointerType === "touch")
        this.dispatchEvent(e, "touchstart");
    else if (e.pointerType === "mouse" || e.pointerType === "pen") {
        var r = e.button === 2;
        this.dispatchEvent(e, r ? "rightdown" : "mousedown");
    } var s = this.trackingData(t.pointerId); s.pressTargetsByButton[t.button] = e.composedPath(), this.freeEvent(e); };
    Wo.prototype.mapPointerMove = function (t) { var a; if (!(t instanceof Rt)) {
        console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
    } var e = this.createPointerEvent(t), s = e.pointerType === "mouse" || e.pointerType === "pen", r = this.trackingData(t.pointerId), n = this.findMountedTarget(r.overTargets); if (r.overTargets && n !== e.target) {
        var h = t.type === "mousemove" ? "mouseout" : "pointerout", l = this.createPointerEvent(t, h, n);
        if (this.dispatchEvent(l, "pointerout"), s && this.dispatchEvent(l, "mouseout"), !e.composedPath().includes(n)) {
            var c = this.createPointerEvent(t, "pointerleave", n);
            for (c.eventPhase = c.AT_TARGET; c.target && !e.composedPath().includes(c.target);)
                c.currentTarget = c.target, this.notifyTarget(c), s && this.notifyTarget(c, "mouseleave"), c.target = c.target.parent;
            this.freeEvent(c);
        }
        this.freeEvent(l);
    } if (n !== e.target) {
        var h = t.type === "mousemove" ? "mouseover" : "pointerover", l = this.clonePointerEvent(e, h);
        this.dispatchEvent(l, "pointerover"), s && this.dispatchEvent(l, "mouseover");
        var c = n == null ? void 0 : n.parent;
        for (; c && c !== this.rootTarget.parent && c !== e.target;)
            c = c.parent;
        if (!c || c === this.rootTarget.parent) {
            var d = this.clonePointerEvent(e, "pointerenter");
            for (d.eventPhase = d.AT_TARGET; d.target && d.target !== n && d.target !== this.rootTarget.parent;)
                d.currentTarget = d.target, this.notifyTarget(d), s && this.notifyTarget(d, "mouseenter"), d.target = d.target.parent;
            this.freeEvent(d);
        }
        this.freeEvent(l);
    } var o = this.moveOnAll ? "all" : "dispatchEvent"; this[o](e, "pointermove"), e.pointerType === "touch" && this[o](e, "touchmove"), s && (this[o](e, "mousemove"), this.cursor = (a = e.target) == null ? void 0 : a.cursor), r.overTargets = e.composedPath(), this.freeEvent(e); };
    Wo.prototype.mapPointerOver = function (t) { var o; if (!(t instanceof Rt)) {
        console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
    } var e = this.trackingData(t.pointerId), s = this.createPointerEvent(t), r = s.pointerType === "mouse" || s.pointerType === "pen"; this.dispatchEvent(s, "pointerover"), r && this.dispatchEvent(s, "mouseover"), s.pointerType === "mouse" && (this.cursor = (o = s.target) == null ? void 0 : o.cursor); var n = this.clonePointerEvent(s, "pointerenter"); for (n.eventPhase = n.AT_TARGET; n.target && n.target !== this.rootTarget.parent;)
        n.currentTarget = n.target, this.notifyTarget(n), r && this.notifyTarget(n, "mouseenter"), n.target = n.target.parent; e.overTargets = s.composedPath(), this.freeEvent(s), this.freeEvent(n); };
    Wo.prototype.mapPointerOut = function (t) { if (!(t instanceof Rt)) {
        console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
    } var e = this.trackingData(t.pointerId); if (e.overTargets) {
        var s = t.pointerType === "mouse" || t.pointerType === "pen", r = this.findMountedTarget(e.overTargets), n = this.createPointerEvent(t, "pointerout", r);
        this.dispatchEvent(n), s && this.dispatchEvent(n, "mouseout");
        var o = this.createPointerEvent(t, "pointerleave", r);
        for (o.eventPhase = o.AT_TARGET; o.target && o.target !== this.rootTarget.parent;)
            o.currentTarget = o.target, this.notifyTarget(o), s && this.notifyTarget(o, "mouseleave"), o.target = o.target.parent;
        e.overTargets = null, this.freeEvent(n), this.freeEvent(o);
    } this.cursor = null; };
    Wo.prototype.mapPointerUp = function (t) { if (!(t instanceof Rt)) {
        console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
    } var e = performance.now(), s = this.createPointerEvent(t); if (this.dispatchEvent(s, "pointerup"), s.pointerType === "touch")
        this.dispatchEvent(s, "touchend");
    else if (s.pointerType === "mouse" || s.pointerType === "pen") {
        var a = s.button === 2;
        this.dispatchEvent(s, a ? "rightup" : "mouseup");
    } var r = this.trackingData(t.pointerId), n = this.findMountedTarget(r.pressTargetsByButton[t.button]); var o = n; if (n && !s.composedPath().includes(n)) {
        var a = n;
        for (; a && !s.composedPath().includes(a);) {
            if (s.currentTarget = a, this.notifyTarget(s, "pointerupoutside"), s.pointerType === "touch")
                this.notifyTarget(s, "touchendoutside");
            else if (s.pointerType === "mouse" || s.pointerType === "pen") {
                var h = s.button === 2;
                this.notifyTarget(s, h ? "rightupoutside" : "mouseupoutside");
            }
            a = a.parent;
        }
        delete r.pressTargetsByButton[t.button], o = a;
    } if (o) {
        var a = this.clonePointerEvent(s, "click");
        a.target = o, a.path = null, r.clicksByButton[t.button] || (r.clicksByButton[t.button] = { clickCount: 0, target: a.target, timeStamp: e });
        var h = r.clicksByButton[t.button];
        h.target === a.target && e - h.timeStamp < 200 ? ++h.clickCount : h.clickCount = 1, h.target = a.target, h.timeStamp = e, a.detail = h.clickCount, a.pointerType === "mouse" ? this.dispatchEvent(a, "click") : a.pointerType === "touch" && this.dispatchEvent(a, "tap"), this.dispatchEvent(a, "pointertap"), this.freeEvent(a);
    } this.freeEvent(s); };
    Wo.prototype.mapPointerUpOutside = function (t) { if (!(t instanceof Rt)) {
        console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
    } var e = this.trackingData(t.pointerId), s = this.findMountedTarget(e.pressTargetsByButton[t.button]), r = this.createPointerEvent(t); if (s) {
        var n = s;
        for (; n;)
            r.currentTarget = n, this.notifyTarget(r, "pointerupoutside"), r.pointerType === "touch" ? this.notifyTarget(r, "touchendoutside") : (r.pointerType === "mouse" || r.pointerType === "pen") && this.notifyTarget(r, r.button === 2 ? "rightupoutside" : "mouseupoutside"), n = n.parent;
        delete e.pressTargetsByButton[t.button];
    } this.freeEvent(r); };
    Wo.prototype.mapWheel = function (t) { if (!(t instanceof Qi)) {
        console.warn("EventBoundary cannot map a non-wheel event as a wheel event");
        return;
    } var e = this.createWheelEvent(t); this.dispatchEvent(e), this.freeEvent(e); };
    Wo.prototype.findMountedTarget = function (t) { if (!t)
        return null; var e = t[0]; for (var s = 1; s < t.length && t[s].parent === e; s++)
        e = t[s]; return e; };
    Wo.prototype.createPointerEvent = function (t, e, s) { var r = this.allocateEvent(Rt); return this.copyPointerData(t, r), this.copyMouseData(t, r), this.copyData(t, r), r.nativeEvent = t.nativeEvent, r.originalEvent = t, r.target = s != null ? s : this.hitTest(r.global.x, r.global.y), typeof e == "string" && (r.type = e), r; };
    Wo.prototype.createWheelEvent = function (t) { var e = this.allocateEvent(Qi); return this.copyWheelData(t, e), this.copyMouseData(t, e), this.copyData(t, e), e.nativeEvent = t.nativeEvent, e.originalEvent = t, e.target = this.hitTest(e.global.x, e.global.y), e; };
    Wo.prototype.clonePointerEvent = function (t, e) { var s = this.allocateEvent(Rt); return s.nativeEvent = t.nativeEvent, s.originalEvent = t.originalEvent, this.copyPointerData(t, s), this.copyMouseData(t, s), this.copyData(t, s), s.target = t.target, s.path = t.composedPath().slice(), s.type = e != null ? e : s.type, s; };
    Wo.prototype.copyWheelData = function (t, e) { e.deltaMode = t.deltaMode, e.deltaX = t.deltaX, e.deltaY = t.deltaY, e.deltaZ = t.deltaZ; };
    Wo.prototype.copyPointerData = function (t, e) { t instanceof Rt && e instanceof Rt && (e.pointerId = t.pointerId, e.width = t.width, e.height = t.height, e.isPrimary = t.isPrimary, e.pointerType = t.pointerType, e.pressure = t.pressure, e.tangentialPressure = t.tangentialPressure, e.tiltX = t.tiltX, e.tiltY = t.tiltY, e.twist = t.twist); };
    Wo.prototype.copyMouseData = function (t, e) { t instanceof ri && e instanceof ri && (e.altKey = t.altKey, e.button = t.button, e.buttons = t.buttons, e.client.copyFrom(t.client), e.ctrlKey = t.ctrlKey, e.metaKey = t.metaKey, e.movement.copyFrom(t.movement), e.screen.copyFrom(t.screen), e.global.copyFrom(t.global)); };
    Wo.prototype.copyData = function (t, e) { e.isTrusted = t.isTrusted, e.srcElement = t.srcElement, e.timeStamp = performance.now(), e.type = t.type, e.detail = t.detail, e.view = t.view, e.which = t.which, e.layer.copyFrom(t.layer), e.page.copyFrom(t.page); };
    Wo.prototype.trackingData = function (t) { return this.mappingState.trackingData[t] || (this.mappingState.trackingData[t] = { pressTargetsByButton: {}, clicksByButton: {}, overTarget: null }), this.mappingState.trackingData[t]; };
    Wo.prototype.allocateEvent = function (t) { this.eventPool.has(t) || this.eventPool.set(t, []); var e = this.eventPool.get(t).pop() || new t(this); return e.eventPhase = e.NONE, e.currentTarget = null, e.path = null, e.target = null, e; };
    Wo.prototype.freeEvent = function (t) { if (t.manager !== this)
        throw new Error("It is illegal to free an event not managed by this EventBoundary!"); var e = t.constructor; this.eventPool.has(e) || this.eventPool.set(e, []), this.eventPool.get(e).push(t); };
    Wo.prototype.notifyListeners = function (t, e) { var s = t.currentTarget._events[e]; if (!!s)
        if ("fn" in s)
            s.fn.call(s.context, t);
        else
            for (var r = 0, n = s.length; r < n && !t.propagationImmediatelyStopped; r++)
                s[r].fn.call(s[r].context, t); };
    return Wo;
}());
var af = 1, hf = { touchstart: "pointerdown", touchend: "pointerup", touchendoutside: "pointerupoutside", touchmove: "pointermove", touchcancel: "pointercancel" };
var Xr = /** @class */ (function () {
    function Xr(t) {
        this.supportsTouchEvents = "ontouchstart" in globalThis, this.supportsPointerEvents = !!globalThis.PointerEvent, this.domElement = null, this.resolution = 1, this.renderer = t, this.rootBoundary = new Wo(null), this.autoPreventDefault = !0, this.eventsAdded = !1, this.rootPointerEvent = new Rt(null), this.rootWheelEvent = new Qi(null), this.cursorStyles = { default: "inherit", pointer: "pointer" }, this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onPointerOverOut = this.onPointerOverOut.bind(this), this.onWheel = this.onWheel.bind(this);
    }
    Xr.prototype.init = function () { var _b = this.renderer, t = _b.view, e = _b.resolution; this.setTargetElement(t), this.resolution = e; };
    Xr.prototype.resolutionChange = function (t) { this.resolution = t; };
    Xr.prototype.destroy = function () { this.setTargetElement(null), this.renderer = null; };
    Xr.prototype.setCursor = function (t) { t = t || "default"; var e = !0; if (globalThis.OffscreenCanvas && this.domElement instanceof OffscreenCanvas && (e = !1), this.currentCursor === t)
        return; this.currentCursor = t; var s = this.cursorStyles[t]; if (s)
        switch (typeof s) {
            case "string":
                e && (this.domElement.style.cursor = s);
                break;
            case "function":
                s(t);
                break;
            case "object":
                e && Object.assign(this.domElement.style, s);
                break;
        }
    else
        e && typeof t == "string" && !Object.prototype.hasOwnProperty.call(this.cursorStyles, t) && (this.domElement.style.cursor = t); };
    Xr.prototype.onPointerDown = function (t) { if (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.supportsTouchEvents && t.pointerType === "touch")
        return; var e = this.normalizeToPointerData(t); this.autoPreventDefault && e[0].isNormalized && (t.cancelable || !("cancelable" in t)) && t.preventDefault(); for (var s = 0, r = e.length; s < r; s++) {
        var n = e[s], o = this.bootstrapEvent(this.rootPointerEvent, n);
        this.rootBoundary.mapEvent(o);
    } this.setCursor(this.rootBoundary.cursor); };
    Xr.prototype.onPointerMove = function (t) { if (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.supportsTouchEvents && t.pointerType === "touch")
        return; var e = this.normalizeToPointerData(t); for (var s = 0, r = e.length; s < r; s++) {
        var n = this.bootstrapEvent(this.rootPointerEvent, e[s]);
        this.rootBoundary.mapEvent(n);
    } this.setCursor(this.rootBoundary.cursor); };
    Xr.prototype.onPointerUp = function (t) { if (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.supportsTouchEvents && t.pointerType === "touch")
        return; var e = t.target; t.composedPath && t.composedPath().length > 0 && (e = t.composedPath()[0]); var s = e !== this.domElement ? "outside" : "", r = this.normalizeToPointerData(t); for (var n = 0, o = r.length; n < o; n++) {
        var a = this.bootstrapEvent(this.rootPointerEvent, r[n]);
        a.type += s, this.rootBoundary.mapEvent(a);
    } this.setCursor(this.rootBoundary.cursor); };
    Xr.prototype.onPointerOverOut = function (t) { if (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.supportsTouchEvents && t.pointerType === "touch")
        return; var e = this.normalizeToPointerData(t); for (var s = 0, r = e.length; s < r; s++) {
        var n = this.bootstrapEvent(this.rootPointerEvent, e[s]);
        this.rootBoundary.mapEvent(n);
    } this.setCursor(this.rootBoundary.cursor); };
    Xr.prototype.onWheel = function (t) { var e = this.normalizeWheelEvent(t); this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.rootBoundary.mapEvent(e); };
    Xr.prototype.setTargetElement = function (t) { this.removeEvents(), this.domElement = t, this.addEvents(); };
    Xr.prototype.addEvents = function () { if (this.eventsAdded || !this.domElement)
        return; var t = this.domElement.style; t && (globalThis.navigator.msPointerEnabled ? (t.msContentZooming = "none", t.msTouchAction = "none") : this.supportsPointerEvents && (t.touchAction = "none")), this.supportsPointerEvents ? (globalThis.document.addEventListener("pointermove", this.onPointerMove, !0), this.domElement.addEventListener("pointerdown", this.onPointerDown, !0), this.domElement.addEventListener("pointerleave", this.onPointerOverOut, !0), this.domElement.addEventListener("pointerover", this.onPointerOverOut, !0), globalThis.addEventListener("pointerup", this.onPointerUp, !0)) : (globalThis.document.addEventListener("mousemove", this.onPointerMove, !0), this.domElement.addEventListener("mousedown", this.onPointerDown, !0), this.domElement.addEventListener("mouseout", this.onPointerOverOut, !0), this.domElement.addEventListener("mouseover", this.onPointerOverOut, !0), globalThis.addEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.domElement.addEventListener("touchstart", this.onPointerDown, !0), this.domElement.addEventListener("touchend", this.onPointerUp, !0), this.domElement.addEventListener("touchmove", this.onPointerMove, !0)), this.domElement.addEventListener("wheel", this.onWheel, { passive: !0, capture: !0 }), this.eventsAdded = !0; };
    Xr.prototype.removeEvents = function () { if (!this.eventsAdded || !this.domElement)
        return; var t = this.domElement.style; globalThis.navigator.msPointerEnabled ? (t.msContentZooming = "", t.msTouchAction = "") : this.supportsPointerEvents && (t.touchAction = ""), this.supportsPointerEvents ? (globalThis.document.removeEventListener("pointermove", this.onPointerMove, !0), this.domElement.removeEventListener("pointerdown", this.onPointerDown, !0), this.domElement.removeEventListener("pointerleave", this.onPointerOverOut, !0), this.domElement.removeEventListener("pointerover", this.onPointerOverOut, !0), globalThis.removeEventListener("pointerup", this.onPointerUp, !0)) : (globalThis.document.removeEventListener("mousemove", this.onPointerMove, !0), this.domElement.removeEventListener("mousedown", this.onPointerDown, !0), this.domElement.removeEventListener("mouseout", this.onPointerOverOut, !0), this.domElement.removeEventListener("mouseover", this.onPointerOverOut, !0), globalThis.removeEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.domElement.removeEventListener("touchstart", this.onPointerDown, !0), this.domElement.removeEventListener("touchend", this.onPointerUp, !0), this.domElement.removeEventListener("touchmove", this.onPointerMove, !0)), this.domElement.removeEventListener("wheel", this.onWheel, !0), this.domElement = null, this.eventsAdded = !1; };
    Xr.prototype.mapPositionToPoint = function (t, e, s) { var r; this.domElement.parentElement ? r = this.domElement.getBoundingClientRect() : r = { x: 0, y: 0, width: this.domElement.width, height: this.domElement.height, left: 0, top: 0 }; var n = 1 / this.resolution; t.x = (e - r.left) * (this.domElement.width / r.width) * n, t.y = (s - r.top) * (this.domElement.height / r.height) * n; };
    Xr.prototype.normalizeToPointerData = function (t) { var e = []; if (this.supportsTouchEvents && t instanceof TouchEvent)
        for (var s = 0, r = t.changedTouches.length; s < r; s++) {
            var n = t.changedTouches[s];
            typeof n.button == "undefined" && (n.button = 0), typeof n.buttons == "undefined" && (n.buttons = 1), typeof n.isPrimary == "undefined" && (n.isPrimary = t.touches.length === 1 && t.type === "touchstart"), typeof n.width == "undefined" && (n.width = n.radiusX || 1), typeof n.height == "undefined" && (n.height = n.radiusY || 1), typeof n.tiltX == "undefined" && (n.tiltX = 0), typeof n.tiltY == "undefined" && (n.tiltY = 0), typeof n.pointerType == "undefined" && (n.pointerType = "touch"), typeof n.pointerId == "undefined" && (n.pointerId = n.identifier || 0), typeof n.pressure == "undefined" && (n.pressure = n.force || .5), typeof n.twist == "undefined" && (n.twist = 0), typeof n.tangentialPressure == "undefined" && (n.tangentialPressure = 0), typeof n.layerX == "undefined" && (n.layerX = n.offsetX = n.clientX), typeof n.layerY == "undefined" && (n.layerY = n.offsetY = n.clientY), n.isNormalized = !0, n.type = t.type, e.push(n);
        }
    else if (!globalThis.MouseEvent || t instanceof MouseEvent && (!this.supportsPointerEvents || !(t instanceof globalThis.PointerEvent))) {
        var s = t;
        typeof s.isPrimary == "undefined" && (s.isPrimary = !0), typeof s.width == "undefined" && (s.width = 1), typeof s.height == "undefined" && (s.height = 1), typeof s.tiltX == "undefined" && (s.tiltX = 0), typeof s.tiltY == "undefined" && (s.tiltY = 0), typeof s.pointerType == "undefined" && (s.pointerType = "mouse"), typeof s.pointerId == "undefined" && (s.pointerId = af), typeof s.pressure == "undefined" && (s.pressure = .5), typeof s.twist == "undefined" && (s.twist = 0), typeof s.tangentialPressure == "undefined" && (s.tangentialPressure = 0), s.isNormalized = !0, e.push(s);
    }
    else
        e.push(t); return e; };
    Xr.prototype.normalizeWheelEvent = function (t) { var e = this.rootWheelEvent; return this.transferMouseData(e, t), e.deltaMode = t.deltaMode, e.deltaX = t.deltaX, e.deltaY = t.deltaY, e.deltaZ = t.deltaZ, this.mapPositionToPoint(e.screen, t.clientX, t.clientY), e.global.copyFrom(e.screen), e.offset.copyFrom(e.screen), e.nativeEvent = t, e.type = t.type, e; };
    Xr.prototype.bootstrapEvent = function (t, e) { return t.originalEvent = null, t.nativeEvent = e, t.pointerId = e.pointerId, t.width = e.width, t.height = e.height, t.isPrimary = e.isPrimary, t.pointerType = e.pointerType, t.pressure = e.pressure, t.tangentialPressure = e.tangentialPressure, t.tiltX = e.tiltX, t.tiltY = e.tiltY, t.twist = e.twist, this.transferMouseData(t, e), this.mapPositionToPoint(t.screen, e.clientX, e.clientY), t.global.copyFrom(t.screen), t.offset.copyFrom(t.screen), t.isTrusted = e.isTrusted, t.type === "pointerleave" && (t.type = "pointerout"), t.type.startsWith("mouse") && (t.type = t.type.replace("mouse", "pointer")), t.type.startsWith("touch") && (t.type = hf[t.type] || t.type), t; };
    Xr.prototype.transferMouseData = function (t, e) { t.isTrusted = e.isTrusted, t.srcElement = e.srcElement, t.timeStamp = performance.now(), t.type = e.type, t.altKey = e.altKey, t.button = e.button, t.buttons = e.buttons, t.client.x = e.clientX, t.client.y = e.clientY, t.ctrlKey = e.ctrlKey, t.metaKey = e.metaKey, t.movement.x = e.movementX, t.movement.y = e.movementY, t.page.x = e.pageX, t.page.y = e.pageY, t.relatedTarget = null, t.shiftKey = e.shiftKey; };
    return Xr;
}());
Xr.extension = { name: "events", type: [P.RendererSystem, P.CanvasRendererSystem] }, U.add(Xr);
var jo = { interactive: !1, interactiveChildren: !0, hitArea: null, addEventListener: function (i, t, e) { var s = typeof e == "boolean" && e || typeof e == "object" && e.capture, r = typeof t == "function" ? void 0 : t; i = s ? "".concat(i, "capture") : i, t = typeof t == "function" ? t : t.handleEvent, this.on(i, t, r); }, removeEventListener: function (i, t, e) { var s = typeof e == "boolean" && e || typeof e == "object" && e.capture, r = typeof t == "function" ? void 0 : t; i = s ? "".concat(i, "capture") : i, t = typeof t == "function" ? t : t.handleEvent, this.off(i, t, r); }, dispatchEvent: function (i) { if (!(i instanceof Ge))
        throw new Error("DisplayObject cannot propagate events outside of the Federated Events API"); return i.defaultPrevented = !1, i.path = null, i.target = this, i.manager.dispatchEvent(i), !i.defaultPrevented; } };
et.mixin(jo), et.mixin(zo);
var lf = 9, Ji = 100, cf = 0, uf = 0, Yo = 2, $o = 1, df = -1e3, ff = -1e3, pf = 2;
var Vr = /** @class */ (function () {
    function Vr(t) {
        this.debug = !1, this._isActive = !1, this._isMobileAccessibility = !1, this.pool = [], this.renderId = 0, this.children = [], this.androidUpdateCount = 0, this.androidUpdateFrequency = 500, this._hookDiv = null, (Nt.tablet || Nt.phone) && this.createTouchHook();
        var e = document.createElement("div");
        e.style.width = "".concat(Ji, "px"), e.style.height = "".concat(Ji, "px"), e.style.position = "absolute", e.style.top = "".concat(cf, "px"), e.style.left = "".concat(uf, "px"), e.style.zIndex = Yo.toString(), this.div = e, this.renderer = t, this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), globalThis.addEventListener("keydown", this._onKeyDown, !1);
    }
    Object.defineProperty(Vr.prototype, "isActive", {
        get: function () { return this._isActive; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vr.prototype, "isMobileAccessibility", {
        get: function () { return this._isMobileAccessibility; },
        enumerable: false,
        configurable: true
    });
    Vr.prototype.createTouchHook = function () {
        var _this = this;
        var t = document.createElement("button");
        t.style.width = "".concat($o, "px"), t.style.height = "".concat($o, "px"), t.style.position = "absolute", t.style.top = "".concat(df, "px"), t.style.left = "".concat(ff, "px"), t.style.zIndex = pf.toString(), t.style.backgroundColor = "#FF0000", t.title = "select to enable accessibility for this content", t.addEventListener("focus", function () { _this._isMobileAccessibility = !0, _this.activate(), _this.destroyTouchHook(); }), document.body.appendChild(t), this._hookDiv = t;
    };
    Vr.prototype.destroyTouchHook = function () { !this._hookDiv || (document.body.removeChild(this._hookDiv), this._hookDiv = null); };
    Vr.prototype.activate = function () { var t; this._isActive || (this._isActive = !0, globalThis.document.addEventListener("mousemove", this._onMouseMove, !0), globalThis.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), (t = this.renderer.view.parentNode) == null || t.appendChild(this.div)); };
    Vr.prototype.deactivate = function () { var t; !this._isActive || this._isMobileAccessibility || (this._isActive = !1, globalThis.document.removeEventListener("mousemove", this._onMouseMove, !0), globalThis.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), (t = this.div.parentNode) == null || t.removeChild(this.div)); };
    Vr.prototype.updateAccessibleObjects = function (t) { if (!t.visible || !t.accessibleChildren)
        return; t.accessible && t.interactive && (t._accessibleActive || this.addChild(t), t.renderId = this.renderId); var e = t.children; if (e)
        for (var s = 0; s < e.length; s++)
            this.updateAccessibleObjects(e[s]); };
    Vr.prototype.update = function () { var t = performance.now(); if (Nt.android.device && t < this.androidUpdateCount || (this.androidUpdateCount = t + this.androidUpdateFrequency, !this.renderer.renderingToScreen))
        return; this.renderer.lastObjectRendered && this.updateAccessibleObjects(this.renderer.lastObjectRendered); var _b = this.renderer.view.getBoundingClientRect(), e = _b.x, s = _b.y, r = _b.width, n = _b.height, _g = this.renderer, o = _g.width, a = _g.height, h = _g.resolution, l = r / o * h, c = n / a * h; var u = this.div; u.style.left = "".concat(e, "px"), u.style.top = "".concat(s, "px"), u.style.width = "".concat(o, "px"), u.style.height = "".concat(a, "px"); for (var d = 0; d < this.children.length; d++) {
        var f = this.children[d];
        if (f.renderId !== this.renderId)
            f._accessibleActive = !1, ge(this.children, d, 1), this.div.removeChild(f._accessibleDiv), this.pool.push(f._accessibleDiv), f._accessibleDiv = null, d--;
        else {
            u = f._accessibleDiv;
            var p = f.hitArea;
            var m = f.worldTransform;
            f.hitArea ? (u.style.left = "".concat((m.tx + p.x * m.a) * l, "px"), u.style.top = "".concat((m.ty + p.y * m.d) * c, "px"), u.style.width = "".concat(p.width * m.a * l, "px"), u.style.height = "".concat(p.height * m.d * c, "px")) : (p = f.getBounds(), this.capHitArea(p), u.style.left = "".concat(p.x * l, "px"), u.style.top = "".concat(p.y * c, "px"), u.style.width = "".concat(p.width * l, "px"), u.style.height = "".concat(p.height * c, "px"), u.title !== f.accessibleTitle && f.accessibleTitle !== null && (u.title = f.accessibleTitle), u.getAttribute("aria-label") !== f.accessibleHint && f.accessibleHint !== null && u.setAttribute("aria-label", f.accessibleHint)), (f.accessibleTitle !== u.title || f.tabIndex !== u.tabIndex) && (u.title = f.accessibleTitle, u.tabIndex = f.tabIndex, this.debug && this.updateDebugHTML(u));
        }
    } this.renderId++; };
    Vr.prototype.updateDebugHTML = function (t) { t.innerHTML = "type: ".concat(t.type, "</br> title : ").concat(t.title, "</br> tabIndex: ").concat(t.tabIndex); };
    Vr.prototype.capHitArea = function (t) { t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0); var _b = this.renderer, e = _b.width, s = _b.height; t.x + t.width > e && (t.width = e - t.x), t.y + t.height > s && (t.height = s - t.y); };
    Vr.prototype.addChild = function (t) { var e = this.pool.pop(); e || (e = document.createElement("button"), e.style.width = "".concat(Ji, "px"), e.style.height = "".concat(Ji, "px"), e.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent", e.style.position = "absolute", e.style.zIndex = Yo.toString(), e.style.borderStyle = "none", navigator.userAgent.toLowerCase().includes("chrome") ? e.setAttribute("aria-live", "off") : e.setAttribute("aria-live", "polite"), navigator.userAgent.match(/rv:.*Gecko\//) ? e.setAttribute("aria-relevant", "additions") : e.setAttribute("aria-relevant", "text"), e.addEventListener("click", this._onClick.bind(this)), e.addEventListener("focus", this._onFocus.bind(this)), e.addEventListener("focusout", this._onFocusOut.bind(this))), e.style.pointerEvents = t.accessiblePointerEvents, e.type = t.accessibleType, t.accessibleTitle && t.accessibleTitle !== null ? e.title = t.accessibleTitle : (!t.accessibleHint || t.accessibleHint === null) && (e.title = "displayObject ".concat(t.tabIndex)), t.accessibleHint && t.accessibleHint !== null && e.setAttribute("aria-label", t.accessibleHint), this.debug && this.updateDebugHTML(e), t._accessibleActive = !0, t._accessibleDiv = e, e.displayObject = t, this.children.push(t), this.div.appendChild(t._accessibleDiv), t._accessibleDiv.tabIndex = t.tabIndex; };
    Vr.prototype._dispatchEvent = function (t, e) { var s = t.target.displayObject, r = this.renderer.events.rootBoundary, n = Object.assign(new Ge(r), { target: s }); r.rootTarget = this.renderer.lastObjectRendered, e.forEach(function (o) { return r.dispatchEvent(n, o); }); };
    Vr.prototype._onClick = function (t) { this._dispatchEvent(t, ["click", "pointertap", "tap"]); };
    Vr.prototype._onFocus = function (t) { t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "assertive"), this._dispatchEvent(t, ["mouseover"]); };
    Vr.prototype._onFocusOut = function (t) { t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "polite"), this._dispatchEvent(t, ["mouseout"]); };
    Vr.prototype._onKeyDown = function (t) { t.keyCode === lf && this.activate(); };
    Vr.prototype._onMouseMove = function (t) { t.movementX === 0 && t.movementY === 0 || this.deactivate(); };
    Vr.prototype.destroy = function () { this.destroyTouchHook(), this.div = null, globalThis.document.removeEventListener("mousemove", this._onMouseMove, !0), globalThis.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null; };
    return Vr;
}());
Vr.extension = { name: "accessibility", type: [P.RendererPlugin, P.CanvasRendererPlugin] }, U.add(Vr);
var zr = /** @class */ (function () {
    function zr(i) {
        var _this = this;
        this.stage = new wt, i = Object.assign({ forceCanvas: !1 }, i), this.renderer = ko(i), zr._plugins.forEach(function (t) { t.init.call(_this, i); });
    }
    zr.prototype.render = function () { this.renderer.render(this.stage); };
    Object.defineProperty(zr.prototype, "view", {
        get: function () { return this.renderer.view; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(zr.prototype, "screen", {
        get: function () { return this.renderer.screen; },
        enumerable: false,
        configurable: true
    });
    zr.prototype.destroy = function (i, t) {
        var _this = this;
        var e = zr._plugins.slice(0);
        e.reverse(), e.forEach(function (s) { s.destroy.call(_this); }), this.stage.destroy(t), this.stage = null, this.renderer.destroy(i), this.renderer = null;
    };
    return zr;
}());
var Wr = zr;
Wr._plugins = [], U.handleByList(P.Application, Wr._plugins);
var jr = /** @class */ (function () {
    function jr() {
    }
    jr.init = function (t) {
        var _this = this;
        Object.defineProperty(this, "resizeTo", { set: function (e) { globalThis.removeEventListener("resize", this.queueResize), this._resizeTo = e, e && (globalThis.addEventListener("resize", this.queueResize), this.resize()); }, get: function () { return this._resizeTo; } }), this.queueResize = function () { !_this._resizeTo || (_this.cancelResize(), _this._resizeId = requestAnimationFrame(function () { return _this.resize(); })); }, this.cancelResize = function () { _this._resizeId && (cancelAnimationFrame(_this._resizeId), _this._resizeId = null); }, this.resize = function () { if (!_this._resizeTo)
            return; _this.cancelResize(); var e, s; if (_this._resizeTo === globalThis.window)
            e = globalThis.innerWidth, s = globalThis.innerHeight;
        else {
            var _b = _this._resizeTo, r = _b.clientWidth, n = _b.clientHeight;
            e = r, s = n;
        } _this.renderer.resize(e, s), _this.render(); }, this._resizeId = null, this._resizeTo = null, this.resizeTo = t.resizeTo || null;
    };
    jr.destroy = function () { globalThis.removeEventListener("resize", this.queueResize), this.cancelResize(), this.cancelResize = null, this.queueResize = null, this.resizeTo = null, this.resize = null; };
    return jr;
}());
jr.extension = P.Application, U.add(jr);
var mf = /** @class */ (function () {
    function mf(t, e) {
        if (e === void 0) { e = !1; }
        this._loader = t, this._assetList = [], this._isLoading = !1, this._maxConcurrent = 1, this.verbose = e;
    }
    mf.prototype.add = function (t) {
        var _this = this;
        t.forEach(function (e) { _this._assetList.push(e); }), this.verbose && console.log("[BackgroundLoader] assets: ", this._assetList), this._isActive && !this._isLoading && this._next();
    };
    mf.prototype._next = function () {
        return __awaiter(this, void 0, void 0, function () { var t, e, s; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(this._assetList.length && this._isActive)) return [3 /*break*/, 2];
                    this._isLoading = !0;
                    t = [], e = Math.min(this._assetList.length, this._maxConcurrent);
                    for (s = 0; s < e; s++)
                        t.push(this._assetList.pop());
                    return [4 /*yield*/, this._loader.load(t)];
                case 1:
                    _b.sent(), this._isLoading = !1, this._next();
                    _b.label = 2;
                case 2: return [2 /*return*/];
            }
        }); });
    };
    Object.defineProperty(mf.prototype, "active", {
        get: function () { return this._isActive; },
        set: function (t) { this._isActive !== t && (this._isActive = t, t && !this._isLoading && this._next()); },
        enumerable: false,
        configurable: true
    });
    return mf;
}());
function Yr(i, t) { if (Array.isArray(t)) {
    for (var _b = 0, t_1 = t; _b < t_1.length; _b++) {
        var e = t_1[_b];
        if (i.startsWith("data:".concat(e)))
            return !0;
    }
    return !1;
} return i.startsWith("data:".concat(t)); }
function ni(i, t) { var e = i.split("?")[0], s = ft.extname(e).toLowerCase(); return Array.isArray(t) ? t.includes(s.toLowerCase()) : s.toLowerCase() === t; }
var jt = function (i, t) { return (Array.isArray(i) || (i = [i]), t ? i.map(function (e) { return typeof e == "string" ? t(e) : e; }) : i); };
function qo(i, t, e, s, r) { var n = t[e]; for (var o = 0; o < n.length; o++) {
    var a = n[o];
    e < t.length - 1 ? qo(i.replace(s[e], a), t, e + 1, s, r) : r.push(i.replace(s[e], a));
} }
function Ko(i) { var t = /\{(.*?)\}/g, e = i.match(t), s = []; if (e) {
    var r_1 = [];
    e.forEach(function (n) { var o = n.substring(1, n.length - 1).split(","); r_1.push(o); }), qo(i, r_1, 0, e, s);
}
else
    s.push(i); return s; }
var oi = function (i) { return !Array.isArray(i); };
var _f = /** @class */ (function () {
    function _f() {
        this._parsers = [], this._cache = new Map, this._cacheMap = new Map;
    }
    _f.prototype.reset = function () { this._cacheMap.clear(), this._cache.clear(); };
    _f.prototype.has = function (t) { return this._cache.has(t); };
    _f.prototype.get = function (t) { var e = this._cache.get(t); return e || console.warn("[Assets] Asset id ".concat(t, " was not found in the Cache")), e; };
    _f.prototype.set = function (t, e) {
        var _this = this;
        var s = jt(t);
        var r;
        for (var a = 0; a < this.parsers.length; a++) {
            var h = this.parsers[a];
            if (h.test(e)) {
                r = h.getCacheableAssets(s, e);
                break;
            }
        }
        r || (r = {}, s.forEach(function (a) { r[a] = e; }));
        var n = Object.keys(r), o = { cacheKeys: n, keys: s };
        if (s.forEach(function (a) { _this._cacheMap.set(a, o); }), n.forEach(function (a) { _this._cache.has(a) && _this._cache.get(a) !== e && console.warn("[Cache] already has key:", a), _this._cache.set(a, r[a]); }), e instanceof B) {
            var a_1 = e;
            s.forEach(function (h) { a_1.baseTexture !== B.EMPTY.baseTexture && W.addToCache(a_1.baseTexture, h), B.addToCache(a_1, h); });
        }
    };
    _f.prototype.remove = function (t) {
        var _this = this;
        if (this._cacheMap.get(t), !this._cacheMap.has(t)) {
            console.warn("[Assets] Asset id ".concat(t, " was not found in the Cache"));
            return;
        }
        var e = this._cacheMap.get(t);
        e.cacheKeys.forEach(function (r) { _this._cache.delete(r); }), e.keys.forEach(function (r) { _this._cacheMap.delete(r); });
    };
    Object.defineProperty(_f.prototype, "parsers", {
        get: function () { return this._parsers; },
        enumerable: false,
        configurable: true
    });
    return _f;
}());
var Fe = new _f;
var gf = /** @class */ (function () {
    function gf() {
        this._parsers = [], this.promiseCache = {};
    }
    gf.prototype.reset = function () { this.promiseCache = {}; };
    gf.prototype._getLoadPromiseAndParser = function (t, e) {
        var _this = this;
        var s = { promise: null, parser: null };
        return s.promise = (function () { return __awaiter(_this, void 0, void 0, function () { var n, o, r, a, h, a, h, _b, _g; return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    r = null;
                    a = 0;
                    _j.label = 1;
                case 1:
                    if (!(a < this.parsers.length)) return [3 /*break*/, 4];
                    h = this.parsers[a];
                    if (!(h.load && ((n = h.test) == null ? void 0 : n.call(h, t, e, this)))) return [3 /*break*/, 3];
                    return [4 /*yield*/, h.load(t, e, this)];
                case 2:
                    r = _j.sent(), s.parser = h;
                    return [3 /*break*/, 4];
                case 3:
                    a++;
                    return [3 /*break*/, 1];
                case 4:
                    if (!s.parser)
                        return [2 /*return*/, (console.warn("[Assets] ".concat(t, " could not be loaded as we don't know how to parse it, ensure the correct parser has being added")), null)];
                    a = 0;
                    _j.label = 5;
                case 5:
                    if (!(a < this.parsers.length)) return [3 /*break*/, 11];
                    h = this.parsers[a];
                    _g = h.parse && h.parse;
                    if (!_g) return [3 /*break*/, 7];
                    return [4 /*yield*/, ((o = h.testParse) == null ? void 0 : o.call(h, r, e, this))];
                case 6:
                    _g = (_j.sent());
                    _j.label = 7;
                case 7:
                    _b = _g;
                    if (!_b) return [3 /*break*/, 9];
                    return [4 /*yield*/, h.parse(r, e, this)];
                case 8:
                    _b = (r = (_j.sent()) || r, s.parser = h);
                    _j.label = 9;
                case 9:
                    _b;
                    _j.label = 10;
                case 10:
                    a++;
                    return [3 /*break*/, 5];
                case 11: return [2 /*return*/, r];
            }
        }); }); })(), s;
    };
    gf.prototype.load = function (t, e) {
        return __awaiter(this, void 0, void 0, function () {
            var s, r, n, o, a, h;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        s = 0;
                        r = {}, n = oi(t), o = jt(t, function (l) { return ({ src: l }); }), a = o.length, h = o.map(function (l) { return __awaiter(_this, void 0, void 0, function () {
                            var c, _b, _g, u_1;
                            return __generator(this, function (_j) {
                                switch (_j.label) {
                                    case 0:
                                        c = ft.toAbsolute(l.src);
                                        if (!!r[l.src]) return [3 /*break*/, 4];
                                        _j.label = 1;
                                    case 1:
                                        _j.trys.push([1, 3, , 4]);
                                        this.promiseCache[c] || (this.promiseCache[c] = this._getLoadPromiseAndParser(c, l));
                                        _b = r;
                                        _g = l.src;
                                        return [4 /*yield*/, this.promiseCache[c].promise];
                                    case 2:
                                        _b[_g] = _j.sent(), e && e(++s / a);
                                        return [3 /*break*/, 4];
                                    case 3:
                                        u_1 = _j.sent();
                                        throw delete this.promiseCache[c], delete r[l.src], new Error("[Loader.load] Failed to load ".concat(c, ".\n").concat(u_1));
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, Promise.all(h)];
                    case 1: return [2 /*return*/, (_b.sent(), n ? r[o[0].src] : r)];
                }
            });
        });
    };
    gf.prototype.unload = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var s;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        s = jt(t, function (r) { return ({ src: r }); }).map(function (r) { return __awaiter(_this, void 0, void 0, function () { var a, h, n, o, l; return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    n = ft.toAbsolute(r.src), o = this.promiseCache[n];
                                    if (!o) return [3 /*break*/, 2];
                                    return [4 /*yield*/, o.promise];
                                case 1:
                                    l = _b.sent();
                                    (h = (a = o.parser) == null ? void 0 : a.unload) == null || h.call(a, l, r, this), delete this.promiseCache[n];
                                    _b.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        }); }); });
                        return [4 /*yield*/, Promise.all(s)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(gf.prototype, "parsers", {
        get: function () { return this._parsers; },
        enumerable: false,
        configurable: true
    });
    return gf;
}());
var xf = /** @class */ (function () {
    function xf() {
        this._assetMap = {}, this._preferredOrder = [], this._parsers = [], this._resolverHash = {}, this._bundles = {};
    }
    xf.prototype.prefer = function () {
        var _this = this;
        var t = [];
        for (var _b = 0; _b < arguments.length; _b++) {
            t[_b] = arguments[_b];
        }
        t.forEach(function (e) { _this._preferredOrder.push(e), e.priority || (e.priority = Object.keys(e.params)); }), this._resolverHash = {};
    };
    Object.defineProperty(xf.prototype, "basePath", {
        get: function () { return this._basePath; },
        set: function (t) { this._basePath = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(xf.prototype, "rootPath", {
        get: function () { return this._rootPath; },
        set: function (t) { this._rootPath = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(xf.prototype, "parsers", {
        get: function () { return this._parsers; },
        enumerable: false,
        configurable: true
    });
    xf.prototype.reset = function () { this._preferredOrder = [], this._resolverHash = {}, this._assetMap = {}, this._rootPath = null, this._basePath = null, this._manifest = null; };
    xf.prototype.addManifest = function (t) {
        var _this = this;
        this._manifest && console.warn("[Resolver] Manifest already exists, this will be overwritten"), this._manifest = t, t.bundles.forEach(function (e) { _this.addBundle(e.name, e.assets); });
    };
    xf.prototype.addBundle = function (t, e) {
        var _this = this;
        var s = [];
        Array.isArray(e) ? e.forEach(function (r) { typeof r.name == "string" ? s.push(r.name) : s.push.apply(s, r.name), _this.add(r.name, r.srcs); }) : Object.keys(e).forEach(function (r) { s.push(r), _this.add(r, e[r]); }), this._bundles[t] = s;
    };
    xf.prototype.add = function (t, e, s) {
        var _this = this;
        var r = jt(t);
        r.forEach(function (o) { _this._assetMap[o] && console.warn("[Resolver] already has key: ".concat(o, " overwriting")); }), Array.isArray(e) || (typeof e == "string" ? e = Ko(e) : e = [e]);
        var n = e.map(function (o) { var h; var a = o; if (typeof o == "string") {
            var l = !1;
            for (var c = 0; c < _this._parsers.length; c++) {
                var u = _this._parsers[c];
                if (u.test(o)) {
                    a = u.parse(o), l = !0;
                    break;
                }
            }
            l || (a = { src: o });
        } return a.format || (a.format = a.src.split(".").pop()), a.alias || (a.alias = r), (_this._basePath || _this._rootPath) && (a.src = ft.toAbsolute(a.src, _this._basePath, _this._rootPath)), a.data = (h = a.data) != null ? h : s, a; });
        r.forEach(function (o) { _this._assetMap[o] = n; });
    };
    xf.prototype.resolveBundle = function (t) {
        var _this = this;
        var e = oi(t);
        t = jt(t);
        var s = {};
        return t.forEach(function (r) { var n = _this._bundles[r]; n && (s[r] = _this.resolve(n)); }), e ? s[t[0]] : s;
    };
    xf.prototype.resolveUrl = function (t) { var e = this.resolve(t); if (typeof t != "string") {
        var s = {};
        for (var r in e)
            s[r] = e[r].src;
        return s;
    } return e.src; };
    xf.prototype.resolve = function (t) {
        var _this = this;
        var e = oi(t);
        t = jt(t);
        var s = {};
        return t.forEach(function (r) { var n; if (!_this._resolverHash[r])
            if (_this._assetMap[r]) {
                var o_1 = _this._assetMap[r];
                var a_2 = _this._getPreferredOrder(o_1), h = o_1[0];
                a_2 == null || a_2.priority.forEach(function (l) { a_2.params[l].forEach(function (c) { var u = o_1.filter(function (d) { return d[l] ? d[l] === c : !1; }); u.length && (o_1 = u); }); }), _this._resolverHash[r] = (n = o_1[0]) != null ? n : h;
            }
            else {
                var o = r;
                (_this._basePath || _this._rootPath) && (o = ft.toAbsolute(o, _this._basePath, _this._rootPath)), _this._resolverHash[r] = { src: o };
            } s[r] = _this._resolverHash[r]; }), e ? s[t[0]] : s;
    };
    xf.prototype._getPreferredOrder = function (t) { var _loop_1 = function (e) {
        var s = t[0], r = this_1._preferredOrder.find(function (n) { return n.params.format.includes(s.format); });
        if (r)
            return { value: r };
    }; var this_1 = this; for (var e = 0; e < t.length; e++) {
        var state_1 = _loop_1(e);
        if (typeof state_1 === "object")
            return state_1.value;
    } return this._preferredOrder[0]; };
    return xf;
}());
var Zo = /** @class */ (function () {
    function Zo() {
        this._detections = [], this._initialized = !1, this.resolver = new xf, this.loader = new gf, this.cache = Fe, this._backgroundLoader = new mf(this.loader), this._backgroundLoader.active = !0, this.reset();
    }
    Zo.prototype.init = function (t) {
        if (t === void 0) { t = {}; }
        return __awaiter(this, void 0, void 0, function () { var n, o, a, h, l, _b, e, s, r, l, _g, _j, c, _k, _m, _q, l, _v; return __generator(this, function (_w) {
            switch (_w.label) {
                case 0:
                    if (this._initialized) {
                        console.warn("[Assets]AssetManager already initialized, did you load before calling this Asset.init()?");
                        return [2 /*return*/];
                    }
                    if (!(this._initialized = !0, t.basePath && (this.resolver.basePath = t.basePath), t.manifest)) return [3 /*break*/, 3];
                    l = t.manifest;
                    _b = typeof l == "string";
                    if (!_b) return [3 /*break*/, 2];
                    return [4 /*yield*/, this.load(l)];
                case 1:
                    _b = (l = _w.sent());
                    _w.label = 2;
                case 2:
                    _b, this.resolver.addManifest(l);
                    _w.label = 3;
                case 3:
                    e = (o = (n = t.texturePreference) == null ? void 0 : n.resolution) != null ? o : 1, s = typeof e == "number" ? [e] : e;
                    r = [];
                    if (!((a = t.texturePreference) != null && a.format)) return [3 /*break*/, 10];
                    l = (h = t.texturePreference) == null ? void 0 : h.format;
                    r = typeof l == "string" ? [l] : l;
                    _g = 0, _j = this._detections;
                    _w.label = 4;
                case 4:
                    if (!(_g < _j.length)) return [3 /*break*/, 9];
                    c = _j[_g];
                    return [4 /*yield*/, c.test()];
                case 5:
                    _k = (_w.sent());
                    if (_k) return [3 /*break*/, 7];
                    return [4 /*yield*/, c.remove(r)];
                case 6:
                    _k = (r = _w.sent());
                    _w.label = 7;
                case 7:
                    _k;
                    _w.label = 8;
                case 8:
                    _g++;
                    return [3 /*break*/, 4];
                case 9: return [3 /*break*/, 16];
                case 10:
                    _m = 0, _q = this._detections;
                    _w.label = 11;
                case 11:
                    if (!(_m < _q.length)) return [3 /*break*/, 16];
                    l = _q[_m];
                    return [4 /*yield*/, l.test()];
                case 12:
                    _v = (_w.sent());
                    if (!_v) return [3 /*break*/, 14];
                    return [4 /*yield*/, l.add(r)];
                case 13:
                    _v = (r = _w.sent());
                    _w.label = 14;
                case 14:
                    _v;
                    _w.label = 15;
                case 15:
                    _m++;
                    return [3 /*break*/, 11];
                case 16:
                    this.resolver.prefer({ params: { format: r, resolution: s } });
                    return [2 /*return*/];
            }
        }); });
    };
    Zo.prototype.add = function (t, e, s) { this.resolver.add(t, e, s); };
    Zo.prototype.load = function (t, e) {
        return __awaiter(this, void 0, void 0, function () {
            var _b, s, r, n, o;
            var _this = this;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _b = this._initialized;
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _b = (_g.sent());
                        _g.label = 2;
                    case 2:
                        _b;
                        s = oi(t), r = jt(t).map(function (a) { return typeof a != "string" ? (_this.resolver.add(a.src, a), a.src) : a; }), n = this.resolver.resolve(r);
                        return [4 /*yield*/, this._mapLoadToResolve(n, e)];
                    case 3:
                        o = _g.sent();
                        return [2 /*return*/, s ? o[r[0]] : o];
                }
            });
        });
    };
    Zo.prototype.addBundle = function (t, e) { this.resolver.addBundle(t, e); };
    Zo.prototype.loadBundle = function (t, e) {
        return __awaiter(this, void 0, void 0, function () {
            var _b, s, r, n, o, a, h, l, c;
            var _this = this;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _b = this._initialized;
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _b = (_g.sent());
                        _g.label = 2;
                    case 2:
                        _b;
                        s = !1;
                        typeof t == "string" && (s = !0, t = [t]);
                        r = this.resolver.resolveBundle(t), n = {}, o = Object.keys(r);
                        a = 0, h = 0;
                        l = function () { e == null || e(++a / h); }, c = o.map(function (u) { var d = r[u]; return h += Object.keys(d).length, _this._mapLoadToResolve(d, l).then(function (f) { n[u] = f; }); });
                        return [4 /*yield*/, Promise.all(c)];
                    case 3: return [2 /*return*/, (_g.sent(), s ? n[t[0]] : n)];
                }
            });
        });
    };
    Zo.prototype.backgroundLoad = function (t) {
        return __awaiter(this, void 0, void 0, function () { var _b, e; return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    _b = this._initialized;
                    if (_b) return [3 /*break*/, 2];
                    return [4 /*yield*/, this.init()];
                case 1:
                    _b = (_g.sent());
                    _g.label = 2;
                case 2:
                    _b, typeof t == "string" && (t = [t]);
                    e = this.resolver.resolve(t);
                    this._backgroundLoader.add(Object.values(e));
                    return [2 /*return*/];
            }
        }); });
    };
    Zo.prototype.backgroundLoadBundle = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var _b, e;
            var _this = this;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _b = this._initialized;
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _b = (_g.sent());
                        _g.label = 2;
                    case 2:
                        _b, typeof t == "string" && (t = [t]);
                        e = this.resolver.resolveBundle(t);
                        Object.values(e).forEach(function (s) { _this._backgroundLoader.add(Object.values(s)); });
                        return [2 /*return*/];
                }
            });
        });
    };
    Zo.prototype.reset = function () { this.resolver.reset(), this.loader.reset(), this.cache.reset(), this._initialized = !1; };
    Zo.prototype.get = function (t) { if (typeof t == "string")
        return Fe.get(t); var e = {}; for (var s = 0; s < t.length; s++)
        e[s] = Fe.get(t[s]); return e; };
    Zo.prototype._mapLoadToResolve = function (t, e) {
        return __awaiter(this, void 0, void 0, function () { var s, r, n, o; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    s = Object.values(t), r = Object.keys(t);
                    this._backgroundLoader.active = !1;
                    return [4 /*yield*/, this.loader.load(s, e)];
                case 1:
                    n = _b.sent();
                    this._backgroundLoader.active = !0;
                    o = {};
                    return [2 /*return*/, (s.forEach(function (a, h) { var l = n[a.src], c = [a.src]; a.alias && c.push.apply(c, a.alias), o[r[h]] = l, Fe.set(c, l); }), o)];
            }
        }); });
    };
    Zo.prototype.unload = function (t) {
        return __awaiter(this, void 0, void 0, function () { var _b, e, s; return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    _b = this._initialized;
                    if (_b) return [3 /*break*/, 2];
                    return [4 /*yield*/, this.init()];
                case 1:
                    _b = (_g.sent());
                    _g.label = 2;
                case 2:
                    _b;
                    e = jt(t).map(function (r) { return typeof r != "string" ? r.src : r; }), s = this.resolver.resolve(e);
                    return [4 /*yield*/, this._unloadFromResolved(s)];
                case 3:
                    _g.sent();
                    return [2 /*return*/];
            }
        }); });
    };
    Zo.prototype.unloadBundle = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var _b, e, s;
            var _this = this;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _b = this._initialized;
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _b = (_g.sent());
                        _g.label = 2;
                    case 2:
                        _b, t = jt(t);
                        e = this.resolver.resolveBundle(t), s = Object.keys(e).map(function (r) { return _this._unloadFromResolved(e[r]); });
                        return [4 /*yield*/, Promise.all(s)];
                    case 3:
                        _g.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Zo.prototype._unloadFromResolved = function (t) {
        return __awaiter(this, void 0, void 0, function () { var e; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    e = Object.values(t);
                    e.forEach(function (s) { Fe.remove(s.src); });
                    return [4 /*yield*/, this.loader.unload(e)];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        }); });
    };
    Object.defineProperty(Zo.prototype, "detections", {
        get: function () { return this._detections; },
        enumerable: false,
        configurable: true
    });
    return Zo;
}());
var ai = new Zo;
U.handleByList(P.LoadParser, ai.loader.parsers).handleByList(P.ResolveParser, ai.resolver.parsers).handleByList(P.CacheParser, ai.cache.parsers).handleByList(P.DetectionParser, ai.detections);
var Qo = { loader: P.LoadParser, resolver: P.ResolveParser, cache: P.CacheParser, detection: P.DetectionParser };
U.handle(P.Asset, function (i) { var t = i.ref; Object.entries(Qo).filter(function (_b) {
    var e = _b[0];
    return !!t[e];
}).forEach(function (_b) {
    var e = _b[0], s = _b[1];
    var r;
    return U.add(Object.assign(t[e], { extension: (r = t[e].extension) != null ? r : s }));
}); }, function (i) { var t = i.ref; Object.keys(Qo).filter(function (e) { return !!t[e]; }).forEach(function (e) { return U.remove(t[e]); }); });
var Jo = { extension: P.CacheParser, test: function (i) { return Array.isArray(i) && i.every(function (t) { return t instanceof B; }); }, getCacheableAssets: function (i, t) { var e = {}; return i.forEach(function (s) { t.forEach(function (r, n) { e[s + (n === 0 ? "" : n + 1)] = r; }); }), e; } };
U.add(Jo);
var Lt = (function (i) { return (i[i.Low = 0] = "Low", i[i.Normal = 1] = "Normal", i[i.High = 2] = "High", i); })(Lt || {});
var ta = { extension: { type: P.LoadParser, priority: Lt.Low }, test: function (i) { return ft.extname(i).includes(".json"); }, load: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, w.ADAPTER.fetch(i)];
                case 1: return [4 /*yield*/, (_b.sent()).json()];
                case 2: return [2 /*return*/, _b.sent()];
            }
        }); });
    } };
U.add(ta);
var ea = { extension: { type: P.LoadParser, priority: Lt.Low }, test: function (i) { return ft.extname(i).includes(".txt"); }, load: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, w.ADAPTER.fetch(i)];
                case 1: return [4 /*yield*/, (_b.sent()).text()];
                case 2: return [2 /*return*/, _b.sent()];
            }
        }); });
    } };
U.add(ea);
var vf = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"], yf = [".ttf", ".otf", ".woff", ".woff2"], bf = ["font/ttf", "font/otf", "font/woff", "font/woff2"];
function ia(i) { var t = ft.extname(i); return ft.basename(i, t).replace(/(-|_)/g, " ").toLowerCase().split(" ").map(function (n) { return n.charAt(0).toUpperCase() + n.slice(1); }).join(" "); }
var sa = { extension: { type: P.LoadParser, priority: Lt.Low }, test: function (i) { return Yr(i, bf) || ni(i, yf); }, load: function (i, t) {
        return __awaiter(this, void 0, void 0, function () { var s, r, n, o, a, h, e, l, c, u, d, f, p, m; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!globalThis.navigator.onLine)
                        throw new Error("[loadWebFont] Cannot load font - navigator is offline");
                    e = w.ADAPTER.getFontFaceSet();
                    if (!e) return [3 /*break*/, 5];
                    l = [], c = (r = (s = t.data) == null ? void 0 : s.family) != null ? r : ia(i), u = (a = (o = (n = t.data) == null ? void 0 : n.weights) == null ? void 0 : o.filter(function (f) { return vf.includes(f); })) != null ? a : ["normal"], d = (h = t.data) != null ? h : {};
                    f = 0;
                    _b.label = 1;
                case 1:
                    if (!(f < u.length)) return [3 /*break*/, 4];
                    p = u[f], m = new FontFace(c, "url(".concat(encodeURI(i), ")"), Ts(Xt({}, d), { weight: p }));
                    return [4 /*yield*/, m.load()];
                case 2:
                    _b.sent(), e.add(m), l.push(m);
                    _b.label = 3;
                case 3:
                    f++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, l.length === 1 ? l[0] : l];
                case 5: return [2 /*return*/, (console.warn("[loadWebFont] FontFace API is not supported. Skipping loading font"), null)];
            }
        }); });
    }, unload: function (i) { (Array.isArray(i) ? i : [i]).forEach(function (t) { return w.ADAPTER.getFontFaceSet().delete(t); }); } };
U.add(sa);
var ra = 0, $r;
var Tf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=", Ef = { id: "checkImageBitmap", code: "\n    async function checkImageBitmap()\n    {\n        try\n        {\n            if (typeof createImageBitmap !== 'function') return false;\n\n            const response = await fetch('".concat(Tf, "');\n            const imageBlob =  await response.blob();\n            const imageBitmap = await createImageBitmap(imageBlob);\n\n            return imageBitmap.width === 1 && imageBitmap.height === 1;\n        }\n        catch (e)\n        {\n            return false;\n        }\n    }\n    checkImageBitmap().then((result) => { self.postMessage(result); });\n    ") }, wf = { id: "loadImageBitmap", code: "\n    async function loadImageBitmap(url)\n    {\n        const response = await fetch(url);\n\n        if (!response.ok)\n        {\n            throw new Error(`[WorkerManager.loadImageBitmap] Failed to fetch ${url}: `\n                + `${response.status} ${response.statusText}`);\n        }\n\n        const imageBlob =  await response.blob();\n        const imageBitmap = await createImageBitmap(imageBlob);\n\n        return imageBitmap;\n    }\n    self.onmessage = async (event) =>\n    {\n        try\n        {\n            const imageBitmap = await loadImageBitmap(event.data.data[0]);\n\n            self.postMessage({\n                data: imageBitmap,\n                uuid: event.data.uuid,\n                id: event.data.id,\n            }, [imageBitmap]);\n        }\n        catch(e)\n        {\n            self.postMessage({\n                error: e,\n                uuid: event.data.uuid,\n                id: event.data.id,\n            });\n        }\n    };" };
var qr;
var Af = /** @class */ (function () {
    function Af() {
        this._initialized = !1, this._createdWorkers = 0, this.workerPool = [], this.queue = [], this.resolveHash = {};
    }
    Af.prototype.isImageBitmapSupported = function () { return this._isImageBitmapSupported !== void 0 ? this._isImageBitmapSupported : (this._isImageBitmapSupported = new Promise(function (t) { var e = URL.createObjectURL(new Blob([Ef.code], { type: "application/javascript" })), s = new Worker(e); s.addEventListener("message", function (r) { s.terminate(), URL.revokeObjectURL(e), t(r.data); }); }), this._isImageBitmapSupported); };
    Af.prototype.loadImageBitmap = function (t) { return this._run("loadImageBitmap", [t]); };
    Af.prototype._initWorkers = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            this._initialized || (this._initialized = !0);
            return [2 /*return*/];
        }); });
    };
    Af.prototype.getWorker = function () {
        var _this = this;
        $r === void 0 && ($r = navigator.hardwareConcurrency || 4);
        var t = this.workerPool.pop();
        return !t && this._createdWorkers < $r && (qr || (qr = URL.createObjectURL(new Blob([wf.code], { type: "application/javascript" }))), this._createdWorkers++, t = new Worker(qr), t.addEventListener("message", function (e) { _this.complete(e.data), _this.returnWorker(e.target), _this.next(); })), t;
    };
    Af.prototype.returnWorker = function (t) { this.workerPool.push(t); };
    Af.prototype.complete = function (t) { t.error !== void 0 ? this.resolveHash[t.uuid].reject(t.error) : this.resolveHash[t.uuid].resolve(t.data), this.resolveHash[t.uuid] = null; };
    Af.prototype._run = function (t, e) {
        return __awaiter(this, void 0, void 0, function () {
            var s;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._initWorkers()];
                    case 1:
                        _b.sent();
                        s = new Promise(function (r, n) { _this.queue.push({ id: t, arguments: e, resolve: r, reject: n }); });
                        return [2 /*return*/, (this.next(), s)];
                }
            });
        });
    };
    Af.prototype.next = function () { if (!this.queue.length)
        return; var t = this.getWorker(); if (!t)
        return; var e = this.queue.pop(), s = e.id; this.resolveHash[ra] = { resolve: e.resolve, reject: e.reject }, t.postMessage({ data: e.arguments, uuid: ra++, id: s }); };
    return Af;
}());
var na = new Af;
function hi(i, t, e) { var s = new B(i); return s.baseTexture.on("dispose", function () { delete t.promiseCache[e]; }), s; }
var Sf = [".jpeg", ".jpg", ".png", ".webp", ".avif"], Rf = ["image/jpeg", "image/png", "image/webp", "image/avif"];
function oa(i) {
    return __awaiter(this, void 0, void 0, function () { var t, e; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, w.ADAPTER.fetch(i)];
            case 1:
                t = _b.sent();
                if (!t.ok)
                    throw new Error("[loadImageBitmap] Failed to fetch ".concat(i, ": ").concat(t.status, " ").concat(t.statusText));
                return [4 /*yield*/, t.blob()];
            case 2:
                e = _b.sent();
                return [4 /*yield*/, createImageBitmap(e)];
            case 3: return [2 /*return*/, _b.sent()];
        }
    }); });
}
var ts = { extension: { type: P.LoadParser, priority: Lt.High }, config: { preferWorkers: !0 }, test: function (i) { return Yr(i, Rf) || ni(i, Sf); }, load: function (i, t, e) {
        return __awaiter(this, void 0, void 0, function () { var s, _b, _g, _j, r; return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    s = null;
                    if (!globalThis.createImageBitmap) return [3 /*break*/, 7];
                    _j = this.config.preferWorkers;
                    if (!_j) return [3 /*break*/, 2];
                    return [4 /*yield*/, na.isImageBitmapSupported()];
                case 1:
                    _j = (_k.sent());
                    _k.label = 2;
                case 2:
                    if (!_j) return [3 /*break*/, 4];
                    return [4 /*yield*/, na.loadImageBitmap(i)];
                case 3:
                    _g = s = _k.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, oa(i)];
                case 5:
                    _g = s = _k.sent();
                    _k.label = 6;
                case 6:
                    _b = _g;
                    return [3 /*break*/, 9];
                case 7: return [4 /*yield*/, new Promise(function (n) { s = new Image, s.crossOrigin = "anonymous", s.src = i, s.complete ? n(s) : s.onload = function () { n(s); }; })];
                case 8:
                    _b = s = _k.sent();
                    _k.label = 9;
                case 9:
                    _b;
                    r = new W(s, Xt({ resolution: Kt(i) }, t.data));
                    return [2 /*return*/, (r.resource.src = i, hi(r, e, i))];
            }
        }); });
    }, unload: function (i) { i.destroy(!0); } };
U.add(ts);
var Cf = { extension: { type: P.LoadParser, priority: Lt.High }, test: function (i) { return ft.extname(i).includes(".svg"); }, testParse: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2 /*return*/, De.test(i)];
        }); });
    }, parse: function (i, t, e) {
        return __awaiter(this, void 0, void 0, function () { var o, a, h, s, r, n, _b; return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    s = new De(i, (o = t == null ? void 0 : t.data) == null ? void 0 : o.resourceOptions), r = new W(s, Xt({ resolution: Kt(i) }, t == null ? void 0 : t.data));
                    r.resource.src = i;
                    n = hi(r, e, i);
                    _b = (h = (a = t == null ? void 0 : t.data) == null ? void 0 : a.resourceOptions) != null && h.autoLoad;
                    if (_b) return [3 /*break*/, 2];
                    return [4 /*yield*/, s.load()];
                case 1:
                    _b = (_g.sent());
                    _g.label = 2;
                case 2: return [2 /*return*/, (_b, n)];
            }
        }); });
    }, load: function (i, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, w.ADAPTER.fetch(i)];
                case 1: return [2 /*return*/, (_b.sent()).text()];
            }
        }); });
    }, unload: ts.unload }, aa = { extension: P.ResolveParser, test: ts.test, parse: function (i) { var t, e; return { resolution: parseFloat((e = (t = w.RETINA_PREFIX.exec(i)) == null ? void 0 : t[1]) != null ? e : "1"), format: i.split(".").pop(), src: i }; } };
U.add(aa);
var ha = { extension: { type: P.DetectionParser, priority: 1 }, test: function () { return __awaiter(void 0, void 0, void 0, function () { var i, t; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!globalThis.createImageBitmap)
                    return [2 /*return*/, !1];
                i = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
                return [4 /*yield*/, w.ADAPTER.fetch(i).then(function (e) { return e.blob(); })];
            case 1:
                t = _b.sent();
                return [2 /*return*/, createImageBitmap(t).then(function () { return !0; }, function () { return !1; })];
        }
    }); }); }, add: function (i) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
        return [2 /*return*/, __spreadArray(__spreadArray([], i, true), ["avif"], false)];
    }); }); }, remove: function (i) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
        return [2 /*return*/, i.filter(function (t) { return t !== "avif"; })];
    }); }); } };
U.add(ha);
var la = { extension: { type: P.DetectionParser, priority: 0 }, test: function () { return __awaiter(void 0, void 0, void 0, function () { var i, t; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!globalThis.createImageBitmap)
                    return [2 /*return*/, !1];
                i = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
                return [4 /*yield*/, w.ADAPTER.fetch(i).then(function (e) { return e.blob(); })];
            case 1:
                t = _b.sent();
                return [2 /*return*/, createImageBitmap(t).then(function () { return !0; }, function () { return !1; })];
        }
    }); }); }, add: function (i) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
        return [2 /*return*/, __spreadArray(__spreadArray([], i, true), ["webp"], false)];
    }); }); }, remove: function (i) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
        return [2 /*return*/, i.filter(function (t) { return t !== "webp"; })];
    }); }); } };
U.add(la);
var ca = ["png", "jpg", "jpeg"], ua = { extension: { type: P.DetectionParser, priority: -1 }, test: function () { return Promise.resolve(!0); }, add: function (i) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
        return [2 /*return*/, __spreadArray(__spreadArray([], i, true), ca, true)];
    }); }); }, remove: function (i) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
        return [2 /*return*/, i.filter(function (t) { return !ca.includes(t); })];
    }); }); } };
U.add(ua);
var yt = (function (i) { return (i[i.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", i[i.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT", i[i.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT", i[i.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", i[i.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT", i[i.COMPRESSED_R11_EAC = 37488] = "COMPRESSED_R11_EAC", i[i.COMPRESSED_SIGNED_R11_EAC = 37489] = "COMPRESSED_SIGNED_R11_EAC", i[i.COMPRESSED_RG11_EAC = 37490] = "COMPRESSED_RG11_EAC", i[i.COMPRESSED_SIGNED_RG11_EAC = 37491] = "COMPRESSED_SIGNED_RG11_EAC", i[i.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", i[i.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", i[i.COMPRESSED_SRGB8_ETC2 = 37493] = "COMPRESSED_SRGB8_ETC2", i[i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC", i[i.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2", i[i.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2", i[i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", i[i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", i[i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841] = "COMPRESSED_RGB_PVRTC_2BPPV1_IMG", i[i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843] = "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG", i[i.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", i[i.COMPRESSED_RGB_ATC_WEBGL = 35986] = "COMPRESSED_RGB_ATC_WEBGL", i[i.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35986] = "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL", i[i.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798] = "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL", i[i.COMPRESSED_RGBA_ASTC_4x4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4x4_KHR", i); })(yt || {});
var li = (_b = {}, _b[33776] = .5, _b[33777] = .5, _b[33778] = 1, _b[33779] = 1, _b[35916] = .5, _b[35917] = .5, _b[35918] = 1, _b[35919] = 1, _b[37488] = .5, _b[37489] = .5, _b[37490] = 1, _b[37491] = 1, _b[37492] = .5, _b[37496] = 1, _b[37493] = .5, _b[37497] = 1, _b[37494] = .5, _b[37495] = .5, _b[35840] = .5, _b[35842] = .5, _b[35841] = .25, _b[35843] = .25, _b[36196] = .5, _b[35986] = .5, _b[35986] = 1, _b[34798] = 1, _b[37808] = 1, _b);
var da = /** @class */ (function (_super) {
    __extends(da, _super);
    function da(t, e) {
        if (e === void 0) { e = { width: 1, height: 1, autoLoad: !0 }; }
        var _this = this;
        var s, r;
        typeof t == "string" ? (s = t, r = new Uint8Array) : (s = null, r = t), _this = _super.call(this, r, e) || this, _this.origin = s, _this.buffer = r ? new Zi(r) : null, _this.origin && e.autoLoad !== !1 && _this.load(), r != null && r.length && (_this.loaded = !0, _this.onBlobLoaded(_this.buffer.rawBinaryData));
        return _this;
    }
    da.prototype.onBlobLoaded = function (t) { };
    da.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () { var s; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fetch(this.origin)];
                case 1: return [4 /*yield*/, (_b.sent()).blob()];
                case 2: return [4 /*yield*/, (_b.sent()).arrayBuffer()];
                case 3:
                    s = _b.sent();
                    return [2 /*return*/, (this.data = new Uint32Array(s), this.buffer = new Zi(s), this.loaded = !0, this.onBlobLoaded(s), this.update(), this)];
            }
        }); });
    };
    return da;
}(Be));
var le = /** @class */ (function (_super) {
    __extends(le, _super);
    function le(t, e) {
        var _this = this;
        _this = _super.call(this, t, e) || this, _this.format = e.format, _this.levels = e.levels || 1, _this._width = e.width, _this._height = e.height, _this._extension = le._formatToExtension(_this.format), (e.levelBuffers || _this.buffer) && (_this._levelBuffers = e.levelBuffers || le._createLevelBuffers(t instanceof Uint8Array ? t : _this.buffer.uint8View, _this.format, _this.levels, 4, 4, _this.width, _this.height));
        return _this;
    }
    le.prototype.upload = function (t, e, s) { var r = t.gl; if (!t.context.extensions[this._extension])
        throw new Error("".concat(this._extension, " textures are not supported on the current machine")); if (!this._levelBuffers)
        return !1; for (var o = 0, a = this.levels; o < a; o++) {
        var _b = this._levelBuffers[o], h = _b.levelID, l = _b.levelWidth, c = _b.levelHeight, u = _b.levelBuffer;
        r.compressedTexImage2D(r.TEXTURE_2D, h, this.format, l, c, 0, u);
    } return !0; };
    le.prototype.onBlobLoaded = function () { this._levelBuffers = le._createLevelBuffers(this.buffer.uint8View, this.format, this.levels, 4, 4, this.width, this.height); };
    le._formatToExtension = function (t) { if (t >= 33776 && t <= 33779)
        return "s3tc"; if (t >= 37488 && t <= 37497)
        return "etc"; if (t >= 35840 && t <= 35843)
        return "pvrtc"; if (t >= 36196)
        return "etc1"; if (t >= 35986 && t <= 34798)
        return "atc"; throw new Error("Invalid (compressed) texture format given!"); };
    le._createLevelBuffers = function (t, e, s, r, n, o, a) { var h = new Array(s); var l = t.byteOffset, c = o, u = a, d = c + r - 1 & ~(r - 1), f = u + n - 1 & ~(n - 1), p = d * f * li[e]; for (var m = 0; m < s; m++)
        h[m] = { levelID: m, levelWidth: s > 1 ? c : d, levelHeight: s > 1 ? u : f, levelBuffer: new Uint8Array(t.buffer, l, p) }, l += p, c = c >> 1 || 1, u = u >> 1 || 1, d = c + r - 1 & ~(r - 1), f = u + n - 1 & ~(n - 1), p = d * f * li[e]; return h; };
    return le;
}(da));
var Qt, Le;
function fa() { Le = { s3tc: Qt.getExtension("WEBGL_compressed_texture_s3tc"), s3tc_sRGB: Qt.getExtension("WEBGL_compressed_texture_s3tc_srgb"), etc: Qt.getExtension("WEBGL_compressed_texture_etc"), etc1: Qt.getExtension("WEBGL_compressed_texture_etc1"), pvrtc: Qt.getExtension("WEBGL_compressed_texture_pvrtc") || Qt.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"), atc: Qt.getExtension("WEBGL_compressed_texture_atc"), astc: Qt.getExtension("WEBGL_compressed_texture_astc") }; }
var pa = { extension: { type: P.DetectionParser, priority: 2 }, test: function () { return __awaiter(void 0, void 0, void 0, function () { var t; return __generator(this, function (_b) {
        t = w.ADAPTER.createCanvas().getContext("webgl");
        return [2 /*return*/, t ? (Qt = t, !0) : (console.warn("WebGL not available for compressed textures."), !1)];
    }); }); }, add: function (i) { return __awaiter(void 0, void 0, void 0, function () { var t, e; return __generator(this, function (_b) {
        Le || fa();
        t = [];
        for (e in Le)
            !Le[e] || t.push(e);
        return [2 /*return*/, __spreadArray(__spreadArray([], t, true), i, true)];
    }); }); }, remove: function (i) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
        return [2 /*return*/, (Le || fa(), i.filter(function (t) { return !(t in Le); }))];
    }); }); } };
U.add(pa);
var Kr = 4, es = 124, If = 32, ma = 20, Pf = 542327876, is = { SIZE: 1, FLAGS: 2, HEIGHT: 3, WIDTH: 4, MIPMAP_COUNT: 7, PIXEL_FORMAT: 19 }, Mf = { SIZE: 0, FLAGS: 1, FOURCC: 2, RGB_BITCOUNT: 3, R_BIT_MASK: 4, G_BIT_MASK: 5, B_BIT_MASK: 6, A_BIT_MASK: 7 }, ss = { DXGI_FORMAT: 0, RESOURCE_DIMENSION: 1, MISC_FLAG: 2, ARRAY_SIZE: 3, MISC_FLAGS2: 4 };
var Bf = (function (i) { return (i[i.DXGI_FORMAT_UNKNOWN = 0] = "DXGI_FORMAT_UNKNOWN", i[i.DXGI_FORMAT_R32G32B32A32_TYPELESS = 1] = "DXGI_FORMAT_R32G32B32A32_TYPELESS", i[i.DXGI_FORMAT_R32G32B32A32_FLOAT = 2] = "DXGI_FORMAT_R32G32B32A32_FLOAT", i[i.DXGI_FORMAT_R32G32B32A32_UINT = 3] = "DXGI_FORMAT_R32G32B32A32_UINT", i[i.DXGI_FORMAT_R32G32B32A32_SINT = 4] = "DXGI_FORMAT_R32G32B32A32_SINT", i[i.DXGI_FORMAT_R32G32B32_TYPELESS = 5] = "DXGI_FORMAT_R32G32B32_TYPELESS", i[i.DXGI_FORMAT_R32G32B32_FLOAT = 6] = "DXGI_FORMAT_R32G32B32_FLOAT", i[i.DXGI_FORMAT_R32G32B32_UINT = 7] = "DXGI_FORMAT_R32G32B32_UINT", i[i.DXGI_FORMAT_R32G32B32_SINT = 8] = "DXGI_FORMAT_R32G32B32_SINT", i[i.DXGI_FORMAT_R16G16B16A16_TYPELESS = 9] = "DXGI_FORMAT_R16G16B16A16_TYPELESS", i[i.DXGI_FORMAT_R16G16B16A16_FLOAT = 10] = "DXGI_FORMAT_R16G16B16A16_FLOAT", i[i.DXGI_FORMAT_R16G16B16A16_UNORM = 11] = "DXGI_FORMAT_R16G16B16A16_UNORM", i[i.DXGI_FORMAT_R16G16B16A16_UINT = 12] = "DXGI_FORMAT_R16G16B16A16_UINT", i[i.DXGI_FORMAT_R16G16B16A16_SNORM = 13] = "DXGI_FORMAT_R16G16B16A16_SNORM", i[i.DXGI_FORMAT_R16G16B16A16_SINT = 14] = "DXGI_FORMAT_R16G16B16A16_SINT", i[i.DXGI_FORMAT_R32G32_TYPELESS = 15] = "DXGI_FORMAT_R32G32_TYPELESS", i[i.DXGI_FORMAT_R32G32_FLOAT = 16] = "DXGI_FORMAT_R32G32_FLOAT", i[i.DXGI_FORMAT_R32G32_UINT = 17] = "DXGI_FORMAT_R32G32_UINT", i[i.DXGI_FORMAT_R32G32_SINT = 18] = "DXGI_FORMAT_R32G32_SINT", i[i.DXGI_FORMAT_R32G8X24_TYPELESS = 19] = "DXGI_FORMAT_R32G8X24_TYPELESS", i[i.DXGI_FORMAT_D32_FLOAT_S8X24_UINT = 20] = "DXGI_FORMAT_D32_FLOAT_S8X24_UINT", i[i.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS = 21] = "DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS", i[i.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT = 22] = "DXGI_FORMAT_X32_TYPELESS_G8X24_UINT", i[i.DXGI_FORMAT_R10G10B10A2_TYPELESS = 23] = "DXGI_FORMAT_R10G10B10A2_TYPELESS", i[i.DXGI_FORMAT_R10G10B10A2_UNORM = 24] = "DXGI_FORMAT_R10G10B10A2_UNORM", i[i.DXGI_FORMAT_R10G10B10A2_UINT = 25] = "DXGI_FORMAT_R10G10B10A2_UINT", i[i.DXGI_FORMAT_R11G11B10_FLOAT = 26] = "DXGI_FORMAT_R11G11B10_FLOAT", i[i.DXGI_FORMAT_R8G8B8A8_TYPELESS = 27] = "DXGI_FORMAT_R8G8B8A8_TYPELESS", i[i.DXGI_FORMAT_R8G8B8A8_UNORM = 28] = "DXGI_FORMAT_R8G8B8A8_UNORM", i[i.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB = 29] = "DXGI_FORMAT_R8G8B8A8_UNORM_SRGB", i[i.DXGI_FORMAT_R8G8B8A8_UINT = 30] = "DXGI_FORMAT_R8G8B8A8_UINT", i[i.DXGI_FORMAT_R8G8B8A8_SNORM = 31] = "DXGI_FORMAT_R8G8B8A8_SNORM", i[i.DXGI_FORMAT_R8G8B8A8_SINT = 32] = "DXGI_FORMAT_R8G8B8A8_SINT", i[i.DXGI_FORMAT_R16G16_TYPELESS = 33] = "DXGI_FORMAT_R16G16_TYPELESS", i[i.DXGI_FORMAT_R16G16_FLOAT = 34] = "DXGI_FORMAT_R16G16_FLOAT", i[i.DXGI_FORMAT_R16G16_UNORM = 35] = "DXGI_FORMAT_R16G16_UNORM", i[i.DXGI_FORMAT_R16G16_UINT = 36] = "DXGI_FORMAT_R16G16_UINT", i[i.DXGI_FORMAT_R16G16_SNORM = 37] = "DXGI_FORMAT_R16G16_SNORM", i[i.DXGI_FORMAT_R16G16_SINT = 38] = "DXGI_FORMAT_R16G16_SINT", i[i.DXGI_FORMAT_R32_TYPELESS = 39] = "DXGI_FORMAT_R32_TYPELESS", i[i.DXGI_FORMAT_D32_FLOAT = 40] = "DXGI_FORMAT_D32_FLOAT", i[i.DXGI_FORMAT_R32_FLOAT = 41] = "DXGI_FORMAT_R32_FLOAT", i[i.DXGI_FORMAT_R32_UINT = 42] = "DXGI_FORMAT_R32_UINT", i[i.DXGI_FORMAT_R32_SINT = 43] = "DXGI_FORMAT_R32_SINT", i[i.DXGI_FORMAT_R24G8_TYPELESS = 44] = "DXGI_FORMAT_R24G8_TYPELESS", i[i.DXGI_FORMAT_D24_UNORM_S8_UINT = 45] = "DXGI_FORMAT_D24_UNORM_S8_UINT", i[i.DXGI_FORMAT_R24_UNORM_X8_TYPELESS = 46] = "DXGI_FORMAT_R24_UNORM_X8_TYPELESS", i[i.DXGI_FORMAT_X24_TYPELESS_G8_UINT = 47] = "DXGI_FORMAT_X24_TYPELESS_G8_UINT", i[i.DXGI_FORMAT_R8G8_TYPELESS = 48] = "DXGI_FORMAT_R8G8_TYPELESS", i[i.DXGI_FORMAT_R8G8_UNORM = 49] = "DXGI_FORMAT_R8G8_UNORM", i[i.DXGI_FORMAT_R8G8_UINT = 50] = "DXGI_FORMAT_R8G8_UINT", i[i.DXGI_FORMAT_R8G8_SNORM = 51] = "DXGI_FORMAT_R8G8_SNORM", i[i.DXGI_FORMAT_R8G8_SINT = 52] = "DXGI_FORMAT_R8G8_SINT", i[i.DXGI_FORMAT_R16_TYPELESS = 53] = "DXGI_FORMAT_R16_TYPELESS", i[i.DXGI_FORMAT_R16_FLOAT = 54] = "DXGI_FORMAT_R16_FLOAT", i[i.DXGI_FORMAT_D16_UNORM = 55] = "DXGI_FORMAT_D16_UNORM", i[i.DXGI_FORMAT_R16_UNORM = 56] = "DXGI_FORMAT_R16_UNORM", i[i.DXGI_FORMAT_R16_UINT = 57] = "DXGI_FORMAT_R16_UINT", i[i.DXGI_FORMAT_R16_SNORM = 58] = "DXGI_FORMAT_R16_SNORM", i[i.DXGI_FORMAT_R16_SINT = 59] = "DXGI_FORMAT_R16_SINT", i[i.DXGI_FORMAT_R8_TYPELESS = 60] = "DXGI_FORMAT_R8_TYPELESS", i[i.DXGI_FORMAT_R8_UNORM = 61] = "DXGI_FORMAT_R8_UNORM", i[i.DXGI_FORMAT_R8_UINT = 62] = "DXGI_FORMAT_R8_UINT", i[i.DXGI_FORMAT_R8_SNORM = 63] = "DXGI_FORMAT_R8_SNORM", i[i.DXGI_FORMAT_R8_SINT = 64] = "DXGI_FORMAT_R8_SINT", i[i.DXGI_FORMAT_A8_UNORM = 65] = "DXGI_FORMAT_A8_UNORM", i[i.DXGI_FORMAT_R1_UNORM = 66] = "DXGI_FORMAT_R1_UNORM", i[i.DXGI_FORMAT_R9G9B9E5_SHAREDEXP = 67] = "DXGI_FORMAT_R9G9B9E5_SHAREDEXP", i[i.DXGI_FORMAT_R8G8_B8G8_UNORM = 68] = "DXGI_FORMAT_R8G8_B8G8_UNORM", i[i.DXGI_FORMAT_G8R8_G8B8_UNORM = 69] = "DXGI_FORMAT_G8R8_G8B8_UNORM", i[i.DXGI_FORMAT_BC1_TYPELESS = 70] = "DXGI_FORMAT_BC1_TYPELESS", i[i.DXGI_FORMAT_BC1_UNORM = 71] = "DXGI_FORMAT_BC1_UNORM", i[i.DXGI_FORMAT_BC1_UNORM_SRGB = 72] = "DXGI_FORMAT_BC1_UNORM_SRGB", i[i.DXGI_FORMAT_BC2_TYPELESS = 73] = "DXGI_FORMAT_BC2_TYPELESS", i[i.DXGI_FORMAT_BC2_UNORM = 74] = "DXGI_FORMAT_BC2_UNORM", i[i.DXGI_FORMAT_BC2_UNORM_SRGB = 75] = "DXGI_FORMAT_BC2_UNORM_SRGB", i[i.DXGI_FORMAT_BC3_TYPELESS = 76] = "DXGI_FORMAT_BC3_TYPELESS", i[i.DXGI_FORMAT_BC3_UNORM = 77] = "DXGI_FORMAT_BC3_UNORM", i[i.DXGI_FORMAT_BC3_UNORM_SRGB = 78] = "DXGI_FORMAT_BC3_UNORM_SRGB", i[i.DXGI_FORMAT_BC4_TYPELESS = 79] = "DXGI_FORMAT_BC4_TYPELESS", i[i.DXGI_FORMAT_BC4_UNORM = 80] = "DXGI_FORMAT_BC4_UNORM", i[i.DXGI_FORMAT_BC4_SNORM = 81] = "DXGI_FORMAT_BC4_SNORM", i[i.DXGI_FORMAT_BC5_TYPELESS = 82] = "DXGI_FORMAT_BC5_TYPELESS", i[i.DXGI_FORMAT_BC5_UNORM = 83] = "DXGI_FORMAT_BC5_UNORM", i[i.DXGI_FORMAT_BC5_SNORM = 84] = "DXGI_FORMAT_BC5_SNORM", i[i.DXGI_FORMAT_B5G6R5_UNORM = 85] = "DXGI_FORMAT_B5G6R5_UNORM", i[i.DXGI_FORMAT_B5G5R5A1_UNORM = 86] = "DXGI_FORMAT_B5G5R5A1_UNORM", i[i.DXGI_FORMAT_B8G8R8A8_UNORM = 87] = "DXGI_FORMAT_B8G8R8A8_UNORM", i[i.DXGI_FORMAT_B8G8R8X8_UNORM = 88] = "DXGI_FORMAT_B8G8R8X8_UNORM", i[i.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM = 89] = "DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM", i[i.DXGI_FORMAT_B8G8R8A8_TYPELESS = 90] = "DXGI_FORMAT_B8G8R8A8_TYPELESS", i[i.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB = 91] = "DXGI_FORMAT_B8G8R8A8_UNORM_SRGB", i[i.DXGI_FORMAT_B8G8R8X8_TYPELESS = 92] = "DXGI_FORMAT_B8G8R8X8_TYPELESS", i[i.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB = 93] = "DXGI_FORMAT_B8G8R8X8_UNORM_SRGB", i[i.DXGI_FORMAT_BC6H_TYPELESS = 94] = "DXGI_FORMAT_BC6H_TYPELESS", i[i.DXGI_FORMAT_BC6H_UF16 = 95] = "DXGI_FORMAT_BC6H_UF16", i[i.DXGI_FORMAT_BC6H_SF16 = 96] = "DXGI_FORMAT_BC6H_SF16", i[i.DXGI_FORMAT_BC7_TYPELESS = 97] = "DXGI_FORMAT_BC7_TYPELESS", i[i.DXGI_FORMAT_BC7_UNORM = 98] = "DXGI_FORMAT_BC7_UNORM", i[i.DXGI_FORMAT_BC7_UNORM_SRGB = 99] = "DXGI_FORMAT_BC7_UNORM_SRGB", i[i.DXGI_FORMAT_AYUV = 100] = "DXGI_FORMAT_AYUV", i[i.DXGI_FORMAT_Y410 = 101] = "DXGI_FORMAT_Y410", i[i.DXGI_FORMAT_Y416 = 102] = "DXGI_FORMAT_Y416", i[i.DXGI_FORMAT_NV12 = 103] = "DXGI_FORMAT_NV12", i[i.DXGI_FORMAT_P010 = 104] = "DXGI_FORMAT_P010", i[i.DXGI_FORMAT_P016 = 105] = "DXGI_FORMAT_P016", i[i.DXGI_FORMAT_420_OPAQUE = 106] = "DXGI_FORMAT_420_OPAQUE", i[i.DXGI_FORMAT_YUY2 = 107] = "DXGI_FORMAT_YUY2", i[i.DXGI_FORMAT_Y210 = 108] = "DXGI_FORMAT_Y210", i[i.DXGI_FORMAT_Y216 = 109] = "DXGI_FORMAT_Y216", i[i.DXGI_FORMAT_NV11 = 110] = "DXGI_FORMAT_NV11", i[i.DXGI_FORMAT_AI44 = 111] = "DXGI_FORMAT_AI44", i[i.DXGI_FORMAT_IA44 = 112] = "DXGI_FORMAT_IA44", i[i.DXGI_FORMAT_P8 = 113] = "DXGI_FORMAT_P8", i[i.DXGI_FORMAT_A8P8 = 114] = "DXGI_FORMAT_A8P8", i[i.DXGI_FORMAT_B4G4R4A4_UNORM = 115] = "DXGI_FORMAT_B4G4R4A4_UNORM", i[i.DXGI_FORMAT_P208 = 116] = "DXGI_FORMAT_P208", i[i.DXGI_FORMAT_V208 = 117] = "DXGI_FORMAT_V208", i[i.DXGI_FORMAT_V408 = 118] = "DXGI_FORMAT_V408", i[i.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE = 119] = "DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE", i[i.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE = 120] = "DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE", i[i.DXGI_FORMAT_FORCE_UINT = 121] = "DXGI_FORMAT_FORCE_UINT", i); })(Bf || {}), Df = (function (i) { return (i[i.DDS_DIMENSION_TEXTURE1D = 2] = "DDS_DIMENSION_TEXTURE1D", i[i.DDS_DIMENSION_TEXTURE2D = 3] = "DDS_DIMENSION_TEXTURE2D", i[i.DDS_DIMENSION_TEXTURE3D = 6] = "DDS_DIMENSION_TEXTURE3D", i); })(Df || {});
var Nf = 1, Ff = 2, Lf = 4, Uf = 64, Of = 512, kf = 131072, Gf = 827611204, Hf = 861165636, Xf = 894720068, Vf = 808540228, zf = 4, Wf = (_g = {}, _g[Gf] = yt.COMPRESSED_RGBA_S3TC_DXT1_EXT, _g[Hf] = yt.COMPRESSED_RGBA_S3TC_DXT3_EXT, _g[Xf] = yt.COMPRESSED_RGBA_S3TC_DXT5_EXT, _g), jf = (_j = {}, _j[70] = yt.COMPRESSED_RGBA_S3TC_DXT1_EXT, _j[71] = yt.COMPRESSED_RGBA_S3TC_DXT1_EXT, _j[73] = yt.COMPRESSED_RGBA_S3TC_DXT3_EXT, _j[74] = yt.COMPRESSED_RGBA_S3TC_DXT3_EXT, _j[76] = yt.COMPRESSED_RGBA_S3TC_DXT5_EXT, _j[77] = yt.COMPRESSED_RGBA_S3TC_DXT5_EXT, _j[72] = yt.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, _j[75] = yt.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT, _j[78] = yt.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT, _j);
function _a(i) { var t = new Uint32Array(i); if (t[0] !== Pf)
    throw new Error("Invalid DDS file magic word"); var s = new Uint32Array(i, 0, es / Uint32Array.BYTES_PER_ELEMENT), r = s[is.HEIGHT], n = s[is.WIDTH], o = s[is.MIPMAP_COUNT], a = new Uint32Array(i, is.PIXEL_FORMAT * Uint32Array.BYTES_PER_ELEMENT, If / Uint32Array.BYTES_PER_ELEMENT), h = a[Nf]; if (h & Lf) {
    var l = a[Mf.FOURCC];
    if (l !== Vf) {
        var g = Wf[l], v = Kr + es, T = new Uint8Array(i, v);
        return [new le(T, { format: g, width: n, height: r, levels: o })];
    }
    var c = Kr + es, u = new Uint32Array(t.buffer, c, ma / Uint32Array.BYTES_PER_ELEMENT), d = u[ss.DXGI_FORMAT], f = u[ss.RESOURCE_DIMENSION], p = u[ss.MISC_FLAG], m = u[ss.ARRAY_SIZE], _1 = jf[d];
    if (_1 === void 0)
        throw new Error("DDSParser cannot parse texture data with DXGI format ".concat(d));
    if (p === zf)
        throw new Error("DDSParser does not support cubemap textures");
    if (f === 6)
        throw new Error("DDSParser does not supported 3D texture data");
    var x = new Array, y = Kr + es + ma;
    if (m === 1)
        x.push(new Uint8Array(i, y));
    else {
        var g = li[_1];
        var v = 0, T = n, M = r;
        for (var A = 0; A < o; A++) {
            var L = Math.max(1, T + 3 & -4), G = Math.max(1, M + 3 & -4);
            v += L * G * g, T = T >>> 1, M = M >>> 1;
        }
        var R = y;
        for (var A = 0; A < m; A++)
            x.push(new Uint8Array(i, R, v)), R += v;
    }
    return x.map(function (g) { return new le(g, { format: _1, width: n, height: r, levels: o }); });
} throw h & Uf ? new Error("DDSParser does not support uncompressed texture data.") : h & Of ? new Error("DDSParser does not supported YUV uncompressed texture data.") : h & kf ? new Error("DDSParser does not support single-channel (lumninance) texture data!") : h & Ff ? new Error("DDSParser does not support single-channel (alpha) texture data!") : new Error("DDSParser failed to load a texture file due to an unknown reason!"); }
var ga = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10], Yf = 67305985, Ut = { FILE_IDENTIFIER: 0, ENDIANNESS: 12, GL_TYPE: 16, GL_TYPE_SIZE: 20, GL_FORMAT: 24, GL_INTERNAL_FORMAT: 28, GL_BASE_INTERNAL_FORMAT: 32, PIXEL_WIDTH: 36, PIXEL_HEIGHT: 40, PIXEL_DEPTH: 44, NUMBER_OF_ARRAY_ELEMENTS: 48, NUMBER_OF_FACES: 52, NUMBER_OF_MIPMAP_LEVELS: 56, BYTES_OF_KEY_VALUE_DATA: 60 }, Zr = 64, Qr = (_k = {}, _k[O.UNSIGNED_BYTE] = 1, _k[O.UNSIGNED_SHORT] = 2, _k[O.INT] = 4, _k[O.UNSIGNED_INT] = 4, _k[O.FLOAT] = 4, _k[O.HALF_FLOAT] = 8, _k), xa = (_m = {}, _m[C.RGBA] = 4, _m[C.RGB] = 3, _m[C.RG] = 2, _m[C.RED] = 1, _m[C.LUMINANCE] = 1, _m[C.LUMINANCE_ALPHA] = 2, _m[C.ALPHA] = 1, _m), va = (_q = {}, _q[O.UNSIGNED_SHORT_4_4_4_4] = 2, _q[O.UNSIGNED_SHORT_5_5_5_1] = 2, _q[O.UNSIGNED_SHORT_5_6_5] = 2, _q);
function ya(i, t, e) {
    if (e === void 0) { e = !1; }
    var s = new DataView(t);
    if (!$f(i, s))
        return null;
    var r = s.getUint32(Ut.ENDIANNESS, !0) === Yf, n = s.getUint32(Ut.GL_TYPE, r), o = s.getUint32(Ut.GL_FORMAT, r), a = s.getUint32(Ut.GL_INTERNAL_FORMAT, r), h = s.getUint32(Ut.PIXEL_WIDTH, r), l = s.getUint32(Ut.PIXEL_HEIGHT, r) || 1, c = s.getUint32(Ut.PIXEL_DEPTH, r) || 1, u = s.getUint32(Ut.NUMBER_OF_ARRAY_ELEMENTS, r) || 1, d = s.getUint32(Ut.NUMBER_OF_FACES, r), f = s.getUint32(Ut.NUMBER_OF_MIPMAP_LEVELS, r), p = s.getUint32(Ut.BYTES_OF_KEY_VALUE_DATA, r);
    if (l === 0 || c !== 1)
        throw new Error("Only 2D textures are supported");
    if (d !== 1)
        throw new Error("CubeTextures are not supported by KTXLoader yet!");
    if (u !== 1)
        throw new Error("WebGL does not support array textures");
    var m = 4, _ = 4, x = h + 3 & -4, y = l + 3 & -4, g = new Array(u);
    var v = h * l;
    n === 0 && (v = x * y);
    var T;
    if (n !== 0 ? Qr[n] ? T = Qr[n] * xa[o] : T = va[n] : T = li[a], T === void 0)
        throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");
    var M = e ? Kf(s, p, r) : null;
    var A = v * T, L = h, G = l, I = x, N = y, E = Zr + p;
    for (var b = 0; b < f; b++) {
        var X = s.getUint32(E, r);
        var z = E + 4;
        for (var D = 0; D < u; D++) {
            var $ = g[D];
            $ || ($ = g[D] = new Array(f)), $[b] = { levelID: b, levelWidth: f > 1 || n !== 0 ? L : I, levelHeight: f > 1 || n !== 0 ? G : N, levelBuffer: new Uint8Array(t, z, A) }, z += A;
        }
        E += X + 4, E = E % 4 !== 0 ? E + 4 - E % 4 : E, L = L >> 1 || 1, G = G >> 1 || 1, I = L + m - 1 & ~(m - 1), N = G + _ - 1 & ~(_ - 1), A = I * N * T;
    }
    return n !== 0 ? { uncompressed: g.map(function (b) { var X = b[0].levelBuffer, z = !1; return n === O.FLOAT ? X = new Float32Array(b[0].levelBuffer.buffer, b[0].levelBuffer.byteOffset, b[0].levelBuffer.byteLength / 4) : n === O.UNSIGNED_INT ? (z = !0, X = new Uint32Array(b[0].levelBuffer.buffer, b[0].levelBuffer.byteOffset, b[0].levelBuffer.byteLength / 4)) : n === O.INT && (z = !0, X = new Int32Array(b[0].levelBuffer.buffer, b[0].levelBuffer.byteOffset, b[0].levelBuffer.byteLength / 4)), { resource: new Be(X, { width: b[0].levelWidth, height: b[0].levelHeight }), type: n, format: z ? qf(o) : o }; }), kvData: M } : { compressed: g.map(function (b) { return new le(null, { format: a, width: h, height: l, levels: f, levelBuffers: b }); }), kvData: M };
}
function $f(i, t) { for (var e = 0; e < ga.length; e++)
    if (t.getUint8(e) !== ga[e])
        return console.error("".concat(i, " is not a valid *.ktx file!")), !1; return !0; }
function qf(i) { switch (i) {
    case C.RGBA: return C.RGBA_INTEGER;
    case C.RGB: return C.RGB_INTEGER;
    case C.RG: return C.RG_INTEGER;
    case C.RED: return C.RED_INTEGER;
    default: return i;
} }
function Kf(i, t, e) { var s = new Map; var r = 0; for (; r < t;) {
    var n = i.getUint32(Zr + r, e), o = Zr + r + 4, a = 3 - (n + 3) % 4;
    if (n === 0 || n > t - r) {
        console.error("KTXLoader: keyAndValueByteSize out of bounds");
        break;
    }
    var h = 0;
    for (; h < n && i.getUint8(o + h) !== 0; h++)
        ;
    if (h === -1) {
        console.error("KTXLoader: Failed to find null byte terminating kvData key");
        break;
    }
    var l = new TextDecoder().decode(new Uint8Array(i.buffer, o, h)), c = new DataView(i.buffer, o + h + 1, n - h - 1);
    s.set(l, c), r += 4 + n + a;
} return s; }
var ba = { extension: { type: P.LoadParser, priority: Lt.High }, test: function (i) { return ni(i, ".dds"); }, load: function (i, t, e) {
        return __awaiter(this, void 0, void 0, function () { var r, o; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, w.ADAPTER.fetch(i)];
                case 1: return [4 /*yield*/, (_b.sent()).arrayBuffer()];
                case 2:
                    r = _b.sent(), o = _a(r).map(function (a) { var h = new W(a, Xt({ mipmap: Mt.OFF, alphaMode: At.NO_PREMULTIPLIED_ALPHA, resolution: Kt(i) }, t.data)); return hi(h, e, i); });
                    return [2 /*return*/, o.length === 1 ? o[0] : o];
            }
        }); });
    }, unload: function (i) { Array.isArray(i) ? i.forEach(function (t) { return t.destroy(!0); }) : i.destroy(!0); } };
U.add(ba);
var Ta = { extension: { type: P.LoadParser, priority: Lt.High }, test: function (i) { return ni(i, ".ktx"); }, load: function (i, t, e) {
        return __awaiter(this, void 0, void 0, function () { var r, _b, n, o, a, h, l, c; return __generator(this, function (_g) {
            switch (_g.label) {
                case 0: return [4 /*yield*/, w.ADAPTER.fetch(i)];
                case 1: return [4 /*yield*/, (_g.sent()).arrayBuffer()];
                case 2:
                    r = _g.sent(), _b = ya(i, r), n = _b.compressed, o = _b.uncompressed, a = _b.kvData, h = n != null ? n : o, l = Xt({ mipmap: Mt.OFF, alphaMode: At.NO_PREMULTIPLIED_ALPHA, resolution: Kt(i) }, t.data), c = h.map(function (u) { h === o && Object.assign(l, { type: u.type, format: u.format }); var d = new W(u, l); return d.ktxKeyValueData = a, hi(d, e, i); });
                    return [2 /*return*/, c.length === 1 ? c[0] : c];
            }
        }); });
    }, unload: function (i) { Array.isArray(i) ? i.forEach(function (t) { return t.destroy(!0); }) : i.destroy(!0); } };
U.add(Ta);
var Ea = { extension: P.ResolveParser, test: function (i) { var e = i.split("?")[0].split(".").pop(); return ["basis", "ktx", "dds"].includes(e); }, parse: function (i) { var s, r, n, o; if (i.split("?")[0].split(".").pop() === "ktx") {
        var a = [".s3tc.ktx", ".s3tc_sRGB.ktx", ".etc.ktx", ".etc1.ktx", ".pvrt.ktx", ".atc.ktx", ".astc.ktx"];
        if (a.some(function (h) { return i.endsWith(h); }))
            return { resolution: parseFloat((r = (s = w.RETINA_PREFIX.exec(i)) == null ? void 0 : s[1]) != null ? r : "1"), format: a.find(function (h) { return i.endsWith(h); }), src: i };
    } return { resolution: parseFloat((o = (n = w.RETINA_PREFIX.exec(i)) == null ? void 0 : n[1]) != null ? o : "1"), format: i.split(".").pop(), src: i }; } };
U.add(Ea);
var wa = new V, Aa = 4, Jr = /** @class */ (function () {
    function class_1(i) {
        this.renderer = i;
    }
    class_1.prototype.image = function (i, t, e) {
        return __awaiter(this, void 0, void 0, function () { var s, _b; return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    s = new Image;
                    _b = s;
                    return [4 /*yield*/, this.base64(i, t, e)];
                case 1: return [2 /*return*/, (_b.src = _g.sent(), s)];
            }
        }); });
    };
    class_1.prototype.base64 = function (i, t, e) {
        return __awaiter(this, void 0, void 0, function () { var s, r_2; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    s = this.canvas(i);
                    if (s.toDataURL !== void 0)
                        return [2 /*return*/, s.toDataURL(t, e)];
                    if (!(s.convertToBlob !== void 0)) return [3 /*break*/, 3];
                    return [4 /*yield*/, s.convertToBlob({ type: t, quality: e })];
                case 1:
                    r_2 = _b.sent();
                    return [4 /*yield*/, new Promise(function (n) { var o = new FileReader; o.onload = function () { return n(o.result); }, o.readAsDataURL(r_2); })];
                case 2: return [2 /*return*/, _b.sent()];
                case 3: throw new Error("Extract.base64() requires ICanvas.toDataURL or ICanvas.convertToBlob to be implemented");
            }
        }); });
    };
    class_1.prototype.canvas = function (i, t) { var e = this.renderer; var s, r = !1, n, o = !1; i && (i instanceof ee ? n = i : (n = this.renderer.generateTexture(i), o = !0)), n ? (s = n.baseTexture.resolution, t = t != null ? t : n.frame, r = !1, e.renderTexture.bind(n)) : (s = e.resolution, t || (t = wa, t.width = e.width, t.height = e.height), r = !0, e.renderTexture.bind(null)); var a = Math.round(t.width * s), h = Math.round(t.height * s); var l = new Ys(a, h, 1); var c = new Uint8Array(Aa * a * h), u = e.gl; u.readPixels(Math.round(t.x * s), Math.round(t.y * s), a, h, u.RGBA, u.UNSIGNED_BYTE, c); var d = l.context.getImageData(0, 0, a, h); if (Jr.arrayPostDivide(c, d.data), l.context.putImageData(d, 0, 0), r) {
        var f = new Ys(l.width, l.height, 1);
        f.context.scale(1, -1), f.context.drawImage(l.canvas, 0, -h), l.destroy(), l = f;
    } return o && n.destroy(!0), l.canvas; };
    class_1.prototype.pixels = function (i, t) { var e = this.renderer; var s, r, n = !1; i && (i instanceof ee ? r = i : (r = this.renderer.generateTexture(i), n = !0)), r ? (s = r.baseTexture.resolution, t = t != null ? t : r.frame, e.renderTexture.bind(r)) : (s = e.resolution, t || (t = wa, t.width = e.width, t.height = e.height), e.renderTexture.bind(null)); var o = Math.round(t.width * s), a = Math.round(t.height * s), h = new Uint8Array(Aa * o * a), l = e.gl; return l.readPixels(Math.round(t.x * s), Math.round(t.y * s), o, a, l.RGBA, l.UNSIGNED_BYTE, h), n && r.destroy(!0), Jr.arrayPostDivide(h, h), h; };
    class_1.prototype.destroy = function () { this.renderer = null; };
    class_1.arrayPostDivide = function (i, t) { for (var e = 0; e < i.length; e += 4) {
        var s = t[e + 3] = i[e + 3];
        s !== 0 ? (t[e] = Math.round(Math.min(i[e] * 255 / s, 255)), t[e + 1] = Math.round(Math.min(i[e + 1] * 255 / s, 255)), t[e + 2] = Math.round(Math.min(i[e + 2] * 255 / s, 255))) : (t[e] = i[e], t[e + 1] = i[e + 1], t[e + 2] = i[e + 2]);
    } };
    return class_1;
}());
var tn = Jr;
tn.extension = { name: "extract", type: P.RendererSystem }, U.add(tn);
var Jt = (function (i) { return (i.MITER = "miter", i.BEVEL = "bevel", i.ROUND = "round", i); })(Jt || {}), ae = (function (i) { return (i.BUTT = "butt", i.ROUND = "round", i.SQUARE = "square", i); })(ae || {});
var Ue = { adaptive: !0, maxLength: 10, minSegments: 8, maxSegments: 2048, epsilon: 1e-4, _segmentsCount: function (i, t) {
        if (t === void 0) { t = 20; }
        if (!this.adaptive || !i || isNaN(i))
            return t;
        var e = Math.ceil(i / this.maxLength);
        return e < this.minSegments ? e = this.minSegments : e > this.maxSegments && (e = this.maxSegments), e;
    } };
var vi = /** @class */ (function () {
    function vi() {
        this.color = 16777215, this.alpha = 1, this.texture = B.WHITE, this.matrix = null, this.visible = !1, this.reset();
    }
    vi.prototype.clone = function () { var t = new vi; return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t; };
    vi.prototype.reset = function () { this.color = 16777215, this.alpha = 1, this.texture = B.WHITE, this.matrix = null, this.visible = !1; };
    vi.prototype.destroy = function () { this.texture = null, this.matrix = null; };
    return vi;
}());
function Sa(i, t) {
    var _b, _g;
    if (t === void 0) { t = !1; }
    var e = i.length;
    if (e < 6)
        return;
    var s = 0;
    for (var r = 0, n = i[e - 2], o = i[e - 1]; r < e; r += 2) {
        var a = i[r], h = i[r + 1];
        s += (a - n) * (h + o), n = a, o = h;
    }
    if (!t && s > 0 || t && s <= 0) {
        var r = e / 2;
        for (var n = r + r % 2; n < e; n += 2) {
            var o = e - n - 2, a = e - n - 1, h = n, l = n + 1;
            _b = [i[h], i[o]], i[o] = _b[0], i[h] = _b[1], _g = [i[l], i[a]], i[a] = _g[0], i[l] = _g[1];
        }
    }
}
var en = { build: function (i) { i.points = i.shape.points.slice(); }, triangulate: function (i, t) { var e = i.points; var s = i.holes, r = t.points, n = t.indices; if (e.length >= 6) {
        Sa(e, !1);
        var o = [];
        for (var l = 0; l < s.length; l++) {
            var c = s[l];
            Sa(c.points, !0), o.push(e.length / 2), e = e.concat(c.points);
        }
        var a = Bs(e, o, 2);
        if (!a)
            return;
        var h = r.length / 2;
        for (var l = 0; l < a.length; l += 3)
            n.push(a[l] + h), n.push(a[l + 1] + h), n.push(a[l + 2] + h);
        for (var l = 0; l < e.length; l++)
            r.push(e[l]);
    } } }, ci = { build: function (i) { var t = i.points; var e, s, r, n, o, a; if (i.type === dt.CIRC) {
        var p = i.shape;
        e = p.x, s = p.y, o = a = p.radius, r = n = 0;
    }
    else if (i.type === dt.ELIP) {
        var p = i.shape;
        e = p.x, s = p.y, o = p.width, a = p.height, r = n = 0;
    }
    else {
        var p = i.shape, m = p.width / 2, _ = p.height / 2;
        e = p.x + m, s = p.y + _, o = a = Math.max(0, Math.min(p.radius, Math.min(m, _))), r = m - o, n = _ - a;
    } if (!(o >= 0 && a >= 0 && r >= 0 && n >= 0)) {
        t.length = 0;
        return;
    } var h = Math.ceil(2.3 * Math.sqrt(o + a)), l = h * 8 + (r ? 4 : 0) + (n ? 4 : 0); if (t.length = l, l === 0)
        return; if (h === 0) {
        t.length = 8, t[0] = t[6] = e + r, t[1] = t[3] = s + n, t[2] = t[4] = e - r, t[5] = t[7] = s - n;
        return;
    } var c = 0, u = h * 4 + (r ? 2 : 0) + 2, d = u, f = l; {
        var p = r + o, m = n, _ = e + p, x = e - p, y = s + m;
        if (t[c++] = _, t[c++] = y, t[--u] = y, t[--u] = x, n) {
            var g = s - m;
            t[d++] = x, t[d++] = g, t[--f] = g, t[--f] = _;
        }
    } for (var p = 1; p < h; p++) {
        var m = Math.PI / 2 * (p / h), _ = r + Math.cos(m) * o, x = n + Math.sin(m) * a, y = e + _, g = e - _, v = s + x, T = s - x;
        t[c++] = y, t[c++] = v, t[--u] = v, t[--u] = g, t[d++] = g, t[d++] = T, t[--f] = T, t[--f] = y;
    } {
        var p = r, m = n + a, _ = e + p, x = e - p, y = s + m, g = s - m;
        t[c++] = _, t[c++] = y, t[--f] = g, t[--f] = _, r && (t[c++] = x, t[c++] = y, t[--f] = g, t[--f] = x);
    } }, triangulate: function (i, t) { var e = i.points, s = t.points, r = t.indices; if (e.length === 0)
        return; var n = s.length / 2; var o = n; var a, h; if (i.type !== dt.RREC) {
        var c = i.shape;
        a = c.x, h = c.y;
    }
    else {
        var c = i.shape;
        a = c.x + c.width / 2, h = c.y + c.height / 2;
    } var l = i.matrix; s.push(i.matrix ? l.a * a + l.c * h + l.tx : a, i.matrix ? l.b * a + l.d * h + l.ty : h), n++, s.push(e[0], e[1]); for (var c = 2; c < e.length; c += 2)
        s.push(e[c], e[c + 1]), r.push(n++, o, n); r.push(o + 1, o, n); } }, Ra = { build: function (i) { var t = i.shape, e = t.x, s = t.y, r = t.width, n = t.height, o = i.points; o.length = 0, r >= 0 && n >= 0 && o.push(e, s, e + r, s, e + r, s + n, e, s + n); }, triangulate: function (i, t) { var e = i.points, s = t.points; if (e.length === 0)
        return; var r = s.length / 2; s.push(e[0], e[1], e[2], e[3], e[6], e[7], e[4], e[5]), t.indices.push(r, r + 1, r + 2, r + 1, r + 2, r + 3); } }, Ca = { build: function (i) { ci.build(i); }, triangulate: function (i, t) { ci.triangulate(i, t); } };
function Ia(i, t, e, s, r, n, o, a) { var h = i - e * r, l = t - s * r, c = i + e * n, u = t + s * n; var d, f; o ? (d = s, f = -e) : (d = -s, f = e); var p = h + d, m = l + f, _ = c + d, x = u + f; return a.push(p, m), a.push(_, x), 2; }
function Ee(i, t, e, s, r, n, o, a) { var h = e - i, l = s - t; var c = Math.atan2(h, l), u = Math.atan2(r - i, n - t); a && c < u ? c += Math.PI * 2 : !a && c > u && (u += Math.PI * 2); var d = c; var f = u - c, p = Math.abs(f), m = Math.sqrt(h * h + l * l), _ = (15 * p * Math.sqrt(m) / Math.PI >> 0) + 1, x = f / _; if (d += x, a) {
    o.push(i, t), o.push(e, s);
    for (var y = 1, g = d; y < _; y++, g += x)
        o.push(i, t), o.push(i + Math.sin(g) * m, t + Math.cos(g) * m);
    o.push(i, t), o.push(r, n);
}
else {
    o.push(e, s), o.push(i, t);
    for (var y = 1, g = d; y < _; y++, g += x)
        o.push(i + Math.sin(g) * m, t + Math.cos(g) * m), o.push(i, t);
    o.push(r, n), o.push(i, t);
} return _ * 2; }
function Zf(i, t) { var e = i.shape; var s = i.points || e.points.slice(); var r = t.closePointEps; if (s.length === 0)
    return; var n = i.lineStyle, o = new j(s[0], s[1]), a = new j(s[s.length - 2], s[s.length - 1]), h = e.type !== dt.POLY || e.closeStroke, l = Math.abs(o.x - a.x) < r && Math.abs(o.y - a.y) < r; if (h) {
    s = s.slice(), l && (s.pop(), s.pop(), a.set(s[s.length - 2], s[s.length - 1]));
    var D = (o.x + a.x) * .5, $ = (a.y + o.y) * .5;
    s.unshift(D, $), s.push(D, $);
} var c = t.points, u = s.length / 2; var d = s.length; var f = c.length / 2, p = n.width / 2, m = p * p, _ = n.miterLimit * n.miterLimit; var x = s[0], y = s[1], g = s[2], v = s[3], T = 0, M = 0, R = -(y - v), A = x - g, L = 0, G = 0, I = Math.sqrt(R * R + A * A); R /= I, A /= I, R *= p, A *= p; var N = n.alignment, E = (1 - N) * 2, b = N * 2; h || (n.cap === ae.ROUND ? d += Ee(x - R * (E - b) * .5, y - A * (E - b) * .5, x - R * E, y - A * E, x + R * b, y + A * b, c, !0) + 2 : n.cap === ae.SQUARE && (d += Ia(x, y, R, A, E, b, !0, c))), c.push(x - R * E, y - A * E), c.push(x + R * b, y + A * b); for (var D = 1; D < u - 1; ++D) {
    x = s[(D - 1) * 2], y = s[(D - 1) * 2 + 1], g = s[D * 2], v = s[D * 2 + 1], T = s[(D + 1) * 2], M = s[(D + 1) * 2 + 1], R = -(y - v), A = x - g, I = Math.sqrt(R * R + A * A), R /= I, A /= I, R *= p, A *= p, L = -(v - M), G = g - T, I = Math.sqrt(L * L + G * G), L /= I, G /= I, L *= p, G *= p;
    var $ = g - x, st = y - v, S = g - T, H = M - v, Y = $ * S + st * H, q = st * S - H * $, K = q < 0;
    if (Math.abs(q) < .001 * Math.abs(Y)) {
        c.push(g - R * E, v - A * E), c.push(g + R * b, v + A * b), Y >= 0 && (n.join === Jt.ROUND ? d += Ee(g, v, g - R * E, v - A * E, g - L * E, v - G * E, c, !1) + 4 : d += 2, c.push(g - L * b, v - G * b), c.push(g + L * E, v + G * E));
        continue;
    }
    var ct = (-R + x) * (-A + v) - (-R + g) * (-A + y), ot = (-L + T) * (-G + v) - (-L + g) * (-G + M), ut = ($ * ot - S * ct) / q, mt = (H * ct - st * ot) / q, vt = (ut - g) * (ut - g) + (mt - v) * (mt - v), pt = g + (ut - g) * E, J = v + (mt - v) * E, at = g - (ut - g) * b, lt = v - (mt - v) * b, Gt = Math.min($ * $ + st * st, S * S + H * H), Ht = K ? E : b, He = Gt + Ht * Ht * m;
    vt <= He ? n.join === Jt.BEVEL || vt / m > _ ? (K ? (c.push(pt, J), c.push(g + R * b, v + A * b), c.push(pt, J), c.push(g + L * b, v + G * b)) : (c.push(g - R * E, v - A * E), c.push(at, lt), c.push(g - L * E, v - G * E), c.push(at, lt)), d += 2) : n.join === Jt.ROUND ? K ? (c.push(pt, J), c.push(g + R * b, v + A * b), d += Ee(g, v, g + R * b, v + A * b, g + L * b, v + G * b, c, !0) + 4, c.push(pt, J), c.push(g + L * b, v + G * b)) : (c.push(g - R * E, v - A * E), c.push(at, lt), d += Ee(g, v, g - R * E, v - A * E, g - L * E, v - G * E, c, !1) + 4, c.push(g - L * E, v - G * E), c.push(at, lt)) : (c.push(pt, J), c.push(at, lt)) : (c.push(g - R * E, v - A * E), c.push(g + R * b, v + A * b), n.join === Jt.ROUND ? K ? d += Ee(g, v, g + R * b, v + A * b, g + L * b, v + G * b, c, !0) + 2 : d += Ee(g, v, g - R * E, v - A * E, g - L * E, v - G * E, c, !1) + 2 : n.join === Jt.MITER && vt / m <= _ && (K ? (c.push(at, lt), c.push(at, lt)) : (c.push(pt, J), c.push(pt, J)), d += 2), c.push(g - L * E, v - G * E), c.push(g + L * b, v + G * b), d += 2);
} x = s[(u - 2) * 2], y = s[(u - 2) * 2 + 1], g = s[(u - 1) * 2], v = s[(u - 1) * 2 + 1], R = -(y - v), A = x - g, I = Math.sqrt(R * R + A * A), R /= I, A /= I, R *= p, A *= p, c.push(g - R * E, v - A * E), c.push(g + R * b, v + A * b), h || (n.cap === ae.ROUND ? d += Ee(g - R * (E - b) * .5, v - A * (E - b) * .5, g - R * E, v - A * E, g + R * b, v + A * b, c, !1) + 2 : n.cap === ae.SQUARE && (d += Ia(g, v, R, A, E, b, !1, c))); var X = t.indices, z = Ue.epsilon * Ue.epsilon; for (var D = f; D < d + f - 2; ++D)
    x = c[D * 2], y = c[D * 2 + 1], g = c[(D + 1) * 2], v = c[(D + 1) * 2 + 1], T = c[(D + 2) * 2], M = c[(D + 2) * 2 + 1], !(Math.abs(x * (v - M) + g * (M - y) + T * (y - v)) < z) && X.push(D, D + 1, D + 2); }
function Qf(i, t) { var e = 0; var s = i.shape, r = i.points || s.points, n = s.type !== dt.POLY || s.closeStroke; if (r.length === 0)
    return; var o = t.points, a = t.indices, h = r.length / 2, l = o.length / 2; var c = l; for (o.push(r[0], r[1]), e = 1; e < h; e++)
    o.push(r[e * 2], r[e * 2 + 1]), a.push(c, c + 1), c++; n && a.push(c, l); }
function sn(i, t) { i.lineStyle.native ? Qf(i, t) : Zf(i, t); }
var rn = /** @class */ (function () {
    function rn() {
    }
    rn.curveTo = function (t, e, s, r, n, o) { var a = o[o.length - 2], l = o[o.length - 1] - e, c = a - t, u = r - e, d = s - t, f = Math.abs(l * d - c * u); if (f < 1e-8 || n === 0)
        return (o[o.length - 2] !== t || o[o.length - 1] !== e) && o.push(t, e), null; var p = l * l + c * c, m = u * u + d * d, _ = l * u + c * d, x = n * Math.sqrt(p) / f, y = n * Math.sqrt(m) / f, g = x * _ / p, v = y * _ / m, T = x * d + y * c, M = x * u + y * l, R = c * (y + g), A = l * (y + g), L = d * (x + v), G = u * (x + v), I = Math.atan2(A - M, R - T), N = Math.atan2(G - M, L - T); return { cx: T + t, cy: M + e, radius: n, startAngle: I, endAngle: N, anticlockwise: c * u > d * l }; };
    rn.arc = function (t, e, s, r, n, o, a, h, l) { var c = a - o, u = Ue._segmentsCount(Math.abs(c) * n, Math.ceil(Math.abs(c) / Xe) * 40), d = c / (u * 2), f = d * 2, p = Math.cos(d), m = Math.sin(d), _ = u - 1, x = _ % 1 / _; for (var y = 0; y <= _; ++y) {
        var g = y + x * y, v = d + o + f * g, T = Math.cos(v), M = -Math.sin(v);
        l.push((p * T + m * M) * n + s, (p * -M + m * T) * n + r);
    } };
    return rn;
}());
var xs = /** @class */ (function () {
    function xs() {
    }
    xs.curveLength = function (t, e, s, r, n, o, a, h) { var c = 0, u = 0, d = 0, f = 0, p = 0, m = 0, _ = 0, x = 0, y = 0, g = 0, v = 0, T = t, M = e; for (var R = 1; R <= 10; ++R)
        u = R / 10, d = u * u, f = d * u, p = 1 - u, m = p * p, _ = m * p, x = _ * t + 3 * m * u * s + 3 * p * d * n + f * a, y = _ * e + 3 * m * u * r + 3 * p * d * o + f * h, g = T - x, v = M - y, T = x, M = y, c += Math.sqrt(g * g + v * v); return c; };
    xs.curveTo = function (t, e, s, r, n, o, a) { var h = a[a.length - 2], l = a[a.length - 1]; a.length -= 2; var c = Ue._segmentsCount(xs.curveLength(h, l, t, e, s, r, n, o)); var u = 0, d = 0, f = 0, p = 0, m = 0; a.push(h, l); for (var _ = 1, x = 0; _ <= c; ++_)
        x = _ / c, u = 1 - x, d = u * u, f = d * u, p = x * x, m = p * x, a.push(f * h + 3 * d * x * t + 3 * u * p * s + m * n, f * l + 3 * d * x * e + 3 * u * p * r + m * o); };
    return xs;
}());
var vs = /** @class */ (function () {
    function vs() {
    }
    vs.curveLength = function (t, e, s, r, n, o) { var a = t - 2 * s + n, h = e - 2 * r + o, l = 2 * s - 2 * t, c = 2 * r - 2 * e, u = 4 * (a * a + h * h), d = 4 * (a * l + h * c), f = l * l + c * c, p = 2 * Math.sqrt(u + d + f), m = Math.sqrt(u), _ = 2 * u * m, x = 2 * Math.sqrt(f), y = d / m; return (_ * p + m * d * (p - x) + (4 * f * u - d * d) * Math.log((2 * m + y + p) / (y + x))) / (4 * _); };
    vs.curveTo = function (t, e, s, r, n) { var o = n[n.length - 2], a = n[n.length - 1], h = Ue._segmentsCount(vs.curveLength(o, a, t, e, s, r)); var l = 0, c = 0; for (var u = 1; u <= h; ++u) {
        var d = u / h;
        l = o + (t - o) * d, c = a + (e - a) * d, n.push(l + (t + (s - t) * d - l) * d, c + (e + (r - e) * d - c) * d);
    } };
    return vs;
}());
var Pa = /** @class */ (function () {
    function Pa() {
        this.reset();
    }
    Pa.prototype.begin = function (t, e, s) { this.reset(), this.style = t, this.start = e, this.attribStart = s; };
    Pa.prototype.end = function (t, e) { this.attribSize = e - this.attribStart, this.size = t - this.start; };
    Pa.prototype.reset = function () { this.style = null, this.size = 0, this.start = 0, this.attribStart = 0, this.attribSize = 0; };
    return Pa;
}());
var rs = (_v = {}, _v[dt.POLY] = en, _v[dt.CIRC] = ci, _v[dt.ELIP] = ci, _v[dt.RECT] = Ra, _v[dt.RREC] = Ca, _v), nn = [], ui = [];
var yi = /** @class */ (function () {
    function yi(t, e, s, r) {
        if (e === void 0) { e = null; }
        if (s === void 0) { s = null; }
        if (r === void 0) { r = null; }
        this.points = [], this.holes = [], this.shape = t, this.lineStyle = s, this.fillStyle = e, this.matrix = r, this.type = t.type;
    }
    yi.prototype.clone = function () { return new yi(this.shape, this.fillStyle, this.lineStyle, this.matrix); };
    yi.prototype.destroy = function () { this.shape = null, this.holes.length = 0, this.holes = null, this.points.length = 0, this.points = null, this.lineStyle = null, this.fillStyle = null; };
    return yi;
}());
var Oe = new j, Ma = /** @class */ (function (_super) {
    __extends(Ma, _super);
    function Ma() {
        var _this = this;
        _this = _super.call(this) || this, _this.closePointEps = 1e-4, _this.boundsPadding = 0, _this.uvsFloat32 = null, _this.indicesUint16 = null, _this.batchable = !1, _this.points = [], _this.colors = [], _this.uvs = [], _this.indices = [], _this.textureIds = [], _this.graphicsData = [], _this.drawCalls = [], _this.batchDirty = -1, _this.batches = [], _this.dirty = 0, _this.cacheDirty = -1, _this.clearDirty = 0, _this.shapeIndex = 0, _this._bounds = new ii, _this.boundsDirty = -1;
        return _this;
    }
    Object.defineProperty(Ma.prototype, "bounds", {
        get: function () { return this.updateBatches(), this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.calculateBounds()), this._bounds; },
        enumerable: false,
        configurable: true
    });
    Ma.prototype.invalidate = function () { this.boundsDirty = -1, this.dirty++, this.batchDirty++, this.shapeIndex = 0, this.points.length = 0, this.colors.length = 0, this.uvs.length = 0, this.indices.length = 0, this.textureIds.length = 0; for (var i = 0; i < this.drawCalls.length; i++)
        this.drawCalls[i].texArray.clear(), ui.push(this.drawCalls[i]); this.drawCalls.length = 0; for (var i = 0; i < this.batches.length; i++) {
        var t = this.batches[i];
        t.reset(), nn.push(t);
    } this.batches.length = 0; };
    Ma.prototype.clear = function () { return this.graphicsData.length > 0 && (this.invalidate(), this.clearDirty++, this.graphicsData.length = 0), this; };
    Ma.prototype.drawShape = function (i, t, e, s) {
        if (t === void 0) { t = null; }
        if (e === void 0) { e = null; }
        if (s === void 0) { s = null; }
        var r = new yi(i, t, e, s);
        return this.graphicsData.push(r), this.dirty++, this;
    };
    Ma.prototype.drawHole = function (i, t) {
        if (t === void 0) { t = null; }
        if (!this.graphicsData.length)
            return null;
        var e = new yi(i, null, null, t), s = this.graphicsData[this.graphicsData.length - 1];
        return e.lineStyle = s.lineStyle, s.holes.push(e), this.dirty++, this;
    };
    Ma.prototype.destroy = function () { _super.prototype.destroy.call(this); for (var i = 0; i < this.graphicsData.length; ++i)
        this.graphicsData[i].destroy(); this.points.length = 0, this.points = null, this.colors.length = 0, this.colors = null, this.uvs.length = 0, this.uvs = null, this.indices.length = 0, this.indices = null, this.indexBuffer.destroy(), this.indexBuffer = null, this.graphicsData.length = 0, this.graphicsData = null, this.drawCalls.length = 0, this.drawCalls = null, this.batches.length = 0, this.batches = null, this._bounds = null; };
    Ma.prototype.containsPoint = function (i) { var t = this.graphicsData; for (var e = 0; e < t.length; ++e) {
        var s = t[e];
        if (!!s.fillStyle.visible && s.shape && (s.matrix ? s.matrix.applyInverse(i, Oe) : Oe.copyFrom(i), s.shape.contains(Oe.x, Oe.y))) {
            var r = !1;
            if (s.holes) {
                for (var n = 0; n < s.holes.length; n++)
                    if (s.holes[n].shape.contains(Oe.x, Oe.y)) {
                        r = !0;
                        break;
                    }
            }
            if (!r)
                return !0;
        }
    } return !1; };
    Ma.prototype.updateBatches = function () { if (!this.graphicsData.length) {
        this.batchable = !0;
        return;
    } if (!this.validateBatching())
        return; this.cacheDirty = this.dirty; var i = this.uvs, t = this.graphicsData; var e = null, s = null; this.batches.length > 0 && (e = this.batches[this.batches.length - 1], s = e.style); for (var a = this.shapeIndex; a < t.length; a++) {
        this.shapeIndex++;
        var h = t[a], l = h.fillStyle, c = h.lineStyle;
        rs[h.type].build(h), h.matrix && this.transformPoints(h.points, h.matrix), (l.visible || c.visible) && this.processHoles(h.holes);
        for (var d = 0; d < 2; d++) {
            var f = d === 0 ? l : c;
            if (!f.visible)
                continue;
            var p = f.texture.baseTexture, m = this.indices.length, _ = this.points.length / 2;
            p.wrapMode = zt.REPEAT, d === 0 ? this.processFill(h) : this.processLine(h);
            var x = this.points.length / 2 - _;
            x !== 0 && (e && !this._compareStyles(s, f) && (e.end(m, _), e = null), e || (e = nn.pop() || new Pa, e.begin(f, m, _), this.batches.push(e), s = f), this.addUvs(this.points, i, f.texture, _, x, f.matrix));
        }
    } var r = this.indices.length, n = this.points.length / 2; if (e && e.end(r, n), this.batches.length === 0) {
        this.batchable = !0;
        return;
    } var o = n > 65535; this.indicesUint16 && this.indices.length === this.indicesUint16.length && o === this.indicesUint16.BYTES_PER_ELEMENT > 2 ? this.indicesUint16.set(this.indices) : this.indicesUint16 = o ? new Uint32Array(this.indices) : new Uint16Array(this.indices), this.batchable = this.isBatchable(), this.batchable ? this.packBatches() : this.buildDrawCalls(); };
    Ma.prototype._compareStyles = function (i, t) { return !(!i || !t || i.texture.baseTexture !== t.texture.baseTexture || i.color + i.alpha !== t.color + t.alpha || !!i.native != !!t.native); };
    Ma.prototype.validateBatching = function () { if (this.dirty === this.cacheDirty || !this.graphicsData.length)
        return !1; for (var i = 0, t = this.graphicsData.length; i < t; i++) {
        var e = this.graphicsData[i], s = e.fillStyle, r = e.lineStyle;
        if (s && !s.texture.baseTexture.valid || r && !r.texture.baseTexture.valid)
            return !1;
    } return !0; };
    Ma.prototype.packBatches = function () { this.batchDirty++, this.uvsFloat32 = new Float32Array(this.uvs); var i = this.batches; for (var t = 0, e = i.length; t < e; t++) {
        var s = i[t];
        for (var r = 0; r < s.size; r++) {
            var n = s.start + r;
            this.indicesUint16[n] = this.indicesUint16[n] - s.attribStart;
        }
    } };
    Ma.prototype.isBatchable = function () { if (this.points.length > 65535 * 2)
        return !1; var i = this.batches; for (var t = 0; t < i.length; t++)
        if (i[t].style.native)
            return !1; return this.points.length < Ma.BATCHABLE_SIZE * 2; };
    Ma.prototype.buildDrawCalls = function () { var i = ++W._globalBatch; for (var c = 0; c < this.drawCalls.length; c++)
        this.drawCalls[c].texArray.clear(), ui.push(this.drawCalls[c]); this.drawCalls.length = 0; var t = this.colors, e = this.textureIds; var s = ui.pop(); s || (s = new qi, s.texArray = new Ki), s.texArray.count = 0, s.start = 0, s.size = 0, s.type = Pt.TRIANGLES; var r = 0, n = null, o = 0, a = !1, h = Pt.TRIANGLES, l = 0; this.drawCalls.push(s); for (var c = 0; c < this.batches.length; c++) {
        var u = this.batches[c], d = 8, f = u.style, p = f.texture.baseTexture;
        a !== !!f.native && (a = !!f.native, h = a ? Pt.LINES : Pt.TRIANGLES, n = null, r = d, i++), n !== p && (n = p, p._batchEnabled !== i && (r === d && (i++, r = 0, s.size > 0 && (s = ui.pop(), s || (s = new qi, s.texArray = new Ki), this.drawCalls.push(s)), s.start = l, s.size = 0, s.texArray.count = 0, s.type = h), p.touched = 1, p._batchEnabled = i, p._batchLocation = r, p.wrapMode = zt.REPEAT, s.texArray.elements[s.texArray.count++] = p, r++)), s.size += u.size, l += u.size, o = p._batchLocation, this.addColors(t, f.color, f.alpha, u.attribSize, u.attribStart), this.addTextureIds(e, o, u.attribSize, u.attribStart);
    } W._globalBatch = i, this.packAttributes(); };
    Ma.prototype.packAttributes = function () { var i = this.points, t = this.uvs, e = this.colors, s = this.textureIds, r = new ArrayBuffer(i.length * 3 * 4), n = new Float32Array(r), o = new Uint32Array(r); var a = 0; for (var h = 0; h < i.length / 2; h++)
        n[a++] = i[h * 2], n[a++] = i[h * 2 + 1], n[a++] = t[h * 2], n[a++] = t[h * 2 + 1], o[a++] = e[h], n[a++] = s[h]; this._buffer.update(r), this._indexBuffer.update(this.indicesUint16); };
    Ma.prototype.processFill = function (i) { i.holes.length ? en.triangulate(i, this) : rs[i.type].triangulate(i, this); };
    Ma.prototype.processLine = function (i) { sn(i, this); for (var t = 0; t < i.holes.length; t++)
        sn(i.holes[t], this); };
    Ma.prototype.processHoles = function (i) { for (var t = 0; t < i.length; t++) {
        var e = i[t];
        rs[e.type].build(e), e.matrix && this.transformPoints(e.points, e.matrix);
    } };
    Ma.prototype.calculateBounds = function () { var i = this._bounds; i.clear(), i.addVertexData(this.points, 0, this.points.length), i.pad(this.boundsPadding, this.boundsPadding); };
    Ma.prototype.transformPoints = function (i, t) { for (var e = 0; e < i.length / 2; e++) {
        var s = i[e * 2], r = i[e * 2 + 1];
        i[e * 2] = t.a * s + t.c * r + t.tx, i[e * 2 + 1] = t.b * s + t.d * r + t.ty;
    } };
    Ma.prototype.addColors = function (i, t, e, s, r) {
        if (r === void 0) { r = 0; }
        var n = (t >> 16) + (t & 65280) + ((t & 255) << 16), o = Di(n, e);
        i.length = Math.max(i.length, r + s);
        for (var a = 0; a < s; a++)
            i[r + a] = o;
    };
    Ma.prototype.addTextureIds = function (i, t, e, s) {
        if (s === void 0) { s = 0; }
        i.length = Math.max(i.length, s + e);
        for (var r = 0; r < e; r++)
            i[s + r] = t;
    };
    Ma.prototype.addUvs = function (i, t, e, s, r, n) {
        if (n === void 0) { n = null; }
        var o = 0;
        var a = t.length, h = e.frame;
        for (; o < r;) {
            var c = i[(s + o) * 2], u = i[(s + o) * 2 + 1];
            if (n) {
                var d = n.a * c + n.c * u + n.tx;
                u = n.b * c + n.d * u + n.ty, c = d;
            }
            o++, t.push(c / h.width, u / h.height);
        }
        var l = e.baseTexture;
        (h.width < l.width || h.height < l.height) && this.adjustUvs(t, e, a, r);
    };
    Ma.prototype.adjustUvs = function (i, t, e, s) { var r = t.baseTexture, n = 1e-6, o = e + s * 2, a = t.frame, h = a.width / r.width, l = a.height / r.height; var c = a.x / a.width, u = a.y / a.height, d = Math.floor(i[e] + n), f = Math.floor(i[e + 1] + n); for (var p = e + 2; p < o; p += 2)
        d = Math.min(d, Math.floor(i[p] + n)), f = Math.min(f, Math.floor(i[p + 1] + n)); c -= d, u -= f; for (var p = e; p < o; p += 2)
        i[p] = (i[p] + c) * h, i[p + 1] = (i[p + 1] + u) * l; };
    return Ma;
}(Fr));
var on = Ma;
on.BATCHABLE_SIZE = 100;
var ys = /** @class */ (function (_super) {
    __extends(ys, _super);
    function ys() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.width = 0, _this.alignment = .5, _this.native = !1, _this.cap = ae.BUTT, _this.join = Jt.MITER, _this.miterLimit = 10;
        return _this;
    }
    ys.prototype.clone = function () { var t = new ys; return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t.width = this.width, t.alignment = this.alignment, t.native = this.native, t.cap = this.cap, t.join = this.join, t.miterLimit = this.miterLimit, t; };
    ys.prototype.reset = function () { _super.prototype.reset.call(this), this.color = 0, this.alignment = .5, this.width = 0, this.native = !1; };
    return ys;
}(vi));
var Jf = new Float32Array(3), an = {}, ns = /** @class */ (function (_super) {
    __extends(ns, _super);
    function ns(i) {
        if (i === void 0) { i = null; }
        var _this = this;
        _this = _super.call(this) || this, _this.shader = null, _this.pluginName = "batch", _this.currentPath = null, _this.batches = [], _this.batchTint = -1, _this.batchDirty = -1, _this.vertexData = null, _this._fillStyle = new vi, _this._lineStyle = new ys, _this._matrix = null, _this._holeMode = !1, _this.state = Yt.for2d(), _this._geometry = i || new on, _this._geometry.refCount++, _this._transformID = -1, _this.tint = 16777215, _this.blendMode = k.NORMAL;
        return _this;
    }
    Object.defineProperty(ns.prototype, "geometry", {
        get: function () { return this._geometry; },
        enumerable: false,
        configurable: true
    });
    ns.prototype.clone = function () { return this.finishPoly(), new ns(this._geometry); };
    Object.defineProperty(ns.prototype, "blendMode", {
        get: function () { return this.state.blendMode; },
        set: function (i) { this.state.blendMode = i; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ns.prototype, "tint", {
        get: function () { return this._tint; },
        set: function (i) { this._tint = i; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ns.prototype, "fill", {
        get: function () { return this._fillStyle; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ns.prototype, "line", {
        get: function () { return this._lineStyle; },
        enumerable: false,
        configurable: true
    });
    ns.prototype.lineStyle = function (i, t, e, s, r) {
        if (i === void 0) { i = null; }
        if (t === void 0) { t = 0; }
        if (e === void 0) { e = 1; }
        if (s === void 0) { s = .5; }
        if (r === void 0) { r = !1; }
        return typeof i == "number" && (i = { width: i, color: t, alpha: e, alignment: s, native: r }), this.lineTextureStyle(i);
    };
    ns.prototype.lineTextureStyle = function (i) { i = Object.assign({ width: 0, texture: B.WHITE, color: i != null && i.texture ? 16777215 : 0, alpha: 1, matrix: null, alignment: .5, native: !1, cap: ae.BUTT, join: Jt.MITER, miterLimit: 10 }, i), this.currentPath && this.startPoly(); var t = i.width > 0 && i.alpha > 0; return t ? (i.matrix && (i.matrix = i.matrix.clone(), i.matrix.invert()), Object.assign(this._lineStyle, { visible: t }, i)) : this._lineStyle.reset(), this; };
    ns.prototype.startPoly = function () { if (this.currentPath) {
        var i = this.currentPath.points, t = this.currentPath.points.length;
        t > 2 && (this.drawShape(this.currentPath), this.currentPath = new Ae, this.currentPath.closeStroke = !1, this.currentPath.points.push(i[t - 2], i[t - 1]));
    }
    else
        this.currentPath = new Ae, this.currentPath.closeStroke = !1; };
    ns.prototype.finishPoly = function () { this.currentPath && (this.currentPath.points.length > 2 ? (this.drawShape(this.currentPath), this.currentPath = null) : this.currentPath.points.length = 0); };
    ns.prototype.moveTo = function (i, t) { return this.startPoly(), this.currentPath.points[0] = i, this.currentPath.points[1] = t, this; };
    ns.prototype.lineTo = function (i, t) { this.currentPath || this.moveTo(0, 0); var e = this.currentPath.points, s = e[e.length - 2], r = e[e.length - 1]; return (s !== i || r !== t) && e.push(i, t), this; };
    ns.prototype._initCurve = function (i, t) {
        if (i === void 0) { i = 0; }
        if (t === void 0) { t = 0; }
        this.currentPath ? this.currentPath.points.length === 0 && (this.currentPath.points = [i, t]) : this.moveTo(i, t);
    };
    ns.prototype.quadraticCurveTo = function (i, t, e, s) { this._initCurve(); var r = this.currentPath.points; return r.length === 0 && this.moveTo(0, 0), vs.curveTo(i, t, e, s, r), this; };
    ns.prototype.bezierCurveTo = function (i, t, e, s, r, n) { return this._initCurve(), xs.curveTo(i, t, e, s, r, n, this.currentPath.points), this; };
    ns.prototype.arcTo = function (i, t, e, s, r) { this._initCurve(i, t); var n = this.currentPath.points, o = rn.curveTo(i, t, e, s, r, n); if (o) {
        var a = o.cx, h = o.cy, l = o.radius, c = o.startAngle, u = o.endAngle, d = o.anticlockwise;
        this.arc(a, h, l, c, u, d);
    } return this; };
    ns.prototype.arc = function (i, t, e, s, r, n) {
        if (n === void 0) { n = !1; }
        if (s === r)
            return this;
        if (!n && r <= s ? r += Xe : n && s <= r && (s += Xe), r - s === 0)
            return this;
        var a = i + Math.cos(s) * e, h = t + Math.sin(s) * e, l = this._geometry.closePointEps;
        var c = this.currentPath ? this.currentPath.points : null;
        if (c) {
            var u = Math.abs(c[c.length - 2] - a), d = Math.abs(c[c.length - 1] - h);
            u < l && d < l || c.push(a, h);
        }
        else
            this.moveTo(a, h), c = this.currentPath.points;
        return rn.arc(a, h, i, t, e, s, r, n, c), this;
    };
    ns.prototype.beginFill = function (i, t) {
        if (i === void 0) { i = 0; }
        if (t === void 0) { t = 1; }
        return this.beginTextureFill({ texture: B.WHITE, color: i, alpha: t });
    };
    ns.prototype.beginTextureFill = function (i) { i = Object.assign({ texture: B.WHITE, color: 16777215, alpha: 1, matrix: null }, i), this.currentPath && this.startPoly(); var t = i.alpha > 0; return t ? (i.matrix && (i.matrix = i.matrix.clone(), i.matrix.invert()), Object.assign(this._fillStyle, { visible: t }, i)) : this._fillStyle.reset(), this; };
    ns.prototype.endFill = function () { return this.finishPoly(), this._fillStyle.reset(), this; };
    ns.prototype.drawRect = function (i, t, e, s) { return this.drawShape(new V(i, t, e, s)); };
    ns.prototype.drawRoundedRect = function (i, t, e, s, r) { return this.drawShape(new gs(i, t, e, s, r)); };
    ns.prototype.drawCircle = function (i, t, e) { return this.drawShape(new ms(i, t, e)); };
    ns.prototype.drawEllipse = function (i, t, e, s) { return this.drawShape(new _s(i, t, e, s)); };
    ns.prototype.drawPolygon = function () {
        var i = [];
        for (var _b = 0; _b < arguments.length; _b++) {
            i[_b] = arguments[_b];
        }
        var t, e = !0;
        var s = i[0];
        s.points ? (e = s.closeStroke, t = s.points) : Array.isArray(i[0]) ? t = i[0] : t = i;
        var r = new Ae(t);
        return r.closeStroke = e, this.drawShape(r), this;
    };
    ns.prototype.drawShape = function (i) { return this._holeMode ? this._geometry.drawHole(i, this._matrix) : this._geometry.drawShape(i, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix), this; };
    ns.prototype.clear = function () { return this._geometry.clear(), this._lineStyle.reset(), this._fillStyle.reset(), this._boundsID++, this._matrix = null, this._holeMode = !1, this.currentPath = null, this; };
    ns.prototype.isFastRect = function () { var i = this._geometry.graphicsData; return i.length === 1 && i[0].shape.type === dt.RECT && !i[0].matrix && !i[0].holes.length && !(i[0].lineStyle.visible && i[0].lineStyle.width); };
    ns.prototype._render = function (i) { this.finishPoly(); var t = this._geometry; t.updateBatches(), t.batchable ? (this.batchDirty !== t.batchDirty && this._populateBatches(), this._renderBatched(i)) : (i.batch.flush(), this._renderDirect(i)); };
    ns.prototype._populateBatches = function () { var i = this._geometry, t = this.blendMode, e = i.batches.length; this.batchTint = -1, this._transformID = -1, this.batchDirty = i.batchDirty, this.batches.length = e, this.vertexData = new Float32Array(i.points); for (var s = 0; s < e; s++) {
        var r = i.batches[s], n = r.style.color, o = new Float32Array(this.vertexData.buffer, r.attribStart * 4 * 2, r.attribSize * 2), a = new Float32Array(i.uvsFloat32.buffer, r.attribStart * 4 * 2, r.attribSize * 2), h = new Uint16Array(i.indicesUint16.buffer, r.start * 2, r.size), l = { vertexData: o, blendMode: t, indices: h, uvs: a, _batchRGB: _e(n), _tintRGB: n, _texture: r.style.texture, alpha: r.style.alpha, worldAlpha: 1 };
        this.batches[s] = l;
    } };
    ns.prototype._renderBatched = function (i) { if (!!this.batches.length) {
        i.batch.setObjectRenderer(i.plugins[this.pluginName]), this.calculateVertices(), this.calculateTints();
        for (var t = 0, e = this.batches.length; t < e; t++) {
            var s = this.batches[t];
            s.worldAlpha = this.worldAlpha * s.alpha, i.plugins[this.pluginName].render(s);
        }
    } };
    ns.prototype._renderDirect = function (i) { var t = this._resolveDirectShader(i), e = this._geometry, s = this.tint, r = this.worldAlpha, n = t.uniforms, o = e.drawCalls; n.translationMatrix = this.transform.worldTransform, n.tint[0] = (s >> 16 & 255) / 255 * r, n.tint[1] = (s >> 8 & 255) / 255 * r, n.tint[2] = (s & 255) / 255 * r, n.tint[3] = r, i.shader.bind(t), i.geometry.bind(e, t), i.state.set(this.state); for (var a = 0, h = o.length; a < h; a++)
        this._renderDrawCallDirect(i, e.drawCalls[a]); };
    ns.prototype._renderDrawCallDirect = function (i, t) { var e = t.texArray, s = t.type, r = t.size, n = t.start, o = e.count; for (var a = 0; a < o; a++)
        i.texture.bind(e.elements[a], a); i.geometry.draw(s, r, n); };
    ns.prototype._resolveDirectShader = function (i) { var t = this.shader; var e = this.pluginName; if (!t) {
        if (!an[e]) {
            var s = i.plugins[e].MAX_TEXTURES, r = new Int32Array(s);
            for (var a = 0; a < s; a++)
                r[a] = a;
            var n = { tint: new Float32Array([1, 1, 1, 1]), translationMatrix: new Z, default: It.from({ uSamplers: r }, !0) }, o = i.plugins[e]._shader.program;
            an[e] = new kt(o, n);
        }
        t = an[e];
    } return t; };
    ns.prototype._calculateBounds = function () { this.finishPoly(); var i = this._geometry; if (!i.graphicsData.length)
        return; var _b = i.bounds, t = _b.minX, e = _b.minY, s = _b.maxX, r = _b.maxY; this._bounds.addFrame(this.transform, t, e, s, r); };
    ns.prototype.containsPoint = function (i) { return this.worldTransform.applyInverse(i, ns._TEMP_POINT), this._geometry.containsPoint(ns._TEMP_POINT); };
    ns.prototype.calculateTints = function () { if (this.batchTint !== this.tint) {
        this.batchTint = this.tint;
        var i = _e(this.tint, Jf);
        for (var t = 0; t < this.batches.length; t++) {
            var e = this.batches[t], s = e._batchRGB, r = i[0] * s[0] * 255, n = i[1] * s[1] * 255, o = i[2] * s[2] * 255, a = (r << 16) + (n << 8) + (o | 0);
            e._tintRGB = (a >> 16) + (a & 65280) + ((a & 255) << 16);
        }
    } };
    ns.prototype.calculateVertices = function () { var i = this.transform._worldID; if (this._transformID === i)
        return; this._transformID = i; var t = this.transform.worldTransform, e = t.a, s = t.b, r = t.c, n = t.d, o = t.tx, a = t.ty, h = this._geometry.points, l = this.vertexData; var c = 0; for (var u = 0; u < h.length; u += 2) {
        var d = h[u], f = h[u + 1];
        l[c++] = e * d + r * f + o, l[c++] = n * f + s * d + a;
    } };
    ns.prototype.closePath = function () { var i = this.currentPath; return i && (i.closeStroke = !0, this.finishPoly()), this; };
    ns.prototype.setMatrix = function (i) { return this._matrix = i, this; };
    ns.prototype.beginHole = function () { return this.finishPoly(), this._holeMode = !0, this; };
    ns.prototype.endHole = function () { return this.finishPoly(), this._holeMode = !1, this; };
    ns.prototype.destroy = function (i) { this._geometry.refCount--, this._geometry.refCount === 0 && this._geometry.dispose(), this._matrix = null, this.currentPath = null, this._lineStyle.destroy(), this._lineStyle = null, this._fillStyle.destroy(), this._fillStyle = null, this._geometry = null, this.shader = null, this.vertexData = null, this.batches.length = 0, this.batches = null, _super.prototype.destroy.call(this, i); };
    return ns;
}(wt));
var os = ns;
os._TEMP_POINT = new j;
var tp = { buildPoly: en, buildCircle: ci, buildRectangle: Ra, buildRoundedRectangle: Ca, buildLine: sn, ArcUtils: rn, BezierUtils: xs, QuadraticUtils: vs, BatchPart: Pa, FILL_COMMANDS: rs, BATCH_POOL: nn, DRAW_CALL_POOL: ui };
var Ba = /** @class */ (function () {
    function Ba(t, e) {
        this.uvBuffer = t, this.uvMatrix = e, this.data = null, this._bufferUpdateId = -1, this._textureUpdateId = -1, this._updateID = 0;
    }
    Ba.prototype.update = function (t) { if (!t && this._bufferUpdateId === this.uvBuffer._updateID && this._textureUpdateId === this.uvMatrix._updateID)
        return; this._bufferUpdateId = this.uvBuffer._updateID, this._textureUpdateId = this.uvMatrix._updateID; var e = this.uvBuffer.data; (!this.data || this.data.length !== e.length) && (this.data = new Float32Array(e.length)), this.uvMatrix.multiplyUvs(e, this.data), this._updateID++; };
    return Ba;
}());
var hn = new j, Da = new Ae, Na = /** @class */ (function (_super) {
    __extends(Na, _super);
    function Na(i, t, e, s) {
        if (s === void 0) { s = Pt.TRIANGLES; }
        var _this = this;
        _this = _super.call(this) || this, _this.geometry = i, _this.shader = t, _this.state = e || Yt.for2d(), _this.drawMode = s, _this.start = 0, _this.size = 0, _this.uvs = null, _this.indices = null, _this.vertexData = new Float32Array(1), _this.vertexDirty = -1, _this._transformID = -1, _this._roundPixels = w.ROUND_PIXELS, _this.batchUvs = null;
        return _this;
    }
    Object.defineProperty(Na.prototype, "geometry", {
        get: function () { return this._geometry; },
        set: function (i) { this._geometry !== i && (this._geometry && (this._geometry.refCount--, this._geometry.refCount === 0 && this._geometry.dispose()), this._geometry = i, this._geometry && this._geometry.refCount++, this.vertexDirty = -1); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Na.prototype, "uvBuffer", {
        get: function () { return this.geometry.buffers[1]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Na.prototype, "verticesBuffer", {
        get: function () { return this.geometry.buffers[0]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Na.prototype, "material", {
        get: function () { return this.shader; },
        set: function (i) { this.shader = i; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Na.prototype, "blendMode", {
        get: function () { return this.state.blendMode; },
        set: function (i) { this.state.blendMode = i; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Na.prototype, "roundPixels", {
        get: function () { return this._roundPixels; },
        set: function (i) { this._roundPixels !== i && (this._transformID = -1), this._roundPixels = i; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Na.prototype, "tint", {
        get: function () { return "tint" in this.shader ? this.shader.tint : null; },
        set: function (i) { this.shader.tint = i; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Na.prototype, "texture", {
        get: function () { return "texture" in this.shader ? this.shader.texture : null; },
        set: function (i) { this.shader.texture = i; },
        enumerable: false,
        configurable: true
    });
    Na.prototype._render = function (i) { var t = this.geometry.buffers[0].data; this.shader.batchable && this.drawMode === Pt.TRIANGLES && t.length < Na.BATCHABLE_SIZE * 2 ? this._renderToBatch(i) : this._renderDefault(i); };
    Na.prototype._renderDefault = function (i) { var t = this.shader; t.alpha = this.worldAlpha, t.update && t.update(), i.batch.flush(), t.uniforms.translationMatrix = this.transform.worldTransform.toArray(!0), i.shader.bind(t), i.state.set(this.state), i.geometry.bind(this.geometry, t), i.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount); };
    Na.prototype._renderToBatch = function (i) { var t = this.geometry, e = this.shader; e.uvMatrix && (e.uvMatrix.update(), this.calculateUvs()), this.calculateVertices(), this.indices = t.indexBuffer.data, this._tintRGB = e._tintRGB, this._texture = e.texture; var s = this.material.pluginName; i.batch.setObjectRenderer(i.plugins[s]), i.plugins[s].render(this); };
    Na.prototype.calculateVertices = function () { var t = this.geometry.buffers[0], e = t.data, s = t._updateID; if (s === this.vertexDirty && this._transformID === this.transform._worldID)
        return; this._transformID = this.transform._worldID, this.vertexData.length !== e.length && (this.vertexData = new Float32Array(e.length)); var r = this.transform.worldTransform, n = r.a, o = r.b, a = r.c, h = r.d, l = r.tx, c = r.ty, u = this.vertexData; for (var d = 0; d < u.length / 2; d++) {
        var f = e[d * 2], p = e[d * 2 + 1];
        u[d * 2] = n * f + a * p + l, u[d * 2 + 1] = o * f + h * p + c;
    } if (this._roundPixels) {
        var d = w.RESOLUTION;
        for (var f = 0; f < u.length; ++f)
            u[f] = Math.round(u[f] * d) / d;
    } this.vertexDirty = s; };
    Na.prototype.calculateUvs = function () { var i = this.geometry.buffers[1], t = this.shader; t.uvMatrix.isSimple ? this.uvs = i.data : (this.batchUvs || (this.batchUvs = new Ba(i, t.uvMatrix)), this.batchUvs.update(), this.uvs = this.batchUvs.data); };
    Na.prototype._calculateBounds = function () { this.calculateVertices(), this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length); };
    Na.prototype.containsPoint = function (i) { if (!this.getBounds().contains(i.x, i.y))
        return !1; this.worldTransform.applyInverse(i, hn); var t = this.geometry.getBuffer("aVertexPosition").data, e = Da.points, s = this.geometry.getIndex().data, r = s.length, n = this.drawMode === 4 ? 3 : 1; for (var o = 0; o + 2 < r; o += n) {
        var a = s[o] * 2, h = s[o + 1] * 2, l = s[o + 2] * 2;
        if (e[0] = t[a], e[1] = t[a + 1], e[2] = t[h], e[3] = t[h + 1], e[4] = t[l], e[5] = t[l + 1], Da.contains(hn.x, hn.y))
            return !0;
    } return !1; };
    Na.prototype.destroy = function (i) { _super.prototype.destroy.call(this, i), this._cachedTexture && (this._cachedTexture.destroy(), this._cachedTexture = null), this.geometry = null, this.shader = null, this.state = null, this.uvs = null, this.indices = null, this.vertexData = null; };
    return Na;
}(wt));
var we = Na;
we.BATCHABLE_SIZE = 100;
var ep = "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n", ip = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTextureMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\n}\n";
var ke = /** @class */ (function (_super) {
    __extends(ke, _super);
    function ke(t, e) {
        var _this = this;
        var s = { uSampler: t, alpha: 1, uTextureMatrix: Z.IDENTITY, uColor: new Float32Array([1, 1, 1, 1]) };
        e = Object.assign({ tint: 16777215, alpha: 1, pluginName: "batch" }, e), e.uniforms && Object.assign(s, e.uniforms), _this = _super.call(this, e.program || $t.from(ip, ep), s) || this, _this._colorDirty = !1, _this.uvMatrix = new Wi(t), _this.batchable = e.program === void 0, _this.pluginName = e.pluginName, _this.tint = e.tint, _this.alpha = e.alpha;
        return _this;
    }
    Object.defineProperty(ke.prototype, "texture", {
        get: function () { return this.uniforms.uSampler; },
        set: function (t) { this.uniforms.uSampler !== t && (!this.uniforms.uSampler.baseTexture.alphaMode != !t.baseTexture.alphaMode && (this._colorDirty = !0), this.uniforms.uSampler = t, this.uvMatrix.texture = t); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ke.prototype, "alpha", {
        get: function () { return this._alpha; },
        set: function (t) { t !== this._alpha && (this._alpha = t, this._colorDirty = !0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ke.prototype, "tint", {
        get: function () { return this._tint; },
        set: function (t) { t !== this._tint && (this._tint = t, this._tintRGB = (t >> 16) + (t & 65280) + ((t & 255) << 16), this._colorDirty = !0); },
        enumerable: false,
        configurable: true
    });
    ke.prototype.update = function () { if (this._colorDirty) {
        this._colorDirty = !1;
        var t = this.texture.baseTexture;
        Vs(this._tint, this._alpha, this.uniforms.uColor, t.alphaMode);
    } this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord); };
    return ke;
}(kt));
var di = /** @class */ (function (_super) {
    __extends(di, _super);
    function di(t, e, s) {
        var _this = _super.call(this) || this;
        var r = new rt(t), n = new rt(e, !0), o = new rt(s, !0, !0);
        _this.addAttribute("aVertexPosition", r, 2, !1, O.FLOAT).addAttribute("aTextureCoord", n, 2, !1, O.FLOAT).addIndex(o), _this._updateId = -1;
        return _this;
    }
    Object.defineProperty(di.prototype, "vertexDirtyId", {
        get: function () { return this.buffers[0]._updateID; },
        enumerable: false,
        configurable: true
    });
    return di;
}(se));
var Fa = /** @class */ (function (_super) {
    __extends(Fa, _super);
    function Fa(t, e, s, r) {
        if (t === void 0) { t = 100; }
        if (e === void 0) { e = 100; }
        if (s === void 0) { s = 10; }
        if (r === void 0) { r = 10; }
        var _this = this;
        _this = _super.call(this) || this, _this.segWidth = s, _this.segHeight = r, _this.width = t, _this.height = e, _this.build();
        return _this;
    }
    Fa.prototype.build = function () { var t = this.segWidth * this.segHeight, e = [], s = [], r = [], n = this.segWidth - 1, o = this.segHeight - 1, a = this.width / n, h = this.height / o; for (var c = 0; c < t; c++) {
        var u = c % this.segWidth, d = c / this.segWidth | 0;
        e.push(u * a, d * h), s.push(u / n, d / o);
    } var l = n * o; for (var c = 0; c < l; c++) {
        var u = c % n, d = c / n | 0, f = d * this.segWidth + u, p = d * this.segWidth + u + 1, m = (d + 1) * this.segWidth + u, _ = (d + 1) * this.segWidth + u + 1;
        r.push(f, p, m, p, _, m);
    } this.buffers[0].data = new Float32Array(e), this.buffers[1].data = new Float32Array(s), this.indexBuffer.data = new Uint16Array(r), this.buffers[0].update(), this.buffers[1].update(), this.indexBuffer.update(); };
    return Fa;
}(di));
var La = /** @class */ (function (_super) {
    __extends(La, _super);
    function La(t, e, s) {
        if (t === void 0) { t = 200; }
        if (s === void 0) { s = 0; }
        var _this = this;
        _this = _super.call(this, new Float32Array(e.length * 4), new Float32Array(e.length * 4), new Uint16Array((e.length - 1) * 6)) || this, _this.points = e, _this._width = t, _this.textureScale = s, _this.build();
        return _this;
    }
    Object.defineProperty(La.prototype, "width", {
        get: function () { return this._width; },
        enumerable: false,
        configurable: true
    });
    La.prototype.build = function () { var t = this.points; if (!t)
        return; var e = this.getBuffer("aVertexPosition"), s = this.getBuffer("aTextureCoord"), r = this.getIndex(); if (t.length < 1)
        return; e.data.length / 4 !== t.length && (e.data = new Float32Array(t.length * 4), s.data = new Float32Array(t.length * 4), r.data = new Uint16Array((t.length - 1) * 6)); var n = s.data, o = r.data; n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 1; var a = 0, h = t[0]; var l = this._width * this.textureScale, c = t.length; for (var d = 0; d < c; d++) {
        var f = d * 4;
        if (this.textureScale > 0) {
            var p = h.x - t[d].x, m = h.y - t[d].y, _ = Math.sqrt(p * p + m * m);
            h = t[d], a += _ / l;
        }
        else
            a = d / (c - 1);
        n[f] = a, n[f + 1] = 0, n[f + 2] = a, n[f + 3] = 1;
    } var u = 0; for (var d = 0; d < c - 1; d++) {
        var f = d * 2;
        o[u++] = f, o[u++] = f + 1, o[u++] = f + 2, o[u++] = f + 2, o[u++] = f + 1, o[u++] = f + 3;
    } s.update(), r.update(), this.updateVertices(); };
    La.prototype.updateVertices = function () { var t = this.points; if (t.length < 1)
        return; var e = t[0], s, r = 0, n = 0; var o = this.buffers[0].data, a = t.length; for (var h = 0; h < a; h++) {
        var l = t[h], c = h * 4;
        h < t.length - 1 ? s = t[h + 1] : s = l, n = -(s.x - e.x), r = s.y - e.y;
        var u = (1 - h / (a - 1)) * 10;
        u > 1 && (u = 1);
        var d = Math.sqrt(r * r + n * n), f = this.textureScale > 0 ? this.textureScale * this._width / 2 : this._width / 2;
        r /= d, n /= d, r *= f, n *= f, o[c] = l.x + r, o[c + 1] = l.y + n, o[c + 2] = l.x - r, o[c + 3] = l.y - n, e = l;
    } this.buffers[0].update(); };
    La.prototype.update = function () { this.textureScale > 0 ? this.build() : this.updateVertices(); };
    return La;
}(di));
var sp = /** @class */ (function (_super) {
    __extends(sp, _super);
    function sp(t, e, s) {
        if (s === void 0) { s = 0; }
        var _this = this;
        var r = new La(t.height, e, s), n = new ke(t);
        s > 0 && (t.baseTexture.wrapMode = zt.REPEAT), _this = _super.call(this, r, n) || this, _this.autoUpdate = !0;
        return _this;
    }
    sp.prototype._render = function (t) { var e = this.geometry; (this.autoUpdate || e._width !== this.shader.texture.height) && (e._width = this.shader.texture.height, e.update()), _super.prototype._render.call(this, t); };
    return sp;
}(we));
var Ua = /** @class */ (function (_super) {
    __extends(Ua, _super);
    function Ua(t, e, s) {
        var _this = this;
        var r = new Fa(t.width, t.height, e, s), n = new ke(B.WHITE);
        _this = _super.call(this, r, n) || this, _this.texture = t, _this.autoResize = !0;
        return _this;
    }
    Ua.prototype.textureUpdated = function () { this._textureID = this.shader.texture._updateID; var t = this.geometry, _b = this.shader.texture, e = _b.width, s = _b.height; this.autoResize && (t.width !== e || t.height !== s) && (t.width = this.shader.texture.width, t.height = this.shader.texture.height, t.build()); };
    Object.defineProperty(Ua.prototype, "texture", {
        get: function () { return this.shader.texture; },
        set: function (t) { this.shader.texture !== t && (this.shader.texture = t, this._textureID = -1, t.baseTexture.valid ? this.textureUpdated() : t.once("update", this.textureUpdated, this)); },
        enumerable: false,
        configurable: true
    });
    Ua.prototype._render = function (t) { this._textureID !== this.shader.texture._updateID && this.textureUpdated(), _super.prototype._render.call(this, t); };
    Ua.prototype.destroy = function (t) { this.shader.texture.off("update", this.textureUpdated, this), _super.prototype.destroy.call(this, t); };
    return Ua;
}(we));
var rp = /** @class */ (function (_super) {
    __extends(rp, _super);
    function rp(t, e, s, r, n) {
        if (t === void 0) { t = B.EMPTY; }
        var _this = this;
        var o = new di(e, s, r);
        o.getBuffer("aVertexPosition").static = !1;
        var a = new ke(t);
        _this = _super.call(this, o, a, null, n) || this, _this.autoUpdate = !0;
        return _this;
    }
    Object.defineProperty(rp.prototype, "vertices", {
        get: function () { return this.geometry.getBuffer("aVertexPosition").data; },
        set: function (t) { this.geometry.getBuffer("aVertexPosition").data = t; },
        enumerable: false,
        configurable: true
    });
    rp.prototype._render = function (t) { this.autoUpdate && this.geometry.getBuffer("aVertexPosition").update(), _super.prototype._render.call(this, t); };
    return rp;
}(we));
var as = 10;
var np = /** @class */ (function (_super) {
    __extends(np, _super);
    function np(t, e, s, r, n) {
        if (e === void 0) { e = as; }
        if (s === void 0) { s = as; }
        if (r === void 0) { r = as; }
        if (n === void 0) { n = as; }
        var _this = this;
        _this = _super.call(this, B.WHITE, 4, 4) || this, _this._origWidth = t.orig.width, _this._origHeight = t.orig.height, _this._width = _this._origWidth, _this._height = _this._origHeight, _this._leftWidth = e, _this._rightWidth = r, _this._topHeight = s, _this._bottomHeight = n, _this.texture = t;
        return _this;
    }
    np.prototype.textureUpdated = function () { this._textureID = this.shader.texture._updateID, this._refresh(); };
    Object.defineProperty(np.prototype, "vertices", {
        get: function () { return this.geometry.getBuffer("aVertexPosition").data; },
        set: function (t) { this.geometry.getBuffer("aVertexPosition").data = t; },
        enumerable: false,
        configurable: true
    });
    np.prototype.updateHorizontalVertices = function () { var t = this.vertices, e = this._getMinScale(); t[9] = t[11] = t[13] = t[15] = this._topHeight * e, t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight * e, t[25] = t[27] = t[29] = t[31] = this._height; };
    np.prototype.updateVerticalVertices = function () { var t = this.vertices, e = this._getMinScale(); t[2] = t[10] = t[18] = t[26] = this._leftWidth * e, t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth * e, t[6] = t[14] = t[22] = t[30] = this._width; };
    np.prototype._getMinScale = function () { var t = this._leftWidth + this._rightWidth, e = this._width > t ? 1 : this._width / t, s = this._topHeight + this._bottomHeight, r = this._height > s ? 1 : this._height / s; return Math.min(e, r); };
    Object.defineProperty(np.prototype, "width", {
        get: function () { return this._width; },
        set: function (t) { this._width = t, this._refresh(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(np.prototype, "height", {
        get: function () { return this._height; },
        set: function (t) { this._height = t, this._refresh(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(np.prototype, "leftWidth", {
        get: function () { return this._leftWidth; },
        set: function (t) { this._leftWidth = t, this._refresh(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(np.prototype, "rightWidth", {
        get: function () { return this._rightWidth; },
        set: function (t) { this._rightWidth = t, this._refresh(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(np.prototype, "topHeight", {
        get: function () { return this._topHeight; },
        set: function (t) { this._topHeight = t, this._refresh(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(np.prototype, "bottomHeight", {
        get: function () { return this._bottomHeight; },
        set: function (t) { this._bottomHeight = t, this._refresh(); },
        enumerable: false,
        configurable: true
    });
    np.prototype._refresh = function () { var t = this.texture, e = this.geometry.buffers[1].data; this._origWidth = t.orig.width, this._origHeight = t.orig.height; var s = 1 / this._origWidth, r = 1 / this._origHeight; e[0] = e[8] = e[16] = e[24] = 0, e[1] = e[3] = e[5] = e[7] = 0, e[6] = e[14] = e[22] = e[30] = 1, e[25] = e[27] = e[29] = e[31] = 1, e[2] = e[10] = e[18] = e[26] = s * this._leftWidth, e[4] = e[12] = e[20] = e[28] = 1 - s * this._rightWidth, e[9] = e[11] = e[13] = e[15] = r * this._topHeight, e[17] = e[19] = e[21] = e[23] = 1 - r * this._bottomHeight, this.updateHorizontalVertices(), this.updateVerticalVertices(), this.geometry.buffers[0].update(), this.geometry.buffers[1].update(); };
    return np;
}(Ua));
var op = /** @class */ (function (_super) {
    __extends(op, _super);
    function op(t, e, s, r) {
        if (t === void 0) { t = 1500; }
        if (s === void 0) { s = 16384; }
        if (r === void 0) { r = !1; }
        var _this = _super.call(this) || this;
        var n = 16384;
        s > n && (s = n), _this._properties = [!1, !0, !1, !1, !1], _this._maxSize = t, _this._batchSize = s, _this._buffers = null, _this._bufferUpdateIDs = [], _this._updateID = 0, _this.interactiveChildren = !1, _this.blendMode = k.NORMAL, _this.autoResize = r, _this.roundPixels = !0, _this.baseTexture = null, _this.setProperties(e), _this._tint = 0, _this.tintRgb = new Float32Array(4), _this.tint = 16777215;
        return _this;
    }
    op.prototype.setProperties = function (t) { t && (this._properties[0] = "vertices" in t || "scale" in t ? !!t.vertices || !!t.scale : this._properties[0], this._properties[1] = "position" in t ? !!t.position : this._properties[1], this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2], this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3], this._properties[4] = "tint" in t || "alpha" in t ? !!t.tint || !!t.alpha : this._properties[4]); };
    op.prototype.updateTransform = function () { this.displayObjectUpdateTransform(); };
    Object.defineProperty(op.prototype, "tint", {
        get: function () { return this._tint; },
        set: function (t) { this._tint = t, _e(t, this.tintRgb); },
        enumerable: false,
        configurable: true
    });
    op.prototype.render = function (t) {
        var _this = this;
        !this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable || (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.valid || this.baseTexture.once("update", function () { return _this.onChildrenChange(0); })), t.batch.setObjectRenderer(t.plugins.particle), t.plugins.particle.render(this));
    };
    op.prototype.onChildrenChange = function (t) { var e = Math.floor(t / this._batchSize); for (; this._bufferUpdateIDs.length < e;)
        this._bufferUpdateIDs.push(0); this._bufferUpdateIDs[e] = ++this._updateID; };
    op.prototype.dispose = function () { if (this._buffers) {
        for (var t = 0; t < this._buffers.length; ++t)
            this._buffers[t].destroy();
        this._buffers = null;
    } };
    op.prototype.destroy = function (t) { _super.prototype.destroy.call(this, t), this.dispose(), this._properties = null, this._buffers = null, this._bufferUpdateIDs = null; };
    return op;
}(wt));
var Oa = /** @class */ (function () {
    function Oa(t, e, s) {
        this.geometry = new se, this.indexBuffer = null, this.size = s, this.dynamicProperties = [], this.staticProperties = [];
        for (var r = 0; r < t.length; ++r) {
            var n = t[r];
            n = { attributeName: n.attributeName, size: n.size, uploadFunction: n.uploadFunction, type: n.type || O.FLOAT, offset: n.offset }, e[r] ? this.dynamicProperties.push(n) : this.staticProperties.push(n);
        }
        this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this._updateID = 0, this.initBuffers();
    }
    Oa.prototype.initBuffers = function () { var t = this.geometry; var e = 0; this.indexBuffer = new rt(to(this.size), !0, !0), t.addIndex(this.indexBuffer), this.dynamicStride = 0; for (var o = 0; o < this.dynamicProperties.length; ++o) {
        var a = this.dynamicProperties[o];
        a.offset = e, e += a.size, this.dynamicStride += a.size;
    } var s = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4); this.dynamicData = new Float32Array(s), this.dynamicDataUint32 = new Uint32Array(s), this.dynamicBuffer = new rt(this.dynamicData, !1, !1); var r = 0; this.staticStride = 0; for (var o = 0; o < this.staticProperties.length; ++o) {
        var a = this.staticProperties[o];
        a.offset = r, r += a.size, this.staticStride += a.size;
    } var n = new ArrayBuffer(this.size * this.staticStride * 4 * 4); this.staticData = new Float32Array(n), this.staticDataUint32 = new Uint32Array(n), this.staticBuffer = new rt(this.staticData, !0, !1); for (var o = 0; o < this.dynamicProperties.length; ++o) {
        var a = this.dynamicProperties[o];
        t.addAttribute(a.attributeName, this.dynamicBuffer, 0, a.type === O.UNSIGNED_BYTE, a.type, this.dynamicStride * 4, a.offset * 4);
    } for (var o = 0; o < this.staticProperties.length; ++o) {
        var a = this.staticProperties[o];
        t.addAttribute(a.attributeName, this.staticBuffer, 0, a.type === O.UNSIGNED_BYTE, a.type, this.staticStride * 4, a.offset * 4);
    } };
    Oa.prototype.uploadDynamic = function (t, e, s) { for (var r = 0; r < this.dynamicProperties.length; r++) {
        var n = this.dynamicProperties[r];
        n.uploadFunction(t, e, s, n.type === O.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, n.offset);
    } this.dynamicBuffer._updateID++; };
    Oa.prototype.uploadStatic = function (t, e, s) { for (var r = 0; r < this.staticProperties.length; r++) {
        var n = this.staticProperties[r];
        n.uploadFunction(t, e, s, n.type === O.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData, this.staticStride, n.offset);
    } this.staticBuffer._updateID++; };
    Oa.prototype.destroy = function () { this.indexBuffer = null, this.dynamicProperties = null, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this.staticProperties = null, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.geometry.destroy(); };
    return Oa;
}());
var ap = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n    gl_FragColor = color;\n}", hp = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nattribute vec2 aPositionCoord;\nattribute float aRotation;\n\nuniform mat3 translationMatrix;\nuniform vec4 uColor;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void){\n    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);\n    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);\n\n    vec2 v = vec2(x, y);\n    v = v + aPositionCoord;\n\n    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vColor = aColor * uColor;\n}\n";
var ln = /** @class */ (function (_super) {
    __extends(ln, _super);
    function ln(t) {
        var _this = this;
        _this = _super.call(this, t) || this, _this.shader = null, _this.properties = null, _this.tempMatrix = new Z, _this.properties = [{ attributeName: "aVertexPosition", size: 2, uploadFunction: _this.uploadVertices, offset: 0 }, { attributeName: "aPositionCoord", size: 2, uploadFunction: _this.uploadPosition, offset: 0 }, { attributeName: "aRotation", size: 1, uploadFunction: _this.uploadRotation, offset: 0 }, { attributeName: "aTextureCoord", size: 2, uploadFunction: _this.uploadUvs, offset: 0 }, { attributeName: "aColor", size: 1, type: O.UNSIGNED_BYTE, uploadFunction: _this.uploadTint, offset: 0 }], _this.shader = kt.from(hp, ap, {}), _this.state = Yt.for2d();
        return _this;
    }
    ln.prototype.render = function (t) { var e = t.children, s = t._maxSize, r = t._batchSize, n = this.renderer; var o = e.length; if (o === 0)
        return; o > s && !t.autoResize && (o = s); var a = t._buffers; a || (a = t._buffers = this.generateBuffers(t)); var h = e[0]._texture.baseTexture, l = h.alphaMode > 0; this.state.blendMode = Xs(t.blendMode, l), n.state.set(this.state); var c = n.gl, u = t.worldTransform.copyTo(this.tempMatrix); u.prepend(n.globalUniforms.uniforms.projectionMatrix), this.shader.uniforms.translationMatrix = u.toArray(!0), this.shader.uniforms.uColor = Jn(t.tintRgb, t.worldAlpha, this.shader.uniforms.uColor, l), this.shader.uniforms.uSampler = h, this.renderer.shader.bind(this.shader); var d = !1; for (var f = 0, p = 0; f < o; f += r, p += 1) {
        var m = o - f;
        m > r && (m = r), p >= a.length && a.push(this._generateOneMoreBuffer(t));
        var _ = a[p];
        _.uploadDynamic(e, f, m);
        var x = t._bufferUpdateIDs[p] || 0;
        d = d || _._updateID < x, d && (_._updateID = t._updateID, _.uploadStatic(e, f, m)), n.geometry.bind(_.geometry), c.drawElements(c.TRIANGLES, m * 6, c.UNSIGNED_SHORT, 0);
    } };
    ln.prototype.generateBuffers = function (t) { var e = [], s = t._maxSize, r = t._batchSize, n = t._properties; for (var o = 0; o < s; o += r)
        e.push(new Oa(this.properties, n, r)); return e; };
    ln.prototype._generateOneMoreBuffer = function (t) { var e = t._batchSize, s = t._properties; return new Oa(this.properties, s, e); };
    ln.prototype.uploadVertices = function (t, e, s, r, n, o) { var a = 0, h = 0, l = 0, c = 0; for (var u = 0; u < s; ++u) {
        var d = t[e + u], f = d._texture, p = d.scale.x, m = d.scale.y, _ = f.trim, x = f.orig;
        _ ? (h = _.x - d.anchor.x * x.width, a = h + _.width, c = _.y - d.anchor.y * x.height, l = c + _.height) : (a = x.width * (1 - d.anchor.x), h = x.width * -d.anchor.x, l = x.height * (1 - d.anchor.y), c = x.height * -d.anchor.y), r[o] = h * p, r[o + 1] = c * m, r[o + n] = a * p, r[o + n + 1] = c * m, r[o + n * 2] = a * p, r[o + n * 2 + 1] = l * m, r[o + n * 3] = h * p, r[o + n * 3 + 1] = l * m, o += n * 4;
    } };
    ln.prototype.uploadPosition = function (t, e, s, r, n, o) { for (var a = 0; a < s; a++) {
        var h = t[e + a].position;
        r[o] = h.x, r[o + 1] = h.y, r[o + n] = h.x, r[o + n + 1] = h.y, r[o + n * 2] = h.x, r[o + n * 2 + 1] = h.y, r[o + n * 3] = h.x, r[o + n * 3 + 1] = h.y, o += n * 4;
    } };
    ln.prototype.uploadRotation = function (t, e, s, r, n, o) { for (var a = 0; a < s; a++) {
        var h = t[e + a].rotation;
        r[o] = h, r[o + n] = h, r[o + n * 2] = h, r[o + n * 3] = h, o += n * 4;
    } };
    ln.prototype.uploadUvs = function (t, e, s, r, n, o) { for (var a = 0; a < s; ++a) {
        var h = t[e + a]._texture._uvs;
        h ? (r[o] = h.x0, r[o + 1] = h.y0, r[o + n] = h.x1, r[o + n + 1] = h.y1, r[o + n * 2] = h.x2, r[o + n * 2 + 1] = h.y2, r[o + n * 3] = h.x3, r[o + n * 3 + 1] = h.y3, o += n * 4) : (r[o] = 0, r[o + 1] = 0, r[o + n] = 0, r[o + n + 1] = 0, r[o + n * 2] = 0, r[o + n * 2 + 1] = 0, r[o + n * 3] = 0, r[o + n * 3 + 1] = 0, o += n * 4);
    } };
    ln.prototype.uploadTint = function (t, e, s, r, n, o) { for (var a = 0; a < s; ++a) {
        var h = t[e + a], l = h._texture.baseTexture.alphaMode > 0, c = h.alpha, u = c < 1 && l ? Di(h._tintRGB, c) : h._tintRGB + (c * 255 << 24);
        r[o] = u, r[o + n] = u, r[o + n * 2] = u, r[o + n * 3] = u, o += n * 4;
    } };
    ln.prototype.destroy = function () { _super.prototype.destroy.call(this), this.shader && (this.shader.destroy(), this.shader = null), this.tempMatrix = null; };
    return ln;
}(Qe));
ln.extension = { name: "particle", type: P.RendererPlugin }, U.add(ln), w.UPLOADS_PER_FRAME = 4;
var fi = (function (i) { return (i[i.LINEAR_VERTICAL = 0] = "LINEAR_VERTICAL", i[i.LINEAR_HORIZONTAL = 1] = "LINEAR_HORIZONTAL", i); })(fi || {});
var cn = { align: "left", breakWords: !1, dropShadow: !1, dropShadowAlpha: 1, dropShadowAngle: Math.PI / 6, dropShadowBlur: 0, dropShadowColor: "black", dropShadowDistance: 5, fill: "black", fillGradientType: fi.LINEAR_VERTICAL, fillGradientStops: [], fontFamily: "Arial", fontSize: 26, fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", letterSpacing: 0, lineHeight: 0, lineJoin: "miter", miterLimit: 10, padding: 0, stroke: "black", strokeThickness: 0, textBaseline: "alphabetic", trim: !1, whiteSpace: "pre", wordWrap: !1, wordWrapWidth: 100, leading: 0 }, lp = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"];
var ie = /** @class */ (function () {
    function ie(t) {
        this.styleID = 0, this.reset(), dn(this, t, t);
    }
    ie.prototype.clone = function () { var t = {}; return dn(t, this, cn), new ie(t); };
    ie.prototype.reset = function () { dn(this, cn, cn); };
    Object.defineProperty(ie.prototype, "align", {
        get: function () { return this._align; },
        set: function (t) { this._align !== t && (this._align = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "breakWords", {
        get: function () { return this._breakWords; },
        set: function (t) { this._breakWords !== t && (this._breakWords = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "dropShadow", {
        get: function () { return this._dropShadow; },
        set: function (t) { this._dropShadow !== t && (this._dropShadow = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "dropShadowAlpha", {
        get: function () { return this._dropShadowAlpha; },
        set: function (t) { this._dropShadowAlpha !== t && (this._dropShadowAlpha = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "dropShadowAngle", {
        get: function () { return this._dropShadowAngle; },
        set: function (t) { this._dropShadowAngle !== t && (this._dropShadowAngle = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "dropShadowBlur", {
        get: function () { return this._dropShadowBlur; },
        set: function (t) { this._dropShadowBlur !== t && (this._dropShadowBlur = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "dropShadowColor", {
        get: function () { return this._dropShadowColor; },
        set: function (t) { var e = un(t); this._dropShadowColor !== e && (this._dropShadowColor = e, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "dropShadowDistance", {
        get: function () { return this._dropShadowDistance; },
        set: function (t) { this._dropShadowDistance !== t && (this._dropShadowDistance = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "fill", {
        get: function () { return this._fill; },
        set: function (t) { var e = un(t); this._fill !== e && (this._fill = e, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "fillGradientType", {
        get: function () { return this._fillGradientType; },
        set: function (t) { this._fillGradientType !== t && (this._fillGradientType = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "fillGradientStops", {
        get: function () { return this._fillGradientStops; },
        set: function (t) { cp(this._fillGradientStops, t) || (this._fillGradientStops = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "fontFamily", {
        get: function () { return this._fontFamily; },
        set: function (t) { this.fontFamily !== t && (this._fontFamily = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "fontSize", {
        get: function () { return this._fontSize; },
        set: function (t) { this._fontSize !== t && (this._fontSize = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "fontStyle", {
        get: function () { return this._fontStyle; },
        set: function (t) { this._fontStyle !== t && (this._fontStyle = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "fontVariant", {
        get: function () { return this._fontVariant; },
        set: function (t) { this._fontVariant !== t && (this._fontVariant = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "fontWeight", {
        get: function () { return this._fontWeight; },
        set: function (t) { this._fontWeight !== t && (this._fontWeight = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "letterSpacing", {
        get: function () { return this._letterSpacing; },
        set: function (t) { this._letterSpacing !== t && (this._letterSpacing = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "lineHeight", {
        get: function () { return this._lineHeight; },
        set: function (t) { this._lineHeight !== t && (this._lineHeight = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "leading", {
        get: function () { return this._leading; },
        set: function (t) { this._leading !== t && (this._leading = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "lineJoin", {
        get: function () { return this._lineJoin; },
        set: function (t) { this._lineJoin !== t && (this._lineJoin = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "miterLimit", {
        get: function () { return this._miterLimit; },
        set: function (t) { this._miterLimit !== t && (this._miterLimit = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "padding", {
        get: function () { return this._padding; },
        set: function (t) { this._padding !== t && (this._padding = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "stroke", {
        get: function () { return this._stroke; },
        set: function (t) { var e = un(t); this._stroke !== e && (this._stroke = e, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "strokeThickness", {
        get: function () { return this._strokeThickness; },
        set: function (t) { this._strokeThickness !== t && (this._strokeThickness = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "textBaseline", {
        get: function () { return this._textBaseline; },
        set: function (t) { this._textBaseline !== t && (this._textBaseline = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "trim", {
        get: function () { return this._trim; },
        set: function (t) { this._trim !== t && (this._trim = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "whiteSpace", {
        get: function () { return this._whiteSpace; },
        set: function (t) { this._whiteSpace !== t && (this._whiteSpace = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "wordWrap", {
        get: function () { return this._wordWrap; },
        set: function (t) { this._wordWrap !== t && (this._wordWrap = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "wordWrapWidth", {
        get: function () { return this._wordWrapWidth; },
        set: function (t) { this._wordWrapWidth !== t && (this._wordWrapWidth = t, this.styleID++); },
        enumerable: false,
        configurable: true
    });
    ie.prototype.toFontString = function () { var t = typeof this.fontSize == "number" ? "".concat(this.fontSize, "px") : this.fontSize; var e = this.fontFamily; Array.isArray(this.fontFamily) || (e = this.fontFamily.split(",")); for (var s = e.length - 1; s >= 0; s--) {
        var r = e[s].trim();
        !/([\"\'])[^\'\"]+\1/.test(r) && !lp.includes(r) && (r = "\"".concat(r, "\"")), e[s] = r;
    } return "".concat(this.fontStyle, " ").concat(this.fontVariant, " ").concat(this.fontWeight, " ").concat(t, " ").concat(e.join(",")); };
    return ie;
}());
function ka(i) { return typeof i == "number" ? Gs(i) : (typeof i == "string" && i.startsWith("0x") && (i = i.replace("0x", "#")), i); }
function un(i) { if (Array.isArray(i)) {
    for (var t = 0; t < i.length; ++t)
        i[t] = ka(i[t]);
    return i;
}
else
    return ka(i); }
function cp(i, t) { if (!Array.isArray(i) || !Array.isArray(t) || i.length !== t.length)
    return !1; for (var e = 0; e < i.length; ++e)
    if (i[e] !== t[e])
        return !1; return !0; }
function dn(i, t, e) { for (var s in e)
    Array.isArray(t[s]) ? i[s] = t[s].slice() : i[s] = t[s]; }
var hs = { willReadFrequently: !0 };
var F = /** @class */ (function () {
    function F(t, e, s, r, n, o, a, h, l) {
        this.text = t, this.style = e, this.width = s, this.height = r, this.lines = n, this.lineWidths = o, this.lineHeight = a, this.maxLineWidth = h, this.fontProperties = l;
    }
    F.measureText = function (t, e, s, r) {
        if (r === void 0) { r = F._canvas; }
        s = s == null ? e.wordWrap : s;
        var n = e.toFontString(), o = F.measureFont(n);
        o.fontSize === 0 && (o.fontSize = e.fontSize, o.ascent = e.fontSize);
        var a = r.getContext("2d", hs);
        a.font = n;
        var l = (s ? F.wordWrap(t, e, r) : t).split(/(?:\r\n|\r|\n)/), c = new Array(l.length);
        var u = 0;
        for (var m = 0; m < l.length; m++) {
            var _ = a.measureText(l[m]).width + (l[m].length - 1) * e.letterSpacing;
            c[m] = _, u = Math.max(u, _);
        }
        var d = u + e.strokeThickness;
        e.dropShadow && (d += e.dropShadowDistance);
        var f = e.lineHeight || o.fontSize + e.strokeThickness;
        var p = Math.max(f, o.fontSize + e.strokeThickness * 2) + (l.length - 1) * (f + e.leading);
        return e.dropShadow && (p += e.dropShadowDistance), new F(t, e, d, p, l, c, f + e.leading, u, o);
    };
    F.wordWrap = function (t, e, s) {
        if (s === void 0) { s = F._canvas; }
        var r = s.getContext("2d", hs);
        var n = 0, o = "", a = "";
        var h = Object.create(null), l = e.letterSpacing, c = e.whiteSpace, u = F.collapseSpaces(c), d = F.collapseNewlines(c);
        var f = !u;
        var p = e.wordWrapWidth + l, m = F.tokenize(t);
        for (var _ = 0; _ < m.length; _++) {
            var x = m[_];
            if (F.isNewline(x)) {
                if (!d) {
                    a += F.addLine(o), f = !u, o = "", n = 0;
                    continue;
                }
                x = " ";
            }
            if (u) {
                var g = F.isBreakingSpace(x), v = F.isBreakingSpace(o[o.length - 1]);
                if (g && v)
                    continue;
            }
            var y = F.getFromCache(x, l, h, r);
            if (y > p)
                if (o !== "" && (a += F.addLine(o), o = "", n = 0), F.canBreakWords(x, e.breakWords)) {
                    var g = F.wordWrapSplit(x);
                    for (var v = 0; v < g.length; v++) {
                        var T = g[v], M = 1;
                        for (; g[v + M];) {
                            var A = g[v + M], L = T[T.length - 1];
                            if (!F.canBreakChars(L, A, x, v, e.breakWords))
                                T += A;
                            else
                                break;
                            M++;
                        }
                        v += T.length - 1;
                        var R = F.getFromCache(T, l, h, r);
                        R + n > p && (a += F.addLine(o), f = !1, o = "", n = 0), o += T, n += R;
                    }
                }
                else {
                    o.length > 0 && (a += F.addLine(o), o = "", n = 0);
                    var g = _ === m.length - 1;
                    a += F.addLine(x, !g), f = !1, o = "", n = 0;
                }
            else
                y + n > p && (f = !1, a += F.addLine(o), o = "", n = 0), (o.length > 0 || !F.isBreakingSpace(x) || f) && (o += x, n += y);
        }
        return a += F.addLine(o, !1), a;
    };
    F.addLine = function (t, e) {
        if (e === void 0) { e = !0; }
        return t = F.trimRight(t), t = e ? "".concat(t, "\n") : t, t;
    };
    F.getFromCache = function (t, e, s, r) { var n = s[t]; if (typeof n != "number") {
        var o = t.length * e;
        n = r.measureText(t).width + o, s[t] = n;
    } return n; };
    F.collapseSpaces = function (t) { return t === "normal" || t === "pre-line"; };
    F.collapseNewlines = function (t) { return t === "normal"; };
    F.trimRight = function (t) { if (typeof t != "string")
        return ""; for (var e = t.length - 1; e >= 0; e--) {
        var s = t[e];
        if (!F.isBreakingSpace(s))
            break;
        t = t.slice(0, -1);
    } return t; };
    F.isNewline = function (t) { return typeof t != "string" ? !1 : F._newlines.includes(t.charCodeAt(0)); };
    F.isBreakingSpace = function (t, e) { return typeof t != "string" ? !1 : F._breakingSpaces.includes(t.charCodeAt(0)); };
    F.tokenize = function (t) { var e = []; var s = ""; if (typeof t != "string")
        return e; for (var r = 0; r < t.length; r++) {
        var n = t[r], o = t[r + 1];
        if (F.isBreakingSpace(n, o) || F.isNewline(n)) {
            s !== "" && (e.push(s), s = ""), e.push(n);
            continue;
        }
        s += n;
    } return s !== "" && e.push(s), e; };
    F.canBreakWords = function (t, e) { return e; };
    F.canBreakChars = function (t, e, s, r, n) { return !0; };
    F.wordWrapSplit = function (t) { return t.split(""); };
    F.measureFont = function (t) { if (F._fonts[t])
        return F._fonts[t]; var e = { ascent: 0, descent: 0, fontSize: 0 }, s = F._canvas, r = F._context; r.font = t; var n = F.METRICS_STRING + F.BASELINE_SYMBOL, o = Math.ceil(r.measureText(n).width); var a = Math.ceil(r.measureText(F.BASELINE_SYMBOL).width); var h = Math.ceil(F.HEIGHT_MULTIPLIER * a); a = a * F.BASELINE_MULTIPLIER | 0, s.width = o, s.height = h, r.fillStyle = "#f00", r.fillRect(0, 0, o, h), r.font = t, r.textBaseline = "alphabetic", r.fillStyle = "#000", r.fillText(n, 0, a); var l = r.getImageData(0, 0, o, h).data, c = l.length, u = o * 4; var d = 0, f = 0, p = !1; for (d = 0; d < a; ++d) {
        for (var m = 0; m < u; m += 4)
            if (l[f + m] !== 255) {
                p = !0;
                break;
            }
        if (!p)
            f += u;
        else
            break;
    } for (e.ascent = a - d, f = c - u, p = !1, d = h; d > a; --d) {
        for (var m = 0; m < u; m += 4)
            if (l[f + m] !== 255) {
                p = !0;
                break;
            }
        if (!p)
            f -= u;
        else
            break;
    } return e.descent = d - a, e.fontSize = e.ascent + e.descent, F._fonts[t] = e, e; };
    F.clearMetrics = function (t) {
        if (t === void 0) { t = ""; }
        t ? delete F._fonts[t] : F._fonts = {};
    };
    Object.defineProperty(F, "_canvas", {
        get: function () { if (!F.__canvas) {
            var t = void 0;
            try {
                var e = new OffscreenCanvas(0, 0), s = e.getContext("2d", hs);
                if (s != null && s.measureText)
                    return F.__canvas = e, e;
                t = w.ADAPTER.createCanvas();
            }
            catch (e) {
                t = w.ADAPTER.createCanvas();
            }
            t.width = t.height = 10, F.__canvas = t;
        } return F.__canvas; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(F, "_context", {
        get: function () { return F.__context || (F.__context = F._canvas.getContext("2d", hs)), F.__context; },
        enumerable: false,
        configurable: true
    });
    return F;
}());
F._fonts = {}, F.METRICS_STRING = "|\xC9q\xC5", F.BASELINE_SYMBOL = "M", F.BASELINE_MULTIPLIER = 1.4, F.HEIGHT_MULTIPLIER = 2, F._newlines = [10, 13], F._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288];
var up = { texture: !0, children: !1, baseTexture: !0 }, Ga = /** @class */ (function (_super) {
    __extends(Ga, _super);
    function Ga(i, t, e) {
        var _this = this;
        var s = !1;
        e || (e = w.ADAPTER.createCanvas(), s = !0), e.width = 3, e.height = 3;
        var r = B.from(e);
        r.orig = new V, r.trim = new V, _this = _super.call(this, r) || this, _this._ownCanvas = s, _this.canvas = e, _this.context = e.getContext("2d", { willReadFrequently: !0 }), _this._resolution = w.RESOLUTION, _this._autoResolution = !0, _this._text = null, _this._style = null, _this._styleListener = null, _this._font = "", _this.text = i, _this.style = t, _this.localStyleID = -1;
        return _this;
    }
    Ga.prototype.updateText = function (i) { var t = this._style; if (this.localStyleID !== t.styleID && (this.dirty = !0, this.localStyleID = t.styleID), !this.dirty && i)
        return; this._font = this._style.toFontString(); var e = this.context, s = F.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas), r = s.width, n = s.height, o = s.lines, a = s.lineHeight, h = s.lineWidths, l = s.maxLineWidth, c = s.fontProperties; this.canvas.width = Math.ceil(Math.ceil(Math.max(1, r) + t.padding * 2) * this._resolution), this.canvas.height = Math.ceil(Math.ceil(Math.max(1, n) + t.padding * 2) * this._resolution), e.scale(this._resolution, this._resolution), e.clearRect(0, 0, this.canvas.width, this.canvas.height), e.font = this._font, e.lineWidth = t.strokeThickness, e.textBaseline = t.textBaseline, e.lineJoin = t.lineJoin, e.miterLimit = t.miterLimit; var u, d; var f = t.dropShadow ? 2 : 1; for (var p = 0; p < f; ++p) {
        var m = t.dropShadow && p === 0, _ = m ? Math.ceil(Math.max(1, n) + t.padding * 2) : 0, x = _ * this._resolution;
        if (m) {
            e.fillStyle = "black", e.strokeStyle = "black";
            var g = t.dropShadowColor, v = _e(typeof g == "number" ? g : Bi(g)), T = t.dropShadowBlur * this._resolution, M = t.dropShadowDistance * this._resolution;
            e.shadowColor = "rgba(".concat(v[0] * 255, ",").concat(v[1] * 255, ",").concat(v[2] * 255, ",").concat(t.dropShadowAlpha, ")"), e.shadowBlur = T, e.shadowOffsetX = Math.cos(t.dropShadowAngle) * M, e.shadowOffsetY = Math.sin(t.dropShadowAngle) * M + x;
        }
        else
            e.fillStyle = this._generateFillStyle(t, o, s), e.strokeStyle = t.stroke, e.shadowColor = "black", e.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0;
        var y = (a - c.fontSize) / 2;
        a - c.fontSize < 0 && (y = 0);
        for (var g = 0; g < o.length; g++)
            u = t.strokeThickness / 2, d = t.strokeThickness / 2 + g * a + c.ascent + y, t.align === "right" ? u += l - h[g] : t.align === "center" && (u += (l - h[g]) / 2), t.stroke && t.strokeThickness && this.drawLetterSpacing(o[g], u + t.padding, d + t.padding - _, !0), t.fill && this.drawLetterSpacing(o[g], u + t.padding, d + t.padding - _);
    } this.updateTexture(); };
    Ga.prototype.drawLetterSpacing = function (i, t, e, s) {
        if (s === void 0) { s = !1; }
        var n = this._style.letterSpacing, o = Ga.experimentalLetterSpacing && ("letterSpacing" in CanvasRenderingContext2D.prototype || "textLetterSpacing" in CanvasRenderingContext2D.prototype);
        if (n === 0 || o) {
            o && (this.context.letterSpacing = n, this.context.textLetterSpacing = n), s ? this.context.strokeText(i, t, e) : this.context.fillText(i, t, e);
            return;
        }
        var a = t;
        var h = Array.from ? Array.from(i) : i.split("");
        var l = this.context.measureText(i).width, c = 0;
        for (var u = 0; u < h.length; ++u) {
            var d = h[u];
            s ? this.context.strokeText(d, a, e) : this.context.fillText(d, a, e);
            var f = "";
            for (var p = u + 1; p < h.length; ++p)
                f += h[p];
            c = this.context.measureText(f).width, a += l - c + n, l = c;
        }
    };
    Ga.prototype.updateTexture = function () { var i = this.canvas; if (this._style.trim) {
        var n = so(i);
        n.data && (i.width = n.width, i.height = n.height, this.context.putImageData(n.data, 0, 0));
    } var t = this._texture, e = this._style, s = e.trim ? 0 : e.padding, r = t.baseTexture; t.trim.width = t._frame.width = i.width / this._resolution, t.trim.height = t._frame.height = i.height / this._resolution, t.trim.x = -s, t.trim.y = -s, t.orig.width = t._frame.width - s * 2, t.orig.height = t._frame.height - s * 2, this._onTextureUpdate(), r.setRealSize(i.width, i.height, this._resolution), t.updateUvs(), this.dirty = !1; };
    Ga.prototype._render = function (i) { this._autoResolution && this._resolution !== i.resolution && (this._resolution = i.resolution, this.dirty = !0), this.updateText(!0), _super.prototype._render.call(this, i); };
    Ga.prototype.updateTransform = function () { this.updateText(!0), _super.prototype.updateTransform.call(this); };
    Ga.prototype.getBounds = function (i, t) { return this.updateText(!0), this._textureID === -1 && (i = !1), _super.prototype.getBounds.call(this, i, t); };
    Ga.prototype.getLocalBounds = function (i) { return this.updateText(!0), _super.prototype.getLocalBounds.call(this, i); };
    Ga.prototype._calculateBounds = function () { this.calculateVertices(), this._bounds.addQuad(this.vertexData); };
    Ga.prototype._generateFillStyle = function (i, t, e) { var s = i.fill; if (Array.isArray(s)) {
        if (s.length === 1)
            return s[0];
    }
    else
        return s; var r; var n = i.dropShadow ? i.dropShadowDistance : 0, o = i.padding || 0, a = this.canvas.width / this._resolution - n - o * 2, h = this.canvas.height / this._resolution - n - o * 2, l = s.slice(), c = i.fillGradientStops.slice(); if (!c.length) {
        var u = l.length + 1;
        for (var d = 1; d < u; ++d)
            c.push(d / u);
    } if (l.unshift(s[0]), c.unshift(0), l.push(s[s.length - 1]), c.push(1), i.fillGradientType === fi.LINEAR_VERTICAL) {
        r = this.context.createLinearGradient(a / 2, o, a / 2, h + o);
        var u = e.fontProperties.fontSize + i.strokeThickness;
        for (var d = 0; d < t.length; d++) {
            var f = e.lineHeight * (d - 1) + u, p = e.lineHeight * d;
            var m = p;
            d > 0 && f > p && (m = (p + f) / 2);
            var _ = p + u, x = e.lineHeight * (d + 1);
            var y = _;
            d + 1 < t.length && x < _ && (y = (_ + x) / 2);
            var g = (y - m) / h;
            for (var v = 0; v < l.length; v++) {
                var T = 0;
                typeof c[v] == "number" ? T = c[v] : T = v / l.length;
                var M = Math.min(1, Math.max(0, m / h + T * g));
                M = Number(M.toFixed(5)), r.addColorStop(M, l[v]);
            }
        }
    }
    else {
        r = this.context.createLinearGradient(o, h / 2, a + o, h / 2);
        var u = l.length + 1;
        var d = 1;
        for (var f = 0; f < l.length; f++) {
            var p = void 0;
            typeof c[f] == "number" ? p = c[f] : p = d / u, r.addColorStop(p, l[f]), d++;
        }
    } return r; };
    Ga.prototype.destroy = function (i) { typeof i == "boolean" && (i = { children: i }), i = Object.assign({}, up, i), _super.prototype.destroy.call(this, i), this._ownCanvas && (this.canvas.height = this.canvas.width = 0), this.context = null, this.canvas = null, this._style = null; };
    Object.defineProperty(Ga.prototype, "width", {
        get: function () { return this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width; },
        set: function (i) { this.updateText(!0); var t = xe(this.scale.x) || 1; this.scale.x = t * i / this._texture.orig.width, this._width = i; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ga.prototype, "height", {
        get: function () { return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height; },
        set: function (i) { this.updateText(!0); var t = xe(this.scale.y) || 1; this.scale.y = t * i / this._texture.orig.height, this._height = i; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ga.prototype, "style", {
        get: function () { return this._style; },
        set: function (i) { i = i || {}, i instanceof ie ? this._style = i : this._style = new ie(i), this.localStyleID = -1, this.dirty = !0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ga.prototype, "text", {
        get: function () { return this._text; },
        set: function (i) { i = String(i == null ? "" : i), this._text !== i && (this._text = i, this.dirty = !0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ga.prototype, "resolution", {
        get: function () { return this._resolution; },
        set: function (i) { this._autoResolution = !1, this._resolution !== i && (this._resolution = i, this.dirty = !0); },
        enumerable: false,
        configurable: true
    });
    return Ga;
}(he));
var ls = Ga;
ls.experimentalLetterSpacing = !1;
var Ha = /** @class */ (function () {
    function Ha(t) {
        this.maxItemsPerFrame = t, this.itemsLeft = 0;
    }
    Ha.prototype.beginFrame = function () { this.itemsLeft = this.maxItemsPerFrame; };
    Ha.prototype.allowedToUpload = function () { return this.itemsLeft-- > 0; };
    return Ha;
}());
function dp(i, t) { var s; var e = !1; if ((s = i == null ? void 0 : i._textures) != null && s.length) {
    for (var r = 0; r < i._textures.length; r++)
        if (i._textures[r] instanceof B) {
            var n = i._textures[r].baseTexture;
            t.includes(n) || (t.push(n), e = !0);
        }
} return e; }
function fp(i, t) { if (i.baseTexture instanceof W) {
    var e = i.baseTexture;
    return t.includes(e) || t.push(e), !0;
} return !1; }
function pp(i, t) { if (i._texture && i._texture instanceof B) {
    var e = i._texture.baseTexture;
    return t.includes(e) || t.push(e), !0;
} return !1; }
function mp(i, t) { return t instanceof ls ? (t.updateText(!0), !0) : !1; }
function _p(i, t) { if (t instanceof ie) {
    var e = t.toFontString();
    return F.measureFont(e), !0;
} return !1; }
function gp(i, t) { if (i instanceof ls) {
    t.includes(i.style) || t.push(i.style), t.includes(i) || t.push(i);
    var e = i._texture.baseTexture;
    return t.includes(e) || t.push(e), !0;
} return !1; }
function xp(i, t) { return i instanceof ie ? (t.includes(i) || t.push(i), !0) : !1; }
var Xa = /** @class */ (function () {
    function Xa(t) {
        var _this = this;
        this.limiter = new Ha(w.UPLOADS_PER_FRAME), this.renderer = t, this.uploadHookHelper = null, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = !1, this.delayedTick = function () { !_this.queue || _this.prepareItems(); }, this.registerFindHook(gp), this.registerFindHook(xp), this.registerFindHook(dp), this.registerFindHook(fp), this.registerFindHook(pp), this.registerUploadHook(mp), this.registerUploadHook(_p);
    }
    Xa.prototype.upload = function (t) {
        var _this = this;
        return new Promise(function (e) { t && _this.add(t), _this.queue.length ? (_this.completes.push(e), _this.ticking || (_this.ticking = !0, Q.system.addOnce(_this.tick, _this, ne.UTILITY))) : e(); });
    };
    Xa.prototype.tick = function () { setTimeout(this.delayedTick, 0); };
    Xa.prototype.prepareItems = function () { for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload();) {
        var t = this.queue[0];
        var e = !1;
        if (t && !t._destroyed) {
            for (var s = 0, r = this.uploadHooks.length; s < r; s++)
                if (this.uploadHooks[s](this.uploadHookHelper, t)) {
                    this.queue.shift(), e = !0;
                    break;
                }
        }
        e || this.queue.shift();
    } if (this.queue.length)
        Q.system.addOnce(this.tick, this, ne.UTILITY);
    else {
        this.ticking = !1;
        var t = this.completes.slice(0);
        this.completes.length = 0;
        for (var e = 0, s = t.length; e < s; e++)
            t[e]();
    } };
    Xa.prototype.registerFindHook = function (t) { return t && this.addHooks.push(t), this; };
    Xa.prototype.registerUploadHook = function (t) { return t && this.uploadHooks.push(t), this; };
    Xa.prototype.add = function (t) { for (var e = 0, s = this.addHooks.length; e < s && !this.addHooks[e](t, this.queue); e++)
        ; if (t instanceof wt)
        for (var e = t.children.length - 1; e >= 0; e--)
            this.add(t.children[e]); return this; };
    Xa.prototype.destroy = function () { this.ticking && Q.system.remove(this.tick, this), this.ticking = !1, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null, this.limiter = null, this.uploadHookHelper = null; };
    return Xa;
}());
function Va(i, t) { return t instanceof W ? (t._glTextures[i.CONTEXT_UID] || i.texture.bind(t), !0) : !1; }
function vp(i, t) { if (!(t instanceof os))
    return !1; var e = t.geometry; t.finishPoly(), e.updateBatches(); var s = e.batches; for (var r = 0; r < s.length; r++) {
    var n = s[r].style.texture;
    n && Va(i, n.baseTexture);
} return e.batchable || i.geometry.bind(e, t._resolveDirectShader(i)), !0; }
function yp(i, t) { return i instanceof os ? (t.push(i), !0) : !1; }
var fn = /** @class */ (function (_super) {
    __extends(fn, _super);
    function fn(t) {
        var _this = this;
        _this = _super.call(this, t) || this, _this.uploadHookHelper = _this.renderer, _this.registerFindHook(yp), _this.registerUploadHook(Va), _this.registerUploadHook(vp);
        return _this;
    }
    return fn;
}(Xa));
fn.extension = { name: "prepare", type: P.RendererSystem }, U.add(fn);
var bp = /** @class */ (function () {
    function bp(t) {
        this.maxMilliseconds = t, this.frameStart = 0;
    }
    bp.prototype.beginFrame = function () { this.frameStart = Date.now(); };
    bp.prototype.allowedToUpload = function () { return Date.now() - this.frameStart < this.maxMilliseconds; };
    return bp;
}());
var pi = /** @class */ (function () {
    function pi(i, t, e) {
        if (e === void 0) { e = null; }
        this.linkedSheets = [], this._texture = i instanceof B ? i : null, this.baseTexture = i instanceof W ? i : this._texture.baseTexture, this.textures = {}, this.animations = {}, this.data = t;
        var s = this.baseTexture.resource;
        this.resolution = this._updateResolution(e || (s ? s.url : null)), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null;
    }
    pi.prototype._updateResolution = function (i) {
        if (i === void 0) { i = null; }
        var t = this.data.meta.scale;
        var e = Kt(i, null);
        return e === null && (e = parseFloat(t != null ? t : "1")), e !== 1 && this.baseTexture.setResolution(e), e;
    };
    pi.prototype.parse = function () {
        var _this = this;
        return new Promise(function (i) { _this._callback = i, _this._batchIndex = 0, _this._frameKeys.length <= pi.BATCH_SIZE ? (_this._processFrames(0), _this._processAnimations(), _this._parseComplete()) : _this._nextBatch(); });
    };
    pi.prototype._processFrames = function (i) { var t = i; var e = pi.BATCH_SIZE; for (; t - i < e && t < this._frameKeys.length;) {
        var s = this._frameKeys[t], r = this._frames[s], n = r.frame;
        if (n) {
            var o = null, a = null;
            var h = r.trimmed !== !1 && r.sourceSize ? r.sourceSize : r.frame, l = new V(0, 0, Math.floor(h.w) / this.resolution, Math.floor(h.h) / this.resolution);
            r.rotated ? o = new V(Math.floor(n.x) / this.resolution, Math.floor(n.y) / this.resolution, Math.floor(n.h) / this.resolution, Math.floor(n.w) / this.resolution) : o = new V(Math.floor(n.x) / this.resolution, Math.floor(n.y) / this.resolution, Math.floor(n.w) / this.resolution, Math.floor(n.h) / this.resolution), r.trimmed !== !1 && r.spriteSourceSize && (a = new V(Math.floor(r.spriteSourceSize.x) / this.resolution, Math.floor(r.spriteSourceSize.y) / this.resolution, Math.floor(n.w) / this.resolution, Math.floor(n.h) / this.resolution)), this.textures[s] = new B(this.baseTexture, o, l, a, r.rotated ? 2 : 0, r.anchor), B.addToCache(this.textures[s], s);
        }
        t++;
    } };
    pi.prototype._processAnimations = function () { var i = this.data.animations || {}; for (var t in i) {
        this.animations[t] = [];
        for (var e = 0; e < i[t].length; e++) {
            var s = i[t][e];
            this.animations[t].push(this.textures[s]);
        }
    } };
    pi.prototype._parseComplete = function () { var i = this._callback; this._callback = null, this._batchIndex = 0, i.call(this, this.textures); };
    pi.prototype._nextBatch = function () {
        var _this = this;
        this._processFrames(this._batchIndex * pi.BATCH_SIZE), this._batchIndex++, setTimeout(function () { _this._batchIndex * pi.BATCH_SIZE < _this._frameKeys.length ? _this._nextBatch() : (_this._processAnimations(), _this._parseComplete()); }, 0);
    };
    pi.prototype.destroy = function (i) {
        if (i === void 0) { i = !1; }
        var t;
        for (var e in this.textures)
            this.textures[e].destroy();
        this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, i && ((t = this._texture) == null || t.destroy(), this.baseTexture.destroy()), this._texture = null, this.baseTexture = null, this.linkedSheets = [];
    };
    return pi;
}());
var cs = pi;
cs.BATCH_SIZE = 1e3;
var Tp = ["jpg", "png", "jpeg", "avif", "webp"];
function za(i, t, e) { var s = {}; if (i.forEach(function (r) { s[r] = t; }), Object.keys(t.textures).forEach(function (r) { s[r] = t.textures[r]; }), !e) {
    var r_3 = ft.dirname(i[0]);
    t.linkedSheets.forEach(function (n, o) { var a = za(["".concat(r_3, "/").concat(t.data.meta.related_multi_packs[o])], n, !0); Object.assign(s, a); });
} return s; }
var Wa = { extension: P.Asset, cache: { test: function (i) { return i instanceof cs; }, getCacheableAssets: function (i, t) { return za(i, t, !1); } }, resolver: { test: function (i) { var e = i.split("?")[0].split("."), s = e.pop(), r = e.pop(); return s === "json" && Tp.includes(r); }, parse: function (i) { var e, s; var t = i.split("."); return { resolution: parseFloat((s = (e = w.RETINA_PREFIX.exec(i)) == null ? void 0 : e[1]) != null ? s : "1"), format: t[t.length - 2], src: i }; } }, loader: { extension: { type: P.LoadParser, priority: Lt.Normal }, testParse: function (i, t) {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                return [2 /*return*/, ft.extname(t.src).includes(".json") && !!i.frames];
            }); });
        }, parse: function (i, t, e) {
            return __awaiter(this, void 0, void 0, function () { var l, c, s, r, o, a, h, u, _b, h_1, f, p, d; return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        s = ft.dirname(t.src);
                        s && s.lastIndexOf("/") !== s.length - 1 && (s += "/");
                        r = s + i.meta.image;
                        return [4 /*yield*/, e.load([r])];
                    case 1:
                        o = (_g.sent())[r], a = new cs(o.baseTexture, i, t.src);
                        return [4 /*yield*/, a.parse()];
                    case 2:
                        _g.sent();
                        h = (l = i == null ? void 0 : i.meta) == null ? void 0 : l.related_multi_packs;
                        if (!Array.isArray(h)) return [3 /*break*/, 4];
                        u = [];
                        for (_b = 0, h_1 = h; _b < h_1.length; _b++) {
                            f = h_1[_b];
                            if (typeof f != "string")
                                continue;
                            p = s + f;
                            (c = t.data) != null && c.ignoreMultiPack || u.push(e.load({ src: p, data: { ignoreMultiPack: !0 } }));
                        }
                        return [4 /*yield*/, Promise.all(u)];
                    case 3:
                        d = _g.sent();
                        a.linkedSheets = d, d.forEach(function (f) { f.linkedSheets = [a].concat(a.linkedSheets.filter(function (p) { return p !== f; })); });
                        _g.label = 4;
                    case 4: return [2 /*return*/, a];
                }
            }); });
        }, unload: function (i) { i.destroy(!0); } } };
U.add(Wa);
var bs = /** @class */ (function (_super) {
    __extends(bs, _super);
    function bs(t, e) {
        if (e === void 0) { e = !0; }
        var _this = this;
        _this = _super.call(this, t[0] instanceof B ? t[0] : t[0].texture) || this, _this._textures = null, _this._durations = null, _this._autoUpdate = e, _this._isConnectedToTicker = !1, _this.animationSpeed = 1, _this.loop = !0, _this.updateAnchor = !1, _this.onComplete = null, _this.onFrameChange = null, _this.onLoop = null, _this._currentTime = 0, _this._playing = !1, _this._previousFrame = null, _this.textures = t;
        return _this;
    }
    bs.prototype.stop = function () { !this._playing || (this._playing = !1, this._autoUpdate && this._isConnectedToTicker && (Q.shared.remove(this.update, this), this._isConnectedToTicker = !1)); };
    bs.prototype.play = function () { this._playing || (this._playing = !0, this._autoUpdate && !this._isConnectedToTicker && (Q.shared.add(this.update, this, ne.HIGH), this._isConnectedToTicker = !0)); };
    bs.prototype.gotoAndStop = function (t) { this.stop(), this.currentFrame = t; };
    bs.prototype.gotoAndPlay = function (t) { this.currentFrame = t, this.play(); };
    bs.prototype.update = function (t) { if (!this._playing)
        return; var e = this.animationSpeed * t, s = this.currentFrame; if (this._durations !== null) {
        var r = this._currentTime % 1 * this._durations[this.currentFrame];
        for (r += e / 60 * 1e3; r < 0;)
            this._currentTime--, r += this._durations[this.currentFrame];
        var n = Math.sign(this.animationSpeed * t);
        for (this._currentTime = Math.floor(this._currentTime); r >= this._durations[this.currentFrame];)
            r -= this._durations[this.currentFrame] * n, this._currentTime += n;
        this._currentTime += r / this._durations[this.currentFrame];
    }
    else
        this._currentTime += e; this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : s !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < s ? this.onLoop() : this.animationSpeed < 0 && this.currentFrame > s && this.onLoop()), this.updateTexture()); };
    bs.prototype.updateTexture = function () { var t = this.currentFrame; this._previousFrame !== t && (this._previousFrame = t, this._texture = this._textures[t], this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this.uvs = this._texture._uvs.uvsFloat32, this.updateAnchor && this._anchor.copyFrom(this._texture.defaultAnchor), this.onFrameChange && this.onFrameChange(this.currentFrame)); };
    bs.prototype.destroy = function (t) { this.stop(), _super.prototype.destroy.call(this, t), this.onComplete = null, this.onFrameChange = null, this.onLoop = null; };
    bs.fromFrames = function (t) { var e = []; for (var s = 0; s < t.length; ++s)
        e.push(B.from(t[s])); return new bs(e); };
    bs.fromImages = function (t) { var e = []; for (var s = 0; s < t.length; ++s)
        e.push(B.from(t[s])); return new bs(e); };
    Object.defineProperty(bs.prototype, "totalFrames", {
        get: function () { return this._textures.length; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(bs.prototype, "textures", {
        get: function () { return this._textures; },
        set: function (t) { if (t[0] instanceof B)
            this._textures = t, this._durations = null;
        else {
            this._textures = [], this._durations = [];
            for (var e = 0; e < t.length; e++)
                this._textures.push(t[e].texture), this._durations.push(t[e].time);
        } this._previousFrame = null, this.gotoAndStop(0), this.updateTexture(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(bs.prototype, "currentFrame", {
        get: function () { var t = Math.floor(this._currentTime) % this._textures.length; return t < 0 && (t += this._textures.length), t; },
        set: function (t) { if (t < 0 || t > this.totalFrames - 1)
            throw new Error("[AnimatedSprite]: Invalid frame index value ".concat(t, ", expected to be between 0 and totalFrames ").concat(this.totalFrames, ".")); var e = this.currentFrame; this._currentTime = t, e !== this.currentFrame && this.updateTexture(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(bs.prototype, "playing", {
        get: function () { return this._playing; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(bs.prototype, "autoUpdate", {
        get: function () { return this._autoUpdate; },
        set: function (t) { t !== this._autoUpdate && (this._autoUpdate = t, !this._autoUpdate && this._isConnectedToTicker ? (Q.shared.remove(this.update, this), this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._playing && (Q.shared.add(this.update, this), this._isConnectedToTicker = !0)); },
        enumerable: false,
        configurable: true
    });
    return bs;
}(he));
var mi = new j;
var _n = /** @class */ (function (_super) {
    __extends(_n, _super);
    function _n(t, e, s) {
        if (e === void 0) { e = 100; }
        if (s === void 0) { s = 100; }
        var _this = this;
        _this = _super.call(this, t) || this, _this.tileTransform = new Ve, _this._width = e, _this._height = s, _this.uvMatrix = _this.texture.uvMatrix || new Wi(t), _this.pluginName = "tilingSprite", _this.uvRespectAnchor = !1;
        return _this;
    }
    Object.defineProperty(_n.prototype, "clampMargin", {
        get: function () { return this.uvMatrix.clampMargin; },
        set: function (t) { this.uvMatrix.clampMargin = t, this.uvMatrix.update(!0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_n.prototype, "tileScale", {
        get: function () { return this.tileTransform.scale; },
        set: function (t) { this.tileTransform.scale.copyFrom(t); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_n.prototype, "tilePosition", {
        get: function () { return this.tileTransform.position; },
        set: function (t) { this.tileTransform.position.copyFrom(t); },
        enumerable: false,
        configurable: true
    });
    _n.prototype._onTextureUpdate = function () { this.uvMatrix && (this.uvMatrix.texture = this._texture), this._cachedTint = 16777215; };
    _n.prototype._render = function (t) { var e = this._texture; !e || !e.valid || (this.tileTransform.updateLocalTransform(), this.uvMatrix.update(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this)); };
    _n.prototype._calculateBounds = function () { var t = this._width * -this._anchor._x, e = this._height * -this._anchor._y, s = this._width * (1 - this._anchor._x), r = this._height * (1 - this._anchor._y); this._bounds.addFrame(this.transform, t, e, s, r); };
    _n.prototype.getLocalBounds = function (t) { return this.children.length === 0 ? (this._bounds.minX = this._width * -this._anchor._x, this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x), this._bounds.maxY = this._height * (1 - this._anchor._y), t || (this._localBoundsRect || (this._localBoundsRect = new V), t = this._localBoundsRect), this._bounds.getRectangle(t)) : _super.prototype.getLocalBounds.call(this, t); };
    _n.prototype.containsPoint = function (t) { this.worldTransform.applyInverse(t, mi); var e = this._width, s = this._height, r = -e * this.anchor._x; if (mi.x >= r && mi.x < r + e) {
        var n = -s * this.anchor._y;
        if (mi.y >= n && mi.y < n + s)
            return !0;
    } return !1; };
    _n.prototype.destroy = function (t) { _super.prototype.destroy.call(this, t), this.tileTransform = null, this.uvMatrix = null; };
    _n.from = function (t, e) { var s = t instanceof B ? t : B.from(t, e); return new _n(s, e.width, e.height); };
    Object.defineProperty(_n.prototype, "width", {
        get: function () { return this._width; },
        set: function (t) { this._width = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_n.prototype, "height", {
        get: function () { return this._height; },
        set: function (t) { this._height = t; },
        enumerable: false,
        configurable: true
    });
    return _n;
}(he));
var Ep = "#version 100\n#define SHADER_NAME Tiling-Sprite-Simple-100\n\nprecision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 texSample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = texSample * uColor;\n}\n", ja = "#version 100\n#define SHADER_NAME Tiling-Sprite-100\n\nprecision lowp float;\n\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", wp = "#version 100\n#ifdef GL_EXT_shader_texture_lod\n    #extension GL_EXT_shader_texture_lod : enable\n#endif\n#define SHADER_NAME Tiling-Sprite-100\n\nprecision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    vec2 unclamped = coord;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    #ifdef GL_EXT_shader_texture_lod\n        vec4 texSample = unclamped == coord\n            ? texture2D(uSampler, coord) \n            : texture2DLodEXT(uSampler, coord, 0);\n    #else\n        vec4 texSample = texture2D(uSampler, coord);\n    #endif\n\n    gl_FragColor = texSample * uColor;\n}\n", Ap = "#version 300 es\n#define SHADER_NAME Tiling-Sprite-300\n\nprecision lowp float;\n\nin vec2 aVertexPosition;\nin vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nout vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", Sp = "#version 300 es\n#define SHADER_NAME Tiling-Sprite-100\n\nprecision lowp float;\n\nin vec2 vTextureCoord;\n\nout vec4 fragmentColor;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    vec2 unclamped = coord;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0\n\n    fragmentColor = texSample * uColor;\n}\n";
var us = new Z;
var pn = /** @class */ (function (_super) {
    __extends(pn, _super);
    function pn(t) {
        var _this = this;
        _this = _super.call(this, t) || this, t.runners.contextChange.add(_this), _this.quad = new ir, _this.state = Yt.for2d();
        return _this;
    }
    pn.prototype.contextChange = function () { var t = this.renderer, e = { globals: t.globalUniforms }; this.simpleShader = kt.from(ja, Ep, e), this.shader = t.context.webGLVersion > 1 ? kt.from(Ap, Sp, e) : kt.from(ja, wp, e); };
    pn.prototype.render = function (t) { var e = this.renderer, s = this.quad; var r = s.vertices; r[0] = r[6] = t._width * -t.anchor.x, r[1] = r[3] = t._height * -t.anchor.y, r[2] = r[4] = t._width * (1 - t.anchor.x), r[5] = r[7] = t._height * (1 - t.anchor.y); var n = t.uvRespectAnchor ? t.anchor.x : 0, o = t.uvRespectAnchor ? t.anchor.y : 0; r = s.uvs, r[0] = r[6] = -n, r[1] = r[3] = -o, r[2] = r[4] = 1 - n, r[5] = r[7] = 1 - o, s.invalidate(); var a = t._texture, h = a.baseTexture, l = h.alphaMode > 0, c = t.tileTransform.localTransform, u = t.uvMatrix; var d = h.isPowerOfTwo && a.frame.width === h.width && a.frame.height === h.height; d && (h._glTextures[e.CONTEXT_UID] ? d = h.wrapMode !== zt.CLAMP : h.wrapMode === zt.CLAMP && (h.wrapMode = zt.REPEAT)); var f = d ? this.simpleShader : this.shader, p = a.width, m = a.height, _ = t._width, x = t._height; us.set(c.a * p / _, c.b * p / x, c.c * m / _, c.d * m / x, c.tx / _, c.ty / x), us.invert(), d ? us.prepend(u.mapCoord) : (f.uniforms.uMapCoord = u.mapCoord.toArray(!0), f.uniforms.uClampFrame = u.uClampFrame, f.uniforms.uClampOffset = u.uClampOffset), f.uniforms.uTransform = us.toArray(!0), f.uniforms.uColor = Vs(t.tint, t.worldAlpha, f.uniforms.uColor, l), f.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), f.uniforms.uSampler = a, e.shader.bind(f), e.geometry.bind(s), this.state.blendMode = Xs(t.blendMode, l), e.state.set(this.state), e.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0); };
    return pn;
}(Qe));
pn.extension = { name: "tilingSprite", type: P.RendererPlugin }, U.add(pn);
var _i = /** @class */ (function () {
    function _i() {
        this.info = [], this.common = [], this.page = [], this.char = [], this.kerning = [], this.distanceField = [];
    }
    return _i;
}());
var gi = /** @class */ (function () {
    function gi() {
    }
    gi.test = function (t) { return typeof t == "string" && t.startsWith("info face="); };
    gi.parse = function (t) { var e = t.match(/^[a-z]+\s+.+$/gm), s = { info: [], common: [], page: [], char: [], chars: [], kerning: [], kernings: [], distanceField: [] }; for (var n in e) {
        var o = e[n].match(/^[a-z]+/gm)[0], a = e[n].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm), h = {};
        for (var l in a) {
            var c = a[l].split("="), u = c[0], d = c[1].replace(/"/gm, ""), f = parseFloat(d), p = isNaN(f) ? d : f;
            h[u] = p;
        }
        s[o].push(h);
    } var r = new _i; return s.info.forEach(function (n) { return r.info.push({ face: n.face, size: parseInt(n.size, 10) }); }), s.common.forEach(function (n) { return r.common.push({ lineHeight: parseInt(n.lineHeight, 10) }); }), s.page.forEach(function (n) { return r.page.push({ id: parseInt(n.id, 10), file: n.file }); }), s.char.forEach(function (n) { return r.char.push({ id: parseInt(n.id, 10), page: parseInt(n.page, 10), x: parseInt(n.x, 10), y: parseInt(n.y, 10), width: parseInt(n.width, 10), height: parseInt(n.height, 10), xoffset: parseInt(n.xoffset, 10), yoffset: parseInt(n.yoffset, 10), xadvance: parseInt(n.xadvance, 10) }); }), s.kerning.forEach(function (n) { return r.kerning.push({ first: parseInt(n.first, 10), second: parseInt(n.second, 10), amount: parseInt(n.amount, 10) }); }), s.distanceField.forEach(function (n) { return r.distanceField.push({ distanceRange: parseInt(n.distanceRange, 10), fieldType: n.fieldType }); }), r; };
    return gi;
}());
var ds = /** @class */ (function () {
    function ds() {
    }
    ds.test = function (t) { var e = t; return "getElementsByTagName" in e && e.getElementsByTagName("page").length && e.getElementsByTagName("info")[0].getAttribute("face") !== null; };
    ds.parse = function (t) { var e = new _i, s = t.getElementsByTagName("info"), r = t.getElementsByTagName("common"), n = t.getElementsByTagName("page"), o = t.getElementsByTagName("char"), a = t.getElementsByTagName("kerning"), h = t.getElementsByTagName("distanceField"); for (var l = 0; l < s.length; l++)
        e.info.push({ face: s[l].getAttribute("face"), size: parseInt(s[l].getAttribute("size"), 10) }); for (var l = 0; l < r.length; l++)
        e.common.push({ lineHeight: parseInt(r[l].getAttribute("lineHeight"), 10) }); for (var l = 0; l < n.length; l++)
        e.page.push({ id: parseInt(n[l].getAttribute("id"), 10) || 0, file: n[l].getAttribute("file") }); for (var l = 0; l < o.length; l++) {
        var c = o[l];
        e.char.push({ id: parseInt(c.getAttribute("id"), 10), page: parseInt(c.getAttribute("page"), 10) || 0, x: parseInt(c.getAttribute("x"), 10), y: parseInt(c.getAttribute("y"), 10), width: parseInt(c.getAttribute("width"), 10), height: parseInt(c.getAttribute("height"), 10), xoffset: parseInt(c.getAttribute("xoffset"), 10), yoffset: parseInt(c.getAttribute("yoffset"), 10), xadvance: parseInt(c.getAttribute("xadvance"), 10) });
    } for (var l = 0; l < a.length; l++)
        e.kerning.push({ first: parseInt(a[l].getAttribute("first"), 10), second: parseInt(a[l].getAttribute("second"), 10), amount: parseInt(a[l].getAttribute("amount"), 10) }); for (var l = 0; l < h.length; l++)
        e.distanceField.push({ fieldType: h[l].getAttribute("fieldType"), distanceRange: parseInt(h[l].getAttribute("distanceRange"), 10) }); return e; };
    return ds;
}());
var fs = /** @class */ (function () {
    function fs() {
    }
    fs.test = function (t) { return typeof t == "string" && t.includes("<font>") ? ds.test(w.ADAPTER.parseXML(t)) : !1; };
    fs.parse = function (t) { return ds.parse(w.ADAPTER.parseXML(t)); };
    return fs;
}());
var mn = [gi, ds, fs];
function Ya(i) { for (var t = 0; t < mn.length; t++)
    if (mn[t].test(i))
        return mn[t]; return null; }
function Rp(i, t, e, s, r, n) { var o = e.fill; if (Array.isArray(o)) {
    if (o.length === 1)
        return o[0];
}
else
    return o; var a; var h = e.dropShadow ? e.dropShadowDistance : 0, l = e.padding || 0, c = i.width / s - h - l * 2, u = i.height / s - h - l * 2, d = o.slice(), f = e.fillGradientStops.slice(); if (!f.length) {
    var p = d.length + 1;
    for (var m = 1; m < p; ++m)
        f.push(m / p);
} if (d.unshift(o[0]), f.unshift(0), d.push(o[o.length - 1]), f.push(1), e.fillGradientType === fi.LINEAR_VERTICAL) {
    a = t.createLinearGradient(c / 2, l, c / 2, u + l);
    var p = 0;
    var _ = (n.fontProperties.fontSize + e.strokeThickness) / u;
    for (var x = 0; x < r.length; x++) {
        var y = n.lineHeight * x;
        for (var g = 0; g < d.length; g++) {
            var v = 0;
            typeof f[g] == "number" ? v = f[g] : v = g / d.length;
            var T = y / u + v * _;
            var M = Math.max(p, T);
            M = Math.min(M, 1), a.addColorStop(M, d[g]), p = M;
        }
    }
}
else {
    a = t.createLinearGradient(l, u / 2, c + l, u / 2);
    var p = d.length + 1;
    var m = 1;
    for (var _ = 0; _ < d.length; _++) {
        var x = void 0;
        typeof f[_] == "number" ? x = f[_] : x = m / p, a.addColorStop(x, d[_]), m++;
    }
} return a; }
function Cp(i, t, e, s, r, n, o) { var a = e.text, h = e.fontProperties; t.translate(s, r), t.scale(n, n); var l = o.strokeThickness / 2, c = -(o.strokeThickness / 2); if (t.font = o.toFontString(), t.lineWidth = o.strokeThickness, t.textBaseline = o.textBaseline, t.lineJoin = o.lineJoin, t.miterLimit = o.miterLimit, t.fillStyle = Rp(i, t, o, n, [a], e), t.strokeStyle = o.stroke, o.dropShadow) {
    var u = o.dropShadowColor, d = _e(typeof u == "number" ? u : Bi(u)), f = o.dropShadowBlur * n, p = o.dropShadowDistance * n;
    t.shadowColor = "rgba(".concat(d[0] * 255, ",").concat(d[1] * 255, ",").concat(d[2] * 255, ",").concat(o.dropShadowAlpha, ")"), t.shadowBlur = f, t.shadowOffsetX = Math.cos(o.dropShadowAngle) * p, t.shadowOffsetY = Math.sin(o.dropShadowAngle) * p;
}
else
    t.shadowColor = "black", t.shadowBlur = 0, t.shadowOffsetX = 0, t.shadowOffsetY = 0; o.stroke && o.strokeThickness && t.strokeText(a, l, c + e.lineHeight - h.descent), o.fill && t.fillText(a, l, c + e.lineHeight - h.descent), t.setTransform(1, 0, 0, 1, 0, 0), t.fillStyle = "rgba(0, 0, 0, 0)"; }
function $a(i) { return Array.from ? Array.from(i) : i.split(""); }
function Ip(i) { typeof i == "string" && (i = [i]); var t = []; for (var e = 0, s = i.length; e < s; e++) {
    var r = i[e];
    if (Array.isArray(r)) {
        if (r.length !== 2)
            throw new Error("[BitmapFont]: Invalid character range length, expecting 2 got ".concat(r.length, "."));
        var n = r[0].charCodeAt(0), o = r[1].charCodeAt(0);
        if (o < n)
            throw new Error("[BitmapFont]: Invalid character range.");
        for (var a = n, h = o; a <= h; a++)
            t.push(String.fromCharCode(a));
    }
    else
        t.push.apply(t, $a(r));
} if (t.length === 0)
    throw new Error("[BitmapFont]: Empty set when resolving characters."); return t; }
function ps(i) { return i.codePointAt ? i.codePointAt(0) : i.charCodeAt(0); }
var Ot = /** @class */ (function () {
    function Ot(i, t, e) {
        var l, c;
        var s = i.info[0], r = i.common[0], n = i.page[0], o = i.distanceField[0], a = Kt(n.file), h = {};
        this._ownsTextures = e, this.font = s.face, this.size = s.size, this.lineHeight = r.lineHeight / a, this.chars = {}, this.pageTextures = h;
        for (var u = 0; u < i.page.length; u++) {
            var _b = i.page[u], d = _b.id, f = _b.file;
            h[d] = t instanceof Array ? t[u] : t[f], (o == null ? void 0 : o.fieldType) && o.fieldType !== "none" && (h[d].baseTexture.alphaMode = At.NO_PREMULTIPLIED_ALPHA, h[d].baseTexture.mipmap = Mt.OFF);
        }
        for (var u = 0; u < i.char.length; u++) {
            var _g = i.char[u], d = _g.id, f = _g.page;
            var _j = i.char[u], p = _j.x, m = _j.y, _ = _j.width, x = _j.height, y = _j.xoffset, g = _j.yoffset, v = _j.xadvance;
            p /= a, m /= a, _ /= a, x /= a, y /= a, g /= a, v /= a;
            var T = new V(p + h[f].frame.x / a, m + h[f].frame.y / a, _, x);
            this.chars[d] = { xOffset: y, yOffset: g, xAdvance: v, kerning: {}, texture: new B(h[f].baseTexture, T), page: f };
        }
        for (var u = 0; u < i.kerning.length; u++) {
            var _k = i.kerning[u], d = _k.first, f = _k.second, p = _k.amount;
            d /= a, f /= a, p /= a, this.chars[f] && (this.chars[f].kerning[d] = p);
        }
        this.distanceFieldRange = o == null ? void 0 : o.distanceRange, this.distanceFieldType = (c = (l = o == null ? void 0 : o.fieldType) == null ? void 0 : l.toLowerCase()) != null ? c : "none";
    }
    Ot.prototype.destroy = function () { for (var i in this.chars)
        this.chars[i].texture.destroy(), this.chars[i].texture = null; for (var i in this.pageTextures)
        this._ownsTextures && this.pageTextures[i].destroy(!0), this.pageTextures[i] = null; this.chars = null, this.pageTextures = null; };
    Ot.install = function (i, t, e) { var s; if (i instanceof _i)
        s = i;
    else {
        var n = Ya(i);
        if (!n)
            throw new Error("Unrecognized data format for font.");
        s = n.parse(i);
    } t instanceof B && (t = [t]); var r = new Ot(s, t, e); return Ot.available[r.font] = r, r; };
    Ot.uninstall = function (i) { var t = Ot.available[i]; if (!t)
        throw new Error("No font found named '".concat(i, "'")); t.destroy(), delete Ot.available[i]; };
    Ot.from = function (i, t, e) { if (!i)
        throw new Error("[BitmapFont] Property `name` is required."); var M = Object.assign({}, Ot.defaultOptions, e), s = M.chars, r = M.padding, n = M.resolution, o = M.textureWidth, a = M.textureHeight, h = Es(M, ["chars", "padding", "resolution", "textureWidth", "textureHeight"]), l = Ip(s), c = t instanceof ie ? t : new ie(t), u = o, d = new _i; d.info[0] = { face: c.fontFamily, size: c.fontSize }, d.common[0] = { lineHeight: c.fontSize }; var f = 0, p = 0, m, _, x, y = 0; var g = [], v = []; for (var R = 0; R < l.length; R++) {
        m || (m = w.ADAPTER.createCanvas(), m.width = o, m.height = a, _ = m.getContext("2d"), x = new W(m, Xt({ resolution: n }, h)), g.push(x), v.push(new B(x)), d.page.push({ id: v.length - 1, file: "" }));
        var A = l[R], L = F.measureText(A, c, !1, m), G = L.width, I = Math.ceil(L.height), N = Math.ceil((c.fontStyle === "italic" ? 2 : 1) * G);
        if (p >= a - I * n) {
            if (p === 0)
                throw new Error("[BitmapFont] textureHeight ".concat(a, "px is too small (fontFamily: '").concat(c.fontFamily, "', fontSize: ").concat(c.fontSize, "px, char: '").concat(A, "')"));
            --R, m = null, _ = null, x = null, p = 0, f = 0, y = 0;
            continue;
        }
        if (y = Math.max(I + L.fontProperties.descent, y), N * n + f >= u) {
            if (f === 0)
                throw new Error("[BitmapFont] textureWidth ".concat(o, "px is too small (fontFamily: '").concat(c.fontFamily, "', fontSize: ").concat(c.fontSize, "px, char: '").concat(A, "')"));
            --R, p += y * n, p = Math.ceil(p), f = 0, y = 0;
            continue;
        }
        Cp(m, _, L, f, p, n, c);
        var E = ps(L.text);
        d.char.push({ id: E, page: v.length - 1, x: f / n, y: p / n, width: N, height: I, xoffset: 0, yoffset: 0, xadvance: Math.ceil(G - (c.dropShadow ? c.dropShadowDistance : 0) - (c.stroke ? c.strokeThickness : 0)) }), f += (N + 2 * r) * n, f = Math.ceil(f);
    } for (var R = 0, A = l.length; R < A; R++) {
        var L = l[R];
        for (var G = 0; G < A; G++) {
            var I = l[G], N = _.measureText(L).width, E = _.measureText(I).width, X = _.measureText(L + I).width - (N + E);
            X && d.kerning.push({ first: ps(L), second: ps(I), amount: X });
        }
    } var T = new Ot(d, v, !0); return Ot.available[i] !== void 0 && Ot.uninstall(i), Ot.available[i] = T, T; };
    return Ot;
}());
var xt = Ot;
xt.ALPHA = [["a", "z"], ["A", "Z"], " "], xt.NUMERIC = [["0", "9"]], xt.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "], xt.ASCII = [[" ", "~"]], xt.defaultOptions = { resolution: 1, textureWidth: 512, textureHeight: 512, padding: 4, chars: Ot.ALPHANUMERIC }, xt.available = {};
var Pp = "// Pixi texture info\r\nvarying vec2 vTextureCoord;\r\nuniform sampler2D uSampler;\r\n\r\n// Tint\r\nuniform vec4 uColor;\r\n\r\n// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r\nuniform float uFWidth;\r\n\r\nvoid main(void) {\r\n\r\n  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r\n  vec4 texColor = texture2D(uSampler, vTextureCoord);\r\n\r\n  // MSDF\r\n  float median = texColor.r + texColor.g + texColor.b -\r\n                  min(texColor.r, min(texColor.g, texColor.b)) -\r\n                  max(texColor.r, max(texColor.g, texColor.b));\r\n  // SDF\r\n  median = min(median, texColor.a);\r\n\r\n  float screenPxDistance = uFWidth * (median - 0.5);\r\n  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r\n  if (median < 0.01) {\r\n    alpha = 0.0;\r\n  } else if (median > 0.99) {\r\n    alpha = 1.0;\r\n  }\r\n\r\n  // NPM Textures, NPM outputs\r\n  gl_FragColor = vec4(uColor.rgb, uColor.a * alpha);\r\n\r\n}\r\n", Mp = "// Mesh material default fragment\r\nattribute vec2 aVertexPosition;\r\nattribute vec2 aTextureCoord;\r\n\r\nuniform mat3 projectionMatrix;\r\nuniform mat3 translationMatrix;\r\nuniform mat3 uTextureMatrix;\r\n\r\nvarying vec2 vTextureCoord;\r\n\r\nvoid main(void)\r\n{\r\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r\n\r\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r\n}\r\n";
var qa = [], Ka = [], Za = [], Qa = /** @class */ (function (_super) {
    __extends(Qa, _super);
    function Qa(i, t) {
        if (t === void 0) { t = {}; }
        var _this = this;
        _this = _super.call(this) || this, _this._tint = 16777215;
        var _b = Object.assign({}, Qa.styleDefaults, t), e = _b.align, s = _b.tint, r = _b.maxWidth, n = _b.letterSpacing, o = _b.fontName, a = _b.fontSize;
        if (!xt.available[o])
            throw new Error("Missing BitmapFont \"".concat(o, "\""));
        _this._activePagesMeshData = [], _this._textWidth = 0, _this._textHeight = 0, _this._align = e, _this._tint = s, _this._font = void 0, _this._fontName = o, _this._fontSize = a, _this.text = i, _this._maxWidth = r, _this._maxLineHeight = 0, _this._letterSpacing = n, _this._anchor = new te(function () { _this.dirty = !0; }, _this, 0, 0), _this._roundPixels = w.ROUND_PIXELS, _this.dirty = !0, _this._resolution = w.RESOLUTION, _this._autoResolution = !0, _this._textureCache = {};
        return _this;
    }
    Qa.prototype.updateText = function () {
        var G;
        var i = xt.available[this._fontName], t = this.fontSize, e = t / i.size, s = new j, r = [], n = [], o = [], a = this._text.replace(/(?:\r\n|\r)/g, "\n") || " ", h = $a(a), l = this._maxWidth * i.size / t, c = i.distanceFieldType === "none" ? qa : Ka;
        var u = null, d = 0, f = 0, p = 0, m = -1, _ = 0, x = 0, y = 0, g = 0;
        for (var I = 0; I < h.length; I++) {
            var N = h[I], E = ps(N);
            if (/(?:\s)/.test(N) && (m = I, _ = d, g++), N === "\r" || N === "\n") {
                n.push(d), o.push(-1), f = Math.max(f, d), ++p, ++x, s.x = 0, s.y += i.lineHeight, u = null, g = 0;
                continue;
            }
            var b = i.chars[E];
            if (!b)
                continue;
            u && b.kerning[u] && (s.x += b.kerning[u]);
            var X = Za.pop() || { texture: B.EMPTY, line: 0, charCode: 0, prevSpaces: 0, position: new j };
            X.texture = b.texture, X.line = p, X.charCode = E, X.position.x = s.x + b.xOffset + this._letterSpacing / 2, X.position.y = s.y + b.yOffset, X.prevSpaces = g, r.push(X), d = X.position.x + Math.max(b.xAdvance - b.xOffset, b.texture.orig.width), s.x += b.xAdvance + this._letterSpacing, y = Math.max(y, b.yOffset + b.texture.height), u = E, m !== -1 && l > 0 && s.x > l && (++x, ge(r, 1 + m - x, 1 + I - m), I = m, m = -1, n.push(_), o.push(r.length > 0 ? r[r.length - 1].prevSpaces : 0), f = Math.max(f, _), p++, s.x = 0, s.y += i.lineHeight, u = null, g = 0);
        }
        var v = h[h.length - 1];
        v !== "\r" && v !== "\n" && (/(?:\s)/.test(v) && (d = _), n.push(d), f = Math.max(f, d), o.push(-1));
        var T = [];
        for (var I = 0; I <= p; I++) {
            var N = 0;
            this._align === "right" ? N = f - n[I] : this._align === "center" ? N = (f - n[I]) / 2 : this._align === "justify" && (N = o[I] < 0 ? 0 : (f - n[I]) / o[I]), T.push(N);
        }
        var M = r.length, R = {}, A = [], L = this._activePagesMeshData;
        c.push.apply(c, L);
        for (var I = 0; I < M; I++) {
            var N = r[I].texture, E = N.baseTexture.uid;
            if (!R[E]) {
                var b = c.pop();
                if (!b) {
                    var z = new di;
                    var D = void 0, $ = void 0;
                    i.distanceFieldType === "none" ? (D = new ke(B.EMPTY), $ = k.NORMAL) : (D = new ke(B.EMPTY, { program: $t.from(Mp, Pp), uniforms: { uFWidth: 0 } }), $ = k.NORMAL_NPM);
                    var st = new we(z, D);
                    st.blendMode = $, b = { index: 0, indexCount: 0, vertexCount: 0, uvsCount: 0, total: 0, mesh: st, vertices: null, uvs: null, indices: null };
                }
                b.index = 0, b.indexCount = 0, b.vertexCount = 0, b.uvsCount = 0, b.total = 0;
                var X = this._textureCache;
                X[E] = X[E] || new B(N.baseTexture), b.mesh.texture = X[E], b.mesh.tint = this._tint, A.push(b), R[E] = b;
            }
            R[E].total++;
        }
        for (var I = 0; I < L.length; I++)
            A.includes(L[I]) || this.removeChild(L[I].mesh);
        for (var I = 0; I < A.length; I++)
            A[I].mesh.parent !== this && this.addChild(A[I].mesh);
        this._activePagesMeshData = A;
        for (var I in R) {
            var N = R[I], E = N.total;
            if (!(((G = N.indices) == null ? void 0 : G.length) > 6 * E) || N.vertices.length < we.BATCHABLE_SIZE * 2)
                N.vertices = new Float32Array(4 * 2 * E), N.uvs = new Float32Array(4 * 2 * E), N.indices = new Uint16Array(6 * E);
            else {
                var b = N.total, X = N.vertices;
                for (var z = b * 4 * 2; z < X.length; z++)
                    X[z] = 0;
            }
            N.mesh.size = 6 * E;
        }
        for (var I = 0; I < M; I++) {
            var N = r[I];
            var E = N.position.x + T[N.line] * (this._align === "justify" ? N.prevSpaces : 1);
            this._roundPixels && (E = Math.round(E));
            var b = E * e, X = N.position.y * e, z = N.texture, D = R[z.baseTexture.uid], $ = z.frame, st = z._uvs, S = D.index++;
            D.indices[S * 6 + 0] = 0 + S * 4, D.indices[S * 6 + 1] = 1 + S * 4, D.indices[S * 6 + 2] = 2 + S * 4, D.indices[S * 6 + 3] = 0 + S * 4, D.indices[S * 6 + 4] = 2 + S * 4, D.indices[S * 6 + 5] = 3 + S * 4, D.vertices[S * 8 + 0] = b, D.vertices[S * 8 + 1] = X, D.vertices[S * 8 + 2] = b + $.width * e, D.vertices[S * 8 + 3] = X, D.vertices[S * 8 + 4] = b + $.width * e, D.vertices[S * 8 + 5] = X + $.height * e, D.vertices[S * 8 + 6] = b, D.vertices[S * 8 + 7] = X + $.height * e, D.uvs[S * 8 + 0] = st.x0, D.uvs[S * 8 + 1] = st.y0, D.uvs[S * 8 + 2] = st.x1, D.uvs[S * 8 + 3] = st.y1, D.uvs[S * 8 + 4] = st.x2, D.uvs[S * 8 + 5] = st.y2, D.uvs[S * 8 + 6] = st.x3, D.uvs[S * 8 + 7] = st.y3;
        }
        this._textWidth = f * e, this._textHeight = (s.y + i.lineHeight) * e;
        for (var I in R) {
            var N = R[I];
            if (this.anchor.x !== 0 || this.anchor.y !== 0) {
                var z = 0;
                var D = this._textWidth * this.anchor.x, $ = this._textHeight * this.anchor.y;
                for (var st = 0; st < N.total; st++)
                    N.vertices[z++] -= D, N.vertices[z++] -= $, N.vertices[z++] -= D, N.vertices[z++] -= $, N.vertices[z++] -= D, N.vertices[z++] -= $, N.vertices[z++] -= D, N.vertices[z++] -= $;
            }
            this._maxLineHeight = y * e;
            var E = N.mesh.geometry.getBuffer("aVertexPosition"), b = N.mesh.geometry.getBuffer("aTextureCoord"), X = N.mesh.geometry.getIndex();
            E.data = N.vertices, b.data = N.uvs, X.data = N.indices, E.update(), b.update(), X.update();
        }
        for (var I = 0; I < r.length; I++)
            Za.push(r[I]);
        this._font = i, this.dirty = !1;
    };
    Qa.prototype.updateTransform = function () { this.validate(), this.containerUpdateTransform(); };
    Qa.prototype._render = function (i) { this._autoResolution && this._resolution !== i.resolution && (this._resolution = i.resolution, this.dirty = !0); var _b = xt.available[this._fontName], t = _b.distanceFieldRange, e = _b.distanceFieldType, s = _b.size; if (e !== "none") {
        var _g = this.worldTransform, r = _g.a, n = _g.b, o = _g.c, a = _g.d, h = Math.sqrt(r * r + n * n), l = Math.sqrt(o * o + a * a), c = (Math.abs(h) + Math.abs(l)) / 2, u = this.fontSize / s, d = i._view.resolution;
        for (var _j = 0, _k = this._activePagesMeshData; _j < _k.length; _j++) {
            var f = _k[_j];
            f.mesh.shader.uniforms.uFWidth = c * t * u * d;
        }
    } _super.prototype._render.call(this, i); };
    Qa.prototype.getLocalBounds = function () { return this.validate(), _super.prototype.getLocalBounds.call(this); };
    Qa.prototype.validate = function () { var i = xt.available[this._fontName]; if (!i)
        throw new Error("Missing BitmapFont \"".concat(this._fontName, "\"")); this._font !== i && (this.dirty = !0), this.dirty && this.updateText(); };
    Object.defineProperty(Qa.prototype, "tint", {
        get: function () { return this._tint; },
        set: function (i) { if (this._tint !== i) {
            this._tint = i;
            for (var t = 0; t < this._activePagesMeshData.length; t++)
                this._activePagesMeshData[t].mesh.tint = i;
        } },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Qa.prototype, "align", {
        get: function () { return this._align; },
        set: function (i) { this._align !== i && (this._align = i, this.dirty = !0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Qa.prototype, "fontName", {
        get: function () { return this._fontName; },
        set: function (i) { if (!xt.available[i])
            throw new Error("Missing BitmapFont \"".concat(i, "\"")); this._fontName !== i && (this._fontName = i, this.dirty = !0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Qa.prototype, "fontSize", {
        get: function () { var i; return (i = this._fontSize) != null ? i : xt.available[this._fontName].size; },
        set: function (i) { this._fontSize !== i && (this._fontSize = i, this.dirty = !0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Qa.prototype, "anchor", {
        get: function () { return this._anchor; },
        set: function (i) { typeof i == "number" ? this._anchor.set(i) : this._anchor.copyFrom(i); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Qa.prototype, "text", {
        get: function () { return this._text; },
        set: function (i) { i = String(i == null ? "" : i), this._text !== i && (this._text = i, this.dirty = !0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Qa.prototype, "maxWidth", {
        get: function () { return this._maxWidth; },
        set: function (i) { this._maxWidth !== i && (this._maxWidth = i, this.dirty = !0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Qa.prototype, "maxLineHeight", {
        get: function () { return this.validate(), this._maxLineHeight; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Qa.prototype, "textWidth", {
        get: function () { return this.validate(), this._textWidth; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Qa.prototype, "letterSpacing", {
        get: function () { return this._letterSpacing; },
        set: function (i) { this._letterSpacing !== i && (this._letterSpacing = i, this.dirty = !0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Qa.prototype, "roundPixels", {
        get: function () { return this._roundPixels; },
        set: function (i) { i !== this._roundPixels && (this._roundPixels = i, this.dirty = !0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Qa.prototype, "textHeight", {
        get: function () { return this.validate(), this._textHeight; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Qa.prototype, "resolution", {
        get: function () { return this._resolution; },
        set: function (i) { this._autoResolution = !1, this._resolution !== i && (this._resolution = i, this.dirty = !0); },
        enumerable: false,
        configurable: true
    });
    Qa.prototype.destroy = function (i) { var t = this._textureCache, s = xt.available[this._fontName].distanceFieldType === "none" ? qa : Ka; s.push.apply(s, this._activePagesMeshData); for (var _b = 0, _g = this._activePagesMeshData; _b < _g.length; _b++) {
        var r = _g[_b];
        this.removeChild(r.mesh);
    } this._activePagesMeshData = [], s.filter(function (r) { return t[r.mesh.texture.baseTexture.uid]; }).forEach(function (r) { r.mesh.texture = B.EMPTY; }); for (var r in t)
        t[r].destroy(), delete t[r]; this._font = null, this._textureCache = null, _super.prototype.destroy.call(this, i); };
    return Qa;
}(wt));
var Ja = Qa;
Ja.styleDefaults = { align: "left", tint: 16777215, maxWidth: 0, letterSpacing: 0 };
var Bp = [".xml", ".fnt"], th = { extension: { type: P.LoadParser, priority: Lt.Normal }, test: function (i) { return Bp.includes(ft.extname(i)); }, testParse: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2 /*return*/, gi.test(i) || fs.test(i)];
        }); });
    }, parse: function (i, t, e) {
        return __awaiter(this, void 0, void 0, function () { var s, r, n, o, l, c, u, a, h; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    s = gi.test(i) ? gi.parse(i) : fs.parse(i), r = t.src, n = s.page, o = [];
                    for (l = 0; l < n.length; ++l) {
                        c = n[l].file, u = ft.join(ft.dirname(r), c);
                        o.push(u);
                    }
                    return [4 /*yield*/, e.load(o)];
                case 1:
                    a = _b.sent(), h = o.map(function (l) { return a[l]; });
                    return [2 /*return*/, xt.install(s, h, !0)];
            }
        }); });
    }, load: function (i, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, w.ADAPTER.fetch(i)];
                case 1: return [2 /*return*/, (_b.sent()).text()];
            }
        }); });
    }, unload: function (i) { i.destroy(); } };
U.add(th);
var Dp = { AlphaFilter: Od, BlurFilter: zd, BlurFilterPass: kr, ColorMatrixFilter: Gr, DisplacementFilter: $d, FXAAFilter: Zd, NoiseFilter: Jd };
export { At as ALPHA_MODES, qs as AbstractMultiResource, Vr as AccessibilityManager, bs as AnimatedSprite, Wr as Application, oo as ArrayResource, ai as Assets, Zo as AssetsClass, xi as Attribute, k as BLEND_MODES, Ti as BUFFER_BITS, Dt as BUFFER_TYPE, Cr as BackgroundSystem, Zt as BaseImageResource, Xa as BasePrepare, Js as BaseRenderTexture, W as BaseTexture, qi as BatchDrawCall, Fr as BatchGeometry, ei as BatchRenderer, Ho as BatchShaderGenerator, nr as BatchSystem, Ki as BatchTextureArray, xt as BitmapFont, _i as BitmapFontData, Ja as BitmapText, da as BlobResource, ii as Bounds, Tn as BrowserAdapter, rt as Buffer, Be as BufferResource, Lr as BufferSystem, Bt as CLEAR_MODES, bn as COLOR_MASK_BITS, Fe as Cache, ao as CanvasResource, ms as Circle, le as CompressedTextureResource, wt as Container, or as ContextSystem, Ha as CountLimiter, Ks as CubeResource, Ln as DEG_TO_RAD, Pt as DRAW_MODES, et as DisplayObject, re as ENV, _s as Ellipse, Wo as EventBoundary, Xr as EventSystem, P as ExtensionType, tn as Extract, C as FORMATS, xa as FORMATS_TO_COMPONENTS, jo as FederatedDisplayObject, Ge as FederatedEvent, ri as FederatedMouseEvent, Rt as FederatedPointerEvent, Qi as FederatedWheelEvent, vi as FillStyle, Ct as Filter, uo as FilterState, rr as FilterSystem, ki as Framebuffer, ar as FramebufferSystem, wi as GC_MODES, po as GLFramebuffer, Fo as GLProgram, $i as GLTexture, Ue as GRAPHICS_CURVES, Rr as GenerateTextureSystem, se as Geometry, lr as GeometrySystem, os as Graphics, yi as GraphicsData, on as GraphicsGeometry, gd as IGLUniformData, Li as INSTALLED, yt as INTERNAL_FORMATS, li as INTERNAL_FORMAT_TO_BYTES_PER_PIXEL, Se as ImageBitmapResource, Zs as ImageResource, ae as LINE_CAP, Jt as LINE_JOIN, ys as LineStyle, Lt as LoaderParserPriority, ht as MASK_TYPES, Mt as MIPMAP_MODES, nt as MSAA_QUALITY, mo as MaskData, gr as MaskSystem, Z as Matrix, we as Mesh, Ba as MeshBatchUvs, di as MeshGeometry, ke as MeshMaterial, Ur as MultisampleSystem, np as NineSlicePlane, Qe as ObjectRenderer, Or as ObjectRendererSystem, te as ObservablePoint, Xe as PI_2, bt as PRECISION, op as ParticleContainer, ln as ParticleRenderer, Fa as PlaneGeometry, Pr as PluginSystem, j as Point, Ae as Polygon, fn as Prepare, $t as Program, yr as ProjectionSystem, co as Quad, ir as QuadUv, Fn as RAD_TO_DEG, yn as RENDERER_TYPE, V as Rectangle, ee as RenderTexture, er as RenderTexturePool, br as RenderTextureSystem, be as Renderer, jr as ResizePlugin, Me as Resource, La as RopeGeometry, gs as RoundedRectangle, Tt as Runner, Ei as SAMPLER_TYPES, Vt as SCALE_MODES, dt as SHAPES, De as SVGResource, xr as ScissorSystem, kt as Shader, Tr as ShaderSystem, rp as SimpleMesh, Ua as SimplePlane, sp as SimpleRope, he as Sprite, Ro as SpriteMaskFilter, cs as Spritesheet, Mr as StartupSystem, Yt as State, wr as StateSystem, vr as StencilSystem, Uo as SystemManager, ce as TARGETS, fi as TEXT_GRADIENT, O as TYPES, Qr as TYPES_TO_BYTES_PER_COMPONENT, va as TYPES_TO_BYTES_PER_PIXEL, Xo as TemporaryDisplayObject, ls as Text, gi as TextFormat, F as TextMetrics, ie as TextStyle, B as Texture, Ar as TextureGCSystem, Wi as TextureMatrix, Sr as TextureSystem, tr as TextureUvs, Q as Ticker, Is as TickerPlugin, _n as TilingSprite, pn as TilingSpriteRenderer, bp as TimeLimiter, Ve as Transform, Nd as TransformFeedback, Br as TransformFeedbackSystem, ne as UPDATE_PRIORITY, It as UniformGroup, Ld as VERSION, Oi as VideoResource, Ir as ViewSystem, Zi as ViewableBuffer, zt as WRAP_MODES, ds as XMLFormat, fs as XMLStringFormat, zo as accessibleTarget, Ya as autoDetectFormat, ko as autoDetectRenderer, $s as autoDetectResource, Jo as cacheTextureArray, Yr as checkDataUrl, ni as checkExtension, Ao as checkMaxIfStatementsInShader, jt as convertToList, Ko as createStringVariations, hi as createTexture, Bo as createUBOElements, Dr as defaultFilterVertex, Go as defaultVertex, ha as detectAvif, pa as detectCompressedTextures, ua as detectDefaults, la as detectWebp, U as extensions, Dp as filters, Lo as generateProgram, No as generateUniformBufferSync, ia as getFontFamilyName, yo as getTestContext, Do as getUBOData, tp as graphicsUtils, tt as groupD8, Nt as isMobile, oi as isSingleItem, th as loadBitmapFont, ba as loadDDS, oa as loadImageBitmap, ta as loadJson, Ta as loadKTX, Cf as loadSVG, ts as loadTextures, ea as loadTxt, sa as loadWebFont, _a as parseDDS, ya as parseKTX, Ea as resolveCompressedTextureUrl, aa as resolveTextureUrl, w as settings, Wa as spritesheetAsset, ve as uniformParsers, Vu as utils };
//# sourceMappingURL=pixi.min.mjs.map
//# sourceMappingURL=pixi.min.mjs.map