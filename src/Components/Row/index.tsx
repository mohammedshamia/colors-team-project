import styled from "styled-components";

interface IRowJS{
    JC?:'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'start' | 'end',
    item?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'first' | 'start' | 'end';

}

export  const  Row=styled('div')<IRowJS>`
display: flex;
flex-direction: row;
justify-content: ${(props)=>props.JC};
justify-items: ${(props)=>props.item};
`


Row.defaultProps={
    JC:'start',
    item:'start'

}


