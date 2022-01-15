import React from 'react'
import { CheckoutButton, WrapperLeft } from './style'
interface Props {
m?:string
}

export const LeftItem = (props: Props) => {
    return (
        <WrapperLeft>
          Proceed to checkout
        </WrapperLeft>
    )
}
