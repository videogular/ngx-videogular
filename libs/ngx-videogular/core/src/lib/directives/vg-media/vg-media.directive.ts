import {
  Directive,
  OnInit,
  OnDestroy,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import {
  Observable,
  Subscription,
  Subject,
  fromEvent,
  timer,
  combineLatest,
} from 'rxjs';
import { map } from 'rxjs/operators';
import {
  IPlayable,
  IMediaSubscriptions,
} from '../../interfaces/vg-media-api.interface';
import { IMediaElement } from '../../interfaces/i-media-element.interface';
import { VgApiService } from '../../services/vg-api/vg-api.service';
import { VgStates } from '../../services/states/vg-states.service';
import { VgEvents } from '../../services/events/vg-events.service';

@Directive({
    selector: '[vgMedia]',
    standalone: false
})
export class VgMediaDirective implements OnInit, OnDestroy, IPlayable {
  elem: any;

  @Input() vgMedia: IMediaElement;
  @Input() vgMaster: boolean;

  state: string = VgStates.VG_PAUSED;

  time: any = { current: 0, total: 0, left: 0 };
  buffer: any = { end: 0 };
  track: any;
  subscriptions: IMediaSubscriptions | any;

  canPlay = false;
  canPlayThrough = false;
  isMetadataLoaded = false;
  isWaiting = false;
  isCompleted = false;
  isLive = false;

  isBufferDetected = false;

  checkInterval = 200;
  currentPlayPos = 0;
  lastPlayPos = 0;
  specifiedDuration: number;

  checkBufferSubscription: any;
  syncSubscription: Subscription;
  canPlayAllSubscription: any;
  playAtferSync = false;

  mutationObs: Subscription;
  canPlayObs: Subscription;
  canPlayThroughObs: Subscription;
  loadedMetadataObs: Subscription;
  waitingObs: Subscription;
  progressObs: Subscription;
  endedObs: Subscription;
  playingObs: Subscription;
  playObs: Subscription;
  pauseObs: Subscription;
  timeUpdateObs: Subscription;
  volumeChangeObs: Subscription;
  errorObs: Subscription;

  bufferDetected: Subject<boolean> = new Subject();

  playPromise: Promise<any>;

  constructor(private api: VgApiService, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    if (this.vgMedia.nodeName) {
      // It's a native element
      this.elem = this.vgMedia;
    } else {
      // It's an Angular Class
      this.elem = this.vgMedia.elem;
    }

    // Just in case we're creating this vgMedia dynamically register again into API
    this.api.registerMedia(this);

    this.subscriptions = {
      // Native events
      abort: fromEvent(this.elem as any, VgEvents.VG_ABORT),
      canPlay: fromEvent(this.elem as any, VgEvents.VG_CAN_PLAY),
      canPlayThrough: fromEvent(this.elem as any, VgEvents.VG_CAN_PLAY_THROUGH),
      durationChange: fromEvent(this.elem as any, VgEvents.VG_DURATION_CHANGE),
      emptied: fromEvent(this.elem as any, VgEvents.VG_EMPTIED),
      encrypted: fromEvent(this.elem as any, VgEvents.VG_ENCRYPTED),
      ended: fromEvent(this.elem as any, VgEvents.VG_ENDED),
      error: fromEvent(this.elem as any, VgEvents.VG_ERROR),
      loadedData: fromEvent(this.elem as any, VgEvents.VG_LOADED_DATA),
      loadedMetadata: fromEvent(this.elem as any, VgEvents.VG_LOADED_METADATA),
      loadStart: fromEvent(this.elem as any, VgEvents.VG_LOAD_START),
      pause: fromEvent(this.elem as any, VgEvents.VG_PAUSE),
      play: fromEvent(this.elem as any, VgEvents.VG_PLAY),
      playing: fromEvent(this.elem as any, VgEvents.VG_PLAYING),
      progress: fromEvent(this.elem as any, VgEvents.VG_PROGRESS),
      rateChange: fromEvent(this.elem as any, VgEvents.VG_RATE_CHANGE),
      seeked: fromEvent(this.elem as any, VgEvents.VG_SEEKED),
      seeking: fromEvent(this.elem as any, VgEvents.VG_SEEKING),
      stalled: fromEvent(this.elem as any, VgEvents.VG_STALLED),
      suspend: fromEvent(this.elem as any, VgEvents.VG_SUSPEND),
      timeUpdate: fromEvent(this.elem as any, VgEvents.VG_TIME_UPDATE),
      volumeChange: fromEvent(this.elem as any, VgEvents.VG_VOLUME_CHANGE),
      waiting: fromEvent(this.elem as any, VgEvents.VG_WAITING),

      // Advertisement only events
      startAds: fromEvent(window as any, VgEvents.VG_START_ADS),
      endAds: fromEvent(window as any, VgEvents.VG_END_ADS),

      // See changes on <source> child elements to reload the video file
      mutation: new Observable((observer: any) => {
        const domObs = new MutationObserver((mutations) => {
          observer.next(mutations);
        });

        domObs.observe(this.elem as any, { childList: true, attributes: true });

        return () => {
          domObs.disconnect();
        };
      }),

      // Custom buffering detection
      bufferDetected: this.bufferDetected,
    };

    this.mutationObs = this.subscriptions.mutation.subscribe(
      this.onMutation.bind(this)
    );
    this.canPlayObs = this.subscriptions.canPlay.subscribe(
      this.onCanPlay.bind(this)
    );
    this.canPlayThroughObs = this.subscriptions.canPlayThrough.subscribe(
      this.onCanPlayThrough.bind(this)
    );
    this.loadedMetadataObs = this.subscriptions.loadedMetadata.subscribe(
      this.onLoadMetadata.bind(this)
    );
    this.waitingObs = this.subscriptions.waiting.subscribe(
      this.onWait.bind(this)
    );
    this.progressObs = this.subscriptions.progress.subscribe(
      this.onProgress.bind(this)
    );
    this.endedObs = this.subscriptions.ended.subscribe(
      this.onComplete.bind(this)
    );
    this.playingObs = this.subscriptions.playing.subscribe(
      this.onStartPlaying.bind(this)
    );
    this.playObs = this.subscriptions.play.subscribe(this.onPlay.bind(this));
    this.pauseObs = this.subscriptions.pause.subscribe(this.onPause.bind(this));
    this.timeUpdateObs = this.subscriptions.timeUpdate.subscribe(
      this.onTimeUpdate.bind(this)
    );
    this.volumeChangeObs = this.subscriptions.volumeChange.subscribe(
      this.onVolumeChange.bind(this)
    );
    this.errorObs = this.subscriptions.error.subscribe(this.onError.bind(this));

    if (this.vgMaster) {
      this.api.playerReadyEvent.subscribe(() => {
        this.prepareSync();
      });
    }
  }

  prepareSync() {
    const canPlayAll: Observable<any>[] = [];

    for (const media in this.api.medias) {
      if (this.api.medias[media]) {
        canPlayAll.push(this.api.medias[media].subscriptions.canPlay);
      }
    }

    this.canPlayAllSubscription = combineLatest(canPlayAll)
      .pipe(map((...params) => {
        const checkReadyState = (event) => {
          if (!event?.target) {
            return false;
          }

          return event.target.readyState === 4;
        };

        const allReady: boolean = params.some(checkReadyState);

        if (allReady && !this.syncSubscription) {
          this.startSync();
          this.syncSubscription.unsubscribe();
        }
      }))
      .subscribe();
  }

  startSync() {
    this.syncSubscription = timer(0, 1000).subscribe(() => {
      for (const media in this.api.medias) {
        if (this.api.medias[media] !== this) {
          const diff: number =
            this.api.medias[media].currentTime - this.currentTime;

          if (diff < -0.3 || diff > 0.3) {
            this.playAtferSync = this.state === VgStates.VG_PLAYING;

            this.pause();
            this.api.medias[media].pause();
            this.api.medias[media].currentTime = this.currentTime;
          } else {
            if (this.playAtferSync) {
              this.play();
              this.api.medias[media].play();
              this.playAtferSync = false;
            }
          }
        }
      }
    });
  }

  onMutation(mutations: Array<MutationRecord>) {
    // Detect changes only for source elements or src attribute
    for (let i = 0, l = mutations.length; i < l; i++) {
      const mut: MutationRecord = mutations[i];

      if (mut.type === 'attributes' && mut.attributeName === 'src') {
        // Only load src file if it's not a blob (for DASH / HLS sources)
        if (
          (mut.target as any).src &&
          (mut.target as any).src.length > 0 &&
          (mut.target as any).src.indexOf('blob:') < 0
        ) {
          this.loadMedia();
          break;
        }
      } else if (
        mut.type === 'childList' &&
        mut.removedNodes.length &&
        mut.removedNodes[0].nodeName.toLowerCase() === 'source'
      ) {
        this.loadMedia();
        break;
      }
    }
  }

  loadMedia() {
    this.vgMedia.pause();
    this.vgMedia.currentTime = 0;

    // Start buffering until we can play the media file
    this.stopBufferCheck();
    this.isBufferDetected = true;
    this.bufferDetected.next(this.isBufferDetected);

    // TODO: This is ugly, we should find something cleaner. For some reason a TimerObservable doesn't works.
    setTimeout(() => this.vgMedia.load(), 10);
  }

  play() {
    // short-circuit if already playing
    if (
      this.playPromise ||
      (this.state !== VgStates.VG_PAUSED && this.state !== VgStates.VG_ENDED)
    ) {
      return;
    }

    this.playPromise = this.vgMedia.play();

    // browser has async play promise
    if (this.playPromise && this.playPromise.then && this.playPromise.catch) {
      this.playPromise
        .then(() => {
          this.playPromise = null;
        })
        .catch(() => {
          this.playPromise = null;
          // deliberately empty for the sake of eating console noise
        });
    }

    return this.playPromise;
  }

  pause() {
    // browser has async play promise
    if (this.playPromise) {
      this.playPromise.then(() => {
        this.vgMedia.pause();
      });
    } else {
      this.vgMedia.pause();
    }
  }

  get id() {
    // We should return undefined if vgMedia still doesn't exist
    let result: any;

    if (this.vgMedia) {
      result = this.vgMedia.id;
    }

    return result;
  }

  get duration() {
    return this.vgMedia.duration === Infinity
      ? this.specifiedDuration
      : this.vgMedia.duration;
  }

  set currentTime(seconds) {
    this.vgMedia.currentTime = seconds;
    // this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_SEEK));
  }

  get currentTime() {
    return this.vgMedia.currentTime;
  }

  set volume(volume) {
    this.vgMedia.volume = volume;
  }

  get volume() {
    return this.vgMedia.volume;
  }

  set playbackRate(rate) {
    this.vgMedia.playbackRate = rate;
  }

  get playbackRate() {
    return this.vgMedia.playbackRate;
  }

  get buffered() {
    return this.vgMedia.buffered;
  }

  get textTracks() {
    return this.vgMedia.textTracks;
  }
  // @ts-ignore
  onCanPlay(event: any) {
    this.isBufferDetected = false;
    this.bufferDetected.next(this.isBufferDetected);
    this.canPlay = true;
    this.ref.detectChanges();
  }
  // @ts-ignore
  onCanPlayThrough(event: any) {
    this.isBufferDetected = false;
    this.bufferDetected.next(this.isBufferDetected);
    this.canPlayThrough = true;
    this.ref.detectChanges();
  }
  // @ts-ignore
  onLoadMetadata(event: any) {
    this.isMetadataLoaded = true;

    this.time = {
      current: 0,
      left: 0,
      total: this.duration * 1000,
    };

    this.state = VgStates.VG_PAUSED;

    // Live streaming check
    const t: number = Math.round(this.time.total);
    this.isLive = t === Infinity;
    this.ref.detectChanges();
  }
  // @ts-ignore
  onWait(event: any) {
    this.isWaiting = true;
    this.ref.detectChanges();
  }
  // @ts-ignore
  onComplete(event: any) {
    this.isCompleted = true;
    this.state = VgStates.VG_ENDED;
    this.ref.detectChanges();
  }
  // @ts-ignore
  onStartPlaying(event: any) {
    this.state = VgStates.VG_PLAYING;
    this.ref.detectChanges();
  }
  // @ts-ignore
  onPlay(event: any) {
    this.state = VgStates.VG_PLAYING;

    if (this.vgMaster) {
      if (!this.syncSubscription || this.syncSubscription.closed) {
        this.startSync();
      }
    }

    this.startBufferCheck();
    this.ref.detectChanges();
  }
  // @ts-ignore
  onPause(event: any) {
    this.state = VgStates.VG_PAUSED;

    if (this.vgMaster) {
      if (!this.playAtferSync) {
        this.syncSubscription.unsubscribe();
      }
    }

    this.stopBufferCheck();
    this.ref.detectChanges();
  }
  // @ts-ignore
  onTimeUpdate(event: any) {
    const end = this.buffered.length - 1;

    this.time = {
      current: this.currentTime * 1000,
      total: this.time.total,
      left: (this.duration - this.currentTime) * 1000,
    };

    if (end >= 0) {
      this.buffer = { end: this.buffered.end(end) * 1000 };
    }
    this.ref.detectChanges();
  }
  // @ts-ignore
  onProgress(event: any) {
    const end = this.buffered.length - 1;

    if (end >= 0) {
      this.buffer = { end: this.buffered.end(end) * 1000 };
    }
    this.ref.detectChanges();
  }
  // @ts-ignore
  onVolumeChange(event: any) {
    // TODO: Save to localstorage the current volume
    this.ref.detectChanges();
  }
  // @ts-ignore
  onError(event: any) {
    // TODO: Handle error messages
    this.ref.detectChanges();
  }

  // http://stackoverflow.com/a/23828241/779529
  bufferCheck() {
    const offset = 1 / this.checkInterval;
    this.currentPlayPos = this.currentTime;

    if (
      !this.isBufferDetected &&
      this.currentPlayPos < this.lastPlayPos + offset
    ) {
      this.isBufferDetected = true;
    }

    if (
      this.isBufferDetected &&
      this.currentPlayPos > this.lastPlayPos + offset
    ) {
      this.isBufferDetected = false;
    }

    // Prevent calls to bufferCheck after ngOnDestroy have been called
    if (!this.bufferDetected.closed) {
      this.bufferDetected.next(this.isBufferDetected);
    }

    this.lastPlayPos = this.currentPlayPos;
  }

  startBufferCheck() {
    this.checkBufferSubscription = timer(0, this.checkInterval).subscribe(
      () => {
        this.bufferCheck();
      }
    );
  }

  stopBufferCheck() {
    if (this.checkBufferSubscription) {
      this.checkBufferSubscription.unsubscribe();
    }

    this.isBufferDetected = false;

    this.bufferDetected.next(this.isBufferDetected);
  }

  seekTime(value: number, byPercent: boolean = false) {
    let second: number;
    const duration: number = this.duration;

    if (byPercent) {
      second = (value * duration) / 100;
    } else {
      second = value;
    }

    this.currentTime = second;
  }

  addTextTrack(
    type: string,
    label?: string,
    language?: string,
    mode?: 'disabled' | 'hidden' | 'showing'
  ): TextTrack {
    const newTrack: TextTrack = this.vgMedia.addTextTrack(
      type,
      label,
      language
    );

    if (mode) {
      newTrack.mode = mode;
    }
    return newTrack;
  }

  ngOnDestroy() {
    this.vgMedia.src = '';
    this.mutationObs?.unsubscribe();
    this.canPlayObs?.unsubscribe();
    this.canPlayThroughObs?.unsubscribe();
    this.loadedMetadataObs?.unsubscribe();
    this.waitingObs?.unsubscribe();
    this.progressObs?.unsubscribe();
    this.endedObs?.unsubscribe();
    this.playingObs?.unsubscribe();
    this.playObs?.unsubscribe();
    this.pauseObs?.unsubscribe();
    this.timeUpdateObs?.unsubscribe();
    this.volumeChangeObs?.unsubscribe();
    this.errorObs?.unsubscribe();
    this.checkBufferSubscription?.unsubscribe();
    this.syncSubscription?.unsubscribe();

    this.bufferDetected?.complete();
    this.bufferDetected?.unsubscribe();

    this.api.unregisterMedia(this);
  }
}
