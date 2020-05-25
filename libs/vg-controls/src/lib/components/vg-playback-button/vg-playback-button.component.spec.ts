import { ElementRef, ChangeDetectorRef } from '@angular/core';
import { VgPlaybackButtonComponent } from './vg-playback-button.component';
import { VgApiService, VgStates } from '@videogular/vg-core';

describe('Playback Button', () => {
  let playbackButton: VgPlaybackButtonComponent;
  let ref: ElementRef;
  let api: VgApiService;
  let cdr: ChangeDetectorRef;

  beforeEach(() => {
    ref = {
      nativeElement: {
        getAttribute: (name) => {
          return name;
        },
      },
    };

    api = new VgApiService();
    api.medias = {
      main: {
        state: VgStates.VG_PLAYING,
      },
      secondary: {
        state: VgStates.VG_PAUSED,
      },
    };

    cdr = {
      detectChanges: () => {},
      markForCheck: () => {},
      checkNoChanges: () => {},
      detach: () => {},
      reattach: () => {},
    };

    playbackButton = new VgPlaybackButtonComponent(ref, api, cdr);
  });

  it('Should set playbackIndex default value to 1', () => {
    expect(playbackButton.playbackIndex).toEqual(1);
  });

  it('Should get media by id on init', () => {
    spyOn(api, 'getMediaById').and.callFake(() => ({} as any));

    playbackButton.vgFor = 'test';
    playbackButton.onPlayerReady();

    expect(api.getMediaById).toHaveBeenCalledWith('test');
  });

  describe('onClick (single and multiple media)', () => {
    it('should increase playbackIndex', () => {
      api.medias = {
        main: {
          state: VgStates.VG_PLAYING,
        },
      };

      playbackButton.target = api;

      playbackButton.onClick();

      expect(playbackButton.playbackIndex).toEqual(2);
    });

    it('should set playbackRate to target media', () => {
      api.medias = {
        main: {
          state: VgStates.VG_PLAYING,
        },
      };

      playbackButton.target = api;

      playbackButton.onClick();

      expect(playbackButton.target.playbackRate).toEqual('1.5');
    });

    it('should set playbackRate to target media', () => {
      const media = {
        playbackRate: {
          test: '1',
        },
      };

      playbackButton.target = media;
      playbackButton.vgFor = 'test';

      playbackButton.onClick();

      expect(playbackButton.target.playbackRate.test).toEqual('1.5');
    });
  });
});
