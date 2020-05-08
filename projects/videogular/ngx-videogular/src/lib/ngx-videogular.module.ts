import { NgModule } from '@angular/core';
import { StreamingModule } from './streaming/streaming.module';
import { OverlayPlayModule } from './overlay-play/overlay-play.module';
import { ImaAdsModule } from './ima-ads/ima-ads.module';
import { CoreModule } from './core/core.module';
import { ControlsModule } from './controls/controls.module';
import { BufferingModule } from './buffering/buffering.module';

@NgModule({
  declarations: [],
  imports: [
    StreamingModule,
    OverlayPlayModule,
    ImaAdsModule,
    CoreModule,
    ControlsModule,
    BufferingModule,
  ],
  exports: [
    StreamingModule,
    OverlayPlayModule,
    ImaAdsModule,
    CoreModule,
    ControlsModule,
    BufferingModule,
  ],
})
export class NgxVideogularModule {}
