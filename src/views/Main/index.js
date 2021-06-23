import React from 'react'
import Banner from '../Banner'
import Menu from '../../Components/Menu'
import CardList from '../CardList'
import CharacterProvider from '../../Context/Characters'
import './main.css'

const Main = () =>{

    return (
        <CharacterProvider>
            <div>
                <div>
                    <Menu />
                </div>
                <div className="bx-container-banner">
                    <Banner />
                </div>
                <div className="bx-container-card">
                    <CardList />
                </div>
            </div>
        </CharacterProvider>
    )
}

export default Main