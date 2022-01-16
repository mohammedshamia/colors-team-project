import styled from 'styled-components';
import { IProps } from './index';

const CircleStyle = styled.div<IProps>(
  ({ size, bgColor, borderColor, active, ...props }) => ({
    position: 'relative',
    borderRadius: '50%',
    width: `${size}`,
    height: `${size}`,

    backgroundColor: `${bgColor || props.theme.background?.lightGrey}`,

    border:
      active === true
        ? `2px solid ${
            borderColor
            // || props.theme.background.border
          }`
        : `none`,
    cursor: `pointer`,
  }),
);

export default CircleStyle;
