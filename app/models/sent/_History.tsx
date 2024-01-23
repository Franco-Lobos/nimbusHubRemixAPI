import { WeatherLocation, isWeatherLocation } from "./_WeatherLocation";
import { MinutelyItem } from "./_WeatherMinutely";
import { HourlyItem } from "./_WeatherHourly";
import { DailyItem } from "./_WeatherDaily";

export interface HistoryData {
    timelines:{
        hourly: HourlyItem[];
        daily: DailyItem[];
    },
    location: WeatherLocation;
}

export function isHistoryData(obj: any): obj is HistoryData {
    return (
        'timelines' in obj &&
        typeof obj.timelines === 'object' &&
        'hourly' in obj.timelines &&
        Array.isArray(obj.timelines.hourly) &&
        'daily' in obj.timelines &&
        Array.isArray(obj.timelines.daily) &&
        'location' in obj &&
        isWeatherLocation(obj.location)
        // Add additional checks if necessary based on the actual types of WeatherLocation, MinutelyItem, HourlyItem, DailyItem
    );
}