import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { UsuariosListComponent } from './usuariosList.component';

// Usuarios Routing
import { UsuariosRoutingModule } from './usuarios-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule
  ],
  declarations: [
    UsuariosListComponent,
    
  ]
})
export class UsuariosModule {
}
