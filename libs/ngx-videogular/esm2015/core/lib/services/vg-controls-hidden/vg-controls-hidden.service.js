/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/vg-controls-hidden/vg-controls-hidden.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class VgControlsHiddenService {
    constructor() {
        this.isHiddenSubject = new Subject();
        this.isHidden = this.isHiddenSubject.asObservable();
    }
    /**
     * @param {?} hidden
     * @return {?}
     */
    state(hidden) {
        this.isHiddenSubject.next(hidden);
    }
}
VgControlsHiddenService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
VgControlsHiddenService.ctorParameters = () => [];
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
//# sourceMappingURL=vg-controls-hidden.service.js.map