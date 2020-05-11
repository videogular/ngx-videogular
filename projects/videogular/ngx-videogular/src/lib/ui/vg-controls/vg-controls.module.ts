import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgControlsComponent } from './vg-controls.component';
import { VgVolumeComponent } from './vg-volume/vg-volume.component';
import { VgTrackSelectorComponent } from './vg-track-selector/vg-track-selector.component';
import { VgTimeDisplayComponent, VgUtcPipe } from './vg-time-display/vg-time-display.component';
import { VgQualitySelectorComponent } from './vg-quality-selector/vg-quality-selector.component';
import { VgPlaybackButtonComponent } from './vg-playback-button/vg-playback-button.component';
import { VgPlayPauseComponent } from './vg-play-pause/vg-play-pause.component';
import { VgMuteComponent } from './vg-mute/vg-mute.component';
import { VgFullscreenComponent } from './vg-fullscreen/vg-fullscreen.component';
import {VgScrubBarModule} from './vg-scrub-bar/vg-scrub-bar.module';

@NgModule({
  declarations: [
    VgControlsComponent,
    VgVolumeComponent,
    VgTrackSelectorComponent,
    VgTimeDisplayComponent,
    VgQualitySelectorComponent,
    VgPlaybackButtonComponent,
    VgPlayPauseComponent,
    VgMuteComponent,
    VgFullscreenComponent,
    VgUtcPipe
  ],
  imports: [CommonModule, VgScrubBarModule],
  exports: [
    VgControlsComponent,
    VgVolumeComponent,
    VgTrackSelectorComponent,
    VgTimeDisplayComponent,
    VgQualitySelectorComponent,
    VgPlaybackButtonComponent,
    VgPlayPauseComponent,
    VgMuteComponent,
    VgFullscreenComponent,
    VgUtcPipe,
    VgScrubBarModule
  ],
})
export class VgControlsModule {}
