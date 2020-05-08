import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VgBufferingComponent } from './vg-buffering.component';

describe('VgBufferingComponent', () => {
  let component: VgBufferingComponent;
  let fixture: ComponentFixture<VgBufferingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VgBufferingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VgBufferingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
