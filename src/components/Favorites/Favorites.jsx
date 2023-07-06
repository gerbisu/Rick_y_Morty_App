import style from "./Favorites.module.css";
import { connect, useSelector, useDispatch } from "react-redux";
import Card from "../Cards/Singular/Card";
import {filterCards, orderCards} from "../../redux/action"
import { useState } from "react";

const Favorites = () => {
  // WARNING PELIGRO
  // CUIDADO!!!!
  // USE SELECTOR NO SE PERMITE EN EL CHECKPOINT
  const [aux, setAux] = useState(false)

  const favorites = useSelector((state) => state.myFavorites); // ACLARACION

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value))
    setAux(true)
  }

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
  }

  return (
    <div>
      
    <div className={style.container}>

      <select onChange = {handleOrder}>
        <option value = "A">Asendente</option>
        <option value = "D">Decendente</option>
      </select>

      <select onChange = {handleFilter}>
        <option value = "Male">Male</option>
        <option value = "Female">Female</option>
        <option value = "Genderless">Genderless</option>
        <option value = "unknown">unknown</option>
        <option value = "allCharacters">All Character</option>
      </select>
    </div>

     <div>
     {favorites?.map((pj) => {
       return (
       <Card 
       key={pj.id}
       id={pj.id}
       name={pj.name}
       species={pj.species}
       gender={pj.gender}
       status={pj.status}
       image={pj.image}
       origin={pj.origin.name}
       />
       );
     })}
     </div>

     </div>
  );
}

export default Favorites