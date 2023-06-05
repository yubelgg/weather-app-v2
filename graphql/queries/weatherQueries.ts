import { gql } from '@apollo/client';

const weatherQueries= gql`
   query myQuery(
       $current_weather: String
       $daily: String = "weathercode"
       $hourly: String = "temperature_2m" 
       $latitude: String! 
       $temperature_unit: String
       $longitude: String! 
       $timezone: String!
       $windspeed_unit: String
   ) {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      temperature_unit: $temperature_unit
      longitude: $longitude
      timezone: $timezone
      windspeed_unit: $windspeed_unit 
    ) {
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      elevation
      generationtime_ms
      hourly {
        apparent_temperature
        dewpoint_2m
        is_day
        precipitation_probability
        relativehumidity_2m
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
      }
      hourly_units {
        apparent_temperature
        dewpoint_2m
        is_day
        precipitation_probability
        relativehumidity_2m
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
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