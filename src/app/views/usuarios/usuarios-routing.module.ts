import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosListComponent } from './usuariosList.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Usuarios',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'usuariosList',
      }, 
      {
        path: 'usuariosList',
        component: UsuariosListComponent,
        data: {
          title: 'Listado de usuarios',
        },
      },
    
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
