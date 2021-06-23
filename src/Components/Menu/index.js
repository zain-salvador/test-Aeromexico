import React from 'react'
import { Col, Row } from 'antd';
import Submenu from '../Submenu'
import { UserAddOutlined } from '@ant-design/icons';
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
                        AGREGAR
                        <UserAddOutlined/>
                    </div>
                </Col>
            </Row> 
        </div>
    )
}

export default Menu;