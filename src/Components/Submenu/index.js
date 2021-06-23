import React, {useContext} from 'react'
import { BookOutlined, DeleteOutlined} from '@ant-design/icons'
import {CharacterContext} from '../../Context/Characters'
import { Col, Row } from 'antd';
import './submenu.css'


const Submenu = ()=>{

    const {favorites,deleteFav} = useContext(CharacterContext)
    const Item = ({image,name})=>(
        <div className="bx-item">
            <Row>
                <Col>
                    <img className="bx-image-menu" src={image} alt="User name"/>
                </Col>
                <Col>
                    <div className="bx-font-name">
                       {name}
                    </div>
                </Col>
                <Col>
                    <DeleteOutlined className="bx-delete-icon" onClick={()=>deleteFav(name)}/>
                </Col>
            </Row>
        </div>
    )

    return (
        <div className="bx-submenu">
            <button className="dropbtn">FAVORITOS <BookOutlined/></button>
            <div className="bx-content">
                {
                    favorites.map((item,i)=>(
                        <Item key={i} {...item}/>
                    ))

                }
               
                
            </div>

        </div>
    )
}

export default Submenu