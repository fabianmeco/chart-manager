import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { WrapCreateEditComponent } from './wrap-create-edit/wrap-create-edit.component';
import { ViewComponent } from './view/view.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routesForEvent: Routes = [
    {path: 'charts', component: ViewComponent },
    {path: 'charts/create', component: WrapCreateEditComponent},
    {path: '', component: HomeComponent},
    {path: '**', component: NotFoundComponent}
  ];

  @NgModule({
      imports:[
        RouterModule.forRoot(routesForEvent)
      ], 
      exports:[
          RouterModule
      ]
  })
  export class AppRoutingModule{}