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
            task: tarea,
            estado: false
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

  const [todos, setTodos] = useState([]);

  /* Contar las tareas - Donde estado == false */
  const contadorTareas = () => {
    return todos.filter((todo)=>!todo.estado).length
  }
/* Componente con el resumen de las tareas con mensajes personalizados */
  const ResumenTareas = () => {
    const cantidad = contadorTareas()
    if(cantidad === 0){
      return(
        <div className="alert alert-success mt-3 text-center">
          Felicidades, no cuentas con tareas pendientes 😊
        </div>
      )
    }
    if (cantidad === 1){
      return(
        <div className="alert alert-info mt-3 text-center">
          Te queda solamente 1 tarea pendiente.
        </div>
      )
    }

    if (cantidad > 9){
      return(
        <div className="alert alert-danger mt-3 text-center">
        Te quedan {cantidad} tareas pendientes 😮.
      </div>
      )
    }

    return(
      <div className="alert alert-warning mt-3 text-center">
        Te quedan {cantidad} tareas pendientes.
      </div>
    )

  }
  /*Eliminar las tareas - Donde estado == false  */
  const eliminarTareasCompletas = () => {
    /* Filtrar (nueva lista) todas aquellas tareas que no esten completas */
    const newTodos = todos.filter((todo)=>!todo.estado)
    setTodos(newTodos)
  }

  const taskRef = useRef()

  return (
    <Fragment>
      <h1 className="display-5">Lista de tareas ✔️😊</h1>

      <div className="input-group my-5">
        <input type="text" className="form-control" placeholder="Ingrese una tarea" ref={taskRef}/>
        <button className="btn btn-primary ms-2" onClick={addTask}><i className="bi bi-clipboard-plus"></i></button>
        <button className="btn btn-danger ms-2" onClick={eliminarTareasCompletas}><i className="bi bi-trash"></i></button>
      </div>

      <ul className="list-group mt-5">
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} cambiarEstado={cambiarEstadoTarea} />
        ))}
      </ul>

      <ResumenTareas/>

    </Fragment>
  );
};
