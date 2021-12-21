import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogInComponent } from './log-in/log-in.component';

import {  RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ClientInfoComponent } from './client-info/client-info.component';



const appRoutes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'log-in', component :LogInComponent},
  { path: 'client-info', component : ClientInfoComponent},
  { path: 'not-found', component: ErrorPageComponent },
  { path: '**' , redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    LogInComponent,
    ClientInfoComponent
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
