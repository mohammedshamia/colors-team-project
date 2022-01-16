import React, { ChangeEvent, ReactNode } from 'react'
import { Checkbox, Remember, WarperCheckBox } from './CheckBox.style';

interface Props {
    name?: string;
    label: string;
    errors?: string;
    defaultValue?: boolean;
    placeholder?: string;
    value?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBox = (props: Props) => {
    return (
        <WarperCheckBox JC='center' item='center'>
            <Checkbox
                onChange={props.onChange}
                id={props.name}
                name={props.name}
                checked={props.value}
            />
        <Remember>{props.label}</Remember>

        </WarperCheckBox>
    )
}