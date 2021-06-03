import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditClienteComponent } from './components/add-edit-cliente/add-edit-cliente.component';
import { ListClienteComponent } from './components/list-cliente/list-cliente.component';


const routes: Routes = [
  { path: '', component: ListClienteComponent },
  { path: 'add', component: AddEditClienteComponent },
  { path: 'edit/:id', component: AddEditClienteComponent },
  { path: '**', component: ListClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
