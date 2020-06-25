import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgOverlayPlayComponent } from './vg-overlay-play.component';
import { CoreModule } from '@videogular/ngx-videogular/core';

@NgModule({
  imports: [CommonModule, CoreModule],
  declarations: [VgOverlayPlayComponent],
  exports: [VgOverlayPlayComponent],
})
export class OverlayPlayModule {}
