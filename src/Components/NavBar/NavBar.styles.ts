    
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CSSProperties } from 'react'
import { Column } from '../Col'
import { FlexBox } from '../Row'
import {AiOutlineSearch} from'react-icons/ai'
export const InnerSection = styled(Column)`
  margin: 0 auto;
  max-width: 1640px;
  width:100%;
`

export const Badge = styled('div')`
    align-items: center;
    background: #fcdd06;
    border-radius: 50%;
    color: #000;
    display: flex;
    font-size: 8px;
    font-weight: 700;
    height: 13px;
    justify-content: center;
    left: 8px;
    position: relative;
    top: 10px;
    width: 13px;
    z-index: 1;
`



export const SearchButton = styled(FlexBox)`
cursor:pointer;

  align-items: center;
    background: #FCDD06;
    border-radius: 6px;
    display: flex;
    height: 40px;
    justify-content: center;
    opacity: 1;
    width: 152px;
`
export const StyledSearchIcon = styled(AiOutlineSearch)`
    font-size:18;
    margin-right:10px;
`



export const NavInnerSection = styled(InnerSection)`
    flex-direction: row;
    justify-content:space-between;
`


export const NavBox = styled('div')`
    align-items: center;
    display: flex;
    flex-direction: row;
    height: auto;
    justify-content: center;
     width: 30%;

`
export const NavBoxLogo = styled(NavBox)`
    align-items: center;
    display: flex;
    flex-direction: row;
    height: auto;
    justify-content:flex-start ;
     width: 30%;

`;
export const CustomLink = styled(Link)`
 color:none;
  text-decoration: none;
`;


export  const NavTitle=styled('p')`
margin-top: 11px;
font-size:13px;
color:${(props)=>props.theme.nav.textColor};
`


export const Logo = styled('img')`
    height: 50px;
    object-fit: cover;
    opacity: 1;
    width: 180px;
`;










export const NavContainer = styled('nav')`
    align-items: center;
    background: #242424;
    display: flex;
    height: 85px;
    justify-content: center;
    justify-content: space-between;
    opacity: 1;
    width:100%;
`

export const SearchInput = styled('input')`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border:none;
    border-radius: 6px;
    height: 40px;
    opacity: 1;
    padding:12px 26px;
    width:550px;
    &:focus{
        border:none;
        outline:none;
    }
`
export const List = styled('ul')`
  text-decoration: none;

align-items: center;
display: flex;
flex-direction: row;
justify-content: space-between;

`;
export const ListItem = styled('li')`
color: ${(props)=>props.theme.nav.logo.rightText};
font-size:13px;
letter-spacing: 0.2px;
list-style: none;
margin-left: 20px;
opacity: 1;
text-decoration: none;


`;
export const LogoTextYellow = styled(Link)`
color: ${(props)=>props.theme.nav.logo.leftText};
font-size:40px;
letter-spacing: 1.6px;
opacity: 1;
text-decoration: none;

`
export const LogoTextWhite = styled(Link)`
  color: ${(props)=>props.theme.nav.logo.rightText};
font-size:40px;
letter-spacing: 1.6px;
opacity: 1;
text-decoration: none;

`
export const StyleObj: CSSProperties = {
     fontSize: 22,
     color: '#FFF',
     fill: '#FFF',
     margin: '0px auto',
     display: 'flex',
     alignItems: 'center',
     alignContent: 'space-between',
     marginBottom: '10px',
}
