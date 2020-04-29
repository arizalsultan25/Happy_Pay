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
    this.getUid()
    this.getData(this.uid)
  }

  ngOnInit() {
    this.getUid()
    this.getData(this.uid)
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

  async getData(id) {

    this.dbs =await firebase.database().ref('riwayat/'+id+'/isi_saldo/').on('value', resp => {
      this.child = snapshotToArray(resp)
      console.log(this.uid)
      console.log(this.child)
      console.log(this.getUid())
    })
  }
}
