import React, { ChangeEvent, ReactNode } from 'react'
import { Remember, WarperCheckBox } from './CheckBox.style';

interface Props {
    name?: string;
    label: string;
    errors?: string;
    defaultValue?: boolean;
    touched?: boolean;
    placeholder?: string;
    value?: boolean;
    icon?: ReactNode;
    onBlur?: (e: React.FocusEvent<any, Element>) => any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBox = (props: Props) => {
    return (
        <WarperCheckBox JC='center' item='center'>
            <input
                onChange={props.onChange}
                id={props.name}
                name={props.name}
                onBlur={props.onBlur}
                // checked={props.value}
                className=" checkbox w-6 h-6 rounded-full bg-white  cursor-pointer border border-dashed "
                type="checkbox"
            />
                              <Remember>Remember me</Remember>

        </WarperCheckBox>
    )
}