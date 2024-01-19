import { json} from "@remix-run/react";
import {  LoaderFunction } from "@remix-run/node";
import { getRealTimeWeather, getWeatherForecast, getWeatherRecentHistory } from "~/services/tomorrowAPI";
import { APIRealTimeData } from "~/models/recieved/_RealTime";
import { convertRealTimeData } from "~/services/APIAdapter";
import { RealTimeData } from "~/models/sent/_RealTime";


export let loader: LoaderFunction = async ({ params }) => {
  const { cityName } = params;
  if (!cityName) {
    return json({ error: 'City name is missing' }, { status: 400 });
  }

  try {
    const recievedData = await getRealTimeWeather(cityName);
    const parsedData: APIRealTimeData = recievedData as APIRealTimeData;
    const convertedData: RealTimeData = convertRealTimeData(parsedData)
    return convertedData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return json({ error: 'Failed to fetch weather data' }, { status: 500 });
  }
};
