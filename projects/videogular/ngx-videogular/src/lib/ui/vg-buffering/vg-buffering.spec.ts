import { ElementRef } from '@angular/core';
import { VgBufferingComponent } from './vg-buffering.component';
import { VgApiService } from '../../services/vg-api/vg-api.service';

describe('Buffering', () => {
  let vgBuffering: VgBufferingComponent;
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
    vgBuffering = new VgBufferingComponent(ref, api);
  });

  describe('onPlayerReady', () => {
    it('should subscribe to bufferDetected media events', () => {
      spyOn(api, 'getMediaById').and.returnValue({
        subscriptions: {
          bufferDetected: { subscribe: jasmine.createSpy('bufferDetected') },
        },
      } as any);
      vgBuffering.onPlayerReady();
      expect(
        vgBuffering.target.subscriptions.bufferDetected.subscribe
      ).toHaveBeenCalled();
    });
  });

  describe('isBuffering', () => {
    it('should show if buffer is detected', () => {
      vgBuffering.onUpdateBuffer(true);
      expect(vgBuffering.isBuffering).toBe(true);
    });
    it('should hide if buffer is not detected', () => {
      vgBuffering.onUpdateBuffer(false);
      expect(vgBuffering.isBuffering).toBe(false);
    });
  });
});
