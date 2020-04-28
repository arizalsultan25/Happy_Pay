import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsiSaldoPage } from './isi-saldo.page';

const routes: Routes = [
  {
    path: '',
    component: IsiSaldoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsiSaldoPageRoutingModule {}
