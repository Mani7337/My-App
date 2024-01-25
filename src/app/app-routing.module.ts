import { NgModule } from '@angular/core';
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

const routes: Routes = [
  {path:"login",component: LoginComponent},
  {path:"dashboard",component: DashboardComponent,children:[
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"data-binding",component:DataBindingComponent},
    {path:"calculator",component:CalculatorComponent},
    {path:"",component:HomeComponent},
    {path:"rectangle",component:RectangleComponent},
    {path:"directives",component:DirectivesComponent},
    {path:"marks",component:MarksComponent},
    {path:"products",component:ProductsComponent},
    {path:"Registration",component:RegistrationComponent}

  ]},
  {path:"",component:LoginComponent},
  {path:"**",component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
