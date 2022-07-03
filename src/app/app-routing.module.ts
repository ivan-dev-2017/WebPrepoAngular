import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemplosAngularComponent } from './ejemplos-angular/ejemplos-angular.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  //{ path: '', component: InicioComponent},  
  { path: '', component: HomeComponent},  
  { path: 'examples', component: EjemplosAngularComponent},  
  { path: 'login', component: LoginComponent },
  { path: '**', component: PaginaNoEncontradaComponent }  // Wildcard route for a 404 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
