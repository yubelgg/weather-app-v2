import { getClient } from "@/apolloClient";
import weatherQueries from "@/graphql/queries/weatherQueries";
import {Card} from "@tremor/react";
import CallCard from "@/components/CallCard";
import InfoCard from "@/components/InfoCard";
import simpleData from "@/app/api/chatgpt/simpleData";
import pathBase from "@/app/api/chatgpt/pathBase";
import CityLocation from "@/components/CityLocation";
import WeatherChart from "@/components/WeatherChart";

type Props = {
    params: {
        city: string;
        lat: string;
        long: string;
    };
};

async function WeatherReport({params: {city, lat, long}}: Props) {
    const client = getClient();
    const { data } = await client.query({
        query: weatherQueries,
        variables: {
            current_weather: "true",
            longitude: long,
            latitude: lat,
            timezone: "EST",
        }
    })

    const result: Root = data.myQuery;
    console.log(result)

    const newData = simpleData(result, city); 

    const res = await fetch(`${pathBase()}/api/chatgpt`, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            WeatherReport: newData
        })
    })

    const GPTdata = await res.json();
    const { content } = GPTdata;

    const weatherCondition = () => {
        let num = result.daily.weathercode[0]
        if (num === 0) {
            return <div>Clear Sky</div>
        } else if (num === 1 || num === 2 || num === 3) {
            return <div>Mainly Clear,partly cloudy, and overcast</div>
        } else if (num === 45 || num === 48) {
            return <div>Fog</div>
        } else if (num === 51 || num === 53 || num === 55) {
            return <div>Drizzle</div>
        } else if (num === 56 || num === 57) {
            return <div>Freezing Drizzle</div>
        } else if (num === 61 || num === 63 || num === 65) {
            return <div>Rain</div>
        } else if (num === 66 || num === 67) {
            return <div>Freezing Rain</div>
        } else if (num === 71 || num === 73 || num === 75) {
            return <div>Snow Fall</div>
        } else if (num === 77) {
            return <div>Snow Grains</div>
        } else if (num === 80 || num === 81 || num === 82) {
            return <div>Rain Showers</div>
        } else if (num === 85 || num === 86) {
            return <div>Snow Showers</div>
        } else if (num === 96) {
            return <div>Thunderstorm</div>
        }
    }

    return (
        <div className="p-5 flex flex-row min-h-screen">
            <div className="pb-5">
               <h3 className="text-xl font-bold">Today</h3>
                <Card>
                    <p className="font-bold text-xl">{decodeURI(city)}</p>
                    <p>Updated lasted {" "}</p>
                    {new Date(result.current_weather.time).toLocaleString()} ({result.timezone})
                    <CityLocation></CityLocation>
                </Card>
            </div>

            <div>
                <div className="grid grid-cols-2 gap-5">
                    {/** call card **/}
                    <CallCard msg={content}/>

                    <WeatherChart result={result}></WeatherChart>
                </div>

                <div className="grid grid-cols-2 gap-5 m-2">
                    <InfoCard
                        title="Min Temperature"
                        metric={`${result.daily.temperature_2m_min[0]}`}>
                    </InfoCard>

                    <InfoCard
                        title="Max Temperature"
                        metric={`${result.daily.temperature_2m_max[0]}`}>
                    </InfoCard>


                    <InfoCard
                        title="Wind Speed"
                        metric={`${result.current_weather.windspeed}`}>
                    </InfoCard>

                    <InfoCard
                        title="Wind Direction"
                        metric={`${result.current_weather.winddirection}`}>
                    </InfoCard>

                    <InfoCard
                        title="Sunrise Sunset"
                        metric={`${result.daily.sunrise[0]}
                                 ${result.daily.sunset[0]}`}>
                    </InfoCard>

                    <InfoCard
                        title="Humidity"
                        metric={`${result.hourly.relativehumidity_2m[0]}`}>
                    </InfoCard>

                    <InfoCard
                        title="Weather Condition"
                        metric={weatherCondition()}>
                    </InfoCard>
                </div>
            </div>
        </div>
    )
}

export default WeatherReport;