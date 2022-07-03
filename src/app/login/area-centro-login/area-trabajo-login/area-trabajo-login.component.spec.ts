import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaTrabajoLoginComponent } from './area-trabajo-login.component';

describe('AreaTrabajoLoginComponent', () => {
  let component: AreaTrabajoLoginComponent;
  let fixture: ComponentFixture<AreaTrabajoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaTrabajoLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaTrabajoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
