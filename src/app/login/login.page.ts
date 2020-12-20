import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {DatasrvService} from '../datasrv.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth} from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user = { username:"ayg286@gmail.com", password:"1234567"};

  constructor(public afAuth: AngularFireAuth, public alertctrl: AlertController, public srv: DatasrvService, public router:Router, public activatedroute: ActivatedRoute) { }

  ngOnInit() {
  }
  
  login(){
    this.afAuth.auth.signInWithEmailAndPassword(this.user.username, this.user.password)
    .then((response)=>{
      alert("logged in succesfuly");
    })
    .catch((err)=>{
      alert("username or password incorrect");
    })

  }

  
}
