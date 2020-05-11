import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgImaAdsModule } from './vg-ima-ads/vg-ima-ads.module';
import { VgControlsModule } from './vg-controls/vg-controls.module';

@NgModule({
  exports: [VgImaAdsModule, VgControlsModule],
  imports: [
    VgImaAdsModule,
    VgControlsModule,
    CommonModule,
  ]
})
export class UiModule {}
