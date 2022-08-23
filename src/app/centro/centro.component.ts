import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { MenssageService } from '../menssage.service';
import { UntypedFormGroup, UntypedFormControl, Validators, FormGroup, FormControl } from '@angular/forms';
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
  @ViewChild('emailrecuperar', { static: true }) emailRecuperar: ElementRef;

  private RegexMail: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"

  public formularioLogin = new UntypedFormGroup({
    email: new UntypedFormControl('',
      [Validators.required, Validators.pattern(this.RegexMail)]),
    password: new UntypedFormControl(''),
  });

  public formulario_recuperar_cuenta = new UntypedFormGroup({
    email_recuperacion: new UntypedFormControl('',
      [Validators.required, Validators.pattern(this.RegexMail)])

  });

  constructor(private _elementRef: ElementRef, private loginService: LoginService, private router: Router
    , private message: MenssageService, private servicioMensaje: MenssageService) {
    this.emailRecuperar = this._elementRef.nativeElement;


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
    else {

      console.log(usuarioLoged.autenticacionHash)
    }

  }

  /*
    Recuperar cuenta
  */
  public valorEmailRecuperar: string = ""
  recuperarCuenta(): void {
    this.template_area_trabajo = "recuperar_cuenta"

    this.formulario_recuperar_cuenta.get('email_recuperacion')?.setValue(
      this.formularioLogin.get('email')?.value
    )
    
    let correoRecuperacionEnviado: boolean = false

    if (this.formularioLogin.get('email')?.value.length > 7) {
      console.log(this.formulario_recuperar_cuenta.value)
      this.loginService.recuperarPassword(this.formulario_recuperar_cuenta.value).subscribe(
        _ => correoRecuperacionEnviado = _,
        err => console.error('Observer Correo got an error: ' + err),
        () => console.log("Correo enviado terminado")
      );

    }
    else {
      console.log("mail incorrecto")
    }






  }





}
