import styled,{css} from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '../Button/ButtonStyle'
import { FlexBox, Row ,Column} from '../Row'
export const SectionSlider = styled(FlexBox)`
background: #F2F2F2;
height: 678px;
`
export const ShopeButton = styled(Button)`
background: #FCDD06 0% 0% no-repeat padding-box;
border-radius: 20px;
color: #242424;
height: 56px;
letter-spacing: 0.88px;
opacity: 1;
outline:none;
text-transform: uppercase;
width: 220px;

`
export const PriceText = styled('p')`
color:#242424;
font-size:32px;
margin-bottom: 10px;

`


export const DescriptionText = styled(PriceText)`
color:#242424;
font-size:32px;
margin-bottom:42px;
`

export const NameText = styled(PriceText)`
color:#242424;
font-size:60px;
font-weight:bold;
margin-bottom: 10px;
`;

export const ImageSlider = styled('img')`
width:100%;
height:90%;
object-fit:cover;
margin-top:30px;
`;


export const ButtonHero = styled(Link)`
color:#242424;
background:#FCDD06;
font-size:22px;
height:56px;
outline:none; 
margin-top:42px;
border-radius: 20px;
opacity: 1;
text-transform: uppercase;
width: 220px;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
letter-spacing: 1.28px;
font-family: normal normal 300 32px/15px Muli;
max-width: 220px;
`;



export const  WrapperImageHero=styled(Column)`
    max-width: 627px;
    margin-top: 10px;
}

`







interface IDot {
    isGrey: boolean;
    width?: string

}

export const Dot = styled('div') <IDot>`
background:${(props) => props.isGrey ? '#70707030' : '#FCDD06 '};
border-radius: 50%;
width: ${(props) => props.width};
height: ${(props) => props.width};
margin: 0 20px;
`

interface IArrow {
    isLeft?: boolean,
    color?: string
}

export const Arrow = styled('div') <IArrow>`
font-size: 35px;
font-weight:bold;
font-weight: 700;
margin:'0px 23px';
width:30px;
${(props) => props.isLeft && css` transform:rotate(-180deg)` }
`