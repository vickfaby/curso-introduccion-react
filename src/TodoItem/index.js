import React from "react";
import './TodoItem.css';

function TodoItem(propiedades){

  return(
    <li className="TodoItem">
      <span 
      className={`Icon Icon-check ${propiedades.completed && 'Icon-check--active'}`}
      onClick={propiedades.onComplete}
      >
      {/* si props.completed es verdadero, entonces se activara la propiedad 'Icon-check--active' */}
      ✓
      </span>
    
      <p className={`TodoItem-p ${propiedades.completed && 'TodoItem-p--complete'}`}>
        {propiedades.text}
      </p>
      <span 
      className="Icon Icon-delete"
      onClick={propiedades.onDelete}
      >
        X
      </span>
    </li>
  )
}

export { TodoItem };