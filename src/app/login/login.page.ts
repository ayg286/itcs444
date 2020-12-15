import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {DatasrvService} from '../datasrv.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public alertctrl: AlertController, public srv: DatasrvService, public router:Router, public activatedroute: ActivatedRoute) { }

  ngOnInit() {
  }
  

  
}
