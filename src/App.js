import React, { useState, useEffect } from "react";
import style from "./App.module.css";
import Nav from "./components/Navbar/Nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
//----Views----
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {

  const [characters, setCharacters] = useState([]); // [{}]
  const { pathname } = useLocation();
  const [access, setAcess] = useState(false);
  const navigate = useNavigate()
  const email = "Jorge@gmail.com"
  const password = "Jorge20"

  useEffect(()=>{
    !access && navigate("/")
  }, [access]);

  const login = (userData) => {
    if(userData.email === email && userData.password === password){
      setAcess(true);
      navigate("/home")
    } else {
      alert("Contraseña o email Incorrectos")
    }
  }
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
  return (
    <div className={style.App}>
      
      {pathname !== "/" && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Form login={login}/>} />
        <Route path="/home" element={<Home characters={characters} onClose={onClose}/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/Favorites" element={<Favorites/>} />
        <Route path="/detail/:id" element={<Detail/>} />
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
