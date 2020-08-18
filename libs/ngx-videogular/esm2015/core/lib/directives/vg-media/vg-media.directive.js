/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/vg-media/vg-media.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ChangeDetectorRef, } from '@angular/core';
import { Observable, Subject, fromEvent, timer, combineLatest, } from 'rxjs';
import { map } from 'rxjs/operators';
import { VgApiService } from '../../services/vg-api/vg-api.service';
import { VgStates } from '../../services/states/vg-states.service';
import { VgEvents } from '../../services/events/vg-events.service';
export class VgMediaDirective {
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
//# sourceMappingURL=vg-media.directive.js.map