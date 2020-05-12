import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VgTimeDisplayComponent } from './vg-time-display.component';
import { PipesModule } from '../../../pipes/pipes.module';

describe('VgTimeDisplayComponent', () => {
  let component: VgTimeDisplayComponent;
  let fixture: ComponentFixture<VgTimeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VgTimeDisplayComponent],
      imports: [PipesModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VgTimeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
