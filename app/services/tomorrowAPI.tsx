import { json } from "@remix-run/node";
import { convertToURLfriendly } from "~/library/stringManagement";

const baseUrl= "https://api.tomorrow.io/v4/weather/";

export const getWeatherForecast = async (location: string) => {
    location = convertToURLfriendly(location);
    const tomorrowUrl = `${baseUrl}/forecast?location=${location}`; // TODO SAVE IN CONSTANTS

    const data = await fetch(tomorrowUrl, {
        method: 'GET', 
        headers:{
          apikey: "9pIbRDZ6vY2jEUckr5BZ7tSOcJsJScrw", // TODO SAVE IN.ENV
          accept: 'application/json'
        }
      })
    return json(await data.json())
}


export const getRealTimeWeather = async (location: string) => {
    location = convertToURLfriendly(location);
    const tomorrowUrl = `${baseUrl}/realtime?location=${location}`; // TODO SAVE IN CONSTANTS

    const data = await fetch(tomorrowUrl, {
        method: 'GET', 
        headers:{
          apikey: "9pIbRDZ6vY2jEUckr5BZ7tSOcJsJScrw", // TODO SAVE IN.ENV
          accept: 'application/json'
        }
      })
    return json(await data.json())
}

export const getWeatherRecentHistory = async (location: string) => {
    location = convertToURLfriendly(location);
    const tomorrowUrl = `${baseUrl}/history/recent?location=${location}`; // TODO SAVE IN CONSTANTS

    const data = await fetch(tomorrowUrl, {
        method: 'GET', 
        headers:{
          apikey: "9pIbRDZ6vY2jEUckr5BZ7tSOcJsJScrw", // TODO SAVE IN.ENV
          accept: 'application/json'
        }
      })
    return json(await data.json())
}