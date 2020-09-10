import { groupActionTypes } from "./actionTypes";

const initialState = {
  list: Object.create(null),
  ids: [],
  filter: "",
};

const reducerMapping = {
  [groupActionTypes.delete]: (state, id) => {
    const list = { ...state.list };
    delete list[id];
    return {
      ...state,
      list,
      ids: state.ids.filter((x) => x !== id),
    };
  },

  [groupActionTypes.create]: (state, { name, id }) => {
    return {
      ...state,
      list: {
        ...state.list,
        [id]: {
          name,
          users: [],
        },
      },
      ids: [...state.ids, id],
    };
  },

  [groupActionTypes.addUserToGroup]: (state, { idGroup, idUser }) => {
    return {
      ...state,
      list: {
        ...state.list,
        [idGroup]: {
          ...state.list[idGroup],
          users: [...state.list[idGroup].users, idUser],
        },
      },
    };
  },

  [groupActionTypes.removeUserFromGroup]: (state, { idGroup, idUser }) => {
    return {
      ...state,
      list: {
        ...state.list,
        [idGroup]: {
          ...state.list[idGroup],
          users: state.state.list[idGroup].filter((x) => x !== idUser),
        },
      },
    };
  },

  [groupActionTypes.applyFilter]: (state, filter) => ({ ...state, filter }),
};

export const groups = (state = initialState, action) =>
  reducerMapping[action.type]
    ? reducerMapping[action.type](state, action.payload)
    : state;
