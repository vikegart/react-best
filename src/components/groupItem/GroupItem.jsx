import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { UserItem } from "../userItem";

import { groupByIdSelector, removeUserFromGroup } from "../../store/groups";

export const GroupItem = React.memo((props) => {
  const group = useSelector((state) => groupByIdSelector(state, props.id));
  const dispatch = useDispatch();

  return (
    <div className="group">
      <span>{group.name}</span>
      <ul>
        {group.users.map((userId) => {
          return (
            <li key={userId}>
              <UserItem id={userId} />
              <button
                onClick={() => {
                  dispatch(
                    removeUserFromGroup({ idGroup: props.id, idUser: userId })
                  );
                }}
              >
                remove from Group
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
