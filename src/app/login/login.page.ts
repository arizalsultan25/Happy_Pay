import { Component, OnInit } from '@angular/core';

//firebase
import * as firebase from 'firebase';
import { snapshotToArray } from '../../environments/environment';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
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
    private store: Storage,
    private route: Router,
    private loading: LoadingController
  ) { }

  ngOnInit() {
  }
  list = [{
    akses: null
  }]

  async setvalue(a) {
    this.hak = a
  }

  async load() {
    var n = await this.loading.create({
      duration: 3000,
      message: "Load data user",
    })
    n.present()
  }


  hak
  haks
  async login() {
    try {
      const res = await this.afAuth.signInWithEmailAndPassword(this.username, this.password)
      this.afAuth.onAuthStateChanged(async auth => {
        this.token = auth.uid;
        this.store.set('key', auth.uid);
        console.log('auth token = ' + auth.uid)
        this.ref = firebase.database().ref(`profile/${auth.uid}`).on('value', async resp => {
          var val = resp.val();

          this.haks = val.akses
          this.hak = this.haks
          
          if (this.hak == 'Customer') {
            console.log('Kostumer')
            this.route.navigate(['/user'])
          } else if (this.hak == 'Seller') {
            console.log('Penjual')
            this.route.navigate(['/seller'])
          } else if (this.hak == 'Cashier') {
            console.log('Kasir')
            this.route.navigate(['/cashier'])
          }

          await this.setvalue(resp.val().akses)

          this.store.set('email', val.email);
          this.store.set('saldo', val.saldo);
        })

        this.hak = this.haks
      })

      this.hak = this.haks
    

      await this.load()

      this.clear()
      this.notif('Login Berhasil')
    } catch (e) {
      console.log(e)
      if (e.code == "auth/invalid-email") {
        this.notif("Format email salah")
      } else if (e.code == "auth/wrong-password" || e.code == "auth/user-not-found") {
        this.notif("Email atau password salah")
      } else if (e.code == "auth/argument-wrong") {
        this.notif("Email atau password tidak boleh kosong")
      } else {
        this.notif(e)
      }
    }
  }

  clear() {
    this.username = null
    this.password = null
  }

  async notif(pesan) {
    var msg = await this.toast.create({
      message: pesan,
      duration: 2000
    })
    msg.present()
  }
}
