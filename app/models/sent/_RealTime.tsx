import { WeatherLocation } from "./_WeatherLocation";
import { MinutelyItem, isMinutelyItem } from "./_WeatherMinutely";
import {isWeatherLocation} from "./_WeatherLocation";

export interface RealTimeData {
    data: MinutelyItem;
    location: WeatherLocation;
}

export function isRealTimeData(obj: any): obj is RealTimeData {
    return (
        'data' in obj &&
        isMinutelyItem(obj.data) && // Check if 'data' is of type MinutelyItem
        'location' in obj &&
        isWeatherLocation(obj.location) // Check if 'location' is of type WeatherLocation
    );
}