import { json} from "@remix-run/react";
import {  LoaderFunction } from "@remix-run/node";
import { getWeatherForecast, getWeatherRecentHistory } from "~/services/tomorrowAPI";


export let loader: LoaderFunction = async ({ params }) => {
  const { cityName } = params;
  if (!cityName) {
    return json({ error: 'City name is missing' }, { status: 400 });
  }

  try {
    return await getWeatherRecentHistory(cityName);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return json({ error: 'Failed to fetch weather data' }, { status: 500 });
  }
};
