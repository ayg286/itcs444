import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';


var firebaseConfig = {
  apiKey: "AIzaSyAagt2Huo-r_3F-mbQ38GzoiDONOSCz4vM",
  authDomain: "itcs444-61951.firebaseapp.com",
  databaseURL: "https://itcs444-61951.firebaseio.com",
  projectId: "itcs444-61951",
  storageBucket: "itcs444-61951.appspot.com",
  messagingSenderId: "451380277868",
  appId: "1:451380277868:web:6c38c18bdc2fe3bed7de49",
  measurementId: "G-ENB6M1ZEYM"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
            IonicModule.forRoot(), AppRoutingModule,
          // initialize angularfire with credentials from the dashboard
          AngularFireModule.initializeApp(firebaseConfig),
          // Import the AngularFireDatabaseModule to use database
          AngularFirestoreModule,
          AngularFireAuthModule
],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
