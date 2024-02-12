import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirItinerary } from 'src/app/models/Flight,model';
import { FlightsService } from 'src/app/service/flight.service';
import { Filters } from './filter/filter.component';

@Component({
  selector: 'app-flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.scss']
})
export class FlightResultComponent implements OnInit {

  AirItinerariesList : AirItinerary[] = []
  ViwedAirItinerariesList : AirItinerary[] = [] // this is the viewed array 
  page : number = 1;
  size : number = 10;
  totalElemets : number = 0 // total size of  all elements in DB
  PagesList : number  = 0 // number of pages

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

  /******* get unmber of pages and the viewed list *******/
  getViwedList(){
    this.PagesList= Math.ceil(this.totalElemets / this.size) 
    this.ViwedAirItinerariesList = this.AirItinerariesList.slice((this.page - 1)*this.size , (this.page * this.size))
  }

  /****** go to next page ******/
  nextPage(){
      this.page ++
      this.getViwedList()
  }

 /****** go to previos page ******/
  PrevPage(){
    this.page --;
    this.getViwedList()
  }

  /********** go to spacific page ************/
  gotoPage(page : number){
    this.page = page
    this.getViwedList()
  }


  SearchAirItineraries($event : Filters){
    this.page = 1;
    this.flightsService.searchFlights($event).subscribe((res)=>{
      this.AirItinerariesList =  res;
      this.totalElemets = this.AirItinerariesList.length
      this.getViwedList()
    })
  }
}
