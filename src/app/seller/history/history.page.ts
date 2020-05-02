import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from '@angular/fire/database';

import * as firebase from 'firebase';
import { snapshotToArray } from 'src/environments/environment';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor(
    private str:Storage,
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

  data
  dbs
  child
  key
  async getData(){
   await this.str.get('key').then(hasil => {
     this.key = hasil
   }) 
    
   this.dbs = await  firebase.database().ref(`riwayat/${this.key}/transaksi`).on('value', resp => {
      this.child = snapshotToArray(resp)
  })
}
}