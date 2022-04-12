import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { PathNotFoundComponent } from './components/path-not-found/path-not-found.component';
import { HomeComponent } from "./components/home/home.component";
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ReactiveAddEmployeeComponent } from './components/reactive-add-employee/reactive-add-employee.component';


const routes: Routes = [
  { path: 'getAllEmployees', component: EmployeeDetailsComponent },
  {path:'addEmployee', component:AddEmployeeComponent},
  {path:'reactiveAddEmployee', component:ReactiveAddEmployeeComponent},
  { path: '', pathMatch: 'full', component: HomeComponent },
  // { path: 'home', component: HomeComponent },
  { path: '**', component: PathNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
