import { Component, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <p>
      Displaying users using dumb component
    </p>
    <app-dumb [users]="data" ></app-dumb>
    <div appIsVisible [isVisible]="visible" [class.myBorder]="true">isVisible Directive</div><br>
    <div appLoggable [ngClass]="{myColor:true, myBorder:false}">Logger Directive - Double click here and see console for outupt</div><br>
    <button (click)="showHide()">Toggle isVisible Directive</button>
  `,
  styles: ['.myBorder { border: 2px solid red; }',
           '.myColor  { color: green; }']
})
export class SmartComponent implements AfterViewChecked {
  visible = true;

  data = [{'firstName': 'Didu', 'lastName': 'Mebrahtu'},
          {'firstName': 'Tatiye', 'lastName': 'Ahmed'},
          {'firstName': 'Dani', 'lastName': 'Zumie'}];

  constructor(private cd: ChangeDetectorRef) {
  }

  showHide() {
    this.visible = !this.visible;
    console.log(this.visible);
  }
  ngAfterViewChecked() {
    this.cd.detectChanges();
  }
}
