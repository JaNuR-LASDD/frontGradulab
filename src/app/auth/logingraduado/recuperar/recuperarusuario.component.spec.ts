import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarusuarioComponent } from './recuperarusuario.component';

describe('RecuperarusuarioComponent', () => {
  let component: RecuperarusuarioComponent;
  let fixture: ComponentFixture<RecuperarusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperarusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
