import { Injectable, ɵɵdefineInjectable, EventEmitter, Directive, ElementRef, Output, ChangeDetectorRef, Input, Component, ViewEncapsulation, HostBinding, ContentChildren, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, fromEvent, Observable, combineLatest, timer } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/states/vg-states.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgStates {
}
VgStates.VG_ENDED = 'ended';
VgStates.VG_PAUSED = 'paused';
VgStates.VG_PLAYING = 'playing';
VgStates.VG_LOADING = 'waiting';
VgStates.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ VgStates.ɵprov = ɵɵdefineInjectable({ factory: function VgStates_Factory() { return new VgStates(); }, token: VgStates, providedIn: "root" });
if (false) {
    /** @type {?} */
    VgStates.VG_ENDED;
    /** @type {?} */
    VgStates.VG_PAUSED;
    /** @type {?} */
    VgStates.VG_PLAYING;
    /** @type {?} */
    VgStates.VG_LOADING;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/vg-api/vg-api.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgApiService {
    constructor() {
        this.medias = {}; // TODO: refactor to Set<IPlayable>
        this.playerReadyEvent = new EventEmitter(true);
        this.isPlayerReady = false;
    }
    /**
     * @param {?} fsAPI
     * @return {?}
     */
    onPlayerReady(fsAPI) {
        this.fsAPI = fsAPI;
        this.isPlayerReady = true;
        this.playerReadyEvent.emit(this);
    }
    /**
     * @return {?}
     */
    getDefaultMedia() {
        for (const item in this.medias) {
            if (this.medias[item]) {
                return this.medias[item];
            }
        }
    }
    /**
     * @return {?}
     */
    getMasterMedia() {
        /** @type {?} */
        let master;
        for (const id in this.medias) {
            if (this.medias[id].vgMaster === 'true' ||
                this.medias[id].vgMaster === true) {
                master = this.medias[id];
                break;
            }
        }
        return master || this.getDefaultMedia();
    }
    /**
     * @return {?}
     */
    isMasterDefined() {
        /** @type {?} */
        let result = false;
        for (const id in this.medias) {
            if (this.medias[id].vgMaster === 'true' ||
                this.medias[id].vgMaster === true) {
                result = true;
                break;
            }
        }
        return result;
    }
    /**
     * @param {?=} id
     * @return {?}
     */
    getMediaById(id = null) {
        /** @type {?} */
        let media = this.medias[id];
        if (!id || id === '*') {
            media = this;
        }
        return media;
    }
    /**
     * @return {?}
     */
    play() {
        for (const id in this.medias) {
            if (this.medias[id]) {
                this.medias[id].play();
            }
        }
    }
    /**
     * @return {?}
     */
    pause() {
        for (const id in this.medias) {
            if (this.medias[id]) {
                this.medias[id].pause();
            }
        }
    }
    /**
     * @return {?}
     */
    get duration() {
        return this.$$getAllProperties('duration');
    }
    /**
     * @param {?} seconds
     * @return {?}
     */
    set currentTime(seconds) {
        this.$$setAllProperties('currentTime', seconds);
    }
    /**
     * @return {?}
     */
    get currentTime() {
        return this.$$getAllProperties('currentTime');
    }
    /**
     * @param {?} state
     * @return {?}
     */
    set state(state) {
        this.$$setAllProperties('state', state);
    }
    /**
     * @return {?}
     */
    get state() {
        return this.$$getAllProperties('state');
    }
    /**
     * @param {?} volume
     * @return {?}
     */
    set volume(volume) {
        this.$$setAllProperties('volume', volume);
    }
    /**
     * @return {?}
     */
    get volume() {
        return this.$$getAllProperties('volume');
    }
    /**
     * @param {?} rate
     * @return {?}
     */
    set playbackRate(rate) {
        this.$$setAllProperties('playbackRate', rate);
    }
    /**
     * @return {?}
     */
    get playbackRate() {
        return this.$$getAllProperties('playbackRate');
    }
    /**
     * @return {?}
     */
    get canPlay() {
        return this.$$getAllProperties('canPlay');
    }
    /**
     * @return {?}
     */
    get canPlayThrough() {
        return this.$$getAllProperties('canPlayThrough');
    }
    /**
     * @return {?}
     */
    get isMetadataLoaded() {
        return this.$$getAllProperties('isMetadataLoaded');
    }
    /**
     * @return {?}
     */
    get isWaiting() {
        return this.$$getAllProperties('isWaiting');
    }
    /**
     * @return {?}
     */
    get isCompleted() {
        return this.$$getAllProperties('isCompleted');
    }
    /**
     * @return {?}
     */
    get isLive() {
        return this.$$getAllProperties('isLive');
    }
    /**
     * @return {?}
     */
    get isMaster() {
        return this.$$getAllProperties('isMaster');
    }
    /**
     * @return {?}
     */
    get time() {
        return this.$$getAllProperties('time');
    }
    /**
     * @return {?}
     */
    get buffer() {
        return this.$$getAllProperties('buffer');
    }
    /**
     * @return {?}
     */
    get buffered() {
        return this.$$getAllProperties('buffered');
    }
    /**
     * @return {?}
     */
    get subscriptions() {
        return this.$$getAllProperties('subscriptions');
    }
    /**
     * @return {?}
     */
    get textTracks() {
        return this.$$getAllProperties('textTracks');
    }
    /**
     * @param {?} value
     * @param {?=} byPercent
     * @return {?}
     */
    seekTime(value, byPercent = false) {
        for (const id in this.medias) {
            if (this.medias[id]) {
                this.$$seek(this.medias[id], value, byPercent);
            }
        }
    }
    /**
     * @param {?} media
     * @param {?} value
     * @param {?=} byPercent
     * @return {?}
     */
    $$seek(media, value, byPercent = false) {
        /** @type {?} */
        let second;
        /** @type {?} */
        let duration = media.duration;
        if (byPercent) {
            if (this.isMasterDefined()) {
                duration = this.getMasterMedia().duration;
            }
            second = (value * duration) / 100;
        }
        else {
            second = value;
        }
        media.currentTime = second;
    }
    /**
     * @param {?} type
     * @param {?=} label
     * @param {?=} language
     * @return {?}
     */
    addTextTrack(type, label, language) {
        for (const id in this.medias) {
            if (this.medias[id]) {
                this.$$addTextTrack(this.medias[id], type, label, language);
            }
        }
    }
    /**
     * @param {?} media
     * @param {?} type
     * @param {?=} label
     * @param {?=} language
     * @return {?}
     */
    $$addTextTrack(media, type, label, language) {
        media.addTextTrack(type, label, language);
    }
    /**
     * @param {?} property
     * @return {?}
     */
    $$getAllProperties(property) {
        /** @type {?} */
        const medias = {};
        /** @type {?} */
        let result;
        for (const id in this.medias) {
            if (this.medias[id]) {
                medias[id] = this.medias[id];
            }
        }
        /** @type {?} */
        const nMedias = Object.keys(medias).length;
        switch (nMedias) {
            case 0:
                // Return default values until vgMedia is initialized
                switch (property) {
                    case 'state':
                        result = VgStates.VG_PAUSED;
                        break;
                    case 'playbackRate':
                    case 'volume':
                        result = 1;
                        break;
                    case 'time':
                        result = { current: 0, total: 0, left: 0 };
                        break;
                }
                break;
            case 1:
                // If there's only one media element then return the plain value
                /** @type {?} */
                const firstMediaId = Object.keys(medias)[0];
                result = medias[firstMediaId][property];
                break;
            default:
                // TODO: return 'master' value
                /** @type {?} */
                const master = this.getMasterMedia();
                result = medias[master.id][property];
        }
        return result;
    }
    /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    $$setAllProperties(property, value) {
        for (const id in this.medias) {
            if (this.medias[id]) {
                this.medias[id][property] = value;
            }
        }
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    registerElement(elem) {
        this.videogularElement = elem;
    }
    /**
     * @param {?} media
     * @return {?}
     */
    registerMedia(media) {
        this.medias[media.id] = media;
    }
    /**
     * @param {?} media
     * @return {?}
     */
    unregisterMedia(media) {
        delete this.medias[media.id];
    }
}
VgApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
VgApiService.ctorParameters = () => [];
/** @nocollapse */ VgApiService.ɵprov = ɵɵdefineInjectable({ factory: function VgApiService_Factory() { return new VgApiService(); }, token: VgApiService, providedIn: "root" });
if (false) {
    /** @type {?} */
    VgApiService.prototype.medias;
    /** @type {?} */
    VgApiService.prototype.videogularElement;
    /** @type {?} */
    VgApiService.prototype.playerReadyEvent;
    /** @type {?} */
    VgApiService.prototype.isPlayerReady;
    /** @type {?} */
    VgApiService.prototype.fsAPI;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/vg-controls-hidden/vg-controls-hidden.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgControlsHiddenService {
    constructor() {
        this.isHiddenSubject = new Subject();
        this.isHidden = this.isHiddenSubject.asObservable();
    }
    /**
     * @param {?} hidden
     * @return {?}
     */
    state(hidden) {
        this.isHiddenSubject.next(hidden);
    }
}
VgControlsHiddenService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
VgControlsHiddenService.ctorParameters = () => [];
/** @nocollapse */ VgControlsHiddenService.ɵprov = ɵɵdefineInjectable({ factory: function VgControlsHiddenService_Factory() { return new VgControlsHiddenService(); }, token: VgControlsHiddenService, providedIn: "root" });
if (false) {
    /** @type {?} */
    VgControlsHiddenService.prototype.isHidden;
    /**
     * @type {?}
     * @private
     */
    VgControlsHiddenService.prototype.isHiddenSubject;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/vg-utils/vg-utils.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgUtilsService {
    /**
     * Inspired by Paul Irish
     * https://gist.github.com/paulirish/211209
     * @return {?}
     */
    static getZIndex() {
        /** @type {?} */
        let zIndex = 1;
        /** @type {?} */
        let elementZIndex;
        /** @type {?} */
        const tags = document.getElementsByTagName('*');
        for (let i = 0, l = tags.length; i < l; i++) {
            elementZIndex = parseInt(window.getComputedStyle(tags[i])['z-index'], 10);
            if (elementZIndex > zIndex) {
                zIndex = elementZIndex + 1;
            }
        }
        return zIndex;
    }
    // Very simple mobile detection, not 100% reliable
    /**
     * @return {?}
     */
    static isMobileDevice() {
        // return (
        //   typeof window.screen.orientation !== 'undefined' ||
        //   navigator.userAgent.indexOf('IEMobile') !== -1
        // );
        // window.orientation is deprecated and we should use window.screen.orientation
        return (typeof window.orientation !== 'undefined' ||
            navigator.userAgent.indexOf('IEMobile') !== -1);
    }
    /**
     * @return {?}
     */
    static isiOSDevice() {
        return (navigator.userAgent.match(/ip(hone|ad|od)/i) &&
            !navigator.userAgent.match(/(iemobile)[\/\s]?([\w\.]*)/i));
    }
    /**
     * @return {?}
     */
    static isCordova() {
        return (document.URL.indexOf('http://') === -1 &&
            document.URL.indexOf('https://') === -1);
    }
}
VgUtilsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ VgUtilsService.ɵprov = ɵɵdefineInjectable({ factory: function VgUtilsService_Factory() { return new VgUtilsService(); }, token: VgUtilsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/vg-fullscreen-api/vg-fullscreen-api.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgFullscreenApiService {
    constructor() {
        this.nativeFullscreen = true;
        this.isFullscreen = false;
        this.onChangeFullscreen = new EventEmitter();
    }
    /**
     * @param {?} elem
     * @param {?} medias
     * @return {?}
     */
    init(elem, medias) {
        this.videogularElement = elem;
        this.medias = medias;
        /** @type {?} */
        const APIs = {
            w3: {
                enabled: 'fullscreenEnabled',
                element: 'fullscreenElement',
                request: 'requestFullscreen',
                exit: 'exitFullscreen',
                onchange: 'fullscreenchange',
                onerror: 'fullscreenerror',
            },
            newWebkit: {
                enabled: 'webkitFullscreenEnabled',
                element: 'webkitFullscreenElement',
                request: 'webkitRequestFullscreen',
                exit: 'webkitExitFullscreen',
                onchange: 'webkitfullscreenchange',
                onerror: 'webkitfullscreenerror',
            },
            oldWebkit: {
                enabled: 'webkitIsFullScreen',
                element: 'webkitCurrentFullScreenElement',
                request: 'webkitRequestFullScreen',
                exit: 'webkitCancelFullScreen',
                onchange: 'webkitfullscreenchange',
                onerror: 'webkitfullscreenerror',
            },
            moz: {
                enabled: 'mozFullScreen',
                element: 'mozFullScreenElement',
                request: 'mozRequestFullScreen',
                exit: 'mozCancelFullScreen',
                onchange: 'mozfullscreenchange',
                onerror: 'mozfullscreenerror',
            },
            ios: {
                enabled: 'webkitFullscreenEnabled',
                element: 'webkitFullscreenElement',
                request: 'webkitEnterFullscreen',
                exit: 'webkitExitFullscreen',
                onchange: 'webkitendfullscreen',
                // Hack for iOS: webkitfullscreenchange it's not firing
                onerror: 'webkitfullscreenerror',
            },
            ms: {
                enabled: 'msFullscreenEnabled',
                element: 'msFullscreenElement',
                request: 'msRequestFullscreen',
                exit: 'msExitFullscreen',
                onchange: 'MSFullscreenChange',
                onerror: 'MSFullscreenError',
            },
        };
        for (const browser in APIs) {
            if (APIs[browser].enabled in document) {
                this.polyfill = APIs[browser];
                break;
            }
        }
        if (VgUtilsService.isiOSDevice()) {
            this.polyfill = APIs.ios;
        }
        this.isAvailable = this.polyfill != null;
        if (this.polyfill == null) {
            return;
        }
        /** @type {?} */
        let fsElemDispatcher;
        switch (this.polyfill.onchange) {
            // Mozilla dispatches the fullscreen change event from document, not the element
            // See: https://bugzilla.mozilla.org/show_bug.cgi?id=724816#c3
            case 'mozfullscreenchange':
                fsElemDispatcher = document;
                break;
            // iOS dispatches the fullscreen change event from video element
            case 'webkitendfullscreen':
                fsElemDispatcher = this.medias.toArray()[0].elem;
                break;
            // HTML5 implementation dispatches the fullscreen change event from the element
            default:
                fsElemDispatcher = elem;
        }
        this.fsChangeSubscription = fromEvent(fsElemDispatcher, this.polyfill.onchange).subscribe((/**
         * @return {?}
         */
        () => {
            this.onFullscreenChange();
        }));
    }
    /**
     * @return {?}
     */
    onFullscreenChange() {
        this.isFullscreen = !!document[this.polyfill.element];
        this.onChangeFullscreen.emit(this.isFullscreen);
    }
    /**
     * @param {?=} element
     * @return {?}
     */
    toggleFullscreen(element = null) {
        if (this.isFullscreen) {
            this.exit();
        }
        else {
            this.request(element);
        }
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    request(elem) {
        if (!elem) {
            elem = this.videogularElement;
        }
        this.isFullscreen = true;
        this.onChangeFullscreen.emit(true);
        // Perform native full screen support
        if (this.isAvailable && this.nativeFullscreen) {
            // Fullscreen for mobile devices
            if (VgUtilsService.isMobileDevice()) {
                // We should make fullscreen the video object if it doesn't have native fullscreen support
                // Fallback! We can't set vg-player on fullscreen, only video/audio objects
                if ((!this.polyfill.enabled && elem === this.videogularElement) ||
                    VgUtilsService.isiOSDevice()) {
                    elem = this.medias.toArray()[0].elem;
                }
                this.enterElementInFullScreen(elem);
            }
            else {
                this.enterElementInFullScreen(this.videogularElement);
            }
        }
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    enterElementInFullScreen(elem) {
        elem[this.polyfill.request]();
    }
    /**
     * @return {?}
     */
    exit() {
        this.isFullscreen = false;
        this.onChangeFullscreen.emit(false);
        // Exit from native fullscreen
        if (this.isAvailable && this.nativeFullscreen) {
            document[this.polyfill.exit]();
        }
    }
}
VgFullscreenApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
VgFullscreenApiService.ctorParameters = () => [];
/** @nocollapse */ VgFullscreenApiService.ɵprov = ɵɵdefineInjectable({ factory: function VgFullscreenApiService_Factory() { return new VgFullscreenApiService(); }, token: VgFullscreenApiService, providedIn: "root" });
if (false) {
    /** @type {?} */
    VgFullscreenApiService.prototype.polyfill;
    /** @type {?} */
    VgFullscreenApiService.prototype.onchange;
    /** @type {?} */
    VgFullscreenApiService.prototype.onerror;
    /** @type {?} */
    VgFullscreenApiService.prototype.nativeFullscreen;
    /** @type {?} */
    VgFullscreenApiService.prototype.isFullscreen;
    /** @type {?} */
    VgFullscreenApiService.prototype.isAvailable;
    /** @type {?} */
    VgFullscreenApiService.prototype.videogularElement;
    /** @type {?} */
    VgFullscreenApiService.prototype.medias;
    /** @type {?} */
    VgFullscreenApiService.prototype.fsChangeSubscription;
    /** @type {?} */
    VgFullscreenApiService.prototype.onChangeFullscreen;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/events/vg-events.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgEvents {
}
VgEvents.VG_ABORT = 'abort';
VgEvents.VG_CAN_PLAY = 'canplay';
VgEvents.VG_CAN_PLAY_THROUGH = 'canplaythrough';
VgEvents.VG_DURATION_CHANGE = 'durationchange';
VgEvents.VG_EMPTIED = 'emptied';
VgEvents.VG_ENCRYPTED = 'encrypted';
VgEvents.VG_ENDED = 'ended';
VgEvents.VG_ERROR = 'error';
VgEvents.VG_LOADED_DATA = 'loadeddata';
VgEvents.VG_LOADED_METADATA = 'loadedmetadata';
VgEvents.VG_LOAD_START = 'loadstart';
VgEvents.VG_PAUSE = 'pause';
VgEvents.VG_PLAY = 'play';
VgEvents.VG_PLAYING = 'playing';
VgEvents.VG_PROGRESS = 'progress';
VgEvents.VG_RATE_CHANGE = 'ratechange';
VgEvents.VG_SEEK = 'seek';
VgEvents.VG_SEEKED = 'seeked';
VgEvents.VG_SEEKING = 'seeking';
VgEvents.VG_STALLED = 'stalled';
VgEvents.VG_SUSPEND = 'suspend';
VgEvents.VG_TIME_UPDATE = 'timeupdate';
VgEvents.VG_VOLUME_CHANGE = 'volumechange';
VgEvents.VG_WAITING = 'waiting';
VgEvents.VG_LOAD = 'load';
VgEvents.VG_ENTER = 'enter';
VgEvents.VG_EXIT = 'exit';
VgEvents.VG_START_ADS = 'startads';
VgEvents.VG_END_ADS = 'endads';
VgEvents.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ VgEvents.ɵprov = ɵɵdefineInjectable({ factory: function VgEvents_Factory() { return new VgEvents(); }, token: VgEvents, providedIn: "root" });
if (false) {
    /** @type {?} */
    VgEvents.VG_ABORT;
    /** @type {?} */
    VgEvents.VG_CAN_PLAY;
    /** @type {?} */
    VgEvents.VG_CAN_PLAY_THROUGH;
    /** @type {?} */
    VgEvents.VG_DURATION_CHANGE;
    /** @type {?} */
    VgEvents.VG_EMPTIED;
    /** @type {?} */
    VgEvents.VG_ENCRYPTED;
    /** @type {?} */
    VgEvents.VG_ENDED;
    /** @type {?} */
    VgEvents.VG_ERROR;
    /** @type {?} */
    VgEvents.VG_LOADED_DATA;
    /** @type {?} */
    VgEvents.VG_LOADED_METADATA;
    /** @type {?} */
    VgEvents.VG_LOAD_START;
    /** @type {?} */
    VgEvents.VG_PAUSE;
    /** @type {?} */
    VgEvents.VG_PLAY;
    /** @type {?} */
    VgEvents.VG_PLAYING;
    /** @type {?} */
    VgEvents.VG_PROGRESS;
    /** @type {?} */
    VgEvents.VG_RATE_CHANGE;
    /** @type {?} */
    VgEvents.VG_SEEK;
    /** @type {?} */
    VgEvents.VG_SEEKED;
    /** @type {?} */
    VgEvents.VG_SEEKING;
    /** @type {?} */
    VgEvents.VG_STALLED;
    /** @type {?} */
    VgEvents.VG_SUSPEND;
    /** @type {?} */
    VgEvents.VG_TIME_UPDATE;
    /** @type {?} */
    VgEvents.VG_VOLUME_CHANGE;
    /** @type {?} */
    VgEvents.VG_WAITING;
    /** @type {?} */
    VgEvents.VG_LOAD;
    /** @type {?} */
    VgEvents.VG_ENTER;
    /** @type {?} */
    VgEvents.VG_EXIT;
    /** @type {?} */
    VgEvents.VG_START_ADS;
    /** @type {?} */
    VgEvents.VG_END_ADS;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/vg-cue-points/vg-cue-points.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgCuePointsDirective {
    /**
     * @param {?} ref
     */
    constructor(ref) {
        this.ref = ref;
        this.onEnterCuePoint = new EventEmitter();
        this.onUpdateCuePoint = new EventEmitter();
        this.onExitCuePoint = new EventEmitter();
        this.onCompleteCuePoint = new EventEmitter();
        this.subscriptions = [];
        this.cuesSubscriptions = [];
        this.totalCues = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onLoad$ = fromEvent(this.ref.nativeElement, VgEvents.VG_LOAD);
        this.subscriptions.push(this.onLoad$.subscribe(this.onLoad.bind(this)));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onLoad(event) {
        /** @type {?} */
        const cues = event.target.track.cues;
        this.ref.nativeElement.cues = cues;
        this.updateCuePoints(cues);
    }
    /**
     * @param {?} cues
     * @return {?}
     */
    updateCuePoints(cues) {
        this.cuesSubscriptions.forEach((/**
         * @param {?} s
         * @return {?}
         */
        (s) => s.unsubscribe()));
        for (let i = 0, l = cues.length; i < l; i++) {
            this.onEnter$ = fromEvent(cues[i], VgEvents.VG_ENTER);
            this.cuesSubscriptions.push(this.onEnter$.subscribe(this.onEnter.bind(this)));
            this.onExit$ = fromEvent(cues[i], VgEvents.VG_EXIT);
            this.cuesSubscriptions.push(this.onExit$.subscribe(this.onExit.bind(this)));
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onEnter(event) {
        this.onEnterCuePoint.emit(event.target);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onExit(event) {
        this.onExitCuePoint.emit(event.target);
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.ref.nativeElement.track && this.ref.nativeElement.track.cues) {
            /** @type {?} */
            const changes = this.totalCues !== this.ref.nativeElement.track.cues.length;
            if (changes) {
                this.totalCues = this.ref.nativeElement.track.cues.length;
                this.ref.nativeElement.cues = this.ref.nativeElement.track.cues;
                this.updateCuePoints(this.ref.nativeElement.track.cues);
            }
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
VgCuePointsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[vgCuePoints]',
            },] }
];
/** @nocollapse */
VgCuePointsDirective.ctorParameters = () => [
    { type: ElementRef }
];
VgCuePointsDirective.propDecorators = {
    onEnterCuePoint: [{ type: Output }],
    onUpdateCuePoint: [{ type: Output }],
    onExitCuePoint: [{ type: Output }],
    onCompleteCuePoint: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    VgCuePointsDirective.prototype.onEnterCuePoint;
    /** @type {?} */
    VgCuePointsDirective.prototype.onUpdateCuePoint;
    /** @type {?} */
    VgCuePointsDirective.prototype.onExitCuePoint;
    /** @type {?} */
    VgCuePointsDirective.prototype.onCompleteCuePoint;
    /** @type {?} */
    VgCuePointsDirective.prototype.subscriptions;
    /** @type {?} */
    VgCuePointsDirective.prototype.cuesSubscriptions;
    /** @type {?} */
    VgCuePointsDirective.prototype.onLoad$;
    /** @type {?} */
    VgCuePointsDirective.prototype.onEnter$;
    /** @type {?} */
    VgCuePointsDirective.prototype.onExit$;
    /** @type {?} */
    VgCuePointsDirective.prototype.totalCues;
    /** @type {?} */
    VgCuePointsDirective.prototype.ref;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/vg-media/vg-media.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgMediaDirective {
    /**
     * @param {?} api
     * @param {?} ref
     */
    constructor(api, ref) {
        this.api = api;
        this.ref = ref;
        this.state = VgStates.VG_PAUSED;
        this.time = { current: 0, total: 0, left: 0 };
        this.buffer = { end: 0 };
        this.canPlay = false;
        this.canPlayThrough = false;
        this.isMetadataLoaded = false;
        this.isWaiting = false;
        this.isCompleted = false;
        this.isLive = false;
        this.isBufferDetected = false;
        this.checkInterval = 200;
        this.currentPlayPos = 0;
        this.lastPlayPos = 0;
        this.playAtferSync = false;
        this.bufferDetected = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.vgMedia.nodeName) {
            // It's a native element
            this.elem = this.vgMedia;
        }
        else {
            // It's an Angular Class
            this.elem = this.vgMedia.elem;
        }
        // Just in case we're creating this vgMedia dynamically register again into API
        this.api.registerMedia(this);
        this.subscriptions = {
            // Native events
            abort: fromEvent((/** @type {?} */ (this.elem)), VgEvents.VG_ABORT),
            canPlay: fromEvent((/** @type {?} */ (this.elem)), VgEvents.VG_CAN_PLAY),
            canPlayThrough: fromEvent((/** @type {?} */ (this.elem)), VgEvents.VG_CAN_PLAY_THROUGH),
            durationChange: fromEvent((/** @type {?} */ (this.elem)), VgEvents.VG_DURATION_CHANGE),
            emptied: fromEvent((/** @type {?} */ (this.elem)), VgEvents.VG_EMPTIED),
            encrypted: fromEvent((/** @type {?} */ (this.elem)), VgEvents.VG_ENCRYPTED),
            ended: fromEvent((/** @type {?} */ (this.elem)), VgEvents.VG_ENDED),
            error: fromEvent((/** @type {?} */ (this.elem)), VgEvents.VG_ERROR),
            loadedData: fromEvent((/** @type {?} */ (this.elem)), VgEvents.VG_LOADED_DATA),
            loadedMetadata: fromEvent((/** @type {?} */ (this.elem)), VgEvents.VG_LOADED_METADATA),
            loadStart: fromEvent((/** @type {?} */ (this.elem)), VgEvents.VG_LOAD_START),
            pause: fromEvent((/** @type {?} */ (this.elem)), VgEvents.VG_PAUSE),
            play: fromEvent((/** @type {?} */ (this.elem)), VgEvents.VG_PLAY),
            playing: fromEvent((/** @type {?} */ (this.elem)), VgEvents.VG_PLAYING),
            progress: fromEvent((/** @type {?} */ (this.elem)), VgEvents.VG_PROGRESS),
            rateChange: fromEvent((/** @type {?} */ (this.elem)), VgEvents.VG_RATE_CHANGE),
            seeked: fromEvent((/** @type {?} */ (this.elem)), VgEvents.VG_SEEKED),
            seeking: fromEvent((/** @type {?} */ (this.elem)), VgEvents.VG_SEEKING),
            stalled: fromEvent((/** @type {?} */ (this.elem)), VgEvents.VG_STALLED),
            suspend: fromEvent((/** @type {?} */ (this.elem)), VgEvents.VG_SUSPEND),
            timeUpdate: fromEvent((/** @type {?} */ (this.elem)), VgEvents.VG_TIME_UPDATE),
            volumeChange: fromEvent((/** @type {?} */ (this.elem)), VgEvents.VG_VOLUME_CHANGE),
            waiting: fromEvent((/** @type {?} */ (this.elem)), VgEvents.VG_WAITING),
            // Advertisement only events
            startAds: fromEvent((/** @type {?} */ (window)), VgEvents.VG_START_ADS),
            endAds: fromEvent((/** @type {?} */ (window)), VgEvents.VG_END_ADS),
            // See changes on <source> child elements to reload the video file
            mutation: new Observable((/**
             * @param {?} observer
             * @return {?}
             */
            (observer) => {
                /** @type {?} */
                const domObs = new MutationObserver((/**
                 * @param {?} mutations
                 * @return {?}
                 */
                (mutations) => {
                    observer.next(mutations);
                }));
                domObs.observe((/** @type {?} */ (this.elem)), { childList: true, attributes: true });
                return (/**
                 * @return {?}
                 */
                () => {
                    domObs.disconnect();
                });
            })),
            // Custom buffering detection
            bufferDetected: this.bufferDetected,
        };
        this.mutationObs = this.subscriptions.mutation.subscribe(this.onMutation.bind(this));
        this.canPlayObs = this.subscriptions.canPlay.subscribe(this.onCanPlay.bind(this));
        this.canPlayThroughObs = this.subscriptions.canPlayThrough.subscribe(this.onCanPlayThrough.bind(this));
        this.loadedMetadataObs = this.subscriptions.loadedMetadata.subscribe(this.onLoadMetadata.bind(this));
        this.waitingObs = this.subscriptions.waiting.subscribe(this.onWait.bind(this));
        this.progressObs = this.subscriptions.progress.subscribe(this.onProgress.bind(this));
        this.endedObs = this.subscriptions.ended.subscribe(this.onComplete.bind(this));
        this.playingObs = this.subscriptions.playing.subscribe(this.onStartPlaying.bind(this));
        this.playObs = this.subscriptions.play.subscribe(this.onPlay.bind(this));
        this.pauseObs = this.subscriptions.pause.subscribe(this.onPause.bind(this));
        this.timeUpdateObs = this.subscriptions.timeUpdate.subscribe(this.onTimeUpdate.bind(this));
        this.volumeChangeObs = this.subscriptions.volumeChange.subscribe(this.onVolumeChange.bind(this));
        this.errorObs = this.subscriptions.error.subscribe(this.onError.bind(this));
        if (this.vgMaster) {
            this.api.playerReadyEvent.subscribe((/**
             * @return {?}
             */
            () => {
                this.prepareSync();
            }));
        }
    }
    /**
     * @return {?}
     */
    prepareSync() {
        /** @type {?} */
        const canPlayAll = [];
        for (const media in this.api.medias) {
            if (this.api.medias[media]) {
                canPlayAll.push(this.api.medias[media].subscriptions.canPlay);
            }
        }
        this.canPlayAllSubscription = combineLatest(canPlayAll)
            .pipe(map((/**
         * @param {...?} params
         * @return {?}
         */
        (...params) => {
            /** @type {?} */
            const checkReadyState = (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                return event.target.readyState === 4;
            });
            /** @type {?} */
            const allReady = params.some(checkReadyState);
            if (allReady && !this.syncSubscription) {
                this.startSync();
                this.syncSubscription.unsubscribe();
            }
        })))
            .subscribe();
    }
    /**
     * @return {?}
     */
    startSync() {
        this.syncSubscription = timer(0, 1000).subscribe((/**
         * @return {?}
         */
        () => {
            for (const media in this.api.medias) {
                if (this.api.medias[media] !== this) {
                    /** @type {?} */
                    const diff = this.api.medias[media].currentTime - this.currentTime;
                    if (diff < -0.3 || diff > 0.3) {
                        this.playAtferSync = this.state === VgStates.VG_PLAYING;
                        this.pause();
                        this.api.medias[media].pause();
                        this.api.medias[media].currentTime = this.currentTime;
                    }
                    else {
                        if (this.playAtferSync) {
                            this.play();
                            this.api.medias[media].play();
                            this.playAtferSync = false;
                        }
                    }
                }
            }
        }));
    }
    /**
     * @param {?} mutations
     * @return {?}
     */
    onMutation(mutations) {
        // Detect changes only for source elements or src attribute
        for (let i = 0, l = mutations.length; i < l; i++) {
            /** @type {?} */
            const mut = mutations[i];
            if (mut.type === 'attributes' && mut.attributeName === 'src') {
                // Only load src file if it's not a blob (for DASH / HLS sources)
                if (((/** @type {?} */ (mut.target))).src &&
                    ((/** @type {?} */ (mut.target))).src.length > 0 &&
                    ((/** @type {?} */ (mut.target))).src.indexOf('blob:') < 0) {
                    this.loadMedia();
                    break;
                }
            }
            else if (mut.type === 'childList' &&
                mut.removedNodes.length &&
                mut.removedNodes[0].nodeName.toLowerCase() === 'source') {
                this.loadMedia();
                break;
            }
        }
    }
    /**
     * @return {?}
     */
    loadMedia() {
        this.vgMedia.pause();
        this.vgMedia.currentTime = 0;
        // Start buffering until we can play the media file
        this.stopBufferCheck();
        this.isBufferDetected = true;
        this.bufferDetected.next(this.isBufferDetected);
        // TODO: This is ugly, we should find something cleaner. For some reason a TimerObservable doesn't works.
        setTimeout((/**
         * @return {?}
         */
        () => this.vgMedia.load()), 10);
    }
    /**
     * @return {?}
     */
    play() {
        // short-circuit if already playing
        if (this.playPromise ||
            (this.state !== VgStates.VG_PAUSED && this.state !== VgStates.VG_ENDED)) {
            return;
        }
        this.playPromise = this.vgMedia.play();
        // browser has async play promise
        if (this.playPromise && this.playPromise.then && this.playPromise.catch) {
            this.playPromise
                .then((/**
             * @return {?}
             */
            () => {
                this.playPromise = null;
            }))
                .catch((/**
             * @return {?}
             */
            () => {
                this.playPromise = null;
                // deliberately empty for the sake of eating console noise
            }));
        }
        return this.playPromise;
    }
    /**
     * @return {?}
     */
    pause() {
        // browser has async play promise
        if (this.playPromise) {
            this.playPromise.then((/**
             * @return {?}
             */
            () => {
                this.vgMedia.pause();
            }));
        }
        else {
            this.vgMedia.pause();
        }
    }
    /**
     * @return {?}
     */
    get id() {
        // We should return undefined if vgMedia still doesn't exist
        /** @type {?} */
        let result;
        if (this.vgMedia) {
            result = this.vgMedia.id;
        }
        return result;
    }
    /**
     * @return {?}
     */
    get duration() {
        return this.vgMedia.duration === Infinity
            ? this.specifiedDuration
            : this.vgMedia.duration;
    }
    /**
     * @param {?} seconds
     * @return {?}
     */
    set currentTime(seconds) {
        this.vgMedia.currentTime = seconds;
        // this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_SEEK));
    }
    /**
     * @return {?}
     */
    get currentTime() {
        return this.vgMedia.currentTime;
    }
    /**
     * @param {?} volume
     * @return {?}
     */
    set volume(volume) {
        this.vgMedia.volume = volume;
    }
    /**
     * @return {?}
     */
    get volume() {
        return this.vgMedia.volume;
    }
    /**
     * @param {?} rate
     * @return {?}
     */
    set playbackRate(rate) {
        this.vgMedia.playbackRate = rate;
    }
    /**
     * @return {?}
     */
    get playbackRate() {
        return this.vgMedia.playbackRate;
    }
    /**
     * @return {?}
     */
    get buffered() {
        return this.vgMedia.buffered;
    }
    /**
     * @return {?}
     */
    get textTracks() {
        return this.vgMedia.textTracks;
    }
    // @ts-ignore
    /**
     * @param {?} event
     * @return {?}
     */
    onCanPlay(event) {
        this.isBufferDetected = false;
        this.bufferDetected.next(this.isBufferDetected);
        this.canPlay = true;
        this.ref.detectChanges();
    }
    // @ts-ignore
    /**
     * @param {?} event
     * @return {?}
     */
    onCanPlayThrough(event) {
        this.isBufferDetected = false;
        this.bufferDetected.next(this.isBufferDetected);
        this.canPlayThrough = true;
        this.ref.detectChanges();
    }
    // @ts-ignore
    /**
     * @param {?} event
     * @return {?}
     */
    onLoadMetadata(event) {
        this.isMetadataLoaded = true;
        this.time = {
            current: 0,
            left: 0,
            total: this.duration * 1000,
        };
        this.state = VgStates.VG_PAUSED;
        // Live streaming check
        /** @type {?} */
        const t = Math.round(this.time.total);
        this.isLive = t === Infinity;
        this.ref.detectChanges();
    }
    // @ts-ignore
    /**
     * @param {?} event
     * @return {?}
     */
    onWait(event) {
        this.isWaiting = true;
        this.ref.detectChanges();
    }
    // @ts-ignore
    /**
     * @param {?} event
     * @return {?}
     */
    onComplete(event) {
        this.isCompleted = true;
        this.state = VgStates.VG_ENDED;
        this.ref.detectChanges();
    }
    // @ts-ignore
    /**
     * @param {?} event
     * @return {?}
     */
    onStartPlaying(event) {
        this.state = VgStates.VG_PLAYING;
        this.ref.detectChanges();
    }
    // @ts-ignore
    /**
     * @param {?} event
     * @return {?}
     */
    onPlay(event) {
        this.state = VgStates.VG_PLAYING;
        if (this.vgMaster) {
            if (!this.syncSubscription || this.syncSubscription.closed) {
                this.startSync();
            }
        }
        this.startBufferCheck();
        this.ref.detectChanges();
    }
    // @ts-ignore
    /**
     * @param {?} event
     * @return {?}
     */
    onPause(event) {
        this.state = VgStates.VG_PAUSED;
        if (this.vgMaster) {
            if (!this.playAtferSync) {
                this.syncSubscription.unsubscribe();
            }
        }
        this.stopBufferCheck();
        this.ref.detectChanges();
    }
    // @ts-ignore
    /**
     * @param {?} event
     * @return {?}
     */
    onTimeUpdate(event) {
        /** @type {?} */
        const end = this.buffered.length - 1;
        this.time = {
            current: this.currentTime * 1000,
            total: this.time.total,
            left: (this.duration - this.currentTime) * 1000,
        };
        if (end >= 0) {
            this.buffer = { end: this.buffered.end(end) * 1000 };
        }
        this.ref.detectChanges();
    }
    // @ts-ignore
    /**
     * @param {?} event
     * @return {?}
     */
    onProgress(event) {
        /** @type {?} */
        const end = this.buffered.length - 1;
        if (end >= 0) {
            this.buffer = { end: this.buffered.end(end) * 1000 };
        }
        this.ref.detectChanges();
    }
    // @ts-ignore
    /**
     * @param {?} event
     * @return {?}
     */
    onVolumeChange(event) {
        // TODO: Save to localstorage the current volume
        this.ref.detectChanges();
    }
    // @ts-ignore
    /**
     * @param {?} event
     * @return {?}
     */
    onError(event) {
        // TODO: Handle error messages
        this.ref.detectChanges();
    }
    // http://stackoverflow.com/a/23828241/779529
    /**
     * @return {?}
     */
    bufferCheck() {
        /** @type {?} */
        const offset = 1 / this.checkInterval;
        this.currentPlayPos = this.currentTime;
        if (!this.isBufferDetected &&
            this.currentPlayPos < this.lastPlayPos + offset) {
            this.isBufferDetected = true;
        }
        if (this.isBufferDetected &&
            this.currentPlayPos > this.lastPlayPos + offset) {
            this.isBufferDetected = false;
        }
        // Prevent calls to bufferCheck after ngOnDestroy have been called
        if (!this.bufferDetected.closed) {
            this.bufferDetected.next(this.isBufferDetected);
        }
        this.lastPlayPos = this.currentPlayPos;
    }
    /**
     * @return {?}
     */
    startBufferCheck() {
        this.checkBufferSubscription = timer(0, this.checkInterval).subscribe((/**
         * @return {?}
         */
        () => {
            this.bufferCheck();
        }));
    }
    /**
     * @return {?}
     */
    stopBufferCheck() {
        if (this.checkBufferSubscription) {
            this.checkBufferSubscription.unsubscribe();
        }
        this.isBufferDetected = false;
        this.bufferDetected.next(this.isBufferDetected);
    }
    /**
     * @param {?} value
     * @param {?=} byPercent
     * @return {?}
     */
    seekTime(value, byPercent = false) {
        /** @type {?} */
        let second;
        /** @type {?} */
        const duration = this.duration;
        if (byPercent) {
            second = (value * duration) / 100;
        }
        else {
            second = value;
        }
        this.currentTime = second;
    }
    /**
     * @param {?} type
     * @param {?=} label
     * @param {?=} language
     * @param {?=} mode
     * @return {?}
     */
    addTextTrack(type, label, language, mode) {
        /** @type {?} */
        const newTrack = this.vgMedia.addTextTrack(type, label, language);
        if (mode) {
            newTrack.mode = mode;
        }
        return newTrack;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.vgMedia.src = '';
        this.mutationObs.unsubscribe();
        this.canPlayObs.unsubscribe();
        this.canPlayThroughObs.unsubscribe();
        this.loadedMetadataObs.unsubscribe();
        this.waitingObs.unsubscribe();
        this.progressObs.unsubscribe();
        this.endedObs.unsubscribe();
        this.playingObs.unsubscribe();
        this.playObs.unsubscribe();
        this.pauseObs.unsubscribe();
        this.timeUpdateObs.unsubscribe();
        this.volumeChangeObs.unsubscribe();
        this.errorObs.unsubscribe();
        if (this.checkBufferSubscription) {
            this.checkBufferSubscription.unsubscribe();
        }
        if (this.syncSubscription) {
            this.syncSubscription.unsubscribe();
        }
        this.bufferDetected.complete();
        this.bufferDetected.unsubscribe();
        this.api.unregisterMedia(this);
    }
}
VgMediaDirective.decorators = [
    { type: Directive, args: [{
                selector: '[vgMedia]',
            },] }
];
/** @nocollapse */
VgMediaDirective.ctorParameters = () => [
    { type: VgApiService },
    { type: ChangeDetectorRef }
];
VgMediaDirective.propDecorators = {
    vgMedia: [{ type: Input }],
    vgMaster: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VgMediaDirective.prototype.elem;
    /** @type {?} */
    VgMediaDirective.prototype.vgMedia;
    /** @type {?} */
    VgMediaDirective.prototype.vgMaster;
    /** @type {?} */
    VgMediaDirective.prototype.state;
    /** @type {?} */
    VgMediaDirective.prototype.time;
    /** @type {?} */
    VgMediaDirective.prototype.buffer;
    /** @type {?} */
    VgMediaDirective.prototype.track;
    /** @type {?} */
    VgMediaDirective.prototype.subscriptions;
    /** @type {?} */
    VgMediaDirective.prototype.canPlay;
    /** @type {?} */
    VgMediaDirective.prototype.canPlayThrough;
    /** @type {?} */
    VgMediaDirective.prototype.isMetadataLoaded;
    /** @type {?} */
    VgMediaDirective.prototype.isWaiting;
    /** @type {?} */
    VgMediaDirective.prototype.isCompleted;
    /** @type {?} */
    VgMediaDirective.prototype.isLive;
    /** @type {?} */
    VgMediaDirective.prototype.isBufferDetected;
    /** @type {?} */
    VgMediaDirective.prototype.checkInterval;
    /** @type {?} */
    VgMediaDirective.prototype.currentPlayPos;
    /** @type {?} */
    VgMediaDirective.prototype.lastPlayPos;
    /** @type {?} */
    VgMediaDirective.prototype.specifiedDuration;
    /** @type {?} */
    VgMediaDirective.prototype.checkBufferSubscription;
    /** @type {?} */
    VgMediaDirective.prototype.syncSubscription;
    /** @type {?} */
    VgMediaDirective.prototype.canPlayAllSubscription;
    /** @type {?} */
    VgMediaDirective.prototype.playAtferSync;
    /** @type {?} */
    VgMediaDirective.prototype.mutationObs;
    /** @type {?} */
    VgMediaDirective.prototype.canPlayObs;
    /** @type {?} */
    VgMediaDirective.prototype.canPlayThroughObs;
    /** @type {?} */
    VgMediaDirective.prototype.loadedMetadataObs;
    /** @type {?} */
    VgMediaDirective.prototype.waitingObs;
    /** @type {?} */
    VgMediaDirective.prototype.progressObs;
    /** @type {?} */
    VgMediaDirective.prototype.endedObs;
    /** @type {?} */
    VgMediaDirective.prototype.playingObs;
    /** @type {?} */
    VgMediaDirective.prototype.playObs;
    /** @type {?} */
    VgMediaDirective.prototype.pauseObs;
    /** @type {?} */
    VgMediaDirective.prototype.timeUpdateObs;
    /** @type {?} */
    VgMediaDirective.prototype.volumeChangeObs;
    /** @type {?} */
    VgMediaDirective.prototype.errorObs;
    /** @type {?} */
    VgMediaDirective.prototype.bufferDetected;
    /** @type {?} */
    VgMediaDirective.prototype.playPromise;
    /**
     * @type {?}
     * @private
     */
    VgMediaDirective.prototype.api;
    /**
     * @type {?}
     * @private
     */
    VgMediaDirective.prototype.ref;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-player/vg-player.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgPlayerComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/core.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services = [
    VgApiService,
    VgControlsHiddenService,
    VgFullscreenApiService,
    VgUtilsService,
    VgEvents,
    VgStates
];
/** @type {?} */
const directives = [
    VgCuePointsDirective,
    VgMediaDirective
];
class VgCoreModule {
}
VgCoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [...services],
                declarations: [...directives, VgPlayerComponent],
                exports: [...directives, VgPlayerComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/bitrate-options.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function BitrateOptions() { }
if (false) {
    /** @type {?} */
    BitrateOptions.prototype.qualityIndex;
    /** @type {?} */
    BitrateOptions.prototype.width;
    /** @type {?} */
    BitrateOptions.prototype.height;
    /** @type {?} */
    BitrateOptions.prototype.bitrate;
    /** @type {?} */
    BitrateOptions.prototype.mediaType;
    /** @type {?|undefined} */
    BitrateOptions.prototype.label;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/i-media-element.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IMediaElement() { }
if (false) {
    /**
     * Returns the id of the element.
     * @type {?}
     */
    IMediaElement.prototype.id;
    /**
     * Returns the node name. Only available on native HTML tags.
     * @type {?|undefined}
     */
    IMediaElement.prototype.nodeName;
    /**
     * Returns the node element. Only available on Angular classes.
     * @type {?|undefined}
     */
    IMediaElement.prototype.elem;
    /**
     * Returns an AudioTrackList object with the audio tracks for a given video element.
     * @type {?}
     */
    IMediaElement.prototype.audioTracks;
    /**
     * Gets or sets a value that indicates whether to start playing the media automatically.
     * @type {?}
     */
    IMediaElement.prototype.autoplay;
    /**
     * Gets a collection of buffered time ranges.
     * @type {?}
     */
    IMediaElement.prototype.buffered;
    /**
     * Gets or sets a flag that indicates whether the client provides a set of controls for
     * the media (in case the developer does not include controls for the player).
     * @type {?}
     */
    IMediaElement.prototype.controls;
    /** @type {?} */
    IMediaElement.prototype.crossOrigin;
    /**
     * Gets the address or URL of the current media resource that is selected by IHTMLMediaElement.
     * @type {?}
     */
    IMediaElement.prototype.currentSrc;
    /**
     * Gets or sets the current playback position, in seconds.
     * @type {?}
     */
    IMediaElement.prototype.currentTime;
    /** @type {?} */
    IMediaElement.prototype.defaultMuted;
    /**
     * Gets or sets the default playback rate when the user is not using fast forward or reverse for a video or audio resource.
     * @type {?}
     */
    IMediaElement.prototype.defaultPlaybackRate;
    /**
     * Returns the duration in seconds of the current media resource. A NaN value is returned if duration
     * is not available, or Infinity if the media resource is streaming.
     * @type {?}
     */
    IMediaElement.prototype.duration;
    /**
     * Gets information about whether the playback has ended or not.
     * @type {?}
     */
    IMediaElement.prototype.ended;
    /**
     * Returns an object representing the current error state of the audio or video element.
     * @type {?}
     */
    IMediaElement.prototype.error;
    /**
     * Gets or sets a flag to specify whether playback should restart after it completes.
     * @type {?}
     */
    IMediaElement.prototype.loop;
    /** @type {?} */
    IMediaElement.prototype.mediaKeys;
    /**
     * Specifies the purpose of the audio or video media, such as background audio or alerts.
     * @type {?}
     */
    IMediaElement.prototype.msAudioCategory;
    /**
     * Specifies the output device id that the audio will be sent to.
     * @type {?}
     */
    IMediaElement.prototype.msAudioDeviceType;
    /** @type {?} */
    IMediaElement.prototype.msGraphicsTrustStatus;
    /**
     * Gets the MSMediaKeys object, which is used for decrypting media data, that is associated with this media element.
     * @type {?}
     */
    IMediaElement.prototype.msKeys;
    /**
     * Gets or sets whether the DLNA PlayTo device is available.
     * @type {?}
     */
    IMediaElement.prototype.msPlayToDisabled;
    /**
     * Gets or sets the path to the preferred media source. This enables the Play To target device to
     * stream the media content, which can be DRM protected, from a different location, such as a cloud media server.
     * @type {?}
     */
    IMediaElement.prototype.msPlayToPreferredSourceUri;
    /**
     * Gets or sets the primary DLNA PlayTo device.
     * @type {?}
     */
    IMediaElement.prototype.msPlayToPrimary;
    /**
     * Gets the source associated with the media element for use by the PlayToManager.
     * @type {?}
     */
    IMediaElement.prototype.msPlayToSource;
    /**
     * Specifies whether or not to enable low-latency playback on the media element.
     * @type {?}
     */
    IMediaElement.prototype.msRealTime;
    /**
     * Gets or sets a flag that indicates whether the audio (either audio or the audio track on video media) is muted.
     * @type {?}
     */
    IMediaElement.prototype.muted;
    /**
     * Gets the current network activity for the element.
     * @type {?}
     */
    IMediaElement.prototype.networkState;
    /** @type {?} */
    IMediaElement.prototype.onencrypted;
    /** @type {?} */
    IMediaElement.prototype.onmsneedkey;
    /**
     * Gets a flag that specifies whether playback is paused.
     * @type {?}
     */
    IMediaElement.prototype.paused;
    /**
     * Gets or sets the current rate of speed for the media resource to play. This speed is
     * expressed as a multiple of the normal speed of the media resource.
     * @type {?}
     */
    IMediaElement.prototype.playbackRate;
    /**
     * Gets TimeRanges for the current media resource that has been played.
     * @type {?}
     */
    IMediaElement.prototype.played;
    /**
     * Gets or sets the current playback position, in seconds.
     * @type {?}
     */
    IMediaElement.prototype.preload;
    /** @type {?} */
    IMediaElement.prototype.readyState;
    /**
     * Returns a TimeRanges object that represents the ranges of the current media resource that can be seeked.
     * @type {?}
     */
    IMediaElement.prototype.seekable;
    /**
     * Gets a flag that indicates whether the the client is currently moving to a new playback position in the media resource.
     * @type {?}
     */
    IMediaElement.prototype.seeking;
    /**
     * The address or URL of the a media resource that is to be considered.
     * @type {?}
     */
    IMediaElement.prototype.src;
    /** @type {?} */
    IMediaElement.prototype.srcObject;
    /** @type {?} */
    IMediaElement.prototype.textTracks;
    /** @type {?} */
    IMediaElement.prototype.videoTracks;
    /**
     * Gets or sets the volume level for audio portions of the media element.
     * @type {?}
     */
    IMediaElement.prototype.volume;
    /** @type {?} */
    IMediaElement.prototype.HAVE_CURRENT_DATA;
    /** @type {?} */
    IMediaElement.prototype.HAVE_ENOUGH_DATA;
    /** @type {?} */
    IMediaElement.prototype.HAVE_FUTURE_DATA;
    /** @type {?} */
    IMediaElement.prototype.HAVE_METADATA;
    /** @type {?} */
    IMediaElement.prototype.HAVE_NOTHING;
    /** @type {?} */
    IMediaElement.prototype.NETWORK_EMPTY;
    /** @type {?} */
    IMediaElement.prototype.NETWORK_IDLE;
    /** @type {?} */
    IMediaElement.prototype.NETWORK_LOADING;
    /** @type {?} */
    IMediaElement.prototype.NETWORK_NO_SOURCE;
    /**
     * @param {?} kind
     * @param {?=} label
     * @param {?=} language
     * @return {?}
     */
    IMediaElement.prototype.addTextTrack = function (kind, label, language) { };
    /**
     * Returns a string that specifies whether the client can play a given media resource type.
     * @param {?} type
     * @return {?}
     */
    IMediaElement.prototype.canPlayType = function (type) { };
    /**
     * Resets the audio or video object and loads a new media resource.
     * @return {?}
     */
    IMediaElement.prototype.load = function () { };
    /**
     * Clears all effects from the media pipeline.
     * @return {?}
     */
    IMediaElement.prototype.msClearEffects = function () { };
    /**
     * @return {?}
     */
    IMediaElement.prototype.msGetAsCastingSource = function () { };
    /**
     * Inserts the specified audio effect into media pipeline.
     * @param {?} activatableClassId
     * @param {?} effectRequired
     * @param {?=} config
     * @return {?}
     */
    IMediaElement.prototype.msInsertAudioEffect = function (activatableClassId, effectRequired, config) { };
    /**
     * @param {?} mediaKeys
     * @return {?}
     */
    IMediaElement.prototype.msSetMediaKeys = function (mediaKeys) { };
    /**
     * Specifies the media protection manager for a given media pipeline.
     * @param {?=} mediaProtectionManager
     * @return {?}
     */
    IMediaElement.prototype.msSetMediaProtectionManager = function (mediaProtectionManager) { };
    /**
     * Pauses the current playback and sets paused to TRUE. This can be used to test whether the media is
     * playing or paused. You can also use the pause or play events to tell whether the media is playing or not.
     * @return {?}
     */
    IMediaElement.prototype.pause = function () { };
    /**
     * Loads and starts playback of a media resource.
     * @return {?}
     */
    IMediaElement.prototype.play = function () { };
    /**
     * @param {?} mediaKeys
     * @return {?}
     */
    IMediaElement.prototype.setMediaKeys = function (mediaKeys) { };
    /**
     * @param {?} type
     * @param {?} listener
     * @param {?=} useCapture
     * @return {?}
     */
    IMediaElement.prototype.addEventListener = function (type, listener, useCapture) { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/idrm-license-server.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IDRMLicenseServer() { }

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/ihls-config.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IHLSConfig() { }
if (false) {
    /** @type {?} */
    IHLSConfig.prototype.abrController;
    /** @type {?} */
    IHLSConfig.prototype.fLoader;
    /** @type {?} */
    IHLSConfig.prototype.fetchSetup;
    /** @type {?} */
    IHLSConfig.prototype.loader;
    /** @type {?} */
    IHLSConfig.prototype.pLoader;
    /** @type {?} */
    IHLSConfig.prototype.timelineController;
    /** @type {?} */
    IHLSConfig.prototype.xhrSetup;
    /** @type {?} */
    IHLSConfig.prototype.startLevel;
    /** @type {?} */
    IHLSConfig.prototype.defaultAudioCodec;
    /** @type {?} */
    IHLSConfig.prototype.autoStartLoad;
    /** @type {?} */
    IHLSConfig.prototype.startPosition;
    /** @type {?} */
    IHLSConfig.prototype.capLevelToPlayerSize;
    /** @type {?} */
    IHLSConfig.prototype.debug;
    /** @type {?} */
    IHLSConfig.prototype.initialLiveManifestSize;
    /** @type {?} */
    IHLSConfig.prototype.maxBufferLength;
    /** @type {?} */
    IHLSConfig.prototype.maxMaxBufferLength;
    /** @type {?} */
    IHLSConfig.prototype.maxBufferSize;
    /** @type {?} */
    IHLSConfig.prototype.maxBufferHole;
    /** @type {?} */
    IHLSConfig.prototype.maxSeekHole;
    /** @type {?} */
    IHLSConfig.prototype.seekHoleNudgeDuration;
    /** @type {?} */
    IHLSConfig.prototype.maxFragLookUpTolerance;
    /** @type {?} */
    IHLSConfig.prototype.liveSyncDurationCount;
    /** @type {?} */
    IHLSConfig.prototype.liveMaxLatencyDurationCount;
    /** @type {?} */
    IHLSConfig.prototype.enableWorker;
    /** @type {?} */
    IHLSConfig.prototype.enableSoftwareAES;
    /** @type {?} */
    IHLSConfig.prototype.manifestLoadingTimeOut;
    /** @type {?} */
    IHLSConfig.prototype.manifestLoadingMaxRetry;
    /** @type {?} */
    IHLSConfig.prototype.manifestLoadingRetryDelay;
    /** @type {?} */
    IHLSConfig.prototype.manifestLoadingMaxRetryTimeout;
    /** @type {?} */
    IHLSConfig.prototype.levelLoadingTimeOut;
    /** @type {?} */
    IHLSConfig.prototype.levelLoadingMaxRetry;
    /** @type {?} */
    IHLSConfig.prototype.levelLoadingRetryDelay;
    /** @type {?} */
    IHLSConfig.prototype.levelLoadingMaxRetryTimeout;
    /** @type {?} */
    IHLSConfig.prototype.fragLoadingTimeOut;
    /** @type {?} */
    IHLSConfig.prototype.fragLoadingMaxRetry;
    /** @type {?} */
    IHLSConfig.prototype.fragLoadingRetryDelay;
    /** @type {?} */
    IHLSConfig.prototype.fragLoadingMaxRetryTimeout;
    /** @type {?} */
    IHLSConfig.prototype.startFragPrefech;
    /** @type {?} */
    IHLSConfig.prototype.appendErrorMaxRetry;
    /** @type {?} */
    IHLSConfig.prototype.enableCEA708Captions;
    /** @type {?} */
    IHLSConfig.prototype.stretchShortVideoTrack;
    /** @type {?} */
    IHLSConfig.prototype.forceKeyFrameOnDiscontinuity;
    /** @type {?} */
    IHLSConfig.prototype.abrEwmaFastLive;
    /** @type {?} */
    IHLSConfig.prototype.abrEwmaSlowLive;
    /** @type {?} */
    IHLSConfig.prototype.abrEwmaFastVoD;
    /** @type {?} */
    IHLSConfig.prototype.abrEwmaSlowVoD;
    /** @type {?} */
    IHLSConfig.prototype.abrEwmaDefaultEstimate;
    /** @type {?} */
    IHLSConfig.prototype.abrBandWidthFactor;
    /** @type {?} */
    IHLSConfig.prototype.abrBandWidthUpFactor;
    /** @type {?} */
    IHLSConfig.prototype.minAutoBitrate;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/vg-media-api.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IPlayable() { }
if (false) {
    /** @type {?} */
    IPlayable.prototype.id;
    /** @type {?} */
    IPlayable.prototype.elem;
    /** @type {?} */
    IPlayable.prototype.time;
    /** @type {?} */
    IPlayable.prototype.buffer;
    /** @type {?|undefined} */
    IPlayable.prototype.track;
    /** @type {?} */
    IPlayable.prototype.canPlay;
    /** @type {?} */
    IPlayable.prototype.canPlayThrough;
    /** @type {?} */
    IPlayable.prototype.isMetadataLoaded;
    /** @type {?} */
    IPlayable.prototype.isWaiting;
    /** @type {?} */
    IPlayable.prototype.isCompleted;
    /** @type {?} */
    IPlayable.prototype.isLive;
    /** @type {?} */
    IPlayable.prototype.textTracks;
    /** @type {?} */
    IPlayable.prototype.state;
    /** @type {?} */
    IPlayable.prototype.subscriptions;
    /** @type {?} */
    IPlayable.prototype.duration;
    /** @type {?} */
    IPlayable.prototype.currentTime;
    /** @type {?} */
    IPlayable.prototype.play;
    /** @type {?} */
    IPlayable.prototype.pause;
    /** @type {?|undefined} */
    IPlayable.prototype.addTextTrack;
    /** @type {?|undefined} */
    IPlayable.prototype.dispatchEvent;
}
/**
 * @record
 */
function IMediaSubscriptions() { }
if (false) {
    /** @type {?} */
    IMediaSubscriptions.prototype.abort;
    /** @type {?} */
    IMediaSubscriptions.prototype.bufferDetected;
    /** @type {?} */
    IMediaSubscriptions.prototype.canPlay;
    /** @type {?} */
    IMediaSubscriptions.prototype.canPlayThrough;
    /** @type {?} */
    IMediaSubscriptions.prototype.durationChange;
    /** @type {?} */
    IMediaSubscriptions.prototype.emptied;
    /** @type {?} */
    IMediaSubscriptions.prototype.encrypted;
    /** @type {?} */
    IMediaSubscriptions.prototype.ended;
    /** @type {?} */
    IMediaSubscriptions.prototype.error;
    /** @type {?} */
    IMediaSubscriptions.prototype.loadedData;
    /** @type {?} */
    IMediaSubscriptions.prototype.loadedMetadata;
    /** @type {?} */
    IMediaSubscriptions.prototype.loadStart;
    /** @type {?} */
    IMediaSubscriptions.prototype.pause;
    /** @type {?} */
    IMediaSubscriptions.prototype.play;
    /** @type {?} */
    IMediaSubscriptions.prototype.playing;
    /** @type {?} */
    IMediaSubscriptions.prototype.progress;
    /** @type {?} */
    IMediaSubscriptions.prototype.rateChange;
    /** @type {?} */
    IMediaSubscriptions.prototype.seeked;
    /** @type {?} */
    IMediaSubscriptions.prototype.seeking;
    /** @type {?} */
    IMediaSubscriptions.prototype.stalled;
    /** @type {?} */
    IMediaSubscriptions.prototype.suspend;
    /** @type {?} */
    IMediaSubscriptions.prototype.timeUpdate;
    /** @type {?} */
    IMediaSubscriptions.prototype.volumeChange;
    /** @type {?} */
    IMediaSubscriptions.prototype.waiting;
    /** @type {?} */
    IMediaSubscriptions.prototype.startAds;
    /** @type {?} */
    IMediaSubscriptions.prototype.endAds;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/deprecated-tracks-types.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AudioTrack() { }
if (false) {
    /** @type {?} */
    AudioTrack.prototype.enabled;
    /** @type {?} */
    AudioTrack.prototype.id;
    /** @type {?} */
    AudioTrack.prototype.kind;
    /** @type {?} */
    AudioTrack.prototype.label;
    /** @type {?} */
    AudioTrack.prototype.language;
    /** @type {?} */
    AudioTrack.prototype.sourceBuffer;
}
/**
 * @record
 */
function AudioTrackListEventMap() { }
if (false) {
    /** @type {?} */
    AudioTrackListEventMap.prototype.addtrack;
    /** @type {?} */
    AudioTrackListEventMap.prototype.change;
    /** @type {?} */
    AudioTrackListEventMap.prototype.removetrack;
}
/**
 * Used to represent a list of the audio tracks contained within a given HTML media element, with each track represented by a separate AudioTrack object in the list.
 * @record
 */
function AudioTrackList() { }
if (false) {
    /** @type {?} */
    AudioTrackList.prototype.length;
    /** @type {?} */
    AudioTrackList.prototype.onaddtrack;
    /** @type {?} */
    AudioTrackList.prototype.onchange;
    /** @type {?} */
    AudioTrackList.prototype.onremovetrack;
    /* Skipping unhandled member: [index: number]: AudioTrack;*/
    /**
     * @param {?} id
     * @return {?}
     */
    AudioTrackList.prototype.getTrackById = function (id) { };
    /**
     * @param {?} index
     * @return {?}
     */
    AudioTrackList.prototype.item = function (index) { };
    /**
     * @template K
     * @param {?} type
     * @param {?} listener
     * @param {?=} options
     * @return {?}
     */
    AudioTrackList.prototype.addEventListener = function (type, listener, options) { };
    /**
     * @param {?} type
     * @param {?} listener
     * @param {?=} options
     * @return {?}
     */
    AudioTrackList.prototype.addEventListener = function (type, listener, options) { };
    /**
     * @template K
     * @param {?} type
     * @param {?} listener
     * @param {?=} options
     * @return {?}
     */
    AudioTrackList.prototype.removeEventListener = function (type, listener, options) { };
    /**
     * @param {?} type
     * @param {?} listener
     * @param {?=} options
     * @return {?}
     */
    AudioTrackList.prototype.removeEventListener = function (type, listener, options) { };
}
/**
 * A single video track from a <video> element.
 * @record
 */
function VideoTrack() { }
if (false) {
    /** @type {?} */
    VideoTrack.prototype.id;
    /** @type {?} */
    VideoTrack.prototype.kind;
    /** @type {?} */
    VideoTrack.prototype.label;
    /** @type {?} */
    VideoTrack.prototype.language;
    /** @type {?} */
    VideoTrack.prototype.selected;
    /** @type {?} */
    VideoTrack.prototype.sourceBuffer;
}
/**
 * @record
 */
function VideoTrackListEventMap() { }
if (false) {
    /** @type {?} */
    VideoTrackListEventMap.prototype.addtrack;
    /** @type {?} */
    VideoTrackListEventMap.prototype.change;
    /** @type {?} */
    VideoTrackListEventMap.prototype.removetrack;
}
/**
 * Used to represent a list of the video tracks contained within a <video> element, with each track represented by a separate VideoTrack object in the list.
 * @record
 */
function VideoTrackList() { }
if (false) {
    /** @type {?} */
    VideoTrackList.prototype.length;
    /** @type {?} */
    VideoTrackList.prototype.onaddtrack;
    /** @type {?} */
    VideoTrackList.prototype.onchange;
    /** @type {?} */
    VideoTrackList.prototype.onremovetrack;
    /** @type {?} */
    VideoTrackList.prototype.selectedIndex;
    /* Skipping unhandled member: [index: number]: VideoTrack;*/
    /**
     * @param {?} id
     * @return {?}
     */
    VideoTrackList.prototype.getTrackById = function (id) { };
    /**
     * @param {?} index
     * @return {?}
     */
    VideoTrackList.prototype.item = function (index) { };
    /**
     * @template K
     * @param {?} type
     * @param {?} listener
     * @param {?=} options
     * @return {?}
     */
    VideoTrackList.prototype.addEventListener = function (type, listener, options) { };
    /**
     * @param {?} type
     * @param {?} listener
     * @param {?=} options
     * @return {?}
     */
    VideoTrackList.prototype.addEventListener = function (type, listener, options) { };
    /**
     * @template K
     * @param {?} type
     * @param {?} listener
     * @param {?=} options
     * @return {?}
     */
    VideoTrackList.prototype.removeEventListener = function (type, listener, options) { };
    /**
     * @param {?} type
     * @param {?} listener
     * @param {?=} options
     * @return {?}
     */
    VideoTrackList.prototype.removeEventListener = function (type, listener, options) { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/vg-media/vg-media-element.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgMediaElement {
    /**
     * @return {?}
     */
    get audioTracks() {
        return null;
    }
    // @ts-ignore
    /**
     * @param {?} kind
     * @param {?=} label
     * @param {?=} language
     * @return {?}
     */
    addTextTrack(kind, label, language) {
        return null;
    }
    // @ts-ignore
    /**
     * @param {?} type
     * @return {?}
     */
    canPlayType(type) {
        return null;
    }
    /**
     * @return {?}
     */
    load() { }
    /**
     * @return {?}
     */
    msClearEffects() { }
    /**
     * @return {?}
     */
    msGetAsCastingSource() {
        return null;
    }
    // @ts-ignore
    /**
     * @param {?} _activatableClassId
     * @param {?} _effectRequired
     * @param {?=} _config
     * @return {?}
     */
    msInsertAudioEffect(_activatableClassId, _effectRequired, _config) { }
    // @ts-ignore
    /**
     * @param {?} mediaKeys
     * @return {?}
     */
    msSetMediaKeys(mediaKeys) { }
    // @ts-ignore
    /**
     * @param {?=} mediaProtectionManager
     * @return {?}
     */
    msSetMediaProtectionManager(mediaProtectionManager) { }
    /**
     * @return {?}
     */
    pause() { }
    /**
     * @return {?}
     */
    play() {
        return null;
    }
    // @ts-ignore
    /**
     * @param {?} mediaKeys
     * @return {?}
     */
    setMediaKeys(mediaKeys) {
        return null;
    }
    // @ts-ignore
    /**
     * @param {?} _type
     * @param {?} _listener
     * @param {?=} _useCapture
     * @return {?}
     */
    addEventListener(_type, _listener, _useCapture) { }
}
if (false) {
    /** @type {?} */
    VgMediaElement.prototype.id;
    /** @type {?} */
    VgMediaElement.prototype.elem;
    /** @type {?} */
    VgMediaElement.prototype.autoplay;
    /** @type {?} */
    VgMediaElement.prototype.buffered;
    /** @type {?} */
    VgMediaElement.prototype.controls;
    /** @type {?} */
    VgMediaElement.prototype.crossOrigin;
    /** @type {?} */
    VgMediaElement.prototype.currentSrc;
    /** @type {?} */
    VgMediaElement.prototype.currentTime;
    /** @type {?} */
    VgMediaElement.prototype.defaultMuted;
    /** @type {?} */
    VgMediaElement.prototype.defaultPlaybackRate;
    /** @type {?} */
    VgMediaElement.prototype.duration;
    /** @type {?} */
    VgMediaElement.prototype.ended;
    /** @type {?} */
    VgMediaElement.prototype.error;
    /** @type {?} */
    VgMediaElement.prototype.loop;
    /** @type {?} */
    VgMediaElement.prototype.mediaKeys;
    /** @type {?} */
    VgMediaElement.prototype.msAudioCategory;
    /** @type {?} */
    VgMediaElement.prototype.msAudioDeviceType;
    /** @type {?} */
    VgMediaElement.prototype.msGraphicsTrustStatus;
    /** @type {?} */
    VgMediaElement.prototype.msKeys;
    /** @type {?} */
    VgMediaElement.prototype.msPlayToDisabled;
    /** @type {?} */
    VgMediaElement.prototype.msPlayToPreferredSourceUri;
    /** @type {?} */
    VgMediaElement.prototype.msPlayToPrimary;
    /** @type {?} */
    VgMediaElement.prototype.msPlayToSource;
    /** @type {?} */
    VgMediaElement.prototype.msRealTime;
    /** @type {?} */
    VgMediaElement.prototype.muted;
    /** @type {?} */
    VgMediaElement.prototype.networkState;
    /** @type {?} */
    VgMediaElement.prototype.onencrypted;
    /** @type {?} */
    VgMediaElement.prototype.onmsneedkey;
    /** @type {?} */
    VgMediaElement.prototype.paused;
    /** @type {?} */
    VgMediaElement.prototype.playbackRate;
    /** @type {?} */
    VgMediaElement.prototype.played;
    /** @type {?} */
    VgMediaElement.prototype.preload;
    /** @type {?} */
    VgMediaElement.prototype.readyState;
    /** @type {?} */
    VgMediaElement.prototype.seekable;
    /** @type {?} */
    VgMediaElement.prototype.seeking;
    /** @type {?} */
    VgMediaElement.prototype.src;
    /** @type {?} */
    VgMediaElement.prototype.srcObject;
    /** @type {?} */
    VgMediaElement.prototype.textTracks;
    /** @type {?} */
    VgMediaElement.prototype.videoTracks;
    /** @type {?} */
    VgMediaElement.prototype.volume;
    /** @type {?} */
    VgMediaElement.prototype.HAVE_CURRENT_DATA;
    /** @type {?} */
    VgMediaElement.prototype.HAVE_ENOUGH_DATA;
    /** @type {?} */
    VgMediaElement.prototype.HAVE_FUTURE_DATA;
    /** @type {?} */
    VgMediaElement.prototype.HAVE_METADATA;
    /** @type {?} */
    VgMediaElement.prototype.HAVE_NOTHING;
    /** @type {?} */
    VgMediaElement.prototype.NETWORK_EMPTY;
    /** @type {?} */
    VgMediaElement.prototype.NETWORK_IDLE;
    /** @type {?} */
    VgMediaElement.prototype.NETWORK_LOADING;
    /** @type {?} */
    VgMediaElement.prototype.NETWORK_NO_SOURCE;
}

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: videogular-ngx-videogular-core.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { VgApiService, VgControlsHiddenService, VgCoreModule, VgCuePointsDirective, VgEvents, VgFullscreenApiService, VgMediaDirective, VgMediaElement, VgPlayerComponent, VgStates, VgUtilsService };
//# sourceMappingURL=videogular-ngx-videogular-core.js.map
