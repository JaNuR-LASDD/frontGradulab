import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebargraduadoComponent } from './sidebargraduado.component';

describe('SidebargraduadoComponent', () => {
  let component: SidebargraduadoComponent;
  let fixture: ComponentFixture<SidebargraduadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebargraduadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebargraduadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
