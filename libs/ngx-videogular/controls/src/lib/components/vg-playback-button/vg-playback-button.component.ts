import {
  Component,
  Input,
  ElementRef,
  HostListener,
  OnInit,
  ViewEncapsulation,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { VgApiService } from '@videogular/ngx-videogular/core';

@Component({
  selector: 'vg-playback-button',
  encapsulation: ViewEncapsulation.None,
  template: ` <span
    class="button"
    tabindex="0"
    role="button"
    aria-label="playback speed button"
    [attr.aria-valuetext]="ariaValue"
  >
    {{ getPlaybackRate() }}x
  </span>`,
  styles: [
    `
      vg-playback-button {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: flex;
        justify-content: center;
        height: 50px;
        width: 50px;
        cursor: pointer;
        color: white;
        line-height: 50px;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      }
      vg-playback-button .button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
      }
    `,
  ],
})
export class VgPlaybackButtonComponent implements OnInit, OnDestroy {
  @Input() vgFor: string;

  elem: HTMLElement;
  target: any;

  @Input() playbackValues: Array<string>;
  playbackIndex: number;

  subscriptions: Subscription[] = [];

  ariaValue = 1;

  constructor(
    ref: ElementRef,
    public API: VgApiService,
    public cdr: ChangeDetectorRef
  ) {
    this.elem = ref.nativeElement;
    this.playbackValues = ['0.5', '1.0', '1.5', '2.0'];
    this.playbackIndex = 1;
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
  }

  @HostListener('click')
  onClick() {
    this.updatePlaybackSpeed();
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // On press Enter (13) or Space (32)
    if (event.keyCode === 13 || event.keyCode === 32) {
      event.preventDefault();
      this.updatePlaybackSpeed();
    }
  }

  updatePlaybackSpeed() {
    this.playbackValues.forEach((playbackValue, index) => {
          if (playbackValue.length === 1) {
             this.playbackValues[index] = playbackValue + '.0';
          }
     });

    this.playbackIndex = ++this.playbackIndex % this.playbackValues.length;

    if (this.target instanceof VgApiService) {
      this.target.playbackRate = this.playbackValues[this.playbackIndex];
    } else {
      this.target.playbackRate[this.vgFor] = this.playbackValues[
        this.playbackIndex
      ];
    }

    this.detectChanges();
  }

  getPlaybackRate() {
    this.ariaValue = this.target ? this.target.playbackRate : 1.0;
    return this.ariaValue;
  }

  detectChanges() {
    try {
      this.cdr.detectChanges();
    } catch (e) {
      console.warn(e);
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
