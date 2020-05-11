import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgBufferingComponent } from './vg-buffering.component';

@NgModule({
  declarations: [VgBufferingComponent],
  imports: [
    CommonModule
  ],
  exports: [VgBufferingComponent]
})
export class VgBufferingModule { }
