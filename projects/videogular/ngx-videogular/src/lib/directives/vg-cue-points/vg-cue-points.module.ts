import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgCuePointsDirective } from './vg-cue-points.directive';

@NgModule({
  declarations: [VgCuePointsDirective],
  exports: [VgCuePointsDirective],
  imports: [CommonModule]
})
export class VgCuePointsModule {}
