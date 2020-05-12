import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgBufferingComponent } from './vg-buffering.component';
import { VgApiService } from '../../services/vg-api/vg-api.service';

@NgModule({
  declarations: [VgBufferingComponent],
  imports: [
    CommonModule
  ],
  exports: [VgBufferingComponent],
  providers: [VgApiService]
})
export class VgBufferingModule { }
