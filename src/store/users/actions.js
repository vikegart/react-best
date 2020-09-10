import { userDataService } from '../../services'

import { userActionTypes } from "./actionTypes"

export const getUsers = () => {
    return async dispatch => {
        const users = await userDataService.get();
        dispatch(getUsersStore(users));
    };
};


export const applyFilter = filter => ({
    type: userActionTypes.applyFilter,
    payload: filter
});



const getUsersStore = products => ({
    type: userActionTypes.getAll,
    payload: products
});


export const deleteUser = id => ({
    type: userActionTypes.delete,
    payload: id
});