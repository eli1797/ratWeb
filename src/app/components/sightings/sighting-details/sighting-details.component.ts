import { Component, OnInit, Input } from '@angular/core';
import { SightingService } from '../../../core/sighting.service';
// import { Sighting } from '../../../core/Sighting';

@Component({
  selector: 'app-sighting-details',
  templateUrl: './sighting-details.component.html',
  styleUrls: ['./sighting-details.component.css']
})
export class SightingDetailsComponent implements OnInit {

  @Input() key: string;

  constructor(private sightingSvc: SightingService) {

  }

  ngOnInit() {
  }

}

