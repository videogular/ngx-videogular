import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { VgScrubBarComponent } from './vg-scrub-bar.component';
import {
  VgApiService,
  VgControlsHiddenService,
  VgMediaElement,
  VgStates,
  VgMediaDirective,
} from '@videogular/vg-core';

describe('Scrub bar', () => {
  let scrubBar: VgScrubBarComponent;
  let ref: ElementRef;
  let cdRef: ChangeDetectorRef;
  let api: VgApiService;
  let vgControlsHiddenState: VgControlsHiddenService;
  let media: VgMediaDirective;
  const elem = new VgMediaElement();
  elem.duration = 100;
  elem.currentTime = 0;
  elem.volume = 1;
  elem.playbackRate = 1;
  elem.buffered = {
    length: 2,
    start: () => {
      return 0;
    },
    end: () => {
      return 50;
    },
  };
  elem.id = 'testVideo';

  beforeEach(() => {
    ref = {
      nativeElement: {
        getAttribute: (name) => {
          return name;
        },
        scrollWidth: 200,
      },
    };
    cdRef = {
      detectChanges: () => {},
      markForCheck: () => {},
      detach: () => {},
      reattach: () => {},
      checkNoChanges: () => {},
    };

    api = new VgApiService();
    media = new VgMediaDirective(api, cdRef);
    media.vgMedia = elem;
    vgControlsHiddenState = new VgControlsHiddenService();

    scrubBar = new VgScrubBarComponent(ref, api, vgControlsHiddenState);
  });

  it('Should get media by id on init', () => {
    spyOn(api, 'getMediaById');

    scrubBar.vgFor = 'test';
    scrubBar.onPlayerReady();

    expect(api.getMediaById).toHaveBeenCalledWith('test');
  });

  it('Should show scrub bar', () => {
    vgControlsHiddenState.state(false);
    expect(scrubBar.hideScrubBar).toBe(false);
  });

  it('Should hide scrub bar', () => {
    vgControlsHiddenState.state(true);
    expect(scrubBar.hideScrubBar).toBe(true);
  });

  describe('onMouseDownScrubBar', () => {
    it('should call API seekTime 10 when offsetX is 20 and scrollWidth is 200', () => {
      api = {
        seekTime: () => {},
        pause: () => {},
        registerMedia: () => {},
        state: VgStates.VG_PLAYING,
        isLive: false,
        canPlay: true,
      } as any;

      spyOn(api, 'pause');

      media.onCanPlay({});
      api.registerMedia(media);

      scrubBar.target = api;
      scrubBar.target.canPlay = true;
      scrubBar.vgSlider = true;
      scrubBar.isSeeking = true;

      scrubBar.onMouseDownScrubBar({ offsetX: 20 });

      expect(api.pause).toHaveBeenCalled();
    });
  });

  describe('onMouseMoveScrubBar', () => {
    it('should modify time.current to 10 when offsetX is 20 and scrollWidth is 200 and vgSlider is true and isSeeking is true', () => {
      spyOn(api, 'seekTime');

      scrubBar.target = api;
      scrubBar.vgSlider = false;

      scrubBar.onMouseMoveScrubBar({ offsetX: 20 });

      expect(api.seekTime).toHaveBeenCalledTimes(0);

      scrubBar.vgSlider = true;
      scrubBar.isSeeking = true;

      scrubBar.onMouseMoveScrubBar({ offsetX: 20 });

      expect(api.seekTime).toHaveBeenCalledWith(10, true);
    });
  });

  describe('onMouseUpScrubBar', () => {
    it('should modify time.current to 10 when offsetX is 20 and scrollWidth is 200 and vgSlider is true and isSeeking is true', () => {
      spyOn(api, 'seekTime');

      media.onCanPlay({});
      api.registerMedia(media);

      scrubBar.target = api;
      scrubBar.vgSlider = false;

      scrubBar.onMouseUpScrubBar({ offsetX: 20 });

      expect(api.seekTime).toHaveBeenCalledTimes(0);

      scrubBar.vgSlider = true;
      scrubBar.isSeeking = true;

      scrubBar.onMouseUpScrubBar({ offsetX: 20 });

      expect(api.seekTime).toHaveBeenCalledWith(10, true);
    });
  });

  describe('onTouchStartScrubBar', () => {
    it('should call API seekTime 10 when offsetX is 20 and scrollWidth is 200', () => {
      spyOn(api, 'seekTime');
      spyOn(api, 'pause');

      media.onCanPlay({});
      api.registerMedia(media);

      scrubBar.target = api;
      scrubBar.vgSlider = false;

      scrubBar.onTouchStartScrubBar({ touches: [{ pageX: 20 }] });

      expect(api.seekTime).toHaveBeenCalledWith(10, true);
      expect(api.pause).toHaveBeenCalledTimes(0);

      scrubBar.vgSlider = true;
      scrubBar.isSeeking = true;

      scrubBar.onTouchStartScrubBar({ touches: [{ pageX: 20 }] });

      expect(api.seekTime).toHaveBeenCalledTimes(1);
      expect(api.pause).toHaveBeenCalledTimes(1);
    });
  });

  describe('onTouchMoveScrubBar', () => {
    it('should modify time.current to 10 when offsetX is 20 and scrollWidth is 200 and vgSlider is true and isSeeking is true', () => {
      spyOn(api, 'seekTime');

      scrubBar.target = api;
      scrubBar.vgSlider = false;

      scrubBar.onTouchMoveScrubBar({ touches: [{ pageX: 20 }] });

      expect(api.seekTime).toHaveBeenCalledTimes(0);

      scrubBar.vgSlider = true;
      scrubBar.isSeeking = true;

      scrubBar.onTouchMoveScrubBar({ touches: [{ pageX: 20 }] });

      expect(api.seekTime).toHaveBeenCalledWith(10, true);
    });
  });

  describe('onTouchCancelScrubBar', () => {
    it('should not seek', () => {
      spyOn(api, 'seekTime');

      scrubBar.target = api;
      scrubBar.vgSlider = false;

      scrubBar.onTouchCancelScrubBar({ touches: [{ pageX: 20 }] });

      expect(api.seekTime).toHaveBeenCalledTimes(0);

      scrubBar.vgSlider = true;
      scrubBar.isSeeking = true;

      scrubBar.onTouchCancelScrubBar({ touches: [{ pageX: 20 }] });

      expect(api.seekTime).toHaveBeenCalledTimes(0);
    });
  });

  describe('onTouchEndScrubBar', () => {
    it('should not seek', () => {
      spyOn(api, 'seekTime');

      scrubBar.target = api;
      scrubBar.vgSlider = false;

      scrubBar.onTouchEndScrubBar({ touches: [{ pageX: 20 }] });

      expect(api.seekTime).toHaveBeenCalledTimes(0);

      scrubBar.vgSlider = true;
      scrubBar.isSeeking = true;

      scrubBar.onTouchEndScrubBar({ touches: [{ pageX: 20 }] });

      expect(api.seekTime).toHaveBeenCalledTimes(0);
    });
  });
});
