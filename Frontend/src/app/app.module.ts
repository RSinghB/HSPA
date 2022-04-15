import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {PropertyCardComponent} from './Property/property-card/property-card.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './Property/add-property/add-property/add-property.component';
import { PropertyDetailComponent } from './Property/property-detail/property-detail/property-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { UserService } from './services/user.service';

const appRoutes : Routes=[
  {path:"", component:PropertyListComponent},
  {path:"rent-property", component:PropertyListComponent},
  {path: "add-property", component:AddPropertyComponent},
  {path:"property-detail/:id", component:PropertyDetailComponent},
  {path:"user/login",component:UserLoginComponent},
  {path:"user/register",component:UserRegistrationComponent},
  {path:'**',component:PropertyListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    UserRegistrationComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HousingService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
