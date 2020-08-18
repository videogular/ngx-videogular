/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/vg-api/vg-api.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter } from '@angular/core';
import { VgStates } from '../states/vg-states.service';
import * as i0 from "@angular/core";
export class VgApiService {
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
/** @nocollapse */ VgApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function VgApiService_Factory() { return new VgApiService(); }, token: VgApiService, providedIn: "root" });
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
//# sourceMappingURL=vg-api.service.js.map