import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-ejemplos-angular',
  templateUrl: './ejemplos-angular.component.html',
  styleUrls: ['./ejemplos-angular.component.css']
})
export class EjemplosAngularComponent implements OnInit {
  order: string = ""
  control: string = "Es Palíndromo"
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      console.log(params); // { order: "popular" }

      //this.order = params.order;
      //console.log(this.order); // popular
    }
    );
  }
  comprobarPalindromo(value: string): void {
    if (typeof value === 'string') {
      this.control = "Es Palíndromo"
      let repeticiones: number = 0
      let contador_aux: number = value.length - 1

      if ((value.length % 2) == 0) {
        repeticiones = value.length / 2
      }
      else {
        repeticiones = contador_aux / 2
      }
      for (let i = 0; i < repeticiones; i++) {
        
        if (value[i] != value[contador_aux]) {
          this.control = "No es Palíndromo"
          break
        }
        contador_aux -= 1
      }

    }

  }





}
