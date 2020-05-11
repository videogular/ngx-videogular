import {
  Output,
  Component,
  EventEmitter,
  ElementRef,
  HostBinding,
  QueryList,
  AfterContentInit,
  ContentChildren,
  ViewEncapsulation,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { VgApiService } from '../../services/vg-api/vg-api.service';
import { VgFullscreenApiService } from '../../services/vg-fullscreen-api/vg-fullscreen-api.service';
import { VgControlsHiddenService } from '../../services/vg-controls-hidden/vg-controls-hidden.service';
import { VgMediaDirective } from '../../directives/vg-media/vg-media.directive';
import { VgUtilsService } from '../../services/vg-utils/vg-utils.service';

@Component({
  selector: 'vg-player',
  encapsulation: ViewEncapsulation.None,
  template: `<ng-content></ng-content>`,
  styles: [
    `
      vg-player {
        font-family: "videogular";
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: black;
      }
      vg-player.fullscreen {
        position: fixed;
        left: 0;
        top: 0;
      }
      vg-player.native-fullscreen.controls-hidden {
        cursor: none;
      }
    `,
  ],
  providers: [VgApiService, VgFullscreenApiService, VgControlsHiddenService],
})
export class VgPlayerComponent implements AfterContentInit, OnDestroy {
  elem: HTMLElement;

  @HostBinding('class.fullscreen') isFullscreen = false;
  @HostBinding('class.native-fullscreen') isNativeFullscreen = false;
  @HostBinding('class.controls-hidden') areControlsHidden = false;
  @HostBinding('style.z-index') zIndex: string;

  @Output()
  onPlayerReady: EventEmitter<any> = new EventEmitter();

  @Output()
  onMediaReady: EventEmitter<any> = new EventEmitter();

  @ContentChildren(VgMediaDirective)
  medias: QueryList<VgMediaDirective>;

  subscriptions: Subscription[] = [];

  constructor(
    ref: ElementRef,
    public api: VgApiService,
    public fsAPI: VgFullscreenApiService,
    private controlsHidden: VgControlsHiddenService
  ) {
    this.elem = ref.nativeElement;

    this.api.registerElement(this.elem);
  }

  ngAfterContentInit() {
    this.medias.toArray().forEach((media) => {
      this.api.registerMedia(media);
    });

    this.fsAPI.init(this.elem, this.medias);

    this.subscriptions.push(
      this.fsAPI.onChangeFullscreen.subscribe(
        this.onChangeFullscreen.bind(this)
      )
    );
    this.subscriptions.push(
      this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this))
    );

    this.api.onPlayerReady(this.fsAPI);
    this.onPlayerReady.emit(this.api);
  }

  onChangeFullscreen(fsState: boolean) {
    if (!this.fsAPI.nativeFullscreen) {
      this.isFullscreen = fsState;
      this.zIndex = fsState ? VgUtilsService.getZIndex().toString() : 'auto';
    } else {
      this.isNativeFullscreen = fsState;
    }
  }

  onHideControls(hidden: boolean) {
    this.areControlsHidden = hidden;
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
