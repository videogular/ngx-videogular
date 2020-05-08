import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgMediaDirective } from './vg-media.directive';

@NgModule({
  declarations: [VgMediaDirective],
  exports: [VgMediaDirective],
  imports: [CommonModule]
})
export class VgMediaModule {}
