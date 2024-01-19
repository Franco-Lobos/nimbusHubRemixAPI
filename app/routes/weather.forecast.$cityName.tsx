import { json} from "@remix-run/react";
import {  LoaderFunction } from "@remix-run/node";
import { getWeatherForecast } from "~/services/tomorrowAPI";
import { APIForecastWeatherData } from "~/models/recieved/_Forecast";
import { ForecastWeatherData } from "~/models/sent/_Forecast";
import { convertForecastData } from "~/services/APIAdapter";


export let loader: LoaderFunction = async ({ params }) => {
  const { cityName } = params;
  if (!cityName) {
    return json({ error: 'City name is missing' }, { status: 400 });
  }

  try {
    const recievedData = await getWeatherForecast(cityName);
    const parsedData: APIForecastWeatherData = recievedData as APIForecastWeatherData;
    const convertedData: ForecastWeatherData = convertForecastData(parsedData)

    //ANALIZE TO SAVE IN DB
    return convertedData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return json({ error: 'Failed to fetch weather data' }, { status: 500 });
  }
};
