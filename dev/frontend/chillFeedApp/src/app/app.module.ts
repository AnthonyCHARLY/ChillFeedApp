import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogInComponent } from './log-in/log-in.component';

import {  RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorPageComponent } from './error-page/error-page.component';


const appRoutes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'log-in', component :LogInComponent},
  { path: 'not-found', component: ErrorPageComponent },
  { path: '**' , redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    LogInComponent
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
