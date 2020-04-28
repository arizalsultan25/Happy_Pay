import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
//import { QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner/ngx';


@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
})
export class TransaksiPage implements OnInit {

  constructor(
    private barcodeScanner: BarcodeScanner,
    private toast: ToastController,
    private str: Storage,
//    private qrScanner: QRScanner,
    public platform:Platform
    ) {
    this.getUID()
      }
    
  

  ngOnInit() {
  }

  async getUID() {
    await this.str.get('key').then(hasil => {
      this.UID = hasil
    })
    console.log(this.UID)
  }

  UID
  hasilScan = null
  hasil 

  scan(){
    this.barcodeScanner.scan().then(Data => {
      this.hasil = Data
    })
  }

  async scanCode() {
     this.barcodeScanner.scan().then(barcodeData => {
       this.hasilScan = JSON.parse(barcodeData.text)
        this.pesan(this.hasilScan)
      })
  }

 async pesan(msg){
  var x = await this.toast.create({
    message:msg,
    duration:2000
  })
  x.present()
  }

  testCode(){
    this.hasilScan = {
      penjual: 'Ardy',
      jumlah: 20000,
      tanggal : 209
    }
  }

  clearCode() {
    this.hasilScan = null
  }
}
