const simpleData = (data: Root, city: string) => {
    const { current_weather, 
        hourly, 
        hourly_units, 
        timezone, 
        timezone_abbreviation
     } = data;

    const { temperature, 
        windspeed, 
        winddirection, 
        weathercode,
        time 
    } = current_weather;

    const { precipitation, 
        snowfall, 
        rain, 
        relativehumidity_2m, 
        precipitation_probability, 
        uv_index, 
        showers
    } = hourly;

    return {
        current_weather: {
            temperature,
            winddirection,
            windspeed,
            time,
            weathercode
        },
        hourly: {
            precipitation: precipitation.slice(0, 5),
            snowfall: snowfall.slice(0, 5),
            rain: rain.slice(0, 5),
            showers: showers.slice(0, 5),
            relativehumidity_2m: relativehumidity_2m.slice(0, 5),
            precipitation_probability: precipitation_probability.slice(0, 5),
            uv_index: uv_index.slice(0, 5),
        },
        timezone,
        timezone_abbreviation,
        hourly_units,
        city,
    };
};

export default simpleData;