import React from 'react';
import weatherOptions from './data';
import { useMemoSelector } from '../../hooks';

const WeatherOptions = () => {
    const activeLang = useMemoSelector(state => state.activeLang);

    return (
        <div className='weather-options'>
            {weatherOptions[activeLang] && weatherOptions[activeLang].map(({ name, id, height }) => <div style={{ height }} key={`weather-option-${id}`}>{name}</div> )}
        </div>
    )
};

export default WeatherOptions;
