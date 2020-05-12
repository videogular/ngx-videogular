import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgUtcModule } from './vg-utc/vg-utc.module';

@NgModule({
  exports: [VgUtcModule],
  imports: [CommonModule, VgUtcModule]
})
export class PipesModule {}
