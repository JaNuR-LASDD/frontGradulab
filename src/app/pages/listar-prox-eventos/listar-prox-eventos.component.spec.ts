import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProxEventosComponent } from './listar-prox-eventos.component';

describe('ListarProxEventosComponent', () => {
  let component: ListarProxEventosComponent;
  let fixture: ComponentFixture<ListarProxEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarProxEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProxEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
