import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinerAlfaComponent } from './spiner-alfa.component';

describe('SpinerAlfaComponent', () => {
  let component: SpinerAlfaComponent;
  let fixture: ComponentFixture<SpinerAlfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinerAlfaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinerAlfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
