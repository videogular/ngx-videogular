/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-scrub-bar/vg-scrub-bar-cue-points/vg-scrub-bar-cue-points.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewEncapsulation, } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';
// tslint:disable-next-line: no-conflicting-lifecycle
export class VgScrubBarCuePointsComponent {
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
//# sourceMappingURL=vg-scrub-bar-cue-points.component.js.map