import React, { Fragment, useRef, useState } from "react";
import { TodoItem } from "./TodoItem";

/* Id para las tareas unico y aleatorio */
import uuid4 from "uuid4";

export const TodoList = () => {

    const addTask = () => {
        const tarea = taskRef.current.value
        var id = uuid4();
        alert(tarea+"   "+id)

    }


  const [todos, setTodos] = useState([
    { id: 1, task: "Ir a la farmacia 🍰" },
    { id: 2, task: "Ir a la tienda 🍔" },
    { id: 3, task: "Ir a la escuela 🍕" },
    { id: 4, task: "Ir a la casa 🍟" },
    { id: 5, task: "Ir a la iglesia 🍿" },
    { id: 6, task: "Ir a la playa 🍩" },
  ]);

  const taskRef = useRef()

  return (
    <Fragment>
      <h1 className="display-5">Lista de tareas ✔️😊</h1>

      <div className="input-group my-5">
        <input type="text" className="form-control" placeholder="Ingrese una tarea" ref={taskRef}/>
        <button className="btn btn-primary ms-2" onClick={addTask}><i className="bi bi-clipboard-plus"></i></button>
        <button className="btn btn-danger ms-2"><i className="bi bi-trash"></i></button>
      </div>

      <ul className="list-group mt-5">
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </Fragment>
  );
};
