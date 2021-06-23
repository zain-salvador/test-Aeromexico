import React,{useContext} from 'react'
import Card from '../../Components/Card'
import {CharacterContext} from '../../Context/Characters'

import { Row, Col } from "antd";
import './CardList.css'

const CardList = () =>{

    const {charactersList,addFavorite} = useContext(CharacterContext)
    return(
        <Row>
            {
                charactersList.map((item,i)=>(
                    <Col key = {i+"row"}  xs={12} sm={12} md={12}>
                        <Card className="bx-align-content" key={i} {...item} handleFavorite={addFavorite} />
                    </Col>
                ))
            }
        </Row>
    )
}

export default CardList