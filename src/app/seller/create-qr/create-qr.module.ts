import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateQrPageRoutingModule } from './create-qr-routing.module';

import { CreateQrPage } from './create-qr.page';

//QR Code
import { NgxQRCodeModule } from 'ngx-qrcode2'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateQrPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [CreateQrPage]
})
export class CreateQrPageModule {}
