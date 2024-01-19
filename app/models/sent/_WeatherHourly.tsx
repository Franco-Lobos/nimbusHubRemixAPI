export interface HourlyValues {
  temperature: number;
  temperatureApparent: number;
  weatherCode: number;
}
  
export interface HourlyItem {
    time: string; // You might want to use a specific date/time type
    values: HourlyValues;
}


export function isHourlyValues(obj: any): obj is HourlyValues {
  return (
      'temperature' in obj &&
      'temperatureApparent' in obj &&
      'weatherCode' in obj 
  );
}


// Type guard for HourlyItem
export function isHourlyItem(obj: any): obj is HourlyItem {
  return (
      'time' in obj &&
      typeof obj.time === 'string' &&
      'values' in obj &&
      isHourlyValues(obj.values) // Check if 'values' is of type HourlyValues
  );
}
  