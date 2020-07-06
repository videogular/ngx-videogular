import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgApiService } from './services/vg-api/vg-api.service';
import { VgControlsHiddenService } from './services/vg-controls-hidden/vg-controls-hidden.service';
import { VgFullscreenApiService } from './services/vg-fullscreen-api/vg-fullscreen-api.service';
import { VgUtilsService } from './services/vg-utils/vg-utils.service';
import { VgEvents } from './services/events/vg-events.service';
import { VgStates } from './services/states/vg-states.service';
import { VgCuePointsDirective } from './directives/vg-cue-points/vg-cue-points.directive';
import { VgMediaDirective } from './directives/vg-media/vg-media.directive';
import { VgPlayerComponent } from './components/vg-player/vg-player.component';

const services = [
  VgApiService,
  VgControlsHiddenService,
  VgFullscreenApiService,
  VgUtilsService,
  VgEvents,
  VgStates
];

const directives = [
  VgCuePointsDirective,
  VgMediaDirective
]

@NgModule({
  imports: [CommonModule],
  providers: [...services],
  declarations: [...directives, VgPlayerComponent],
  exports: [...directives, VgPlayerComponent]
})
export class CoreModule {}
