import { async, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { VgPlayerComponent } from './vg-player.component';
import { VgApiService } from '../../services/vg-api/vg-api.service';
import { VgFullscreenApiService } from '../../services/vg-fullscreen-api/vg-fullscreen-api.service';
import { VgControlsHiddenService } from '../../services/vg-controls-hidden/vg-controls-hidden.service';

describe('Videogular Player', () => {
  let player: VgPlayerComponent;
  let ref: ElementRef;
  let api: VgApiService;
  let fsAPI: VgFullscreenApiService;
  let controlsHidden: VgControlsHiddenService;

  beforeEach(() => {
    ref = {
      nativeElement: {
        querySelectorAll: () => {
          return [{}];
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
    player = new VgPlayerComponent(ref, api, fsAPI, controlsHidden);
  });

  it('Should handle native fullscreen', () => {
    fsAPI.nativeFullscreen = true;

    player.onChangeFullscreen(true);

    expect(player.isFullscreen).toBeFalsy();
  });

  it('Should handle emulated fullscreen enabled', () => {
    fsAPI.nativeFullscreen = false;

    player.onChangeFullscreen(true);

    expect(player.isFullscreen).toBeTruthy();
    expect(player.zIndex).toBe('1');
  });

  it('Should handle emulated fullscreen enabled', () => {
    fsAPI.nativeFullscreen = false;

    player.onChangeFullscreen(false);

    expect(player.isFullscreen).toBeFalsy();
    expect(player.zIndex).toBe('auto');
  });
});

describe('Videogular Player', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VgPlayerTest, VgPlayerComponent],
    });
  });

  beforeEach(async(() => {
    TestBed.compileComponents();
  }));

  it('Should create a VgPlayer component', async(() => {
    const fixture = TestBed.createComponent(VgPlayerTest);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const video = compiled.querySelector('video');

    expect(video.controls).toBe(true);
  }));
});

@Component({
  template: `
    <vg-player>
      <video vg-media id="singleVideo" preload="auto" controls>
        <source
          src="http://static.videogular.com/assets/videos/videogular.mp4"
          type="video/mp4"
        />
        <source
          src="http://static.videogular.com/assets/videos/videogular.ogg"
          type="video/ogg"
        />
        <source
          src="http://static.videogular.com/assets/videos/videogular.webm"
          type="video/webm"
        />
      </video>
    </vg-player>
  `,
  providers: [VgApiService],
})
class VgPlayerTest {}
