import {
  Directive,
  OnInit,
  OnChanges,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  SimpleChanges,
} from '@angular/core';
import { BitrateOptions } from '../../interfaces/bitrate-options.interface';
import { Subscription } from 'rxjs';
import { IHLSConfig } from '../../interfaces/ihls-config.interface';
import { VgApiService } from '../../services/vg-api/vg-api.service';

declare let Hls: {
  new (arg0: IHLSConfig): any;
  isSupported: () => any;
  Events: { MANIFEST_PARSED: any; LEVEL_LOADED: any };
};

@Directive({
  selector: '[vgHls]',
  exportAs: 'vgHls',
})
export class VgHlsDirective implements OnInit, OnChanges, OnDestroy {
  @Input() vgHls: string;
  @Input() vgHlsHeaders: { [key: string]: string } = {};

  @Output() onGetBitrates: EventEmitter<BitrateOptions[]> = new EventEmitter();

  vgFor: string;
  target: any;
  hls: any;
  preload: boolean;
  crossorigin: string;
  config: IHLSConfig;

  subscriptions: Subscription[] = [];

  constructor(private ref: ElementRef, public API: VgApiService) {}

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
    this.crossorigin = this.ref.nativeElement.getAttribute('crossorigin');
    this.preload = this.ref.nativeElement.getAttribute('preload') !== 'none';
    this.vgFor = this.ref.nativeElement.getAttribute('vgFor');

    if (this.vgFor) {
      this.target = this.API.getMediaById(this.vgFor);
    } else {
      this.target = this.API.getDefaultMedia();
    }

    this.config = {
      autoStartLoad: this.preload,
    } as IHLSConfig;
    // @ts-ignore
    this.config.xhrSetup = (xhr: {
      withCredentials: boolean;
      setRequestHeader: (arg0: string, arg1: string) => void;
    }) => {
      // Send cookies
      if (this.crossorigin === 'use-credentials') {
        xhr.withCredentials = true;
      }
      for (const key of Object.keys(this.vgHlsHeaders)) {
        xhr.setRequestHeader(key, this.vgHlsHeaders[key]);
      }
    };

    this.createPlayer();

    if (!this.preload) {
      this.subscriptions.push(
        this.API.subscriptions.play.subscribe(() => {
          if (this.hls) {
            this.hls.startLoad(0);
          }
        })
      );
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.vgHls?.currentValue) {
      this.createPlayer();
    } else if (changes.vgHlsHeaders && changes.vgHlsHeaders.currentValue) {
      // Do nothing. We don't want to create a or destroy a player if the headers change.
    } else {
      this.destroyPlayer();
    }
  }

  createPlayer() {
    if (this.hls) {
      this.destroyPlayer();
    }

    // It's a HLS source
    if (
      this.vgHls &&
      this.vgHls.indexOf('m3u8') > -1 &&
      Hls.isSupported() &&
      this.API.isPlayerReady
    ) {
      const video: HTMLVideoElement = this.ref.nativeElement;

      this.hls = new Hls(this.config);
      // @ts-ignore
      this.hls.on(
        Hls.Events.MANIFEST_PARSED,
        (_event: any, data: { levels: any[] }) => {
          const videoList = [];

          videoList.push({
            qualityIndex: 0,
            width: 0,
            height: 0,
            bitrate: 0,
            mediaType: 'video',
            label: 'AUTO',
          });

          data.levels.forEach(
            (
              item: { width: any; height: any; bitrate: any; name: any },
              index: number
            ) => {
              videoList.push({
                qualityIndex: ++index,
                width: item.width,
                height: item.height,
                bitrate: item.bitrate,
                mediaType: 'video',
                label: item.name,
              });
            }
          );

          this.onGetBitrates.emit(videoList);
        }
      );
      // @ts-ignore
      this.hls.on(
        Hls.Events.LEVEL_LOADED,
        (_event: any, data: { details: { live: any } }) => {
          this.target.isLive = data.details.live;
        }
      );

      this.hls.loadSource(this.vgHls);
      this.hls.attachMedia(video);
    } else {
      if (this.target && !!this.target.pause) {
        this.target.pause();
        this.target.seekTime(0);
        this.ref.nativeElement.src = this.vgHls;
      }
    }
  }

  setBitrate(bitrate: BitrateOptions) {
    if (this.hls) {
      this.hls.nextLevel = bitrate.qualityIndex - 1;
    }
  }

  destroyPlayer() {
    if (this.hls) {
      this.hls.destroy();
      this.hls = null;
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
    this.destroyPlayer();
    delete this.hls;
  }
}
