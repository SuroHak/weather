import React from 'react';
import { useDispatch } from 'react-redux';

import { useMemoSelector } from '../../hooks';
import { SET_ACTIVE_LANG } from '../../store';
import languages from './data';

const Lang = () => {
    const dispatch = useDispatch();
    const activeLang = useMemoSelector(state => state.activeLang);

    return (
        <div className='languages-container'>
            {languages.map(lang =>
                <div
                    key={`lang-${lang.id}`}
                    className={`${activeLang === lang.type ? 'active-lang' : ''}`}
                    onClick={() => dispatch({ type: SET_ACTIVE_LANG, activeLang: lang.type })}
                >
                    {lang.name}
                </div>
            )}
        </div>
    )
}

export default Lang;
