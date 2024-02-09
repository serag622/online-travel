export interface AirItinerary {
    sequenceNum: number
    pKey: string
    isRefundable: boolean
    itinTotalFare: ItinTotalFare
    totalDuration: number
    deptDate: string
    arrivalDate: string
    cabinClass: string
    flightType: string
    allJourney: AllJourney
    baggageInformation: BaggageInformation[]
    passengerFareBreakDownDTOs: PassengerFareBreakDownDto[]
  }
  
  export interface ItinTotalFare {
    amount: number
    fareAmount: number
    promoCode: any
    promoDiscount: number
    currencyCode: string
    totalTaxes: number
  }
  
  export interface AllJourney {
    flights: Flight[]
  }
  
  export interface Flight {
    flightDTO: FlightDto[]
    flightAirline: FlightAirline2
    elapsedTime: number
    stopsNum: number
  }
  
  export interface FlightDto {
    departureOffset: number
    arrivalOffset: number
    isStopSegment: boolean
    deptTime: string
    landTime: string
    departureDate: string
    arrivalDate: string
    flightAirline: FlightAirline
    operatedAirline: OperatedAirline
    durationPerLeg: number
    departureTerminalAirport: DepartureTerminalAirport
    arrivalTerminalAirport: ArrivalTerminalAirport
    transitTime: string
    flightInfo: FlightInfo
    segmentDetails: SegmentDetails
    supplierRefID: any
  }
  
  export interface FlightAirline {
    airlineCode: string
    airlineName: string
    airlineLogo: string
    alternativeBusinessName: string
    passportDetailsRequired: boolean
  }
  
  export interface OperatedAirline {
    airlineCode: any
    airlineName: any
    airlineLogo: any
    alternativeBusinessName: any
    passportDetailsRequired: boolean
  }
  
  export interface DepartureTerminalAirport {
    airportCode: string
    airportName: string
    cityName: string
    cityCode: string
    countryCode: string
    countryName: string
    regionName: string
  }
  
  export interface ArrivalTerminalAirport {
    airportCode: string
    airportName: string
    cityName: string
    cityCode: string
    countryCode: string
    countryName: string
    regionName: string
  }
  
  export interface FlightInfo {
    flightNumber: string
    equipmentNumber: string
    mealCode: string
    bookingCode: string
    cabinClass: string
  }
  
  export interface SegmentDetails {
    uniqueKey: string
    baggage: string
    childBaggage: any
    infantBaggage: any
  }
  
  export interface FlightAirline2 {
    airlineCode: string
    airlineName: string
    airlineLogo: string
    alternativeBusinessName: string
    passportDetailsRequired: boolean
  }
  
  export interface BaggageInformation {
    baggage: string
    childBaggage: any
    infantBaggage: any
    airlineName: string
    deptCity: string
    landCity: string
    flightNum: string
  }
  
  export interface PassengerFareBreakDownDto {
    key: string
    pricingMethod: string
    cancelPenaltyDTOs: CancelPenaltyDto[]
    changePenaltyDTOs: ChangePenaltyDto[]
    passengerQuantity: number
    passengerType: string
    passengersRef: string[]
    flightFaresDTOs: FlightFaresDto[]
    taxes: Tax[]
  }
  
  export interface CancelPenaltyDto {
    price: number
    curency: string
    percentage: number
  }
  
  export interface ChangePenaltyDto {
    price: number
    curency: string
    percentage: number
  }
  
  export interface FlightFaresDto {
    fareAmount: number
    fareType: string
    currencyCode: string
  }
  
  export interface Tax {
    taxCode: string
    amount: number
    taxName: any
    taxCurrencyCode: string
    content: string
    countryCode: any
  }
  