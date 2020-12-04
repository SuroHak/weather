import React, { useState } from 'react';
import { useMemoSelector } from '../../hooks';
import { placeholder, searchCities } from './data';
import { useDispatch } from 'react-redux';
import { ADD_CITY, SET_CURRENT_WEATHER } from '../../store';
import { getWeatherByCity } from '../../helpers';
import IndexedDB from '../../services/indexedDB';

const Search = () => {
    const dispatch = useDispatch();
    const { activeLang, cities } = useMemoSelector(state => ({
        activeLang: state.activeLang,
        cities: state.cities,
    }));

    const [inpVal, setInpVal] = useState('');

    const addCity = async (id: number) => {
        const city = {
            en: searchCities.en.find(item => item.id === id),
            ru: searchCities.ru.find(item => item.id === id),
        }

        if (!city || !city.en) return;

        if (!cities.en.find(item => item.id === id)) {
            dispatch({ type: ADD_CITY, cities: city })
        }

        const res = await IndexedDB.getData(city.en.type);

        if (res) {
            dispatch({ type: SET_CURRENT_WEATHER, currentWeather: res });
            setInpVal('');
            return;
        }

        await getWeatherByCity({ cityName: city.en.type, isStore: true, });
        setInpVal('');
    }

    return (
        <div className='search-container'>
            <input
                type="text"
                value={inpVal}
                placeholder={placeholder[activeLang]}
                onChange={e => setInpVal(e.target.value)}
            />
            <div className='dropdown-cities' hidden={!inpVal.length}>
                {inpVal.length && searchCities[activeLang] ? searchCities[activeLang]
                    .filter(item => item.name.toLowerCase().includes(inpVal))
                    .map(({ name, type, id }) =>
                        <div key={`city-${id}`} onClick={async () => addCity(id)}>{name}</div>
                    ) : null
                }
            </div>
        </div>
    )
}

export default Search;
