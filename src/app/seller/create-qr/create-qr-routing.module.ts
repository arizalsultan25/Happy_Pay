import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateQrPage } from './create-qr.page';

const routes: Routes = [
  {
    path: '',
    component: CreateQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateQrPageRoutingModule {}
