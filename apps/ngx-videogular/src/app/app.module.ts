import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VgCoreModule } from '@videogular/vg-core';
import { VgStreamingModule } from '@videogular/vg-streaming';
import { VgOverlayPlayModule } from '@videogular/vg-overlay-play';
import { VgImaAdsModule } from '@videogular/vg-ima-ads';
import { VgControlsModule } from '@videogular/vg-controls';
import { VgBufferingModule } from '@videogular/vg-buffering';

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
