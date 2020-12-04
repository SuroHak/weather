import React, { useMemo } from 'react';
import { useMemoSelector } from '../../hooks';
import Loading from '../Loading';
import WeatherList from '../WeatherList';
import WeatherOptions from '../WeatherOptions';


const Weather = (): JSX.Element => {
    const currentWeather = useMemoSelector(state => state.currentWeather);

    const currentWeatherList = useMemo(() => {
        if (!currentWeather) return null;

        return currentWeather.list
            .filter((item: any) => item.dt_txt.includes('12:00') || item.dt_txt.includes('18:00'))
    }, [currentWeather]);

    return currentWeather ? (
        <div className='weather-main'>
            <WeatherOptions />
            <WeatherList weathers={currentWeatherList} />
        </div>
    ) : <Loading />
}

export default Weather;
