// urls
import { ICities } from './types';

export const apiBaseUrl = 'https://api.openweathermap.org/';
export const apiKey = '2e11403a57273bd016db99e5e96d99d1';

// default cities
export const initialCities: ICities = {
    en: [{
        id: 1,
        name: 'Moscow',
        type: 'moscow',
    }, {
        id: 2,
        name: 'London',
        type: 'london',
    }, {
        id: 3,
        name: 'New-York',
        type: 'new york',
    }],
    ru: [{
        id: 1,
        name: 'Москва',
        type: 'moscow',
    }, {
        id: 2,
        name: 'Лондон',
        type: 'london',
    }, {
        id: 3,
        name: 'Нью-Йорк',
        type: 'new york',
    }]
}

// default language
export const initialLang = 'en';
