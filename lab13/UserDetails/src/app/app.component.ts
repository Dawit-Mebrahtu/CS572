import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <a [routerLink]="['/']">Home</a> &nbsp;
    <a [routerLink]="['users']">Load Users</a>
    <router-outlet></router-outlet>
  `,
  styleUrls: []
})
export class AppComponent implements OnInit {
  title = 'UserDetails';
  users: string[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getOnlineData().subscribe(
      data => {
        localStorage.setItem('users', JSON.stringify(data));
      });
  }
}
