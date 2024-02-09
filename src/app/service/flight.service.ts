import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, map, of } from "rxjs";
import { ResponseDto } from "../models/response.model";
import { AirItinerary } from "../models/Flight,model";


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

}