import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { ToastController } from '@ionic/angular';
import { Storage} from '@ionic/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase'
import {snapshotToArray} from '../../environments/environment'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  qrData = 'https://ionicacademy.com/';
  scannedCode = null;
  elementType: 'url' | 'canvas' | 'img' = 'canvas';


  constructor(private barcodeScanner: BarcodeScanner, private base64ToGallery: Base64ToGallery, private toastCtrl: ToastController,
    private afDb: AngularFireDatabase,
    private str: Storage) {
      this.getUID()
    }

  scanCode() {
    this.barcodeScanner.scan().then(
      barcodeData => {
        this.scannedCode = barcodeData;
        this.hasilScan = JSON.parse(this.scannedCode);
      }
    )
  }


  hasilScan = null
  uid

  clear(){
    this.hasilScan = null
  }

  getUID(){
    this.uid = this.str.get('key').then(hasil => {
      this.uid = hasil
      var ref = firebase.database().ref('profile/' + this.uid)

      ref.on('value', respon => {
        let data = snapshotToArray(respon)
        this.saldo = data[2]
        console.log(this.saldo)
      })
    })
    console.log(this.uid)
  }

  saldo
  async verifQR(){
    var kurang = this.saldo - this.hasilScan.jumlah

    //kurangi saldo akun
    await firebase.database().ref(`profile/${this.uid}`).update({ saldo: kurang })

    //add saldo penjual
    var uidseller = this.hasilScan.penjual
    //get saldo penjual
    var ref = firebase.database().ref('profile/' + uidseller)

    ref.on('value', async respon => {
      let data = snapshotToArray(respon)
      var saldoseller = data[2]
      //tambah saldo penjual
      var tambahsaldo = saldoseller + this.hasilScan.jumlah
      await firebase.database().ref(`profile/${uidseller}`).update({ saldo: tambahsaldo })
    })
  
    //add history pembeli
    await firebase.database().ref(`riwayat/${this.uid}/transaksi/`).push({
      uid_penjual: uidseller,
      jumlah : this.hasilScan.jumlah,
      tanggal : this.hasilScan.tanggal
    })

    //add history penjual
    await firebase.database().ref(`riwayat/${uidseller}/transaksi/`).push({
      uid_pembeli: this.uid ,
      jumlah : this.hasilScan.jumlah,
      tanggal : this.hasilScan.tanggal
    })

    this.pesan('Transaksi berhasil')
    this.clear()
  }
  
  async pesan(msg){
    var n = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    })
    n.present()
  }

  downloadQR() {
    const canvas =document.querySelector('canvas') as HTMLCanvasElement;
    const imageData = canvas.toDataURL('image/jpeg').toString();
    console.log('data: ', imageData);

    let data = imageData.split(',')[1];

    this.base64ToGallery.base64ToGallery(data,
      { prefix: '_img', mediaScanner: true })
      .then(async res => {
        let toast = await this.toastCtrl.create({
          header: 'QR Code saver in your Photolibrary'
        });
        toast.present();
      }, err=> console.log('err: ', err)
      );

    


  }

}
