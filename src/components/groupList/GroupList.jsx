import React from "react";
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

  return (
    <>
      <button className="btn btn-small" onClick={handleCreate}>
        create Group
      </button>
      <div className="list">
        {groupIds.map((id) => {
          return (
            <React.Fragment key={id}>
              <GroupItem id={id} />
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
                className="btn btn-small"
                onClick={() => dispatch(deleteGroup(id))}
              >
                delete group
              </button>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};
