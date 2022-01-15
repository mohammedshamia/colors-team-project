import React from 'react'
import styled from 'styled-components'

interface Props {
    title:string
}



export const Divider = styled('hr')`
color: ${props => props.color};
width:100%;
height:${props => props.color};
margin-top:22px

`



export const DeviderTitle = ({title}: Props) => {
    return (
        <p>sss</p>

       /* <Column item="start" mt={62}>
                     <Typography fontSize={32} color="#242424" weight="bold">
                         {title}
                     </Typography>

                     <Divider width={200} height={7} color="#FCDD06" mt={22} />
                     <Divider width="100%" height={1} />
                 </Column> */
    )
}
