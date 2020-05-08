import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgHlsDirective } from './vg-hls.directive';

@NgModule({
  declarations: [VgHlsDirective],
  exports: [VgHlsDirective],
  imports: [CommonModule]
})
export class VgHlsModule {}
