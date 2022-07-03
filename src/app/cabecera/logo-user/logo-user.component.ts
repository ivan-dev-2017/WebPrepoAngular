import { Component, OnInit, VERSION, ViewChild, ElementRef} from '@angular/core';

import { Router } from '@angular/router';
import { MenssageService } from 'src/app/menssage.service';

@Component({
  selector: 'app-logo-user',
  templateUrl: './logo-user.component.html',
  styleUrls: ['./logo-user.component.css']
})
export class LogoUserComponent implements OnInit {

  
  
  public btn_log_visibility: boolean = true
  @ViewChild('btn_logo_texto') btnLogoTexto!: ElementRef;



  constructor(private servicioMensaje: MenssageService) {        

   }

  ngOnInit(): void {
    
    
    
  }




  inicioSesion(): void{
    let btnTemp = this.btnLogoTexto.nativeElement.innerHTML


    

    if(btnTemp == "Iniciar Sesión"){
      this.btnLogoTexto.nativeElement.innerHTML = "Inicio"
    }
    if(btnTemp == "Inicio"){
      this.btnLogoTexto.nativeElement.innerHTML = "Iniciar Sesión"
    }

    this.servicioMensaje.sendMessage(JSON.stringify({codigo: 'LOGING-USER',valor: this.btnLogoTexto.nativeElement.innerHTML}))
  }

  vaciarMensajes(): void{
    this.servicioMensaje.clearMessages()
  }


  ngAfterViewInit(): void {
    this.btnLogoTexto.nativeElement.innerHTML = "Iniciar Sesión"
    
    
  }
}
