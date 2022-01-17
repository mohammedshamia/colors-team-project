import styled from 'styled-components';
import { Row } from '../../Row';

export const FiledWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
`;

export const Label = styled('label')`
  font-family: normal normal normal 22px/15px Muli;
  letter-spacing: 0.88px;
  color: #242424;
  padding-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
`;

export const Input = styled('input')<{ isError: boolean; isSuccess?: boolean }>`
  width: 100% !important;
  min-height: 40px;
  border: none;

  /* border: ${props =>
    props.isError ? '1px solid red' : '1px solid green'}; */
  /* border-radius: 6px; */
  border-left: none;
  /* border-top-left-radius: 0; */
  border-bottom-left-radius: 0;
  background: transparent;
  ::placeholder {
    padding-left: 5px;
    outline: none;
  }
  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
    outline: none;
  }

  &:focus:not(:disabled) {
    outline: none;
    border-left: none;
  }
`;

export const InputWrapper = styled('div')<{
  isError: boolean;
  isSuccess?: boolean;
}>`
  border: ${props => (props.isError ? '1px solid red' : '1px solid #242424')};
  border-radius: 6px;
  width: 100%;
  display: flex;
  min-height: 40px;
`;

export const WrapperIcon = styled(Row)`
  padding: 10px;
  width: 40px;
  height: auto;
`;

InputWrapper.defaultProps = {
  isError: false,
};

export const ErrorWrapper = styled(Row)``;
