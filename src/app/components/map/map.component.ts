import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  //map code from https://angular-maps.com/guides/getting-started/
  title: string = 'Rat Sightings';
  lat: number = 40.7128;
  lng: number = -74.0060;

  constructor(){}


}
