import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoUserComponent } from './logo-user.component';

describe('LogoUserComponent', () => {
  let component: LogoUserComponent;
  let fixture: ComponentFixture<LogoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
