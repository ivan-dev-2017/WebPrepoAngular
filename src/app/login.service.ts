import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Usuario } from './modelo/usuario';
import { Pregunta } from './modelo/pregunta';
import { UsuarioAutenticado } from './DTO/UsuarioAutenticado';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private heroesUrl = 'http://localhost:3333/guardarPregunta';  // URL to web api  
  private preguntas = 'http://localhost:3333/guardarPregunta';  // URL to web api  
  private urlAutenticacion = 'http://localhost:3333/login';
  private urlAutenticacionHash = 'http://localhost:3333/loginHash';

  usuarioLogin: Boolean = true;  
  private usuario:Usuario;
  
  

  constructor(private http: HttpClient) {
    this.usuario = {};
   }
  
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.heroesUrl).pipe(
      tap(_ => console.log('fetched usuarios')),
      catchError(this.handleError<Usuario[]>('getHeroes', []))
    );
  }   
  

  getPreguntas(): Observable<Pregunta[]> {
    return this.http.get<Pregunta[]>(this.preguntas).pipe(
      tap(_ => console.log('fetched usuarios')),
      catchError(this.handleError<Pregunta[]>('getPreguntas', []))
    );
  }    


  autenticacionUsuario(usuarioLogin:{}): Observable<Usuario>{
    
    return this.http.post<Usuario>(this.urlAutenticacion, usuarioLogin, httpOptions).pipe(      
      catchError(this.handleError<Usuario>('autenticacion'))
    );    
    /*
    return this.http.post<Usuario>(this.urlAutenticacion, formularioLogin, httpOptions).pipe(
      tap(_ => {
        this.usuario = _;
        console.log('usuario autenticado')
      },
      err => console.error('Observer got an error: ==== ' + err),
      () => this.usuarioAutenticado()),
      catchError(this.handleError<Usuario>('autenticacion'))
    );
    */
    
  }

  autenticacionUsuarioHash(usuarioLogin:{}): Observable<UsuarioAutenticado>{
    
    return this.http.post<Usuario>(this.urlAutenticacionHash, usuarioLogin, httpOptions).pipe(      
      catchError(this.handleError<Usuario>('autenticacion'))
    );
    
  }

  usuarioAutenticado(){
    this.usuarioLogin = false;
  }  

  getUsuarioAutenticado():Usuario{
    return this.usuario;
  }






/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}  

}
