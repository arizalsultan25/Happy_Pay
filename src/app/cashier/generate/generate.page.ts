import { Component, OnInit } from '@angular/core';


//firebase
import * as firebase from 'firebase';
import { snapshotToArray } from '../../../environments/environment';
import { NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database'

@Component({
  selector: 'app-generate',
  templateUrl: './generate.page.html',
  styleUrls: ['./generate.page.scss'],
})
export class GeneratePage implements OnInit {

  kode = null

  currentDate = new Date();
  date = this.currentDate.getDate();
  month = this.currentDate.getMonth();
  year = this.currentDate.getFullYear();

  monthNames = [
    "Jan", "Feb", "Mar", "Apr", "Mei", "Juni", "Juli", "Agu", "Sep", "Okt", "Nov", "Des"
  ];

  data = {
    kode: null,
    jumlah: null,
    tanggal: null,
    jam: null
  }


  constructor(
    private toast: ToastController,
    private afDb: AngularFireDatabase
  ) { }

  async notif(msg) {
    var pesan = await this.toast.create({
      message: msg,
      duration: 2000
    })
    pesan.present()
  }

  gen() {
    var res = ''
    var karakter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    var panjang = karakter.length

    for (var i = 0; i < 10; i++) {
      res += karakter.charAt(Math.floor(Math.random() * panjang))
    }
    console.log(res)
    this.data.kode = res
    this.kode = res

    //date configuration
    this.data.tanggal = this.year + ', ' + this.monthNames[this.month] + ' ' + this.date

    this.data.jam = this.currentDate.getHours() + ":" + this.currentDate.getMinutes() + ":" + this.currentDate.getSeconds();

    //insert to AF
    this.afDb.object(`voucher/${this.data.kode}/`).set(this.data)

    //insert to history penjualan
    this.afDb.object(`penjualan_voucher/${this.data.kode}/`).set(this.data)

    //notf
    this.notif('Saldo sebesar Rp. ' + this.data.jumlah + ' telah di generate')
  }

  clear() {
    this.data.jumlah = null,
      this.data.kode = null,
      this.data.tanggal = null,
      this.data.jam = null
    this.kode = null
  }

  ngOnInit() {
  }

}
