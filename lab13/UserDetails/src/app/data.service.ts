import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  getOnlineData() {
    return this.http.get('https://randomuser.me/api/?results=10');
  }

  getCachedData() {
    return (JSON.parse(localStorage.getItem('users'))).results;
  }

  isExist(uuid): boolean {
    const user = this.getCachedData().find(users => users.login.uuid === uuid);
    return user ? true : false;
  }
}
