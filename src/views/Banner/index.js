import React from 'react'
import { Col, Row } from 'antd';
import Button from '../../Components/Button'
import CardList from '../CardList'
import CharacterProvider from '../../Context/Characters'
import './Banner.css'
const Banner = () =>{

    return (
        <div className="bx-container">
            <div className="bx-harry-label">
                Harry Potter
            </div>
            <div  className="bx-text-align">
                Selecciona tu filtro
            </div>
            <div>
                <Row>
                    <Col xs={12} sm={12} md={12} className="bx-button-align">
                        <Button name="ESTUDIANTE"/>
                    </Col>
                    <Col xs={12} sm={12} md={12} className="bx-button-align">
                        <Button name="STAFF"/>
                    </Col>
                </Row>
            </div>
            <div>
                <CharacterProvider>
                    <CardList />
                </CharacterProvider>
                
            </div>
        </div>
    )
}

export default Banner