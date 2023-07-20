import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "./action"

const initialState = {
    myFavorites: [],
    allCharactersFav: []
};

const rootReducer = (state = initialState, action) =>{

switch(action.type){


    case ADD_FAV:
        return {
            ...state, 
            myFavorites: action.payload,
            allCharactersFav: action.payload
        }

    case REMOVE_FAV:
        return { 
            ...state, 
            myFavorites: action.payload 
        };
    
    case FILTER:
        const allCharactersFiltered = state.allCharactersFav.filter((char) => char.gender === action.payload);
        return { 
            ...state,
            myFavorites:
            action.payload === "allCharacters"
            ? [...state.allCharactersFav]
            : allCharactersFiltered };
    
    case ORDER:
        const allCharactersFavCopy = [...state.allCharactersFav]
        return {
            ...state,
            myFavorites:
            action.payload === "A"
            ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
            : allCharactersFavCopy.sort((a, b) => b.id - a.id)
        } 

    default:
        return(
            {...state}
        )
}
};

export default rootReducer;
