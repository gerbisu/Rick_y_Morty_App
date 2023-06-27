import React from "react";

export default function SearchBar(props) {
   
  return (
    <div>
      <input type="text" placeholder="Busca un personaje..." />
      <button onClick={props.onSearch}>Agregar</button>
    </div>
  );
}
