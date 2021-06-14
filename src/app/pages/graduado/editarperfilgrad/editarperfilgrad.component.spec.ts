import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarperfilgradComponent } from './editarperfilgrad.component';

describe('EditarperfilgradComponent', () => {
  let component: EditarperfilgradComponent;
  let fixture: ComponentFixture<EditarperfilgradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarperfilgradComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarperfilgradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
