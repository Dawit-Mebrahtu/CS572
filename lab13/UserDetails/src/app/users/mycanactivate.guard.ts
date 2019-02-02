import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class MyCanActivateGuard implements CanActivate {
  users: object[] = [];
  uuid;

  constructor(private dataService: DataService, private router: Router) {
    this.users = this.dataService.getCachedData();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(route.params.uuid);
      console.log(state);
      this.uuid = this.users.find(data => data['login'].uuid === route.params.uuid);
      if (this.uuid) {
        return true;
      } else {
        console.log('INVALID UUID');
        // this.router.navigate(['/users/error']);
      }
  }
}
