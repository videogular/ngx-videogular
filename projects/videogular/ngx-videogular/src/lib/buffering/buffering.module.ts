import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgBuffering } from './vg-buffering/vg-buffering.component';

@NgModule({
  declarations: [VgBuffering],
  imports: [CommonModule],
  exports: [VgBuffering],
})
export class BufferingModule {}
