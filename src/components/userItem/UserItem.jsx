import React from "react";
import { useSelector } from "react-redux";

import { userByIdSelector } from "../../store/users";

export const UserItem = (props) => {
  const user = useSelector((state) => userByIdSelector(state, props.id));
  console.log(props);

  return <div className="user">{user ? user.name : "def"}</div>;
};
