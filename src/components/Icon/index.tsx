import React, { ReactNode } from 'react';
import { IconContext } from 'react-icons';

interface IProps {
  color?: string;
  size?: string;
  icon: ReactNode;
}

export const Icon = ({ size, icon, color }: IProps) => {
  return (
    <IconContext.Provider
      value={{
        size: `${size}`,
        color,
      }}
    >
      {icon}
    </IconContext.Provider>
  );
};

Icon.defaultProps = {
  size: '1em',
};

export default Icon;
