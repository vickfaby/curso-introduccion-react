import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(propiedades) {
  const onClickButton = () => {
    propiedades.setOpenModal((prevState) => !prevState); //siempre se va a cambiar al estado contrario
  };
  return (
    //El código dentro del onClick debe estar dentro de una arrow function o si no.. se va a ejecutar automáticamente sin h aber llamado al click
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
      // Si llamamos a la función con parametro, tenemos que llamarla con ()=> arrow function
    >
      +
    </button>
  );
}

export { CreateTodoButton };
