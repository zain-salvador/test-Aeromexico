import React, {createContext, useState} from 'react'
import {characters} from '../../Data/hp-characters'
import {staff} from '../../Data/hp-staff'
import {students} from '../../Data/hp-students'

export const CharacterContext = createContext()

const CharacterProvider = ({ children}) =>{

    const [charactersList, setCharacterList] = useState(characters)
    const [favorites, setFavorites] = useState([])

    const studentFilter = () => setCharacterList(students)

    const staffFilter = () => setCharacterList(staff)

    const addFavorite = (image,name)=>{
        if(favorites.length<5){
            const newFav = {image: image, name: name}
            setFavorites([...favorites, newFav])
        }else
            alert("You cannot add more items")
    }

    const deleteFav = (name)=>{
        const newListFav = favorites.filter( (item)=> item.name !== name)
        setFavorites(newListFav)
    }


    return(
        <CharacterContext.Provider value={{charactersList,studentFilter,staffFilter,favorites,addFavorite,deleteFav}}>
            {children}
        </CharacterContext.Provider>
    )

}

export default CharacterProvider