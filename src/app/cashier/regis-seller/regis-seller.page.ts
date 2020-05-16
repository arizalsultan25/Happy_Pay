import { Component, OnInit } from '@angular/core';

//firebase
import * as firebase from 'firebase';
import { snapshotToArray } from '../../../environments/environment';
import { NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database'
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-regis-seller',
  templateUrl: './regis-seller.page.html',
  styleUrls: ['./regis-seller.page.scss'],
})
export class RegisSellerPage implements OnInit {

  akun = {
    email: null,
    akses: "Seller",
    saldo: 0
  }
  email = null
  repassword = null

  ref = firebase.database().ref('akun/');

  constructor(private nav: NavController,
    private toast: ToastController,
    private fAuth: AngularFireAuth,
    private dDb: AngularFireDatabase,
    private route: Router,
    private store: Storage
  ) { 
    
    this.store.get('key').then(pass => {
      this.pw = pass
    })
    this.store.get('email').then(email => {
      this.mail = email
    })
  }
  pw
  mail

  async pesan(kata) {
    let toast = await this.toast.create({
      message: kata,
      duration: 2000
    })
    toast.present()
  }
  password

  clear() {
    this.repassword = null;
    this.password = null
    this.email = null
  }

  async register(data) {
    this.akun.email = this.email
    if (this.akun.email == null || this.password == null || this.repassword == null) {
      this.pesan('Email dan password tidak boleh kosong')
    } else if (this.repassword !== this.password) {
      this.pesan('Password dan Password Konfirmasi tidak cocok')
      this.repassword == null
      this.password == null
    } else {
      try {
        //register firebase auth
        const re = await this.fAuth.createUserWithEmailAndPassword(this.akun.email, this.password)


        //get UID & create user data
        this.createData()
        await this.store.get('pw').then(pass => {
          this.pw = pass
        })
        await this.store.get('email').then(email => {
          this.mail = email
        })
    
        //sign in
        await this.fAuth.signInWithCredential(this.pw)

        this.pesan('Akun telah berhasil didaftarkan')
      } catch (e) {
        this.pesan('Akun telah berhasil didaftarkan')
        this.clear()
      }
    }
  }

  async createData() {
    const prof = await this.fAuth.signInWithEmailAndPassword(this.akun.email, this.password)
    this.fAuth.authState.subscribe(auth => {
      this.dDb.object(`profile/${auth.uid}`).set(this.akun)
    })
    let pwd = null
    let mail = null
    await this.fAuth.signOut()
    await this.store.get('pw').then(pass => {
      pwd = pass
    })
    await this.store.get('email').then(email => {
      mail = email
    })

    //sign in
    await this.fAuth.signInWithEmailAndPassword(mail, pwd)
    //Clear text
    this.clear()
  }

  ngOnInit() {
  }


}
