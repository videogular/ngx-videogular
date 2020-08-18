/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/vg-cue-points/vg-cue-points.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter, ElementRef, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { VgEvents } from '../../services/events/vg-events.service';
export class VgCuePointsDirective {
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
//# sourceMappingURL=vg-cue-points.directive.js.map