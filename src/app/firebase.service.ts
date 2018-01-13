import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import {AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore'

import 'rxjs/add/operator/switchMap'
import 'rxjs/add/observable/combineLatest'
import 'rxjs/add/operator/map';

import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2';
import { DataGroup } from './models/data-group.model';
import { Promise } from 'q';
import { Text } from '@angular/compiler';


@Injectable()

export class FirebaseService {
  private documentsCollection: AngularFirestoreCollection<DataGroup>;
  document: Observable<DataGroup[]>;



  constructor( private afdb: AngularFirestore) {
    this.documentsCollection = afdb.collection<DataGroup>('datagroups');
    this.document = this.documentsCollection.snapshotChanges().map(actions =>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as DataGroup;
        const id = a.payload.doc.id;
        return {id, ...data}
      })
    })    
   }

   onCreateGroup(group: DataGroup){
    return this.documentsCollection.doc(group.id).set(group);
   }

   onGetGroup(id: string){
     return this.documentsCollection.doc(id).valueChanges();
   }

   onGetAllDocuments(){
     return this.documentsCollection.valueChanges();
   }

   onUpdateDocument(group: DataGroup){
     return this.documentsCollection.doc(group.id).update(group);
   }

   
  

  
}