
import { groupActionTypes } from "./actionTypes"


export const applyFilter = filter => ({
    type: groupActionTypes.applayFilter,
    payload: filter
});


export const deleteGroup = id => ({
    type: groupActionTypes.delete,
    payload: id
});

export const createGroup = name => ({
    type: groupActionTypes.create,
    payload: name
});

export const addUserToGroup = ({idGroup, idUser}) => ({
    type: groupActionTypes.addUserToGroup,
    payload: {idGroup, idUser}
});

export const removeUserFromGroup = ({idGroup, idUser}) => ({
    type: groupActionTypes.removeUserFromGroup,
    payload: {idGroup, idUser}
});
