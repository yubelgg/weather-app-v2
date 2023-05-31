import React from "react";

type info = {
    params: {
        city: string;
        lat: string;
        long: string;
    };
};
function WeatherReport({params: {city, lat, long}}: info) {
    return (
        <div>{city} {lat} {long}</div>
    )
}

export default WeatherReport;