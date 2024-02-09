export interface SearchCriteria {
  source: string
  device: any
  pos: string
  currency: string
  language: string
  flights: SearchCriteriaFlight[]
  flightType: string
  preferredAirline: any
  selectedFlightClass: string
  adultNum: number
  childNum: number
  infantNum: number
  totalPassengersNum: number
  selectDirectFlightsOnly: boolean
  childAges: number
  infantAges: number
}

export interface SearchCriteriaFlight {
  departingFrom: string
  arrivingTo: string
  departingOnDate: string
}