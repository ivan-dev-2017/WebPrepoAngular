import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { MenssageService } from '../menssage.service';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Pregunta } from '../modelo/pregunta';
import { Observable, of } from 'rxjs';
import { UsuarioAutenticado } from '../DTO/UsuarioAutenticado';




@Component({
  selector: 'app-centro',
  templateUrl: './centro.component.html',
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit, OnDestroy {

  public template_area_trabajo: string = "home"
  subscription: Subscription;
  preguntas: Pregunta[] = [];
  public mensajeErrorLogin: string = ""

  formularioLogin = new UntypedFormGroup({
    email: new UntypedFormControl(''),
    password: new UntypedFormControl(''),
  });

  constructor(private loginService: LoginService, private router: Router
    , private message: MenssageService, private servicioMensaje: MenssageService) {
    // subscribe to home component messages
    this.subscription = this.servicioMensaje.getMessages().subscribe(
      mensaje => this.actualizarAreaCentro(mensaje),
      err => console.error('servicioMensaje got an error: ' + err),
      () => console.log("servicioMensaje terminado")
    );
  }

  ngOnInit(): void {
    this.formularioLogin.get('email')?.setValue('ivan.velasco.333@gmail.com')
    this.formularioLogin.get('password')?.setValue('1234')

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  actualizarAreaCentro(mensaje: string): void {
    let mensajeJson = JSON.parse(mensaje)

    if (mensajeJson.codigo == "LOGING-USER") {
      console.log(mensajeJson.valor)
      if (mensajeJson.valor == "Iniciar Sesión") {
        this.template_area_trabajo = "home"
      }
      if (mensajeJson.valor == "Inicio") {
        this.template_area_trabajo = "login"
      }

    }

  }

  getPreguntas(): void {
    this.loginService.getPreguntas().subscribe(heroes => this.preguntas = heroes);
    console.log(this.preguntas);
  }

  onSubmitLoginUsuarioHash(): void {
    this.loginService.autenticacionUsuarioHash(this.formularioLogin.value).subscribe(
      userAutenticadoTemp => this.verificarAccesoUser(userAutenticadoTemp),
      err => console.error('Observer got an error: ' + err),
      () => console.log("Observer terminado")
    );

  }

  verificarAccesoUser(usuarioLoged: UsuarioAutenticado): void {
    console.log("ZZZZZ ", usuarioLoged.autenticacionHash)    
    
    if (usuarioLoged.autenticacionHash == undefined) {
      this.mensajeErrorLogin = "Error Autenticación"
      console.log(usuarioLoged.autenticacionHash)
    }
    else{

      console.log(usuarioLoged.autenticacionHash)
    }
    
  }


}
