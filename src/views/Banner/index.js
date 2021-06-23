import React, {useContext} from 'react'
import { Col, Row } from 'antd';
import Button from '../../Components/Button'
import {CharacterContext} from '../../Context/Characters'

import './Banner.css'
const Banner = () =>{

    const {studentFilter, staffFilter} = useContext(CharacterContext)

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
                        <Button name="ESTUDIANTE" handleFilter={studentFilter}/>
                    </Col>
                    <Col xs={12} sm={12} md={12} className="bx-button-align">
                        <Button name="STAFF"  handleFilter={staffFilter}/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Banner