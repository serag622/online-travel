import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FlightsService } from 'src/app/service/flight.service';

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

  @Output() newItemEvent = new EventEmitter<filters>();

  ngOnInit(): void {
    this.getAllAirlines()
  }


  getAllAirlines(){
    this.flightsService.getAllAirlines().subscribe((res=>{
      this.AirLineList = res
    }))
  }


  selectAirLine(value : MatCheckboxChange){
    if(value.checked){
      this.filters?.AirLine.push(value.source.value)
    }else{
      this.filters.AirLine = this.filters?.AirLine.filter((air)=> air != value.source.value)
    }
  }

  filter(){
    this.newItemEvent.emit(this.filters);
  }

  reset(){
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