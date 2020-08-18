/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-player/vg-player.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Output, Component, EventEmitter, ElementRef, HostBinding, QueryList, ContentChildren, ViewEncapsulation, } from '@angular/core';
import { VgApiService } from '../../services/vg-api/vg-api.service';
import { VgFullscreenApiService } from '../../services/vg-fullscreen-api/vg-fullscreen-api.service';
import { VgControlsHiddenService } from '../../services/vg-controls-hidden/vg-controls-hidden.service';
import { VgMediaDirective } from '../../directives/vg-media/vg-media.directive';
import { VgUtilsService } from '../../services/vg-utils/vg-utils.service';
export class VgPlayerComponent {
    /**
     * @param {?} ref
     * @param {?} api
     * @param {?} fsAPI
     * @param {?} controlsHidden
     */
    constructor(ref, api, fsAPI, controlsHidden) {
        this.api = api;
        this.fsAPI = fsAPI;
        this.controlsHidden = controlsHidden;
        this.isFullscreen = false;
        this.isNativeFullscreen = false;
        this.areControlsHidden = false;
        this.onPlayerReady = new EventEmitter();
        this.onMediaReady = new EventEmitter();
        this.subscriptions = [];
        this.elem = ref.nativeElement;
        this.api.registerElement(this.elem);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.medias.toArray().forEach((/**
         * @param {?} media
         * @return {?}
         */
        (media) => {
            this.api.registerMedia(media);
        }));
        this.fsAPI.init(this.elem, this.medias);
        this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
        this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this)));
        this.api.onPlayerReady(this.fsAPI);
        this.onPlayerReady.emit(this.api);
    }
    /**
     * @param {?} fsState
     * @return {?}
     */
    onChangeFullscreen(fsState) {
        if (!this.fsAPI.nativeFullscreen) {
            this.isFullscreen = fsState;
            this.zIndex = fsState ? VgUtilsService.getZIndex().toString() : 'auto';
        }
        else {
            this.isNativeFullscreen = fsState;
        }
    }
    /**
     * @param {?} hidden
     * @return {?}
     */
    onHideControls(hidden) {
        this.areControlsHidden = hidden;
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
VgPlayerComponent.decorators = [
    { type: Component, args: [{
                selector: 'vg-player',
                encapsulation: ViewEncapsulation.None,
                template: `<ng-content></ng-content>`,
                providers: [VgApiService, VgFullscreenApiService, VgControlsHiddenService],
                styles: [`
      vg-player {
        font-family: 'videogular';
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: black;
      }
      vg-player.fullscreen {
        position: fixed;
        left: 0;
        top: 0;
      }
      vg-player.native-fullscreen.controls-hidden {
        cursor: none;
      }
    `]
            }] }
];
/** @nocollapse */
VgPlayerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: VgApiService },
    { type: VgFullscreenApiService },
    { type: VgControlsHiddenService }
];
VgPlayerComponent.propDecorators = {
    isFullscreen: [{ type: HostBinding, args: ['class.fullscreen',] }],
    isNativeFullscreen: [{ type: HostBinding, args: ['class.native-fullscreen',] }],
    areControlsHidden: [{ type: HostBinding, args: ['class.controls-hidden',] }],
    zIndex: [{ type: HostBinding, args: ['style.z-index',] }],
    onPlayerReady: [{ type: Output }],
    onMediaReady: [{ type: Output }],
    medias: [{ type: ContentChildren, args: [VgMediaDirective,] }]
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
//# sourceMappingURL=vg-player.component.js.map