export interface DailyValues {
    temperatureApparentAvg: number;
    temperatureApparentMax: number;
    temperatureApparentMin: number;
    temperatureAvg: number;
    temperatureMax: number;
    temperatureMin: number;
    weatherCodeMax: number;
    weatherCodeMin: number;
}
  
export interface DailyItem {
    time: string; // You might want to use a specific date type
    values: DailyValues;
}

// Type guard for DailyValues
export function isDailyValues(obj: any): obj is DailyValues {
  return (
      'temperatureApparentAvg' in obj &&
      'temperatureApparentMax' in obj &&
      'temperatureApparentMin' in obj &&
      'temperatureAvg' in obj &&
      'temperatureMax' in obj &&
      'temperatureMin' in obj &&
      'weatherCodeMax' in obj &&
      'weatherCodeMin' in obj 
  );
}


// Type guard for DailyItem
export function isDailyItem(obj: any): obj is DailyItem {
  return (
      'time' in obj &&
      typeof obj.time === 'string' &&
      'values' in obj &&
      isDailyValues(obj.values) // Check if 'values' is of type DailyValues
  );
}