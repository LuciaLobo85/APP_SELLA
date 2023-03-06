import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiculosBComponent } from './vehiculosB.component';
import { RecambiosBComponent } from './recambiosB.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Búsqueda',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'vehiculos',
      }, 
      {
        path: 'vehiculos',
        component: VehiculosBComponent,
        data: {
          title: 'Vehículos',
        },
      },
      {
        path: 'recambios',
        component: RecambiosBComponent,
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
export class BusquedasRoutingModule {}

