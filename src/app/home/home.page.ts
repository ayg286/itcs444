import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {DatasrvService} from '../datasrv.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore} from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public user = { username:"", password:""};

  constructor(public afAuth: AngularFireAuth,public alertctrl: AlertController, public srv: DatasrvService, public router:Router, public activatedroute: ActivatedRoute) {}

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
