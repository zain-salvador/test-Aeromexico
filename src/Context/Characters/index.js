import React, {createContext, useState} from 'react'
import {characters} from '../../Data/hp-characters'
import {staff} from '../../Data/hp-staff'
import {students} from '../../Data/hp-students'

export const CharacterContext = createContext()

const CharacterProvider = ({ children}) =>{

    const [charactersList, setCharacterList] = useState(characters)

    const studentFilter = () => setCharacterList(students)
    const staffFilter = () => setCharacterList(staff)
    return(
        <CharacterContext.Provider value={{charactersList,studentFilter,staffFilter}}>
            {children}
        </CharacterContext.Provider>
    )

}

export default CharacterProvider