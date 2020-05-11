import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgPlayerComponent } from './vg-player.component';

@NgModule({
  imports: [CommonModule],
  declarations: [VgPlayerComponent],
  exports: [VgPlayerComponent],
})
export class VgPlayerModule {}
