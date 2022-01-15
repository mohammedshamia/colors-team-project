import styled from 'styled-components'
import { Column, Row, Button } from '../../../Component/widget/styles'


export const WrapperCardPayment = styled(Column)`
background: #FCDD06 ;
border-radius: 10px;
height: 62px;
padding: 25px 30px;

`
export const ButtonCounter = styled(Button) <{ isActive?: boolean }>`
background:#FFFFFF
border: ${props => props.isActive ? '3px solid #FCDD06' : '1px solid #FCDD06'};
color:#000000;
font-size:24px;
height: 40px;
left: 887px;
opacity: 0.3;
width: 48px;
`


export const RowCenter = styled(Row)`
align-items:center
justify-content: center;

`


export const CloseWrapper = styled(Row)`
justify-content : flex-end;
margin-top : 25px,

align-items : center;
cursor: pointer;

`

export const CheckoutButton = styled(Button)`
width: 324px;
height: 62px;
background: #FCDD06
border-radius: 10px;
color: #242424;
text-transform: capitalize;
opacity: 1;
outline:none;
border:none;
background:#FCDD06;
font-size:24px;
`



export const WrapperLeft = styled(Column)`
background: #F2F2F2 ;
border-radius: 16px;
height: 351px;
height: 351px;
opacity: 1;
padding:30px
width: 384px;
`
