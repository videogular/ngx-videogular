import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgDashDirective } from './vg-dash.directive';

@NgModule({
  declarations: [VgDashDirective],
  exports: [VgDashDirective],
  imports: [CommonModule]
})
export class VgDashModule {}
