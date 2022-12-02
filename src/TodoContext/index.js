import React from "react";
import { useLocalStorage } from "./useLocalStorage.js";
const TodoContext = React.createContext();

function TodoProvider(propiedad){

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const completedTodos = todos.filter((todo) => !!todo.completed).length; // acá filtramos cuales todos tiene la propiedad completed como true
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos; // si no hemos escrito nada
  } else {
    searchedTodos = todos.filter((todo) => {
      //si se escribió algo
      const todoText = todo.text.toLocaleLowerCase(); //convierte a minissulas cada todo creado
      const searchText = searchValue.toLocaleLowerCase(); //convierte en minusculas lo escrito
      return todoText.includes(searchText); // devuelve los todos que incluyan el texto de la busqueda.
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos]; // copia el Array todos
    newTodos.push({
      completed:false,
      text
    });
    saveTodos(newTodos); // adjudica el nuevo valor de todos, con el React.useState
  };

  const completeTodo = (text) => {
    // completa un solo todo
    const todoIndex = todos.findIndex((todo) => todo.text === text); //devuelve la posición q tiene el mismo identificador
    const newTodos = [...todos]; // copia el Array todos
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos); // adjudica el nuevo valor de todos, con el React.useState
  };

  const deleteTodo = (text) => {
    //Aca entra como parametro el nombre del item que se le dió X
    const todoIndex = todos.findIndex((todo) => todo.text === text); //devuelve la posición q tiene el mismo identificador
    const newTodos = [...todos]; // copia el Array todos
    console.log(`El todo es: `);
    console.log(todos);
    console.log(`El index elegido es: ${todoIndex}`);
    newTodos.splice([todoIndex], 1); //en q tajada empezamos a cortar,y cuantos queremos tomar
    saveTodos(newTodos);
    console.log(`El nuevo Array sería:`);
    console.log(newTodos);
  };

  return(
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    }}>
      {propiedad.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider  }