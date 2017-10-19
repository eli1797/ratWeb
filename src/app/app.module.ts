import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

//Maps
import { AgmCoreModule } from '@agm/core';

import { AuthService } from './core/auth.service';
import { SightingService } from './core/sighting.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MapComponent } from './components/map/map.component';
import { SightingDetailsComponent } from './components/sightings/sighting-details/sighting-details.component';
import { SightingsListComponent } from './components/sightings/sightings-list/sightings-list.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'map', component:MapComponent}
]

var config = {
    apiKey: "AIzaSyCLRwuK-ochOMbkZ_XXaNax68DGOqLLSSk",
    authDomain: 'androidstudioprojects-b4132.firebaseapp.com',
    databaseURL: 'https://androidstudioprojects-b4132.firebaseio.com',
    storageBucket: 'androidstudioprojects-b4132.appspot.com'
  };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    MapComponent,
    SightingDetailsComponent,
    SightingsListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLRwuK-ochOMbkZ_XXaNax68DGOqLLSSk'
    })
  ],
  providers: [
    AuthService,
    AngularFireDatabase,
    SightingService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    firebase.initializeApp(config);
  }
}
