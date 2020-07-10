import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgBufferingComponent } from './vg-buffering/vg-buffering.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';

@NgModule({
  imports: [CommonModule, VgCoreModule],
  declarations: [VgBufferingComponent],
  exports: [VgBufferingComponent],
})
export class VgBufferingModule {}
