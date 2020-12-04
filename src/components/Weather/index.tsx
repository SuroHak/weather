import React, { useMemo } from 'react';
import { useMemoSelector } from '../../hooks';
import Loading from '../Loading';
import WeatherList from '../WeatherList';
import WeatherOptions from '../WeatherOptions';


const Weather = (): JSX.Element => {
    const currentWeather = useMemoSelector(state => state.currentWeather);

    return currentWeather ? (
        <div className='weather-main'>
            <WeatherOptions />
            <WeatherList weathers={currentWeather.list} />
        </div>
    ) : <Loading />
}

export default Weather;
