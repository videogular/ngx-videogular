(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@videogular/ngx-videogular/core')) :
    typeof define === 'function' && define.amd ? define('@videogular/ngx-videogular/ima-ads', ['exports', '@angular/core', '@angular/common', '@videogular/ngx-videogular/core'], factory) :
    (global = global || self, factory((global.videogular = global.videogular || {}, global.videogular['ngx-videogular'] = global.videogular['ngx-videogular'] || {}, global.videogular['ngx-videogular']['ima-ads'] = {}), global.ng.core, global.ng.common, global.videogular['ngx-videogular'].core));
}(this, (function (exports, core, common, core$1) { 'use strict';

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
    var VgImaAdsComponent = /** @class */ (function () {
        /**
         * @param {?} ref
         * @param {?} API
         * @param {?} fsAPI
         */
        function VgImaAdsComponent(ref, API, fsAPI) {
            this.API = API;
            this.fsAPI = fsAPI;
            this.onAdStart = new core.EventEmitter();
            this.onAdStop = new core.EventEmitter();
            this.onSkipAd = new core.EventEmitter();
            this.isFullscreen = false;
            this.subscriptions = [];
            this.displayState = 'none';
            this.elem = ref.nativeElement;
            this.onContentEnded = this.onContentEnded.bind(this);
        }
        /**
         * @return {?}
         */
        VgImaAdsComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.API.isPlayerReady) {
                this.onPlayerReady();
            }
            else {
                this.subscriptions.push(this.API.playerReadyEvent.subscribe(( /**
                 * @return {?}
                 */function () { return _this.onPlayerReady(); })));
            }
        };
        /**
         * @return {?}
         */
        VgImaAdsComponent.prototype.onPlayerReady = function () {
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
        };
        /**
         * @return {?}
         */
        VgImaAdsComponent.prototype.initializations = function () {
            var _this = this;
            this.ima = new Ima(this.elem);
            if (this.vgSkipButton) {
                this.skipButton = ( /** @type {?} */(document.querySelector(this.vgSkipButton)));
                this.skipButton.style.display = 'none';
                this.skipButton.addEventListener('click', this.onClickSkip.bind(this));
                this.elem.insertBefore(this.skipButton, this.elem.firstChild);
            }
            window.addEventListener('resize', ( /**
             * @return {?}
             */function () {
                /** @type {?} */
                var w = _this.API.videogularElement.offsetWidth;
                /** @type {?} */
                var h = _this.API.videogularElement.offsetHeight;
                if (_this.ima.adsManager) {
                    if (_this.isFullscreen) {
                        _this.ima.adsManager.resize(w, h, google.ima.ViewMode.FULLSCREEN);
                    }
                    else {
                        _this.ima.adsManager.resize(w, h, google.ima.ViewMode.NORMAL);
                    }
                }
            }));
        };
        /**
         * @return {?}
         */
        VgImaAdsComponent.prototype.loadAds = function () {
            var _this = this;
            if (this.vgCompanion) {
                googletag.cmd.push(( /**
                 * @return {?}
                 */function () {
                    /** @type {?} */
                    var adUnitPath = '/' + _this.vgNetwork + '/' + _this.vgUnitPath;
                    /** @type {?} */
                    var slot = googletag.defineSlot(adUnitPath, _this.vgCompanionSize, _this.vgCompanion);
                    if (slot) {
                        slot.addService(googletag.companionAds());
                        slot.addService(googletag.pubads());
                        googletag.companionAds().setRefreshUnfilledSlots(true);
                        googletag.pubads().enableVideoAds();
                        googletag.enableServices();
                    }
                }));
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        VgImaAdsComponent.prototype.onUpdateState = function (event) {
            switch (event.type) {
                case core$1.VgEvents.VG_PLAY:
                    if (!this.ima.adsLoaded) {
                        this.API.pause();
                        this.ima.adDisplayContainer.initialize();
                        this.requestAds(this.vgAdTagUrl);
                        this.ima.adsLoaded = true;
                    }
                    break;
            }
        };
        /**
         * @param {?} adTagUrl
         * @return {?}
         */
        VgImaAdsComponent.prototype.requestAds = function (adTagUrl) {
            // Show only to get computed style in pixels
            this.show();
            /** @type {?} */
            var adsRequest = new google.ima.AdsRequest();
            /** @type {?} */
            var computedStyle = window.getComputedStyle(this.elem);
            adsRequest.adTagUrl = adTagUrl;
            adsRequest.linearAdSlotWidth = parseInt(computedStyle.width, 10);
            adsRequest.linearAdSlotHeight = parseInt(computedStyle.height, 10);
            adsRequest.nonLinearAdSlotWidth = parseInt(computedStyle.width, 10);
            adsRequest.nonLinearAdSlotHeight = parseInt(computedStyle.height, 10);
            this.ima.adsLoader.requestAds(adsRequest);
        };
        /**
         * @param {?} evt
         * @return {?}
         */
        VgImaAdsComponent.prototype.onAdsManagerLoaded = function (evt) {
            this.show();
            this.ima.adsManager = evt.getAdsManager(this.target);
            this.processAdsManager(this.ima.adsManager);
        };
        // @ts-ignore
        /**
         * @param {?} adsManager
         * @return {?}
         */
        VgImaAdsComponent.prototype.processAdsManager = function (adsManager) {
            /** @type {?} */
            var w = this.API.videogularElement.offsetWidth;
            /** @type {?} */
            var h = this.API.videogularElement.offsetHeight;
            // Attach the pause/resume events.
            this.ima.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, this.onContentPauseRequested.bind(this), false);
            this.ima.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, this.onContentResumeRequested.bind(this), false);
            this.ima.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, this.onSkippableStateChanged.bind(this), false);
            this.ima.adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, this.onAllAdsComplete.bind(this), false);
            this.ima.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, this.onAdComplete.bind(this), false);
            this.ima.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError.bind(this), false);
            this.ima.adsManager.init(w, h, google.ima.ViewMode.NORMAL);
            this.ima.adsManager.start();
        };
        /**
         * @return {?}
         */
        VgImaAdsComponent.prototype.onSkippableStateChanged = function () {
            /** @type {?} */
            var isSkippable = this.ima.adsManager.getAdSkippableState();
            if (isSkippable) {
                this.skipButton.style.display = 'block';
            }
            else {
                this.skipButton.style.display = 'none';
            }
        };
        /**
         * @return {?}
         */
        VgImaAdsComponent.prototype.onClickSkip = function () {
            this.ima.adsManager.skip();
            this.onSkipAd.emit(true);
        };
        /**
         * @return {?}
         */
        VgImaAdsComponent.prototype.onContentPauseRequested = function () {
            this.show();
            this.API.pause();
            this.onAdStop.emit(true);
        };
        /**
         * @return {?}
         */
        VgImaAdsComponent.prototype.onContentResumeRequested = function () {
            this.API.play();
            this.onAdStart.emit(true);
            this.hide();
        };
        // @ts-ignore
        /**
         * @param {?} evt
         * @return {?}
         */
        VgImaAdsComponent.prototype.onAdError = function (evt) {
            if (this.ima.adsManager) {
                this.ima.adsManager.destroy();
            }
            this.hide();
            this.API.play();
            this.onAdStop.emit(true);
        };
        /**
         * @return {?}
         */
        VgImaAdsComponent.prototype.onAllAdsComplete = function () {
            this.hide();
            // The last ad was a post-roll
            if (this.ima.adsManager.getCuePoints().join().indexOf('-1') >= 0) {
                this.API.pause(); // it was stop() in Videogular v1
                this.onAdStop.emit(true);
            }
        };
        /**
         * @return {?}
         */
        VgImaAdsComponent.prototype.onAdComplete = function () {
            // TODO: Update view with current ad count
            this.ima.currentAd++;
            this.onAdStop.emit(true);
        };
        /**
         * @return {?}
         */
        VgImaAdsComponent.prototype.show = function () {
            window.dispatchEvent(new CustomEvent(core$1.VgEvents.VG_START_ADS));
            this.displayState = 'block';
        };
        /**
         * @return {?}
         */
        VgImaAdsComponent.prototype.hide = function () {
            window.dispatchEvent(new CustomEvent(core$1.VgEvents.VG_END_ADS));
            this.displayState = 'none';
        };
        /**
         * @return {?}
         */
        VgImaAdsComponent.prototype.onContentEnded = function () {
            this.ima.adsLoader.contentComplete();
            this.onAdStop.emit(true);
        };
        /**
         * @param {?} fsState
         * @return {?}
         */
        VgImaAdsComponent.prototype.onChangeFullscreen = function (fsState) {
            if (!this.fsAPI.nativeFullscreen) {
                this.isFullscreen = fsState;
            }
        };
        /**
         * @private
         * @return {?}
         */
        VgImaAdsComponent.prototype.onMissingGoogleImaLoader = function () {
            this.hide();
            this.API.play();
        };
        /**
         * @return {?}
         */
        VgImaAdsComponent.prototype.ngOnDestroy = function () {
            this.subscriptions.forEach(( /**
             * @param {?} s
             * @return {?}
             */function (s) { return s.unsubscribe(); }));
        };
        return VgImaAdsComponent;
    }());
    VgImaAdsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'vg-ima-ads',
                    encapsulation: core.ViewEncapsulation.None,
                    template: "<div class=\"vg-ima-ads\"></div>",
                    styles: ["\n      vg-ima-ads {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        z-index: 300;\n      }\n      vg-ima-ads .vg-ima-ads {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        pointer-events: none;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    VgImaAdsComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core$1.VgApiService },
        { type: core$1.VgFullscreenApiService }
    ]; };
    VgImaAdsComponent.propDecorators = {
        vgFor: [{ type: core.Input }],
        vgNetwork: [{ type: core.Input }],
        vgUnitPath: [{ type: core.Input }],
        vgCompanion: [{ type: core.Input }],
        vgCompanionSize: [{ type: core.Input }],
        vgAdTagUrl: [{ type: core.Input }],
        vgSkipButton: [{ type: core.Input }],
        onAdStart: [{ type: core.Output }],
        onAdStop: [{ type: core.Output }],
        onSkipAd: [{ type: core.Output }],
        displayState: [{ type: core.HostBinding, args: ['style.display',] }]
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
    var Ima = /** @class */ (function () {
        /**
         * @param {?} imaAdsElement
         */
        function Ima(imaAdsElement) {
            this.adDisplayContainer = new google.ima.AdDisplayContainer(imaAdsElement);
            this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer);
            this.adsManager = null;
            this.adsLoaded = false;
            this.currentAd = 0;
        }
        return Ima;
    }());
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
    var VgImaAdsModule = /** @class */ (function () {
        function VgImaAdsModule() {
        }
        return VgImaAdsModule;
    }());
    VgImaAdsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, core$1.VgCoreModule],
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

    exports.Ima = Ima;
    exports.VgImaAdsComponent = VgImaAdsComponent;
    exports.VgImaAdsModule = VgImaAdsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=videogular-ngx-videogular-ima-ads.umd.js.map
