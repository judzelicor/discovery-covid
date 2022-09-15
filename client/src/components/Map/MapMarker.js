import { useEffect, useRef } from "react";
import { Circle } from "react-leaflet";

function MapMarker({ magnitude, latitude, longitude, fillColor }) {
    const markerRef = useRef();
    useEffect(() => {
        markerRef.current.setStyle({
            color: fillColor
        })
    }, [fillColor])

    console.log(fillColor)
    return (
        <Circle
            ref={ markerRef }
            center={[ latitude, longitude ]} 
            radius={ (Math.sqrt(magnitude) * 256) / (Math.E) }
            weight={ 1 }
        />
    )
}

export default MapMarker;