import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      // { path: '', component: AppComponent },
      { path: 'users', loadChildren: './users/users.module#UsersModule'},
      { path: 'error', component: ErrorComponent}
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
