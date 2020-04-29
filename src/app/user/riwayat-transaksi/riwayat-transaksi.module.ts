import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiwayatTransaksiPageRoutingModule } from './riwayat-transaksi-routing.module';

import { RiwayatTransaksiPage } from './riwayat-transaksi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiwayatTransaksiPageRoutingModule
  ],
  declarations: [RiwayatTransaksiPage]
})
export class RiwayatTransaksiPageModule {}
