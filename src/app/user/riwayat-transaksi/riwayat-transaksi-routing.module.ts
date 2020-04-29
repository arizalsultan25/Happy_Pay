import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiwayatTransaksiPage } from './riwayat-transaksi.page';

const routes: Routes = [
  {
    path: '',
    component: RiwayatTransaksiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiwayatTransaksiPageRoutingModule {}
