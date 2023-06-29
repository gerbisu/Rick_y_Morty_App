import React, { useEffect, useState } from "react";
import style from "./App.module.css";
import Nav from "./components/Navbar/Nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
//----Views----
import Landing from "./views/Landing";
import Home from "./views/Home";
import About from "./views/About";
import Detail from "./views/Details";
function App() {
  function onSearch(dato) {
    axios(`https://rickandmortyapi.com/api/character/${dato}`)
      .then((respuesta) => {
        if (respuesta.data.name) {
          setCharacters((oldChars) => [...oldChars, respuesta.data]);
        } else {
        }
      })
      .catch((err) => window.alert("¡No hay personajes con este ID!"));
  }
  function onClose(id) {
    // elimina personajes de characters
    // window.alert("onClose :)")
    setCharacters(
      characters.filter((pj) => {
        return pj.id !== Number(id);
      })
    );
  }
  const [characters, setCharacters] = useState([]); // [{}]
  return (
    <div className={style.App}>

      <Nav onSearch={onSearch} />

      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home characters={characters} onClose={onClose}/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/character/:id/:name" element={<Detail/>} />

      </Routes>
    </div>
  );
}

export default App;

// lo que tenemos con axios pero con fetch

// fetch(`https://rickandmortyapi.com/api/character/${dato}`)
// .then(respuesta => respuesta.json())
// .then((respuestaJson) => {
//   if (respuestaJson.name) {
//     setCharacters((oldChars) => [...oldChars, respuestaJson]);
//   } else {
//   }
// })
// .catch((err) => window.alert("¡No hay personajes con este ID!"));
{
  /*
   */
}
