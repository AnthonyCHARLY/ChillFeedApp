import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import {MatListModule} from '@angular/material/list';


import { UserProfileComponent } from './user-profile/user-profile.component';
import { LogInComponent } from './log-in/log-in.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientListComponent } from './clients-components/client-list/client-list.component';
import { ClientComponentComponent } from './client-component/client-component.component';
import { ClientCurveComponent } from './clients-components/client-curve/client-curve.component';
import { RegisterCustomersComponent } from './register-customers/register-customers.component';
import { RegisterIngredientComponent } from './register-ingredient/register-ingredient.component';
import { RegisterReceiptsComponent } from './register-receipts/register-receipts.component';
import { RecipesComponent } from './recipes/recipes.component';
import { WeekFeedSportPlanningComponent } from './clients-components/week-feed-sport-planning/week-feed-sport-planning.component';
import { ClientNeedsComponent } from './clients-components/client-needs/client-needs.component';



@NgModule({
  imports: [
    BrowserAnimationsModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    //yaya
    MatListModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
