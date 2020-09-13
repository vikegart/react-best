import React from "react";
import { useDispatch } from "react-redux";

import { Input } from "../input";

import { applyFilter } from "../../store/groups";

export const FilterGroup = (props) => {
  const dispatch = useDispatch();

  const onChangeSearchInput = (value) => dispatch(applyFilter(value));

  return <Input placeholder="Filter by name" onChange={onChangeSearchInput} />;
};
