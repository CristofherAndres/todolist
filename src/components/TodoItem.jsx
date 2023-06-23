import React, { Fragment } from "react";

export const TodoItem = ({todo}) => {
    const {task} = todo;
  return (
    <Fragment>
      <li className="list-group-item">{task}</li>
    </Fragment>
  );
};
