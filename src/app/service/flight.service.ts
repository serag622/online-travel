import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { map } from "rxjs";
import { AirItinerary } from "../models/Flight,model";
import { Filters } from "../components/flight-result/filter/filter.component";


@Injectable({
    providedIn: "root",
})

export class FlightsService {

    basUrl: string = 'assets/response.json'
    constructor(private http: HttpClient) {

    }

    /************  get Airitineraries fom json  *************/
    getAirItineraries() {
        return this.http.get(`${this.basUrl}`).pipe(map((res: any) => {
            return res.airItineraries
        }))
    }

    /************* get All Air line list *************/
    getAllAirlines(){
        return this.http.get(`${this.basUrl}`).pipe(map((res: any) => {
            return res.airlines
        }))
    }


    /******************* filter filghts by airline && price && depature name *********************/
    searchFlights(criteria: Filters) {
        return this.http.get(`${this.basUrl}`).pipe(map((res: any) => {
            return res.airItineraries.filter((asd : AirItinerary)=> 
              criteria.AirLine.length ? 
              (criteria.AirLine.findIndex((c)=> c == asd.allJourney.flights[0].flightAirline.airlineName) > -1 && asd.itinTotalFare.amount >= criteria.priceRange.min && asd.itinTotalFare.amount <= criteria.priceRange.hight && (criteria.depAirport ? asd.allJourney.flights[0].flightDTO[0].departureTerminalAirport.airportName.toLocaleLowerCase().includes(criteria.depAirport ?criteria.depAirport.toLocaleLowerCase() : '' ) : true ) )
              :( asd.itinTotalFare.amount >= criteria.priceRange.min && asd.itinTotalFare.amount <= criteria.priceRange.hight && (criteria.depAirport ? asd.allJourney.flights[0].flightDTO[0].departureTerminalAirport.airportName.toLocaleLowerCase().includes(criteria.depAirport ?criteria.depAirport.toLocaleLowerCase() : '' ) : true ))
            )
        }))
    }

}