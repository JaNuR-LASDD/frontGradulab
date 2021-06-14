import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrograduadoComponent } from './registrograduado.component';

describe('RegistrograduadoComponent', () => {
  let component: RegistrograduadoComponent;
  let fixture: ComponentFixture<RegistrograduadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrograduadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrograduadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
