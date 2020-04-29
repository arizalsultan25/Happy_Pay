import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiwayatSaldoPage } from './riwayat-saldo.page';

const routes: Routes = [
  {
    path: '',
    component: RiwayatSaldoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiwayatSaldoPageRoutingModule {}
