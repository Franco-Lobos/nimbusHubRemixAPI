import { json} from "@remix-run/react";
import {  LoaderFunction } from "@remix-run/node";
import { getRealTimeWeather, getWeatherForecast, getWeatherRecentHistory } from "~/services/tomorrowAPI";
import { APIRealTimeData } from "~/models/recieved/_RealTime";
import { convertRealTimeData } from "~/services/APIAdapter";
import { RealTimeData } from "~/models/sent/_RealTime";
import { ErrorManager } from "~/utils/ErrorManager";


export let loader: LoaderFunction = async ({ params }) => {
  const { cityLoc } = params;
  if (!cityLoc) {
    return json(ErrorManager(402), {status: 402});
  }

  try {
    const recievedData = await getRealTimeWeather(cityLoc);
    const parsedData: APIRealTimeData = recievedData as APIRealTimeData;
    const convertedData: RealTimeData = convertRealTimeData(parsedData)
    return convertedData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return json(ErrorManager(500), {status: 500});
  }
};
