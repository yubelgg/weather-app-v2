import { getClient } from "@/apolloClient";
import weatherQueries from "@/graphql/queries/weatherQueries";
import {Card} from "@tremor/react";
import CallCard from "@/components/CallCard";
import InfoCard from "@/components/InfoCard";

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
        <div className="p-5">
            <div className="pb-5">
               <h3 className="text-xl font-bold">Today</h3>
                <Card>
                    <p>Updated lasted {" "}</p>
                    {new Date(result.current_weather.time).toLocaleString()} ({result.timezone})
                </Card>
            </div>

            <div>
                {/** call card **/}
                <CallCard msg="GPT"></CallCard>
            </div>

            <div>
                <InfoCard
                    title="Temperature"
                    metric={`${result.current_weather.temperature}`}>
                </InfoCard>
            </div>
        </div>
    )
}

export default WeatherReport;