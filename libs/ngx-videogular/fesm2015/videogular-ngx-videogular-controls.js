import { Component, ViewEncapsulation, ElementRef, HostBinding, Input, ViewChild, HostListener, Pipe, EventEmitter, Output, ChangeDetectorRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fromEvent } from 'rxjs';
import { VgStates, VgApiService, VgControlsHiddenService, VgFullscreenApiService, VgCoreModule } from '@videogular/ngx-videogular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-controls/vg-controls.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgControlsComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-volume/vg-volume.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgVolumeComponent {
    /**
     * @param {?} ref
     * @param {?} API
     */
    constructor(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
        this.isDragging = false;
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
        this.ariaValue = this.getVolume() * 100;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.setVolume(this.calculateVolume(event.clientX));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseDown(event) {
        this.mouseDownPosX = event.clientX;
        this.isDragging = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDrag(event) {
        if (this.isDragging) {
            this.setVolume(this.calculateVolume(event.clientX));
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onStopDrag(event) {
        if (this.isDragging) {
            this.isDragging = false;
            if (this.mouseDownPosX === event.clientX) {
                this.setVolume(this.calculateVolume(event.clientX));
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    arrowAdjustVolume(event) {
        if (event.keyCode === 38 || event.keyCode === 39) {
            event.preventDefault();
            this.setVolume(Math.max(0, Math.min(100, this.getVolume() * 100 + 10)));
        }
        else if (event.keyCode === 37 || event.keyCode === 40) {
            event.preventDefault();
            this.setVolume(Math.max(0, Math.min(100, this.getVolume() * 100 - 10)));
        }
    }
    /**
     * @param {?} mousePosX
     * @return {?}
     */
    calculateVolume(mousePosX) {
        /** @type {?} */
        const recObj = this.volumeBarRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const volumeBarOffsetLeft = recObj.left;
        /** @type {?} */
        const volumeBarWidth = recObj.width;
        return ((mousePosX - volumeBarOffsetLeft) / volumeBarWidth) * 100;
    }
    /**
     * @param {?} vol
     * @return {?}
     */
    setVolume(vol) {
        this.target.volume = Math.max(0, Math.min(1, vol / 100));
        this.ariaValue = this.target.volume * 100;
    }
    /**
     * @return {?}
     */
    getVolume() {
        return this.target ? this.target.volume : 0;
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
VgVolumeComponent.decorators = [
    { type: Component, args: [{
                selector: 'vg-volume',
                encapsulation: ViewEncapsulation.None,
                template: `
    <div
      #volumeBar
      class="volumeBar"
      tabindex="0"
      role="slider"
      aria-label="volume level"
      aria-level="polite"
      [attr.aria-valuenow]="ariaValue"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-orientation="horizontal"
      [attr.aria-valuetext]="ariaValue + '%'"
      (click)="onClick($event)"
      (mousedown)="onMouseDown($event)"
    >
      <div class="volumeBackground" [ngClass]="{ dragging: isDragging }">
        <div
          class="volumeValue"
          [style.width]="getVolume() * (100 - 15) + '%'"
        ></div>
        <div
          class="volumeKnob"
          [style.left]="getVolume() * (100 - 15) + '%'"
        ></div>
      </div>
    </div>
  `,
                styles: [`
      vg-volume {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: flex;
        justify-content: center;
        height: 50px;
        width: 100px;
        cursor: pointer;
        color: white;
        line-height: 50px;
      }
      vg-volume .volumeBar {
        position: relative;
        display: flex;
        flex-grow: 1;
        align-items: center;
      }
      vg-volume .volumeBackground {
        display: flex;
        flex-grow: 1;
        height: 5px;
        pointer-events: none;
        background-color: #333;
      }
      vg-volume .volumeValue {
        display: flex;
        height: 5px;
        pointer-events: none;
        background-color: #fff;
        transition: all 0.2s ease-out;
      }
      vg-volume .volumeKnob {
        position: absolute;
        width: 15px;
        height: 15px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 15px;
        pointer-events: none;
        background-color: #fff;
        transition: all 0.2s ease-out;
      }
      vg-volume .volumeBackground.dragging .volumeValue,
      vg-volume .volumeBackground.dragging .volumeKnob {
        transition: none;
      }
    `]
            }] }
];
/** @nocollapse */
VgVolumeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: VgApiService }
];
VgVolumeComponent.propDecorators = {
    vgFor: [{ type: Input }],
    volumeBarRef: [{ type: ViewChild, args: ['volumeBar', { static: true },] }],
    onDrag: [{ type: HostListener, args: ['document:mousemove', ['$event'],] }],
    onStopDrag: [{ type: HostListener, args: ['document:mouseup', ['$event'],] }],
    arrowAdjustVolume: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    VgVolumeComponent.prototype.vgFor;
    /** @type {?} */
    VgVolumeComponent.prototype.volumeBarRef;
    /** @type {?} */
    VgVolumeComponent.prototype.elem;
    /** @type {?} */
    VgVolumeComponent.prototype.target;
    /** @type {?} */
    VgVolumeComponent.prototype.isDragging;
    /** @type {?} */
    VgVolumeComponent.prototype.mouseDownPosX;
    /** @type {?} */
    VgVolumeComponent.prototype.ariaValue;
    /** @type {?} */
    VgVolumeComponent.prototype.subscriptions;
    /** @type {?} */
    VgVolumeComponent.prototype.API;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-track-selector/vg-track-selector.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Option() { }
if (false) {
    /** @type {?} */
    Option.prototype.id;
    /** @type {?} */
    Option.prototype.label;
    /** @type {?} */
    Option.prototype.selected;
}
class VgTrackSelectorComponent {
    /**
     * @param {?} ref
     * @param {?} API
     */
    constructor(ref, API) {
        this.API = API;
        this.subscriptions = [];
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
        /** @type {?} */
        const subs = Array.from(((/** @type {?} */ (this.API.getMasterMedia().elem))).children)
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.tagName === 'TRACK'))
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.kind === 'subtitles'))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => ({
            label: item.label,
            selected: item.default === true,
            id: item.srclang,
        })));
        this.tracks = [
            ...subs,
            {
                id: null,
                label: 'Off',
                selected: subs.every((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => item.selected === false)),
            },
        ];
        /** @type {?} */
        const track = this.tracks.filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.selected === true))[0];
        this.trackSelected = track.id;
        this.ariaValue = track.label;
    }
    /**
     * @param {?} trackId
     * @return {?}
     */
    selectTrack(trackId) {
        this.trackSelected = trackId === 'null' ? null : trackId;
        this.ariaValue = 'No track selected';
        Array.from(((/** @type {?} */ (this.API.getMasterMedia().elem))).textTracks).forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (item.language === trackId) {
                this.ariaValue = item.label;
                item.mode = 'showing';
            }
            else {
                item.mode = 'hidden';
            }
        }));
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
VgTrackSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'vg-track-selector',
                encapsulation: ViewEncapsulation.None,
                template: `
    <div class="container">
      <div
        class="track-selected"
        [class.vg-icon-closed_caption]="!trackSelected"
      >
        {{ trackSelected || '' }}
      </div>
      <select
        class="trackSelector"
        (change)="selectTrack($event.target.value)"
        tabindex="0"
        aria-label="track selector"
        [attr.aria-valuetext]="ariaValue"
      >
        <option
          *ngFor="let track of tracks"
          [value]="track.id"
          [selected]="track.selected === true"
        >
          {{ track.label }}
        </option>
      </select>
    </div>
  `,
                styles: [`
      vg-track-selector {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: flex;
        justify-content: center;
        width: 50px;
        height: 50px;
        cursor: pointer;
        color: white;
        line-height: 50px;
      }
      vg-track-selector .container {
        position: relative;
        display: flex;
        flex-grow: 1;
        align-items: center;
        padding: 0;
        margin: 5px;
      }
      vg-track-selector select.trackSelector {
        width: 50px;
        padding: 5px 8px;
        border: none;
        background: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        color: transparent;
        font-size: 16px;
      }
      vg-track-selector select.trackSelector::-ms-expand {
        display: none;
      }
      vg-track-selector select.trackSelector option {
        color: #000;
      }
      vg-track-selector .track-selected {
        position: absolute;
        width: 100%;
        height: 50px;
        top: -6px;
        text-align: center;
        text-transform: uppercase;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        padding-top: 2px;
        pointer-events: none;
      }
      vg-track-selector .vg-icon-closed_caption:before {
        width: 100%;
      }
    `]
            }] }
];
/** @nocollapse */
VgTrackSelectorComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: VgApiService }
];
VgTrackSelectorComponent.propDecorators = {
    vgFor: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VgTrackSelectorComponent.prototype.vgFor;
    /** @type {?} */
    VgTrackSelectorComponent.prototype.elem;
    /** @type {?} */
    VgTrackSelectorComponent.prototype.target;
    /** @type {?} */
    VgTrackSelectorComponent.prototype.tracks;
    /** @type {?} */
    VgTrackSelectorComponent.prototype.trackSelected;
    /** @type {?} */
    VgTrackSelectorComponent.prototype.subscriptions;
    /** @type {?} */
    VgTrackSelectorComponent.prototype.ariaValue;
    /** @type {?} */
    VgTrackSelectorComponent.prototype.API;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-time-display/vg-time-display.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Workaround until we can use UTC with Angular Date Pipe
class VgUtcPipe {
    /**
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    transform(value, format) {
        /** @type {?} */
        let date = new Date(value);
        /** @type {?} */
        let result = format;
        /** @type {?} */
        let ss = date.getUTCSeconds();
        /** @type {?} */
        let mm = date.getUTCMinutes();
        /** @type {?} */
        let hh = date.getUTCHours();
        if (ss < 10) {
            ss = '0' + ss;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        if (hh < 10) {
            hh = '0' + hh;
        }
        result = result.replace(/ss/g, (/** @type {?} */ (ss)));
        result = result.replace(/mm/g, (/** @type {?} */ (mm)));
        result = result.replace(/hh/g, (/** @type {?} */ (hh)));
        return result;
    }
}
VgUtcPipe.decorators = [
    { type: Pipe, args: [{ name: 'vgUtc' },] }
];
class VgTimeDisplayComponent {
    /**
     * @param {?} ref
     * @param {?} API
     */
    constructor(ref, API) {
        this.API = API;
        this.vgProperty = 'current';
        this.vgFormat = 'mm:ss';
        this.subscriptions = [];
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
    }
    /**
     * @return {?}
     */
    getTime() {
        /** @type {?} */
        let t = 0;
        if (this.target) {
            t = Math.round(this.target.time[this.vgProperty]);
            t = isNaN(t) || this.target.isLive ? 0 : t;
        }
        return t;
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
VgTimeDisplayComponent.decorators = [
    { type: Component, args: [{
                selector: 'vg-time-display',
                encapsulation: ViewEncapsulation.None,
                template: `
    <span *ngIf="target?.isLive">LIVE</span>
    <span *ngIf="!target?.isLive">{{ getTime() | vgUtc: vgFormat }}</span>
    <ng-content></ng-content>
  `,
                styles: [`
      vg-time-display {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: flex;
        justify-content: center;
        height: 50px;
        width: 60px;
        cursor: pointer;
        color: white;
        line-height: 50px;
        pointer-events: none;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      }
    `]
            }] }
];
/** @nocollapse */
VgTimeDisplayComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: VgApiService }
];
VgTimeDisplayComponent.propDecorators = {
    vgFor: [{ type: Input }],
    vgProperty: [{ type: Input }],
    vgFormat: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VgTimeDisplayComponent.prototype.vgFor;
    /** @type {?} */
    VgTimeDisplayComponent.prototype.vgProperty;
    /** @type {?} */
    VgTimeDisplayComponent.prototype.vgFormat;
    /** @type {?} */
    VgTimeDisplayComponent.prototype.elem;
    /** @type {?} */
    VgTimeDisplayComponent.prototype.target;
    /** @type {?} */
    VgTimeDisplayComponent.prototype.subscriptions;
    /** @type {?} */
    VgTimeDisplayComponent.prototype.API;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-scrub-bar/vg-scrub-bar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgScrubBarComponent {
    /**
     * @param {?} ref
     * @param {?} API
     * @param {?} vgControlsHiddenState
     */
    constructor(ref, API, vgControlsHiddenState) {
        this.API = API;
        this.hideScrubBar = false;
        this.vgSlider = true;
        this.isSeeking = false;
        this.wasPlaying = false;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
        this.subscriptions.push(vgControlsHiddenState.isHidden.subscribe((/**
         * @param {?} hide
         * @return {?}
         */
        (hide) => this.onHideScrubBar(hide))));
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
    }
    /**
     * @protected
     * @return {?}
     */
    seekStart() {
        if (this.target.canPlay) {
            this.isSeeking = true;
            if (this.target.state === VgStates.VG_PLAYING) {
                this.wasPlaying = true;
            }
            this.target.pause();
        }
    }
    /**
     * @protected
     * @param {?} offset
     * @return {?}
     */
    seekMove(offset) {
        if (this.isSeeking) {
            /** @type {?} */
            const percentage = Math.max(Math.min((offset * 100) / this.elem.scrollWidth, 99.9), 0);
            this.target.time.current = (percentage * this.target.time.total) / 100;
            this.target.seekTime(percentage, true);
        }
    }
    /**
     * @protected
     * @param {?} offset
     * @return {?}
     */
    seekEnd(offset) {
        this.isSeeking = false;
        if (this.target.canPlay) {
            /** @type {?} */
            const percentage = Math.max(Math.min((offset * 100) / this.elem.scrollWidth, 99.9), 0);
            this.target.seekTime(percentage, true);
            if (this.wasPlaying) {
                this.wasPlaying = false;
                this.target.play();
            }
        }
    }
    /**
     * @protected
     * @return {?}
     */
    touchEnd() {
        this.isSeeking = false;
        if (this.wasPlaying) {
            this.wasPlaying = false;
            this.target.play();
        }
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    getTouchOffset(event) {
        /** @type {?} */
        let offsetLeft = 0;
        /** @type {?} */
        let element = event.target;
        while (element) {
            offsetLeft += element.offsetLeft;
            element = element.offsetParent;
        }
        return event.touches[0].pageX - offsetLeft;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onMouseDownScrubBar($event) {
        if (this.target) {
            if (!this.target.isLive) {
                if (!this.vgSlider) {
                    this.seekEnd($event.offsetX);
                }
                else {
                    this.seekStart();
                }
            }
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onMouseMoveScrubBar($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.seekMove($event.offsetX);
            }
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onMouseUpScrubBar($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.seekEnd($event.offsetX);
            }
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onTouchStartScrubBar($event) {
        if (this.target) {
            if (!this.target.isLive) {
                if (!this.vgSlider) {
                    this.seekEnd(this.getTouchOffset($event));
                }
                else {
                    this.seekStart();
                }
            }
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onTouchMoveScrubBar($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.seekMove(this.getTouchOffset($event));
            }
        }
    }
    // @ts-ignore
    /**
     * @param {?} _$event
     * @return {?}
     */
    onTouchCancelScrubBar(_$event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.touchEnd();
            }
        }
    }
    // @ts-ignore
    /**
     * @param {?} _$event
     * @return {?}
     */
    onTouchEndScrubBar(_$event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.touchEnd();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    arrowAdjustVolume(event) {
        if (this.target) {
            if (event.keyCode === 38 || event.keyCode === 39) {
                event.preventDefault();
                this.target.seekTime((this.target.time.current + 5000) / 1000, false);
            }
            else if (event.keyCode === 37 || event.keyCode === 40) {
                event.preventDefault();
                this.target.seekTime((this.target.time.current - 5000) / 1000, false);
            }
        }
    }
    /**
     * @return {?}
     */
    getPercentage() {
        return this.target
            ? Math.round((this.target.time.current * 100) / this.target.time.total) + '%'
            : '0%';
    }
    /**
     * @param {?} hide
     * @return {?}
     */
    onHideScrubBar(hide) {
        this.hideScrubBar = hide;
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
VgScrubBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'vg-scrub-bar',
                encapsulation: ViewEncapsulation.None,
                template: `
    <div
      class="scrubBar"
      tabindex="0"
      role="slider"
      aria-label="scrub bar"
      aria-level="polite"
      [attr.aria-valuenow]="getPercentage()"
      aria-valuemin="0"
      aria-valuemax="100"
      [attr.aria-valuetext]="getPercentage()"
    >
      <ng-content></ng-content>
    </div>
  `,
                styles: [`
      vg-scrub-bar {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        position: absolute;
        width: 100%;
        height: 5px;
        bottom: 50px;
        margin: 0;
        cursor: pointer;
        align-items: center;
        background: rgba(0, 0, 0, 0.75);
        z-index: 250;
        -webkit-transition: bottom 1s, opacity 0.5s;
        -khtml-transition: bottom 1s, opacity 0.5s;
        -moz-transition: bottom 1s, opacity 0.5s;
        -ms-transition: bottom 1s, opacity 0.5s;
        transition: bottom 1s, opacity 0.5s;
      }
      vg-scrub-bar .scrubBar {
        position: relative;
        display: flex;
        flex-grow: 1;
        align-items: center;
        height: 100%;
      }
      vg-controls vg-scrub-bar {
        position: relative;
        bottom: 0;
        background: transparent;
        height: 50px;
        flex-grow: 1;
        flex-basis: 0;
        margin: 0 10px;
        -webkit-transition: initial;
        -khtml-transition: initial;
        -moz-transition: initial;
        -ms-transition: initial;
        transition: initial;
      }
      vg-scrub-bar.hide {
        bottom: 0;
        opacity: 0;
      }
      vg-controls vg-scrub-bar.hide {
        bottom: initial;
        opacity: initial;
      }
    `]
            }] }
];
/** @nocollapse */
VgScrubBarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: VgApiService },
    { type: VgControlsHiddenService }
];
VgScrubBarComponent.propDecorators = {
    hideScrubBar: [{ type: HostBinding, args: ['class.hide',] }],
    vgFor: [{ type: Input }],
    vgSlider: [{ type: Input }],
    onMouseDownScrubBar: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
    onMouseMoveScrubBar: [{ type: HostListener, args: ['document:mousemove', ['$event'],] }],
    onMouseUpScrubBar: [{ type: HostListener, args: ['document:mouseup', ['$event'],] }],
    onTouchStartScrubBar: [{ type: HostListener, args: ['touchstart', ['$event'],] }],
    onTouchMoveScrubBar: [{ type: HostListener, args: ['document:touchmove', ['$event'],] }],
    onTouchCancelScrubBar: [{ type: HostListener, args: ['document:touchcancel', ['$event'],] }],
    onTouchEndScrubBar: [{ type: HostListener, args: ['document:touchend', ['$event'],] }],
    arrowAdjustVolume: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    VgScrubBarComponent.prototype.hideScrubBar;
    /** @type {?} */
    VgScrubBarComponent.prototype.vgFor;
    /** @type {?} */
    VgScrubBarComponent.prototype.vgSlider;
    /** @type {?} */
    VgScrubBarComponent.prototype.elem;
    /** @type {?} */
    VgScrubBarComponent.prototype.target;
    /** @type {?} */
    VgScrubBarComponent.prototype.isSeeking;
    /** @type {?} */
    VgScrubBarComponent.prototype.wasPlaying;
    /** @type {?} */
    VgScrubBarComponent.prototype.subscriptions;
    /** @type {?} */
    VgScrubBarComponent.prototype.API;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-quality-selector/vg-quality-selector.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgQualitySelectorComponent {
    /**
     * @param {?} ref
     * @param {?} API
     */
    constructor(ref, API) {
        this.API = API;
        this.onBitrateChange = new EventEmitter();
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.bitrates.currentValue && changes.bitrates.currentValue.length) {
            this.bitrates.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => (item.label =
                item.label || Math.round(item.bitrate / 1000).toString())));
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    selectBitrate(index) {
        this.bitrateSelected = this.bitrates[index];
        this.onBitrateChange.emit(this.bitrates[index]);
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
VgQualitySelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'vg-quality-selector',
                encapsulation: ViewEncapsulation.None,
                template: `
    <div class="container">
      <div class="quality-selected" [class.vg-icon-hd]="!bitrateSelected">
        {{ bitrateSelected?.label }}
      </div>
      <select
        class="quality-selector"
        (change)="selectBitrate($event.target.value)"
        tabindex="0"
        aria-label="quality selector"
        [attr.aria-valuetext]="ariaValue"
      >
        <option
          *ngFor="let bitrate of bitrates"
          [value]="bitrate.qualityIndex"
          [selected]="bitrate.qualityIndex === bitrateSelected?.qualityIndex"
        >
          {{ bitrate.label }}
        </option>
      </select>
    </div>
  `,
                styles: [`
      vg-quality-selector {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: flex;
        justify-content: center;
        width: 50px;
        height: 50px;
        cursor: pointer;
        color: white;
        line-height: 50px;
      }
      vg-quality-selector .container {
        position: relative;
        display: flex;
        flex-grow: 1;
        align-items: center;
        padding: 0;
        margin: 5px;
      }
      vg-quality-selector select.quality-selector {
        width: 50px;
        padding: 5px 8px;
        border: none;
        background: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        color: transparent;
        font-size: 16px;
      }
      vg-quality-selector select.quality-selector::-ms-expand {
        display: none;
      }
      vg-quality-selector select.quality-selector option {
        color: #000;
      }
      vg-quality-selector .quality-selected {
        position: absolute;
        width: 100%;
        height: 50px;
        top: -6px;
        text-align: center;
        text-transform: uppercase;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        padding-top: 2px;
        pointer-events: none;
      }
      vg-quality-selector .vg-icon-closed_caption:before {
        width: 100%;
      }
    `]
            }] }
];
/** @nocollapse */
VgQualitySelectorComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: VgApiService }
];
VgQualitySelectorComponent.propDecorators = {
    bitrates: [{ type: Input }],
    onBitrateChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    VgQualitySelectorComponent.prototype.bitrates;
    /** @type {?} */
    VgQualitySelectorComponent.prototype.onBitrateChange;
    /** @type {?} */
    VgQualitySelectorComponent.prototype.bitrateSelected;
    /** @type {?} */
    VgQualitySelectorComponent.prototype.elem;
    /** @type {?} */
    VgQualitySelectorComponent.prototype.target;
    /** @type {?} */
    VgQualitySelectorComponent.prototype.subscriptions;
    /** @type {?} */
    VgQualitySelectorComponent.prototype.ariaValue;
    /** @type {?} */
    VgQualitySelectorComponent.prototype.API;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-playback-button/vg-playback-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgPlaybackButtonComponent {
    /**
     * @param {?} ref
     * @param {?} API
     * @param {?} cdr
     */
    constructor(ref, API, cdr) {
        this.API = API;
        this.cdr = cdr;
        this.subscriptions = [];
        this.ariaValue = 1;
        this.elem = ref.nativeElement;
        this.playbackValues = ['0.5', '1.0', '1.5', '2.0'];
        this.playbackIndex = 1;
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
    }
    /**
     * @return {?}
     */
    onClick() {
        this.updatePlaybackSpeed();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.updatePlaybackSpeed();
        }
    }
    /**
     * @return {?}
     */
    updatePlaybackSpeed() {
        this.playbackIndex = ++this.playbackIndex % this.playbackValues.length;
        if (this.target instanceof VgApiService) {
            this.target.playbackRate = this.playbackValues[this.playbackIndex];
        }
        else {
            this.target.playbackRate[this.vgFor] = this.playbackValues[this.playbackIndex];
        }
        this.detectChanges();
    }
    /**
     * @return {?}
     */
    getPlaybackRate() {
        this.ariaValue = this.target ? this.target.playbackRate : 1.0;
        return this.ariaValue;
    }
    /**
     * @return {?}
     */
    detectChanges() {
        try {
            this.cdr.detectChanges();
        }
        catch (e) {
            console.warn(e);
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
VgPlaybackButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'vg-playback-button',
                encapsulation: ViewEncapsulation.None,
                template: ` <span
    class="button"
    tabindex="0"
    role="button"
    aria-label="playback speed button"
    [attr.aria-valuetext]="ariaValue"
  >
    {{ getPlaybackRate() }}x
  </span>`,
                styles: [`
      vg-playback-button {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
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
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      }
      vg-playback-button .button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
      }
    `]
            }] }
];
/** @nocollapse */
VgPlaybackButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: VgApiService },
    { type: ChangeDetectorRef }
];
VgPlaybackButtonComponent.propDecorators = {
    vgFor: [{ type: Input }],
    playbackValues: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    VgPlaybackButtonComponent.prototype.vgFor;
    /** @type {?} */
    VgPlaybackButtonComponent.prototype.elem;
    /** @type {?} */
    VgPlaybackButtonComponent.prototype.target;
    /** @type {?} */
    VgPlaybackButtonComponent.prototype.playbackValues;
    /** @type {?} */
    VgPlaybackButtonComponent.prototype.playbackIndex;
    /** @type {?} */
    VgPlaybackButtonComponent.prototype.subscriptions;
    /** @type {?} */
    VgPlaybackButtonComponent.prototype.ariaValue;
    /** @type {?} */
    VgPlaybackButtonComponent.prototype.API;
    /** @type {?} */
    VgPlaybackButtonComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-play-pause/vg-play-pause.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgPlayPauseComponent {
    /**
     * @param {?} ref
     * @param {?} API
     */
    constructor(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.ariaValue = VgStates.VG_PAUSED;
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
    }
    /**
     * @return {?}
     */
    onClick() {
        this.playPause();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.playPause();
        }
    }
    /**
     * @return {?}
     */
    playPause() {
        /** @type {?} */
        const state = this.getState();
        switch (state) {
            case VgStates.VG_PLAYING:
                this.target.pause();
                break;
            case VgStates.VG_PAUSED:
            case VgStates.VG_ENDED:
                this.target.play();
                break;
        }
    }
    /**
     * @return {?}
     */
    getState() {
        this.ariaValue = this.target ? this.target.state : VgStates.VG_PAUSED;
        return this.ariaValue;
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
VgPlayPauseComponent.decorators = [
    { type: Component, args: [{
                selector: 'vg-play-pause',
                encapsulation: ViewEncapsulation.None,
                template: ` <div
    class="icon"
    [class.vg-icon-pause]="getState() === 'playing'"
    [class.vg-icon-play_arrow]="
      getState() === 'paused' || getState() === 'ended'
    "
    tabindex="0"
    role="button"
    [attr.aria-label]="getState() === 'paused' ? 'play' : 'pause'"
    [attr.aria-valuetext]="ariaValue"
  ></div>`,
                styles: [`
      vg-play-pause {
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
      vg-play-pause .icon {
        pointer-events: none;
      }
    `]
            }] }
];
/** @nocollapse */
VgPlayPauseComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: VgApiService }
];
VgPlayPauseComponent.propDecorators = {
    vgFor: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    VgPlayPauseComponent.prototype.vgFor;
    /** @type {?} */
    VgPlayPauseComponent.prototype.elem;
    /** @type {?} */
    VgPlayPauseComponent.prototype.target;
    /** @type {?} */
    VgPlayPauseComponent.prototype.subscriptions;
    /** @type {?} */
    VgPlayPauseComponent.prototype.ariaValue;
    /** @type {?} */
    VgPlayPauseComponent.prototype.API;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-mute/vg-mute.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgMuteComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-fullscreen/vg-fullscreen.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgFullscreenComponent {
    /**
     * @param {?} ref
     * @param {?} API
     * @param {?} fsAPI
     */
    constructor(ref, API, fsAPI) {
        this.API = API;
        this.fsAPI = fsAPI;
        this.isFullscreen = false;
        this.subscriptions = [];
        this.ariaValue = 'normal mode';
        this.elem = ref.nativeElement;
        this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
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
    }
    /**
     * @param {?} fsState
     * @return {?}
     */
    onChangeFullscreen(fsState) {
        this.ariaValue = fsState ? 'fullscreen mode' : 'normal mode';
        this.isFullscreen = fsState;
    }
    /**
     * @return {?}
     */
    onClick() {
        this.changeFullscreenState();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.changeFullscreenState();
        }
    }
    /**
     * @return {?}
     */
    changeFullscreenState() {
        /** @type {?} */
        let element = this.target;
        if (this.target instanceof VgApiService) {
            element = null;
        }
        this.fsAPI.toggleFullscreen(element);
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
VgFullscreenComponent.decorators = [
    { type: Component, args: [{
                selector: 'vg-fullscreen',
                encapsulation: ViewEncapsulation.None,
                template: ` <div
    class="icon"
    [class.vg-icon-fullscreen]="!isFullscreen"
    [class.vg-icon-fullscreen_exit]="isFullscreen"
    tabindex="0"
    role="button"
    aria-label="fullscreen button"
    [attr.aria-valuetext]="ariaValue"
  ></div>`,
                styles: [`
      vg-fullscreen {
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
      vg-fullscreen .icon {
        pointer-events: none;
      }
    `]
            }] }
];
/** @nocollapse */
VgFullscreenComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: VgApiService },
    { type: VgFullscreenApiService }
];
VgFullscreenComponent.propDecorators = {
    onClick: [{ type: HostListener, args: ['click',] }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    VgFullscreenComponent.prototype.elem;
    /** @type {?} */
    VgFullscreenComponent.prototype.vgFor;
    /** @type {?} */
    VgFullscreenComponent.prototype.target;
    /** @type {?} */
    VgFullscreenComponent.prototype.isFullscreen;
    /** @type {?} */
    VgFullscreenComponent.prototype.subscriptions;
    /** @type {?} */
    VgFullscreenComponent.prototype.ariaValue;
    /** @type {?} */
    VgFullscreenComponent.prototype.API;
    /** @type {?} */
    VgFullscreenComponent.prototype.fsAPI;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-scrub-bar/vg-scrub-bar-buffering-time/vg-scrub-bar-buffering-time.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgScrubBarBufferingTimeComponent {
    /**
     * @param {?} ref
     * @param {?} API
     */
    constructor(ref, API) {
        this.API = API;
        this.subscriptions = [];
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
    }
    /**
     * @return {?}
     */
    getBufferTime() {
        /** @type {?} */
        let bufferTime = '0%';
        if (this.target && this.target.buffer && this.target.buffered.length) {
            if (this.target.time.total === 0) {
                bufferTime = '0%';
            }
            else {
                bufferTime =
                    (this.target.buffer.end / this.target.time.total) * 100 + '%';
            }
        }
        return bufferTime;
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
VgScrubBarBufferingTimeComponent.decorators = [
    { type: Component, args: [{
                selector: 'vg-scrub-bar-buffering-time',
                encapsulation: ViewEncapsulation.None,
                template: `<div class="background" [style.width]="getBufferTime()"></div>`,
                styles: [`
      vg-scrub-bar-buffering-time {
        display: flex;
        width: 100%;
        height: 5px;
        pointer-events: none;
        position: absolute;
      }
      vg-scrub-bar-buffering-time .background {
        background-color: rgba(255, 255, 255, 0.3);
      }
      vg-controls vg-scrub-bar-buffering-time {
        position: absolute;
        top: calc(50% - 3px);
      }
      vg-controls vg-scrub-bar-buffering-time .background {
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
      }
    `]
            }] }
];
/** @nocollapse */
VgScrubBarBufferingTimeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: VgApiService }
];
VgScrubBarBufferingTimeComponent.propDecorators = {
    vgFor: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VgScrubBarBufferingTimeComponent.prototype.vgFor;
    /** @type {?} */
    VgScrubBarBufferingTimeComponent.prototype.elem;
    /** @type {?} */
    VgScrubBarBufferingTimeComponent.prototype.target;
    /** @type {?} */
    VgScrubBarBufferingTimeComponent.prototype.subscriptions;
    /** @type {?} */
    VgScrubBarBufferingTimeComponent.prototype.API;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-scrub-bar/vg-scrub-bar-cue-points/vg-scrub-bar-cue-points.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable-next-line: no-conflicting-lifecycle
class VgScrubBarCuePointsComponent {
    /**
     * @param {?} ref
     * @param {?} API
     */
    constructor(ref, API) {
        this.API = API;
        this.onLoadedMetadataCalled = false;
        this.cuePoints = [];
        this.subscriptions = [];
        this.totalCues = 0;
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
        /** @type {?} */
        const onTimeUpdate = this.target.subscriptions.loadedMetadata;
        this.subscriptions.push(onTimeUpdate.subscribe(this.onLoadedMetadata.bind(this)));
        if (this.onLoadedMetadataCalled) {
            this.onLoadedMetadata();
        }
    }
    /**
     * @return {?}
     */
    onLoadedMetadata() {
        if (this.vgCuePoints) {
            // We need to transform the TextTrackCueList to Array or it doesn't work on IE11/Edge.
            // See: https://github.com/videogular/videogular2/issues/369
            this.cuePoints = [];
            for (let i = 0, l = this.vgCuePoints.length; i < l; i++) {
                /** @type {?} */
                const end = this.vgCuePoints[i].endTime >= 0
                    ? this.vgCuePoints[i].endTime
                    : this.vgCuePoints[i].startTime + 1;
                /** @type {?} */
                const cuePointDuration = (end - this.vgCuePoints[i].startTime) * 1000;
                /** @type {?} */
                let position = '0';
                /** @type {?} */
                let percentWidth = '0';
                if (typeof cuePointDuration === 'number' && this.target.time.total) {
                    percentWidth =
                        (cuePointDuration * 100) / this.target.time.total + '%';
                    position =
                        (this.vgCuePoints[i].startTime * 100) /
                            Math.round(this.target.time.total / 1000) +
                            '%';
                }
                ((/** @type {?} */ (this.vgCuePoints[i]))).$$style = {
                    width: percentWidth,
                    left: position,
                };
                this.cuePoints.push(this.vgCuePoints[i]);
            }
        }
    }
    /**
     * @return {?}
     */
    updateCuePoints() {
        if (!this.target) {
            this.onLoadedMetadataCalled = true;
            return;
        }
        this.onLoadedMetadata();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.vgCuePoints.currentValue) {
            this.updateCuePoints();
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.vgCuePoints) {
            /** @type {?} */
            const changes = this.totalCues !== this.vgCuePoints.length;
            if (changes) {
                this.totalCues = this.vgCuePoints.length;
                this.updateCuePoints();
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
VgScrubBarCuePointsComponent.decorators = [
    { type: Component, args: [{
                selector: 'vg-scrub-bar-cue-points',
                encapsulation: ViewEncapsulation.None,
                template: `
    <div class="cue-point-container">
      <span
        *ngFor="let cp of cuePoints"
        [style.width]="cp.$$style?.width"
        [style.left]="cp.$$style?.left"
        class="cue-point"
      ></span>
    </div>
  `,
                styles: [`
      vg-scrub-bar-cue-points {
        display: flex;
        width: 100%;
        height: 5px;
        pointer-events: none;
        position: absolute;
      }
      vg-scrub-bar-cue-points .cue-point-container .cue-point {
        position: absolute;
        height: 5px;
        background-color: rgba(255, 204, 0, 0.7);
      }
      vg-controls vg-scrub-bar-cue-points {
        position: absolute;
        top: calc(50% - 3px);
      }
    `]
            }] }
];
/** @nocollapse */
VgScrubBarCuePointsComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: VgApiService }
];
VgScrubBarCuePointsComponent.propDecorators = {
    vgCuePoints: [{ type: Input }],
    vgFor: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VgScrubBarCuePointsComponent.prototype.vgCuePoints;
    /** @type {?} */
    VgScrubBarCuePointsComponent.prototype.vgFor;
    /** @type {?} */
    VgScrubBarCuePointsComponent.prototype.elem;
    /** @type {?} */
    VgScrubBarCuePointsComponent.prototype.target;
    /** @type {?} */
    VgScrubBarCuePointsComponent.prototype.onLoadedMetadataCalled;
    /** @type {?} */
    VgScrubBarCuePointsComponent.prototype.cuePoints;
    /** @type {?} */
    VgScrubBarCuePointsComponent.prototype.subscriptions;
    /** @type {?} */
    VgScrubBarCuePointsComponent.prototype.totalCues;
    /** @type {?} */
    VgScrubBarCuePointsComponent.prototype.API;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-scrub-bar/vg-scrub-bar-current-time/vg-scrub-bar-current-time.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgScrubBarCurrentTimeComponent {
    /**
     * @param {?} ref
     * @param {?} API
     */
    constructor(ref, API) {
        this.API = API;
        this.vgSlider = false;
        this.subscriptions = [];
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
    }
    /**
     * @return {?}
     */
    getPercentage() {
        return this.target
            ? Math.round((this.target.time.current * 100) / this.target.time.total) +
                '%'
            : '0%';
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
VgScrubBarCurrentTimeComponent.decorators = [
    { type: Component, args: [{
                selector: 'vg-scrub-bar-current-time',
                encapsulation: ViewEncapsulation.None,
                template: `<div class="background" [style.width]="getPercentage()"></div>
    <span class="slider" *ngIf="vgSlider"></span>`,
                styles: [`
      vg-scrub-bar-current-time {
        display: flex;
        width: 100%;
        height: 5px;
        pointer-events: none;
        position: absolute;
      }
      vg-scrub-bar-current-time .background {
        background-color: white;
      }
      vg-controls vg-scrub-bar-current-time {
        position: absolute;
        top: calc(50% - 3px);
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
      }
      vg-controls vg-scrub-bar-current-time .background {
        border: 1px solid white;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
      }
      vg-scrub-bar-current-time .slider {
        background: white;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        box-shadow: 0px 0px 10px black;
        margin-top: -5px;
        margin-left: -10px;
      }
    `]
            }] }
];
/** @nocollapse */
VgScrubBarCurrentTimeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: VgApiService }
];
VgScrubBarCurrentTimeComponent.propDecorators = {
    vgFor: [{ type: Input }],
    vgSlider: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VgScrubBarCurrentTimeComponent.prototype.vgFor;
    /** @type {?} */
    VgScrubBarCurrentTimeComponent.prototype.vgSlider;
    /** @type {?} */
    VgScrubBarCurrentTimeComponent.prototype.elem;
    /** @type {?} */
    VgScrubBarCurrentTimeComponent.prototype.target;
    /** @type {?} */
    VgScrubBarCurrentTimeComponent.prototype.subscriptions;
    /** @type {?} */
    VgScrubBarCurrentTimeComponent.prototype.API;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/controls.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [
    VgControlsComponent,
    VgVolumeComponent,
    VgTrackSelectorComponent,
    VgTimeDisplayComponent,
    VgScrubBarComponent,
    VgQualitySelectorComponent,
    VgPlaybackButtonComponent,
    VgPlayPauseComponent,
    VgMuteComponent,
    VgFullscreenComponent,
    VgUtcPipe,
    VgScrubBarBufferingTimeComponent,
    VgScrubBarCuePointsComponent,
    VgScrubBarCurrentTimeComponent
];
class VgControlsModule {
}
VgControlsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, VgCoreModule],
                declarations: [...components],
                exports: [...components],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: videogular-ngx-videogular-controls.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { VgControlsComponent, VgControlsModule, VgFullscreenComponent, VgMuteComponent, VgPlayPauseComponent, VgPlaybackButtonComponent, VgQualitySelectorComponent, VgScrubBarBufferingTimeComponent, VgScrubBarComponent, VgScrubBarCuePointsComponent, VgScrubBarCurrentTimeComponent, VgTimeDisplayComponent, VgTrackSelectorComponent, VgUtcPipe, VgVolumeComponent };
//# sourceMappingURL=videogular-ngx-videogular-controls.js.map
