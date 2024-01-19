import { APIForecastWeatherData } from "~/models/recieved/_Forecast";
import { APIHistoryData } from "~/models/recieved/_History";
import { APIRealTimeData } from "~/models/recieved/_RealTime";
import { APIDailyItem } from "~/models/recieved/_WeatherDaily";
import { APIHourlyItem } from "~/models/recieved/_WeatherHourly";
import { APIWeatherLocation } from "~/models/recieved/_WeatherLocation";
import { APIMinutelyItem } from "~/models/recieved/_WeatherMinutely";
import { ForecastWeatherData } from "~/models/sent/_Forecast";
import { HistoryData } from "~/models/sent/_History";
import { RealTimeData } from "~/models/sent/_RealTime";
import { DailyItem } from "~/models/sent/_WeatherDaily";
import { HourlyItem } from "~/models/sent/_WeatherHourly";
import { WeatherLocation } from "~/models/sent/_WeatherLocation";
import { MinutelyItem } from "~/models/sent/_WeatherMinutely";

// Conversion function for minutely data
function convertMinutelyItem(apiMinutelyItem: APIMinutelyItem): MinutelyItem {
    return {
      time: apiMinutelyItem.time,
      values: {
        temperature: apiMinutelyItem.values.temperature,
        temperatureApparent: apiMinutelyItem.values.temperatureApparent,
        weatherCode: apiMinutelyItem.values.weatherCode,
        // Add other properties as needed
      },
    };
  }
  
  // Conversion function for hourly data
  function convertHourlyItem(apiHourlyItem: APIHourlyItem): HourlyItem {
    return {
      time: apiHourlyItem.time,
      values: {
        temperature: apiHourlyItem.values.temperature,
        temperatureApparent: apiHourlyItem.values.temperatureApparent,
        weatherCode: apiHourlyItem.values.weatherCode,
        // Add other properties as needed
      },
    };
  }
  
  // Conversion function for daily data
  function convertDailyItem(apiDailyItem: APIDailyItem): DailyItem {
    return {
      time: apiDailyItem.time,
      values: {
        temperatureApparentAvg: apiDailyItem.values.temperatureApparentAvg,
        temperatureApparentMax: apiDailyItem.values.temperatureApparentMax,
        temperatureApparentMin: apiDailyItem.values.temperatureApparentMin,
        temperatureAvg: apiDailyItem.values.temperatureAvg,
        temperatureMax: apiDailyItem.values.temperatureMax,
        temperatureMin: apiDailyItem.values.temperatureMin,
        weatherCodeMax: apiDailyItem.values.weatherCodeMax,
        weatherCodeMin: apiDailyItem.values.weatherCodeMin,
        // Add other properties as needed
      },
    };
  }
  
  // Conversion function for location data
  function convertWeatherLocation(apiLocation: APIWeatherLocation): WeatherLocation {
    return {
      lat: apiLocation.lat,
      lon: apiLocation.lon,
      name: apiLocation.name,
      type: apiLocation.type,
    };
  }
  

  // Conversion function for the entire forecast data
  export function convertForecastData(apiForecastData: APIForecastWeatherData): ForecastWeatherData {
    return {
      timelines: {
        minutely: apiForecastData.timelines.minutely.map(convertMinutelyItem),
        hourly: apiForecastData.timelines.hourly.map(convertHourlyItem),
        daily: apiForecastData.timelines.daily.map(convertDailyItem),
      },
      location: convertWeatherLocation(apiForecastData.location),
    };
  }

    // Conversion function for the entire real-time data
export function convertRealTimeData(apiRealTimeData: APIRealTimeData): RealTimeData {
    return {
      data: convertMinutelyItem(apiRealTimeData.data),
      location: convertWeatherLocation(apiRealTimeData.location),
    };
  }
  
  

  // Conversion function for the entire history data
export function convertHistoryData(apiHistoryData: APIHistoryData): HistoryData {
    return {
      timelines: {
        hourly: apiHistoryData.timelines.hourly.map(convertHourlyItem),
        daily: apiHistoryData.timelines.daily.map(convertDailyItem),
      },
      location: convertWeatherLocation(apiHistoryData.location),
    };
  }