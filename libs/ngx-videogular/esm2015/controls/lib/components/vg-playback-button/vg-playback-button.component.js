/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-playback-button/vg-playback-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, HostListener, ViewEncapsulation, ChangeDetectorRef, } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';
export class VgPlaybackButtonComponent {
    /**
     * @param {?} ref
     * @param {?} API
     * @param {?} cdr
     */
    constructor(ref, API, cdr) {
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
    onClick() {
        this.updatePlaybackSpeed();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.updatePlaybackSpeed();
        }
    }
    /**
     * @return {?}
     */
    updatePlaybackSpeed() {
        this.playbackIndex = ++this.playbackIndex % this.playbackValues.length;
        if (this.target instanceof VgApiService) {
            this.target.playbackRate = this.playbackValues[this.playbackIndex];
        }
        else {
            this.target.playbackRate[this.vgFor] = this.playbackValues[this.playbackIndex];
        }
        this.detectChanges();
    }
    /**
     * @return {?}
     */
    getPlaybackRate() {
        this.ariaValue = this.target ? this.target.playbackRate : 1.0;
        return this.ariaValue;
    }
    /**
     * @return {?}
     */
    detectChanges() {
        try {
            this.cdr.detectChanges();
        }
        catch (e) {
            console.warn(e);
        }
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
VgPlaybackButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'vg-playback-button',
                encapsulation: ViewEncapsulation.None,
                template: ` <span
    class="button"
    tabindex="0"
    role="button"
    aria-label="playback speed button"
    [attr.aria-valuetext]="ariaValue"
  >
    {{ getPlaybackRate() }}x
  </span>`,
                styles: [`
      vg-playback-button {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: flex;
        justify-content: center;
        height: 50px;
        width: 50px;
        cursor: pointer;
        color: white;
        line-height: 50px;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      }
      vg-playback-button .button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
      }
    `]
            }] }
];
/** @nocollapse */
VgPlaybackButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: VgApiService },
    { type: ChangeDetectorRef }
];
VgPlaybackButtonComponent.propDecorators = {
    vgFor: [{ type: Input }],
    playbackValues: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
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
//# sourceMappingURL=vg-playback-button.component.js.map