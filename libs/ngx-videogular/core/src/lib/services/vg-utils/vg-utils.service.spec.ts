import { VgUtilsService } from './vg-utils.service';

describe('Videogular Utils', () => {
  it('Should get the highest z-index', () => {
    spyOn(window, 'getComputedStyle').and.callFake(
      () => ({ 'z-index': 2 } as any)
    );

    const highestZ = VgUtilsService.getZIndex();

    expect(highestZ).toBe(3);
  });

  it('Should get if is a mobile device', () => {
    // window.orientation is not writable
    const isMobileDevice = VgUtilsService.isMobileDevice();

    expect(isMobileDevice).toBeFalsy();
  });

  it('Should get if is an iOS device', () => {
    const isiOS = VgUtilsService.isiOSDevice();

    expect(isiOS).toBeFalsy();
  });

  it('Should get if is a Cordova app', () => {
    const isCordova = VgUtilsService.isCordova();

    expect(isCordova).toBeFalsy();
  });
});
