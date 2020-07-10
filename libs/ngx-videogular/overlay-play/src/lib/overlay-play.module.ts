import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgOverlayPlayComponent } from './vg-overlay-play.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';

@NgModule({
  imports: [CommonModule, VgCoreModule],
  declarations: [VgOverlayPlayComponent],
  exports: [VgOverlayPlayComponent],
})
export class VgOverlayPlayModule {}
