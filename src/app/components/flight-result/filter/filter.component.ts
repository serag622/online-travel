import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FlightsService } from 'src/app/service/flight.service';
import { SelectionModel } from "@angular/cdk/collections";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor( private flightsService : FlightsService){}

  AirLineList : string[] = []
  filters : Filters = {
    depAirport : null ,
    AirLine : [] , 
    priceRange : {
      min : 100,
      hight : 2000
    }
  }
  selection = new SelectionModel<string>(true, []);


  @Output() SearchAirItineraries = new EventEmitter<Filters>();

  ngOnInit(): void {
    this.getAllAirlines()
  }

  getAllAirlines(){
    this.flightsService.getAllAirlines().subscribe((res=>{
      this.AirLineList = res
    }))
  }


  filter(){
    this.filters.AirLine = this.selection.selected
    this.filters.depAirport = this.filters.depAirport ? this.filters.depAirport.trim() : null
    this.SearchAirItineraries.emit(this.filters);
  }

  reset(){
    this.selection.clear()
    this.filters = {
      depAirport : null ,
      AirLine : [] , 
      priceRange : {
        min : 100,
        hight : 2000
      }
    }
    this.SearchAirItineraries.emit(this.filters);

}


}

export interface Filters {
  depAirport : string | null,
  AirLine : string[] ,
  priceRange : {min : number , hight : number }
}