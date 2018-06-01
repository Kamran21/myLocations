export const types = {
    SET_FILTERS:"SET_FILTERS"
};

const initialState = {'groupBy':false,'filterBy':'select','sort':'no'};

export function reducer(state = initialState, action){
    
    switch (action.type) {

        case types.SET_FILTERS:

            return { ...state, ...action.filters };

        default:
            return state;
    }

};

export const actions = {
    setFilters(filters){
        return { type : types.SET_FILTERS, filters }
    }    
}


