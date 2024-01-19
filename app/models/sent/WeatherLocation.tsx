export interface WeatherLocation {
    lat: number;
    lon: number;
    name: string;
    type: string;
  }
  

export function isWeatherLocation(obj: any): obj is WeatherLocation {
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