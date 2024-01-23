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