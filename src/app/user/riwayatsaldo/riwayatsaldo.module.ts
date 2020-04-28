import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiwayatsaldoPageRoutingModule } from './riwayatsaldo-routing.module';

import { RiwayatsaldoPage } from './riwayatsaldo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiwayatsaldoPageRoutingModule
  ],
  declarations: [RiwayatsaldoPage]
})
export class RiwayatsaldoPageModule {}
