import { Component, OnInit } from '@angular/core';

//firebase
import * as firebase from 'firebase';
import { snapshotToArray } from '../../environments/environment';
import { NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { User } from '../../models/user.model'
import { Router } from '@angular/router';

//Storage
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;

  model: any = {
    akses: null,
    email: null,
    saldo: null
  }
  token;
  akses = 'kosong'
  profile: AngularFireObject<User>
ref;

  constructor(private toast: ToastController,
    private afAuth: AngularFireAuth,
    private adDb: AngularFireDatabase,
    private store : Storage,
    private route:Router
  ) { }

  ngOnInit() {
  }
  list = [{
    akses:null
  }]

  async login() {
    try {
      const res = await this.afAuth.signInWithEmailAndPassword(this.username, this.password)
      this.afAuth.onAuthStateChanged(auth => {
       this.token = auth.uid;
       this.store.set('key', auth.uid);
       console.log('auth token = '+auth.uid) 
       this.ref = firebase.database().ref(`profile/${auth.uid}`).on('value', resp => {
          var val = resp.val()

          this.store.set('email',val.email);
          this.store.set('saldo',val.saldo)
          this.store.set('pw',this.password)
          
          if(val.akses=='Customer'){
            console.log('anda adalah customer')
            this.route.navigate(['/user'])

          }else if(val.akses=='Seller'){
            console.log('Anda adalah seller')
            this.route.navigate(['/seller'])
          }else{
            console.log('Anda adalah kasir')
           
            this.route.navigate(['/cashier'])
          }
        })
      })
      this.clear()
      this.notif('Login Berhasil')
    } catch (e) {
      console.log(e)
      this.notif(e)
    }
  }

  clear(){
    this.username = null
    this.password = null
  }

  async notif(pesan) {
    var msg =await this.toast.create({
      message:pesan,
      duration:2000
    })
    msg.present()
  }
}
