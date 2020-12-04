import { TypedUseSelectorHook } from 'react-redux';
import isEqual from 'react-fast-compare';

import { IReducer } from '../helpers';
import { useSelector } from '../store';

const useMemoSelector: TypedUseSelectorHook<IReducer> = (
    selector,
    comparator = isEqual,
) => useSelector(selector, comparator);

export default useMemoSelector;
