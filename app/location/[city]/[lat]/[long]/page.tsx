import { getClient } from "@/apolloClient";
import weatherQueries from "@/graphql/queries/weatherQueries";

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

    return (
        <div>{city} {lat} {long}</div>
    )
}

export default WeatherReport;