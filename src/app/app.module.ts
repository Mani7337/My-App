import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { DirectivesComponent } from './directives/directives.component';
import { MarksComponent } from './marks/marks.component';
import { ProductsComponent } from './products/products.component';
import { PipesComponent } from './pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { RatingPipe } from './rating.pipe';
import { RegistrationComponent } from './registration/registration.component';
import { CarsComponent } from './cars/cars.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import {HttpClientModule} from '@angular/common/http';
import { AccountComponent } from './account/account.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { StudentsComponent } from './students/students.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { PracticeComponent } from './practice/practice.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SchoolappComponent } from './schoolapp/schoolapp.component';
import { SiblingsComponent } from './siblings/siblings.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { RatingsComponent } from './ratings/ratings.component';
import { Rating1Component } from './rating1/rating1.component';
import { PcComponent } from './pc/pc.component';
import { Calculator1Component } from './calculator1/calculator1.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { ResultComponent } from './result/result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    AboutComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    DirectivesComponent,
    MarksComponent,
    ProductsComponent,
    PipesComponent,
    PricePipe,
    RatingPipe,
    RegistrationComponent,
    CarsComponent,
    VehicleComponent,
    AccountComponent,
    FlipcartComponent,
    StudentsComponent,
    CreateVehicleComponent,
    CreateAccountComponent,
    CreateStudentComponent,
    CreateproductComponent,
    PracticeComponent,
    ParentComponent,
    ChildComponent,
    SchoolappComponent,
    SiblingsComponent,
    Sibling1Component,
    Sibling2Component,
    RatingsComponent,
    Rating1Component,
    PcComponent,
    Calculator1Component,
    InputComponent,
    ButtonComponent,
    ResultComponent,
    Parent1Component,
    Child1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
