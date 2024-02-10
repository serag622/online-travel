import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
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
  filters : filters = {
    AirLine : [] , 
    priceRange : {
      min : 100,
      hight : 2000
    }
  }
  selection = new SelectionModel<string>(true, []);


  @Output() newItemEvent = new EventEmitter<filters>();

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
    this.newItemEvent.emit(this.filters);
  }

  reset(){
    this.selection.clear()
    this.filters = {
      AirLine : [] , 
      priceRange : {
        min : 100,
        hight : 2000
      }
    }
    this.newItemEvent.emit(this.filters);

}


}

export interface filters {
  AirLine : string[] ,
  priceRange : {min : number , hight : number }
}