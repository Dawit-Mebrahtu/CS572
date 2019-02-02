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
    // this.users = this.dataService.getCachedData();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.dataService.isExist(route.params.uuid)) {
        return true;
      }
      // console.log('trying to display error page');
      return this.router.navigate(['error']);
  }
}
