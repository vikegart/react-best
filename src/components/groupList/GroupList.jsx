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

  const handleAdd = () => {
    dispatch(createGroup(`group: ${new Date().getSeconds()}`));
  };

  const dispatch = useDispatch();

  return (
    <>
      <button onClick={handleAdd}>+</button>
      <div className="list">
        {groupIds.map((id) => {
          return <GroupItem id={id} key={id} />;
        })}
      </div>
    </>
  );
};
