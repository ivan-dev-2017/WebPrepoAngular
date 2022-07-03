import { Component, OnInit, Input, Output, EventEmitter, ContentChild, Directive, TemplateRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-area-trabajo',
  templateUrl: './area-trabajo.component.html',
  styleUrls: ['./area-trabajo.component.css']
})
export class AreaTrabajoComponent implements OnInit {
  @Input() mensajeTexto!: String;

  @Output() newMensajeEvent = new EventEmitter<string>();  

  //id if container
  contentId: String="contentId";
  expanded : Boolean = true;
  template : String ="template1";

  

  constructor() {
    
   }

   

  
  

  ngOnInit(): void {
  }

  cambioTemplate(){
    
    /*
    if(this.template == "template1"){
      this.template = "template2";
    }
    else{
      this.template = "template1";
    }*/
  }

  addNewItem(value: string) {
    this.newMensajeEvent.emit(value);
  }  

}
