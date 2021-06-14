import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogempresaComponent } from './logempresa.component';

describe('LogempresaComponent', () => {
  let component: LogempresaComponent;
  let fixture: ComponentFixture<LogempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogempresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
