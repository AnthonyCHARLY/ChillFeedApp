import { Routes } from '@angular/router';


import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { LogInComponent } from 'app/log-in/log-in.component';



import { ClientComponentComponent } from 'app/client-component/client-component.component';
import { RegisterCustomersComponent } from 'app/register-customers/register-customers.component';
import { Component } from '@angular/core';
import { RegisterIngredientComponent } from 'app/register-ingredient/register-ingredient.component';
import { RegisterReceiptsComponent } from 'app/register-receipts/register-receipts.component';
import { RecipesComponent } from 'app/recipes/recipes.component';
import { AuthService } from 'app/services/auth.service';
import { HomePageComponent } from 'app/home-page/home-page.component';
import { WeekNeedsPlanningComponent } from 'app/clients-components/week-needs-planning/week-needs-planning.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'weekn',   component: WeekNeedsPlanningComponent },
    { path: 'sign-in',   component: UserProfileComponent },
    { path: 'log-in',         component: LogInComponent}, 
    { path: 'home',         component: HomePageComponent},
    { path: 'clients', canActivate: [AuthService], component: ClientComponentComponent},
    { path: 'register-customers' , canActivate: [AuthService], component: RegisterCustomersComponent},
    { path: 'register-ingredients' , canActivate: [AuthService], component: RegisterIngredientComponent},
    { path: 'register-recipes', canActivate: [AuthService],component: RegisterReceiptsComponent},
    { path: 'recipes',  canActivate: [AuthService],component: RecipesComponent}
];
