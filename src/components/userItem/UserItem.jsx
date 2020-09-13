import React from "react";
import { useSelector } from "react-redux";

import { userByIdSelector } from "../../store/users";

export const UserItem = (props) => {
  const user = useSelector((state) => userByIdSelector(state, props.id));

  return <div className="user">{user ? user.name : "def"}</div>;
};
