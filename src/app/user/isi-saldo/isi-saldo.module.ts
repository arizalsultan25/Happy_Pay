import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsiSaldoPageRoutingModule } from './isi-saldo-routing.module';

import { IsiSaldoPage } from './isi-saldo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsiSaldoPageRoutingModule
  ],
  declarations: [IsiSaldoPage]
})
export class IsiSaldoPageModule {}
