import React from "react";
import './TodoList.css'

function TodoList(propiedades){
  return(
      <section>
        <ul>
          {propiedades.children}
        </ul>
      </section>
  )
}

export { TodoList };