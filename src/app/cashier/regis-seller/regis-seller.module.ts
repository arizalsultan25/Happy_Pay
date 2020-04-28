import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisSellerPageRoutingModule } from './regis-seller-routing.module';

import { RegisSellerPage } from './regis-seller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisSellerPageRoutingModule
  ],
  declarations: [RegisSellerPage]
})
export class RegisSellerPageModule {}
