import {
  Component,
  Input,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { VgApiService } from '../../../services/vg-api/vg-api.service';

@Component({
  selector: 'vg-time-display',
  encapsulation: ViewEncapsulation.None,
  template: `
    <span *ngIf="target?.isLive">LIVE</span>
    <span *ngIf="!target?.isLive">{{ getTime() | vgUtc: vgFormat }}</span>
    <ng-content></ng-content>
  `,
  styles: [
    `
      vg-time-display {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: flex;
        justify-content: center;
        height: 50px;
        width: 60px;
        cursor: pointer;
        color: white;
        line-height: 50px;
        pointer-events: none;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      }
    `,
  ],
})
export class VgTimeDisplayComponent implements OnInit, OnDestroy {
  @Input() vgFor: string;
  @Input() vgProperty = 'current';
  @Input() vgFormat = 'mm:ss';

  elem: HTMLElement;
  target: any;

  subscriptions: Subscription[] = [];

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
  }

  getTime() {
    let t = 0;

    if (this.target) {
      t = Math.round(this.target.time[this.vgProperty]);
      t = isNaN(t) || this.target.isLive ? 0 : t;
    }

    return t;
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
