import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciopublicoComponent } from './iniciopublico.component';

describe('IniciopublicoComponent', () => {
  let component: IniciopublicoComponent;
  let fixture: ComponentFixture<IniciopublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciopublicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciopublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
