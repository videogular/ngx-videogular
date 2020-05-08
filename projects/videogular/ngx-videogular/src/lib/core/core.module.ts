import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export * from './events/vg-events.service';
export * from './states/vg-states.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
