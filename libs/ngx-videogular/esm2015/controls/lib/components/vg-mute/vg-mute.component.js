/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-mute/vg-mute.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, HostListener, ViewEncapsulation, } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';
export class VgMuteComponent {
    /**
     * @param {?} ref
     * @param {?} API
     */
    constructor(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.ariaValue = 'unmuted';
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
        this.currentVolume = this.target.volume;
    }
    /**
     * @return {?}
     */
    onClick() {
        this.changeMuteState();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.changeMuteState();
        }
    }
    /**
     * @return {?}
     */
    changeMuteState() {
        /** @type {?} */
        const volume = this.getVolume();
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
    }
    /**
     * @return {?}
     */
    getVolume() {
        /** @type {?} */
        const volume = this.target ? this.target.volume : 0;
        this.ariaValue = volume ? 'unmuted' : 'muted';
        return volume;
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
VgMuteComponent.decorators = [
    { type: Component, args: [{
                selector: 'vg-mute',
                encapsulation: ViewEncapsulation.None,
                template: ` <div
    class="icon"
    [class.vg-icon-volume_up]="getVolume() >= 0.75"
    [class.vg-icon-volume_down]="getVolume() >= 0.25 && getVolume() < 0.75"
    [class.vg-icon-volume_mute]="getVolume() > 0 && getVolume() < 0.25"
    [class.vg-icon-volume_off]="getVolume() === 0"
    tabindex="0"
    role="button"
    aria-label="mute button"
    [attr.aria-valuetext]="ariaValue"
  ></div>`,
                styles: [`
      vg-mute {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
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
      }
      vg-mute .icon {
        pointer-events: none;
      }
    `]
            }] }
];
/** @nocollapse */
VgMuteComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: VgApiService }
];
VgMuteComponent.propDecorators = {
    vgFor: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
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
//# sourceMappingURL=vg-mute.component.js.map