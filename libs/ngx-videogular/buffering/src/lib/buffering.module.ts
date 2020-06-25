import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgBufferingComponent } from './vg-buffering/vg-buffering.component';
import { CoreModule } from '@videogular/ngx-videogular/core';

@NgModule({
  imports: [CommonModule, CoreModule],
  declarations: [VgBufferingComponent],
  exports: [VgBufferingComponent],
})
export class BufferingModule {}
