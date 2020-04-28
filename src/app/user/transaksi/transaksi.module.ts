import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransaksiPageRoutingModule } from './transaksi-routing.module';

import { TransaksiPage } from './transaksi.page';
import { NgxQRCodeModule } from 'ngx-qrcode2'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransaksiPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [TransaksiPage]
})
export class TransaksiPageModule {}
