import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgImaAds } from './vg-ima-ads.component';
import { CoreModule } from '@videogular/ngx-videogular/core';

@NgModule({
  imports: [CommonModule, CoreModule],
  declarations: [VgImaAds],
  exports: [VgImaAds],
})
export class ImaAdsModule {}
