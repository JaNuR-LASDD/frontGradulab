import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarperfilempComponent } from './editarperfilemp.component';

describe('EditarperfilempComponent', () => {
  let component: EditarperfilempComponent;
  let fixture: ComponentFixture<EditarperfilempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarperfilempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarperfilempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
