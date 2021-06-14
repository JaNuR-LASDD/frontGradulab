import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OferlaboraldirComponent } from './oferlaboraldir.component';

describe('OferlaboraldirComponent', () => {
  let component: OferlaboraldirComponent;
  let fixture: ComponentFixture<OferlaboraldirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OferlaboraldirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OferlaboraldirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
