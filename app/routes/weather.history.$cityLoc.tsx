import { json} from "@remix-run/react";
import {  LoaderFunction } from "@remix-run/node";
import { getWeatherForecast, getWeatherRecentHistory } from "~/services/tomorrowAPI";
import { APIHistoryData } from "~/models/recieved/_History";
import { HistoryData } from "~/models/sent/_History";
import { convertHistoryData } from "~/services/APIAdapter";
import { ErrorManager } from "~/utils/ErrorManager";


export let loader: LoaderFunction = async ({ params }) => {
  const { cityLoc } = params;
  if (!cityLoc) {
    return json(ErrorManager(402), {status: 402});
  }

  try {
    const recievedData = await getWeatherRecentHistory(cityLoc);
    const parsedData: APIHistoryData = recievedData as APIHistoryData;
    const convertedData: HistoryData = convertHistoryData(parsedData)
    return convertedData;
  } catch (error) {
    return json(ErrorManager(500), {status: 500});
  }
};
