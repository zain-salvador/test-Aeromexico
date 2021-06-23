import React from 'react'
import { Col, Row } from 'antd';
import Button from '../Button'
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
                    <Col md={12} className="bx-button-align">
                        <Button name="ESTUDIANTE"/>
                    </Col>
                    <Col md={12} className="bx-button-align">
                        <Button name="STAFF"/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Banner