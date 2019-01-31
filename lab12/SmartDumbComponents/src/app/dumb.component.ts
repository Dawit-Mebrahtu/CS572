import { Component, OnInit, Input } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-dumb',
  template: `
    <div *ngIf="users; else emptyList">
      <p>
        List of users:
      </p>
      <ol>
        <li *ngFor="let user of users"> {{user.firstName}} {{user.lastName}}
      </ol>
    </div>
    <ng-template #emptyList>The users list is empty</ng-template>
  `,
  styles: []
})
export class DumbComponent {
  @Input() users: Object[];
}
