import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage'
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

//firebase
import * as firebase from 'firebase';
import { snapshotToArray } from '../../../environments/environment';
import { AngularFireDatabase } from '@angular/fire/database'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private str: Storage,
    private nav: NavController,
    private route: Router,
    private toast: ToastController,
    private alert: AlertController
  ) {
    this.getEmail()
    this.getSaldo()
  }

  ionViewWillEnter() {
    this.getEmail()
    this.getSaldo()
  }

  async getEmail() {
    await this.str.get('email').then(data => {
      this.email = data
    })
  }

  async getSaldo() {
    await this.str.get('key').then(uid => {
      this.key = uid

      var ref = firebase.database().ref('profile/' + uid)

      ref.on('value', respon => {
        let data = snapshotToArray(respon)
        this.saldo = data[2]
        console.log(this.saldo)
        console.log(this.key)
      })
    })
  }

  async resetPw(){
    const alert = await this.alert.create({
      message: 'Check your email for a password reset link',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler:async () => {
             await firebase.auth().sendPasswordResetEmail(this.email)
          },
        },
      ],
    });
    await alert.present();

  }

  key
  email;
  saldo;

  async logOut() {
    this.email = null
    this.str.clear()
    this.route.navigate(['/login']);
    await this.notif('akun telah berhasil logout');
  }

  async notif(msg) {
    var pesan = await this.toast.create({
      message: msg,
      duration: 2000
    })
    pesan.present()
  }

  pindahIsiSaldo() {
    this.route.navigate(['/isi-saldo'])
  }

  pindahHistoryTransaksi(){
    this.route.navigate(['/riwayat-transaksi'])
  }

  pindahHistorySaldo(){
    this.route.navigate(['/riwayat-saldo'])
  }

  pindahScan() {
    this.route.navigate(['/transaksi'])
  }

  ngOnInit() {
  }

}
