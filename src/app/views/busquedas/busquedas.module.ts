import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';


import { VehiculosBComponent } from './vehiculosB.component';
import { RecambiosBComponent } from './recambiosB.component';

// Theme Routing
import { BusquedasRoutingModule } from './busquedas-routing .module';

@NgModule({
  imports: [
    CommonModule,
    BusquedasRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule
  ],
  declarations: [
    
    VehiculosBComponent,
    RecambiosBComponent,
    
   
  ]
})
export class BusquedasModule {
}
