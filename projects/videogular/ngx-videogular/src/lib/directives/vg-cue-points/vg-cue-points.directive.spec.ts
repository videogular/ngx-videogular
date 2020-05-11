import { ElementRef } from '@angular/core';
import { VgCuePointsDirective } from './vg-cue-points.directive';

describe('Cue points', () => {
  let cuePoints: VgCuePointsDirective;
  let ref: ElementRef;

  beforeEach(() => {
    ref = {
      nativeElement: document.createElement('div'),
    };

    cuePoints = new VgCuePointsDirective(ref);
  });

  it('Should handle onLoad event', () => {
    cuePoints.ngOnInit();

    expect(cuePoints.onLoad$).toBeDefined();
  });

  xit('Should handle enter/exit events', () => {
    const event = {
      target: document.createElement('video'),
    };

    const track = event.target.addTextTrack('captions', 'test');
    track.addCue(new TextTrackCue(1, 2, 'cue 1')); // Illegal Constructor

    cuePoints.onLoad(event);
    expect(cuePoints.onEnter$).toBeDefined();
    expect(cuePoints.onExit$).toBeDefined();
  });

  it('Should handle onEnter event', () => {
    spyOn(cuePoints.onEnterCuePoint, 'emit').and.callThrough();

    const event = {
      target: {},
    };

    cuePoints.onEnter(event);

    expect(cuePoints.onEnterCuePoint.emit).toHaveBeenCalledWith(event.target);
  });

  it('Should handle onExit event', () => {
    spyOn(cuePoints.onExitCuePoint, 'emit').and.callThrough();

    const event = {
      target: {},
    };

    cuePoints.onExit(event);

    expect(cuePoints.onExitCuePoint.emit).toHaveBeenCalledWith(event.target);
  });
});
