import { Injectable } from '@angular/core';
import { getMaxListeners } from 'process';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFirestoreCollection} from 'angularfire2/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

export interface Users{
  username: string;
  password: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class DatasrvService {
  usersCollectionRef: AngularFirestoreCollection<Users>;
  user: Observable<Users[]>;

  constructor(public AFS: AngularFirestore) { 
    this.usersCollectionRef = this.AFS.collection('Users');
  }

  registerfb(item){
    this.usersCollectionRef.add(item);
    
  }
}
