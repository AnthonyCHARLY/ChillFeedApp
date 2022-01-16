import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { LogInComponent } from 'app/log-in/log-in.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

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
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },

    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },

    { path: 'weekn',   component: WeekNeedsPlanningComponent },
    { path: 'sign-in',   component: UserProfileComponent },
    { path: 'log-in',         component: LogInComponent},
    { path: 'home',         component: HomePageComponent},
    { path: 'clients', canActivate: [AuthService], component: ClientComponentComponent},
    { path: 'register-customers' , canActivate: [AuthService], component: RegisterCustomersComponent},
    { path: 'register-ingredients' , canActivate: [AuthService], component: RegisterIngredientComponent},
    { path: 'register-recipes', canActivate: [AuthService], component: RegisterReceiptsComponent},
    { path: 'recipes', canActivate: [AuthService], component: RecipesComponent}
];
