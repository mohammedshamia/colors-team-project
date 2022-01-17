/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React, { ChangeEvent, ReactNode } from 'react';
import { Row } from '../../Row';
import { ErrorSection } from './ErrorSection';
import {
  FiledWrapper,
  Input,
  InputWrapper,
  Label,
  WrapperIcon,
} from './InputController.style';

interface InputControllerProps {
  name: string;
  label?: string;
  type?: string;
  errors?: string;
  defaultValue?: string;
  value?: string | number;
  touched?: boolean;
  placeholder?: string;
  icon?: ReactNode;
  isRequired?: boolean;
  onBlur?: (e: React.FocusEvent<any, Element>) => any;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

export const InputController = (props: InputControllerProps) => {
  return (
    <>
      <FiledWrapper>
        {props.label && <Label htmlFor={props.name}>{props.label}</Label>}

        <InputWrapper isError={!!props.errors?.length}>
          {props.icon && (
            <WrapperIcon JC="center" item="center">
              {props.icon}
            </WrapperIcon>
          )}

          <Input
            isError={!!props.errors?.length}
            onChange={props.onChange}
            type={props.type}
            defaultValue={props.defaultValue}
            value={props.value}
            id={props.name}
            name={props.name}
            onBlur={props.onBlur}
            required={props.isRequired}
            placeholder={props.placeholder}
          />
        </InputWrapper>
        <ErrorSection errors={props.errors} touched={props.touched} />
      </FiledWrapper>
    </>
  );
};
