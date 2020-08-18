/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/vg-fullscreen-api/vg-fullscreen-api.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter } from '@angular/core';
import { VgUtilsService } from '../vg-utils/vg-utils.service';
import { fromEvent } from 'rxjs';
import * as i0 from "@angular/core";
export class VgFullscreenApiService {
    constructor() {
        this.nativeFullscreen = true;
        this.isFullscreen = false;
        this.onChangeFullscreen = new EventEmitter();
    }
    /**
     * @param {?} elem
     * @param {?} medias
     * @return {?}
     */
    init(elem, medias) {
        this.videogularElement = elem;
        this.medias = medias;
        /** @type {?} */
        const APIs = {
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
        for (const browser in APIs) {
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
        let fsElemDispatcher;
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
        this.fsChangeSubscription = fromEvent(fsElemDispatcher, this.polyfill.onchange).subscribe((/**
         * @return {?}
         */
        () => {
            this.onFullscreenChange();
        }));
    }
    /**
     * @return {?}
     */
    onFullscreenChange() {
        this.isFullscreen = !!document[this.polyfill.element];
        this.onChangeFullscreen.emit(this.isFullscreen);
    }
    /**
     * @param {?=} element
     * @return {?}
     */
    toggleFullscreen(element = null) {
        if (this.isFullscreen) {
            this.exit();
        }
        else {
            this.request(element);
        }
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    request(elem) {
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
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    enterElementInFullScreen(elem) {
        elem[this.polyfill.request]();
    }
    /**
     * @return {?}
     */
    exit() {
        this.isFullscreen = false;
        this.onChangeFullscreen.emit(false);
        // Exit from native fullscreen
        if (this.isAvailable && this.nativeFullscreen) {
            document[this.polyfill.exit]();
        }
    }
}
VgFullscreenApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
VgFullscreenApiService.ctorParameters = () => [];
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
//# sourceMappingURL=vg-fullscreen-api.service.js.map