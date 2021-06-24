import React from 'react'
import Banner from '../Banner'
import Menu from '../../Components/Menu'
import CardList from '../CardList'
import CharacterProvider from '../../Context/Characters'
import './main.css'

const Main = () =>{

    return (
        <CharacterProvider>
            <div className="bx-main-container">
                <div className="bx-menu">
                    <Menu />
                </div>
                <div>
                    <div className="bx-container-banner">
                        <Banner />
                    </div>
                    <div className="bx-container-card">
                        <CardList />
                    </div>
                </div>
            </div>
        </CharacterProvider>
    )
}

export default Main