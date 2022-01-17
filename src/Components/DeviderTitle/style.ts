import styled from 'styled-components';
import { Column } from '../Row/index';

export const Title = styled('p')`
  color: #242424;
  font-size: 32px;
  font-weight: bold;
  margin-top: 22px;
`;

interface IDivider {
  width: string;
  height: string;
  color?: string;
}

export const Divider = styled('hr')<IDivider>`
  color: #d3cdcd;
  font-size: 32px;
  font-weight: bold;
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${props => props.color};
`;

export const ColumnCusom = styled(Column)`
  margin-top: 62px;
`;
