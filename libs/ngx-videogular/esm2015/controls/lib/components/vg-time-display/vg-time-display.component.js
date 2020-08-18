/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-time-display/vg-time-display.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, ViewEncapsulation, Pipe, } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';
// Workaround until we can use UTC with Angular Date Pipe
export class VgUtcPipe {
    /**
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    transform(value, format) {
        /** @type {?} */
        let date = new Date(value);
        /** @type {?} */
        let result = format;
        /** @type {?} */
        let ss = date.getUTCSeconds();
        /** @type {?} */
        let mm = date.getUTCMinutes();
        /** @type {?} */
        let hh = date.getUTCHours();
        if (ss < 10) {
            ss = '0' + ss;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        if (hh < 10) {
            hh = '0' + hh;
        }
        result = result.replace(/ss/g, (/** @type {?} */ (ss)));
        result = result.replace(/mm/g, (/** @type {?} */ (mm)));
        result = result.replace(/hh/g, (/** @type {?} */ (hh)));
        return result;
    }
}
VgUtcPipe.decorators = [
    { type: Pipe, args: [{ name: 'vgUtc' },] }
];
export class VgTimeDisplayComponent {
    /**
     * @param {?} ref
     * @param {?} API
     */
    constructor(ref, API) {
        this.API = API;
        this.vgProperty = 'current';
        this.vgFormat = 'mm:ss';
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe((/**
             * @return {?}
             */
            () => this.onPlayerReady())));
        }
    }
    /**
     * @return {?}
     */
    onPlayerReady() {
        this.target = this.API.getMediaById(this.vgFor);
    }
    /**
     * @return {?}
     */
    getTime() {
        /** @type {?} */
        let t = 0;
        if (this.target) {
            t = Math.round(this.target.time[this.vgProperty]);
            t = isNaN(t) || this.target.isLive ? 0 : t;
        }
        return t;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach((/**
         * @param {?} s
         * @return {?}
         */
        (s) => s.unsubscribe()));
    }
}
VgTimeDisplayComponent.decorators = [
    { type: Component, args: [{
                selector: 'vg-time-display',
                encapsulation: ViewEncapsulation.None,
                template: `
    <span *ngIf="target?.isLive">LIVE</span>
    <span *ngIf="!target?.isLive">{{ getTime() | vgUtc: vgFormat }}</span>
    <ng-content></ng-content>
  `,
                styles: [`
      vg-time-display {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: flex;
        justify-content: center;
        height: 50px;
        width: 60px;
        cursor: pointer;
        color: white;
        line-height: 50px;
        pointer-events: none;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      }
    `]
            }] }
];
/** @nocollapse */
VgTimeDisplayComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: VgApiService }
];
VgTimeDisplayComponent.propDecorators = {
    vgFor: [{ type: Input }],
    vgProperty: [{ type: Input }],
    vgFormat: [{ type: Input }]
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
//# sourceMappingURL=vg-time-display.component.js.map