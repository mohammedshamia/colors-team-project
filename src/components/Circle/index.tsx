import React, { HTMLAttributes } from 'react';
import { CSSProperties } from 'styled-components';
import CircleStyle from './styles';

export interface IProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  style?: CSSProperties;
  size?: string;
  bgColor?: string;
  borderSize?: string;
  borderColor?: string;
}

const Circle = (props: IProps) => {
  return <CircleStyle {...props} />;
};

Circle.defaultProps = {
  size: '100px',
  bgColor: '#eee',
  borderSize: '1px',
};

export default Circle;
