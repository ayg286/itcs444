import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {DatasrvService, Users} from '../datasrv.service';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFirestoreCollection} from 'angularfire2/firestore';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  item: Users;

  constructor(public alertctrl: AlertController, public srv: DatasrvService, public router:Router, public activatedroute: ActivatedRoute) {
    this.item = {} as Users;
   }

  ngOnInit() {
  }

  
  
  async register(){
    this.srv.registerfb(this.item);
    let alert=await this.alertctrl.create({
      header: "Success!" ,
      message: "Registered successfully.",
      buttons: ["OK"],
    });
    alert.present();
  }

}
