export interface APIDailyValues {
    cloudBaseAvg: number;
    cloudBaseMax: number;
    cloudBaseMin: number;
    cloudCeilingAvg: number;
    cloudCeilingMax: number;
    cloudCeilingMin: number;
    cloudCoverAvg: number;
    cloudCoverMax: number;
    cloudCoverMin: number;
    dewPointAvg: number;
    dewPointMax: number;
    dewPointMin: number;
    evapotranspirationAvg: number;
    evapotranspirationMax: number;
    evapotranspirationMin: number;
    evapotranspirationSum: number;
    freezingRainIntensityAvg: number;
    freezingRainIntensityMax: number;
    freezingRainIntensityMin: number;
    humidityAvg: number;
    humidityMax: number;
    humidityMin: number;
    iceAccumulationAvg: number;
    iceAccumulationLweAvg: number;
    iceAccumulationLweMax: number;
    iceAccumulationLweMin: number;
    iceAccumulationLweSum: number;
    iceAccumulationMax: number;
    iceAccumulationMin: number;
    iceAccumulationSum: number;
    moonriseTime: string;
    moonsetTime: string;
    precipitationProbabilityAvg: number;
    precipitationProbabilityMax: number;
    precipitationProbabilityMin: number;
    pressureSurfaceLevelAvg: number;
    pressureSurfaceLevelMax: number;
    pressureSurfaceLevelMin: number;
    rainAccumulationAvg: number;
    rainAccumulationLweAvg: number;
    rainAccumulationLweMax: number;
    rainAccumulationLweMin: number;
    rainAccumulationMax: number;
    rainAccumulationMin: number;
    rainAccumulationSum: number;
    rainIntensityAvg: number;
    rainIntensityMax: number;
    rainIntensityMin: number;
    sleetAccumulationAvg: number;
    sleetAccumulationLweAvg: number;
    sleetAccumulationLweMax: number;
    sleetAccumulationLweMin: number;
    sleetAccumulationLweSum: number;
    sleetAccumulationMax: number;
    sleetAccumulationMin: number;
    sleetIntensityAvg: number;
    sleetIntensityMax: number;
    sleetIntensityMin: number;
    snowAccumulationAvg: number;
    snowAccumulationLweAvg: number;
    snowAccumulationLweMax: number;
    snowAccumulationLweMin: number;
    snowAccumulationLweSum: number;
    snowAccumulationMax: number;
    snowAccumulationMin: number;
    snowAccumulationSum: number;
    snowDepthAvg: number;
    snowDepthMax: number;
    snowDepthMin: number;
    snowDepthSum: number;
    snowIntensityAvg: number;
    snowIntensityMax: number;
    snowIntensityMin: number;
    sunriseTime: string;
    sunsetTime: string;
    temperatureApparentAvg: number;
    temperatureApparentMax: number;
    temperatureApparentMin: number;
    temperatureAvg: number;
    temperatureMax: number;
    temperatureMin: number;
    uvHealthConcernAvg: number;
    uvHealthConcernMax: number;
    uvHealthConcernMin: number;
    uvIndexAvg: number;
    uvIndexMax: number;
    uvIndexMin: number;
    visibilityAvg: number;
    visibilityMax: number;
    visibilityMin: number;
    weatherCodeMax: number;
    weatherCodeMin: number;
    windDirectionAvg: number;
    windGustAvg: number;
    windGustMax: number;
    windGustMin: number;
    windSpeedAvg: number;
    windSpeedMax: number;
    windSpeedMin: number;
  }
  
export interface APIDailyItem {
    time: string; // You might want to use a specific date type
    values: APIDailyValues;
}

// Type guard for DailyValues
export function isAPIDailyValues(obj: any): obj is APIDailyValues {
  return (
      'cloudBaseAvg' in obj &&
      'cloudBaseMax' in obj &&
      'cloudBaseMin' in obj &&
      'cloudCeilingAvg' in obj &&
      'cloudCeilingMax' in obj &&
      'cloudCeilingMin' in obj &&
      'cloudCoverAvg' in obj &&
      'cloudCoverMax' in obj &&
      'cloudCoverMin' in obj &&
      'dewPointAvg' in obj &&
      'dewPointMax' in obj &&
      'dewPointMin' in obj &&
      'evapotranspirationAvg' in obj &&
      'evapotranspirationMax' in obj &&
      'evapotranspirationMin' in obj &&
      'evapotranspirationSum' in obj &&
      'freezingRainIntensityAvg' in obj &&
      'freezingRainIntensityMax' in obj &&
      'freezingRainIntensityMin' in obj &&
      'humidityAvg' in obj &&
      'humidityMax' in obj &&
      'humidityMin' in obj &&
      'iceAccumulationAvg' in obj &&
      'iceAccumulationLweAvg' in obj &&
      'iceAccumulationLweMax' in obj &&
      'iceAccumulationLweMin' in obj &&
      'iceAccumulationLweSum' in obj &&
      'iceAccumulationMax' in obj &&
      'iceAccumulationMin' in obj &&
      'iceAccumulationSum' in obj &&
      'moonriseTime' in obj &&
      'moonsetTime' in obj &&
      'precipitationProbabilityAvg' in obj &&
      'precipitationProbabilityMax' in obj &&
      'precipitationProbabilityMin' in obj &&
      'pressureSurfaceLevelAvg' in obj &&
      'pressureSurfaceLevelMax' in obj &&
      'pressureSurfaceLevelMin' in obj &&
      'rainAccumulationAvg' in obj &&
      'rainAccumulationLweAvg' in obj &&
      'rainAccumulationLweMax' in obj &&
      'rainAccumulationLweMin' in obj &&
      'rainAccumulationMax' in obj &&
      'rainAccumulationMin' in obj &&
      'rainAccumulationSum' in obj &&
      'rainIntensityAvg' in obj &&
      'rainIntensityMax' in obj &&
      'rainIntensityMin' in obj &&
      'sleetAccumulationAvg' in obj &&
      'sleetAccumulationLweAvg' in obj &&
      'sleetAccumulationLweMax' in obj &&
      'sleetAccumulationLweMin' in obj &&
      'sleetAccumulationLweSum' in obj &&
      'sleetAccumulationMax' in obj &&
      'sleetAccumulationMin' in obj &&
      'sleetIntensityAvg' in obj &&
      'sleetIntensityMax' in obj &&
      'sleetIntensityMin' in obj &&
      'snowAccumulationAvg' in obj &&
      'snowAccumulationLweAvg' in obj &&
      'snowAccumulationLweMax' in obj &&
      'snowAccumulationLweMin' in obj &&
      'snowAccumulationLweSum' in obj &&
      'snowAccumulationMax' in obj &&
      'snowAccumulationMin' in obj &&
      'snowAccumulationSum' in obj &&
      'snowDepthAvg' in obj &&
      'snowDepthMax' in obj &&
      'snowDepthMin' in obj &&
      'snowDepthSum' in obj &&
      'snowIntensityAvg' in obj &&
      'snowIntensityMax' in obj &&
      'snowIntensityMin' in obj &&
      'sunriseTime' in obj &&
      'sunsetTime' in obj &&
      'temperatureApparentAvg' in obj &&
      'temperatureApparentMax' in obj &&
      'temperatureApparentMin' in obj &&
      'temperatureAvg' in obj &&
      'temperatureMax' in obj &&
      'temperatureMin' in obj &&
      'uvHealthConcernAvg' in obj &&
      'uvHealthConcernMax' in obj &&
      'uvHealthConcernMin' in obj &&
      'uvIndexAvg' in obj &&
      'uvIndexMax' in obj &&
      'uvIndexMin' in obj &&
      'visibilityAvg' in obj &&
      'visibilityMax' in obj &&
      'visibilityMin' in obj &&
      'weatherCodeMax' in obj &&
      'weatherCodeMin' in obj &&
      'windDirectionAvg' in obj &&
      'windGustAvg' in obj &&
      'windGustMax' in obj &&
      'windGustMin' in obj &&
      'windSpeedAvg' in obj &&
      'windSpeedMax' in obj &&
      'windSpeedMin' in obj
  );
}


// Type guard for DailyItem
export function isAPIDailyItem(obj: any): obj is APIDailyItem {
  return (
      'time' in obj &&
      typeof obj.time === 'string' &&
      'values' in obj &&
      isAPIDailyValues(obj.values) // Check if 'values' is of type DailyValues
  );
}