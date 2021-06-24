import React from 'react'
import { Col, Row } from 'antd';
import Submenu from '../Submenu'
import Form from '../Form'
import './menu.css'

const Menu = ()=>{
    return(
        <div className="bx-menu">
            <Row className="bx-content-menu">
                <Col md={12}>
                    <div className="bx-label bx-border">
                        <Submenu />
                    </div> 
                </Col>
                <Col md={12}>
                    <div className="bx-label">
                        <Form />
                    </div>
                </Col>
            </Row> 
        </div>
    )
}

export default Menu;