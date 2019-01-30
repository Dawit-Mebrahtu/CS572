import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab 11 - Counter App';
  // public counter = 7;
  public ComponentCounterValue;

  constructor() {
    this.ComponentCounterValue = 7;
  }

  counterUpdated(count: number) {
    // this.counter = count;
    this.ComponentCounterValue = count;
  }

}
