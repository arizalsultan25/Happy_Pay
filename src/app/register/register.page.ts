import { Component, OnInit } from '@angular/core';

//firebase
import * as firebase from 'firebase';
import { snapshotToArray } from '../../environments/environment';
import { NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase} from '@angular/fire/database'
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  akun = {
    email: null,
    password: null,
    akses: "Customer",
    saldo: 0
  }
  email = null
  repassword = null

  ref = firebase.database().ref('akun/');

  constructor(private nav: NavController,
    private toast: ToastController,
    private fAuth: AngularFireAuth,
    private dDb: AngularFireDatabase,
    private route:Router
  ) { }

  async pesan(kata) {
    let toast = await this.toast.create({
      message: kata,
      duration: 2000
    })
    toast.present()
  }

  clear() {
    this.repassword = null;
    this.akun.password = null
    this.email = null
  }

  async register(data) {
    this.akun.email = this.email
    if (this.akun.email == null || this.akun.password == null || this.repassword == null) {
      this.pesan('Email dan password tidak boleh kosong')
    } else if (this.repassword !== this.akun.password) {
      this.pesan('Password dan Password Konfirmasi tidak cocok')
      this.repassword == null
      this.akun.password == null
    } else {
      try {
        //register firebase auth
        const re = await this.fAuth.createUserWithEmailAndPassword(this.akun.email, this.akun.password)
        
        //get UID & create user data
        this.createData()
        
        this.pesan('Akun telah berhasil didaftarkan')
      } catch (e) {
        this.pesan('error : ' + e)
      }
    }
  }

  async createData(){
    await this.fAuth.signOut()
    const prof = await this.fAuth.signInWithEmailAndPassword(this.akun.email, this.akun.password)
    this.fAuth.authState.subscribe(auth =>{
      this.dDb.object(`profile/${auth.uid}`).set(this.akun)
    })

    //Clear text
    this.clear()

    //goto Login Page
    this.route.navigate(['/login'])
  }

  ngOnInit() {
  }

}
