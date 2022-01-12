import styled from 'styled-components';
import { IProps } from './index';

const CircleStyle = styled.div<IProps>(
  ({ size, bgColor, borderColor, borderSize }) => ({
    position: 'relative',
    borderRadius: '50%',
    width: `${size}`,
    height: `${size}`,
    backgroundColor: `${bgColor}`,
    border: `${borderSize} solid ${borderColor}`,
  }),
);

export default CircleStyle;
