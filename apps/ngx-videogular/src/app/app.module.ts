import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VgCoreModule } from '@ngx-videogular/vg-core';
import { VgStreamingModule } from '@ngx-videogular/vg-streaming';
import { VgOverlayPlayModule } from '@ngx-videogular/vg-overlay-play';
import { VgImaAdsModule } from '@ngx-videogular/vg-ima-ads';
import { VgControlsModule } from '@ngx-videogular/vg-controls';
import { VgBufferingModule } from '@ngx-videogular/vg-buffering';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgStreamingModule,
    VgOverlayPlayModule,
    VgImaAdsModule,
    VgControlsModule,
    VgBufferingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
