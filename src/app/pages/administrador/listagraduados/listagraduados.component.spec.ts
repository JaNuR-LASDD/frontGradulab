import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagraduadosComponent } from './listagraduados.component';

describe('ListagraduadosComponent', () => {
  let component: ListagraduadosComponent;
  let fixture: ComponentFixture<ListagraduadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagraduadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagraduadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
