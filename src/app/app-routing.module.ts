import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';


const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full' },
  {path: 'add', component: AddEmployeeComponent},
  {path: 'edit', component: EditEmployeeComponent},
  {path: 'list', component: ListEmployeeComponent},
  {path: 'update/:id', component: UpdateEmployeeComponent},
  {path: 'search', component: SearchEmployeeComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
