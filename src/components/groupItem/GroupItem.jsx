import React from "react";
import { useSelector } from "react-redux";

import { groupByIdSelector } from "../../store/groups";

export const GroupItem = (props) => {
  const group = useSelector((state) => groupByIdSelector(state, props.id));

  return <div className="group">{group ? group.name : "def"}</div>;
};
