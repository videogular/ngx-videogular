import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgControlsComponent } from './vg-controls.component';
import { VgVolumeComponent } from './vg-volume/vg-volume.component';
import { VgTrackSelectorComponent } from './vg-track-selector/vg-track-selector.component';
import { VgTimeDisplayComponent } from './vg-time-display/vg-time-display.component';
import { VgScrubBarComponent } from './vg-scrub-bar/vg-scrub-bar.component';
import { VgQualitySelectorComponent } from './vg-quality-selector/vg-quality-selector.component';
import { VgPlaybackButtonComponent } from './vg-playback-button/vg-playback-button.component';
import { VgPlayPauseComponent } from './vg-play-pause/vg-play-pause.component';
import { VgMuteComponent } from './vg-mute/vg-mute.component';
import { VgFullscreenComponent } from './vg-fullscreen/vg-fullscreen.component';

@NgModule({
  declarations: [
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
  ],
  imports: [CommonModule],
  exports: [
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
  ],
})
export class VgControlsModule {}
