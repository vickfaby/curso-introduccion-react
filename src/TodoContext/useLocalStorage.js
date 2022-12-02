import React from "react";

// const initialValue = [
//   {text:'Cebolla',
//   completed:false},
//   {text:' hacer el curtso',
//   completed:false},
//   {text:'Comprar comida',
//   completed:false},
// ]

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue); //MANEJO DE ESTADOS Y RE-RENDER

  React.useEffect(() => {
    setTimeout(() => {
      try {
        //hace q se guarden los cambios en localStorage y a la vez de haga el re-render
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem); // sera un Array
        }

        setItem(parsedItem);
        setLoading(false); // simula q terminó de cargar
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return { 
    item, 
    saveItem, 
    loading, 
    error 
  }; // cuando sean mas de dos propiedades, se recomienda qq sea en formato de objeto {}
}

export { useLocalStorage }