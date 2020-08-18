/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/vg-dash/vg-dash.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, ElementRef, } from '@angular/core';
import { VgApiService, } from '@videogular/ngx-videogular/core';
export class VgDashDirective {
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
//# sourceMappingURL=vg-dash.directive.js.map