import React from 'react';
import { getIconUrl } from '../../helpers';

const WeatherList = ({ weathers }: { weathers: any}) => (
    <div className='weather-list'>
        {weathers.map((weather: any) => (
            <div
                className='one-weather'
                key={weather.dt_txt}
            >
                <div className='weather-date weather-list-item'>{weather.dt_txt.slice(0, -3)}</div>
                <div className='weather-unit weather-list-item'>
                    {Math.round(weather.main.temp)}°C
                    <img src={getIconUrl(weather.weather[0].icon)} alt="icon" draggable={false} />
                </div>
                <div className='weather-feels weather-list-item'>{Math.round(weather.main.feels_like)}°C</div>
                <div className='weather-cloudiness weather-list-item'>{weather.clouds.all} %</div>
                <div className='weather-visibility weather-list-item'>{weather.visibility / 1000} km</div>
                <div className='weather-sea-level weather-list-item'>{weather.main.sea_level} hPa</div>
                <div className='weather-ground-level weather-list-item'>{weather.main.grnd_level} hPa</div>
                <div className='weather-humidity weather-list-item'>{weather.main.humidity} %</div>
                <div className='weather-wind-speed weather-list-item'>{weather.wind.speed} m/s</div>
                <div className='weather-wind-deg weather-list-item'>{weather.wind.deg}°</div>
            </div>
        ))}
    </div>
);

export default WeatherList;
