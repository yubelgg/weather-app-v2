import { gql } from '@apollo/client';

const weatherQueries= gql`
   query MyQuery(
       $current_weather: String
       $daily: String = "weathercode,sunrise,sunset,temperature_2m_max,temperature_2m_min,uv_index_max"
       $forecast_days: String
       $hourly: String = "precipitation,precipitation_probability,rain,relativehumidity_2m,showers,snowfall,relativehumidity_2m,uv_index,weathercode"
       $latitude: String!
       $longitude: String!
       $models: String
       $precipitation_units: String
       $temperature_unit: String
       $timezone: String!
       $windspeed_unit: String
   ) {
    myQuery(
          current_weather: $current_weather 
          daily: $daily 
          forecast_days: $forecast_days
          hourly: $hourly
          latitude: $latitude
          longitude: $longitude
          models: $models
          precipitation_unit: $precipitation_units
          temperature_unit: $temperature_unit
          timezone: $timezone
          windspeed_unit: $windspeed_unit
        ) {
          current_weather {
            is_day
            temperature
            time
            winddirection
            weathercode
            windspeed
          }
          daily {
            sunrise
            sunset
            temperature_2m_max
            temperature_2m_min
            time
            uv_index_max
            weathercode
          }
          daily_units {
            sunrise
            sunset
            temperature_2m_max
            temperature_2m_min
            time
            uv_index_max
            weathercode
          }
          elevation
          generationtime_ms
          hourly {
            precipitation
            precipitation_probability
            rain
            relativehumidity_2m
            showers
            snowfall
            time
            temperature_2m
            uv_index
            weathercode
          }
          hourly_units {
            precipitation
            precipitation_probability
            rain
            relativehumidity_2m
            showers
            snowfall
            time
            temperature_2m
            uv_index
            weathercode
          }
          latitude
          longitude
          timezone
          timezone_abbreviation
          utc_offset_seconds
        }
      }
    `;

export default weatherQueries;