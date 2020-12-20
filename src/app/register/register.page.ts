import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {DatasrvService, Users} from '../datasrv.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public user = { email:"", password:""};

  constructor(public afAuth: AngularFireAuth, public alertctrl: AlertController, public srv: DatasrvService, public router:Router, public activatedroute: ActivatedRoute) { }

  ngOnInit() {
  }

  register(){
    this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
    .then((response)=>{
      alert("Registered succesfully");
    })
    .catch((err)=>{
      alert("Registering failed.");
    })
  }}