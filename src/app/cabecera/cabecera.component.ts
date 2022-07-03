import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { LoginService } from '../login.service';
import { MenssageService } from '../menssage.service';
import { Usuario } from '../modelo/usuario';
import { LogoUserComponent } from './logo-user/logo-user.component';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {


  mostrarBotonLogin: Boolean = true;
  mensajeTexto!: string;
  usuarioPrueba: Object = { nombre: "Iván", Ciudad: "Quito" };

  

  //usuario:Usuario;

  constructor(private loginService: LoginService, private message: MenssageService,
    private router: Router) {
    this.mostrarBotonLogin = loginService.usuarioLogin;

    
    //this.usuario = this.loginService.getUsuarioAutenticado();


    /*this.message.getMessages().subscribe(message => {
      if(message){
        this.mensajeTexto = message;   
        console.warn(";)))))"+message);     
      }
    });
    */


    /*setTimeout(()=> {
      this.mensajeTexto = "new M "+Math.random() * (10 - 1) + 1;
    },4000);*/

  }



  goExamples() {
    this.router.navigate(['/examples'], { queryParams: this.usuarioPrueba });
  }

  mostrarServicio(textoT: string) {
    

  }

  mostrarServicio2() {

    //this.mensajeTexto = "AAAA";
    

  }

  ngOnChanges(): void {
    //console.warn("barra superior ngOnChanges");


  }

  ngOnInit(): void {
    //console.warn("barra superior ngOnInit");
    


    /*this.message.getMessages().subscribe((data) => this.handleData(data),
     (error) => this.handleError(error), () => this.handleComplete());    
    
    this.message.getMessages().subscribe(message => {
      if(message){
        this.mensajeTexto = message;
        console.log("mensaje recibido "+message);
      }
    });*/
  }



  handleData = (data: any) => {
    //this.mensajeTexto = data;
    //console.log('Here are the usable data', data, this.mensajeTexto);
  }

  handleComplete = () => {
    console.log('Complete');
  }

  handleError = (error: any) => {
    console.log('error:', error)

  }

  ngDoCheck(): void {
    //console.warn("barra superior ngDoCheck");
    //this.mensajeTexto = "BBBB";
  }

  ngAfterContentInit(): void {
    //console.warn("barra superior ngAfterContentInit");
    
  }

  ngAfterContentChecked(): void {
    //console.warn("barra superior ngAfterContentChecked");
    
  }

  ngAfterViewInit(): void {
    //console.warn("barra superior ngAfterViewInit");
    //console.log(this.btnLogin.nativeElement.innerHTML )
    
    
  }

  ngAfterViewChecked(): void {
    //console.warn("barra superior ngAfterViewChecked");
    
  }

  ngOnDestroy(): void {
    //console.warn("barra superior ngOnDestroy");
  }

}
