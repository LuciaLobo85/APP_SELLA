import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';


import { VehiculosComponent } from './vehiculos.component';
import { RecambiosComponent } from './recambios.component';

// Theme Routing
import { AltasRoutingModule } from './altas-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AltasRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule
  ],
  declarations: [
    
    VehiculosComponent,
    RecambiosComponent,
    
   
  ]
})
export class AltasModule {
}
