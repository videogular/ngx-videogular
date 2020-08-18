import { EventEmitter, Directive, ElementRef, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgApiService, VgCoreModule } from '@videogular/ngx-videogular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/vg-dash/vg-dash.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgDashDirective {
    /**
     * @param {?} ref
     * @param {?} API
     */
    constructor(ref, API) {
        this.ref = ref;
        this.API = API;
        this.onGetBitrates = new EventEmitter();
        this.subscriptions = [];
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
        this.vgFor = this.ref.nativeElement.getAttribute('vgFor');
        this.target = this.API.getMediaById(this.vgFor);
        this.createPlayer();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        var _a;
        ((_a = changes.vgDash) === null || _a === void 0 ? void 0 : _a.currentValue) ? this.createPlayer() : this.destroyPlayer();
    }
    /**
     * @return {?}
     */
    createPlayer() {
        if (this.dash) {
            this.destroyPlayer();
        }
        // It's a DASH source
        if (this.vgDash &&
            (this.vgDash.indexOf('.mpd') > -1 ||
                this.vgDash.indexOf('mpd-time-csf') > -1)) {
            /** @type {?} */
            let drmOptions;
            if (this.vgDRMLicenseServer) {
                drmOptions = this.vgDRMLicenseServer;
                if (this.vgDRMToken) {
                    for (const drmServer in drmOptions) {
                        if (drmServer.hasOwnProperty(drmServer)) {
                            drmOptions[drmServer].httpRequestHeaders = {
                                Authorization: this.vgDRMToken,
                            };
                        }
                    }
                }
            }
            this.dash = dashjs.MediaPlayer().create();
            this.dash.getDebug().setLogToBrowserConsole(false);
            this.dash.initialize(this.ref.nativeElement);
            this.dash.setAutoPlay(false);
            this.dash.on(dashjs.MediaPlayer.events.STREAM_INITIALIZED, (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const audioList = this.dash.getBitrateInfoListFor('audio');
                /** @type {?} */
                const videoList = this.dash.getBitrateInfoListFor('video');
                if (audioList.length > 1) {
                    audioList.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    (item) => (item.qualityIndex = ++item.qualityIndex)));
                    audioList.unshift({
                        qualityIndex: 0,
                        width: 0,
                        height: 0,
                        bitrate: 0,
                        mediaType: 'video',
                        label: 'AUTO',
                    });
                    this.onGetBitrates.emit(audioList);
                }
                if (videoList.length > 1) {
                    videoList.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    (item) => (item.qualityIndex = ++item.qualityIndex)));
                    videoList.unshift({
                        qualityIndex: 0,
                        width: 0,
                        height: 0,
                        bitrate: 0,
                        mediaType: 'video',
                        label: 'AUTO',
                    });
                    this.onGetBitrates.emit(videoList);
                }
            }));
            if (drmOptions) {
                this.dash.setProtectionData(drmOptions);
            }
            this.dash.attachSource(this.vgDash);
        }
        else {
            if (this.target) {
                this.target.pause();
                this.target.seekTime(0);
                this.ref.nativeElement.src = this.vgDash;
            }
        }
    }
    /**
     * @param {?} bitrate
     * @return {?}
     */
    setBitrate(bitrate) {
        if (this.dash) {
            if (bitrate.qualityIndex > 0) {
                if (this.dash.getAutoSwitchQualityFor(bitrate.mediaType)) {
                    this.dash.setAutoSwitchQualityFor(bitrate.mediaType, false);
                }
                /** @type {?} */
                const nextIndex = bitrate.qualityIndex - 1;
                this.dash.setQualityFor(bitrate.mediaType, nextIndex);
            }
            else {
                this.dash.setAutoSwitchQualityFor(bitrate.mediaType, true);
            }
        }
    }
    /**
     * @return {?}
     */
    destroyPlayer() {
        if (this.dash) {
            this.dash.reset();
            this.dash = null;
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
        this.destroyPlayer();
    }
}
VgDashDirective.decorators = [
    { type: Directive, args: [{
                selector: '[vgDash]',
                exportAs: 'vgDash',
            },] }
];
/** @nocollapse */
VgDashDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: VgApiService }
];
VgDashDirective.propDecorators = {
    vgDash: [{ type: Input }],
    vgDRMToken: [{ type: Input }],
    vgDRMLicenseServer: [{ type: Input }],
    onGetBitrates: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    VgDashDirective.prototype.vgDash;
    /** @type {?} */
    VgDashDirective.prototype.vgDRMToken;
    /** @type {?} */
    VgDashDirective.prototype.vgDRMLicenseServer;
    /** @type {?} */
    VgDashDirective.prototype.onGetBitrates;
    /** @type {?} */
    VgDashDirective.prototype.vgFor;
    /** @type {?} */
    VgDashDirective.prototype.target;
    /** @type {?} */
    VgDashDirective.prototype.dash;
    /** @type {?} */
    VgDashDirective.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    VgDashDirective.prototype.ref;
    /** @type {?} */
    VgDashDirective.prototype.API;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/vg-hls/vg-hls.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgHlsDirective {
    /**
     * @param {?} ref
     * @param {?} API
     */
    constructor(ref, API) {
        this.ref = ref;
        this.API = API;
        this.vgHlsHeaders = {};
        this.onGetBitrates = new EventEmitter();
        this.subscriptions = [];
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
        this.crossorigin = this.ref.nativeElement.getAttribute('crossorigin');
        this.preload = this.ref.nativeElement.getAttribute('preload') !== 'none';
        this.vgFor = this.ref.nativeElement.getAttribute('vgFor');
        if (this.vgFor) {
            this.target = this.API.getMediaById(this.vgFor);
        }
        else {
            this.target = this.API.getDefaultMedia();
        }
        this.config = (/** @type {?} */ ({
            autoStartLoad: this.preload,
        }));
        // @ts-ignore
        this.config.xhrSetup = (/**
         * @param {?} xhr
         * @return {?}
         */
        (xhr) => {
            // Send cookies
            if (this.crossorigin === 'use-credentials') {
                xhr.withCredentials = true;
            }
            for (const key of Object.keys(this.vgHlsHeaders)) {
                xhr.setRequestHeader(key, this.vgHlsHeaders[key]);
            }
        });
        this.createPlayer();
        if (!this.preload) {
            this.subscriptions.push(this.API.subscriptions.play.subscribe((/**
             * @return {?}
             */
            () => {
                if (this.hls) {
                    this.hls.startLoad(0);
                }
            })));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        var _a;
        if ((_a = changes.vgHls) === null || _a === void 0 ? void 0 : _a.currentValue) {
            this.createPlayer();
        }
        else if (changes.vgHlsHeaders && changes.vgHlsHeaders.currentValue) {
            // Do nothing. We don't want to create a or destroy a player if the headers change.
        }
        else {
            this.destroyPlayer();
        }
    }
    /**
     * @return {?}
     */
    createPlayer() {
        if (this.hls) {
            this.destroyPlayer();
        }
        // It's a HLS source
        if (this.vgHls &&
            this.vgHls.indexOf('m3u8') > -1 &&
            Hls.isSupported() &&
            this.API.isPlayerReady) {
            /** @type {?} */
            const video = this.ref.nativeElement;
            this.hls = new Hls(this.config);
            // @ts-ignore
            this.hls.on(Hls.Events.MANIFEST_PARSED, (/**
             * @param {?} _event
             * @param {?} data
             * @return {?}
             */
            (_event, data) => {
                /** @type {?} */
                const videoList = [];
                videoList.push({
                    qualityIndex: 0,
                    width: 0,
                    height: 0,
                    bitrate: 0,
                    mediaType: 'video',
                    label: 'AUTO',
                });
                data.levels.forEach((/**
                 * @param {?} item
                 * @param {?} index
                 * @return {?}
                 */
                (item, index) => {
                    videoList.push({
                        qualityIndex: ++index,
                        width: item.width,
                        height: item.height,
                        bitrate: item.bitrate,
                        mediaType: 'video',
                        label: item.name,
                    });
                }));
                this.onGetBitrates.emit(videoList);
            }));
            // @ts-ignore
            this.hls.on(Hls.Events.LEVEL_LOADED, (/**
             * @param {?} _event
             * @param {?} data
             * @return {?}
             */
            (_event, data) => {
                this.target.isLive = data.details.live;
            }));
            this.hls.loadSource(this.vgHls);
            this.hls.attachMedia(video);
        }
        else {
            if (this.target && !!this.target.pause) {
                this.target.pause();
                this.target.seekTime(0);
                this.ref.nativeElement.src = this.vgHls;
            }
        }
    }
    /**
     * @param {?} bitrate
     * @return {?}
     */
    setBitrate(bitrate) {
        if (this.hls) {
            this.hls.nextLevel = bitrate.qualityIndex - 1;
        }
    }
    /**
     * @return {?}
     */
    destroyPlayer() {
        if (this.hls) {
            this.hls.destroy();
            this.hls = null;
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
        this.destroyPlayer();
        delete this.hls;
    }
}
VgHlsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[vgHls]',
                exportAs: 'vgHls',
            },] }
];
/** @nocollapse */
VgHlsDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: VgApiService }
];
VgHlsDirective.propDecorators = {
    vgHls: [{ type: Input }],
    vgHlsHeaders: [{ type: Input }],
    onGetBitrates: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    VgHlsDirective.prototype.vgHls;
    /** @type {?} */
    VgHlsDirective.prototype.vgHlsHeaders;
    /** @type {?} */
    VgHlsDirective.prototype.onGetBitrates;
    /** @type {?} */
    VgHlsDirective.prototype.vgFor;
    /** @type {?} */
    VgHlsDirective.prototype.target;
    /** @type {?} */
    VgHlsDirective.prototype.hls;
    /** @type {?} */
    VgHlsDirective.prototype.preload;
    /** @type {?} */
    VgHlsDirective.prototype.crossorigin;
    /** @type {?} */
    VgHlsDirective.prototype.config;
    /** @type {?} */
    VgHlsDirective.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    VgHlsDirective.prototype.ref;
    /** @type {?} */
    VgHlsDirective.prototype.API;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/streaming.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgStreamingModule {
}
VgStreamingModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, VgCoreModule],
                declarations: [VgDashDirective, VgHlsDirective],
                exports: [VgDashDirective, VgHlsDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: videogular-ngx-videogular-streaming.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { VgDashDirective, VgHlsDirective, VgStreamingModule };
//# sourceMappingURL=videogular-ngx-videogular-streaming.js.map
