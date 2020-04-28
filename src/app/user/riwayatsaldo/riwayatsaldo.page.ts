import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from '@angular/fire/database';

import * as firebase from 'firebase';
import { snapshotToArray } from 'src/environments/environment';

@Component({
  selector: 'app-riwayatsaldo',
  templateUrl: './riwayatsaldo.page.html',
  styleUrls: ['./riwayatsaldo.page.scss'],
})
export class RiwayatsaldoPage implements OnInit {

  constructor(
    private str: Storage,
    private afDb: AngularFireDatabase
  ) { 
    this.getUID()
  //  this.getData()
  }

  ngOnInit() {
    this.getUID()
//    this.getData()
  }

  uid
  child
  dbs

  async getUID() {
    await this.str.get('key').then(res => {
      this.uid = res
      var ref =  firebase.database().ref('riwayat/'+this.uid)

      ref.on('value', respon => {
        this.child = snapshotToArray(respon)
        console.log(this.child)
      })
    })
  }

  getData(){
    this.dbs =  firebase.database().ref(`penjualan_voucher/`).on('value', resp => {
      this.child = snapshotToArray(resp)
  })
}
}
