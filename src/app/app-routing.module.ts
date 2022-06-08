import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'list', loadChildren: () => import('./paginas/empleados/lista/lista.module').then(m => m.ListaModule) }, { path: 'new', loadChildren: () => import('./paginas/empleados/new/new.module').then(m => m.NewModule) }, { path: 'details', loadChildren: () => import('./paginas/empleados/details/details.module').then(m => m.DetailsModule) }, { path: 'editar', loadChildren: () => import('./paginas/empleados/editar/editar.module').then(m => m.EditarModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
