import { json} from "@remix-run/react";
import {  LoaderFunction } from "@remix-run/node";
import { getWeatherForecast } from "~/services/tomorrowAPI";
import { APIForecastWeatherData } from "~/models/recieved/_Forecast";
import { ForecastWeatherData } from "~/models/sent/_Forecast";
import { convertForecastData } from "~/services/APIAdapter";
import { ErrorManager } from "~/utils/ErrorManager";


export let loader: LoaderFunction = async ({ params }) => {
  const { cityLoc } = params;
  if (!cityLoc) {
    return json(ErrorManager(402), {status: 402});
  }

  try {
    const recievedData = await getWeatherForecast(cityLoc);
    const parsedData: APIForecastWeatherData = recievedData as APIForecastWeatherData;
    const convertedData: ForecastWeatherData = convertForecastData(parsedData)

    //ANALIZE TO SAVE IN DB
    return convertedData;
  } catch (error) {
    return json(ErrorManager(500), {status: 500});
  }
};
