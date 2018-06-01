import v4 from 'node-uuid';

export const types = {
    CREATE_LOCATION:"CREATE_LOCATION",
    UPDATE_LOCATION:"UPDATE_LOCATION",
    DELETE_LOCATION:"DELETE_LOCATION"
};

const initialState=[];

export function reducer(state = initialState, action){
    
    switch (action.type) {

        case types.CREATE_LOCATION:

            return [ ...state, {...action.location} ];
        
        case types.UPDATE_LOCATION:
            
            return state.map(item => item.id !== action.location.id ? item : {...action.location} );

        case types.DELETE_LOCATION:

            return state.filter( item => item.id !== action.id );

        default:
            return state;
    }

};

export const actions={
    createLocation(location){
        location.id=v4();
        return { type : types.CREATE_LOCATION, location }
    },
    updateLocation(location){
        return { type : types.UPDATE_LOCATION, location };
    },
    deleteLocation(id){
        return { type : types.DELETE_LOCATION, id };
    }
}