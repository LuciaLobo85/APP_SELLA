import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiculosRComponent } from './vehiculosR.component';
import { RecambiosRComponent } from './recambiosR.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Regularización',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'vehiculos',
      }, 
      {
        path: 'vehiculos',
        component: VehiculosRComponent,
        data: {
          title: 'Vehículos',
        },
      },
      {
        path: 'recambios',
        component: RecambiosRComponent,
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
export class RegularizacionRoutingModule {}

