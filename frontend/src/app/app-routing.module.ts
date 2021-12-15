import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchComponent } from './search/search.component';
import { SortingComponent } from './sorting/sorting.component';
import { TestSortingComponent } from './test-sorting/test-sorting.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'sort',component:SortingComponent},
  {path:'search',component:SearchComponent},
  {path:'pagination',component:PaginationComponent},
  {path:'testsorting',component:TestSortingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
