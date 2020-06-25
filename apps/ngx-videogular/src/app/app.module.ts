import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from '@videogular/ngx-videogular/core';
import { StreamingModule } from '@videogular/ngx-videogular/streaming';
import { OverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { ImaAdsModule } from '@videogular/ngx-videogular/ima-ads';
import { ControlsModule } from '@videogular/ngx-videogular/controls';
import { BufferingModule } from '@videogular/ngx-videogular/buffering';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    StreamingModule,
    OverlayPlayModule,
    ImaAdsModule,
    ControlsModule,
    BufferingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
