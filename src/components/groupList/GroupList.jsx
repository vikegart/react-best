import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { GroupItem } from "../groupItem";

import {
  createGroup,
  addUserToGroup,
  deleteGroup,
  removeUserFromGroup,
  filteredGroupsIds,
} from "../../store/groups";

import "./groupList.css";

export const GroupList = (props) => {
  const groupIds = useSelector((state) => filteredGroupsIds(state));
  const dispatch = useDispatch();

  const handleCreate = () => {
    dispatch(createGroup(`group: ${new Date().getSeconds()}`));
  };

  const handleAddUserToGroup = (idGroup, idUser = 0, e) => {
    dispatch(addUserToGroup({ idGroup, idUser }));
  };

  const handleAddAllUsersToGroup = (idGroup, e) => {
    dispatch(addUserToGroup({ idGroup, idUser: 0 }));
    dispatch(addUserToGroup({ idGroup, idUser: 1 }));
    dispatch(addUserToGroup({ idGroup, idUser: 2 }));
    dispatch(addUserToGroup({ idGroup, idUser: 3 }));
  };

  const handleDeleteUserFromGroup = (idGroup, idUser = 0, e) => {
    dispatch(removeUserFromGroup({ idGroup, idUser }));
  };

  return (
    <>
      <button className="btn btn-small" onClick={handleCreate}>
        create Group
      </button>
      <div className="list">
        {groupIds.map((id) => {
          return (
            <>
              <GroupItem id={id} key={id} />
              <button
                className="btn"
                onClick={(e) => handleAddUserToGroup(id, 0, e)}
              >
                add id=0 to Group
              </button>
              <button
                className="btn"
                onClick={(e) => handleAddUserToGroup(id, 1, e)}
              >
                add id=1 to Group
              </button>
              <button
                className="btn"
                onClick={(e) => handleAddAllUsersToGroup(id, e)}
              >
                allUsersToGroup
              </button>
              <button
                className="btn"
                onClick={(e) => handleDeleteUserFromGroup(id, 0, e)}
              >
                delete id=0 from Group
              </button>
              <button
                className="btn"
                onClick={(e) => handleDeleteUserFromGroup(id, 1, e)}
              >
                delete id=1 from Group
              </button>
              <button
                className="btn btn-small"
                onClick={() => dispatch(deleteGroup(id))}
              >
                delete group
              </button>
            </>
          );
        })}
      </div>
    </>
  );
};
