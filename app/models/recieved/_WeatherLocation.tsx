export interface APIWeatherLocation {
    lat: number;
    lon: number;
  }
  

export function isAPIWeatherLocation(obj: any): obj is APIWeatherLocation {
  return (
      'lat' in obj &&
      'lon' in obj &&
      typeof obj.lat === 'number' &&
      typeof obj.lon === 'number'
  );
}