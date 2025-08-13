import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { IPlayable, VgApiService } from '@videogular/ngx-videogular/core';

@Component({
    selector: 'vg-buffering',
    encapsulation: ViewEncapsulation.None,
    template: `<div class="vg-buffering">
    <div class="bufferingContainer">
      <div class="loadingSpinner"></div>
    </div>
  </div>`,
    styles: [
        `
      vg-buffering {
        display: none;
        z-index: 201;
      }
      vg-buffering.is-buffering {
        display: block;
      }

      .vg-buffering {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
      }
      .vg-buffering .bufferingContainer {
        width: 100%;
        position: absolute;
        cursor: pointer;
        top: 50%;
        margin-top: -50px;
        zoom: 1;
        filter: alpha(opacity=60);
        opacity: 0.6;
      }
      /* Loading Spinner
        * http://www.alessioatzeni.com/blog/css3-loading-animation-loop/
        */
      .vg-buffering .loadingSpinner {
        background-color: rgba(0, 0, 0, 0);
        border: 5px solid rgba(255, 255, 255, 1);
        opacity: 0.9;
        border-top: 5px solid rgba(0, 0, 0, 0);
        border-left: 5px solid rgba(0, 0, 0, 0);
        border-radius: 50px;
        box-shadow: 0 0 35px #ffffff;
        width: 50px;
        height: 50px;
        margin: 0 auto;
        -moz-animation: spin 0.5s infinite linear;
        -webkit-animation: spin 0.5s infinite linear;
      }
      .vg-buffering .loadingSpinner .stop {
        -webkit-animation-play-state: paused;
        -moz-animation-play-state: paused;
      }
      @-moz-keyframes spin {
        0% {
          -moz-transform: rotate(0deg);
        }
        100% {
          -moz-transform: rotate(360deg);
        }
      }
      @-moz-keyframes spinoff {
        0% {
          -moz-transform: rotate(0deg);
        }
        100% {
          -moz-transform: rotate(-360deg);
        }
      }
      @-webkit-keyframes spin {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      @-webkit-keyframes spinoff {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(-360deg);
        }
      }
    `,
    ],
    standalone: false
})
export class VgBufferingComponent implements OnInit, OnDestroy {
  @Input() vgFor: string;

  elem: HTMLElement;
  target: IPlayable;
  checkInterval = 50;
  currentPlayPos = 0;
  lastPlayPos = 0;

  subscriptions: Subscription[] = [];

  @HostBinding('class.is-buffering') isBuffering = false;

  constructor(ref: ElementRef, public API: VgApiService) {
    this.elem = ref.nativeElement;
  }

  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(
        this.API.playerReadyEvent.subscribe(() => this.onPlayerReady())
      );
    }
  }

  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);

    this.subscriptions.push(
      this.target.subscriptions.bufferDetected.subscribe((isBuffering) =>
        this.onUpdateBuffer(isBuffering)
      )
    );
  }

  onUpdateBuffer(isBuffering) {
    this.isBuffering = isBuffering;
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
