import { groupActionTypes } from "./actionTypes";
import { v4 as uuidv4 } from "uuid";

export const applyFilter = (filter) => ({
  type: groupActionTypes.applyFilter,
  payload: filter,
});

export const deleteGroup = (id) => ({
  type: groupActionTypes.delete,
  payload: id,
});

export const createGroup = (name) => ({
  type: groupActionTypes.create,
  payload: { name, id: uuidv4() },
});

export const addUserToGroup = ({ idGroup, idUser }) => ({
  type: groupActionTypes.addUserToGroup,
  payload: { idGroup, idUser },
});

export const removeUserFromGroup = ({ idGroup, idUser }) => ({
  type: groupActionTypes.removeUserFromGroup,
  payload: { idGroup, idUser },
});

export const deleteUserFromAllGroups = (idUser) => ({
  type: groupActionTypes.deleteUserFromAllGroups,
  payload: idUser,
});
