
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Line,

} from "react-simple-maps";
import { Marker } from "react-simple-maps"
import { Istate } from '../../../../store';
import { Segment } from '../../../../type';
import { AiTwotonePlusCircle } from "react-icons/ai"
const geoUrl =

  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";



const MapEarth = () => {
  const [scale, setScale] = useState<number>()
  const [heightCenter, setHeightCenter] = useState<number>(0.03)
  const [longitude, setLongitude] = useState<number>(0)
  const [latitude, setlatitude] = useState<number>(0)
  let width = window.innerWidth;
  const currentSegment = useSelector((state: Istate) => state.home.currentSegment)
  useEffect(() => {

    if (width < 992) {
      setScale(500)
    }
    else if (992 <= width && width < 1200) {
      setScale(400)
    }
    else if (1200 <= width) {
      setScale(550)
      //setHeightCenter(0.3)
    }
    if (width > 1368) {
      setHeightCenter(0.3)
    }

  }, [width])

  useEffect(() => {
    setLongitude(Number(currentSegment.departureAirportRef.longitude))
    setlatitude(Number(currentSegment.departureAirportRef.latitude))
  }, [currentSegment])



  const markers: {
    markerOffset: number;
    name: string;
    coordinates: [number, number];
  }[] = [
      { markerOffset: 20, name: currentSegment.departureAirportRef.city, coordinates: [Number(currentSegment.departureAirportRef.longitude), Number(currentSegment.departureAirportRef.latitude)] },
      { markerOffset: 20, name: currentSegment.arrivalAirportRef.city, coordinates: [Number(currentSegment.arrivalAirportRef.longitude), Number(currentSegment.arrivalAirportRef.latitude)] }

    ]
  return (
    <div className='map ' >
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{
          scale: scale,
          center: [longitude - 20, latitude*0.25]


        }}


      >
        <Graticule stroke="white" />
        <Geographies
          geography={geoUrl}
          fill="#BDBDBD"
          strokeWidth={0.5}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>

        <Line
          from={[Number(currentSegment.departureAirportRef?.longitude), Number(currentSegment.departureAirportRef.latitude)]}
          to={[Number(currentSegment.arrivalAirportRef.longitude), Number(currentSegment.arrivalAirportRef.latitude)]}
          stroke="#D00B41"
          strokeWidth={5}
          strokeLinecap="butt"
          strokeDasharray={12}

        />

        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker className='marker' key={name} coordinates={coordinates}  >
            <g
              fill="none"
              stroke="#D00B41"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            >
              <AiTwotonePlusCircle />

            </g>
            <text

              y={markerOffset}
            >
              {name}
            </text>
          </Marker>
        ))}


      </ComposableMap>
    </div>
  )
}
export default MapEarth 