import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCentroComponent } from './area-centro.component';

describe('AreaCentroComponent', () => {
  let component: AreaCentroComponent;
  let fixture: ComponentFixture<AreaCentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaCentroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
