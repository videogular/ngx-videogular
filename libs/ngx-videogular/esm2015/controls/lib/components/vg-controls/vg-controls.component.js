/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-controls/vg-controls.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, HostBinding, ViewEncapsulation, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { VgApiService, VgControlsHiddenService, VgStates } from '@videogular/ngx-videogular/core';
export class VgControlsComponent {
    // @ts-ignore
    /**
     * @param {?} API
     * @param {?} ref
     * @param {?} hidden
     */
    constructor(API, ref, hidden) {
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
    ngOnInit() {
        this.mouseMove$ = fromEvent(this.API.videogularElement, 'mousemove');
        this.subscriptions.push(this.mouseMove$.subscribe(this.show.bind(this)));
        this.touchStart$ = fromEvent(this.API.videogularElement, 'touchstart');
        this.subscriptions.push(this.touchStart$.subscribe(this.show.bind(this)));
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
        this.subscriptions.push(this.target.subscriptions.play.subscribe(this.onPlay.bind(this)));
        this.subscriptions.push(this.target.subscriptions.pause.subscribe(this.onPause.bind(this)));
        this.subscriptions.push(this.target.subscriptions.startAds.subscribe(this.onStartAds.bind(this)));
        this.subscriptions.push(this.target.subscriptions.endAds.subscribe(this.onEndAds.bind(this)));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.vgAutohide) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    /**
     * @return {?}
     */
    onPlay() {
        if (this.vgAutohide) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    onPause() {
        clearTimeout(this.timer);
        this.hideControls = false;
        this.hidden.state(false);
    }
    /**
     * @return {?}
     */
    onStartAds() {
        this.isAdsPlaying = 'none';
    }
    /**
     * @return {?}
     */
    onEndAds() {
        this.isAdsPlaying = 'initial';
    }
    /**
     * @return {?}
     */
    hide() {
        if (this.vgAutohide) {
            clearTimeout(this.timer);
            this.hideAsync();
        }
    }
    /**
     * @return {?}
     */
    show() {
        clearTimeout(this.timer);
        this.hideControls = false;
        this.hidden.state(false);
        if (this.vgAutohide) {
            this.hideAsync();
        }
    }
    /**
     * @private
     * @return {?}
     */
    hideAsync() {
        if (this.API.state === VgStates.VG_PLAYING) {
            this.timer = setTimeout((/**
             * @return {?}
             */
            () => {
                this.hideControls = true;
                this.hidden.state(true);
            }), this.vgAutohideTime * 1000);
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
VgControlsComponent.decorators = [
    { type: Component, args: [{
                selector: 'vg-controls',
                encapsulation: ViewEncapsulation.None,
                template: `<ng-content></ng-content>`,
                styles: [`
      vg-controls {
        position: absolute;
        display: flex;
        width: 100%;
        height: 50px;
        z-index: 300;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        -webkit-transition: bottom 1s;
        -khtml-transition: bottom 1s;
        -moz-transition: bottom 1s;
        -ms-transition: bottom 1s;
        transition: bottom 1s;
      }
      vg-controls.hide {
        bottom: -50px;
      }
    `]
            }] }
];
/** @nocollapse */
VgControlsComponent.ctorParameters = () => [
    { type: VgApiService },
    { type: ElementRef },
    { type: VgControlsHiddenService }
];
VgControlsComponent.propDecorators = {
    isAdsPlaying: [{ type: HostBinding, args: ['style.pointer-events',] }],
    hideControls: [{ type: HostBinding, args: ['class.hide',] }],
    vgFor: [{ type: Input }],
    vgAutohide: [{ type: Input }],
    vgAutohideTime: [{ type: Input }]
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
//# sourceMappingURL=vg-controls.component.js.map