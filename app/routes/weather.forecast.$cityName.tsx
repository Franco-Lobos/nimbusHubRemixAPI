import { json, useLoaderData, useActionData, useFetcher} from "@remix-run/react";
import { getUsers, createUser } from "../../dbConnection/models/users";
import { ActionFunction, LoaderFunction } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { getWeatherForecast } from "~/services/tomorrowAPI";



export let loader: LoaderFunction = async ({ params }) => {
  const { cityName } = params;
  if (!cityName) {
    return json({ error: 'City name is missing' }, { status: 400 });
  }

  try {
    const weatherData = await getWeatherForecast(cityName);
    return weatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return json({ error: 'Failed to fetch weather data' }, { status: 500 });
  }
};

export default function WeatherForecast({request}:{request:any}) {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      {data.error ? (
        <p>Error: {data.error}</p>
      ) : (
        <div className="whitespace-pre-wrap break-words overflow-x-auto max-w-full">{JSON.stringify(data)}</div>
      )}
    </>
  );
}
