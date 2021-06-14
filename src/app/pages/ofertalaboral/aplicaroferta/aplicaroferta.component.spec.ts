import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicarofertaComponent } from './aplicaroferta.component';

describe('AplicarofertaComponent', () => {
  let component: AplicarofertaComponent;
  let fixture: ComponentFixture<AplicarofertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicarofertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicarofertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
