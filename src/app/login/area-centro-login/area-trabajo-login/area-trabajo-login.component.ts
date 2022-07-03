import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../../../login.service';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';


import { Pregunta } from '../../../modelo/pregunta';
import { Usuario } from '../../../modelo/usuario';
import { UsuarioLogin } from '../../../DTO/usuarioLogin';
import { MenssageService} from '../../../menssage.service';
import { UsuarioAutenticado } from '../../../DTO/UsuarioAutenticado';




@Component({
  selector: 'app-area-trabajo-login',
  templateUrl: './area-trabajo-login.component.html',
  styleUrls: ['./area-trabajo-login.component.css']
})
export class AreaTrabajoLoginComponent implements OnInit {
  preguntas: Pregunta[] = [];
  usuario: Usuario = {};  
  
  
  

  formularioLogin = new UntypedFormGroup({
    email: new UntypedFormControl(''),
    password: new UntypedFormControl(''),
  });

  
  constructor(private loginService:LoginService, private router: Router
    , private message:MenssageService) { }

  ngOnInit(): void {
    this.formularioLogin.get('email')?.setValue('ivan.velasco.333@gmail.com')
    this.formularioLogin.get('password')?.setValue('1234')

    
  }

  getPreguntas():void{
    this.loginService.getPreguntas().subscribe(heroes => this.preguntas = heroes);
    console.log(this.preguntas);
  }

  

  autenticacion(formularioLogin:{}):void{    
    
     this.loginService.autenticacionUsuario(formularioLogin).subscribe(      
      _ => this.usuario = _,
      err => console.error('Observer got an error: ' + err),
      () => console.log("Observer terminado")
    );

    this.message.sendMessage("usuario autenticado ;)");

    this.router.navigateByUrl('');
      
  
  }

  
  @ViewChild('id_span') idtest!: ElementRef;
  check():void{
    this.idtest.nativeElement.innerHTML = "AAAAAAAAAAAAAA"
    console.log(this.usuario);
  }
  

  onSubmitLoginUsuario():void {         
    this.loginService.autenticacionUsuario(this.formularioLogin.value).subscribe(      
      usuario => this.usuario = usuario,
      //_ => console.log(_),      
      err => console.error('Observer got an error: ' + err),
      () => console.log("Observer terminado")
    );    
    //this.message.sendMessage("usuario autenticado ;)");
    //this.router.navigateByUrl('');          
  }  

  onSubmitLoginUsuarioHash(): void {         
    this.loginService.autenticacionUsuarioHash(this.formularioLogin.value).subscribe(      
      (      x: any) => console.log(x),      
      (      //_ => console.log(_),      
      err: string) => console.error('Observer got an error: ' + err),
      () => console.log("Observer terminado")
    );    
      
  }  

  

}
