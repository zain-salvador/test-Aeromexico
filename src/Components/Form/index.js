import React, { useState, useContext } from 'react'
import { Modal,Input,Radio,message,Col, Row } from 'antd'
import { UserAddOutlined } from '@ant-design/icons';
import {CharacterContext} from '../../Context/Characters'
import './form.css'
const Form = () => {

  const {addNewCharacter} = useContext(CharacterContext)

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [bithday, setBithday] = useState('');
  const [eyeColor, setEyeColor] = useState('');
  const [hairColor, setHairColor] = useState('');
  const [image, setImage] = useState('');
  const [gender, setGender] = useState(1);
  const [position, setPosition] = useState(true);

  
  const showModal = () => setIsModalVisible(true)
  const handleCancel = () => setIsModalVisible(false)

  const handleSaveCharacter = () =>{
      if(name && bithday && eyeColor && hairColor && image){
        const newCharacter = {
            name:name,
            gender: gender === 1? 'female': 'male',
            house: 'Hufflepuff',
            dateOfBirth: bithday,
            eyeColour: eyeColor,
            hairColour: hairColor,
            hogwartsStudent: position,
            alive: true,
            image:image
        }
        addNewCharacter(newCharacter)
        setName('')
        setBithday('')
        setEyeColor('')
        setHairColor('')
        setImage('')
        setGender(1)
        setPosition(true)

        handleCancel()
      }else
        message.warning('All field are required');
          
  }

  return (
    <div className="bx-form">
        <Row>
            <Col>
                <button className="bx-button-add" onClick={showModal}>AGREGAR</button>
                <Modal title="Agrega un personaje" visible={isModalVisible} onCancel={handleCancel} footer={null}>
                    <Col >
                        <div>
                            <Row xs={24} sm={24} md={24}>
                                
                                <Col>
                                    <label className="bx-text">NOMBRE</label>
                                    <Input className="bx-center-content" value={name} onChange={e=>setName(e.target.value)}/>
                                </Col>
                                <Col>
                                    <label className="bx-text">CUMPLEAÑOS</label>
                                    <Input className="bx-center-content" value={bithday} onChange={e=>setBithday(e.target.value)}/>
                                </Col>
                            </Row>
                        </div>
                        <Row xs={24} sm={24} md={24}>
                            <Col>
                                <label className="bx-text">COLOR DE OJO</label>
                                <Input className="bx-center-content" value={eyeColor} onChange={e=>setEyeColor(e.target.value)}/>
                            </Col>
                            <Col>
                                <label className="bx-text">COLOR DE PELO</label>
                                <Input className="bx-center-content" value={hairColor} onChange={e=>setHairColor(e.target.value)}/>
                            </Col>
                        </Row>
                        <Row xs={24} sm={24} md={24}>
                            <Col xs={12} sm={12} md={12} >
                                <label className="bx-text">GÉNERO</label>
                                <Radio.Group onChange={e=>setGender(e.target.value)} value={gender}>
                                    <Radio value={1}>Mujer</Radio>
                                    <Radio value={2}>Hombre</Radio>
                                </Radio.Group>
                            </Col>
                            <Col xs={12} sm={12} md={12}>
                                <label className="bx-text">POSICIÓN</label>
                                <Radio.Group onChange={e=>setPosition(e.target.value)} value={position}>
                                    <Radio value={true}>Estudiante</Radio>
                                    <Radio value={false}>Staff</Radio>
                                </Radio.Group>
                            </Col>
                        </Row>
                        <Row xs={24} sm={24} md={24}>
                            <Input className="bx-text" placeholder="URL PICTURE"
                                    value={image} onChange={e=>setImage(e.target.value)}/>
                        </Row>
                        <Row xs={24} sm={24} md={24}>
                            <button className="bx-button-save" onClick={handleSaveCharacter}>
                                GUARDAR
                            </button>
                        </Row>
                        
                    </Col>
                </Modal>
            </Col>
            <Col>
                <UserAddOutlined className="bx-icon-menu"/>
            </Col>
        </Row>
    </div>
  );
};

export default Form

