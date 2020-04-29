import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpxVideogularComponent } from './npx-videogular.component';

describe('NpxVideogularComponent', () => {
  let component: NpxVideogularComponent;
  let fixture: ComponentFixture<NpxVideogularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpxVideogularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpxVideogularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
