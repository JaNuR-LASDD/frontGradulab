import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditargraduadoComponent } from './editargraduado.component';

describe('EditargraduadoComponent', () => {
  let component: EditargraduadoComponent;
  let fixture: ComponentFixture<EditargraduadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditargraduadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditargraduadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
