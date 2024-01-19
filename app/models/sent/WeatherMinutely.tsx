export interface MinutelyValues {
    temperature: number;
    temperatureApparent: number;
    weatherCode: number;
  }
  
export interface MinutelyItem {
  time: string; // You might want to use a specific date/time type
  values: MinutelyValues;
}
  

// Type guard for MinutelyValues
export function isMinutelyValues(obj: any): obj is MinutelyValues {
  return (
      'temperature' in obj &&
      'temperatureApparent' in obj &&
      'weatherCode' in obj
  );
}

// Type guard for MinutelyItem
export function isMinutelyItem(obj: any): obj is MinutelyItem {
  return (
      'time' in obj &&
      typeof obj.time === 'string' &&
      'values' in obj &&
      isMinutelyValues(obj.values) // Check if 'values' is of type MinutelyValues
  );
}