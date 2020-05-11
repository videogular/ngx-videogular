import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgScrubBarComponent } from './vg-scrub-bar.component';
import { VgScrubBarCurrentTimeComponent } from './vg-scrub-bar-current-time/vg-scrub-bar-current-time.component';
import { VgScrubBarCuePointsComponent } from './vg-scrub-bar-cue-points/vg-scrub-bar-cue-points.component';
import { VgScrubBarBufferingTimeComponent } from './vg-scrub-bar-buffering-time/vg-scrub-bar-buffering-time.component';

@NgModule({
  declarations: [
    VgScrubBarComponent,
    VgScrubBarCurrentTimeComponent,
    VgScrubBarCuePointsComponent,
    VgScrubBarBufferingTimeComponent,
  ],
  imports: [CommonModule],
  exports: [
    VgScrubBarComponent,
    VgScrubBarCurrentTimeComponent,
    VgScrubBarCuePointsComponent,
    VgScrubBarBufferingTimeComponent,
  ],
})
export class VgScrubBarModule {}
