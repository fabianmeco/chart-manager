import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service'
import {DataGroup} from '../models/data-group.model'
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  private groupList: DataGroup [] = [];
  private selectedGroup: DataGroup = <DataGroup>{};

  constructor(private _firebase: FirebaseService) { }

  ngOnInit() {
    this.loadGroupList(); 
  }

  loadGroupList(){
    this._firebase.onGetAllDocuments()
      .subscribe(groups => {
        this.groupList = groups;
      })
  }

  loadGroup(event: any){
    console.log(event.targer.value);
  }

}
