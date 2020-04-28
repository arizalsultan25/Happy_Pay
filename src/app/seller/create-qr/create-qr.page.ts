import { Component, OnInit } from '@angular/core';

//Storage
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-create-qr',
  templateUrl: './create-qr.page.html',
  styleUrls: ['./create-qr.page.scss'],
})
export class CreateQrPage implements OnInit {

  constructor(private str: Storage) { 
    this.getUid()
  }

  ngOnInit() {
  }

  //tanggal
  currentDate = new Date();
  date = this.currentDate.getDate();
  month = this.currentDate.getMonth(); 
  year = this.currentDate.getFullYear().toString()
  
  monthNames = [
    "Jan", "Feb", "Mar", "Apr", "Mei", "Juni", "Juli", "Agu", "Sep", "Okt", "Nov", "Des"
  ];


  //QR Data 
  data = {
    penjual : null,
    jumlah : null,
    tanggal : this.year + ', ' + this.monthNames[this.month]+ ' ' + this.date
  }


  //QR Properties
  QrData = null
  scannedCode = null
  elementType : 'url' | 'canvas' | 'img' = 'canvas'

  async getUid(){
    await this.str.get('key').then(hasil => {
      this.data.penjual = hasil
    })
    console.log(this.data.penjual)
  }

  genQRCode(){
   this.QrData = JSON.stringify(this.data) 
   console.log(this.QrData)
  }

  clearQRCode(){
    this.QrData = null
  }
}
