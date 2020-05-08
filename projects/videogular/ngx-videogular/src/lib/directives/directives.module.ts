import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgHlsModule } from './vg-hls/vg-hls.module';
import { VgDashModule } from './vg-dash/vg-dash.module';
import { VgCuePointsModule } from './vg-cue-points/vg-cue-points.module';
import { VgMediaModule } from './vg-media/vg-media.module';

@NgModule({
  exports: [VgMediaModule, VgHlsModule, VgDashModule, VgCuePointsModule],
  imports: [
    VgMediaModule,
    VgHlsModule,
    VgDashModule,
    VgCuePointsModule,
    CommonModule,
  ]
})
export class DirectivesModule {}
