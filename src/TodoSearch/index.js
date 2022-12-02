import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch(){
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  //const [] = React.useState('');
  //Una variable de estado es un Array que guarda su valor y una funcipon que se usa para volver a setear dicho valor.

  //Creamos un estado que está guiardado en la variable searchValue, tambn tenemos una función llamda setSearchValue, que modifica ese valor. 
  //Luego en la función onSearchValueChange vamos modificando ese valor cada que se escribe una letra.
  const onSearchValueChange = (event)=> {
    console.log(event.target.value)
    setSearchValue(event.target.value);
  };

  return(  // colocamos [] para incluir dos componentes.
    <input 
    className="TodoSearch" 
    placeholder="Cebolla"
    value={searchValue}
    // Acá le ponemos que el valor de nuestro input es el valor que el usuario ha ido tecleando
    onChange={onSearchValueChange}
    ></input>
    )
}

export { TodoSearch };