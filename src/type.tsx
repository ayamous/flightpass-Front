export type User = {
    firstName: string | null,
   

}

export type Segment = {
    segmentId: number,
    configId: number,
    departureAirportRef:
    {
        name: string,
        code: string,
        latitude: string,
        longitude: string,
        city: string,
        country: string,
        isoCode: string
    },
    arrivalAirportRef: {
        name: string,
        code: string,
        latitude: string,
        longitude: string,
        city: string,
        country: string,
        isoCode: string
    }
}

export type Portlet = {
    position: string,
    imagePath: string,
    message: string,
    title: string,
    description: string,
    pageName: string,
    imageDisplayingOrder: number,
    p_segmentRef_Id: number
}

export type Item = {
    label: string,
    value: string
}



export type baseConfig = {
    nbrFlights: number,
    percentage: number,
    configId: number
}

export type delay = {
    nbrMonths: number,
    percentage: number,
    configId: number
}


export type dayToDeparture = {
    nbrDays: number,
    percentage: number,
    configId: number
}

export type config = {
    nbrFlights: number,
    percentageNbrFlights:number,
    delay: number,
    percentagePassDelay:number
    dayToDeparture: number,
    percentageDayToTravel:number,
    
}

export type priceParams={
    segmentId:number,
    currencyCode:string,
    date: String,
    nbrFlights:number,
    percentageNbrFlights:number,
    percentageDayToTravel:number,
    percentagePassDelay:number
}




