import React from "react";
import { useSelector } from "react-redux";

import { UserItem } from "../userItem";

import { groupByIdSelector } from "../../store/groups";

export const GroupItem = React.memo((props) => {
  const group = useSelector((state) => groupByIdSelector(state, props.id));

  return (
    <div className="group">
      <span>{group.name}</span>
      <ul>
        {group.users.map((userId) => {
          return (
            <li key="userId">
              <UserItem id={userId} />
            </li>
          );
        })}
      </ul>
    </div>
  );
});
