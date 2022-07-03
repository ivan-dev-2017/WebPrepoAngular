import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Usuario } from '../modelo/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private usaurioService: LoginService) { }
  usuarios: Usuario[] = [];
  getUsuarios(): void {
    this.usaurioService.getUsuarios().subscribe(usuarios => this.usuarios = usuarios);
  }   

  ngOnInit(): void {
  }

}
