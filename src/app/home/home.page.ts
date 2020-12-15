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

  constructor(public alertctrl: AlertController, public srv: DatasrvService, public router:Router, public activatedroute: ActivatedRoute) {}

  async login(){

    let alert=await this.alertctrl.create({
      header: "Success!" ,
      message: "Logged in successfully.",
      buttons: ["OK"],
    });
    alert.present();
  }

}
