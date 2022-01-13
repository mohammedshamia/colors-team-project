import styled from "styled-components";
import { Row } from "../../Row";

export  const  FiledWrapper=styled('div')`
display: flex;
flex-direction: column;
width:100%;
`


export  const  Label=styled('label')`
font-family: normal normal normal 22px/15px Muli;
letter-spacing: 0.88px;
color: #242424;
padding-bottom: 10px;
font-size: 14px;
font-weight: bold;

`

export const Input=styled('input')<{isError:boolean ,isSuccess?:boolean}>`
width:100% !important;
min-height:40px;
border: ${props => props.isError ? '1px solid red': '1px solid green'};
border-radius: 6px;
border-left: none;
border-top-left-radius: 0;
border-bottom-left-radius: 0;
::placeholder{
    padding-left: 5px;
    color: ${({ theme }) => theme.colors.textSubtle};

}
&:disabled {
    background-color: ${({ theme }) => theme.colors.backgroundDisabled};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.textDisabled};
    cursor: not-allowed;
  }

  &:focus:not(:disabled) {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

`

export  const  InputWrapper=styled('div')<{isError:boolean ,isSuccess?:boolean}>`
border: ${props => props.isError ? '1px solid red': '1px solid #242424'};
border-radius: 6px;
width:100% ;
display:flex;
min-height: 40px;
`;



export  const  WrapperIcon=styled(Row)`
padding: 10px;
`



InputWrapper.defaultProps={
    isError: false
}



export const  ErrorWrapper=styled(Row)`



`






