import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  template: `
  <ol>
    <li *ngFor="let user of users">
      <a [routerLink]="[user.login.uuid]">{{user.name.first | titlecase}} {{user.name.last | titlecase}} </a>
    </li>
  </ol>
  <router-outlet></router-outlet>
`,
  styles: []
})
export class UsersComponent implements OnInit {
  id = 'd237b0f6-fb88-49bc-a346';
  users: object[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.users = this.dataService.getCachedData();
  }
}
