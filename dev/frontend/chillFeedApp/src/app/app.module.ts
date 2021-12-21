import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogInComponent } from './log-in/log-in.component';

import {  RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListClientComponent } from './list-client/list-client.component';
import { CurrentWeekComponent } from './current-week/current-week.component';


const appRoutes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'log-in', component :LogInComponent},
  { path: 'not-found', component: ErrorPageComponent },
  {path:'listclient', component: ListClientComponent },
  {path:'week', component: CurrentWeekComponent },
  { path: '**' , redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    LogInComponent,
    NavBarComponent,
    ListClientComponent,
    CurrentWeekComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
