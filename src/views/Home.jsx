import Cards from "../components/Cards/Cards.jsx";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = ({characters, onClose}) => {
    return (
        <div>
            <Cards characters={characters} onClose={onClose} />
        </div>
    )
}

export default Home;