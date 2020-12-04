import React, { useEffect } from 'react';

import City from './components/City';
import Weather from './components/Weather';

import background from './assets/background.png';
import { catchCurrentPos, handleCurrentPos, LocaleTypes } from './helpers';
import { useDispatch } from 'react-redux';
import { SET_ACTIVE_LANG } from './store';

const App = (): JSX.Element => {
    const dispatch = useDispatch();

    useEffect(() => {
        const { geolocation , language } = navigator;

        geolocation.getCurrentPosition(handleCurrentPos, catchCurrentPos);

        if (language.includes(LocaleTypes.ru)) {
            dispatch({ type: SET_ACTIVE_LANG, activeLang: LocaleTypes.ru});
            return;
        }

        if (language.includes(LocaleTypes.en)) {
            dispatch({ type: SET_ACTIVE_LANG, activeLang: LocaleTypes.en});
        }
    }, [dispatch]);

    return (
        <div className='app'>
            <div className='background-container'>
                <img src={background} alt='background' draggable={false}/>
            </div>
            <div className='main-container'>
                <City />
                <Weather />
            </div>
        </div>
    );
}

export default App;
