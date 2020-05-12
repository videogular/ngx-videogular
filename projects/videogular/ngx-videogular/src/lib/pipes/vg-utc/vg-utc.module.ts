import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgUtcPipe } from './vg-utc.pipe';

@NgModule({
  declarations: [VgUtcPipe],
  exports: [VgUtcPipe],
  imports: [CommonModule]
})
export class VgUtcModule {}
