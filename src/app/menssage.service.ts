import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenssageService {
  private subject = new Subject<any>();

  constructor() { }

  sendMessage(message : string){
    this.subject.next(message);
  }

  clearMessages(){
    this.subject.next();
  }

  getMessages() : Observable<any>{
    return this.subject.asObservable();
  }

}
