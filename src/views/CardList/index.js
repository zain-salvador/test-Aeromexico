import React from 'react'
import Card from '../../Components/Card'
import { Row, Col } from "antd";
import './CardList.css'
const CardList = () =>{

    const list = [
        {
            "name":"Harry Potter",
            "species":"human",
            "gender":"male",
            "house":"Gryffindor",
            "dateOfBirth":"31-07-1980",
            "yearOfBirth":1980,
            "ancestry":"half-blood",
            "eyeColour":"green",
            "hairColour":"black",
            "wand":{
               "wood":"holly",
               "core":"phoenix feather",
               "length":11
            },
            "patronus":"stag",
            "hogwartsStudent":true,
            "hogwartsStaff":false,
            "actor":"Daniel Radcliffe",
            "alive":true,
            "image":"http://hp-api.herokuapp.com/images/harry.jpg"
         },
         {
            "name":"Cedric Diggory",
            "species":"human",
            "gender":"male",
            "house":"Hufflepuff",
            "dateOfBirth":"",
            "yearOfBirth":1977,
            "ancestry":"",
            "eyeColour":"grey",
            "hairColour":"brown",
            "wand":{
               "wood":"ash",
               "core":"unicorn hair",
               "length":12.25
            },
            "patronus":"",
            "hogwartsStudent":true,
            "hogwartsStaff":false,
            "actor":"Robert Pattinson",
            "alive":false,
            "image":"http://hp-api.herokuapp.com/images/cedric.png"
         },
         {
            "name":"Cho Chang",
            "species":"human",
            "gender":"female",
            "house":"Ravenclaw",
            "dateOfBirth":"",
            "yearOfBirth":"",
            "ancestry":"",
            "eyeColour":"brown",
            "hairColour":"black",
            "wand":{
               "wood":"",
               "core":"",
               "length":""
            },
            "patronus":"swan",
            "hogwartsStudent":true,
            "hogwartsStaff":false,
            "actor":"Katie Leung",
            "alive":true,
            "image":"http://hp-api.herokuapp.com/images/cho.jpg"
         },
         {
            "name":"Draco Malfoy",
            "species":"human",
            "gender":"male",
            "house":"Slytherin",
            "dateOfBirth":"05-06-1980",
            "yearOfBirth":1980,
            "ancestry":"pure-blood",
            "eyeColour":"grey",
            "hairColour":"blonde",
            "wand":{
               "wood":"hawthorn",
               "core":"unicorn tail-hair",
               "length":10
            },
            "patronus":"",
            "hogwartsStudent":true,
            "hogwartsStaff":false,
            "actor":"Tom Felton",
            "alive":true,
            "image":"http://hp-api.herokuapp.com/images/draco.jpg"
         },
    ]
    return(
        <Row>
            {
                list.map((item,i)=>(
                    <Col key = {i+"row"}  xs={12} sm={12} md={12}>
                        <Card className="bx-align-content" key={i} {...item}></Card>
                    </Col>
                ))
            }
        </Row>
    )
}

export default CardList