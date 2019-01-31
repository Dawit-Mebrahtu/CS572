import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective implements OnChanges {

  @Input() isVisible: boolean;

  constructor() {}

  @HostBinding('style.visibility') eleVisibility;

  // ngOnInit() {
  //   this.eleVisibility = !this.isVisible ? 'hidden' : 'none';
  // }

  ngOnChanges() {
    this.eleVisibility = !this.isVisible ? 'hidden' : 'none';
  }
}
