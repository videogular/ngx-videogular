import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgApiService } from './services/vg-api/vg-api.service';
import { VgControlsHiddenService } from './services/vg-controls-hidden/vg-controls-hidden.service';
import { VgFullscreenApiService } from './services/vg-fullscreen-api/vg-fullscreen-api.service';
import { VgUtilsService } from './services/vg-utils/vg-utils.service';
import { DirectivesModule } from './directives/directives.module';

const modules = [
  DirectivesModule,
  CommonModule
];

const services = [
  VgApiService,
  VgControlsHiddenService,
  VgFullscreenApiService,
  VgUtilsService
];

@NgModule({
  providers: [...services],
  imports: [...modules],
  exports: [...modules],
})
export class NgxVideogularModule {}

// for i in media hls dash cue-points; do ng g d "vg-${i}" --flat=false; done