import React, { Fragment } from "react";

export const TodoItem = ({todo, cambiarEstado}) => {
    const {id, task, estado} = todo;
    const fnCambiarEstado = () =>{
      cambiarEstado(id)
    }
  return (
    <Fragment>
      <li className="list-group-item d-flex justify-content-between">
        {task}
        <input type="checkbox" onChange={fnCambiarEstado} className="form-checked-input me-2" checked={estado}/>
        </li>
    </Fragment>
  );
};
