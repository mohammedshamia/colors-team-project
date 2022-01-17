import React, { ReactNode } from 'react';
import { IconContext } from 'react-icons';
// import { useTheme } from 'styled-components';

interface IProps {
  // color?: string;
  size?: string;
  icon: ReactNode;
  color?: string;
}

export const Icon = ({ size = '1em', icon, color = 'white' }: IProps) => {
  // const globalStyle = useTheme();
  return (
    <IconContext.Provider
      value={{
        size: `${size}`,
        color: `${color}`,
        // color: globalStyle
      }}
    >
      {icon}
    </IconContext.Provider>
  );
};

export default Icon;
