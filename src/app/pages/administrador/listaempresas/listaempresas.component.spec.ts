import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaempresasComponent } from './listaempresas.component';

describe('ListaempresasComponent', () => {
  let component: ListaempresasComponent;
  let fixture: ComponentFixture<ListaempresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaempresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaempresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
