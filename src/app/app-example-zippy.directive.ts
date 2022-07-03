import { ContentChild, Directive, TemplateRef } from '@angular/core';


@Directive({
  selector: '[appExampleZippyContent]'
})

export class AppExampleZippyDirective {

  constructor(public templateRef: TemplateRef<unknown>) { }

}
