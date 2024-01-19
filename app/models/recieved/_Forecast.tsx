import { APIWeatherLocation } from "./_WeatherLocation";
import { APIMinutelyItem } from "./_WeatherMinutely";
import { APIHourlyItem } from "./_WeatherHourly";
import { APIDailyItem } from "./_WeatherDaily";

export interface APIForecastWeatherData {
    timelines:{
        minutely: APIMinutelyItem[];
        hourly: APIHourlyItem[];
        daily: APIDailyItem[];
    },
    location: APIWeatherLocation;
}

export function isAPIForecastWeatherData(obj: any): obj is APIForecastWeatherData {
    return (
        'timelines' in obj &&
        typeof obj.timelines === 'object' &&
        'minutely' in obj.timelines &&
        Array.isArray(obj.timelines.minutely) &&
        'hourly' in obj.timelines &&
        Array.isArray(obj.timelines.hourly) &&
        'daily' in obj.timelines &&
        Array.isArray(obj.timelines.daily) &&
        'location' in obj &&
        typeof obj.location === 'object'
        // Add additional checks if necessary based on the actual types of WeatherLocation, MinutelyItem, HourlyItem, DailyItem
    );
}