import React from 'react'
import { InputController } from '../../../Components/Form/InputController/InputController'
import { Slider } from '../../../Components/Slider/slider'
import { InnerColSection } from '../../../Components/Row'

interface Props {
    
}


let  data=[
    {
        "price": 599.99,
        "_id": "60df749a5027923750d7972f",
        "name": "iPhone 12 Pro 256GB Memory",
        "image": "https://proshop-ms.herokuapp.com/images/phone.jpg",
        "description": "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
     
    },
    {
        "price": 599.99,
        "_id": "60df749a5027923750d7972f",
        "name": "iPhone 10 256GB Memory",
        "image": "https://proshop-ms.herokuapp.com/images/phone.jpg",
        "description": "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
     
    },
    {
        "price": 800.99,
        "_id": "60df749a5027923750d7972f",
        "name": "iPhone 20 256GB Memory",
        "image": "https://proshop-ms.herokuapp.com/images/phone.jpg",
        "description": "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
     
    },
  
]
export const HomePage = (props: Props) => {
    return (
        <InnerColSection>
           <Slider data={data} />
           
        </InnerColSection>
    )
}
