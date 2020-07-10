import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgDashDirective } from './directives/vg-dash/vg-dash.directive';
import { VgHlsDirective } from './directives/vg-hls/vg-hls.directive';
import { VgCoreModule } from '@videogular/ngx-videogular/core';

@NgModule({
  imports: [CommonModule, VgCoreModule],
  declarations: [VgDashDirective, VgHlsDirective],
  exports: [VgDashDirective, VgHlsDirective]
})
export class VgStreamingModule {}
