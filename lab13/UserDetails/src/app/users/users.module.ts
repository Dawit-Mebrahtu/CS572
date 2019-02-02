import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserdetailsComponent } from './userdetails.component';
import { RouterModule } from '@angular/router';
import { MyCanActivateGuard } from './mycanactivate.guard';

@NgModule({
  declarations: [
    UsersComponent,
    UserdetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UsersComponent },
      {
        path: '', component: UsersComponent, children: [
            { path: ':uuid', component: UserdetailsComponent, canActivate: [MyCanActivateGuard] }
        ]
      },
      { path: '**', redirectTo: '/' }
    ])
  ],
  providers: [MyCanActivateGuard],
  bootstrap: [UsersComponent]
})
export class UsersModule { }
