import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgApiService } from './services/vg-api/vg-api.service';
import { VgControlsHiddenService } from './services/vg-controls-hidden/vg-controls-hidden.service';
import { VgFullscreenApiService } from './services/vg-fullscreen-api/vg-fullscreen-api.service';
import { VgUtilsService } from './services/vg-utils/vg-utils.service';
import { DirectivesModule } from './directives/directives.module';
import { VgEvents } from './services/vg-events/vg-events.service';
import { VgStates } from './services/vg-states/vg-states.service';
import { UiModule } from './ui/ui.module';

const modules = [DirectivesModule, UiModule, CommonModule];

const services = [
  VgApiService,
  VgControlsHiddenService,
  VgFullscreenApiService,
  VgUtilsService,
  VgEvents,
  VgStates
];

@NgModule({
  providers: [...services],
  imports: [...modules],
  exports: [...modules],
})
export class NgxVideogularModule {}

// for i in ; do ng g c "vg-${i}" --viewEncapsulation=None --inlineTemplate=true --inlineStyle=true; done
// controls volume track-selector time-display scrub-bar quality-selector playback-button play-pause mute fullscreen
