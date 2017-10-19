import { Injectable } from '@angular/core';
//import { Sighting } from './Sighting';
import * as firebase from 'firebase/app';

@Injectable()
export class SightingService {

  //base path in firebase
  private basePath: string = 'sightings';

  database: any = firebase.database();

  constructor() {}

  // getObject(key: string): Sighting {
  //   var itemRef = this.database.ref(this.basePath).child(key);
  //   var toReturn: Sighting;
  //   const lat: string = this.getLat(key);
  //   const long: string = this.getLong(key);
  //   const address: string = this.getAddress(key);
  //   const borough: string = this.getBorough(key);
  //   const city: string = this.getAddress(key);
  //   const state: string = this.getState(key);
  //   const locationType: string = this.getLocType(key);
  //   const date: string = this.getDate(key);
  //   const zip: string = this.getZip(key);

  //   toReturn = new Sighting(address, borough, city, state, key, lat, locationType, long, zip, date);
  //   return toReturn;
  // }

  // Return a string containing a latitutde given a ratSighting's key
  getLat(key: string): string {
    var itemRef = this.database.ref(this.basePath).child(key);
    var toReturn: string;
    itemRef.once('value').then(function(dataSnapshot) {
      // handle read data.
      toReturn = dataSnapshot.child("latitude").val();
      console.log(toReturn);
    });
    return toReturn
  }

  // Return a string containing a longitude given a ratSighting's key
  getLong(key: string): string {
    var itemRef = this.database.ref(this.basePath).child(key);
    var toReturn: string;
    itemRef.once('value').then(function(dataSnapshot) {
      // handle read data.
      toReturn = dataSnapshot.child("longitude").val();
      //console.log(toReturn);
    });
    return toReturn
  }

  // Return a string containing a date given a ratSighting's key
  getDate(key: string): string {
    var itemRef = this.database.ref(this.basePath).child(key);
    var toReturn: string;
    itemRef.once('value').then(function(dataSnapshot) {
      // handle read data.
      toReturn = dataSnapshot.child("date").val();
      console.log(toReturn);
    });
    return toReturn
  }

  // Return a string containing a zipCode given a ratSighting's key
  getZip(key: string): string {
    var itemRef = this.database.ref(this.basePath).child(key);
    var toReturn: string;
    itemRef.once('value').then(function(dataSnapshot) {
      // handle read data.
      toReturn = dataSnapshot.child("zip").val();
      console.log(toReturn);
    });
    return toReturn
  }

  // Return a string containing an address given a ratSighting's key
  getAddress(key: string): string {
    var itemRef = this.database.ref(this.basePath).child(key);
    var toReturn: string;
    itemRef.once('value').then(function(dataSnapshot) {
      // handle read data.
      toReturn = dataSnapshot.child("address").val();
      console.log(toReturn);
    });
    return toReturn
  }

  // Return a string containing a city's name given a ratSighting's key
  getCity(key: string): string {
    var itemRef = this.database.ref(this.basePath).child(key);
    var toReturn: string;
    itemRef.once('value').then(function(dataSnapshot) {
      // handle read data.
      toReturn = dataSnapshot.child("city").val();
      console.log(toReturn);
    });
    return toReturn
  }

  // Return a string containing a state name given a ratSighting's key
  getState(key: string): string {
    var itemRef = this.database.ref(this.basePath).child(key);
    var toReturn: string;
    itemRef.once('value').then(function(dataSnapshot) {
      // handle read data.
      toReturn = dataSnapshot.child("state").val();
      console.log(toReturn);
    });
    return toReturn
  }

  // Return a string containing a boroughs's name given a ratSighting's key
  getBorough(key: string): string {
    var itemRef = this.database.ref(this.basePath).child(key);
    var toReturn: string;
    itemRef.once('value').then(function(dataSnapshot) {
      // handle read data.
      toReturn = dataSnapshot.child("borough").val();
      console.log(toReturn);
    });
    return toReturn
  }

  // Return a string containing a location Type given a ratSighting's key
  getLocType(key: string): string {
    var itemRef = this.database.ref(this.basePath).child(key);
    var toReturn: string;
    itemRef.once('value').then(function(dataSnapshot) {
      // handle read data.
      toReturn = dataSnapshot.child("locationType").val();
      console.log(toReturn);
    });
    return toReturn
  }
}
