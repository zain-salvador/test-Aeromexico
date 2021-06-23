import React from 'react'
import { Col, Row } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import './card.css'


const Card = ({name,alive,hogwartsStudent,dateOfBirth,gender,eyeColour,hairColour,image,house})=>{

    return(
        <Row className="bx-card">
            <Col xs={24} sm={24} md={9} >
                <div className={
                    (house === "Gryffindor"? "bx-gryffindor": 
                    house === "Slytherin"? "bx-slytherin": 
                    house === "Hufflepuff"? "bx-hufflepuff": "bx-ravenclaw") + " bx-profile" }>
                        
                    <img className="bx-image" src={image} alt="User name"/>
                </div>
            </Col>
            <Col xs={24} sm={24} md={15}>
                <div className="bx-user--information">
                    <Col>
                        <Row>
                            <Col  md={18}>
                                <div className="bx-main-title">
                                    <Row>
                                        <Col md={6}>
                                            <span className="bx-alive">
                                               { alive? "VIVO":"FINADO"}
                                            </span> 
                                        </Col>
                                        <Col md={18}>
                                            <span className="bx-alive">
                                                {hogwartsStudent? " /ESTUDIANTE":"/STAFF"}
                                               
                                            </span> 
                                        </Col>
                                    </Row>
                                </div>
                               
                            </Col>
                            <Col  md={6}>
                                <BookOutlined className="bx-icon"/>
                            </Col>
                        </Row>
                        <Row>
                            <span className="bx-name">
                                {name}
                            </span> 
                        </Row>
                        <Row>
                            <div className="bx-description">
                                <label>Cumpleaños: {dateOfBirth}</label>
                                <label>Género: {gender}</label>
                                <label>Color de ojos: {eyeColour}</label>
                                <label>Color de pelo: {hairColour}</label>
                            </div>
                        </Row>
                    </Col>
                </div>
            </Col>
        </Row> 
    ) 

}

export default Card;