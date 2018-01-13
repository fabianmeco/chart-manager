import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { DataGroup } from '../models/data-group.model'
import { FirebaseService } from '../firebase.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  private groupList: DataGroup [] = [];
  private selectedGroup: DataGroup = <DataGroup>{};
  myForm: FormGroup;
  items: any[] = [];
  name: string ="";


  constructor(public _firebase: FirebaseService, private _formBuilder: FormBuilder) {     

  }

  ngOnInit() {
    this.loadGroupList(); 
    this.myForm = this._formBuilder.group({
      items: this._formBuilder.array([this.buildItem('')])
    })       
  }
  
  loadGroupList(){
    this._firebase.onGetAllDocuments()
      .subscribe(groups => {
        this.groupList = groups;
      })
  }

  loadGroup(id:any){
    console.log(id)
  }
  
  buildItem(val: string){
    return new FormGroup({
      group: new FormControl(val),
      quantity: new FormControl(0)
    })
  }
  save(){
    this.selectedGroup.name = this.name;
    this.selectedGroup.id = Date.now().toString();
    this.selectedGroup.category = this.myForm.value.items;
    this._firebase.onCreateGroup(this.selectedGroup).then(
      value=>{console.log("saved")}
    );    
  }



}
