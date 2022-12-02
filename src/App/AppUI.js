import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";

function AppUI(){
  const {
          error,
          loading,
          searchedTodos,
          completeTodo,
          deleteTodo,
          openModal,
          setOpenModal
        } = React.useContext(TodoContext)

  return(
    <React.Fragment>
    <TodoCounter></TodoCounter>
    <TodoSearch></TodoSearch>
      <TodoList>
        {error && <p>Desesperate, hubo un error</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer todo!!</p>}

        {/* se envía como propiedad todo lo q esta dentro de la etiqueta. */}
        {searchedTodos.map((todo) => (
          // solo muestra los items que concuerdan, searchedTodos
          <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          >
          </TodoItem>
          // cuando se va a renderizar una lista, se debe agregar la propiedad key,
          // esto es para que React reconozca cada uno de los componentes.
        ))}
      </TodoList>
          {openModal && (
            <Modal>
              {/* Esta dentro del provider pero... aparece fuera del div, manteniendo el acceso a los datos */}
              <TodoForm>
              </TodoForm>
              {/* hasta q no carga no se muestra. */}
            </Modal>
          )}
    <CreateTodoButton
      setOpenModal = {setOpenModal}
    >
    </CreateTodoButton>
  </React.Fragment>
  );
}
export { AppUI };