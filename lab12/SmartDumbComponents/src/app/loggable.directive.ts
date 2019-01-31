import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appLoggable]'
})
export class LoggableDirective {

  constructor() {}

  @HostListener('dblclick') logger() {
    // this.e.nativeElement.textContent = 'red';
    console.log('DIV element has been clicked');
  }

}
