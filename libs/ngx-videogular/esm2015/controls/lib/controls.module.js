/**
 * @fileoverview added by tsickle
 * Generated from: lib/controls.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgControlsComponent } from './components/vg-controls/vg-controls.component';
import { VgVolumeComponent } from './components/vg-volume/vg-volume.component';
import { VgTrackSelectorComponent } from './components/vg-track-selector/vg-track-selector.component';
import { VgTimeDisplayComponent, VgUtcPipe } from './components/vg-time-display/vg-time-display.component';
import { VgScrubBarComponent } from './components/vg-scrub-bar/vg-scrub-bar.component';
import { VgQualitySelectorComponent } from './components/vg-quality-selector/vg-quality-selector.component';
import { VgPlaybackButtonComponent } from './components/vg-playback-button/vg-playback-button.component';
import { VgPlayPauseComponent } from './components/vg-play-pause/vg-play-pause.component';
import { VgMuteComponent } from './components/vg-mute/vg-mute.component';
import { VgFullscreenComponent } from './components/vg-fullscreen/vg-fullscreen.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgScrubBarBufferingTimeComponent } from './components/vg-scrub-bar/vg-scrub-bar-buffering-time/vg-scrub-bar-buffering-time.component';
import { VgScrubBarCuePointsComponent } from './components/vg-scrub-bar/vg-scrub-bar-cue-points/vg-scrub-bar-cue-points.component';
import { VgScrubBarCurrentTimeComponent } from './components/vg-scrub-bar/vg-scrub-bar-current-time/vg-scrub-bar-current-time.component';
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
export class VgControlsModule {
}
VgControlsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, VgCoreModule],
                declarations: [...components],
                exports: [...components],
            },] }
];
//# sourceMappingURL=controls.module.js.map