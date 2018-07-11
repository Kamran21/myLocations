import v4 from "node-uuid";
import { types as locationTypes } from "./locations";
export const types = {
  CREATE_CATEGORY: "CREATE_CATEGORY",
  UPDATE_CATEGORY: "UPDATE_CATEGORY",
  DELETE_CATEGORY: "DELETE_CATEGORY"
};

const initialState = [{ id: v4(), name: "generic" }];

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_CATEGORY:
      return [...state, { ...action.category }];

    case types.UPDATE_CATEGORY:
      return state.map(
        item => (item.id !== action.category.id ? item : { ...action.category })
      );

    case types.DELETE_CATEGORY:
      return state.filter(item => item.id !== action.id);

    default:
      return state;
  }
}

export const actions = {
  createCategory(category) {
    category.id = v4();
    return { type: types.CREATE_CATEGORY, category };
  },
  // updateCategory(category){
  //     return { type : types.UPDATE_CATEGORY, category };
  // },
  // deleteCategory(id){
  //     return { type : types.DELETE_CATEGORY, id };
  // }
  updateCategory(category) {
    return function(dispatch, getState) {
      dispatch({ type: types.UPDATE_CATEGORY, category });
      dispatch({
        type: locationTypes.UPDATE_CATEGORY_FOR_ALL_LOCATIONS,
        category
      });
    };
  },
  deleteCategory({id,generic}) {
    return function(dispatch, getState) {
      dispatch({ type: types.DELETE_CATEGORY, id: id });
      dispatch({
        type: locationTypes.DELETE_CATEGORY_FOR_ALL_LOCATIONS,
        payload: { id, generic }
      });
    };
  }
};
