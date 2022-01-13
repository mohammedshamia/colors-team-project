import React, { HTMLAttributes, useState } from 'react';
import { CSSProperties } from 'styled-components';
import CircleStyle from './styles';

export interface IProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  style?: CSSProperties;
  size?: string;
  bgColor?: string;
  borderColor?: string;
  active?: boolean;
}

const Circle = (props: IProps) => {
  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => setIsActive(!isActive);
  return <CircleStyle onClick={toggleActive} {...props} active={isActive} />;
};

Circle.defaultProps = {
  size: '40px',
  bgColor: '#EDEAE3',
  borderColor: '#242424',
};

export default Circle;
