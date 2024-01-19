import { APIWeatherLocation } from "./_WeatherLocation";
import { APIMinutelyItem, isAPIMinutelyItem } from "./_WeatherMinutely";
import {isAPIWeatherLocation} from "./_WeatherLocation";
export interface APIRealTimeData {
    data: APIMinutelyItem;
    location: APIWeatherLocation;
}

export function isAPIRealTimeData(obj: any): obj is APIRealTimeData {
    return (
        'data' in obj &&
        isAPIMinutelyItem(obj.data) && // Check if 'data' is of type MinutelyItem
        'location' in obj &&
        isAPIWeatherLocation(obj.location) // Check if 'location' is of type WeatherLocation
    );
}