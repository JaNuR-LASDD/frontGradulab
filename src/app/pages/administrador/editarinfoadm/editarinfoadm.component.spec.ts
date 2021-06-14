import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarinfoadmComponent } from './editarinfoadm.component';

describe('EditarinfoadmComponent', () => {
  let component: EditarinfoadmComponent;
  let fixture: ComponentFixture<EditarinfoadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarinfoadmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarinfoadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
