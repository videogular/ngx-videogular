import { Injectable, EventEmitter, QueryList } from '@angular/core';
import { VgUtilsService } from '../vg-utils/vg-utils.service';
import { fromEvent, Subscription } from 'rxjs';
import { VgMediaDirective } from '../../directives/vg-media/vg-media.directive';

@Injectable({
  providedIn: 'root',
})
export class VgFullscreenApiService {
  polyfill: any;
  onchange: string;
  onerror: string;
  nativeFullscreen = true;
  isFullscreen = false;
  isAvailable: boolean;
  videogularElement: HTMLElement;
  medias: QueryList<VgMediaDirective>;

  fsChangeSubscription: Subscription;
  onChangeFullscreen: EventEmitter<any> = new EventEmitter();

  constructor() {}

  init(elem: HTMLElement, medias: QueryList<VgMediaDirective>) {
    this.videogularElement = elem;
    this.medias = medias;

    const APIs = {
      w3: {
        enabled: 'fullscreenEnabled',
        element: 'fullscreenElement',
        request: 'requestFullscreen',
        exit: 'exitFullscreen',
        onchange: 'fullscreenchange',
        onerror: 'fullscreenerror',
      },
      newWebkit: {
        enabled: 'webkitFullscreenEnabled',
        element: 'webkitFullscreenElement',
        request: 'webkitRequestFullscreen',
        exit: 'webkitExitFullscreen',
        onchange: 'webkitfullscreenchange',
        onerror: 'webkitfullscreenerror',
      },
      oldWebkit: {
        enabled: 'webkitIsFullScreen',
        element: 'webkitCurrentFullScreenElement',
        request: 'webkitRequestFullScreen',
        exit: 'webkitCancelFullScreen',
        onchange: 'webkitfullscreenchange',
        onerror: 'webkitfullscreenerror',
      },
      moz: {
        enabled: 'mozFullScreen',
        element: 'mozFullScreenElement',
        request: 'mozRequestFullScreen',
        exit: 'mozCancelFullScreen',
        onchange: 'mozfullscreenchange',
        onerror: 'mozfullscreenerror',
      },
      ios: {
        enabled: 'webkitFullscreenEnabled',
        element: 'webkitFullscreenElement',
        request: 'webkitEnterFullscreen',
        exit: 'webkitExitFullscreen',
        onchange: 'webkitendfullscreen', // Hack for iOS: webkitfullscreenchange it's not firing
        onerror: 'webkitfullscreenerror',
      },
      ms: {
        enabled: 'msFullscreenEnabled',
        element: 'msFullscreenElement',
        request: 'msRequestFullscreen',
        exit: 'msExitFullscreen',
        onchange: 'MSFullscreenChange',
        onerror: 'MSFullscreenError',
      },
    };

    for (const browser in APIs) {
      if (APIs[browser].enabled in document) {
        this.polyfill = APIs[browser];
        break;
      }
    }

    if (VgUtilsService.isiOSDevice()) {
      this.polyfill = APIs.ios;
    }

    this.isAvailable = this.polyfill != null;

    if (this.polyfill == null) {
      return;
    }

    let fsElemDispatcher: HTMLElement | Document;

    switch (this.polyfill.onchange) {
      // Mozilla dispatches the fullscreen change event from document, not the element
      // See: https://bugzilla.mozilla.org/show_bug.cgi?id=724816#c3
      case 'mozfullscreenchange':
        fsElemDispatcher = document;
        break;

      // iOS dispatches the fullscreen change event from video element
      case 'webkitendfullscreen':
        fsElemDispatcher = this.medias.toArray()[0].elem;
        break;

      // HTML5 implementation dispatches the fullscreen change event from the element
      default:
        fsElemDispatcher = elem;
    }

    this.fsChangeSubscription = fromEvent(
      fsElemDispatcher,
      this.polyfill.onchange
    ).subscribe(() => {
      this.onFullscreenChange();
    });
  }

  onFullscreenChange() {
    this.isFullscreen = !!document[this.polyfill.element];
    this.onChangeFullscreen.emit(this.isFullscreen);
  }

  toggleFullscreen(element: any = null): Promise<void> {
    if (this.isFullscreen) {
      return this.exit();
    }
    return this.request(element);
  }

  request(elem: any): Promise<void> {
    if (!elem) {
      elem = this.videogularElement;
    }

    this.isFullscreen = true;
    this.onChangeFullscreen.emit(true);

    // Perform native full screen support
    if (this.isAvailable && this.nativeFullscreen) {
      // Fullscreen for mobile devices
      if (VgUtilsService.isMobileDevice()) {
        // We should make fullscreen the video object if it doesn't have native fullscreen support
        // Fallback! We can't set vg-player on fullscreen, only video/audio objects
        if (
          (!this.polyfill.enabled && elem === this.videogularElement) ||
          VgUtilsService.isiOSDevice()
        ) {
          elem = this.medias.toArray()[0].elem;
        }

        return this.enterElementInFullScreen(elem);
      }
      return this.enterElementInFullScreen(this.videogularElement);
    }
    return Promise.resolve();
  }

  enterElementInFullScreen(elem: any): Promise<void> {
    return elem[this.polyfill.request]();
  }

  exit(): Promise<void> {
    this.isFullscreen = false;
    this.onChangeFullscreen.emit(false);

    // Exit from native fullscreen
    if (this.isAvailable && this.nativeFullscreen) {
      return document[this.polyfill.exit]();
    }
    return Promise.resolve();
  }
}
