import { json} from "@remix-run/react";
import {  LoaderFunction } from "@remix-run/node";
import { getWeatherForecast, getWeatherRecentHistory } from "~/services/tomorrowAPI";
import { APIHistoryData } from "~/models/recieved/_History";
import { HistoryData } from "~/models/sent/_History";
import { convertHistoryData } from "~/services/APIAdapter";


export let loader: LoaderFunction = async ({ params }) => {
  const { cityName } = params;
  if (!cityName) {
    return json({ error: 'City name is missing' }, { status: 400 });
  }

  try {
    const recievedData = await getWeatherRecentHistory(cityName);
    const parsedData: APIHistoryData = recievedData as APIHistoryData;
    const convertedData: HistoryData = convertHistoryData(parsedData)
    return convertedData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return json({ error: 'Failed to fetch weather data' }, { status: 500 });
  }
};
