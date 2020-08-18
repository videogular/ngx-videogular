(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('@videogular/ngx-videogular/core')) :
    typeof define === 'function' && define.amd ? define('@videogular/ngx-videogular/controls', ['exports', '@angular/core', '@angular/common', 'rxjs', '@videogular/ngx-videogular/core'], factory) :
    (global = global || self, factory((global.videogular = global.videogular || {}, global.videogular['ngx-videogular'] = global.videogular['ngx-videogular'] || {}, global.videogular['ngx-videogular'].controls = {}), global.ng.core, global.ng.common, global.rxjs, global.videogular['ngx-videogular'].core));
}(this, (function (exports, core, common, rxjs, core$1) { 'use strict';

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
     * Generated from: lib/components/vg-controls/vg-controls.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VgControlsComponent = /** @class */ (function () {
        // @ts-ignore
        /**
         * @param {?} API
         * @param {?} ref
         * @param {?} hidden
         */
        function VgControlsComponent(API, ref, hidden) {
            this.API = API;
            this.hidden = hidden;
            this.isAdsPlaying = 'initial';
            this.hideControls = false;
            this.vgAutohide = false;
            this.vgAutohideTime = 3;
            this.subscriptions = [];
            this.elem = ref.nativeElement;
        }
        /**
         * @return {?}
         */
        VgControlsComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.mouseMove$ = rxjs.fromEvent(this.API.videogularElement, 'mousemove');
            this.subscriptions.push(this.mouseMove$.subscribe(this.show.bind(this)));
            this.touchStart$ = rxjs.fromEvent(this.API.videogularElement, 'touchstart');
            this.subscriptions.push(this.touchStart$.subscribe(this.show.bind(this)));
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
        VgControlsComponent.prototype.onPlayerReady = function () {
            this.target = this.API.getMediaById(this.vgFor);
            this.subscriptions.push(this.target.subscriptions.play.subscribe(this.onPlay.bind(this)));
            this.subscriptions.push(this.target.subscriptions.pause.subscribe(this.onPause.bind(this)));
            this.subscriptions.push(this.target.subscriptions.startAds.subscribe(this.onStartAds.bind(this)));
            this.subscriptions.push(this.target.subscriptions.endAds.subscribe(this.onEndAds.bind(this)));
        };
        /**
         * @return {?}
         */
        VgControlsComponent.prototype.ngAfterViewInit = function () {
            if (this.vgAutohide) {
                this.hide();
            }
            else {
                this.show();
            }
        };
        /**
         * @return {?}
         */
        VgControlsComponent.prototype.onPlay = function () {
            if (this.vgAutohide) {
                this.hide();
            }
        };
        /**
         * @return {?}
         */
        VgControlsComponent.prototype.onPause = function () {
            clearTimeout(this.timer);
            this.hideControls = false;
            this.hidden.state(false);
        };
        /**
         * @return {?}
         */
        VgControlsComponent.prototype.onStartAds = function () {
            this.isAdsPlaying = 'none';
        };
        /**
         * @return {?}
         */
        VgControlsComponent.prototype.onEndAds = function () {
            this.isAdsPlaying = 'initial';
        };
        /**
         * @return {?}
         */
        VgControlsComponent.prototype.hide = function () {
            if (this.vgAutohide) {
                clearTimeout(this.timer);
                this.hideAsync();
            }
        };
        /**
         * @return {?}
         */
        VgControlsComponent.prototype.show = function () {
            clearTimeout(this.timer);
            this.hideControls = false;
            this.hidden.state(false);
            if (this.vgAutohide) {
                this.hideAsync();
            }
        };
        /**
         * @private
         * @return {?}
         */
        VgControlsComponent.prototype.hideAsync = function () {
            var _this = this;
            if (this.API.state === core$1.VgStates.VG_PLAYING) {
                this.timer = setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.hideControls = true;
                    _this.hidden.state(true);
                }), this.vgAutohideTime * 1000);
            }
        };
        /**
         * @return {?}
         */
        VgControlsComponent.prototype.ngOnDestroy = function () {
            this.subscriptions.forEach(( /**
             * @param {?} s
             * @return {?}
             */function (s) { return s.unsubscribe(); }));
        };
        return VgControlsComponent;
    }());
    VgControlsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'vg-controls',
                    encapsulation: core.ViewEncapsulation.None,
                    template: "<ng-content></ng-content>",
                    styles: ["\n      vg-controls {\n        position: absolute;\n        display: flex;\n        width: 100%;\n        height: 50px;\n        z-index: 300;\n        bottom: 0;\n        background-color: rgba(0, 0, 0, 0.5);\n        -webkit-transition: bottom 1s;\n        -khtml-transition: bottom 1s;\n        -moz-transition: bottom 1s;\n        -ms-transition: bottom 1s;\n        transition: bottom 1s;\n      }\n      vg-controls.hide {\n        bottom: -50px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    VgControlsComponent.ctorParameters = function () { return [
        { type: core$1.VgApiService },
        { type: core.ElementRef },
        { type: core$1.VgControlsHiddenService }
    ]; };
    VgControlsComponent.propDecorators = {
        isAdsPlaying: [{ type: core.HostBinding, args: ['style.pointer-events',] }],
        hideControls: [{ type: core.HostBinding, args: ['class.hide',] }],
        vgFor: [{ type: core.Input }],
        vgAutohide: [{ type: core.Input }],
        vgAutohideTime: [{ type: core.Input }]
    };
    if (false) {
        /** @type {?} */
        VgControlsComponent.prototype.elem;
        /** @type {?} */
        VgControlsComponent.prototype.target;
        /** @type {?} */
        VgControlsComponent.prototype.isAdsPlaying;
        /** @type {?} */
        VgControlsComponent.prototype.hideControls;
        /** @type {?} */
        VgControlsComponent.prototype.vgFor;
        /** @type {?} */
        VgControlsComponent.prototype.vgAutohide;
        /** @type {?} */
        VgControlsComponent.prototype.vgAutohideTime;
        /**
         * @type {?}
         * @private
         */
        VgControlsComponent.prototype.timer;
        /** @type {?} */
        VgControlsComponent.prototype.mouseMove$;
        /** @type {?} */
        VgControlsComponent.prototype.touchStart$;
        /** @type {?} */
        VgControlsComponent.prototype.subscriptions;
        /**
         * @type {?}
         * @private
         */
        VgControlsComponent.prototype.API;
        /**
         * @type {?}
         * @private
         */
        VgControlsComponent.prototype.hidden;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/vg-volume/vg-volume.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VgVolumeComponent = /** @class */ (function () {
        /**
         * @param {?} ref
         * @param {?} API
         */
        function VgVolumeComponent(ref, API) {
            this.API = API;
            this.subscriptions = [];
            this.elem = ref.nativeElement;
            this.isDragging = false;
        }
        /**
         * @return {?}
         */
        VgVolumeComponent.prototype.ngOnInit = function () {
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
        VgVolumeComponent.prototype.onPlayerReady = function () {
            this.target = this.API.getMediaById(this.vgFor);
            this.ariaValue = this.getVolume() * 100;
        };
        /**
         * @param {?} event
         * @return {?}
         */
        VgVolumeComponent.prototype.onClick = function (event) {
            this.setVolume(this.calculateVolume(event.clientX));
        };
        /**
         * @param {?} event
         * @return {?}
         */
        VgVolumeComponent.prototype.onMouseDown = function (event) {
            this.mouseDownPosX = event.clientX;
            this.isDragging = true;
        };
        /**
         * @param {?} event
         * @return {?}
         */
        VgVolumeComponent.prototype.onDrag = function (event) {
            if (this.isDragging) {
                this.setVolume(this.calculateVolume(event.clientX));
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        VgVolumeComponent.prototype.onStopDrag = function (event) {
            if (this.isDragging) {
                this.isDragging = false;
                if (this.mouseDownPosX === event.clientX) {
                    this.setVolume(this.calculateVolume(event.clientX));
                }
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        VgVolumeComponent.prototype.arrowAdjustVolume = function (event) {
            if (event.keyCode === 38 || event.keyCode === 39) {
                event.preventDefault();
                this.setVolume(Math.max(0, Math.min(100, this.getVolume() * 100 + 10)));
            }
            else if (event.keyCode === 37 || event.keyCode === 40) {
                event.preventDefault();
                this.setVolume(Math.max(0, Math.min(100, this.getVolume() * 100 - 10)));
            }
        };
        /**
         * @param {?} mousePosX
         * @return {?}
         */
        VgVolumeComponent.prototype.calculateVolume = function (mousePosX) {
            /** @type {?} */
            var recObj = this.volumeBarRef.nativeElement.getBoundingClientRect();
            /** @type {?} */
            var volumeBarOffsetLeft = recObj.left;
            /** @type {?} */
            var volumeBarWidth = recObj.width;
            return ((mousePosX - volumeBarOffsetLeft) / volumeBarWidth) * 100;
        };
        /**
         * @param {?} vol
         * @return {?}
         */
        VgVolumeComponent.prototype.setVolume = function (vol) {
            this.target.volume = Math.max(0, Math.min(1, vol / 100));
            this.ariaValue = this.target.volume * 100;
        };
        /**
         * @return {?}
         */
        VgVolumeComponent.prototype.getVolume = function () {
            return this.target ? this.target.volume : 0;
        };
        /**
         * @return {?}
         */
        VgVolumeComponent.prototype.ngOnDestroy = function () {
            this.subscriptions.forEach(( /**
             * @param {?} s
             * @return {?}
             */function (s) { return s.unsubscribe(); }));
        };
        return VgVolumeComponent;
    }());
    VgVolumeComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'vg-volume',
                    encapsulation: core.ViewEncapsulation.None,
                    template: "\n    <div\n      #volumeBar\n      class=\"volumeBar\"\n      tabindex=\"0\"\n      role=\"slider\"\n      aria-label=\"volume level\"\n      aria-level=\"polite\"\n      [attr.aria-valuenow]=\"ariaValue\"\n      aria-valuemin=\"0\"\n      aria-valuemax=\"100\"\n      aria-orientation=\"horizontal\"\n      [attr.aria-valuetext]=\"ariaValue + '%'\"\n      (click)=\"onClick($event)\"\n      (mousedown)=\"onMouseDown($event)\"\n    >\n      <div class=\"volumeBackground\" [ngClass]=\"{ dragging: isDragging }\">\n        <div\n          class=\"volumeValue\"\n          [style.width]=\"getVolume() * (100 - 15) + '%'\"\n        ></div>\n        <div\n          class=\"volumeKnob\"\n          [style.left]=\"getVolume() * (100 - 15) + '%'\"\n        ></div>\n      </div>\n    </div>\n  ",
                    styles: ["\n      vg-volume {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        height: 50px;\n        width: 100px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n      }\n      vg-volume .volumeBar {\n        position: relative;\n        display: flex;\n        flex-grow: 1;\n        align-items: center;\n      }\n      vg-volume .volumeBackground {\n        display: flex;\n        flex-grow: 1;\n        height: 5px;\n        pointer-events: none;\n        background-color: #333;\n      }\n      vg-volume .volumeValue {\n        display: flex;\n        height: 5px;\n        pointer-events: none;\n        background-color: #fff;\n        transition: all 0.2s ease-out;\n      }\n      vg-volume .volumeKnob {\n        position: absolute;\n        width: 15px;\n        height: 15px;\n        left: 0;\n        top: 50%;\n        transform: translateY(-50%);\n        border-radius: 15px;\n        pointer-events: none;\n        background-color: #fff;\n        transition: all 0.2s ease-out;\n      }\n      vg-volume .volumeBackground.dragging .volumeValue,\n      vg-volume .volumeBackground.dragging .volumeKnob {\n        transition: none;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    VgVolumeComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core$1.VgApiService }
    ]; };
    VgVolumeComponent.propDecorators = {
        vgFor: [{ type: core.Input }],
        volumeBarRef: [{ type: core.ViewChild, args: ['volumeBar', { static: true },] }],
        onDrag: [{ type: core.HostListener, args: ['document:mousemove', ['$event'],] }],
        onStopDrag: [{ type: core.HostListener, args: ['document:mouseup', ['$event'],] }],
        arrowAdjustVolume: [{ type: core.HostListener, args: ['keydown', ['$event'],] }]
    };
    if (false) {
        /** @type {?} */
        VgVolumeComponent.prototype.vgFor;
        /** @type {?} */
        VgVolumeComponent.prototype.volumeBarRef;
        /** @type {?} */
        VgVolumeComponent.prototype.elem;
        /** @type {?} */
        VgVolumeComponent.prototype.target;
        /** @type {?} */
        VgVolumeComponent.prototype.isDragging;
        /** @type {?} */
        VgVolumeComponent.prototype.mouseDownPosX;
        /** @type {?} */
        VgVolumeComponent.prototype.ariaValue;
        /** @type {?} */
        VgVolumeComponent.prototype.subscriptions;
        /** @type {?} */
        VgVolumeComponent.prototype.API;
    }

    /**
     * @record
     */
    function Option() { }
    if (false) {
        /** @type {?} */
        Option.prototype.id;
        /** @type {?} */
        Option.prototype.label;
        /** @type {?} */
        Option.prototype.selected;
    }
    var VgTrackSelectorComponent = /** @class */ (function () {
        /**
         * @param {?} ref
         * @param {?} API
         */
        function VgTrackSelectorComponent(ref, API) {
            this.API = API;
            this.subscriptions = [];
            this.elem = ref.nativeElement;
        }
        /**
         * @return {?}
         */
        VgTrackSelectorComponent.prototype.ngOnInit = function () {
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
        VgTrackSelectorComponent.prototype.onPlayerReady = function () {
            this.target = this.API.getMediaById(this.vgFor);
            /** @type {?} */
            var subs = Array.from((( /** @type {?} */(this.API.getMasterMedia().elem))).children)
                .filter(( /**
         * @param {?} item
         * @return {?}
         */function (item) { return item.tagName === 'TRACK'; }))
                .filter(( /**
         * @param {?} item
         * @return {?}
         */function (item) { return item.kind === 'subtitles'; }))
                .map(( /**
         * @param {?} item
         * @return {?}
         */function (item) { return ({
                label: item.label,
                selected: item.default === true,
                id: item.srclang,
            }); }));
            this.tracks = __spread(subs, [
                {
                    id: null,
                    label: 'Off',
                    selected: subs.every(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) { return item.selected === false; })),
                },
            ]);
            /** @type {?} */
            var track = this.tracks.filter(( /**
             * @param {?} item
             * @return {?}
             */function (item) { return item.selected === true; }))[0];
            this.trackSelected = track.id;
            this.ariaValue = track.label;
        };
        /**
         * @param {?} trackId
         * @return {?}
         */
        VgTrackSelectorComponent.prototype.selectTrack = function (trackId) {
            var _this = this;
            this.trackSelected = trackId === 'null' ? null : trackId;
            this.ariaValue = 'No track selected';
            Array.from((( /** @type {?} */(this.API.getMasterMedia().elem))).textTracks).forEach(( /**
             * @param {?} item
             * @return {?}
             */function (item) {
                if (item.language === trackId) {
                    _this.ariaValue = item.label;
                    item.mode = 'showing';
                }
                else {
                    item.mode = 'hidden';
                }
            }));
        };
        /**
         * @return {?}
         */
        VgTrackSelectorComponent.prototype.ngOnDestroy = function () {
            this.subscriptions.forEach(( /**
             * @param {?} s
             * @return {?}
             */function (s) { return s.unsubscribe(); }));
        };
        return VgTrackSelectorComponent;
    }());
    VgTrackSelectorComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'vg-track-selector',
                    encapsulation: core.ViewEncapsulation.None,
                    template: "\n    <div class=\"container\">\n      <div\n        class=\"track-selected\"\n        [class.vg-icon-closed_caption]=\"!trackSelected\"\n      >\n        {{ trackSelected || '' }}\n      </div>\n      <select\n        class=\"trackSelector\"\n        (change)=\"selectTrack($event.target.value)\"\n        tabindex=\"0\"\n        aria-label=\"track selector\"\n        [attr.aria-valuetext]=\"ariaValue\"\n      >\n        <option\n          *ngFor=\"let track of tracks\"\n          [value]=\"track.id\"\n          [selected]=\"track.selected === true\"\n        >\n          {{ track.label }}\n        </option>\n      </select>\n    </div>\n  ",
                    styles: ["\n      vg-track-selector {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        width: 50px;\n        height: 50px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n      }\n      vg-track-selector .container {\n        position: relative;\n        display: flex;\n        flex-grow: 1;\n        align-items: center;\n        padding: 0;\n        margin: 5px;\n      }\n      vg-track-selector select.trackSelector {\n        width: 50px;\n        padding: 5px 8px;\n        border: none;\n        background: none;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        color: transparent;\n        font-size: 16px;\n      }\n      vg-track-selector select.trackSelector::-ms-expand {\n        display: none;\n      }\n      vg-track-selector select.trackSelector option {\n        color: #000;\n      }\n      vg-track-selector .track-selected {\n        position: absolute;\n        width: 100%;\n        height: 50px;\n        top: -6px;\n        text-align: center;\n        text-transform: uppercase;\n        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        padding-top: 2px;\n        pointer-events: none;\n      }\n      vg-track-selector .vg-icon-closed_caption:before {\n        width: 100%;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    VgTrackSelectorComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core$1.VgApiService }
    ]; };
    VgTrackSelectorComponent.propDecorators = {
        vgFor: [{ type: core.Input }]
    };
    if (false) {
        /** @type {?} */
        VgTrackSelectorComponent.prototype.vgFor;
        /** @type {?} */
        VgTrackSelectorComponent.prototype.elem;
        /** @type {?} */
        VgTrackSelectorComponent.prototype.target;
        /** @type {?} */
        VgTrackSelectorComponent.prototype.tracks;
        /** @type {?} */
        VgTrackSelectorComponent.prototype.trackSelected;
        /** @type {?} */
        VgTrackSelectorComponent.prototype.subscriptions;
        /** @type {?} */
        VgTrackSelectorComponent.prototype.ariaValue;
        /** @type {?} */
        VgTrackSelectorComponent.prototype.API;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/vg-time-display/vg-time-display.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Workaround until we can use UTC with Angular Date Pipe
    var VgUtcPipe = /** @class */ (function () {
        function VgUtcPipe() {
        }
        /**
         * @param {?} value
         * @param {?} format
         * @return {?}
         */
        VgUtcPipe.prototype.transform = function (value, format) {
            /** @type {?} */
            var date = new Date(value);
            /** @type {?} */
            var result = format;
            /** @type {?} */
            var ss = date.getUTCSeconds();
            /** @type {?} */
            var mm = date.getUTCMinutes();
            /** @type {?} */
            var hh = date.getUTCHours();
            if (ss < 10) {
                ss = '0' + ss;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            if (hh < 10) {
                hh = '0' + hh;
            }
            result = result.replace(/ss/g, ( /** @type {?} */(ss)));
            result = result.replace(/mm/g, ( /** @type {?} */(mm)));
            result = result.replace(/hh/g, ( /** @type {?} */(hh)));
            return result;
        };
        return VgUtcPipe;
    }());
    VgUtcPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'vgUtc' },] }
    ];
    var VgTimeDisplayComponent = /** @class */ (function () {
        /**
         * @param {?} ref
         * @param {?} API
         */
        function VgTimeDisplayComponent(ref, API) {
            this.API = API;
            this.vgProperty = 'current';
            this.vgFormat = 'mm:ss';
            this.subscriptions = [];
            this.elem = ref.nativeElement;
        }
        /**
         * @return {?}
         */
        VgTimeDisplayComponent.prototype.ngOnInit = function () {
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
        VgTimeDisplayComponent.prototype.onPlayerReady = function () {
            this.target = this.API.getMediaById(this.vgFor);
        };
        /**
         * @return {?}
         */
        VgTimeDisplayComponent.prototype.getTime = function () {
            /** @type {?} */
            var t = 0;
            if (this.target) {
                t = Math.round(this.target.time[this.vgProperty]);
                t = isNaN(t) || this.target.isLive ? 0 : t;
            }
            return t;
        };
        /**
         * @return {?}
         */
        VgTimeDisplayComponent.prototype.ngOnDestroy = function () {
            this.subscriptions.forEach(( /**
             * @param {?} s
             * @return {?}
             */function (s) { return s.unsubscribe(); }));
        };
        return VgTimeDisplayComponent;
    }());
    VgTimeDisplayComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'vg-time-display',
                    encapsulation: core.ViewEncapsulation.None,
                    template: "\n    <span *ngIf=\"target?.isLive\">LIVE</span>\n    <span *ngIf=\"!target?.isLive\">{{ getTime() | vgUtc: vgFormat }}</span>\n    <ng-content></ng-content>\n  ",
                    styles: ["\n      vg-time-display {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        height: 50px;\n        width: 60px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n        pointer-events: none;\n        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    VgTimeDisplayComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core$1.VgApiService }
    ]; };
    VgTimeDisplayComponent.propDecorators = {
        vgFor: [{ type: core.Input }],
        vgProperty: [{ type: core.Input }],
        vgFormat: [{ type: core.Input }]
    };
    if (false) {
        /** @type {?} */
        VgTimeDisplayComponent.prototype.vgFor;
        /** @type {?} */
        VgTimeDisplayComponent.prototype.vgProperty;
        /** @type {?} */
        VgTimeDisplayComponent.prototype.vgFormat;
        /** @type {?} */
        VgTimeDisplayComponent.prototype.elem;
        /** @type {?} */
        VgTimeDisplayComponent.prototype.target;
        /** @type {?} */
        VgTimeDisplayComponent.prototype.subscriptions;
        /** @type {?} */
        VgTimeDisplayComponent.prototype.API;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/vg-scrub-bar/vg-scrub-bar.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VgScrubBarComponent = /** @class */ (function () {
        /**
         * @param {?} ref
         * @param {?} API
         * @param {?} vgControlsHiddenState
         */
        function VgScrubBarComponent(ref, API, vgControlsHiddenState) {
            var _this = this;
            this.API = API;
            this.hideScrubBar = false;
            this.vgSlider = true;
            this.isSeeking = false;
            this.wasPlaying = false;
            this.subscriptions = [];
            this.elem = ref.nativeElement;
            this.subscriptions.push(vgControlsHiddenState.isHidden.subscribe(( /**
             * @param {?} hide
             * @return {?}
             */function (hide) { return _this.onHideScrubBar(hide); })));
        }
        /**
         * @return {?}
         */
        VgScrubBarComponent.prototype.ngOnInit = function () {
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
        VgScrubBarComponent.prototype.onPlayerReady = function () {
            this.target = this.API.getMediaById(this.vgFor);
        };
        /**
         * @protected
         * @return {?}
         */
        VgScrubBarComponent.prototype.seekStart = function () {
            if (this.target.canPlay) {
                this.isSeeking = true;
                if (this.target.state === core$1.VgStates.VG_PLAYING) {
                    this.wasPlaying = true;
                }
                this.target.pause();
            }
        };
        /**
         * @protected
         * @param {?} offset
         * @return {?}
         */
        VgScrubBarComponent.prototype.seekMove = function (offset) {
            if (this.isSeeking) {
                /** @type {?} */
                var percentage = Math.max(Math.min((offset * 100) / this.elem.scrollWidth, 99.9), 0);
                this.target.time.current = (percentage * this.target.time.total) / 100;
                this.target.seekTime(percentage, true);
            }
        };
        /**
         * @protected
         * @param {?} offset
         * @return {?}
         */
        VgScrubBarComponent.prototype.seekEnd = function (offset) {
            this.isSeeking = false;
            if (this.target.canPlay) {
                /** @type {?} */
                var percentage = Math.max(Math.min((offset * 100) / this.elem.scrollWidth, 99.9), 0);
                this.target.seekTime(percentage, true);
                if (this.wasPlaying) {
                    this.wasPlaying = false;
                    this.target.play();
                }
            }
        };
        /**
         * @protected
         * @return {?}
         */
        VgScrubBarComponent.prototype.touchEnd = function () {
            this.isSeeking = false;
            if (this.wasPlaying) {
                this.wasPlaying = false;
                this.target.play();
            }
        };
        /**
         * @protected
         * @param {?} event
         * @return {?}
         */
        VgScrubBarComponent.prototype.getTouchOffset = function (event) {
            /** @type {?} */
            var offsetLeft = 0;
            /** @type {?} */
            var element = event.target;
            while (element) {
                offsetLeft += element.offsetLeft;
                element = element.offsetParent;
            }
            return event.touches[0].pageX - offsetLeft;
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        VgScrubBarComponent.prototype.onMouseDownScrubBar = function ($event) {
            if (this.target) {
                if (!this.target.isLive) {
                    if (!this.vgSlider) {
                        this.seekEnd($event.offsetX);
                    }
                    else {
                        this.seekStart();
                    }
                }
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        VgScrubBarComponent.prototype.onMouseMoveScrubBar = function ($event) {
            if (this.target) {
                if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                    this.seekMove($event.offsetX);
                }
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        VgScrubBarComponent.prototype.onMouseUpScrubBar = function ($event) {
            if (this.target) {
                if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                    this.seekEnd($event.offsetX);
                }
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        VgScrubBarComponent.prototype.onTouchStartScrubBar = function ($event) {
            if (this.target) {
                if (!this.target.isLive) {
                    if (!this.vgSlider) {
                        this.seekEnd(this.getTouchOffset($event));
                    }
                    else {
                        this.seekStart();
                    }
                }
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        VgScrubBarComponent.prototype.onTouchMoveScrubBar = function ($event) {
            if (this.target) {
                if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                    this.seekMove(this.getTouchOffset($event));
                }
            }
        };
        // @ts-ignore
        /**
         * @param {?} _$event
         * @return {?}
         */
        VgScrubBarComponent.prototype.onTouchCancelScrubBar = function (_$event) {
            if (this.target) {
                if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                    this.touchEnd();
                }
            }
        };
        // @ts-ignore
        /**
         * @param {?} _$event
         * @return {?}
         */
        VgScrubBarComponent.prototype.onTouchEndScrubBar = function (_$event) {
            if (this.target) {
                if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                    this.touchEnd();
                }
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        VgScrubBarComponent.prototype.arrowAdjustVolume = function (event) {
            if (this.target) {
                if (event.keyCode === 38 || event.keyCode === 39) {
                    event.preventDefault();
                    this.target.seekTime((this.target.time.current + 5000) / 1000, false);
                }
                else if (event.keyCode === 37 || event.keyCode === 40) {
                    event.preventDefault();
                    this.target.seekTime((this.target.time.current - 5000) / 1000, false);
                }
            }
        };
        /**
         * @return {?}
         */
        VgScrubBarComponent.prototype.getPercentage = function () {
            return this.target
                ? Math.round((this.target.time.current * 100) / this.target.time.total) + '%'
                : '0%';
        };
        /**
         * @param {?} hide
         * @return {?}
         */
        VgScrubBarComponent.prototype.onHideScrubBar = function (hide) {
            this.hideScrubBar = hide;
        };
        /**
         * @return {?}
         */
        VgScrubBarComponent.prototype.ngOnDestroy = function () {
            this.subscriptions.forEach(( /**
             * @param {?} s
             * @return {?}
             */function (s) { return s.unsubscribe(); }));
        };
        return VgScrubBarComponent;
    }());
    VgScrubBarComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'vg-scrub-bar',
                    encapsulation: core.ViewEncapsulation.None,
                    template: "\n    <div\n      class=\"scrubBar\"\n      tabindex=\"0\"\n      role=\"slider\"\n      aria-label=\"scrub bar\"\n      aria-level=\"polite\"\n      [attr.aria-valuenow]=\"getPercentage()\"\n      aria-valuemin=\"0\"\n      aria-valuemax=\"100\"\n      [attr.aria-valuetext]=\"getPercentage()\"\n    >\n      <ng-content></ng-content>\n    </div>\n  ",
                    styles: ["\n      vg-scrub-bar {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        position: absolute;\n        width: 100%;\n        height: 5px;\n        bottom: 50px;\n        margin: 0;\n        cursor: pointer;\n        align-items: center;\n        background: rgba(0, 0, 0, 0.75);\n        z-index: 250;\n        -webkit-transition: bottom 1s, opacity 0.5s;\n        -khtml-transition: bottom 1s, opacity 0.5s;\n        -moz-transition: bottom 1s, opacity 0.5s;\n        -ms-transition: bottom 1s, opacity 0.5s;\n        transition: bottom 1s, opacity 0.5s;\n      }\n      vg-scrub-bar .scrubBar {\n        position: relative;\n        display: flex;\n        flex-grow: 1;\n        align-items: center;\n        height: 100%;\n      }\n      vg-controls vg-scrub-bar {\n        position: relative;\n        bottom: 0;\n        background: transparent;\n        height: 50px;\n        flex-grow: 1;\n        flex-basis: 0;\n        margin: 0 10px;\n        -webkit-transition: initial;\n        -khtml-transition: initial;\n        -moz-transition: initial;\n        -ms-transition: initial;\n        transition: initial;\n      }\n      vg-scrub-bar.hide {\n        bottom: 0;\n        opacity: 0;\n      }\n      vg-controls vg-scrub-bar.hide {\n        bottom: initial;\n        opacity: initial;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    VgScrubBarComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core$1.VgApiService },
        { type: core$1.VgControlsHiddenService }
    ]; };
    VgScrubBarComponent.propDecorators = {
        hideScrubBar: [{ type: core.HostBinding, args: ['class.hide',] }],
        vgFor: [{ type: core.Input }],
        vgSlider: [{ type: core.Input }],
        onMouseDownScrubBar: [{ type: core.HostListener, args: ['mousedown', ['$event'],] }],
        onMouseMoveScrubBar: [{ type: core.HostListener, args: ['document:mousemove', ['$event'],] }],
        onMouseUpScrubBar: [{ type: core.HostListener, args: ['document:mouseup', ['$event'],] }],
        onTouchStartScrubBar: [{ type: core.HostListener, args: ['touchstart', ['$event'],] }],
        onTouchMoveScrubBar: [{ type: core.HostListener, args: ['document:touchmove', ['$event'],] }],
        onTouchCancelScrubBar: [{ type: core.HostListener, args: ['document:touchcancel', ['$event'],] }],
        onTouchEndScrubBar: [{ type: core.HostListener, args: ['document:touchend', ['$event'],] }],
        arrowAdjustVolume: [{ type: core.HostListener, args: ['keydown', ['$event'],] }]
    };
    if (false) {
        /** @type {?} */
        VgScrubBarComponent.prototype.hideScrubBar;
        /** @type {?} */
        VgScrubBarComponent.prototype.vgFor;
        /** @type {?} */
        VgScrubBarComponent.prototype.vgSlider;
        /** @type {?} */
        VgScrubBarComponent.prototype.elem;
        /** @type {?} */
        VgScrubBarComponent.prototype.target;
        /** @type {?} */
        VgScrubBarComponent.prototype.isSeeking;
        /** @type {?} */
        VgScrubBarComponent.prototype.wasPlaying;
        /** @type {?} */
        VgScrubBarComponent.prototype.subscriptions;
        /** @type {?} */
        VgScrubBarComponent.prototype.API;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/vg-quality-selector/vg-quality-selector.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VgQualitySelectorComponent = /** @class */ (function () {
        /**
         * @param {?} ref
         * @param {?} API
         */
        function VgQualitySelectorComponent(ref, API) {
            this.API = API;
            this.onBitrateChange = new core.EventEmitter();
            this.subscriptions = [];
            this.elem = ref.nativeElement;
        }
        /**
         * @return {?}
         */
        VgQualitySelectorComponent.prototype.ngOnInit = function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        VgQualitySelectorComponent.prototype.ngOnChanges = function (changes) {
            if (changes.bitrates.currentValue && changes.bitrates.currentValue.length) {
                this.bitrates.forEach(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) { return (item.label =
                    item.label || Math.round(item.bitrate / 1000).toString()); }));
            }
        };
        /**
         * @param {?} index
         * @return {?}
         */
        VgQualitySelectorComponent.prototype.selectBitrate = function (index) {
            this.bitrateSelected = this.bitrates[index];
            this.onBitrateChange.emit(this.bitrates[index]);
        };
        /**
         * @return {?}
         */
        VgQualitySelectorComponent.prototype.ngOnDestroy = function () {
            this.subscriptions.forEach(( /**
             * @param {?} s
             * @return {?}
             */function (s) { return s.unsubscribe(); }));
        };
        return VgQualitySelectorComponent;
    }());
    VgQualitySelectorComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'vg-quality-selector',
                    encapsulation: core.ViewEncapsulation.None,
                    template: "\n    <div class=\"container\">\n      <div class=\"quality-selected\" [class.vg-icon-hd]=\"!bitrateSelected\">\n        {{ bitrateSelected?.label }}\n      </div>\n      <select\n        class=\"quality-selector\"\n        (change)=\"selectBitrate($event.target.value)\"\n        tabindex=\"0\"\n        aria-label=\"quality selector\"\n        [attr.aria-valuetext]=\"ariaValue\"\n      >\n        <option\n          *ngFor=\"let bitrate of bitrates\"\n          [value]=\"bitrate.qualityIndex\"\n          [selected]=\"bitrate.qualityIndex === bitrateSelected?.qualityIndex\"\n        >\n          {{ bitrate.label }}\n        </option>\n      </select>\n    </div>\n  ",
                    styles: ["\n      vg-quality-selector {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        width: 50px;\n        height: 50px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n      }\n      vg-quality-selector .container {\n        position: relative;\n        display: flex;\n        flex-grow: 1;\n        align-items: center;\n        padding: 0;\n        margin: 5px;\n      }\n      vg-quality-selector select.quality-selector {\n        width: 50px;\n        padding: 5px 8px;\n        border: none;\n        background: none;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        color: transparent;\n        font-size: 16px;\n      }\n      vg-quality-selector select.quality-selector::-ms-expand {\n        display: none;\n      }\n      vg-quality-selector select.quality-selector option {\n        color: #000;\n      }\n      vg-quality-selector .quality-selected {\n        position: absolute;\n        width: 100%;\n        height: 50px;\n        top: -6px;\n        text-align: center;\n        text-transform: uppercase;\n        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        padding-top: 2px;\n        pointer-events: none;\n      }\n      vg-quality-selector .vg-icon-closed_caption:before {\n        width: 100%;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    VgQualitySelectorComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core$1.VgApiService }
    ]; };
    VgQualitySelectorComponent.propDecorators = {
        bitrates: [{ type: core.Input }],
        onBitrateChange: [{ type: core.Output }]
    };
    if (false) {
        /** @type {?} */
        VgQualitySelectorComponent.prototype.bitrates;
        /** @type {?} */
        VgQualitySelectorComponent.prototype.onBitrateChange;
        /** @type {?} */
        VgQualitySelectorComponent.prototype.bitrateSelected;
        /** @type {?} */
        VgQualitySelectorComponent.prototype.elem;
        /** @type {?} */
        VgQualitySelectorComponent.prototype.target;
        /** @type {?} */
        VgQualitySelectorComponent.prototype.subscriptions;
        /** @type {?} */
        VgQualitySelectorComponent.prototype.ariaValue;
        /** @type {?} */
        VgQualitySelectorComponent.prototype.API;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/vg-playback-button/vg-playback-button.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VgPlaybackButtonComponent = /** @class */ (function () {
        /**
         * @param {?} ref
         * @param {?} API
         * @param {?} cdr
         */
        function VgPlaybackButtonComponent(ref, API, cdr) {
            this.API = API;
            this.cdr = cdr;
            this.subscriptions = [];
            this.ariaValue = 1;
            this.elem = ref.nativeElement;
            this.playbackValues = ['0.5', '1.0', '1.5', '2.0'];
            this.playbackIndex = 1;
        }
        /**
         * @return {?}
         */
        VgPlaybackButtonComponent.prototype.ngOnInit = function () {
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
        VgPlaybackButtonComponent.prototype.onPlayerReady = function () {
            this.target = this.API.getMediaById(this.vgFor);
        };
        /**
         * @return {?}
         */
        VgPlaybackButtonComponent.prototype.onClick = function () {
            this.updatePlaybackSpeed();
        };
        /**
         * @param {?} event
         * @return {?}
         */
        VgPlaybackButtonComponent.prototype.onKeyDown = function (event) {
            // On press Enter (13) or Space (32)
            if (event.keyCode === 13 || event.keyCode === 32) {
                event.preventDefault();
                this.updatePlaybackSpeed();
            }
        };
        /**
         * @return {?}
         */
        VgPlaybackButtonComponent.prototype.updatePlaybackSpeed = function () {
            this.playbackIndex = ++this.playbackIndex % this.playbackValues.length;
            if (this.target instanceof core$1.VgApiService) {
                this.target.playbackRate = this.playbackValues[this.playbackIndex];
            }
            else {
                this.target.playbackRate[this.vgFor] = this.playbackValues[this.playbackIndex];
            }
            this.detectChanges();
        };
        /**
         * @return {?}
         */
        VgPlaybackButtonComponent.prototype.getPlaybackRate = function () {
            this.ariaValue = this.target ? this.target.playbackRate : 1.0;
            return this.ariaValue;
        };
        /**
         * @return {?}
         */
        VgPlaybackButtonComponent.prototype.detectChanges = function () {
            try {
                this.cdr.detectChanges();
            }
            catch (e) {
                console.warn(e);
            }
        };
        /**
         * @return {?}
         */
        VgPlaybackButtonComponent.prototype.ngOnDestroy = function () {
            this.subscriptions.forEach(( /**
             * @param {?} s
             * @return {?}
             */function (s) { return s.unsubscribe(); }));
        };
        return VgPlaybackButtonComponent;
    }());
    VgPlaybackButtonComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'vg-playback-button',
                    encapsulation: core.ViewEncapsulation.None,
                    template: " <span\n    class=\"button\"\n    tabindex=\"0\"\n    role=\"button\"\n    aria-label=\"playback speed button\"\n    [attr.aria-valuetext]=\"ariaValue\"\n  >\n    {{ getPlaybackRate() }}x\n  </span>",
                    styles: ["\n      vg-playback-button {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        height: 50px;\n        width: 50px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n      }\n      vg-playback-button .button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 50px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    VgPlaybackButtonComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core$1.VgApiService },
        { type: core.ChangeDetectorRef }
    ]; };
    VgPlaybackButtonComponent.propDecorators = {
        vgFor: [{ type: core.Input }],
        playbackValues: [{ type: core.Input }],
        onClick: [{ type: core.HostListener, args: ['click',] }],
        onKeyDown: [{ type: core.HostListener, args: ['keydown', ['$event'],] }]
    };
    if (false) {
        /** @type {?} */
        VgPlaybackButtonComponent.prototype.vgFor;
        /** @type {?} */
        VgPlaybackButtonComponent.prototype.elem;
        /** @type {?} */
        VgPlaybackButtonComponent.prototype.target;
        /** @type {?} */
        VgPlaybackButtonComponent.prototype.playbackValues;
        /** @type {?} */
        VgPlaybackButtonComponent.prototype.playbackIndex;
        /** @type {?} */
        VgPlaybackButtonComponent.prototype.subscriptions;
        /** @type {?} */
        VgPlaybackButtonComponent.prototype.ariaValue;
        /** @type {?} */
        VgPlaybackButtonComponent.prototype.API;
        /** @type {?} */
        VgPlaybackButtonComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/vg-play-pause/vg-play-pause.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VgPlayPauseComponent = /** @class */ (function () {
        /**
         * @param {?} ref
         * @param {?} API
         */
        function VgPlayPauseComponent(ref, API) {
            this.API = API;
            this.subscriptions = [];
            this.ariaValue = core$1.VgStates.VG_PAUSED;
            this.elem = ref.nativeElement;
        }
        /**
         * @return {?}
         */
        VgPlayPauseComponent.prototype.ngOnInit = function () {
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
        VgPlayPauseComponent.prototype.onPlayerReady = function () {
            this.target = this.API.getMediaById(this.vgFor);
        };
        /**
         * @return {?}
         */
        VgPlayPauseComponent.prototype.onClick = function () {
            this.playPause();
        };
        /**
         * @param {?} event
         * @return {?}
         */
        VgPlayPauseComponent.prototype.onKeyDown = function (event) {
            // On press Enter (13) or Space (32)
            if (event.keyCode === 13 || event.keyCode === 32) {
                event.preventDefault();
                this.playPause();
            }
        };
        /**
         * @return {?}
         */
        VgPlayPauseComponent.prototype.playPause = function () {
            /** @type {?} */
            var state = this.getState();
            switch (state) {
                case core$1.VgStates.VG_PLAYING:
                    this.target.pause();
                    break;
                case core$1.VgStates.VG_PAUSED:
                case core$1.VgStates.VG_ENDED:
                    this.target.play();
                    break;
            }
        };
        /**
         * @return {?}
         */
        VgPlayPauseComponent.prototype.getState = function () {
            this.ariaValue = this.target ? this.target.state : core$1.VgStates.VG_PAUSED;
            return this.ariaValue;
        };
        /**
         * @return {?}
         */
        VgPlayPauseComponent.prototype.ngOnDestroy = function () {
            this.subscriptions.forEach(( /**
             * @param {?} s
             * @return {?}
             */function (s) { return s.unsubscribe(); }));
        };
        return VgPlayPauseComponent;
    }());
    VgPlayPauseComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'vg-play-pause',
                    encapsulation: core.ViewEncapsulation.None,
                    template: " <div\n    class=\"icon\"\n    [class.vg-icon-pause]=\"getState() === 'playing'\"\n    [class.vg-icon-play_arrow]=\"\n      getState() === 'paused' || getState() === 'ended'\n    \"\n    tabindex=\"0\"\n    role=\"button\"\n    [attr.aria-label]=\"getState() === 'paused' ? 'play' : 'pause'\"\n    [attr.aria-valuetext]=\"ariaValue\"\n  ></div>",
                    styles: ["\n      vg-play-pause {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -khtml-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        height: 50px;\n        width: 50px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n      }\n      vg-play-pause .icon {\n        pointer-events: none;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    VgPlayPauseComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core$1.VgApiService }
    ]; };
    VgPlayPauseComponent.propDecorators = {
        vgFor: [{ type: core.Input }],
        onClick: [{ type: core.HostListener, args: ['click',] }],
        onKeyDown: [{ type: core.HostListener, args: ['keydown', ['$event'],] }]
    };
    if (false) {
        /** @type {?} */
        VgPlayPauseComponent.prototype.vgFor;
        /** @type {?} */
        VgPlayPauseComponent.prototype.elem;
        /** @type {?} */
        VgPlayPauseComponent.prototype.target;
        /** @type {?} */
        VgPlayPauseComponent.prototype.subscriptions;
        /** @type {?} */
        VgPlayPauseComponent.prototype.ariaValue;
        /** @type {?} */
        VgPlayPauseComponent.prototype.API;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/vg-mute/vg-mute.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VgMuteComponent = /** @class */ (function () {
        /**
         * @param {?} ref
         * @param {?} API
         */
        function VgMuteComponent(ref, API) {
            this.API = API;
            this.subscriptions = [];
            this.ariaValue = 'unmuted';
            this.elem = ref.nativeElement;
        }
        /**
         * @return {?}
         */
        VgMuteComponent.prototype.ngOnInit = function () {
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
        VgMuteComponent.prototype.onPlayerReady = function () {
            this.target = this.API.getMediaById(this.vgFor);
            this.currentVolume = this.target.volume;
        };
        /**
         * @return {?}
         */
        VgMuteComponent.prototype.onClick = function () {
            this.changeMuteState();
        };
        /**
         * @param {?} event
         * @return {?}
         */
        VgMuteComponent.prototype.onKeyDown = function (event) {
            // On press Enter (13) or Space (32)
            if (event.keyCode === 13 || event.keyCode === 32) {
                event.preventDefault();
                this.changeMuteState();
            }
        };
        /**
         * @return {?}
         */
        VgMuteComponent.prototype.changeMuteState = function () {
            /** @type {?} */
            var volume = this.getVolume();
            if (volume === 0) {
                if (this.target.volume === 0 && this.currentVolume === 0) {
                    this.currentVolume = 1;
                }
                this.target.volume = this.currentVolume;
            }
            else {
                this.currentVolume = volume;
                this.target.volume = 0;
            }
        };
        /**
         * @return {?}
         */
        VgMuteComponent.prototype.getVolume = function () {
            /** @type {?} */
            var volume = this.target ? this.target.volume : 0;
            this.ariaValue = volume ? 'unmuted' : 'muted';
            return volume;
        };
        /**
         * @return {?}
         */
        VgMuteComponent.prototype.ngOnDestroy = function () {
            this.subscriptions.forEach(( /**
             * @param {?} s
             * @return {?}
             */function (s) { return s.unsubscribe(); }));
        };
        return VgMuteComponent;
    }());
    VgMuteComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'vg-mute',
                    encapsulation: core.ViewEncapsulation.None,
                    template: " <div\n    class=\"icon\"\n    [class.vg-icon-volume_up]=\"getVolume() >= 0.75\"\n    [class.vg-icon-volume_down]=\"getVolume() >= 0.25 && getVolume() < 0.75\"\n    [class.vg-icon-volume_mute]=\"getVolume() > 0 && getVolume() < 0.25\"\n    [class.vg-icon-volume_off]=\"getVolume() === 0\"\n    tabindex=\"0\"\n    role=\"button\"\n    aria-label=\"mute button\"\n    [attr.aria-valuetext]=\"ariaValue\"\n  ></div>",
                    styles: ["\n      vg-mute {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -khtml-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        height: 50px;\n        width: 50px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n      }\n      vg-mute .icon {\n        pointer-events: none;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    VgMuteComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core$1.VgApiService }
    ]; };
    VgMuteComponent.propDecorators = {
        vgFor: [{ type: core.Input }],
        onClick: [{ type: core.HostListener, args: ['click',] }],
        onKeyDown: [{ type: core.HostListener, args: ['keydown', ['$event'],] }]
    };
    if (false) {
        /** @type {?} */
        VgMuteComponent.prototype.vgFor;
        /** @type {?} */
        VgMuteComponent.prototype.elem;
        /** @type {?} */
        VgMuteComponent.prototype.target;
        /** @type {?} */
        VgMuteComponent.prototype.currentVolume;
        /** @type {?} */
        VgMuteComponent.prototype.subscriptions;
        /** @type {?} */
        VgMuteComponent.prototype.ariaValue;
        /** @type {?} */
        VgMuteComponent.prototype.API;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/vg-fullscreen/vg-fullscreen.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VgFullscreenComponent = /** @class */ (function () {
        /**
         * @param {?} ref
         * @param {?} API
         * @param {?} fsAPI
         */
        function VgFullscreenComponent(ref, API, fsAPI) {
            this.API = API;
            this.fsAPI = fsAPI;
            this.isFullscreen = false;
            this.subscriptions = [];
            this.ariaValue = 'normal mode';
            this.elem = ref.nativeElement;
            this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
        }
        /**
         * @return {?}
         */
        VgFullscreenComponent.prototype.ngOnInit = function () {
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
        VgFullscreenComponent.prototype.onPlayerReady = function () {
            this.target = this.API.getMediaById(this.vgFor);
        };
        /**
         * @param {?} fsState
         * @return {?}
         */
        VgFullscreenComponent.prototype.onChangeFullscreen = function (fsState) {
            this.ariaValue = fsState ? 'fullscreen mode' : 'normal mode';
            this.isFullscreen = fsState;
        };
        /**
         * @return {?}
         */
        VgFullscreenComponent.prototype.onClick = function () {
            this.changeFullscreenState();
        };
        /**
         * @param {?} event
         * @return {?}
         */
        VgFullscreenComponent.prototype.onKeyDown = function (event) {
            // On press Enter (13) or Space (32)
            if (event.keyCode === 13 || event.keyCode === 32) {
                event.preventDefault();
                this.changeFullscreenState();
            }
        };
        /**
         * @return {?}
         */
        VgFullscreenComponent.prototype.changeFullscreenState = function () {
            /** @type {?} */
            var element = this.target;
            if (this.target instanceof core$1.VgApiService) {
                element = null;
            }
            this.fsAPI.toggleFullscreen(element);
        };
        /**
         * @return {?}
         */
        VgFullscreenComponent.prototype.ngOnDestroy = function () {
            this.subscriptions.forEach(( /**
             * @param {?} s
             * @return {?}
             */function (s) { return s.unsubscribe(); }));
        };
        return VgFullscreenComponent;
    }());
    VgFullscreenComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'vg-fullscreen',
                    encapsulation: core.ViewEncapsulation.None,
                    template: " <div\n    class=\"icon\"\n    [class.vg-icon-fullscreen]=\"!isFullscreen\"\n    [class.vg-icon-fullscreen_exit]=\"isFullscreen\"\n    tabindex=\"0\"\n    role=\"button\"\n    aria-label=\"fullscreen button\"\n    [attr.aria-valuetext]=\"ariaValue\"\n  ></div>",
                    styles: ["\n      vg-fullscreen {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -khtml-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        height: 50px;\n        width: 50px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n      }\n      vg-fullscreen .icon {\n        pointer-events: none;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    VgFullscreenComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core$1.VgApiService },
        { type: core$1.VgFullscreenApiService }
    ]; };
    VgFullscreenComponent.propDecorators = {
        onClick: [{ type: core.HostListener, args: ['click',] }],
        onKeyDown: [{ type: core.HostListener, args: ['keydown', ['$event'],] }]
    };
    if (false) {
        /** @type {?} */
        VgFullscreenComponent.prototype.elem;
        /** @type {?} */
        VgFullscreenComponent.prototype.vgFor;
        /** @type {?} */
        VgFullscreenComponent.prototype.target;
        /** @type {?} */
        VgFullscreenComponent.prototype.isFullscreen;
        /** @type {?} */
        VgFullscreenComponent.prototype.subscriptions;
        /** @type {?} */
        VgFullscreenComponent.prototype.ariaValue;
        /** @type {?} */
        VgFullscreenComponent.prototype.API;
        /** @type {?} */
        VgFullscreenComponent.prototype.fsAPI;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/vg-scrub-bar/vg-scrub-bar-buffering-time/vg-scrub-bar-buffering-time.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VgScrubBarBufferingTimeComponent = /** @class */ (function () {
        /**
         * @param {?} ref
         * @param {?} API
         */
        function VgScrubBarBufferingTimeComponent(ref, API) {
            this.API = API;
            this.subscriptions = [];
            this.elem = ref.nativeElement;
        }
        /**
         * @return {?}
         */
        VgScrubBarBufferingTimeComponent.prototype.ngOnInit = function () {
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
        VgScrubBarBufferingTimeComponent.prototype.onPlayerReady = function () {
            this.target = this.API.getMediaById(this.vgFor);
        };
        /**
         * @return {?}
         */
        VgScrubBarBufferingTimeComponent.prototype.getBufferTime = function () {
            /** @type {?} */
            var bufferTime = '0%';
            if (this.target && this.target.buffer && this.target.buffered.length) {
                if (this.target.time.total === 0) {
                    bufferTime = '0%';
                }
                else {
                    bufferTime =
                        (this.target.buffer.end / this.target.time.total) * 100 + '%';
                }
            }
            return bufferTime;
        };
        /**
         * @return {?}
         */
        VgScrubBarBufferingTimeComponent.prototype.ngOnDestroy = function () {
            this.subscriptions.forEach(( /**
             * @param {?} s
             * @return {?}
             */function (s) { return s.unsubscribe(); }));
        };
        return VgScrubBarBufferingTimeComponent;
    }());
    VgScrubBarBufferingTimeComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'vg-scrub-bar-buffering-time',
                    encapsulation: core.ViewEncapsulation.None,
                    template: "<div class=\"background\" [style.width]=\"getBufferTime()\"></div>",
                    styles: ["\n      vg-scrub-bar-buffering-time {\n        display: flex;\n        width: 100%;\n        height: 5px;\n        pointer-events: none;\n        position: absolute;\n      }\n      vg-scrub-bar-buffering-time .background {\n        background-color: rgba(255, 255, 255, 0.3);\n      }\n      vg-controls vg-scrub-bar-buffering-time {\n        position: absolute;\n        top: calc(50% - 3px);\n      }\n      vg-controls vg-scrub-bar-buffering-time .background {\n        -webkit-border-radius: 2px;\n        -moz-border-radius: 2px;\n        border-radius: 2px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    VgScrubBarBufferingTimeComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core$1.VgApiService }
    ]; };
    VgScrubBarBufferingTimeComponent.propDecorators = {
        vgFor: [{ type: core.Input }]
    };
    if (false) {
        /** @type {?} */
        VgScrubBarBufferingTimeComponent.prototype.vgFor;
        /** @type {?} */
        VgScrubBarBufferingTimeComponent.prototype.elem;
        /** @type {?} */
        VgScrubBarBufferingTimeComponent.prototype.target;
        /** @type {?} */
        VgScrubBarBufferingTimeComponent.prototype.subscriptions;
        /** @type {?} */
        VgScrubBarBufferingTimeComponent.prototype.API;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/vg-scrub-bar/vg-scrub-bar-cue-points/vg-scrub-bar-cue-points.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable-next-line: no-conflicting-lifecycle
    var VgScrubBarCuePointsComponent = /** @class */ (function () {
        /**
         * @param {?} ref
         * @param {?} API
         */
        function VgScrubBarCuePointsComponent(ref, API) {
            this.API = API;
            this.onLoadedMetadataCalled = false;
            this.cuePoints = [];
            this.subscriptions = [];
            this.totalCues = 0;
            this.elem = ref.nativeElement;
        }
        /**
         * @return {?}
         */
        VgScrubBarCuePointsComponent.prototype.ngOnInit = function () {
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
        VgScrubBarCuePointsComponent.prototype.onPlayerReady = function () {
            this.target = this.API.getMediaById(this.vgFor);
            /** @type {?} */
            var onTimeUpdate = this.target.subscriptions.loadedMetadata;
            this.subscriptions.push(onTimeUpdate.subscribe(this.onLoadedMetadata.bind(this)));
            if (this.onLoadedMetadataCalled) {
                this.onLoadedMetadata();
            }
        };
        /**
         * @return {?}
         */
        VgScrubBarCuePointsComponent.prototype.onLoadedMetadata = function () {
            if (this.vgCuePoints) {
                // We need to transform the TextTrackCueList to Array or it doesn't work on IE11/Edge.
                // See: https://github.com/videogular/videogular2/issues/369
                this.cuePoints = [];
                for (var i = 0, l = this.vgCuePoints.length; i < l; i++) {
                    /** @type {?} */
                    var end = this.vgCuePoints[i].endTime >= 0
                        ? this.vgCuePoints[i].endTime
                        : this.vgCuePoints[i].startTime + 1;
                    /** @type {?} */
                    var cuePointDuration = (end - this.vgCuePoints[i].startTime) * 1000;
                    /** @type {?} */
                    var position = '0';
                    /** @type {?} */
                    var percentWidth = '0';
                    if (typeof cuePointDuration === 'number' && this.target.time.total) {
                        percentWidth =
                            (cuePointDuration * 100) / this.target.time.total + '%';
                        position =
                            (this.vgCuePoints[i].startTime * 100) /
                                Math.round(this.target.time.total / 1000) +
                                '%';
                    }
                    (( /** @type {?} */(this.vgCuePoints[i]))).$$style = {
                        width: percentWidth,
                        left: position,
                    };
                    this.cuePoints.push(this.vgCuePoints[i]);
                }
            }
        };
        /**
         * @return {?}
         */
        VgScrubBarCuePointsComponent.prototype.updateCuePoints = function () {
            if (!this.target) {
                this.onLoadedMetadataCalled = true;
                return;
            }
            this.onLoadedMetadata();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        VgScrubBarCuePointsComponent.prototype.ngOnChanges = function (changes) {
            if (changes.vgCuePoints.currentValue) {
                this.updateCuePoints();
            }
        };
        /**
         * @return {?}
         */
        VgScrubBarCuePointsComponent.prototype.ngDoCheck = function () {
            if (this.vgCuePoints) {
                /** @type {?} */
                var changes = this.totalCues !== this.vgCuePoints.length;
                if (changes) {
                    this.totalCues = this.vgCuePoints.length;
                    this.updateCuePoints();
                }
            }
        };
        /**
         * @return {?}
         */
        VgScrubBarCuePointsComponent.prototype.ngOnDestroy = function () {
            this.subscriptions.forEach(( /**
             * @param {?} s
             * @return {?}
             */function (s) { return s.unsubscribe(); }));
        };
        return VgScrubBarCuePointsComponent;
    }());
    VgScrubBarCuePointsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'vg-scrub-bar-cue-points',
                    encapsulation: core.ViewEncapsulation.None,
                    template: "\n    <div class=\"cue-point-container\">\n      <span\n        *ngFor=\"let cp of cuePoints\"\n        [style.width]=\"cp.$$style?.width\"\n        [style.left]=\"cp.$$style?.left\"\n        class=\"cue-point\"\n      ></span>\n    </div>\n  ",
                    styles: ["\n      vg-scrub-bar-cue-points {\n        display: flex;\n        width: 100%;\n        height: 5px;\n        pointer-events: none;\n        position: absolute;\n      }\n      vg-scrub-bar-cue-points .cue-point-container .cue-point {\n        position: absolute;\n        height: 5px;\n        background-color: rgba(255, 204, 0, 0.7);\n      }\n      vg-controls vg-scrub-bar-cue-points {\n        position: absolute;\n        top: calc(50% - 3px);\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    VgScrubBarCuePointsComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core$1.VgApiService }
    ]; };
    VgScrubBarCuePointsComponent.propDecorators = {
        vgCuePoints: [{ type: core.Input }],
        vgFor: [{ type: core.Input }]
    };
    if (false) {
        /** @type {?} */
        VgScrubBarCuePointsComponent.prototype.vgCuePoints;
        /** @type {?} */
        VgScrubBarCuePointsComponent.prototype.vgFor;
        /** @type {?} */
        VgScrubBarCuePointsComponent.prototype.elem;
        /** @type {?} */
        VgScrubBarCuePointsComponent.prototype.target;
        /** @type {?} */
        VgScrubBarCuePointsComponent.prototype.onLoadedMetadataCalled;
        /** @type {?} */
        VgScrubBarCuePointsComponent.prototype.cuePoints;
        /** @type {?} */
        VgScrubBarCuePointsComponent.prototype.subscriptions;
        /** @type {?} */
        VgScrubBarCuePointsComponent.prototype.totalCues;
        /** @type {?} */
        VgScrubBarCuePointsComponent.prototype.API;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/vg-scrub-bar/vg-scrub-bar-current-time/vg-scrub-bar-current-time.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VgScrubBarCurrentTimeComponent = /** @class */ (function () {
        /**
         * @param {?} ref
         * @param {?} API
         */
        function VgScrubBarCurrentTimeComponent(ref, API) {
            this.API = API;
            this.vgSlider = false;
            this.subscriptions = [];
            this.elem = ref.nativeElement;
        }
        /**
         * @return {?}
         */
        VgScrubBarCurrentTimeComponent.prototype.ngOnInit = function () {
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
        VgScrubBarCurrentTimeComponent.prototype.onPlayerReady = function () {
            this.target = this.API.getMediaById(this.vgFor);
        };
        /**
         * @return {?}
         */
        VgScrubBarCurrentTimeComponent.prototype.getPercentage = function () {
            return this.target
                ? Math.round((this.target.time.current * 100) / this.target.time.total) +
                    '%'
                : '0%';
        };
        /**
         * @return {?}
         */
        VgScrubBarCurrentTimeComponent.prototype.ngOnDestroy = function () {
            this.subscriptions.forEach(( /**
             * @param {?} s
             * @return {?}
             */function (s) { return s.unsubscribe(); }));
        };
        return VgScrubBarCurrentTimeComponent;
    }());
    VgScrubBarCurrentTimeComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'vg-scrub-bar-current-time',
                    encapsulation: core.ViewEncapsulation.None,
                    template: "<div class=\"background\" [style.width]=\"getPercentage()\"></div>\n    <span class=\"slider\" *ngIf=\"vgSlider\"></span>",
                    styles: ["\n      vg-scrub-bar-current-time {\n        display: flex;\n        width: 100%;\n        height: 5px;\n        pointer-events: none;\n        position: absolute;\n      }\n      vg-scrub-bar-current-time .background {\n        background-color: white;\n      }\n      vg-controls vg-scrub-bar-current-time {\n        position: absolute;\n        top: calc(50% - 3px);\n        -webkit-border-radius: 2px;\n        -moz-border-radius: 2px;\n        border-radius: 2px;\n      }\n      vg-controls vg-scrub-bar-current-time .background {\n        border: 1px solid white;\n        -webkit-border-radius: 2px;\n        -moz-border-radius: 2px;\n        border-radius: 2px;\n      }\n      vg-scrub-bar-current-time .slider {\n        background: white;\n        height: 15px;\n        width: 15px;\n        border-radius: 50%;\n        box-shadow: 0px 0px 10px black;\n        margin-top: -5px;\n        margin-left: -10px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    VgScrubBarCurrentTimeComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core$1.VgApiService }
    ]; };
    VgScrubBarCurrentTimeComponent.propDecorators = {
        vgFor: [{ type: core.Input }],
        vgSlider: [{ type: core.Input }]
    };
    if (false) {
        /** @type {?} */
        VgScrubBarCurrentTimeComponent.prototype.vgFor;
        /** @type {?} */
        VgScrubBarCurrentTimeComponent.prototype.vgSlider;
        /** @type {?} */
        VgScrubBarCurrentTimeComponent.prototype.elem;
        /** @type {?} */
        VgScrubBarCurrentTimeComponent.prototype.target;
        /** @type {?} */
        VgScrubBarCurrentTimeComponent.prototype.subscriptions;
        /** @type {?} */
        VgScrubBarCurrentTimeComponent.prototype.API;
    }

    /** @type {?} */
    var components = [
        VgControlsComponent,
        VgVolumeComponent,
        VgTrackSelectorComponent,
        VgTimeDisplayComponent,
        VgScrubBarComponent,
        VgQualitySelectorComponent,
        VgPlaybackButtonComponent,
        VgPlayPauseComponent,
        VgMuteComponent,
        VgFullscreenComponent,
        VgUtcPipe,
        VgScrubBarBufferingTimeComponent,
        VgScrubBarCuePointsComponent,
        VgScrubBarCurrentTimeComponent
    ];
    var VgControlsModule = /** @class */ (function () {
        function VgControlsModule() {
        }
        return VgControlsModule;
    }());
    VgControlsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, core$1.VgCoreModule],
                    declarations: __spread(components),
                    exports: __spread(components),
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: videogular-ngx-videogular-controls.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.VgControlsComponent = VgControlsComponent;
    exports.VgControlsModule = VgControlsModule;
    exports.VgFullscreenComponent = VgFullscreenComponent;
    exports.VgMuteComponent = VgMuteComponent;
    exports.VgPlayPauseComponent = VgPlayPauseComponent;
    exports.VgPlaybackButtonComponent = VgPlaybackButtonComponent;
    exports.VgQualitySelectorComponent = VgQualitySelectorComponent;
    exports.VgScrubBarBufferingTimeComponent = VgScrubBarBufferingTimeComponent;
    exports.VgScrubBarComponent = VgScrubBarComponent;
    exports.VgScrubBarCuePointsComponent = VgScrubBarCuePointsComponent;
    exports.VgScrubBarCurrentTimeComponent = VgScrubBarCurrentTimeComponent;
    exports.VgTimeDisplayComponent = VgTimeDisplayComponent;
    exports.VgTrackSelectorComponent = VgTrackSelectorComponent;
    exports.VgUtcPipe = VgUtcPipe;
    exports.VgVolumeComponent = VgVolumeComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=videogular-ngx-videogular-controls.umd.js.map
