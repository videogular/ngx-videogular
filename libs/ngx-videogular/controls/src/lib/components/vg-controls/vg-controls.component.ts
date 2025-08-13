import {
  Component,
  Input,
  OnInit,
  ElementRef,
  HostBinding,
  AfterViewInit,
  ViewEncapsulation,
  OnDestroy,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { fromEvent } from 'rxjs';
import { VgApiService, VgControlsHiddenService, VgStates } from '@videogular/ngx-videogular/core';

@Component({
    selector: 'vg-controls',
    encapsulation: ViewEncapsulation.None,
    template: `<ng-content></ng-content>`,
    styles: [
        `
      vg-controls {
        position: absolute;
        display: flex;
        width: 100%;
        height: 50px;
        z-index: 300;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        -webkit-transition: bottom 1s;
        -khtml-transition: bottom 1s;
        -moz-transition: bottom 1s;
        -ms-transition: bottom 1s;
        transition: bottom 1s;
      }
      vg-controls.hide {
        bottom: -50px;
      }
    `,
    ],
    standalone: false
})
export class VgControlsComponent implements OnInit, AfterViewInit, OnDestroy {
  elem: HTMLElement;
  target: any;

  @HostBinding('style.pointer-events') isAdsPlaying = 'initial';
  @HostBinding('class.hide') hideControls = false;

  @Input() vgFor: string;
  @Input() vgAutohide = false;
  @Input() vgAutohideTime = 3;

  private timer: any;

  mouseMove$: Observable<any>;
  touchStart$: Observable<any>;
  mouseClick$: Observable<any>;

  subscriptions: Subscription[] = [];
  // @ts-ignore
  constructor(
    private API: VgApiService,
    ref: ElementRef,
    private hidden: VgControlsHiddenService
  ) {
    this.elem = ref.nativeElement;
  }

  ngOnInit() {
    this.mouseMove$ = fromEvent(this.API.videogularElement, 'mousemove');
    this.subscriptions.push(this.mouseMove$.subscribe(this.show.bind(this)));

    this.touchStart$ = fromEvent(this.API.videogularElement, 'touchstart');
    this.subscriptions.push(this.touchStart$.subscribe(this.show.bind(this)));

    this.mouseClick$ = fromEvent(this.API.videogularElement, 'click');
    this.subscriptions.push(this.mouseClick$.subscribe(this.show.bind(this)));

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
      this.target.subscriptions.play.subscribe(this.onPlay.bind(this))
    );
    this.subscriptions.push(
      this.target.subscriptions.pause.subscribe(this.onPause.bind(this))
    );
    this.subscriptions.push(
      this.target.subscriptions.startAds.subscribe(this.onStartAds.bind(this))
    );
    this.subscriptions.push(
      this.target.subscriptions.endAds.subscribe(this.onEndAds.bind(this))
    );
  }

  ngAfterViewInit() {
    if (this.vgAutohide) {
      this.hide();
    } else {
      this.show();
    }
  }

  onPlay() {
    if (this.vgAutohide) {
      this.hide();
    }
  }

  onPause() {
    clearTimeout(this.timer);
    this.hideControls = false;
    this.hidden.state(false);
  }

  onStartAds() {
    this.isAdsPlaying = 'none';
  }

  onEndAds() {
    this.isAdsPlaying = 'initial';
  }

  hide() {
    if (this.vgAutohide) {
      clearTimeout(this.timer);
      this.hideAsync();
    }
  }

  show() {
    clearTimeout(this.timer);
    this.hideControls = false;
    this.hidden.state(false);

    if (this.vgAutohide) {
      this.hideAsync();
    }
  }

  private hideAsync() {
    if (this.API.state === VgStates.VG_PLAYING) {
      this.timer = setTimeout(() => {
        this.hideControls = true;
        this.hidden.state(true);
      }, this.vgAutohideTime * 1000);
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
