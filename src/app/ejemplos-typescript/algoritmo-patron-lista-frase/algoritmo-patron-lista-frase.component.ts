import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algoritmo-patron-lista-frase',
  templateUrl: './algoritmo-patron-lista-frase.component.html',
  styleUrls: ['./algoritmo-patron-lista-frase.component.css']
})
export class AlgoritmoPatronListaFraseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  patron_inicio = "aab"
  frase_inicio = "one one one"
  control_patron = "Inicio"

  comprobarPatron(patron: string, frase: string): boolean {
    let control = true
    let fraseArray = frase.split(" ")
    if (patron.length == fraseArray.length) {
      //llenar lista de pares
      var lista_pares: [string, string][] = [["", ""]];
      for (let i = 0; i < patron.length; i++) {
        let resultadoCaracter = this.buscarCaracter(lista_pares, patron.charAt(i))
        console.log(resultadoCaracter+" ")
        if(resultadoCaracter == "-1"){
          let resultadoPalabra = this.buscarPalabra(lista_pares, fraseArray[i])
          console.log(resultadoPalabra+"\n")
          if(!resultadoPalabra){
            lista_pares.push([patron.charAt(i), fraseArray[i]])
          }
        }
      }
      control = this.comprobarLista(lista_pares, patron, fraseArray)
      console.log(control)
      console.log(lista_pares)


    }

    return control
  }

  buscarCaracter(lista_pares: [string, string][], caracter: string): string {
    let control = "-1"
    for (let i = 0; i < lista_pares.length; i++) {
      if (lista_pares[i][0] === caracter) {
        control = lista_pares[i][1]
        break
      }
    }
    return control;
  }

  buscarPalabra(lista_pares: [string, string][], palabra: string): boolean {
    let control = false
    for (let i = 0; i < lista_pares.length; i++) {
      if (lista_pares[i][1] === palabra) {
        control = true
        break
      }
    }
    return control;
  }

  comprobarLista(lista_pares: [string, string][], caracter: string, fraseArray: string[]): boolean{
    let control = true
    for(let i=0; i<caracter.length; i++){
      let resultadoCaracter = this.buscarCaracter(lista_pares, caracter.charAt(i))
      if(resultadoCaracter != fraseArray[i]){
        control = false
      }      
    }
    this.control_patron = String(control)
    return control
  }

}
