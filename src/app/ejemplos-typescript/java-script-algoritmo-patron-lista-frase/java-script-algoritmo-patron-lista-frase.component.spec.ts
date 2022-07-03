import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaScriptAlgoritmoPatronListaFraseComponent } from './java-script-algoritmo-patron-lista-frase.component';

describe('JavaScriptAlgoritmoPatronListaFraseComponent', () => {
  let component: JavaScriptAlgoritmoPatronListaFraseComponent;
  let fixture: ComponentFixture<JavaScriptAlgoritmoPatronListaFraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaScriptAlgoritmoPatronListaFraseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaScriptAlgoritmoPatronListaFraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
