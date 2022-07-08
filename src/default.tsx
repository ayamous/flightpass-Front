import { baseConfig, dayToDeparture, delay, Portlet } from "./type";

export const defaultBaseConfig: baseConfig = {
    configId: 1,
    nbrFlights: 1,
    percentage: 0.1
}

export const defaultPassDelay: delay = {
    configId: 1,
    nbrMonths: 1,
    percentage: 0.1
}

export const defaultDelayToDeparture: dayToDeparture = {
    configId: 1,
    nbrDays: 1,
    percentage: 0.1
}
export const portletSlider: Portlet = {
    description: "",
    imageDisplayingOrder: 1,
    imagePath: "",
    message: "",
    p_segmentRef_Id: 6,
    pageName: "HOME",
    position: "SLIDER",
    title: ""
}

export const defaultSegment = {
    "segmentId": 5,
    "configId": 1,
    "departureAirportRef": {
        "name": "Mohammed V International Airport",
        "code": "CMN",
        "latitude": "33.3675003",
        "longitude": "-7.5899701",
        "city": "Casablanca",
        "country": "Morocco",
        "isoCode": "MA"
    },
    "arrivalAirportRef": {
        "name": "John F Kennedy International Airport",
        "code": "JFK",
        "latitude": "40.639801",
        "longitude": "-73.7789002",
        "city": "New York",
        "country": "United States",
        "isoCode": "US"
    }
}