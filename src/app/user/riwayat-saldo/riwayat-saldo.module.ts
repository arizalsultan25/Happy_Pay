import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiwayatSaldoPageRoutingModule } from './riwayat-saldo-routing.module';

import { RiwayatSaldoPage } from './riwayat-saldo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiwayatSaldoPageRoutingModule
  ],
  declarations: [RiwayatSaldoPage]
})
export class RiwayatSaldoPageModule {}
