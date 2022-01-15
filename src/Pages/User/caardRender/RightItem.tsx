import React, { useState } from 'react'
import { Row } from '../../../Components/Row';

interface Props {
    imge: string;
    title: string;
    countP: number;
    incres: () => void;
    decres: () => void;
    price: number;
}

export const RightItem = () => {

    return (
        <Row>
        RightItem
        </Row>
    )
}
