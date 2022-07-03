import { Component, Directive, OnInit, TemplateRef } from '@angular/core';


@Component({
  selector: 'app-area-centro',
  templateUrl: './area-centro.component.html',
  styleUrls: ['./area-centro.component.css']
})
export class AreaCentroComponent implements OnInit {

  valorTexto: String = ";) @Input Paso valor Componente Padre a Hijo"

  mensajeDesdeComponenteHijo: String = "";
  constructor() { }

  ngOnInit(): void {
  }

  addMensaje(nuevoMensaje: String){
    this.mensajeDesdeComponenteHijo = nuevoMensaje;
  }

}
