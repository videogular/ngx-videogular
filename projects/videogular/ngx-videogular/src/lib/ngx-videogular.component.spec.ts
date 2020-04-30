import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxVideogularComponent } from './ngx-videogular.component';

describe('NgxVideogularComponent', () => {
  let component: NgxVideogularComponent;
  let fixture: ComponentFixture<NgxVideogularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxVideogularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxVideogularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
