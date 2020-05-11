import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VgImaAdsComponent } from './vg-ima-ads.component';

describe('VgImaAdsComponent', () => {
  let component: VgImaAdsComponent;
  let fixture: ComponentFixture<VgImaAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VgImaAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VgImaAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
