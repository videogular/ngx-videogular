import { QueryList } from '@angular/core';
import { VgFullscreenApiService } from './vg-fullscreen-api.service';
import { VgUtilsService } from '../vg-utils/vg-utils.service';

describe('Videogular Player', () => {
  let medias: QueryList<any>;
  let elem: HTMLElement;
  let fsAPI: VgFullscreenApiService;

  beforeEach(() => {
    medias = new QueryList();
    elem = document.createElement('video');

    fsAPI = new VgFullscreenApiService();
    fsAPI.isAvailable = true;
    fsAPI.nativeFullscreen = true;
    fsAPI.init(elem, medias);
  });

  it('Should create polyfills on init', () => {
    expect(fsAPI.polyfill.enabled).toBe('fullscreenEnabled');
    expect(fsAPI.polyfill.element).toBe('fullscreenElement');
    expect(fsAPI.polyfill.request).toBe('requestFullscreen');
    expect(fsAPI.polyfill.exit).toBe('exitFullscreen');
    expect(fsAPI.polyfill.onchange).toBe('fullscreenchange');
    expect(fsAPI.polyfill.onerror).toBe('fullscreenerror');
  });

  it('Should request an element to enter in fullscreen mode (desktop)', () => {
    spyOn(fsAPI, 'enterElementInFullScreen').and.callFake(() => {});

    fsAPI.request(null);

    expect(fsAPI.isFullscreen).toBeTruthy();
    expect(fsAPI.enterElementInFullScreen).toHaveBeenCalledWith(elem);
  });

  it('Should request an element to enter in fullscreen mode (mobile)', () => {
    spyOn(VgUtilsService, 'isMobileDevice').and.callFake(() => {
      return true;
    });
    spyOn(fsAPI, 'enterElementInFullScreen').and.callFake(() => {});

    fsAPI.request(null);

    expect(fsAPI.isFullscreen).toBeTruthy();
    expect(VgUtilsService.isMobileDevice).toHaveBeenCalled();
    expect(fsAPI.enterElementInFullScreen).toHaveBeenCalledWith(elem);
  });

  it('Should request an element to enter in fullscreen mode (mobile with param elem)', () => {
    spyOn(VgUtilsService, 'isMobileDevice').and.callFake(() => {
      return true;
    });
    spyOn(fsAPI, 'enterElementInFullScreen').and.callFake(() => {});

    fsAPI.request(elem);

    expect(fsAPI.isFullscreen).toBeTruthy();
    expect(VgUtilsService.isMobileDevice).toHaveBeenCalled();
    expect(fsAPI.enterElementInFullScreen).toHaveBeenCalledWith(elem);
  });

  it('Should not request an element to enter in fullscreen mode', () => {
    spyOn(fsAPI, 'enterElementInFullScreen').and.callFake(() => {});

    fsAPI.nativeFullscreen = false;
    fsAPI.request(elem);

    expect(fsAPI.enterElementInFullScreen).not.toHaveBeenCalled();
  });

  it('Should enter in fullscreen mode', () => {
    spyOn(elem as any, 'requestFullscreen').and.callThrough();

    fsAPI.enterElementInFullScreen(elem);

    expect((elem as any).requestFullscreen).toHaveBeenCalled();
  });

  it('Should request an element to exit from fullscreen mode (native)', () => {
    fsAPI.polyfill.exit = 'mockedExitFunction';

    (document as any).mockedExitFunction = () => {};

    spyOn(document, 'mockedExitFunction' as any).and.callThrough();

    fsAPI.exit();

    expect(fsAPI.isFullscreen).toBeFalsy();
    expect((document as any).mockedExitFunction).toHaveBeenCalled();
  });

  it('Should request an element to exit from fullscreen mode (emulated)', () => {
    fsAPI.polyfill.exit = 'mockedExitFunction';

    (document as any).mockedExitFunction = () => {};

    spyOn(document, 'mockedExitFunction' as any).and.callThrough();

    fsAPI.nativeFullscreen = false;
    fsAPI.exit();

    expect(fsAPI.isFullscreen).toBeFalsy();
    expect((document as any).mockedExitFunction).not.toHaveBeenCalled();
  });

  it('Should enter videogular element to fullscreen mode', () => {
    fsAPI.videogularElement = { id: 'vgElem' } as HTMLElement;

    spyOn(fsAPI, 'request').and.callFake(() => {});

    fsAPI.toggleFullscreen();

    expect(fsAPI.request).toHaveBeenCalledWith(null);
  });

  it('Should enter other element to fullscreen mode', () => {
    const element = { id: 'main' };

    fsAPI.videogularElement = { id: 'vgElem' } as HTMLElement;

    spyOn(fsAPI, 'request').and.callFake(() => {});

    fsAPI.toggleFullscreen(element);

    expect(fsAPI.request).toHaveBeenCalledWith(element);
  });

  it('Should exit from fullscreen mode', () => {
    fsAPI.isFullscreen = true;

    spyOn(fsAPI, 'exit').and.callFake(() => {});

    fsAPI.toggleFullscreen();

    expect(fsAPI.exit).toHaveBeenCalled();
  });
});
