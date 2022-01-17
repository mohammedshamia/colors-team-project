import styled from 'styled-components';
import { Row } from '../Row';

export const Column = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.JC};
  justify-items: ${props => props.item};
`;

Column.defaultProps = {
  JC: 'start',
  item: 'start',
};
