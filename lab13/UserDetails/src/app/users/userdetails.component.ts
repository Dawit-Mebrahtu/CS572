import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userdetails',
  template: `
    <ul>
      <li *ngFor="let u of user | keyvalue">{{u.key | uppercase}} - {{u.value}}
    </ul>
  `,
  styles: []
})
export class UserdetailsComponent implements OnDestroy {
  private subscription: Subscription;
  uuid: string;
  users: object[] = [];
  user;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.users = this.dataService.getCachedData();
    this.subscription = route.params.subscribe(
      (param: any) => {
        this.uuid = param['uuid'];
        // this.user = this.users.filter(data => data['login'].uuid === this.uuid);
        this.user = this.users.find(data => data['login'].uuid === this.uuid);
      }
    );
   }

   ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
