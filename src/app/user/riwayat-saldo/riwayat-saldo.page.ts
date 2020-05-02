import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from '@angular/fire/database';

import * as firebase from 'firebase';
import { snapshotToArray } from 'src/environments/environment';

@Component({
  selector: 'app-riwayat-saldo',
  templateUrl: './riwayat-saldo.page.html',
  styleUrls: ['./riwayat-saldo.page.scss'],
})
export class RiwayatSaldoPage implements OnInit {

  constructor(
    private str: Storage,
    private afDB: AngularFireDatabase
  ) {
    this.getData()
  }

  ngOnInit() {
    this.getData()
  }

  ionViewWillEnter(){
    this.getData()
  }

  uid
  getUid(){
    this.str.get('key').then(id => {
      this.uid = id
      console.log('key'+this.uid)
    })  
  }

  data
  dbs
  child
  key 
  async getData() {
      await this.str.get('key').then(hasil => {
        this.key = hasil
      }) 
       
      this.dbs = await  firebase.database().ref(`riwayat/${this.key}/isi_saldo`).on('value', resp => {
         this.child = snapshotToArray(resp)
     })
   }
}
