import { ElementRef } from '@angular/core';
import { VgScrubBarCurrentTimeComponent } from './vg-scrub-bar-current-time.component';
import { VgApiService } from '@videogular/vg-core';

describe('Scrub bar current time', () => {
  let scrubBarCurrentTime: VgScrubBarCurrentTimeComponent;
  let ref: ElementRef;
  let api: VgApiService;

  beforeEach(() => {
    ref = {
      nativeElement: {
        getAttribute: (name) => {
          return name;
        },
      },
    };

    api = new VgApiService();

    scrubBarCurrentTime = new VgScrubBarCurrentTimeComponent(ref, api);
  });

  it('Should get media by id on init', () => {
    spyOn(api, 'getMediaById');

    scrubBarCurrentTime.vgFor = 'test';
    scrubBarCurrentTime.onPlayerReady();

    expect(api.getMediaById).toHaveBeenCalledWith('test');
  });

  describe('getPercentage', () => {
    it('should return 50% when current time is 10 and total time is 20', () => {
      scrubBarCurrentTime.target = {
        time: {
          current: 10,
          total: 20,
        },
      };

      const percent = scrubBarCurrentTime.getPercentage();

      expect(percent).toEqual('50%');
    });

    it('should return 25% when current time is 5 and total time is 20', () => {
      scrubBarCurrentTime.target = {
        time: {
          current: 5,
          total: 20,
        },
      };

      const percent = scrubBarCurrentTime.getPercentage();

      expect(percent).toEqual('25%');
    });

    it('should return 27% when current time is 3 and total time is 11', () => {
      scrubBarCurrentTime.target = {
        time: {
          current: 3,
          total: 11,
        },
      };

      const percent = scrubBarCurrentTime.getPercentage();

      expect(percent).toEqual('27%');
    });
  });
});
