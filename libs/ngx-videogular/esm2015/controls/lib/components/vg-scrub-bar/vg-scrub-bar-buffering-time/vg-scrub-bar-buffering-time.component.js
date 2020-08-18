/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-scrub-bar/vg-scrub-bar-buffering-time/vg-scrub-bar-buffering-time.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, ViewEncapsulation, } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';
export class VgScrubBarBufferingTimeComponent {
    /**
     * @param {?} ref
     * @param {?} API
     */
    constructor(ref, API) {
        this.API = API;
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
    getBufferTime() {
        /** @type {?} */
        let bufferTime = '0%';
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
VgScrubBarBufferingTimeComponent.decorators = [
    { type: Component, args: [{
                selector: 'vg-scrub-bar-buffering-time',
                encapsulation: ViewEncapsulation.None,
                template: `<div class="background" [style.width]="getBufferTime()"></div>`,
                styles: [`
      vg-scrub-bar-buffering-time {
        display: flex;
        width: 100%;
        height: 5px;
        pointer-events: none;
        position: absolute;
      }
      vg-scrub-bar-buffering-time .background {
        background-color: rgba(255, 255, 255, 0.3);
      }
      vg-controls vg-scrub-bar-buffering-time {
        position: absolute;
        top: calc(50% - 3px);
      }
      vg-controls vg-scrub-bar-buffering-time .background {
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
      }
    `]
            }] }
];
/** @nocollapse */
VgScrubBarBufferingTimeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: VgApiService }
];
VgScrubBarBufferingTimeComponent.propDecorators = {
    vgFor: [{ type: Input }]
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
//# sourceMappingURL=vg-scrub-bar-buffering-time.component.js.map