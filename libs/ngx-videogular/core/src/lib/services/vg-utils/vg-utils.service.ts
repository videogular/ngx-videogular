import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VgUtilsService {
  /**
   * Inspired by Paul Irish
   * https://gist.github.com/paulirish/211209
   */
  static getZIndex(): number {
    let zIndex = 1;
    let elementZIndex: number;

    const tags = document.getElementsByTagName('*');

    for (let i = 0, l = tags.length; i < l; i++) {
      elementZIndex = parseInt(window.getComputedStyle(tags[i])['z-index'], 10);

      if (elementZIndex > zIndex) {
        zIndex = elementZIndex + 1;
      }
    }

    return zIndex;
  }

  // Very simple mobile detection, not 100% reliable
  static isMobileDevice() {
    // return (
    //   typeof window.screen.orientation !== 'undefined' ||
    //   navigator.userAgent.indexOf('IEMobile') !== -1
    // );

    // window.orientation is deprecated and we should use window.screen.orientation
    return (
      typeof window.orientation !== 'undefined' ||
      navigator.userAgent.indexOf('IEMobile') !== -1
    );
  }

  static isiOSDevice() {
    return (
      (navigator.userAgent.match(/ip(hone|ad|od)/i) || 
      VgUtilsService.isIpadOS()) &&
      !navigator.userAgent.match(/(iemobile)[\/\s]?([\w\.]*)/i)
    );
  }

  static isIpadOS() {
    return (
      navigator.maxTouchPoints && 
      navigator.maxTouchPoints > 2 &&
      /MacIntel/.test(navigator.platform)
    );
  }

  static isCordova() {
    return (
      document.URL.indexOf('http://') === -1 &&
      document.URL.indexOf('https://') === -1
    );
  }
}
