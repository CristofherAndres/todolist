import React, { Fragment } from "react";

export const TodoList = () =>{
    return(
        <Fragment>
        
        <h1 className="display-5">Lista de tareas ✔️😊</h1>
        
        <ul className="list-group mt-5">
            <li className="list-group-item">Tarea 1 🍕</li>
            <li className="list-group-item">Tarea 2 🎶</li>
            <li className="list-group-item">Tarea 3 😶‍🌫️</li>
        </ul>
        
        
        </Fragment>
    )
}