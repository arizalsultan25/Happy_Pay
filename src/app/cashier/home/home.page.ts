import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase'
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  today = new Date();
  namaBulan = [
    'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'
  ]

  tanggal = this.today.getDate() + ' ' + this.namaBulan[this.today.getMonth()] + ' ' + this.today.getFullYear()

  email;
  constructor(
    private str: Storage,
    private nav: NavController,
    private route: Router,
    private toast: ToastController,
    private alert: AlertController
    ) {
    this.getEmail()
  }

  ionViewWillEnter() {
    this.getEmail()
  }

  ngOnInit() {
  }

  async getEmail() {
    await this.str.get('email').then(hasil => {
      this.email = hasil
    })
  }

  pindahGen() {
    this.route.navigate(['/generate'])
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

  pindahHistory() {
    this.route.navigate(['/history'])
  }

  pindahReg() {
    this.route.navigate(['/regis-seller'])
  }

  logOut() {
    this.str.clear()
    this.route.navigate(['/login']);
    this.notif('akun telah berhasil logout');
  }

  async notif(msg) {
    var pesan = await this.toast.create({
      message: msg,
      duration: 2000
    })
    pesan.present()
  }

}
