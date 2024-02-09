import { Component, Input, OnInit } from '@angular/core';
import { AirItinerary } from 'src/app/models/Flight,model';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit {

  @Input() AirItinerary !: AirItinerary

  ngOnInit(): void {
  }

}
