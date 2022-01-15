import React, { ReactNode } from 'react';
import { IconContext } from 'react-icons';
import { useTheme } from 'styled-components';

interface IProps {
  color?: string;
  size?: string;
  icon: ReactNode;
}

export const Icon = ({ size = '1em', icon, color }: IProps) => {
  const globalStyle = useTheme();
  return (
    <IconContext.Provider
      value={{
        size: `${size}`,
        color: `${globalStyle}`,
        // color: globalStyle
      }}
    >
      {icon}
    </IconContext.Provider>
  );
};

export default Icon;
