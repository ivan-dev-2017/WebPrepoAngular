import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { MenuIzquierdaComponent } from './menu-izquierda/menu-izquierda.component';
import { AreaTrabajoComponent } from './area-trabajo/area-trabajo.component';
import { AreaCentroComponent } from './area-centro/area-centro.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { LoginComponent } from './login/login.component';
import { AreaCentroLoginComponent } from './login/area-centro-login/area-centro-login.component';
import { AreaTrabajoLoginComponent } from './login/area-centro-login/area-trabajo-login/area-trabajo-login.component';
import { InicioComponent } from './inicio/inicio.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { EjemplosAngularComponent } from './ejemplos-angular/ejemplos-angular.component';
import { AlgoritmoPatronListaFraseComponent } from './ejemplos-typescript/algoritmo-patron-lista-frase/algoritmo-patron-lista-frase.component';
import { JavaScriptAlgoritmoPatronListaFraseComponent } from './ejemplos-typescript/java-script-algoritmo-patron-lista-frase/java-script-algoritmo-patron-lista-frase.component';
import { SpinerAlfaComponent } from './ejemplos-typescript/spiner-alfa/spiner-alfa.component';
import { LogoUserComponent } from './cabecera/logo-user/logo-user.component';
import { HomeComponent } from './home/home.component';
import { CentroComponent } from './centro/centro.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuIzquierdaComponent,
    AreaTrabajoComponent,
    AreaCentroComponent,
    PaginaNoEncontradaComponent,
    LoginComponent,
    AreaCentroLoginComponent,
    AreaTrabajoLoginComponent,
    InicioComponent,
    CabeceraComponent,
    PieComponent,
    EjemplosAngularComponent,

    AlgoritmoPatronListaFraseComponent,
     JavaScriptAlgoritmoPatronListaFraseComponent,
     SpinerAlfaComponent,
     LogoUserComponent,
     HomeComponent,
     CentroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }