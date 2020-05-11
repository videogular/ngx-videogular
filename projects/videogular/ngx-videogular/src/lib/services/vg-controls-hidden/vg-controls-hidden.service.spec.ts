import { Observable } from 'rxjs';
import { VgControlsHiddenService } from './vg-controls-hidden.service';

describe('VgControlsHidden Service', () => {
  let controlsHidden: VgControlsHiddenService;

  beforeEach(() => {
    controlsHidden = new VgControlsHiddenService();
  });

  it('Should provide an Observable', () => {
    expect(controlsHidden.isHidden).toEqual(jasmine.any(Observable));
  });

  it('Should set state to true', () => {
    controlsHidden.isHidden.subscribe((state) => {
      expect(state).toBe(true);
    });

    controlsHidden.state(true);
  });

  it('Should set state to false', () => {
    controlsHidden.isHidden.subscribe((state) => {
      expect(state).toBe(false);
    });

    controlsHidden.state(false);
  });
});
