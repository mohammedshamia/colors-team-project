import styled from 'styled-components';
import { Column } from "../Row/index"

interface ILabelName{
    title:string,
    postion:"start"|"center"
}




export const ColumnCusom = styled(Column)`
margin-top:62px;
`;
export const LabelName = ({title,postion}:ILabelName) => {
     return (
          <ColumnCusom item="center">
               {/* <FeaturedProducts>Featured Products</FeaturedProducts> */}
               {/* <Divider width={200} height={7} color="#FCDD06" mt={22} /> */}
               {/* <Divider width="100%" height={1} /> */}
          </ColumnCusom>
     )
}
