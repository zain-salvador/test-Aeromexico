import React from 'react'
import { Col, Row } from 'antd';
import { BookOutlined,UserAddOutlined } from '@ant-design/icons';


import './menu.css'

const Menu = ()=>{
    return(
        <div className="bx-menu">
            <Row>
                <Col md={12}>
                    <div className="bx-label bx-border">
                        FAVORITOS
                        <BookOutlined className="bx-icon"/>
                    </div> 
                </Col>
                <Col md={12}>
                    <div className="bx-label">
                        AGREGAR
                        <UserAddOutlined className="bx-icon"/>
                    </div>
                </Col>
            </Row> 
        </div>
    )
}

export default Menu;