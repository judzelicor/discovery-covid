import React from "react";
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import "leaflet/dist/leaflet.css";
import "./Map.css";
import { latLng, latLngBounds } from "leaflet";
import { ControlBar } from "../ControlBar";
import { connect } from "react-redux";
import MapMarker from "./MapMarker";

const southWest = latLng(-90, -180);
const northEast = latLng(90, 180);
const maxBounds = latLngBounds(southWest, northEast);

class Map extends React.PureComponent {
    render() {
        const { 
            countries,
            active_statistic
        } = this.props;

        console.log(countries)

        const fillColors = {
            total_cases: "#ef4444",
            total_vaccinations: "#8b5cf6",
            total_deaths: "#404040",
            total_recoveries: "#10b981"
        }

        if (true) {
            return (
                <React.Fragment>
                    <div className="map">
                        <ControlBar />
                        <MapContainer
                            style={{ height: "100%", width: "100%" }}
                            maxBounds={ maxBounds }
                            center={[51.505, -0.09]}
                            maxZoom={7}
                            minZoom={3}
                            zoom={ 4 }
                            scrollWheelZoom={ true }
                            zoomControl={ false }
                        >
                            <TileLayer
                                url="https://api.mapbox.com/styles/v1/judzelicor/cl7wmilqh000j15mvixcvr34r/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoianVkemVsaWNvciIsImEiOiJjbDd3bTNjczkwZG0zM29wN3pib3dub3ZxIn0.4mDfRP_KHNAMqFJQaTdnJg"
                            />
                            {
                                countries.map(country => {
                                    return <MapMarker magnitude={country[active_statistic]} longitude={ country.longitude } latitude={ country.latitude } fillColor={ fillColors[active_statistic] } />
                                })
                            }
                        </MapContainer>
                    </div>
                </React.Fragment>
            )
        }
    }
}

function mapStateToProps(state) {
    const { 
        active_statistic,
        countries
    } = state.countryStatistics;

    return {
        countries,
        active_statistic
    }
}

export default connect(mapStateToProps)(Map);