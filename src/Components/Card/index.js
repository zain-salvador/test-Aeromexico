import React from 'react'

import { Col, Row } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import './card.css'
const Card = ()=>{

    return(
        <Row className="bx-card">
            <Col xs={24} sm={24} md={9} >
                <div className="bx-profile">
                    <img className="bx-image" src="http://hp-api.herokuapp.com/images/harry.jpg" alt="User name"/>
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
                                                VIVO
                                            </span> 
                                        </Col>
                                        <Col md={18}>
                                            <span className="bx-alive">
                                                /ESTUDIANTE
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
                                Harry Potter
                            </span> 
                        </Row>
                        <Row>
                            <div className="bx-description">
                                <label>Cumpleaños: 31-071980</label>
                                <label>Género: Male</label>
                                <label>Color de ojos: Green</label>
                                <label>Color de pelo: Black</label>
                            </div>
                        </Row>
                    </Col>
                </div>
            </Col>
        </Row> 
    ) 

}

export default Card;