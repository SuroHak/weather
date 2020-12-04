import { Dispatch } from 'react';
import { createStore, compose } from 'redux';
import {
    TypedUseSelectorHook,
    useSelector as useSelectorGeneric,
} from 'react-redux';

import createReducer from './createReducer';

import { SET_CURRENT_WEATHER, RESET_STATE, SET_ACTIVE_CITY, SET_ACTIVE_LANG, ADD_CITY } from './actionTypes';
import { IActions, initialCities, initialLang, IReducer, LocaleTypes } from '../helpers';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const initialState = {
    currentWeather: null,
    activeCity: null,
    activeLang: initialLang as LocaleTypes,
    cities: initialCities,
};

const reducer = createReducer<IReducer, IActions>(initialState, {
    [SET_CURRENT_WEATHER]: (state, action) => ({
        ...state,
        currentWeather: action.currentWeather,
        activeCity: action.currentWeather.city.name.toLowerCase(),
    }),
    [SET_ACTIVE_CITY]: (state, action) => ({
        ...state,
        activeCity: action.activeCity,
    }),
    [SET_ACTIVE_LANG]: (state, action) => ({
        ...state,
        activeLang: action.activeLang,
    }),
    [ADD_CITY]: (state, action) => {
        const newEnCities = [...state.cities.en, action.cities.en];
        const newRuCities = [...state.cities.ru, action.cities.ru];

        return {
            ...state,
            cities: {
                en: newEnCities,
                ru: newRuCities
            },
        };
    },
    [RESET_STATE]: () => initialState,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers());

export const { getState } = store;
export const { dispatch }: { dispatch: Dispatch<any> } = store;
export const useSelector: TypedUseSelectorHook<IReducer> = useSelectorGeneric;

export default store;
