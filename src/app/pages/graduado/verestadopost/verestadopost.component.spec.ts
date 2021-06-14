import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerestadopostComponent } from './verestadopost.component';

describe('VerestadopostComponent', () => {
  let component: VerestadopostComponent;
  let fixture: ComponentFixture<VerestadopostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerestadopostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerestadopostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
