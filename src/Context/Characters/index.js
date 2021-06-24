import React, {createContext, useState} from 'react'
import {characters} from '../../Data/hp-characters'
import {staff} from '../../Data/hp-staff'
import {students} from '../../Data/hp-students'
import { message } from 'antd';

export const CharacterContext = createContext()

const CharacterProvider = ({ children}) =>{

    const [charactersList, setCharacterList] = useState(characters)
    const [favorites, setFavorites] = useState([])

    const studentFilter = () => setCharacterList(students)

    const staffFilter = () => setCharacterList(staff)

    const addFavorite = (image,name)=>{
        const added = favorites.filter(item=>item.name === name)
        console.log(added)
        if(favorites.length<5){
            if(added.length === 0){
                const newFav = {image: image, name: name}
                setFavorites([...favorites, newFav])
                message.info('Character added')
            }else
                message.warning('The character exists in your favorites')
        }else
             message.warning('You cannot add more character')
    }

    const deleteFav = (name)=>{
        const newListFav = favorites.filter( (item)=> item.name !== name)
        setFavorites(newListFav)
    }

    const addNewCharacter = (data) =>{
        setCharacterList([...charactersList,data])
    }


    return(
        <CharacterContext.Provider 
                    value={{charactersList,studentFilter,staffFilter,addNewCharacter,
                    favorites,addFavorite,deleteFav}}>
            {children}
        </CharacterContext.Provider>
    )

}

export default CharacterProvider