/* eslint-disable react/destructuring-assignment */
import { FormikErrors, FormikTouched } from 'formik';

import { BiErrorAlt } from 'react-icons/bi';
import { Row } from '../../Row';

interface Props {
  touched?:
    | FormikTouched<any>
    | FormikTouched<string>
    | FormikTouched<number>
    | boolean;
  errors?: FormikErrors<Date | any> | string;
}

export const ErrorSection = (props: Props) => {
  if (props.touched && props.errors) {
    return (
      <Row JC="space-between" item="center">
        <p className="text-xs">{props.errors}</p>
        <BiErrorAlt />
      </Row>
    );
  }
  return <></>;
};
