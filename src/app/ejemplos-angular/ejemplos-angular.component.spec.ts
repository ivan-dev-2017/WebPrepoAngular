import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplosAngularComponent } from './ejemplos-angular.component';

describe('EjemplosAngularComponent', () => {
  let component: EjemplosAngularComponent;
  let fixture: ComponentFixture<EjemplosAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemplosAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemplosAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
