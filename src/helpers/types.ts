export enum CityTypes {
    moscow = 'Moscow',
    london = 'London',
    newYork = 'New York',
}

type unitType = 'standard' | 'metric' | 'imperial';

export enum LocaleTypes {
    ru = 'ru',
    en = 'en',
}

export interface IActions {
    activeCity: CityTypes | null;
    currentWeather: any;
    activeLang: LocaleTypes;
    cities: ICit;
    type: string;
}

export interface IReducer {
    currentWeather: any;
    activeCity: CityTypes | null;
    activeLang: LocaleTypes;
    cities: ICities;
}

export interface IGetWeatherByLatLong {
    lat: number;
    lon: number;
    unit?: unitType;
    isStore?: boolean;
}

export interface IGetWeatherByCity {
    cityName: string;
    unit?: unitType;
    isStore?: boolean;
}

export interface ICity {
    id: number;
    name: string;
    type: string;
}

export interface ICit {
    en: ICity,
    ru: ICity,
}

export interface ICities {
    en: ICity[],
    ru: ICity[],
}
