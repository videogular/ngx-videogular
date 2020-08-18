/**
 * @fileoverview added by tsickle
 * Generated from: lib/core.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgApiService } from './services/vg-api/vg-api.service';
import { VgControlsHiddenService } from './services/vg-controls-hidden/vg-controls-hidden.service';
import { VgFullscreenApiService } from './services/vg-fullscreen-api/vg-fullscreen-api.service';
import { VgUtilsService } from './services/vg-utils/vg-utils.service';
import { VgEvents } from './services/events/vg-events.service';
import { VgStates } from './services/states/vg-states.service';
import { VgCuePointsDirective } from './directives/vg-cue-points/vg-cue-points.directive';
import { VgMediaDirective } from './directives/vg-media/vg-media.directive';
import { VgPlayerComponent } from './components/vg-player/vg-player.component';
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
export class VgCoreModule {
}
VgCoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [...services],
                declarations: [...directives, VgPlayerComponent],
                exports: [...directives, VgPlayerComponent]
            },] }
];
//# sourceMappingURL=core.module.js.map