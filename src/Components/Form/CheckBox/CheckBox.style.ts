import styled from 'styled-components';
import { Row } from '../../Row';

export const Remember = styled('p')`
  font-size: 22px;
  letter-spacing: 0.88px;
  color: #707070;
  opacity: 0.7;
  margin-left: 13px;
`;

export const WarperCheckBox = styled(Row)`
  cursor: pointer;
  border-radius: 6px;
`;
export const WarperFileBox = styled(Row)`
  cursor: pointer;
  border-radius: 6px;
  width: 102px;
  height: 93px;
  display: flex;
  border: 1px dashed #707070;
  justify-content: center;
  align-items: center;
 
`;
export const Checkbox = styled('input').attrs({
  type: 'checkbox',
})`
  width: 22px;
  height: 22px;
  background: #242424 0% 0% no-repeat padding-box;
  padding: 3px 5px;
  display: flex;
  justify-content: center;
`;
export const InputFile = styled('input').attrs({
  type: 'file',
})`
  display: none;
`;
