import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

import { EstanteriasComponent } from './estanterias.component';
import { UbicacionesComponent } from './ubicaciones.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Gestión de ubicaciones de almacén',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'colors',
      }, 
      {
        path: 'colors',
        component: ColorsComponent,
        data: {
          title: 'Zonas',
        },
      },
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Pasillos',
        },
      },

      {
        path: 'estanterias',
        component: EstanteriasComponent,
        data: {
          title: 'Estanterias',
        },
      },

      {
        path: 'ubicaciones',
        component: UbicacionesComponent,
        data: {
          title: 'Ubicaciones',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
