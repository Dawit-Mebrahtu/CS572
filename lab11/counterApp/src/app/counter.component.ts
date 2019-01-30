import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
   <button (click)="decrement()"> - </button>
   <label>{{counterValue}}</label>
   <button (click)="increment()">+</button>
  `,
  styles: ['button {color: red}', 'label {background-color: yellow}']
})
export class CounterComponent implements OnChanges {
  public counterValue = 0;
  @Input() counter: number;
  @Output() counterChange = new  EventEmitter();


  ngOnChanges() {
    this.counterValue = this.counter;
  }

  decrement() {
    this.counter = this.counterValue--;
    this.counterChange.emit(this.counterValue);
    return false;
  }

  increment() {
    this.counter = this.counterValue++;
    this.counterChange.emit(this.counterValue);
    return false;
  }
}
