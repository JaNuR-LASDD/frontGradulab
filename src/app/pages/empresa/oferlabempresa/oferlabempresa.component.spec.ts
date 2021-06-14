import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OferlabempresaComponent } from './oferlabempresa.component';

describe('OferlabempresaComponent', () => {
  let component: OferlabempresaComponent;
  let fixture: ComponentFixture<OferlabempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OferlabempresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OferlabempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
