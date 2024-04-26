import { getClient } from "@/apolloClient";
import weatherQueries from "@/graphql/queries/weatherQueries";
import { Card } from "@tremor/react";
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

async function WeatherReport({ params: { city, lat, long } }: Props) {
  const client = getClient();
  console.log(client);
  // const { data } = await client.query({
  //   query: weatherQueries,
  //   variables: {
  //     current_weather: "true",
  //     longitude: long,
  //     latitude: lat,
  //     timezone: "EST",
  //   },
  // });

  // const result: Root = data.myQuery;
  // console.log(result);

  // const newData = simpleData(result, city);

  // const res = await fetch(`${pathBase()}/api/chatgpt`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     WeatherReport: newData,
  //   }),
  // });

  // const GPTdata = await res.json();
  // const { content } = GPTdata;

  return (
    <div>hello</div>
    // <div className="p-5 flex flex-row min-h-screen">
    //   <div className="pb-5">
    //     <h3 className="text-xl font-bold">Today</h3>
    //     <Card>
    //       <p className="font-bold text-xl">{decodeURI(city)}</p>
    //       <p>Updated lasted </p>
    //       {new Date(result.current_weather.time).toLocaleString()} (
    //       {result.timezone})<CityLocation></CityLocation>
    //     </Card>
    //   </div>

    //   <div>
    //     <div className="grid grid-cols-2 gap-5">
    //       {/** call card **/}
    //       <CallCard msg={content} />

    //       <WeatherChart result={result}></WeatherChart>
    //     </div>

    //     <div className="grid grid-cols-2 gap-5 m-2">
    //       <InfoCard
    //         title="Min Temperature"
    //         metric={`${result.daily.temperature_2m_min[0]}`}
    //       ></InfoCard>

    //       <InfoCard
    //         title="Max Temperature"
    //         metric={`${result.daily.temperature_2m_max[0]}`}
    //       ></InfoCard>

    //       <InfoCard
    //         title="Wind Speed"
    //         metric={`${result.current_weather.windspeed}`}
    //       ></InfoCard>

    //       <InfoCard
    //         title="Wind Direction"
    //         metric={`${result.current_weather.winddirection}`}
    //       ></InfoCard>

    //       <InfoCard
    //         title="Sunrise Sunset"
    //         metric={`${result.daily.sunrise[0]}
    //                              ${result.daily.sunset[0]}`}
    //       ></InfoCard>

    //       <InfoCard
    //         title="Humidity"
    //         metric={`${result.hourly.relativehumidity_2m[0]}`}
    //       ></InfoCard>

    //       <InfoCard
    //         title="Weather Condition"
    //         metric={weatherCondition()}
    //       ></InfoCard>
    //     </div>
    //   </div>
    // </div>
  );
}

export default WeatherReport;
