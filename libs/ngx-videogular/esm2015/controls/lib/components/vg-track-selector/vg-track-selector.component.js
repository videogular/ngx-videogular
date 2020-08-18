/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-track-selector/vg-track-selector.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewEncapsulation, } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';
/**
 * @record
 */
export function Option() { }
if (false) {
    /** @type {?} */
    Option.prototype.id;
    /** @type {?} */
    Option.prototype.label;
    /** @type {?} */
    Option.prototype.selected;
}
export class VgTrackSelectorComponent {
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
//# sourceMappingURL=vg-track-selector.component.js.map