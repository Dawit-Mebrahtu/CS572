import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      // { path: '', component: AppComponent },
      { path: 'users', loadChildren: './users/users.module#UsersModule'}
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
