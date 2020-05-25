import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgOverlayPlayComponent } from './vg-overlay-play.component';
import { VgCoreModule } from '@ngx-videogular/vg-core';

@NgModule({
  imports: [CommonModule, VgCoreModule],
  declarations: [VgOverlayPlayComponent],
  exports: [VgOverlayPlayComponent],
})
export class VgOverlayPlayModule {}
