import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <p>
      User does not exist.
    </p>
  `,
  styles: []
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
