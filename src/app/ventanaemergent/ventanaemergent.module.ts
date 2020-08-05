import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentanaemergentPageRoutingModule } from './ventanaemergent-routing.module';

import { VentanaemergentPage } from './ventanaemergent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentanaemergentPageRoutingModule
  ],
  declarations: [VentanaemergentPage]
})
export class VentanaemergentPageModule {}
