import React from 'react';
import { useDispatch } from 'react-redux';

import IndexedDB from '../../services/indexedDB';
import { SET_CURRENT_WEATHER } from '../../store';
import { useMemoSelector } from '../../hooks';
import { getWeatherByCity } from '../../helpers';
import Lang from '../Lang';
import Search from '../Search';

const City = (): JSX.Element => {
    const dispatch = useDispatch();
    const { activeCity, activeLang, cities } = useMemoSelector(state => ({
        activeCity: state.activeCity,
        activeLang: state.activeLang,
        cities: state.cities,
    }));

    const handleCityChange = async (type: string) => {
        const res = await IndexedDB.getData(type);

        if (res) {
            dispatch({ type: SET_CURRENT_WEATHER, currentWeather: res });
            return;
        }

        await getWeatherByCity({ cityName: type, isStore: true });
    }

    return (
        <div className='cities-main'>
            <Search />
            <div className='cities'>
                {cities[activeLang] && cities[activeLang].map(({ name, id, type }) =>
                    <div
                        key={`city-${id}`}
                        className={`citi-tab ${activeCity === type ? 'active-city' : ''}`}
                        onClick={async () => handleCityChange(type)}
                    >
                        {name}
                    </div>
                )}
            </div>
            <Lang />
        </div>
    );
}

export default City;
