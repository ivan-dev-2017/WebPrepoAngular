import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCentroLoginComponent } from './area-centro-login.component';

describe('AreaCentroLoginComponent', () => {
  let component: AreaCentroLoginComponent;
  let fixture: ComponentFixture<AreaCentroLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaCentroLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaCentroLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
