import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentanaemergentPage } from './ventanaemergent.page';

const routes: Routes = [
  {
    path: '',
    component: VentanaemergentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentanaemergentPageRoutingModule {}
