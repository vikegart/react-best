import userDataService from '../../services/apiService'

import { userActionTypes } from "./actionTypes"

export const getUsers = () => {
    return async dispatch => {
        const users = await userDataService.get();
        dispatch(getProductsAction(users));
    };
};


export const applyFilter = filter => ({
    type: userActionTypes.applyFilter,
    payload: filter
});



const getProductsAction = products => ({
    type: userActionTypes.getAll,
    payload: products
});


export const deleteProductAction = id => ({
    type: userActionTypes.delete,
    payload: id
});