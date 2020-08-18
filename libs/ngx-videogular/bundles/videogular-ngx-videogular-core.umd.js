(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@videogular/ngx-videogular/core', ['exports', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.videogular = global.videogular || {}, global.videogular['ngx-videogular'] = global.videogular['ngx-videogular'] || {}, global.videogular['ngx-videogular'].core = {}), global.ng.core, global.ng.common, global.rxjs, global.rxjs.operators));
}(this, (function (exports, i0, common, rxjs, operators) { 'use strict';

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

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/states/vg-states.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VgStates = /** @class */ (function () {
        function VgStates() {
        }
        return VgStates;
    }());
    VgStates.VG_ENDED = 'ended';
    VgStates.VG_PAUSED = 'paused';
    VgStates.VG_PLAYING = 'playing';
    VgStates.VG_LOADING = 'waiting';
    VgStates.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ VgStates.ɵprov = i0.ɵɵdefineInjectable({ factory: function VgStates_Factory() { return new VgStates(); }, token: VgStates, providedIn: "root" });
    if (false) {
        /** @type {?} */
        VgStates.VG_ENDED;
        /** @type {?} */
        VgStates.VG_PAUSED;
        /** @type {?} */
        VgStates.VG_PLAYING;
        /** @type {?} */
        VgStates.VG_LOADING;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/vg-api/vg-api.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VgApiService = /** @class */ (function () {
        function VgApiService() {
            this.medias = {}; // TODO: refactor to Set<IPlayable>
            this.playerReadyEvent = new i0.EventEmitter(true);
            this.isPlayerReady = false;
        }
        /**
         * @param {?} fsAPI
         * @return {?}
         */
        VgApiService.prototype.onPlayerReady = function (fsAPI) {
            this.fsAPI = fsAPI;
            this.isPlayerReady = true;
            this.playerReadyEvent.emit(this);
        };
        /**
         * @return {?}
         */
        VgApiService.prototype.getDefaultMedia = function () {
            for (var item in this.medias) {
                if (this.medias[item]) {
                    return this.medias[item];
                }
            }
        };
        /**
         * @return {?}
         */
        VgApiService.prototype.getMasterMedia = function () {
            /** @type {?} */
            var master;
            for (var id in this.medias) {
                if (this.medias[id].vgMaster === 'true' ||
                    this.medias[id].vgMaster === true) {
                    master = this.medias[id];
                    break;
                }
            }
            return master || this.getDefaultMedia();
        };
        /**
         * @return {?}
         */
        VgApiService.prototype.isMasterDefined = function () {
            /** @type {?} */
            var result = false;
            for (var id in this.medias) {
                if (this.medias[id].vgMaster === 'true' ||
                    this.medias[id].vgMaster === true) {
                    result = true;
                    break;
                }
            }
            return result;
        };
        /**
         * @param {?=} id
         * @return {?}
         */
        VgApiService.prototype.getMediaById = function (id) {
            if (id === void 0) { id = null; }
            /** @type {?} */
            var media = this.medias[id];
            if (!id || id === '*') {
                media = this;
            }
            return media;
        };
        /**
         * @return {?}
         */
        VgApiService.prototype.play = function () {
            for (var id in this.medias) {
                if (this.medias[id]) {
                    this.medias[id].play();
                }
            }
        };
        /**
         * @return {?}
         */
        VgApiService.prototype.pause = function () {
            for (var id in this.medias) {
                if (this.medias[id]) {
                    this.medias[id].pause();
                }
            }
        };
        Object.defineProperty(VgApiService.prototype, "duration", {
            /**
             * @return {?}
             */
            get: function () {
                return this.$$getAllProperties('duration');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VgApiService.prototype, "currentTime", {
            /**
             * @return {?}
             */
            get: function () {
                return this.$$getAllProperties('currentTime');
            },
            /**
             * @param {?} seconds
             * @return {?}
             */
            set: function (seconds) {
                this.$$setAllProperties('currentTime', seconds);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VgApiService.prototype, "state", {
            /**
             * @return {?}
             */
            get: function () {
                return this.$$getAllProperties('state');
            },
            /**
             * @param {?} state
             * @return {?}
             */
            set: function (state) {
                this.$$setAllProperties('state', state);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VgApiService.prototype, "volume", {
            /**
             * @return {?}
             */
            get: function () {
                return this.$$getAllProperties('volume');
            },
            /**
             * @param {?} volume
             * @return {?}
             */
            set: function (volume) {
                this.$$setAllProperties('volume', volume);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VgApiService.prototype, "playbackRate", {
            /**
             * @return {?}
             */
            get: function () {
                return this.$$getAllProperties('playbackRate');
            },
            /**
             * @param {?} rate
             * @return {?}
             */
            set: function (rate) {
                this.$$setAllProperties('playbackRate', rate);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VgApiService.prototype, "canPlay", {
            /**
             * @return {?}
             */
            get: function () {
                return this.$$getAllProperties('canPlay');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VgApiService.prototype, "canPlayThrough", {
            /**
             * @return {?}
             */
            get: function () {
                return this.$$getAllProperties('canPlayThrough');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VgApiService.prototype, "isMetadataLoaded", {
            /**
             * @return {?}
             */
            get: function () {
                return this.$$getAllProperties('isMetadataLoaded');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VgApiService.prototype, "isWaiting", {
            /**
             * @return {?}
             */
            get: function () {
                return this.$$getAllProperties('isWaiting');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VgApiService.prototype, "isCompleted", {
            /**
             * @return {?}
             */
            get: function () {
                return this.$$getAllProperties('isCompleted');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VgApiService.prototype, "isLive", {
            /**
             * @return {?}
             */
            get: function () {
                return this.$$getAllProperties('isLive');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VgApiService.prototype, "isMaster", {
            /**
             * @return {?}
             */
            get: function () {
                return this.$$getAllProperties('isMaster');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VgApiService.prototype, "time", {
            /**
             * @return {?}
             */
            get: function () {
                return this.$$getAllProperties('time');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VgApiService.prototype, "buffer", {
            /**
             * @return {?}
             */
            get: function () {
                return this.$$getAllProperties('buffer');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VgApiService.prototype, "buffered", {
            /**
             * @return {?}
             */
            get: function () {
                return this.$$getAllProperties('buffered');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VgApiService.prototype, "subscriptions", {
            /**
             * @return {?}
             */
            get: function () {
                return this.$$getAllProperties('subscriptions');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VgApiService.prototype, "textTracks", {
            /**
             * @return {?}
             */
            get: function () {
                return this.$$getAllProperties('textTracks');
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} value
         * @param {?=} byPercent
         * @return {?}
         */
        VgApiService.prototype.seekTime = function (value, byPercent) {
            if (byPercent === void 0) { byPercent = false; }
            for (var id in this.medias) {
                if (this.medias[id]) {
                    this.$$seek(this.medias[id], value, byPercent);
                }
            }
        };
        /**
         * @param {?} media
         * @param {?} value
         * @param {?=} byPercent
         * @return {?}
         */
        VgApiService.prototype.$$seek = function (media, value, byPercent) {
            if (byPercent === void 0) { byPercent = false; }
            /** @type {?} */
            var second;
            /** @type {?} */
            var duration = media.duration;
            if (byPercent) {
                if (this.isMasterDefined()) {
                    duration = this.getMasterMedia().duration;
                }
                second = (value * duration) / 100;
            }
            else {
                second = value;
            }
            media.currentTime = second;
        };
        /**
         * @param {?} type
         * @param {?=} label
         * @param {?=} language
         * @return {?}
         */
        VgApiService.prototype.addTextTrack = function (type, label, language) {
            for (var id in this.medias) {
                if (this.medias[id]) {
                    this.$$addTextTrack(this.medias[id], type, label, language);
                }
            }
        };
        /**
         * @param {?} media
         * @param {?} type
         * @param {?=} label
         * @param {?=} language
         * @return {?}
         */
        VgApiService.prototype.$$addTextTrack = function (media, type, label, language) {
            media.addTextTrack(type, label, language);
        };
        /**
         * @param {?} property
         * @return {?}
         */
        VgApiService.prototype.$$getAllProperties = function (property) {
            /** @type {?} */
            var medias = {};
            /** @type {?} */
            var result;
            for (var id in this.medias) {
                if (this.medias[id]) {
                    medias[id] = this.medias[id];
                }
            }
            /** @type {?} */
            var nMedias = Object.keys(medias).length;
            switch (nMedias) {
                case 0:
                    // Return default values until vgMedia is initialized
                    switch (property) {
                        case 'state':
                            result = VgStates.VG_PAUSED;
                            break;
                        case 'playbackRate':
                        case 'volume':
                            result = 1;
                            break;
                        case 'time':
                            result = { current: 0, total: 0, left: 0 };
                            break;
                    }
                    break;
                case 1:
                    // If there's only one media element then return the plain value
                    /** @type {?} */
                    var firstMediaId = Object.keys(medias)[0];
                    result = medias[firstMediaId][property];
                    break;
                default:
                    // TODO: return 'master' value
                    /** @type {?} */
                    var master = this.getMasterMedia();
                    result = medias[master.id][property];
            }
            return result;
        };
        /**
         * @param {?} property
         * @param {?} value
         * @return {?}
         */
        VgApiService.prototype.$$setAllProperties = function (property, value) {
            for (var id in this.medias) {
                if (this.medias[id]) {
                    this.medias[id][property] = value;
                }
            }
        };
        /**
         * @param {?} elem
         * @return {?}
         */
        VgApiService.prototype.registerElement = function (elem) {
            this.videogularElement = elem;
        };
        /**
         * @param {?} media
         * @return {?}
         */
        VgApiService.prototype.registerMedia = function (media) {
            this.medias[media.id] = media;
        };
        /**
         * @param {?} media
         * @return {?}
         */
        VgApiService.prototype.unregisterMedia = function (media) {
            delete this.medias[media.id];
        };
        return VgApiService;
    }());
    VgApiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    VgApiService.ctorParameters = function () { return []; };
    /** @nocollapse */ VgApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function VgApiService_Factory() { return new VgApiService(); }, token: VgApiService, providedIn: "root" });
    if (false) {
        /** @type {?} */
        VgApiService.prototype.medias;
        /** @type {?} */
        VgApiService.prototype.videogularElement;
        /** @type {?} */
        VgApiService.prototype.playerReadyEvent;
        /** @type {?} */
        VgApiService.prototype.isPlayerReady;
        /** @type {?} */
        VgApiService.prototype.fsAPI;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/vg-controls-hidden/vg-controls-hidden.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VgControlsHiddenService = /** @class */ (function () {
        function VgControlsHiddenService() {
            this.isHiddenSubject = new rxjs.Subject();
            this.isHidden = this.isHiddenSubject.asObservable();
        }
        /**
         * @param {?} hidden
         * @return {?}
         */
        VgControlsHiddenService.prototype.state = function (hidden) {
            this.isHiddenSubject.next(hidden);
        };
        return VgControlsHiddenService;
    }());
    VgControlsHiddenService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    VgControlsHiddenService.ctorParameters = function () { return []; };
    /** @nocollapse */ VgControlsHiddenService.ɵprov = i0.ɵɵdefineInjectable({ factory: function VgControlsHiddenService_Factory() { return new VgControlsHiddenService(); }, token: VgControlsHiddenService, providedIn: "root" });
    if (false) {
        /** @type {?} */
        VgControlsHiddenService.prototype.isHidden;
        /**
         * @type {?}
         * @private
         */
        VgControlsHiddenService.prototype.isHiddenSubject;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/vg-utils/vg-utils.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VgUtilsService = /** @class */ (function () {
        function VgUtilsService() {
        }
        /**
         * Inspired by Paul Irish
         * https://gist.github.com/paulirish/211209
         * @return {?}
         */
        VgUtilsService.getZIndex = function () {
            /** @type {?} */
            var zIndex = 1;
            /** @type {?} */
            var elementZIndex;
            /** @type {?} */
            var tags = document.getElementsByTagName('*');
            for (var i = 0, l = tags.length; i < l; i++) {
                elementZIndex = parseInt(window.getComputedStyle(tags[i])['z-index'], 10);
                if (elementZIndex > zIndex) {
                    zIndex = elementZIndex + 1;
                }
            }
            return zIndex;
        };
        // Very simple mobile detection, not 100% reliable
        /**
         * @return {?}
         */
        VgUtilsService.isMobileDevice = function () {
            // return (
            //   typeof window.screen.orientation !== 'undefined' ||
            //   navigator.userAgent.indexOf('IEMobile') !== -1
            // );
            // window.orientation is deprecated and we should use window.screen.orientation
            return (typeof window.orientation !== 'undefined' ||
                navigator.userAgent.indexOf('IEMobile') !== -1);
        };
        /**
         * @return {?}
         */
        VgUtilsService.isiOSDevice = function () {
            return (navigator.userAgent.match(/ip(hone|ad|od)/i) &&
                !navigator.userAgent.match(/(iemobile)[\/\s]?([\w\.]*)/i));
        };
        /**
         * @return {?}
         */
        VgUtilsService.isCordova = function () {
            return (document.URL.indexOf('http://') === -1 &&
                document.URL.indexOf('https://') === -1);
        };
        return VgUtilsService;
    }());
    VgUtilsService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ VgUtilsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function VgUtilsService_Factory() { return new VgUtilsService(); }, token: VgUtilsService, providedIn: "root" });

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/vg-fullscreen-api/vg-fullscreen-api.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VgFullscreenApiService = /** @class */ (function () {
        function VgFullscreenApiService() {
            this.nativeFullscreen = true;
            this.isFullscreen = false;
            this.onChangeFullscreen = new i0.EventEmitter();
        }
        /**
         * @param {?} elem
         * @param {?} medias
         * @return {?}
         */
        VgFullscreenApiService.prototype.init = function (elem, medias) {
            var _this = this;
            this.videogularElement = elem;
            this.medias = medias;
            /** @type {?} */
            var APIs = {
                w3: {
                    enabled: 'fullscreenEnabled',
                    element: 'fullscreenElement',
                    request: 'requestFullscreen',
                    exit: 'exitFullscreen',
                    onchange: 'fullscreenchange',
                    onerror: 'fullscreenerror',
                },
                newWebkit: {
                    enabled: 'webkitFullscreenEnabled',
                    element: 'webkitFullscreenElement',
                    request: 'webkitRequestFullscreen',
                    exit: 'webkitExitFullscreen',
                    onchange: 'webkitfullscreenchange',
                    onerror: 'webkitfullscreenerror',
                },
                oldWebkit: {
                    enabled: 'webkitIsFullScreen',
                    element: 'webkitCurrentFullScreenElement',
                    request: 'webkitRequestFullScreen',
                    exit: 'webkitCancelFullScreen',
                    onchange: 'webkitfullscreenchange',
                    onerror: 'webkitfullscreenerror',
                },
                moz: {
                    enabled: 'mozFullScreen',
                    element: 'mozFullScreenElement',
                    request: 'mozRequestFullScreen',
                    exit: 'mozCancelFullScreen',
                    onchange: 'mozfullscreenchange',
                    onerror: 'mozfullscreenerror',
                },
                ios: {
                    enabled: 'webkitFullscreenEnabled',
                    element: 'webkitFullscreenElement',
                    request: 'webkitEnterFullscreen',
                    exit: 'webkitExitFullscreen',
                    onchange: 'webkitendfullscreen',
                    // Hack for iOS: webkitfullscreenchange it's not firing
                    onerror: 'webkitfullscreenerror',
                },
                ms: {
                    enabled: 'msFullscreenEnabled',
                    element: 'msFullscreenElement',
                    request: 'msRequestFullscreen',
                    exit: 'msExitFullscreen',
                    onchange: 'MSFullscreenChange',
                    onerror: 'MSFullscreenError',
                },
            };
            for (var browser in APIs) {
                if (APIs[browser].enabled in document) {
                    this.polyfill = APIs[browser];
                    break;
                }
            }
            if (VgUtilsService.isiOSDevice()) {
                this.polyfill = APIs.ios;
            }
            this.isAvailable = this.polyfill != null;
            if (this.polyfill == null) {
                return;
            }
            /** @type {?} */
            var fsElemDispatcher;
            switch (this.polyfill.onchange) {
                // Mozilla dispatches the fullscreen change event from document, not the element
                // See: https://bugzilla.mozilla.org/show_bug.cgi?id=724816#c3
                case 'mozfullscreenchange':
                    fsElemDispatcher = document;
                    break;
                // iOS dispatches the fullscreen change event from video element
                case 'webkitendfullscreen':
                    fsElemDispatcher = this.medias.toArray()[0].elem;
                    break;
                // HTML5 implementation dispatches the fullscreen change event from the element
                default:
                    fsElemDispatcher = elem;
            }
            this.fsChangeSubscription = rxjs.fromEvent(fsElemDispatcher, this.polyfill.onchange).subscribe(( /**
             * @return {?}
             */function () {
                _this.onFullscreenChange();
            }));
        };
        /**
         * @return {?}
         */
        VgFullscreenApiService.prototype.onFullscreenChange = function () {
            this.isFullscreen = !!document[this.polyfill.element];
            this.onChangeFullscreen.emit(this.isFullscreen);
        };
        /**
         * @param {?=} element
         * @return {?}
         */
        VgFullscreenApiService.prototype.toggleFullscreen = function (element) {
            if (element === void 0) { element = null; }
            if (this.isFullscreen) {
                this.exit();
            }
            else {
                this.request(element);
            }
        };
        /**
         * @param {?} elem
         * @return {?}
         */
        VgFullscreenApiService.prototype.request = function (elem) {
            if (!elem) {
                elem = this.videogularElement;
            }
            this.isFullscreen = true;
            this.onChangeFullscreen.emit(true);
            // Perform native full screen support
            if (this.isAvailable && this.nativeFullscreen) {
                // Fullscreen for mobile devices
                if (VgUtilsService.isMobileDevice()) {
                    // We should make fullscreen the video object if it doesn't have native fullscreen support
                    // Fallback! We can't set vg-player on fullscreen, only video/audio objects
                    if ((!this.polyfill.enabled && elem === this.videogularElement) ||
                        VgUtilsService.isiOSDevice()) {
                        elem = this.medias.toArray()[0].elem;
                    }
                    this.enterElementInFullScreen(elem);
                }
                else {
                    this.enterElementInFullScreen(this.videogularElement);
                }
            }
        };
        /**
         * @param {?} elem
         * @return {?}
         */
        VgFullscreenApiService.prototype.enterElementInFullScreen = function (elem) {
            elem[this.polyfill.request]();
        };
        /**
         * @return {?}
         */
        VgFullscreenApiService.prototype.exit = function () {
            this.isFullscreen = false;
            this.onChangeFullscreen.emit(false);
            // Exit from native fullscreen
            if (this.isAvailable && this.nativeFullscreen) {
                document[this.polyfill.exit]();
            }
        };
        return VgFullscreenApiService;
    }());
    VgFullscreenApiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    VgFullscreenApiService.ctorParameters = function () { return []; };
    /** @nocollapse */ VgFullscreenApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function VgFullscreenApiService_Factory() { return new VgFullscreenApiService(); }, token: VgFullscreenApiService, providedIn: "root" });
    if (false) {
        /** @type {?} */
        VgFullscreenApiService.prototype.polyfill;
        /** @type {?} */
        VgFullscreenApiService.prototype.onchange;
        /** @type {?} */
        VgFullscreenApiService.prototype.onerror;
        /** @type {?} */
        VgFullscreenApiService.prototype.nativeFullscreen;
        /** @type {?} */
        VgFullscreenApiService.prototype.isFullscreen;
        /** @type {?} */
        VgFullscreenApiService.prototype.isAvailable;
        /** @type {?} */
        VgFullscreenApiService.prototype.videogularElement;
        /** @type {?} */
        VgFullscreenApiService.prototype.medias;
        /** @type {?} */
        VgFullscreenApiService.prototype.fsChangeSubscription;
        /** @type {?} */
        VgFullscreenApiService.prototype.onChangeFullscreen;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/events/vg-events.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VgEvents = /** @class */ (function () {
        function VgEvents() {
        }
        return VgEvents;
    }());
    VgEvents.VG_ABORT = 'abort';
    VgEvents.VG_CAN_PLAY = 'canplay';
    VgEvents.VG_CAN_PLAY_THROUGH = 'canplaythrough';
    VgEvents.VG_DURATION_CHANGE = 'durationchange';
    VgEvents.VG_EMPTIED = 'emptied';
    VgEvents.VG_ENCRYPTED = 'encrypted';
    VgEvents.VG_ENDED = 'ended';
    VgEvents.VG_ERROR = 'error';
    VgEvents.VG_LOADED_DATA = 'loadeddata';
    VgEvents.VG_LOADED_METADATA = 'loadedmetadata';
    VgEvents.VG_LOAD_START = 'loadstart';
    VgEvents.VG_PAUSE = 'pause';
    VgEvents.VG_PLAY = 'play';
    VgEvents.VG_PLAYING = 'playing';
    VgEvents.VG_PROGRESS = 'progress';
    VgEvents.VG_RATE_CHANGE = 'ratechange';
    VgEvents.VG_SEEK = 'seek';
    VgEvents.VG_SEEKED = 'seeked';
    VgEvents.VG_SEEKING = 'seeking';
    VgEvents.VG_STALLED = 'stalled';
    VgEvents.VG_SUSPEND = 'suspend';
    VgEvents.VG_TIME_UPDATE = 'timeupdate';
    VgEvents.VG_VOLUME_CHANGE = 'volumechange';
    VgEvents.VG_WAITING = 'waiting';
    VgEvents.VG_LOAD = 'load';
    VgEvents.VG_ENTER = 'enter';
    VgEvents.VG_EXIT = 'exit';
    VgEvents.VG_START_ADS = 'startads';
    VgEvents.VG_END_ADS = 'endads';
    VgEvents.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ VgEvents.ɵprov = i0.ɵɵdefineInjectable({ factory: function VgEvents_Factory() { return new VgEvents(); }, token: VgEvents, providedIn: "root" });
    if (false) {
        /** @type {?} */
        VgEvents.VG_ABORT;
        /** @type {?} */
        VgEvents.VG_CAN_PLAY;
        /** @type {?} */
        VgEvents.VG_CAN_PLAY_THROUGH;
        /** @type {?} */
        VgEvents.VG_DURATION_CHANGE;
        /** @type {?} */
        VgEvents.VG_EMPTIED;
        /** @type {?} */
        VgEvents.VG_ENCRYPTED;
        /** @type {?} */
        VgEvents.VG_ENDED;
        /** @type {?} */
        VgEvents.VG_ERROR;
        /** @type {?} */
        VgEvents.VG_LOADED_DATA;
        /** @type {?} */
        VgEvents.VG_LOADED_METADATA;
        /** @type {?} */
        VgEvents.VG_LOAD_START;
        /** @type {?} */
        VgEvents.VG_PAUSE;
        /** @type {?} */
        VgEvents.VG_PLAY;
        /** @type {?} */
        VgEvents.VG_PLAYING;
        /** @type {?} */
        VgEvents.VG_PROGRESS;
        /** @type {?} */
        VgEvents.VG_RATE_CHANGE;
        /** @type {?} */
        VgEvents.VG_SEEK;
        /** @type {?} */
        VgEvents.VG_SEEKED;
        /** @type {?} */
        VgEvents.VG_SEEKING;
        /** @type {?} */
        VgEvents.VG_STALLED;
        /** @type {?} */
        VgEvents.VG_SUSPEND;
        /** @type {?} */
        VgEvents.VG_TIME_UPDATE;
        /** @type {?} */
        VgEvents.VG_VOLUME_CHANGE;
        /** @type {?} */
        VgEvents.VG_WAITING;
        /** @type {?} */
        VgEvents.VG_LOAD;
        /** @type {?} */
        VgEvents.VG_ENTER;
        /** @type {?} */
        VgEvents.VG_EXIT;
        /** @type {?} */
        VgEvents.VG_START_ADS;
        /** @type {?} */
        VgEvents.VG_END_ADS;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/vg-cue-points/vg-cue-points.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VgCuePointsDirective = /** @class */ (function () {
        /**
         * @param {?} ref
         */
        function VgCuePointsDirective(ref) {
            this.ref = ref;
            this.onEnterCuePoint = new i0.EventEmitter();
            this.onUpdateCuePoint = new i0.EventEmitter();
            this.onExitCuePoint = new i0.EventEmitter();
            this.onCompleteCuePoint = new i0.EventEmitter();
            this.subscriptions = [];
            this.cuesSubscriptions = [];
            this.totalCues = 0;
        }
        /**
         * @return {?}
         */
        VgCuePointsDirective.prototype.ngOnInit = function () {
            this.onLoad$ = rxjs.fromEvent(this.ref.nativeElement, VgEvents.VG_LOAD);
            this.subscriptions.push(this.onLoad$.subscribe(this.onLoad.bind(this)));
        };
        /**
         * @param {?} event
         * @return {?}
         */
        VgCuePointsDirective.prototype.onLoad = function (event) {
            /** @type {?} */
            var cues = event.target.track.cues;
            this.ref.nativeElement.cues = cues;
            this.updateCuePoints(cues);
        };
        /**
         * @param {?} cues
         * @return {?}
         */
        VgCuePointsDirective.prototype.updateCuePoints = function (cues) {
            this.cuesSubscriptions.forEach(( /**
             * @param {?} s
             * @return {?}
             */function (s) { return s.unsubscribe(); }));
            for (var i = 0, l = cues.length; i < l; i++) {
                this.onEnter$ = rxjs.fromEvent(cues[i], VgEvents.VG_ENTER);
                this.cuesSubscriptions.push(this.onEnter$.subscribe(this.onEnter.bind(this)));
                this.onExit$ = rxjs.fromEvent(cues[i], VgEvents.VG_EXIT);
                this.cuesSubscriptions.push(this.onExit$.subscribe(this.onExit.bind(this)));
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        VgCuePointsDirective.prototype.onEnter = function (event) {
            this.onEnterCuePoint.emit(event.target);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        VgCuePointsDirective.prototype.onExit = function (event) {
            this.onExitCuePoint.emit(event.target);
        };
        /**
         * @return {?}
         */
        VgCuePointsDirective.prototype.ngDoCheck = function () {
            if (this.ref.nativeElement.track && this.ref.nativeElement.track.cues) {
                /** @type {?} */
                var changes = this.totalCues !== this.ref.nativeElement.track.cues.length;
                if (changes) {
                    this.totalCues = this.ref.nativeElement.track.cues.length;
                    this.ref.nativeElement.cues = this.ref.nativeElement.track.cues;
                    this.updateCuePoints(this.ref.nativeElement.track.cues);
                }
            }
        };
        /**
         * @return {?}
         */
        VgCuePointsDirective.prototype.ngOnDestroy = function () {
            this.subscriptions.forEach(( /**
             * @param {?} s
             * @return {?}
             */function (s) { return s.unsubscribe(); }));
        };
        return VgCuePointsDirective;
    }());
    VgCuePointsDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[vgCuePoints]',
                },] }
    ];
    /** @nocollapse */
    VgCuePointsDirective.ctorParameters = function () { return [
        { type: i0.ElementRef }
    ]; };
    VgCuePointsDirective.propDecorators = {
        onEnterCuePoint: [{ type: i0.Output }],
        onUpdateCuePoint: [{ type: i0.Output }],
        onExitCuePoint: [{ type: i0.Output }],
        onCompleteCuePoint: [{ type: i0.Output }]
    };
    if (false) {
        /** @type {?} */
        VgCuePointsDirective.prototype.onEnterCuePoint;
        /** @type {?} */
        VgCuePointsDirective.prototype.onUpdateCuePoint;
        /** @type {?} */
        VgCuePointsDirective.prototype.onExitCuePoint;
        /** @type {?} */
        VgCuePointsDirective.prototype.onCompleteCuePoint;
        /** @type {?} */
        VgCuePointsDirective.prototype.subscriptions;
        /** @type {?} */
        VgCuePointsDirective.prototype.cuesSubscriptions;
        /** @type {?} */
        VgCuePointsDirective.prototype.onLoad$;
        /** @type {?} */
        VgCuePointsDirective.prototype.onEnter$;
        /** @type {?} */
        VgCuePointsDirective.prototype.onExit$;
        /** @type {?} */
        VgCuePointsDirective.prototype.totalCues;
        /** @type {?} */
        VgCuePointsDirective.prototype.ref;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/vg-media/vg-media.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VgMediaDirective = /** @class */ (function () {
        /**
         * @param {?} api
         * @param {?} ref
         */
        function VgMediaDirective(api, ref) {
            this.api = api;
            this.ref = ref;
            this.state = VgStates.VG_PAUSED;
            this.time = { current: 0, total: 0, left: 0 };
            this.buffer = { end: 0 };
            this.canPlay = false;
            this.canPlayThrough = false;
            this.isMetadataLoaded = false;
            this.isWaiting = false;
            this.isCompleted = false;
            this.isLive = false;
            this.isBufferDetected = false;
            this.checkInterval = 200;
            this.currentPlayPos = 0;
            this.lastPlayPos = 0;
            this.playAtferSync = false;
            this.bufferDetected = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        VgMediaDirective.prototype.ngOnInit = function () {
            var _this = this;
            if (this.vgMedia.nodeName) {
                // It's a native element
                this.elem = this.vgMedia;
            }
            else {
                // It's an Angular Class
                this.elem = this.vgMedia.elem;
            }
            // Just in case we're creating this vgMedia dynamically register again into API
            this.api.registerMedia(this);
            this.subscriptions = {
                // Native events
                abort: rxjs.fromEvent(( /** @type {?} */(this.elem)), VgEvents.VG_ABORT),
                canPlay: rxjs.fromEvent(( /** @type {?} */(this.elem)), VgEvents.VG_CAN_PLAY),
                canPlayThrough: rxjs.fromEvent(( /** @type {?} */(this.elem)), VgEvents.VG_CAN_PLAY_THROUGH),
                durationChange: rxjs.fromEvent(( /** @type {?} */(this.elem)), VgEvents.VG_DURATION_CHANGE),
                emptied: rxjs.fromEvent(( /** @type {?} */(this.elem)), VgEvents.VG_EMPTIED),
                encrypted: rxjs.fromEvent(( /** @type {?} */(this.elem)), VgEvents.VG_ENCRYPTED),
                ended: rxjs.fromEvent(( /** @type {?} */(this.elem)), VgEvents.VG_ENDED),
                error: rxjs.fromEvent(( /** @type {?} */(this.elem)), VgEvents.VG_ERROR),
                loadedData: rxjs.fromEvent(( /** @type {?} */(this.elem)), VgEvents.VG_LOADED_DATA),
                loadedMetadata: rxjs.fromEvent(( /** @type {?} */(this.elem)), VgEvents.VG_LOADED_METADATA),
                loadStart: rxjs.fromEvent(( /** @type {?} */(this.elem)), VgEvents.VG_LOAD_START),
                pause: rxjs.fromEvent(( /** @type {?} */(this.elem)), VgEvents.VG_PAUSE),
                play: rxjs.fromEvent(( /** @type {?} */(this.elem)), VgEvents.VG_PLAY),
                playing: rxjs.fromEvent(( /** @type {?} */(this.elem)), VgEvents.VG_PLAYING),
                progress: rxjs.fromEvent(( /** @type {?} */(this.elem)), VgEvents.VG_PROGRESS),
                rateChange: rxjs.fromEvent(( /** @type {?} */(this.elem)), VgEvents.VG_RATE_CHANGE),
                seeked: rxjs.fromEvent(( /** @type {?} */(this.elem)), VgEvents.VG_SEEKED),
                seeking: rxjs.fromEvent(( /** @type {?} */(this.elem)), VgEvents.VG_SEEKING),
                stalled: rxjs.fromEvent(( /** @type {?} */(this.elem)), VgEvents.VG_STALLED),
                suspend: rxjs.fromEvent(( /** @type {?} */(this.elem)), VgEvents.VG_SUSPEND),
                timeUpdate: rxjs.fromEvent(( /** @type {?} */(this.elem)), VgEvents.VG_TIME_UPDATE),
                volumeChange: rxjs.fromEvent(( /** @type {?} */(this.elem)), VgEvents.VG_VOLUME_CHANGE),
                waiting: rxjs.fromEvent(( /** @type {?} */(this.elem)), VgEvents.VG_WAITING),
                // Advertisement only events
                startAds: rxjs.fromEvent(( /** @type {?} */(window)), VgEvents.VG_START_ADS),
                endAds: rxjs.fromEvent(( /** @type {?} */(window)), VgEvents.VG_END_ADS),
                // See changes on <source> child elements to reload the video file
                mutation: new rxjs.Observable(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var domObs = new MutationObserver(( /**
                     * @param {?} mutations
                     * @return {?}
                     */function (mutations) {
                        observer.next(mutations);
                    }));
                    domObs.observe(( /** @type {?} */(_this.elem)), { childList: true, attributes: true });
                    return ( /**
                     * @return {?}
                     */function () {
                        domObs.disconnect();
                    });
                })),
                // Custom buffering detection
                bufferDetected: this.bufferDetected,
            };
            this.mutationObs = this.subscriptions.mutation.subscribe(this.onMutation.bind(this));
            this.canPlayObs = this.subscriptions.canPlay.subscribe(this.onCanPlay.bind(this));
            this.canPlayThroughObs = this.subscriptions.canPlayThrough.subscribe(this.onCanPlayThrough.bind(this));
            this.loadedMetadataObs = this.subscriptions.loadedMetadata.subscribe(this.onLoadMetadata.bind(this));
            this.waitingObs = this.subscriptions.waiting.subscribe(this.onWait.bind(this));
            this.progressObs = this.subscriptions.progress.subscribe(this.onProgress.bind(this));
            this.endedObs = this.subscriptions.ended.subscribe(this.onComplete.bind(this));
            this.playingObs = this.subscriptions.playing.subscribe(this.onStartPlaying.bind(this));
            this.playObs = this.subscriptions.play.subscribe(this.onPlay.bind(this));
            this.pauseObs = this.subscriptions.pause.subscribe(this.onPause.bind(this));
            this.timeUpdateObs = this.subscriptions.timeUpdate.subscribe(this.onTimeUpdate.bind(this));
            this.volumeChangeObs = this.subscriptions.volumeChange.subscribe(this.onVolumeChange.bind(this));
            this.errorObs = this.subscriptions.error.subscribe(this.onError.bind(this));
            if (this.vgMaster) {
                this.api.playerReadyEvent.subscribe(( /**
                 * @return {?}
                 */function () {
                    _this.prepareSync();
                }));
            }
        };
        /**
         * @return {?}
         */
        VgMediaDirective.prototype.prepareSync = function () {
            var _this = this;
            /** @type {?} */
            var canPlayAll = [];
            for (var media in this.api.medias) {
                if (this.api.medias[media]) {
                    canPlayAll.push(this.api.medias[media].subscriptions.canPlay);
                }
            }
            this.canPlayAllSubscription = rxjs.combineLatest(canPlayAll)
                .pipe(operators.map(( /**
         * @param {...?} params
         * @return {?}
         */function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i] = arguments[_i];
                }
                /** @type {?} */
                var checkReadyState = ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) {
                    return event.target.readyState === 4;
                });
                /** @type {?} */
                var allReady = params.some(checkReadyState);
                if (allReady && !_this.syncSubscription) {
                    _this.startSync();
                    _this.syncSubscription.unsubscribe();
                }
            })))
                .subscribe();
        };
        /**
         * @return {?}
         */
        VgMediaDirective.prototype.startSync = function () {
            var _this = this;
            this.syncSubscription = rxjs.timer(0, 1000).subscribe(( /**
             * @return {?}
             */function () {
                for (var media in _this.api.medias) {
                    if (_this.api.medias[media] !== _this) {
                        /** @type {?} */
                        var diff = _this.api.medias[media].currentTime - _this.currentTime;
                        if (diff < -0.3 || diff > 0.3) {
                            _this.playAtferSync = _this.state === VgStates.VG_PLAYING;
                            _this.pause();
                            _this.api.medias[media].pause();
                            _this.api.medias[media].currentTime = _this.currentTime;
                        }
                        else {
                            if (_this.playAtferSync) {
                                _this.play();
                                _this.api.medias[media].play();
                                _this.playAtferSync = false;
                            }
                        }
                    }
                }
            }));
        };
        /**
         * @param {?} mutations
         * @return {?}
         */
        VgMediaDirective.prototype.onMutation = function (mutations) {
            // Detect changes only for source elements or src attribute
            for (var i = 0, l = mutations.length; i < l; i++) {
                /** @type {?} */
                var mut = mutations[i];
                if (mut.type === 'attributes' && mut.attributeName === 'src') {
                    // Only load src file if it's not a blob (for DASH / HLS sources)
                    if ((( /** @type {?} */(mut.target))).src &&
                        (( /** @type {?} */(mut.target))).src.length > 0 &&
                        (( /** @type {?} */(mut.target))).src.indexOf('blob:') < 0) {
                        this.loadMedia();
                        break;
                    }
                }
                else if (mut.type === 'childList' &&
                    mut.removedNodes.length &&
                    mut.removedNodes[0].nodeName.toLowerCase() === 'source') {
                    this.loadMedia();
                    break;
                }
            }
        };
        /**
         * @return {?}
         */
        VgMediaDirective.prototype.loadMedia = function () {
            var _this = this;
            this.vgMedia.pause();
            this.vgMedia.currentTime = 0;
            // Start buffering until we can play the media file
            this.stopBufferCheck();
            this.isBufferDetected = true;
            this.bufferDetected.next(this.isBufferDetected);
            // TODO: This is ugly, we should find something cleaner. For some reason a TimerObservable doesn't works.
            setTimeout(( /**
             * @return {?}
             */function () { return _this.vgMedia.load(); }), 10);
        };
        /**
         * @return {?}
         */
        VgMediaDirective.prototype.play = function () {
            var _this = this;
            // short-circuit if already playing
            if (this.playPromise ||
                (this.state !== VgStates.VG_PAUSED && this.state !== VgStates.VG_ENDED)) {
                return;
            }
            this.playPromise = this.vgMedia.play();
            // browser has async play promise
            if (this.playPromise && this.playPromise.then && this.playPromise.catch) {
                this.playPromise
                    .then(( /**
             * @return {?}
             */function () {
                    _this.playPromise = null;
                }))
                    .catch(( /**
             * @return {?}
             */function () {
                    _this.playPromise = null;
                    // deliberately empty for the sake of eating console noise
                }));
            }
            return this.playPromise;
        };
        /**
         * @return {?}
         */
        VgMediaDirective.prototype.pause = function () {
            var _this = this;
            // browser has async play promise
            if (this.playPromise) {
                this.playPromise.then(( /**
                 * @return {?}
                 */function () {
                    _this.vgMedia.pause();
                }));
            }
            else {
                this.vgMedia.pause();
            }
        };
        Object.defineProperty(VgMediaDirective.prototype, "id", {
            /**
             * @return {?}
             */
            get: function () {
                // We should return undefined if vgMedia still doesn't exist
                /** @type {?} */
                var result;
                if (this.vgMedia) {
                    result = this.vgMedia.id;
                }
                return result;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VgMediaDirective.prototype, "duration", {
            /**
             * @return {?}
             */
            get: function () {
                return this.vgMedia.duration === Infinity
                    ? this.specifiedDuration
                    : this.vgMedia.duration;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VgMediaDirective.prototype, "currentTime", {
            /**
             * @return {?}
             */
            get: function () {
                return this.vgMedia.currentTime;
            },
            /**
             * @param {?} seconds
             * @return {?}
             */
            set: function (seconds) {
                this.vgMedia.currentTime = seconds;
                // this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_SEEK));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VgMediaDirective.prototype, "volume", {
            /**
             * @return {?}
             */
            get: function () {
                return this.vgMedia.volume;
            },
            /**
             * @param {?} volume
             * @return {?}
             */
            set: function (volume) {
                this.vgMedia.volume = volume;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VgMediaDirective.prototype, "playbackRate", {
            /**
             * @return {?}
             */
            get: function () {
                return this.vgMedia.playbackRate;
            },
            /**
             * @param {?} rate
             * @return {?}
             */
            set: function (rate) {
                this.vgMedia.playbackRate = rate;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VgMediaDirective.prototype, "buffered", {
            /**
             * @return {?}
             */
            get: function () {
                return this.vgMedia.buffered;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VgMediaDirective.prototype, "textTracks", {
            /**
             * @return {?}
             */
            get: function () {
                return this.vgMedia.textTracks;
            },
            enumerable: false,
            configurable: true
        });
        // @ts-ignore
        /**
         * @param {?} event
         * @return {?}
         */
        VgMediaDirective.prototype.onCanPlay = function (event) {
            this.isBufferDetected = false;
            this.bufferDetected.next(this.isBufferDetected);
            this.canPlay = true;
            this.ref.detectChanges();
        };
        // @ts-ignore
        /**
         * @param {?} event
         * @return {?}
         */
        VgMediaDirective.prototype.onCanPlayThrough = function (event) {
            this.isBufferDetected = false;
            this.bufferDetected.next(this.isBufferDetected);
            this.canPlayThrough = true;
            this.ref.detectChanges();
        };
        // @ts-ignore
        /**
         * @param {?} event
         * @return {?}
         */
        VgMediaDirective.prototype.onLoadMetadata = function (event) {
            this.isMetadataLoaded = true;
            this.time = {
                current: 0,
                left: 0,
                total: this.duration * 1000,
            };
            this.state = VgStates.VG_PAUSED;
            // Live streaming check
            /** @type {?} */
            var t = Math.round(this.time.total);
            this.isLive = t === Infinity;
            this.ref.detectChanges();
        };
        // @ts-ignore
        /**
         * @param {?} event
         * @return {?}
         */
        VgMediaDirective.prototype.onWait = function (event) {
            this.isWaiting = true;
            this.ref.detectChanges();
        };
        // @ts-ignore
        /**
         * @param {?} event
         * @return {?}
         */
        VgMediaDirective.prototype.onComplete = function (event) {
            this.isCompleted = true;
            this.state = VgStates.VG_ENDED;
            this.ref.detectChanges();
        };
        // @ts-ignore
        /**
         * @param {?} event
         * @return {?}
         */
        VgMediaDirective.prototype.onStartPlaying = function (event) {
            this.state = VgStates.VG_PLAYING;
            this.ref.detectChanges();
        };
        // @ts-ignore
        /**
         * @param {?} event
         * @return {?}
         */
        VgMediaDirective.prototype.onPlay = function (event) {
            this.state = VgStates.VG_PLAYING;
            if (this.vgMaster) {
                if (!this.syncSubscription || this.syncSubscription.closed) {
                    this.startSync();
                }
            }
            this.startBufferCheck();
            this.ref.detectChanges();
        };
        // @ts-ignore
        /**
         * @param {?} event
         * @return {?}
         */
        VgMediaDirective.prototype.onPause = function (event) {
            this.state = VgStates.VG_PAUSED;
            if (this.vgMaster) {
                if (!this.playAtferSync) {
                    this.syncSubscription.unsubscribe();
                }
            }
            this.stopBufferCheck();
            this.ref.detectChanges();
        };
        // @ts-ignore
        /**
         * @param {?} event
         * @return {?}
         */
        VgMediaDirective.prototype.onTimeUpdate = function (event) {
            /** @type {?} */
            var end = this.buffered.length - 1;
            this.time = {
                current: this.currentTime * 1000,
                total: this.time.total,
                left: (this.duration - this.currentTime) * 1000,
            };
            if (end >= 0) {
                this.buffer = { end: this.buffered.end(end) * 1000 };
            }
            this.ref.detectChanges();
        };
        // @ts-ignore
        /**
         * @param {?} event
         * @return {?}
         */
        VgMediaDirective.prototype.onProgress = function (event) {
            /** @type {?} */
            var end = this.buffered.length - 1;
            if (end >= 0) {
                this.buffer = { end: this.buffered.end(end) * 1000 };
            }
            this.ref.detectChanges();
        };
        // @ts-ignore
        /**
         * @param {?} event
         * @return {?}
         */
        VgMediaDirective.prototype.onVolumeChange = function (event) {
            // TODO: Save to localstorage the current volume
            this.ref.detectChanges();
        };
        // @ts-ignore
        /**
         * @param {?} event
         * @return {?}
         */
        VgMediaDirective.prototype.onError = function (event) {
            // TODO: Handle error messages
            this.ref.detectChanges();
        };
        // http://stackoverflow.com/a/23828241/779529
        /**
         * @return {?}
         */
        VgMediaDirective.prototype.bufferCheck = function () {
            /** @type {?} */
            var offset = 1 / this.checkInterval;
            this.currentPlayPos = this.currentTime;
            if (!this.isBufferDetected &&
                this.currentPlayPos < this.lastPlayPos + offset) {
                this.isBufferDetected = true;
            }
            if (this.isBufferDetected &&
                this.currentPlayPos > this.lastPlayPos + offset) {
                this.isBufferDetected = false;
            }
            // Prevent calls to bufferCheck after ngOnDestroy have been called
            if (!this.bufferDetected.closed) {
                this.bufferDetected.next(this.isBufferDetected);
            }
            this.lastPlayPos = this.currentPlayPos;
        };
        /**
         * @return {?}
         */
        VgMediaDirective.prototype.startBufferCheck = function () {
            var _this = this;
            this.checkBufferSubscription = rxjs.timer(0, this.checkInterval).subscribe(( /**
             * @return {?}
             */function () {
                _this.bufferCheck();
            }));
        };
        /**
         * @return {?}
         */
        VgMediaDirective.prototype.stopBufferCheck = function () {
            if (this.checkBufferSubscription) {
                this.checkBufferSubscription.unsubscribe();
            }
            this.isBufferDetected = false;
            this.bufferDetected.next(this.isBufferDetected);
        };
        /**
         * @param {?} value
         * @param {?=} byPercent
         * @return {?}
         */
        VgMediaDirective.prototype.seekTime = function (value, byPercent) {
            if (byPercent === void 0) { byPercent = false; }
            /** @type {?} */
            var second;
            /** @type {?} */
            var duration = this.duration;
            if (byPercent) {
                second = (value * duration) / 100;
            }
            else {
                second = value;
            }
            this.currentTime = second;
        };
        /**
         * @param {?} type
         * @param {?=} label
         * @param {?=} language
         * @param {?=} mode
         * @return {?}
         */
        VgMediaDirective.prototype.addTextTrack = function (type, label, language, mode) {
            /** @type {?} */
            var newTrack = this.vgMedia.addTextTrack(type, label, language);
            if (mode) {
                newTrack.mode = mode;
            }
            return newTrack;
        };
        /**
         * @return {?}
         */
        VgMediaDirective.prototype.ngOnDestroy = function () {
            this.vgMedia.src = '';
            this.mutationObs.unsubscribe();
            this.canPlayObs.unsubscribe();
            this.canPlayThroughObs.unsubscribe();
            this.loadedMetadataObs.unsubscribe();
            this.waitingObs.unsubscribe();
            this.progressObs.unsubscribe();
            this.endedObs.unsubscribe();
            this.playingObs.unsubscribe();
            this.playObs.unsubscribe();
            this.pauseObs.unsubscribe();
            this.timeUpdateObs.unsubscribe();
            this.volumeChangeObs.unsubscribe();
            this.errorObs.unsubscribe();
            if (this.checkBufferSubscription) {
                this.checkBufferSubscription.unsubscribe();
            }
            if (this.syncSubscription) {
                this.syncSubscription.unsubscribe();
            }
            this.bufferDetected.complete();
            this.bufferDetected.unsubscribe();
            this.api.unregisterMedia(this);
        };
        return VgMediaDirective;
    }());
    VgMediaDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[vgMedia]',
                },] }
    ];
    /** @nocollapse */
    VgMediaDirective.ctorParameters = function () { return [
        { type: VgApiService },
        { type: i0.ChangeDetectorRef }
    ]; };
    VgMediaDirective.propDecorators = {
        vgMedia: [{ type: i0.Input }],
        vgMaster: [{ type: i0.Input }]
    };
    if (false) {
        /** @type {?} */
        VgMediaDirective.prototype.elem;
        /** @type {?} */
        VgMediaDirective.prototype.vgMedia;
        /** @type {?} */
        VgMediaDirective.prototype.vgMaster;
        /** @type {?} */
        VgMediaDirective.prototype.state;
        /** @type {?} */
        VgMediaDirective.prototype.time;
        /** @type {?} */
        VgMediaDirective.prototype.buffer;
        /** @type {?} */
        VgMediaDirective.prototype.track;
        /** @type {?} */
        VgMediaDirective.prototype.subscriptions;
        /** @type {?} */
        VgMediaDirective.prototype.canPlay;
        /** @type {?} */
        VgMediaDirective.prototype.canPlayThrough;
        /** @type {?} */
        VgMediaDirective.prototype.isMetadataLoaded;
        /** @type {?} */
        VgMediaDirective.prototype.isWaiting;
        /** @type {?} */
        VgMediaDirective.prototype.isCompleted;
        /** @type {?} */
        VgMediaDirective.prototype.isLive;
        /** @type {?} */
        VgMediaDirective.prototype.isBufferDetected;
        /** @type {?} */
        VgMediaDirective.prototype.checkInterval;
        /** @type {?} */
        VgMediaDirective.prototype.currentPlayPos;
        /** @type {?} */
        VgMediaDirective.prototype.lastPlayPos;
        /** @type {?} */
        VgMediaDirective.prototype.specifiedDuration;
        /** @type {?} */
        VgMediaDirective.prototype.checkBufferSubscription;
        /** @type {?} */
        VgMediaDirective.prototype.syncSubscription;
        /** @type {?} */
        VgMediaDirective.prototype.canPlayAllSubscription;
        /** @type {?} */
        VgMediaDirective.prototype.playAtferSync;
        /** @type {?} */
        VgMediaDirective.prototype.mutationObs;
        /** @type {?} */
        VgMediaDirective.prototype.canPlayObs;
        /** @type {?} */
        VgMediaDirective.prototype.canPlayThroughObs;
        /** @type {?} */
        VgMediaDirective.prototype.loadedMetadataObs;
        /** @type {?} */
        VgMediaDirective.prototype.waitingObs;
        /** @type {?} */
        VgMediaDirective.prototype.progressObs;
        /** @type {?} */
        VgMediaDirective.prototype.endedObs;
        /** @type {?} */
        VgMediaDirective.prototype.playingObs;
        /** @type {?} */
        VgMediaDirective.prototype.playObs;
        /** @type {?} */
        VgMediaDirective.prototype.pauseObs;
        /** @type {?} */
        VgMediaDirective.prototype.timeUpdateObs;
        /** @type {?} */
        VgMediaDirective.prototype.volumeChangeObs;
        /** @type {?} */
        VgMediaDirective.prototype.errorObs;
        /** @type {?} */
        VgMediaDirective.prototype.bufferDetected;
        /** @type {?} */
        VgMediaDirective.prototype.playPromise;
        /**
         * @type {?}
         * @private
         */
        VgMediaDirective.prototype.api;
        /**
         * @type {?}
         * @private
         */
        VgMediaDirective.prototype.ref;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/vg-player/vg-player.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VgPlayerComponent = /** @class */ (function () {
        /**
         * @param {?} ref
         * @param {?} api
         * @param {?} fsAPI
         * @param {?} controlsHidden
         */
        function VgPlayerComponent(ref, api, fsAPI, controlsHidden) {
            this.api = api;
            this.fsAPI = fsAPI;
            this.controlsHidden = controlsHidden;
            this.isFullscreen = false;
            this.isNativeFullscreen = false;
            this.areControlsHidden = false;
            this.onPlayerReady = new i0.EventEmitter();
            this.onMediaReady = new i0.EventEmitter();
            this.subscriptions = [];
            this.elem = ref.nativeElement;
            this.api.registerElement(this.elem);
        }
        /**
         * @return {?}
         */
        VgPlayerComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.medias.toArray().forEach(( /**
             * @param {?} media
             * @return {?}
             */function (media) {
                _this.api.registerMedia(media);
            }));
            this.fsAPI.init(this.elem, this.medias);
            this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
            this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this)));
            this.api.onPlayerReady(this.fsAPI);
            this.onPlayerReady.emit(this.api);
        };
        /**
         * @param {?} fsState
         * @return {?}
         */
        VgPlayerComponent.prototype.onChangeFullscreen = function (fsState) {
            if (!this.fsAPI.nativeFullscreen) {
                this.isFullscreen = fsState;
                this.zIndex = fsState ? VgUtilsService.getZIndex().toString() : 'auto';
            }
            else {
                this.isNativeFullscreen = fsState;
            }
        };
        /**
         * @param {?} hidden
         * @return {?}
         */
        VgPlayerComponent.prototype.onHideControls = function (hidden) {
            this.areControlsHidden = hidden;
        };
        /**
         * @return {?}
         */
        VgPlayerComponent.prototype.ngOnDestroy = function () {
            this.subscriptions.forEach(( /**
             * @param {?} s
             * @return {?}
             */function (s) { return s.unsubscribe(); }));
        };
        return VgPlayerComponent;
    }());
    VgPlayerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'vg-player',
                    encapsulation: i0.ViewEncapsulation.None,
                    template: "<ng-content></ng-content>",
                    providers: [VgApiService, VgFullscreenApiService, VgControlsHiddenService],
                    styles: ["\n      vg-player {\n        font-family: 'videogular';\n        position: relative;\n        display: flex;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        background-color: black;\n      }\n      vg-player.fullscreen {\n        position: fixed;\n        left: 0;\n        top: 0;\n      }\n      vg-player.native-fullscreen.controls-hidden {\n        cursor: none;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    VgPlayerComponent.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: VgApiService },
        { type: VgFullscreenApiService },
        { type: VgControlsHiddenService }
    ]; };
    VgPlayerComponent.propDecorators = {
        isFullscreen: [{ type: i0.HostBinding, args: ['class.fullscreen',] }],
        isNativeFullscreen: [{ type: i0.HostBinding, args: ['class.native-fullscreen',] }],
        areControlsHidden: [{ type: i0.HostBinding, args: ['class.controls-hidden',] }],
        zIndex: [{ type: i0.HostBinding, args: ['style.z-index',] }],
        onPlayerReady: [{ type: i0.Output }],
        onMediaReady: [{ type: i0.Output }],
        medias: [{ type: i0.ContentChildren, args: [VgMediaDirective,] }]
    };
    if (false) {
        /** @type {?} */
        VgPlayerComponent.prototype.elem;
        /** @type {?} */
        VgPlayerComponent.prototype.isFullscreen;
        /** @type {?} */
        VgPlayerComponent.prototype.isNativeFullscreen;
        /** @type {?} */
        VgPlayerComponent.prototype.areControlsHidden;
        /** @type {?} */
        VgPlayerComponent.prototype.zIndex;
        /** @type {?} */
        VgPlayerComponent.prototype.onPlayerReady;
        /** @type {?} */
        VgPlayerComponent.prototype.onMediaReady;
        /** @type {?} */
        VgPlayerComponent.prototype.medias;
        /** @type {?} */
        VgPlayerComponent.prototype.subscriptions;
        /** @type {?} */
        VgPlayerComponent.prototype.api;
        /** @type {?} */
        VgPlayerComponent.prototype.fsAPI;
        /**
         * @type {?}
         * @private
         */
        VgPlayerComponent.prototype.controlsHidden;
    }

    /** @type {?} */
    var services = [
        VgApiService,
        VgControlsHiddenService,
        VgFullscreenApiService,
        VgUtilsService,
        VgEvents,
        VgStates
    ];
    /** @type {?} */
    var directives = [
        VgCuePointsDirective,
        VgMediaDirective
    ];
    var VgCoreModule = /** @class */ (function () {
        function VgCoreModule() {
        }
        return VgCoreModule;
    }());
    VgCoreModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                    providers: __spread(services),
                    declarations: __spread(directives, [VgPlayerComponent]),
                    exports: __spread(directives, [VgPlayerComponent])
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/vg-media/vg-media-element.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VgMediaElement = /** @class */ (function () {
        function VgMediaElement() {
        }
        Object.defineProperty(VgMediaElement.prototype, "audioTracks", {
            /**
             * @return {?}
             */
            get: function () {
                return null;
            },
            enumerable: false,
            configurable: true
        });
        // @ts-ignore
        /**
         * @param {?} kind
         * @param {?=} label
         * @param {?=} language
         * @return {?}
         */
        VgMediaElement.prototype.addTextTrack = function (kind, label, language) {
            return null;
        };
        // @ts-ignore
        /**
         * @param {?} type
         * @return {?}
         */
        VgMediaElement.prototype.canPlayType = function (type) {
            return null;
        };
        /**
         * @return {?}
         */
        VgMediaElement.prototype.load = function () { };
        /**
         * @return {?}
         */
        VgMediaElement.prototype.msClearEffects = function () { };
        /**
         * @return {?}
         */
        VgMediaElement.prototype.msGetAsCastingSource = function () {
            return null;
        };
        // @ts-ignore
        /**
         * @param {?} _activatableClassId
         * @param {?} _effectRequired
         * @param {?=} _config
         * @return {?}
         */
        VgMediaElement.prototype.msInsertAudioEffect = function (_activatableClassId, _effectRequired, _config) { };
        // @ts-ignore
        /**
         * @param {?} mediaKeys
         * @return {?}
         */
        VgMediaElement.prototype.msSetMediaKeys = function (mediaKeys) { };
        // @ts-ignore
        /**
         * @param {?=} mediaProtectionManager
         * @return {?}
         */
        VgMediaElement.prototype.msSetMediaProtectionManager = function (mediaProtectionManager) { };
        /**
         * @return {?}
         */
        VgMediaElement.prototype.pause = function () { };
        /**
         * @return {?}
         */
        VgMediaElement.prototype.play = function () {
            return null;
        };
        // @ts-ignore
        /**
         * @param {?} mediaKeys
         * @return {?}
         */
        VgMediaElement.prototype.setMediaKeys = function (mediaKeys) {
            return null;
        };
        // @ts-ignore
        /**
         * @param {?} _type
         * @param {?} _listener
         * @param {?=} _useCapture
         * @return {?}
         */
        VgMediaElement.prototype.addEventListener = function (_type, _listener, _useCapture) { };
        return VgMediaElement;
    }());
    if (false) {
        /** @type {?} */
        VgMediaElement.prototype.id;
        /** @type {?} */
        VgMediaElement.prototype.elem;
        /** @type {?} */
        VgMediaElement.prototype.autoplay;
        /** @type {?} */
        VgMediaElement.prototype.buffered;
        /** @type {?} */
        VgMediaElement.prototype.controls;
        /** @type {?} */
        VgMediaElement.prototype.crossOrigin;
        /** @type {?} */
        VgMediaElement.prototype.currentSrc;
        /** @type {?} */
        VgMediaElement.prototype.currentTime;
        /** @type {?} */
        VgMediaElement.prototype.defaultMuted;
        /** @type {?} */
        VgMediaElement.prototype.defaultPlaybackRate;
        /** @type {?} */
        VgMediaElement.prototype.duration;
        /** @type {?} */
        VgMediaElement.prototype.ended;
        /** @type {?} */
        VgMediaElement.prototype.error;
        /** @type {?} */
        VgMediaElement.prototype.loop;
        /** @type {?} */
        VgMediaElement.prototype.mediaKeys;
        /** @type {?} */
        VgMediaElement.prototype.msAudioCategory;
        /** @type {?} */
        VgMediaElement.prototype.msAudioDeviceType;
        /** @type {?} */
        VgMediaElement.prototype.msGraphicsTrustStatus;
        /** @type {?} */
        VgMediaElement.prototype.msKeys;
        /** @type {?} */
        VgMediaElement.prototype.msPlayToDisabled;
        /** @type {?} */
        VgMediaElement.prototype.msPlayToPreferredSourceUri;
        /** @type {?} */
        VgMediaElement.prototype.msPlayToPrimary;
        /** @type {?} */
        VgMediaElement.prototype.msPlayToSource;
        /** @type {?} */
        VgMediaElement.prototype.msRealTime;
        /** @type {?} */
        VgMediaElement.prototype.muted;
        /** @type {?} */
        VgMediaElement.prototype.networkState;
        /** @type {?} */
        VgMediaElement.prototype.onencrypted;
        /** @type {?} */
        VgMediaElement.prototype.onmsneedkey;
        /** @type {?} */
        VgMediaElement.prototype.paused;
        /** @type {?} */
        VgMediaElement.prototype.playbackRate;
        /** @type {?} */
        VgMediaElement.prototype.played;
        /** @type {?} */
        VgMediaElement.prototype.preload;
        /** @type {?} */
        VgMediaElement.prototype.readyState;
        /** @type {?} */
        VgMediaElement.prototype.seekable;
        /** @type {?} */
        VgMediaElement.prototype.seeking;
        /** @type {?} */
        VgMediaElement.prototype.src;
        /** @type {?} */
        VgMediaElement.prototype.srcObject;
        /** @type {?} */
        VgMediaElement.prototype.textTracks;
        /** @type {?} */
        VgMediaElement.prototype.videoTracks;
        /** @type {?} */
        VgMediaElement.prototype.volume;
        /** @type {?} */
        VgMediaElement.prototype.HAVE_CURRENT_DATA;
        /** @type {?} */
        VgMediaElement.prototype.HAVE_ENOUGH_DATA;
        /** @type {?} */
        VgMediaElement.prototype.HAVE_FUTURE_DATA;
        /** @type {?} */
        VgMediaElement.prototype.HAVE_METADATA;
        /** @type {?} */
        VgMediaElement.prototype.HAVE_NOTHING;
        /** @type {?} */
        VgMediaElement.prototype.NETWORK_EMPTY;
        /** @type {?} */
        VgMediaElement.prototype.NETWORK_IDLE;
        /** @type {?} */
        VgMediaElement.prototype.NETWORK_LOADING;
        /** @type {?} */
        VgMediaElement.prototype.NETWORK_NO_SOURCE;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: videogular-ngx-videogular-core.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.VgApiService = VgApiService;
    exports.VgControlsHiddenService = VgControlsHiddenService;
    exports.VgCoreModule = VgCoreModule;
    exports.VgCuePointsDirective = VgCuePointsDirective;
    exports.VgEvents = VgEvents;
    exports.VgFullscreenApiService = VgFullscreenApiService;
    exports.VgMediaDirective = VgMediaDirective;
    exports.VgMediaElement = VgMediaElement;
    exports.VgPlayerComponent = VgPlayerComponent;
    exports.VgStates = VgStates;
    exports.VgUtilsService = VgUtilsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=videogular-ngx-videogular-core.umd.js.map
