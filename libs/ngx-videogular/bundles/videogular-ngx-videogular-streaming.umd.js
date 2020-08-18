(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@videogular/ngx-videogular/core')) :
    typeof define === 'function' && define.amd ? define('@videogular/ngx-videogular/streaming', ['exports', '@angular/core', '@angular/common', '@videogular/ngx-videogular/core'], factory) :
    (global = global || self, factory((global.videogular = global.videogular || {}, global.videogular['ngx-videogular'] = global.videogular['ngx-videogular'] || {}, global.videogular['ngx-videogular'].streaming = {}), global.ng.core, global.ng.common, global.videogular['ngx-videogular'].core));
}(this, (function (exports, core, common, core$1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/vg-dash/vg-dash.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VgDashDirective = /** @class */ (function () {
        /**
         * @param {?} ref
         * @param {?} API
         */
        function VgDashDirective(ref, API) {
            this.ref = ref;
            this.API = API;
            this.onGetBitrates = new core.EventEmitter();
            this.subscriptions = [];
        }
        /**
         * @return {?}
         */
        VgDashDirective.prototype.ngOnInit = function () {
            var _this = this;
            if (this.API.isPlayerReady) {
                this.onPlayerReady();
            }
            else {
                this.subscriptions.push(this.API.playerReadyEvent.subscribe(( /**
                 * @return {?}
                 */function () { return _this.onPlayerReady(); })));
            }
        };
        /**
         * @return {?}
         */
        VgDashDirective.prototype.onPlayerReady = function () {
            this.vgFor = this.ref.nativeElement.getAttribute('vgFor');
            this.target = this.API.getMediaById(this.vgFor);
            this.createPlayer();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        VgDashDirective.prototype.ngOnChanges = function (changes) {
            var _a;
            ((_a = changes.vgDash) === null || _a === void 0 ? void 0 : _a.currentValue) ? this.createPlayer() : this.destroyPlayer();
        };
        /**
         * @return {?}
         */
        VgDashDirective.prototype.createPlayer = function () {
            var _this = this;
            if (this.dash) {
                this.destroyPlayer();
            }
            // It's a DASH source
            if (this.vgDash &&
                (this.vgDash.indexOf('.mpd') > -1 ||
                    this.vgDash.indexOf('mpd-time-csf') > -1)) {
                /** @type {?} */
                var drmOptions = void 0;
                if (this.vgDRMLicenseServer) {
                    drmOptions = this.vgDRMLicenseServer;
                    if (this.vgDRMToken) {
                        for (var drmServer in drmOptions) {
                            if (drmServer.hasOwnProperty(drmServer)) {
                                drmOptions[drmServer].httpRequestHeaders = {
                                    Authorization: this.vgDRMToken,
                                };
                            }
                        }
                    }
                }
                this.dash = dashjs.MediaPlayer().create();
                this.dash.getDebug().setLogToBrowserConsole(false);
                this.dash.initialize(this.ref.nativeElement);
                this.dash.setAutoPlay(false);
                this.dash.on(dashjs.MediaPlayer.events.STREAM_INITIALIZED, ( /**
                 * @return {?}
                 */function () {
                    /** @type {?} */
                    var audioList = _this.dash.getBitrateInfoListFor('audio');
                    /** @type {?} */
                    var videoList = _this.dash.getBitrateInfoListFor('video');
                    if (audioList.length > 1) {
                        audioList.forEach(( /**
                         * @param {?} item
                         * @return {?}
                         */function (item) { return (item.qualityIndex = ++item.qualityIndex); }));
                        audioList.unshift({
                            qualityIndex: 0,
                            width: 0,
                            height: 0,
                            bitrate: 0,
                            mediaType: 'video',
                            label: 'AUTO',
                        });
                        _this.onGetBitrates.emit(audioList);
                    }
                    if (videoList.length > 1) {
                        videoList.forEach(( /**
                         * @param {?} item
                         * @return {?}
                         */function (item) { return (item.qualityIndex = ++item.qualityIndex); }));
                        videoList.unshift({
                            qualityIndex: 0,
                            width: 0,
                            height: 0,
                            bitrate: 0,
                            mediaType: 'video',
                            label: 'AUTO',
                        });
                        _this.onGetBitrates.emit(videoList);
                    }
                }));
                if (drmOptions) {
                    this.dash.setProtectionData(drmOptions);
                }
                this.dash.attachSource(this.vgDash);
            }
            else {
                if (this.target) {
                    this.target.pause();
                    this.target.seekTime(0);
                    this.ref.nativeElement.src = this.vgDash;
                }
            }
        };
        /**
         * @param {?} bitrate
         * @return {?}
         */
        VgDashDirective.prototype.setBitrate = function (bitrate) {
            if (this.dash) {
                if (bitrate.qualityIndex > 0) {
                    if (this.dash.getAutoSwitchQualityFor(bitrate.mediaType)) {
                        this.dash.setAutoSwitchQualityFor(bitrate.mediaType, false);
                    }
                    /** @type {?} */
                    var nextIndex = bitrate.qualityIndex - 1;
                    this.dash.setQualityFor(bitrate.mediaType, nextIndex);
                }
                else {
                    this.dash.setAutoSwitchQualityFor(bitrate.mediaType, true);
                }
            }
        };
        /**
         * @return {?}
         */
        VgDashDirective.prototype.destroyPlayer = function () {
            if (this.dash) {
                this.dash.reset();
                this.dash = null;
            }
        };
        /**
         * @return {?}
         */
        VgDashDirective.prototype.ngOnDestroy = function () {
            this.subscriptions.forEach(( /**
             * @param {?} s
             * @return {?}
             */function (s) { return s.unsubscribe(); }));
            this.destroyPlayer();
        };
        return VgDashDirective;
    }());
    VgDashDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[vgDash]',
                    exportAs: 'vgDash',
                },] }
    ];
    /** @nocollapse */
    VgDashDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core$1.VgApiService }
    ]; };
    VgDashDirective.propDecorators = {
        vgDash: [{ type: core.Input }],
        vgDRMToken: [{ type: core.Input }],
        vgDRMLicenseServer: [{ type: core.Input }],
        onGetBitrates: [{ type: core.Output }]
    };
    if (false) {
        /** @type {?} */
        VgDashDirective.prototype.vgDash;
        /** @type {?} */
        VgDashDirective.prototype.vgDRMToken;
        /** @type {?} */
        VgDashDirective.prototype.vgDRMLicenseServer;
        /** @type {?} */
        VgDashDirective.prototype.onGetBitrates;
        /** @type {?} */
        VgDashDirective.prototype.vgFor;
        /** @type {?} */
        VgDashDirective.prototype.target;
        /** @type {?} */
        VgDashDirective.prototype.dash;
        /** @type {?} */
        VgDashDirective.prototype.subscriptions;
        /**
         * @type {?}
         * @private
         */
        VgDashDirective.prototype.ref;
        /** @type {?} */
        VgDashDirective.prototype.API;
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, exports) {
        for (var p in m)
            if (p !== "default" && !exports.hasOwnProperty(p))
                __createBinding(exports, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var VgHlsDirective = /** @class */ (function () {
        /**
         * @param {?} ref
         * @param {?} API
         */
        function VgHlsDirective(ref, API) {
            this.ref = ref;
            this.API = API;
            this.vgHlsHeaders = {};
            this.onGetBitrates = new core.EventEmitter();
            this.subscriptions = [];
        }
        /**
         * @return {?}
         */
        VgHlsDirective.prototype.ngOnInit = function () {
            var _this = this;
            if (this.API.isPlayerReady) {
                this.onPlayerReady();
            }
            else {
                this.subscriptions.push(this.API.playerReadyEvent.subscribe(( /**
                 * @return {?}
                 */function () { return _this.onPlayerReady(); })));
            }
        };
        /**
         * @return {?}
         */
        VgHlsDirective.prototype.onPlayerReady = function () {
            var _this = this;
            this.crossorigin = this.ref.nativeElement.getAttribute('crossorigin');
            this.preload = this.ref.nativeElement.getAttribute('preload') !== 'none';
            this.vgFor = this.ref.nativeElement.getAttribute('vgFor');
            if (this.vgFor) {
                this.target = this.API.getMediaById(this.vgFor);
            }
            else {
                this.target = this.API.getDefaultMedia();
            }
            this.config = ( /** @type {?} */({
                autoStartLoad: this.preload,
            }));
            // @ts-ignore
            this.config.xhrSetup = ( /**
             * @param {?} xhr
             * @return {?}
             */function (xhr) {
                var e_1, _b;
                // Send cookies
                if (_this.crossorigin === 'use-credentials') {
                    xhr.withCredentials = true;
                }
                try {
                    for (var _c = __values(Object.keys(_this.vgHlsHeaders)), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var key = _d.value;
                        xhr.setRequestHeader(key, _this.vgHlsHeaders[key]);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
            this.createPlayer();
            if (!this.preload) {
                this.subscriptions.push(this.API.subscriptions.play.subscribe(( /**
                 * @return {?}
                 */function () {
                    if (_this.hls) {
                        _this.hls.startLoad(0);
                    }
                })));
            }
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        VgHlsDirective.prototype.ngOnChanges = function (changes) {
            var _a;
            if ((_a = changes.vgHls) === null || _a === void 0 ? void 0 : _a.currentValue) {
                this.createPlayer();
            }
            else if (changes.vgHlsHeaders && changes.vgHlsHeaders.currentValue) {
                // Do nothing. We don't want to create a or destroy a player if the headers change.
            }
            else {
                this.destroyPlayer();
            }
        };
        /**
         * @return {?}
         */
        VgHlsDirective.prototype.createPlayer = function () {
            var _this = this;
            if (this.hls) {
                this.destroyPlayer();
            }
            // It's a HLS source
            if (this.vgHls &&
                this.vgHls.indexOf('m3u8') > -1 &&
                Hls.isSupported() &&
                this.API.isPlayerReady) {
                /** @type {?} */
                var video = this.ref.nativeElement;
                this.hls = new Hls(this.config);
                // @ts-ignore
                this.hls.on(Hls.Events.MANIFEST_PARSED, ( /**
                 * @param {?} _event
                 * @param {?} data
                 * @return {?}
                 */function (_event, data) {
                    /** @type {?} */
                    var videoList = [];
                    videoList.push({
                        qualityIndex: 0,
                        width: 0,
                        height: 0,
                        bitrate: 0,
                        mediaType: 'video',
                        label: 'AUTO',
                    });
                    data.levels.forEach(( /**
                     * @param {?} item
                     * @param {?} index
                     * @return {?}
                     */function (item, index) {
                        videoList.push({
                            qualityIndex: ++index,
                            width: item.width,
                            height: item.height,
                            bitrate: item.bitrate,
                            mediaType: 'video',
                            label: item.name,
                        });
                    }));
                    _this.onGetBitrates.emit(videoList);
                }));
                // @ts-ignore
                this.hls.on(Hls.Events.LEVEL_LOADED, ( /**
                 * @param {?} _event
                 * @param {?} data
                 * @return {?}
                 */function (_event, data) {
                    _this.target.isLive = data.details.live;
                }));
                this.hls.loadSource(this.vgHls);
                this.hls.attachMedia(video);
            }
            else {
                if (this.target && !!this.target.pause) {
                    this.target.pause();
                    this.target.seekTime(0);
                    this.ref.nativeElement.src = this.vgHls;
                }
            }
        };
        /**
         * @param {?} bitrate
         * @return {?}
         */
        VgHlsDirective.prototype.setBitrate = function (bitrate) {
            if (this.hls) {
                this.hls.nextLevel = bitrate.qualityIndex - 1;
            }
        };
        /**
         * @return {?}
         */
        VgHlsDirective.prototype.destroyPlayer = function () {
            if (this.hls) {
                this.hls.destroy();
                this.hls = null;
            }
        };
        /**
         * @return {?}
         */
        VgHlsDirective.prototype.ngOnDestroy = function () {
            this.subscriptions.forEach(( /**
             * @param {?} s
             * @return {?}
             */function (s) { return s.unsubscribe(); }));
            this.destroyPlayer();
            delete this.hls;
        };
        return VgHlsDirective;
    }());
    VgHlsDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[vgHls]',
                    exportAs: 'vgHls',
                },] }
    ];
    /** @nocollapse */
    VgHlsDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core$1.VgApiService }
    ]; };
    VgHlsDirective.propDecorators = {
        vgHls: [{ type: core.Input }],
        vgHlsHeaders: [{ type: core.Input }],
        onGetBitrates: [{ type: core.Output }]
    };
    if (false) {
        /** @type {?} */
        VgHlsDirective.prototype.vgHls;
        /** @type {?} */
        VgHlsDirective.prototype.vgHlsHeaders;
        /** @type {?} */
        VgHlsDirective.prototype.onGetBitrates;
        /** @type {?} */
        VgHlsDirective.prototype.vgFor;
        /** @type {?} */
        VgHlsDirective.prototype.target;
        /** @type {?} */
        VgHlsDirective.prototype.hls;
        /** @type {?} */
        VgHlsDirective.prototype.preload;
        /** @type {?} */
        VgHlsDirective.prototype.crossorigin;
        /** @type {?} */
        VgHlsDirective.prototype.config;
        /** @type {?} */
        VgHlsDirective.prototype.subscriptions;
        /**
         * @type {?}
         * @private
         */
        VgHlsDirective.prototype.ref;
        /** @type {?} */
        VgHlsDirective.prototype.API;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/streaming.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VgStreamingModule = /** @class */ (function () {
        function VgStreamingModule() {
        }
        return VgStreamingModule;
    }());
    VgStreamingModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, core$1.VgCoreModule],
                    declarations: [VgDashDirective, VgHlsDirective],
                    exports: [VgDashDirective, VgHlsDirective]
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: videogular-ngx-videogular-streaming.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.VgDashDirective = VgDashDirective;
    exports.VgHlsDirective = VgHlsDirective;
    exports.VgStreamingModule = VgStreamingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=videogular-ngx-videogular-streaming.umd.js.map
