import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiculosComponent } from './vehiculos.component';
import { RecambiosComponent } from './recambios.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Altas',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'vehiculos',
      }, 
      {
        path: 'vehiculos',
        component: VehiculosComponent,
        data: {
          title: 'Vehículos',
        },
      },
      {
        path: 'recambios',
        component: RecambiosComponent,
        data: {
          title: 'Recambios',
        },
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltasRoutingModule {}

