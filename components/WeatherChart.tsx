import { Card, AreaChart, Title } from "@tremor/react";
import { data } from "autoprefixer";

type Props = {
    result: Root;
}

function WeatherChart ({ result }: Props) {

    const newData = result?.hourly.time.map((time) => 
    new Date(time).toLocaleString("en-US", {
        hour: "numeric"
    }).slice(0, 24)
    );

    const data = newData.map((hour, i) => ({
        time: Number(hour),
        "UV Index": result.hourly.uv_index[i],
        "Temperature": result.hourly.temperature_2m[i],
    }))

    return (
        <Card>
            <Title>Weather Chart</Title>
            <AreaChart
                className="mt-6"
                data={data}
                showLegend
                index="time"
                categories={["Temperature", "UV Index"]}
                colors={["green", "red"]}
                minValue={0}
            ></AreaChart>
        </Card>
    )
}

export default WeatherChart;