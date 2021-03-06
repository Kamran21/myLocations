import v4 from "node-uuid";

export const types = {
  CREATE_LOCATION: "CREATE_LOCATION",
  UPDATE_LOCATION: "UPDATE_LOCATION",
  DELETE_LOCATION: "DELETE_LOCATION",
  UPDATE_CATEGORY_FOR_ALL_LOCATIONS: "UPDATE_CATEGORY_FOR_ALL_LOCATIONS",
  DELETE_CATEGORY_FOR_ALL_LOCATIONS: "DELETE_CATEGORY_FOR_ALL_LOCATIONS"
};

const initialState = [];

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_LOCATION:
      return [...state, { ...action.location }];

    case types.UPDATE_LOCATION:
      return state.map(
        item => (item.id !== action.location.id ? item : { ...action.location })
      );

    case types.DELETE_LOCATION:
      return state.filter(item => item.id !== action.id);

    // case types.UPDATE_CATEGORY_FOR_ALL_LOCATIONS:
    //   return state.map(
    //     item =>
    //       item.category.id !== action.category.id
    //         ? item
    //         : {
    //             ...item,
    //             category: { name: action.category.name, id: action.category.id }
    //           }
    //   );
    case types.UPDATE_CATEGORY_FOR_ALL_LOCATIONS:
      
      return state.map(item => {
        
            return {...item, 
             'categories' : item.categories.map(c=>{
                return c.id !== action.category.id ? {...c} : {...c, name:action.category.name}
             }) 
            }
            
      });

    case types.DELETE_CATEGORY_FOR_ALL_LOCATIONS:
      
      return state.map(item => {
        // action.payload.id - id of the category to delete, action.payload.generic - The generic category
            let  mapped = item.categories.map(c=>{
                                if(c.id !== action.payload.id){
                                  return {...c}
                                } 
                                else {

                                    if(item.categories.length === 1){
                                        return {...action.payload.generic} 
                                      }
                                }
                                return null;     
                            });
            let filttered = mapped.filter(c=>c!==null); 
            return {...item, 
                    'categories' : filttered
            }
            
      });

    default:
      return state;
  }
}

export const actions = {
  createLocation(location) {
    location.id = v4();
    return { type: types.CREATE_LOCATION, location };
  },
  updateLocation(location) {
    return { type: types.UPDATE_LOCATION, location };
  },
  deleteLocation(id) {
    return { type: types.DELETE_LOCATION, id };
  }
};
