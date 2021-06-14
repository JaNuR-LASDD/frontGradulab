import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuempresaComponent } from './menuempresa.component';

describe('MenuempresaComponent', () => {
  let component: MenuempresaComponent;
  let fixture: ComponentFixture<MenuempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuempresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
