/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/vg-utils/vg-utils.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class VgUtilsService {
    /**
     * Inspired by Paul Irish
     * https://gist.github.com/paulirish/211209
     * @return {?}
     */
    static getZIndex() {
        /** @type {?} */
        let zIndex = 1;
        /** @type {?} */
        let elementZIndex;
        /** @type {?} */
        const tags = document.getElementsByTagName('*');
        for (let i = 0, l = tags.length; i < l; i++) {
            elementZIndex = parseInt(window.getComputedStyle(tags[i])['z-index'], 10);
            if (elementZIndex > zIndex) {
                zIndex = elementZIndex + 1;
            }
        }
        return zIndex;
    }
    // Very simple mobile detection, not 100% reliable
    /**
     * @return {?}
     */
    static isMobileDevice() {
        // return (
        //   typeof window.screen.orientation !== 'undefined' ||
        //   navigator.userAgent.indexOf('IEMobile') !== -1
        // );
        // window.orientation is deprecated and we should use window.screen.orientation
        return (typeof window.orientation !== 'undefined' ||
            navigator.userAgent.indexOf('IEMobile') !== -1);
    }
    /**
     * @return {?}
     */
    static isiOSDevice() {
        return (navigator.userAgent.match(/ip(hone|ad|od)/i) &&
            !navigator.userAgent.match(/(iemobile)[\/\s]?([\w\.]*)/i));
    }
    /**
     * @return {?}
     */
    static isCordova() {
        return (document.URL.indexOf('http://') === -1 &&
            document.URL.indexOf('https://') === -1);
    }
}
VgUtilsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ VgUtilsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function VgUtilsService_Factory() { return new VgUtilsService(); }, token: VgUtilsService, providedIn: "root" });
//# sourceMappingURL=vg-utils.service.js.map