import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogingraduadoComponent } from './logingraduado.component';

describe('LogingraduadoComponent', () => {
  let component: LogingraduadoComponent;
  let fixture: ComponentFixture<LogingraduadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogingraduadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogingraduadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
