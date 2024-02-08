import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { DirectivesComponent } from './directives/directives.component';
import { MarksComponent } from './marks/marks.component';
import { ProductsComponent } from './products/products.component';
import { RegistrationComponent } from './registration/registration.component';
import { CarsComponent } from './cars/cars.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountComponent } from './account/account.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { StudentsComponent } from './students/students.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { PracticeComponent } from './practice/practice.component';
import { ParentComponent } from './parent/parent.component';
import { SchoolappComponent } from './schoolapp/schoolapp.component';

const routes: Routes = [
  {path:"login",component: LoginComponent},
  {path:"dashboard", canActivate:[AuthenticationGuard],component: DashboardComponent,children:[
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"data-binding",component:DataBindingComponent},
    {path:"calculator",component:CalculatorComponent},
    {path:"",component:HomeComponent},
    {path:"rectangle",component:RectangleComponent},
    {path:"directives",component:DirectivesComponent},
    {path:"marks",component:MarksComponent},
    {path:"products",component:ProductsComponent},
    {path:"Registration",component:RegistrationComponent},
    {path:"Cars",component:CarsComponent},
    {path:"Vehicle",component:VehicleComponent},
    {path:"Account",component:AccountComponent},
    {path:"Flipcart",component:FlipcartComponent},
    {path:"Students",component:StudentsComponent},
    {path:"Create-vehicle",component:CreateVehicleComponent},
    {path:"Create-Account",component:CreateAccountComponent},
    {path:"Create-Student",component:CreateStudentComponent},
    {path:"Create-Product",component:CreateproductComponent},
    {path:"Practice",component:PracticeComponent},
    {path:"Parent",component:ParentComponent},
    {path:"edit-vehicle/:id",component:CreateVehicleComponent},
    {path:"edit-student/:id",component:CreateStudentComponent},
    {path:"Schoolapp",component:SchoolappComponent}

  ]},
  {path:"",component:LoginComponent},
  {path:"**",component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
