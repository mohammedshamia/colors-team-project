import  styled  from 'styled-components';
import { Row } from '../../Row';

export const Remember = styled('p')`
font-size: 22px;
letter-spacing: 0.88px;
color: #707070;
opacity: 0.7;
margin-left:13px;
`

export  const WarperCheckBox=styled(Row)`
  cursor: pointer;
  border-radius:6px;

`
export  const checkbox=styled('input').attrs({
    type:"checkbox"
})`
width:18px;
height:18px

`;




