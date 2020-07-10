import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgImaAdsComponent } from './vg-ima-ads.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';

@NgModule({
  imports: [CommonModule, VgCoreModule],
  declarations: [VgImaAdsComponent],
  exports: [VgImaAdsComponent],
})
export class VgImaAdsModule {}
