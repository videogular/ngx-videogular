import { ElementRef } from '@angular/core';
import { VgApiService } from '../../services/vg-api/vg-api.service';
import { VgOverlayPlayComponent } from './vg-overlay-play.component';
import { VgFullscreenApiService } from '../../services/vg-fullscreen-api/vg-fullscreen-api.service';
import { VgControlsHiddenService } from '../../services/vg-controls-hidden/vg-controls-hidden.service';
import { VgStates } from '../../services/vg-states/vg-states.service';

describe('Videogular Player', () => {
  let overlayPlay: VgOverlayPlayComponent;
  let ref: ElementRef;
  let api: VgApiService;
  let fsAPI: VgFullscreenApiService;
  let controlsHidden: VgControlsHiddenService;

  beforeEach(() => {
    ref = {
      nativeElement: {
        getAttribute: (name) => {
          return name;
        },
      },
    };

    controlsHidden = {
      isHidden: {
        subscribe: () => {},
      },
    } as VgControlsHiddenService;

    api = new VgApiService();
    fsAPI = new VgFullscreenApiService();
    overlayPlay = new VgOverlayPlayComponent(ref, api, fsAPI, controlsHidden);
  });

  it('Should get media by id on init', () => {
    spyOn(api, 'getMediaById').and.returnValue({
      subscriptions: {
        bufferDetected: { subscribe: jasmine.createSpy('bufferDetected') },
      },
    } as any);

    overlayPlay.vgFor = 'test';
    overlayPlay.onPlayerReady();

    expect(api.getMediaById).toHaveBeenCalledWith('test');
    expect(
      overlayPlay.target.subscriptions.bufferDetected.subscribe
    ).toHaveBeenCalled();
  });

  describe('onClick', () => {
    beforeEach(() => {
      overlayPlay.target = {
        play: () => {},
        pause: () => {},
      };
    });

    it('current state play should set target to pause', () => {
      spyOn(overlayPlay, 'getState').and.callFake(() => {
        return VgStates.VG_PLAYING;
      });
      spyOn(overlayPlay.target, 'pause');

      overlayPlay.onClick();

      expect(overlayPlay.getState).toHaveBeenCalled();
      expect(overlayPlay.target.pause).toHaveBeenCalled();
    });

    it('current state pause should set target to play', () => {
      spyOn(overlayPlay, 'getState').and.callFake(() => {
        return VgStates.VG_PAUSED;
      });
      spyOn(overlayPlay.target, 'play');

      overlayPlay.onClick();

      expect(overlayPlay.getState).toHaveBeenCalled();
      expect(overlayPlay.target.play).toHaveBeenCalled();
    });
  });

  describe('getState', () => {
    beforeEach(() => {
      overlayPlay.target = {
        state: null,
      };
    });

    it('if only one state returns that state', () => {
      overlayPlay.target.state = VgStates.VG_PAUSED;

      expect(overlayPlay.getState()).toEqual(VgStates.VG_PAUSED);
    });

    it('if more than one target should return pause if all of them are pause', () => {
      overlayPlay.target.state = [
        VgStates.VG_PAUSED,
        VgStates.VG_PAUSED,
        VgStates.VG_PAUSED,
        VgStates.VG_PAUSED,
      ];

      expect(overlayPlay.getState()).toEqual(VgStates.VG_PAUSED);
    });

    it('if more than one target should return play if any of them is play', () => {
      overlayPlay.target.state = [
        VgStates.VG_PAUSED,
        VgStates.VG_PLAYING,
        VgStates.VG_PAUSED,
        VgStates.VG_PAUSED,
      ];

      expect(overlayPlay.getState()).toEqual(VgStates.VG_PLAYING);
    });
  });
});
