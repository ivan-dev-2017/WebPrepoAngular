import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoritmoPatronListaFraseComponent } from './algoritmo-patron-lista-frase.component';

describe('AlgoritmoPatronListaFraseComponent', () => {
  let component: AlgoritmoPatronListaFraseComponent;
  let fixture: ComponentFixture<AlgoritmoPatronListaFraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgoritmoPatronListaFraseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoritmoPatronListaFraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
