import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgImaAdsModule } from './vg-ima-ads/vg-ima-ads.module';
import { VgControlsModule } from './vg-controls/vg-controls.module';
import { VgOverlayPlayModule } from './vg-overlay-play/vg-overlay-play.module';
import { VgBufferingModule } from './vg-buffering/vg-buffering.module';
import { VgPlayerModule } from './vg-player/vg-player.module';

@NgModule({
  exports: [
    VgImaAdsModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgPlayerModule
  ],
  imports: [
    VgImaAdsModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgPlayerModule,
    CommonModule,
  ],
})
export class UiModule {}
