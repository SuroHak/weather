interface IWeatherOption {
    id: number;
    name: string;
    height: number;
}

interface IWeatherOptions {
    en: IWeatherOption[],
    ru: IWeatherOption[],
}

const weatherOptions: IWeatherOptions = {
    en: [{
        id: 1,
        name: 'Date',
        height: 20,
    }, {
        id: 2,
        name: 'Temperature',
        height: 40,
    }, {
        id: 3,
        name: 'Feels Like',
        height: 20,
    }, {
        id: 4,
        name: 'Cloudiness',
        height: 22,
    }, {
        id: 5,
        name: 'Visibility',
        height: 20,
    }, {
        id: 6,
        name: 'Sea Lvl.',
        height: 20,
    }, {
        id: 7,
        name: 'Ground Lvl.',
        height: 20,
    }, {
        id: 8,
        name: 'Humidity',
        height: 20,
    }, {
        id: 9,
        name: 'Wind Speed',
        height: 20,
    }, {
        id: 10,
        name: 'Wind Dir.',
        height: 20,
    }],
    ru: [{
        id: 1,
        name: 'Дата',
        height: 20,
    }, {
        id: 2,
        name: 'Температура',
        height: 40,
    }, {
        id: 3,
        name: 'Ощущ. как',
        height: 20,
    }, {
        id: 4,
        name: 'Облачность',
        height: 22,
    }, {
        id: 5,
        name: 'Видимость',
        height: 20,
    }, {
        id: 6,
        name: 'Ур. моря',
        height: 20,
    }, {
        id: 7,
        name: 'Нижний ур.',
        height: 20,
    }, {
        id: 8,
        name: 'Влажность',
        height: 20,
    }, {
        id: 9,
        name: 'Скор. ветра',
        height: 20,
    }, {
        id: 10,
        name: 'Нап. ветра',
        height: 20,
    }]
};

export default weatherOptions;
