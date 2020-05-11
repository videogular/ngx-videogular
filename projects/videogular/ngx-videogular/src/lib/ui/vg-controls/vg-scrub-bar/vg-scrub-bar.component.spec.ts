import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VgScrubBarComponent } from './vg-scrub-bar.component';

describe('VgScrubBarComponent', () => {
  let component: VgScrubBarComponent;
  let fixture: ComponentFixture<VgScrubBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VgScrubBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VgScrubBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
