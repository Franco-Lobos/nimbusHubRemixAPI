export interface WeatherLocation {
    lat: number;
    lon: number;
  }
  

export function isWeatherLocation(obj: any): obj is WeatherLocation {
  return (
      'lat' in obj &&
      'lon' in obj &&
      typeof obj.lat === 'number' &&
      typeof obj.lon === 'number' 
  );
}

export interface SessionLocation {
  lat: number;
  lon: number;
  name: string;
  type: string;
}


export function isSessionLocation(obj: any): obj is SessionLocation {
return (
    'lat' in obj &&
    'lon' in obj &&
    'name' in obj &&
    'type' in obj &&
    typeof obj.lat === 'number' &&
    typeof obj.lon === 'number' &&
    typeof obj.name === 'string' &&
    typeof obj.type === 'string'
);
}


export const areLocationsEqual = (
location1: SessionLocation |WeatherLocation,
location2: SessionLocation|WeatherLocation
): boolean => {
return (location1.lat).toFixed(4) ===  (location2.lat).toFixed(4) &&  (location1.lon).toFixed(4) ===  (location2.lon).toFixed(4);
};