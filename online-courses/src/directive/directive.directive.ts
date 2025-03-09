import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appDirective]',
  standalone: true
})
export class DirectiveDirective implements OnChanges {

  @Input('appDirective') logIn: boolean = false;
  
  constructor(private el: ElementRef) { }
  
  ngOnChanges() {
    if (this.logIn) {
      this.el.nativeElement.style.backgroundColor ="lightgrey"
      this.el.nativeElement.setAttribute('title', 'you did not join already!!');
    } 
    else{
      this.el.nativeElement.style.backgroundColor ="white"
    }
  }

}
