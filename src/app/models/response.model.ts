import { AirItinerary } from "./Flight,model"
import { SearchCriteria } from "./SearchCriteria.model"
import { SearchResultException } from "./SearchResultException.model"

export interface ResponseDto {
    status: string
    airItineraries: AirItinerary[]
    airlines: string[]
    cabinClasses: string[]
    searchCriteria: SearchCriteria
    searchResultException: SearchResultException
  }