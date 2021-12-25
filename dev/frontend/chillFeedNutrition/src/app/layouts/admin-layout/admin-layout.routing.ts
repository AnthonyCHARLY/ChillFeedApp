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

import { ClientListComponent } from 'app/clients-components/client-list/client-list.component';
import { ClientComponentComponent } from 'app/client-component/client-component.component';
import { RegisterCustomersComponent } from 'app/register-customers/register-customers.component';
import { Component } from '@angular/core';
import { RegisterIngredientComponent } from 'app/register-ingredient/register-ingredient.component';
import { RegisterReceiptsComponent } from 'app/register-receipts/register-receipts.component';
import { RecipesComponent } from 'app/recipes/recipes.component';

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

    { path: 'sign-in',   component: UserProfileComponent },
    { path: 'log-in',         component: LogInComponent},
    { path: 'clients',        component: ClientComponentComponent},
    { path: 'register-customers', component: RegisterCustomersComponent},
    { path: 'register-ingredients', component: RegisterIngredientComponent},
    { path: 'register-recipes', component: RegisterReceiptsComponent},
    { path: 'recipes', component: RecipesComponent}
];
