import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { UserItem } from "../userItem";

import { getUsers, filteredUserIds } from "../../store/users";

export const UserList = (props) => {
  const userIds = useSelector((state) => filteredUserIds(state));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      {userIds.map((id) => {
        return <UserItem id={id} key={id} />;
      })}
    </>
  );
};
