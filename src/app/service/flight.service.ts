import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, map, of } from "rxjs";
import { ResponseDto } from "../models/response.model";
import { AirItinerary } from "../models/Flight,model";
import { filters } from "../components/flight-result/filter/filter.component";


@Injectable({
    providedIn: "root",
})

export class FlightsService {

    basUrl: string = 'assets/response.json'
    constructor(private http: HttpClient) {

    }

    getAirItineraries() {
        return this.http.get(`${this.basUrl}`).pipe(map((res: any) => {
            return res.airItineraries
        }))
    }

    getAllAirlines(){
        return this.http.get(`${this.basUrl}`).pipe(map((res: any) => {
            return res.airlines
        }))
    }
    searchFlights(criteria: filters) {
        return this.http.get(`${this.basUrl}`).pipe(map((res: any) => {
            return res.airItineraries.filter((asd : AirItinerary)=> 
              criteria.AirLine.length ? (criteria.AirLine.findIndex((c)=> c == asd.allJourney.flights[0].flightAirline.airlineName) > -1 && asd.itinTotalFare.amount >= criteria.priceRange.min && asd.itinTotalFare.amount <= criteria.priceRange.hight)
              : asd.itinTotalFare.amount >= criteria.priceRange.min && asd.itinTotalFare.amount <= criteria.priceRange.hight
            )
        }))
    }

}