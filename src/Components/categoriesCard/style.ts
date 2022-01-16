import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Row,Column } from "../Row";



// eslint-disable-next-line no-unused-vars
// import { FlexBox, FlexCol } from "../nav/Nav.Style";


export const Card = styled(Column)`
  justify-content: flex-start;
  align-items: center;
  width: 380px;
  height: 392px;
  max-width:392px;
  background: #FFFFFF;
  border-radius: 16px;
  margin:20px;
  overflow: hidden;
  margin-bottom: 63px;
  &:first-child and :last-child{
    margin: 0 0;
}
;
  
`;
export const BoxCard = styled(Row)`    
  width: 380px;
  height: 346px;
  background: #F7F8FC;
  border-radius: 16px;
  display: flex;
  justify-content:center;
  align-items: center;
  background: #F7F8FC;
`
export const TypographyCard = styled(Link)`    
 
text-decoration: none;
margin-top:16px;
font-family: normal normal bold 24px/15px Muli;
letter-spacing: 0.96px;
color: #242424;

`


export const ProductImgCatogory = styled("img").attrs({
    loading:"lazy"
})`
  max-width:290px;
  display: flex;
  justify-content: center;
  align-items: center;
  height:200px;
  object-fit: cover;
`;