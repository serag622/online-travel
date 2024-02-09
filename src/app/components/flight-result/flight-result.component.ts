import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirItinerary } from 'src/app/models/Flight,model';
import { FlightsService } from 'src/app/service/flight.service';

@Component({
  selector: 'app-flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.scss']
})
export class FlightResultComponent implements OnInit {

  AirItinerariesList : AirItinerary[] = []
  ViwedAirItinerariesList : AirItinerary[] = []
  page : number = 1;
  size : number = 10;
  totalElemets : number = 0
  PagesList : number  = 0

  constructor(private route  : Router , private flightsService : FlightsService){}
   

  ngOnInit(): void {
    this.getAirItineraries()
  }


  getAirItineraries(){
    this.flightsService.getAirItineraries().subscribe(res => {
      this.AirItinerariesList =  res;
      this.totalElemets = this.AirItinerariesList.length
      this.getViwedList()
    })
  }

  getViwedList(){
    this.PagesList= Math.ceil(this.totalElemets / this.size)
    this.ViwedAirItinerariesList = this.AirItinerariesList.slice((this.page - 1)*this.size , (this.page * this.size))
  }

  nextPage(){
      this.page ++
      this.getViwedList()
  }

  PrevPage(){
    this.page --;
    this.getViwedList()
  }

  gotoPage(page : number){
    this.page = page
    this.getViwedList()
  }

}
