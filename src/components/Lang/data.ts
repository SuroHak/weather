interface ILanguages {
    id: number;
    type: string;
    name: string;
}

const languages: ILanguages[] = [{
    id: 1,
    type: 'ru',
    name: 'RU',
}, {
    id: 2,
    type: 'en',
    name: 'EN',
}]

export default languages;
