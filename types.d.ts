interface CurrentWeather {
  is_day: number;
  temperature_2m: number;
  time: string;
  weathercode: number;
  wind_direction_10m: number;
  wind_speed_10m: number;
}

interface CurrentUnits {
  interval: string;
  is_day: string;
  rain: string;
  temperature_2m: string;
  time: string;
  weather_code: string;
  wind_direction_10m: string;
  wind_speed_10m: string;
}

interface Daily {
  daylight_duration: [number];
  sunrise: [string];
  sunset: [string];
  time: [string];
  uv_index_max: [number];
  weathercode: [number];
}

interface DailyUnits {
  daylight_duration: string;
  sunrise: string;
  sunset: string;
  time: string;
  uv_index_max: string;
  weathercode: string;
}

interface Hourly {
  rain: [number];
  temperature_2m: [number];
  time: [string];
  uv_index: [number];
  weathercode: [number];
}

interface HourlyUnits {
  rain: string;
  temperature_2m: string;
  time: string;
  uv_index: string;
  weathercode: string;
}

interface Root {
  current_weather: CurrentWeather;
  current_units: CurrentUnits;
  daily: Daily;
  daily_units: DailyUnits;
  elevation: number;
  generationtime_ms: number;
  hourly: Hourly;
  hourly_units: HourlyUnits;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}
