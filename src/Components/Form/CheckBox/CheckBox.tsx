/* eslint-disable import/extensions */
import React, { ChangeEvent, ReactNode } from 'react';
import { Checkbox, Remember, WarperCheckBox } from './CheckBoxStyle';

interface Props {
  name?: string;
  label: string;
  errors?: string;
  defaultValue?: boolean;
  placeholder?: string;
  value?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBox = ({ name, ...props }: Props) => {
  return (
    <WarperCheckBox JC="center" item="center">
      <Checkbox
        onChange={props.onChange}
        id={name}
        name={name}
        checked={props.value}
      />
      <Remember>{props.label}</Remember>
    </WarperCheckBox>
  );
};
