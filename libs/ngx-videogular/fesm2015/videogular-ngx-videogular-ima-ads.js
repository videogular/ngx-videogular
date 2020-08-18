import { EventEmitter, Component, ViewEncapsulation, ElementRef, Input, Output, HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgEvents, VgApiService, VgFullscreenApiService, VgCoreModule } from '@videogular/ngx-videogular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/google.ima.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/vg-ima-ads.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgImaAdsComponent {
    /**
     * @param {?} ref
     * @param {?} API
     * @param {?} fsAPI
     */
    constructor(ref, API, fsAPI) {
        this.API = API;
        this.fsAPI = fsAPI;
        this.onAdStart = new EventEmitter();
        this.onAdStop = new EventEmitter();
        this.onSkipAd = new EventEmitter();
        this.isFullscreen = false;
        this.subscriptions = [];
        this.displayState = 'none';
        this.elem = ref.nativeElement;
        this.onContentEnded = this.onContentEnded.bind(this);
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
        if (typeof google === 'undefined') {
            this.onMissingGoogleImaLoader();
            return;
        }
        this.target = this.API.getMediaById(this.vgFor);
        this.initializations();
        this.subscriptions.push(this.target.subscriptions.ended.subscribe(this.onContentEnded.bind(this)));
        this.subscriptions.push(this.target.subscriptions.play.subscribe(this.onUpdateState.bind(this)));
        this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
        this.ima.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded.bind(this), false);
        this.ima.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError.bind(this), false);
        this.loadAds();
    }
    /**
     * @return {?}
     */
    initializations() {
        this.ima = new Ima(this.elem);
        if (this.vgSkipButton) {
            this.skipButton = (/** @type {?} */ (document.querySelector(this.vgSkipButton)));
            this.skipButton.style.display = 'none';
            this.skipButton.addEventListener('click', this.onClickSkip.bind(this));
            this.elem.insertBefore(this.skipButton, this.elem.firstChild);
        }
        window.addEventListener('resize', (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const w = this.API.videogularElement.offsetWidth;
            /** @type {?} */
            const h = this.API.videogularElement.offsetHeight;
            if (this.ima.adsManager) {
                if (this.isFullscreen) {
                    this.ima.adsManager.resize(w, h, google.ima.ViewMode.FULLSCREEN);
                }
                else {
                    this.ima.adsManager.resize(w, h, google.ima.ViewMode.NORMAL);
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    loadAds() {
        if (this.vgCompanion) {
            googletag.cmd.push((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const adUnitPath = '/' + this.vgNetwork + '/' + this.vgUnitPath;
                /** @type {?} */
                const slot = googletag.defineSlot(adUnitPath, this.vgCompanionSize, this.vgCompanion);
                if (slot) {
                    slot.addService(googletag.companionAds());
                    slot.addService(googletag.pubads());
                    googletag.companionAds().setRefreshUnfilledSlots(true);
                    googletag.pubads().enableVideoAds();
                    googletag.enableServices();
                }
            }));
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onUpdateState(event) {
        switch (event.type) {
            case VgEvents.VG_PLAY:
                if (!this.ima.adsLoaded) {
                    this.API.pause();
                    this.ima.adDisplayContainer.initialize();
                    this.requestAds(this.vgAdTagUrl);
                    this.ima.adsLoaded = true;
                }
                break;
        }
    }
    /**
     * @param {?} adTagUrl
     * @return {?}
     */
    requestAds(adTagUrl) {
        // Show only to get computed style in pixels
        this.show();
        /** @type {?} */
        const adsRequest = new google.ima.AdsRequest();
        /** @type {?} */
        const computedStyle = window.getComputedStyle(this.elem);
        adsRequest.adTagUrl = adTagUrl;
        adsRequest.linearAdSlotWidth = parseInt(computedStyle.width, 10);
        adsRequest.linearAdSlotHeight = parseInt(computedStyle.height, 10);
        adsRequest.nonLinearAdSlotWidth = parseInt(computedStyle.width, 10);
        adsRequest.nonLinearAdSlotHeight = parseInt(computedStyle.height, 10);
        this.ima.adsLoader.requestAds(adsRequest);
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onAdsManagerLoaded(evt) {
        this.show();
        this.ima.adsManager = evt.getAdsManager(this.target);
        this.processAdsManager(this.ima.adsManager);
    }
    // @ts-ignore
    /**
     * @param {?} adsManager
     * @return {?}
     */
    processAdsManager(adsManager) {
        /** @type {?} */
        const w = this.API.videogularElement.offsetWidth;
        /** @type {?} */
        const h = this.API.videogularElement.offsetHeight;
        // Attach the pause/resume events.
        this.ima.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, this.onContentPauseRequested.bind(this), false);
        this.ima.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, this.onContentResumeRequested.bind(this), false);
        this.ima.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, this.onSkippableStateChanged.bind(this), false);
        this.ima.adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, this.onAllAdsComplete.bind(this), false);
        this.ima.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, this.onAdComplete.bind(this), false);
        this.ima.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError.bind(this), false);
        this.ima.adsManager.init(w, h, google.ima.ViewMode.NORMAL);
        this.ima.adsManager.start();
    }
    /**
     * @return {?}
     */
    onSkippableStateChanged() {
        /** @type {?} */
        const isSkippable = this.ima.adsManager.getAdSkippableState();
        if (isSkippable) {
            this.skipButton.style.display = 'block';
        }
        else {
            this.skipButton.style.display = 'none';
        }
    }
    /**
     * @return {?}
     */
    onClickSkip() {
        this.ima.adsManager.skip();
        this.onSkipAd.emit(true);
    }
    /**
     * @return {?}
     */
    onContentPauseRequested() {
        this.show();
        this.API.pause();
        this.onAdStop.emit(true);
    }
    /**
     * @return {?}
     */
    onContentResumeRequested() {
        this.API.play();
        this.onAdStart.emit(true);
        this.hide();
    }
    // @ts-ignore
    /**
     * @param {?} evt
     * @return {?}
     */
    onAdError(evt) {
        if (this.ima.adsManager) {
            this.ima.adsManager.destroy();
        }
        this.hide();
        this.API.play();
        this.onAdStop.emit(true);
    }
    /**
     * @return {?}
     */
    onAllAdsComplete() {
        this.hide();
        // The last ad was a post-roll
        if (this.ima.adsManager.getCuePoints().join().indexOf('-1') >= 0) {
            this.API.pause(); // it was stop() in Videogular v1
            this.onAdStop.emit(true);
        }
    }
    /**
     * @return {?}
     */
    onAdComplete() {
        // TODO: Update view with current ad count
        this.ima.currentAd++;
        this.onAdStop.emit(true);
    }
    /**
     * @return {?}
     */
    show() {
        window.dispatchEvent(new CustomEvent(VgEvents.VG_START_ADS));
        this.displayState = 'block';
    }
    /**
     * @return {?}
     */
    hide() {
        window.dispatchEvent(new CustomEvent(VgEvents.VG_END_ADS));
        this.displayState = 'none';
    }
    /**
     * @return {?}
     */
    onContentEnded() {
        this.ima.adsLoader.contentComplete();
        this.onAdStop.emit(true);
    }
    /**
     * @param {?} fsState
     * @return {?}
     */
    onChangeFullscreen(fsState) {
        if (!this.fsAPI.nativeFullscreen) {
            this.isFullscreen = fsState;
        }
    }
    /**
     * @private
     * @return {?}
     */
    onMissingGoogleImaLoader() {
        this.hide();
        this.API.play();
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
VgImaAdsComponent.decorators = [
    { type: Component, args: [{
                selector: 'vg-ima-ads',
                encapsulation: ViewEncapsulation.None,
                template: `<div class="vg-ima-ads"></div>`,
                styles: [`
      vg-ima-ads {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 300;
      }
      vg-ima-ads .vg-ima-ads {
        position: absolute;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }
    `]
            }] }
];
/** @nocollapse */
VgImaAdsComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: VgApiService },
    { type: VgFullscreenApiService }
];
VgImaAdsComponent.propDecorators = {
    vgFor: [{ type: Input }],
    vgNetwork: [{ type: Input }],
    vgUnitPath: [{ type: Input }],
    vgCompanion: [{ type: Input }],
    vgCompanionSize: [{ type: Input }],
    vgAdTagUrl: [{ type: Input }],
    vgSkipButton: [{ type: Input }],
    onAdStart: [{ type: Output }],
    onAdStop: [{ type: Output }],
    onSkipAd: [{ type: Output }],
    displayState: [{ type: HostBinding, args: ['style.display',] }]
};
if (false) {
    /** @type {?} */
    VgImaAdsComponent.prototype.vgFor;
    /** @type {?} */
    VgImaAdsComponent.prototype.vgNetwork;
    /** @type {?} */
    VgImaAdsComponent.prototype.vgUnitPath;
    /** @type {?} */
    VgImaAdsComponent.prototype.vgCompanion;
    /** @type {?} */
    VgImaAdsComponent.prototype.vgCompanionSize;
    /** @type {?} */
    VgImaAdsComponent.prototype.vgAdTagUrl;
    /** @type {?} */
    VgImaAdsComponent.prototype.vgSkipButton;
    /** @type {?} */
    VgImaAdsComponent.prototype.onAdStart;
    /** @type {?} */
    VgImaAdsComponent.prototype.onAdStop;
    /** @type {?} */
    VgImaAdsComponent.prototype.onSkipAd;
    /** @type {?} */
    VgImaAdsComponent.prototype.elem;
    /** @type {?} */
    VgImaAdsComponent.prototype.target;
    /** @type {?} */
    VgImaAdsComponent.prototype.ima;
    /** @type {?} */
    VgImaAdsComponent.prototype.isFullscreen;
    /** @type {?} */
    VgImaAdsComponent.prototype.skipButton;
    /** @type {?} */
    VgImaAdsComponent.prototype.subscriptions;
    /** @type {?} */
    VgImaAdsComponent.prototype.displayState;
    /** @type {?} */
    VgImaAdsComponent.prototype.API;
    /** @type {?} */
    VgImaAdsComponent.prototype.fsAPI;
}
class Ima {
    /**
     * @param {?} imaAdsElement
     */
    constructor(imaAdsElement) {
        this.adDisplayContainer = new google.ima.AdDisplayContainer(imaAdsElement);
        this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer);
        this.adsManager = null;
        this.adsLoaded = false;
        this.currentAd = 0;
    }
}
if (false) {
    /** @type {?} */
    Ima.prototype.adDisplayContainer;
    /** @type {?} */
    Ima.prototype.adsLoader;
    /** @type {?} */
    Ima.prototype.adsManager;
    /** @type {?} */
    Ima.prototype.adsLoaded;
    /** @type {?} */
    Ima.prototype.currentAd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ima-ads.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgImaAdsModule {
}
VgImaAdsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, VgCoreModule],
                declarations: [VgImaAdsComponent],
                exports: [VgImaAdsComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: videogular-ngx-videogular-ima-ads.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Ima, VgImaAdsComponent, VgImaAdsModule };
//# sourceMappingURL=videogular-ngx-videogular-ima-ads.js.map
