import { json } from "@remix-run/node";
import { convertToURLfriendly } from "~/library/stringManagement";

const baseUrl= "https://api.tomorrow.io/v4/weather/";

export const getWeatherForecast = async (location: string) => {
    console.log("LOCATION-FORE:", location)
    const tomorrowUrl = `${process.env.BASE_URL}/forecast?location=${location}`; // TODO SAVE IN CONSTANTS

    const data = await fetch(tomorrowUrl, {
        method: 'GET', 
        headers:{
          apikey: process.env.NIMBUS_API_KEY!, // TODO SAVE IN.ENV
          accept: 'application/json'
        }
      })
    return await data.json()
}


export const getRealTimeWeather = async (location: string) => {
    // location = convertToURLfriendly(location);
    console.log("REALTIME:", location)
    const tomorrowUrl = `${process.env.BASE_URL}/realtime?location=${location}`; // TODO SAVE IN CONSTANTS

    const data = await fetch(tomorrowUrl, {
        method: 'GET', 
        headers:{
          apikey:  process.env.NIMBUS_API_KEY!, // TODO SAVE IN.ENV
          accept: 'application/json'
        }
      })
    return await data.json()
}

export const getWeatherRecentHistory = async (location: string) => {
    // location = convertToURLfriendly(location);
    console.log("HISTORY:", location)

    const tomorrowUrl = `${process.env.BASE_URL}/history/recent?location=${location}`; // TODO SAVE IN CONSTANTS

    const data = await fetch(tomorrowUrl, {
        method: 'GET', 
        headers:{
          apikey:  process.env.NIMBUS_API_KEY!, // TODO SAVE IN.ENV
          accept: 'application/json'
        }
      })
    return await data.json()
}