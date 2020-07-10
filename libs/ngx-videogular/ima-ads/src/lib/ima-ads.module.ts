import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgImaAds } from './vg-ima-ads.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';

@NgModule({
  imports: [CommonModule, VgCoreModule],
  declarations: [VgImaAds],
  exports: [VgImaAds],
})
export class VgImaAdsModule {}
