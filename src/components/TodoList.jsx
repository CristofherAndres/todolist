import React, { Fragment, useRef, useState } from "react";
import { TodoItem } from "./TodoItem";

/* Id para las tareas unico y aleatorio */
import uuid4 from "uuid4";

export const TodoList = () => {

    const addTask = () => {
        const tarea = taskRef.current.value.trim()
        taskRef.current.value = null
        if(tarea === '') return;
        
        setTodos((prevTodos) =>{
          const newTask = {
            id:uuid4(),
            task: tarea
          }
          return[...prevTodos, newTask] //Investigar
        })

    }

    const cambiarEstadoTarea = (id) => {
      /* Tomar todos los elementos del array */
      const newTodos = [...todos]
      /* Buscar el item por su id dentro del array */
      const todo = newTodos.find((todo)=> todo.id === id)
      /* Cambiar el estado */
      todo.estado = !todo.estado
      /* Setear el array con el cambio de estado*/
      setTodos(newTodos)
    }

  const [todos, setTodos] = useState([
    { id: 1, task: "Ir a la farmacia 🍰", estado: true },
    { id: 2, task: "Ir a la tienda 🍔" , estado: false},
    { id: 3, task: "Ir a la escuela 🍕",estado: true },
    { id: 4, task: "Ir a la casa 🍟",estado: false },
    { id: 5, task: "Ir a la iglesia 🍿",estado: true },
    { id: 6, task: "Ir a la playa 🍩",estado: false },
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
          <TodoItem todo={todo} key={todo.id} cambiarEstado={cambiarEstadoTarea} />
        ))}
      </ul>
    </Fragment>
  );
};
