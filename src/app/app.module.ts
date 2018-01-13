import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { Ng2GoogleChartsModule } from 'ng2-google-charts'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { environment } from '../environments/environment';
import { WrapCreateEditComponent } from './wrap-create-edit/wrap-create-edit.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module'
import { FirebaseService } from './firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    WrapCreateEditComponent,
    ViewComponent,
    EditComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    Ng2GoogleChartsModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
