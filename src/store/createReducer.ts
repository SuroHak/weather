interface IActions {
    type: string;
}

function createReducer<State, Action extends IActions>(
    initialState: State,
    handlers: { [key: string]: (state: State, action: Action) => State },
) {
    return function reducer(state: State = initialState, action: Action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        }

        return state;
    };
}

export default createReducer;
