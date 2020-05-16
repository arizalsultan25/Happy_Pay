import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { AngularFireDatabase } from '@angular/fire/database';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase';
import { snapshotToArray } from 'src/environments/environment'

@Component({
  selector: 'app-isi-saldo',
  templateUrl: './isi-saldo.page.html',
  styleUrls: ['./isi-saldo.page.scss'],
})
export class IsiSaldoPage implements OnInit {

  constructor(
    private toast: ToastController,
    private afDb: AngularFireDatabase,
    private str: Storage
  ) {
    this.getKey()
  }

  key
  kode
  saldo
  dataUser = null

  currentDate = new Date();
  date = this.currentDate.getDate();
  month = this.currentDate.getMonth();
  year = this.currentDate.getFullYear();

  monthNames = [
    "Jan", "Feb", "Mar", "Apr", "Mei", "Juni", "Juli", "Agu", "Sep", "Okt", "Nov", "Des"
  ];

  async getKey() {
    await this.str.get('key').then(uid => {
      this.key = uid
    })
  }

  ionViewWillEnter(){
    this.getKey()
  }

  ref
  dbs

  saldoVoucher = null
  saldoSekarang

  async getUser(){
    this.ref = firebase.database().ref(`profile/${this.key}`).on('value', resp => {
      var Datacurrent = resp.val()
      this.saldoSekarang = Datacurrent.saldo
    })
  }

  async getSaldo(){
    this.dbs =  firebase.database().ref(`voucher/${this.kode}`).on('value', resp => {
      var Datacurrent1 = resp.val()
      this.saldoVoucher = Datacurrent1.jumlah
    })
  }

  async isiSaldo() {
    try {
      await this.getUser()

      await this.getSaldo()

      if (this.saldoVoucher == null) {
        this.notif('Kode tidak valid')
      } else {
        this.saldo = this.saldoSekarang + this.saldoVoucher


        console.log(this.saldo + ' - ' + this.saldoSekarang + ' - ' + this.saldoVoucher)
        //update saldo
        await firebase.database().ref(`profile/${this.key}`).update({ saldo: this.saldo })

        //add to history saldo
        await firebase.database().ref(`riwayat/${this.key}/isi_saldo/${this.kode}`).set({
          kode: this.kode,
          jumlah: this.saldoVoucher,
          tanggal: this.year + ', ' + this.monthNames[this.month] + ' ' + this.date
        })

        //delete from voucher
        await firebase.database().ref(`voucher/${this.kode}`).remove()

        this.notif('Saldo telah ditambahkan sebesar Rp.' + this.saldoVoucher)
        this.saldo = null
        this.saldoVoucher = null
      }
    } catch (e) {
      this.notif(e)
    }
  }

  async notif(e) {
    let pesan = await this.toast.create({
      message: e,
      duration: 2000
    })
    pesan.present()
  }

  ngOnInit() {
  }

}
