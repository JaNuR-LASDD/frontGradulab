import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderlogeadoComponent } from './headerlogeado.component';

describe('HeaderlogeadoComponent', () => {
  let component: HeaderlogeadoComponent;
  let fixture: ComponentFixture<HeaderlogeadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderlogeadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderlogeadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
