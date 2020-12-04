import { apiBaseUrl, apiKey } from './constants';
import { IGetWeatherByCity, IGetWeatherByLatLong } from './types';
import { dispatch, SET_CURRENT_WEATHER, getState, ADD_CITY } from '../store';
import IndexedDB from '../services/indexedDB';

export const getWeatherByCity = async ({ cityName, unit = 'metric', isStore }: IGetWeatherByCity) => {
    try {
        const resultWeather = await fetch(`${apiBaseUrl}/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${unit}`);
        const res = await resultWeather.json();

        if (res.cod === '404') {
            throw new Error(res.message);
        }

        if (isStore) {
            dispatch({ type: SET_CURRENT_WEATHER, currentWeather: res });
        }

        await IndexedDB.addData({ key: cityName, ...res });

        return res;
    } catch (err) {
        throw new Error(err.message);
    }
}

export const getWeatherByLatLong = async ({ lat, lon, unit = 'metric', isStore }: IGetWeatherByLatLong) => {
    try {
        const resultWeather = await fetch(`${apiBaseUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`);
        const res = await resultWeather.json();

        if (res.cod === '404') {
            throw new Error(res.message);
        }

        if (isStore) {

            const city = {
                id: Date.now(),
                name: res.city.name,
                type: res.city.name.toLowerCase()
            };

            const payload = {
                en: city,
                ru: city,
            }

            dispatch({ type: ADD_CITY, cities: payload });
            dispatch({ type: SET_CURRENT_WEATHER, currentWeather: res });
        }

        await IndexedDB.addData({ key: res.city.name, ...res });

        return res;
    } catch (err) {
        throw new Error(err.message);
    }
}

export const handleCurrentPos = async (pos: GeolocationPosition) => {
    const { latitude, longitude } = pos.coords;

    await getWeatherByLatLong({
        lat: latitude,
        lon: longitude,
        isStore: true,
    });
};

export const catchCurrentPos = async () => {
    const { activeLang, cities } = getState();
    const activeCity = cities[activeLang][0].type;

    const res = await IndexedDB.getData(activeCity);

    if (res) {
        dispatch({ type: SET_CURRENT_WEATHER, currentWeather: res });
        return;
    }

    await getWeatherByCity({ cityName: activeCity, isStore: true });
};

export const getIconUrl = (icon: string, x = 2) => `http://openweathermap.org/img/wn/${icon}@${x}x.png`
