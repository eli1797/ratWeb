import { Component, OnInit } from '@angular/core';
import { SightingService } from '../../../core/sighting.service';
//import { Sighting }  from '../../../core/Sighting';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sightings-list',
  templateUrl: './sightings-list.component.html',
  styleUrls: ['./sightings-list.component.css'],
  providers: [SightingService]
})
export class SightingsListComponent implements OnInit {

  showSpinner = true;
  lat:string;
  long:string;

  sighting: Sighting;

  //testing purposes
  key: string = "34421900";

  constructor(private SightingService: SightingService) {
    // this.sighting = this.SightingService.getObject(this.key);
  }

  ngOnInit() {
  }

  setLat(key:string): void {
    this.lat = this.SightingService.getLat(key);
  }


}
