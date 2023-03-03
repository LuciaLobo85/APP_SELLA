import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';


import { VehiculosRComponent } from './vehiculosR.component';
import { RecambiosRComponent } from './recambiosR.component';

// Theme Routing
import { RegularizacionRoutingModule } from './regularizacion-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RegularizacionRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule
  ],
  declarations: [
    
    VehiculosRComponent,
    RecambiosRComponent,
    
   
  ]
})
export class RegularizacionModule {
}
