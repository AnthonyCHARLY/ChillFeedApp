import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';

import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { LogInComponent } from 'app/log-in/log-in.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

import { ClientNeedsComponent } from 'app/clients-components/client-needs/client-needs.component';
import { WeekFeedSportPlanningComponent } from 'app/clients-components/week-feed-sport-planning/week-feed-sport-planning.component';
import { ClientListComponent } from 'app/clients-components/client-list/client-list.component';
import { ClientComponentComponent } from 'app/client-component/client-component.component';
import { ClientCurveComponent } from 'app/clients-components/client-curve/client-curve.component';
import { RegisterCustomersComponent } from 'app/register-customers/register-customers.component';
import { RegisterIngredientComponent } from 'app/register-ingredient/register-ingredient.component';
import { RegisterReceiptsComponent } from 'app/register-receipts/register-receipts.component';
import { RecipesComponent } from 'app/recipes/recipes.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatListModule} from '@angular/material/list';
import { HomePageComponent } from 'app/home-page/home-page.component';
import { WeekNeedsPlanningComponent } from 'app/clients-components/week-needs-planning/week-needs-planning.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatListModule,
    MatAutocompleteModule,
  ], 
  declarations: [



    UserProfileComponent,
    LogInComponent,
    ClientListComponent,
    ClientComponentComponent,
    ClientCurveComponent,
    RegisterCustomersComponent,
    RegisterIngredientComponent,
    RegisterReceiptsComponent,
    RecipesComponent,
    WeekFeedSportPlanningComponent,
    ClientNeedsComponent,
    HomePageComponent,
    WeekNeedsPlanningComponent
  ]
})

export class AdminLayoutModule {}
