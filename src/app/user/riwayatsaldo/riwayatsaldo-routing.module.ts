import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiwayatsaldoPage } from './riwayatsaldo.page';

const routes: Routes = [
  {
    path: '',
    component: RiwayatsaldoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiwayatsaldoPageRoutingModule {}
