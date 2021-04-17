import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddDataComponent} from './pages/add-data/add-data.component';
import {TableComponent} from './pages/table/table.component';
import {EditDataComponent} from './pages/edit-data/edit-data.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'add-data'
  },
  {
    path: 'add-data',
    component: AddDataComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'edit-data',
    component: EditDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
