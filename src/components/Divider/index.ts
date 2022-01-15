import styled from 'styled-components';

interface IdividerProps {
  width?: string;
  thick?: string;
  color?: string;
  margin?: string;
}

export const Divider = styled('hr')<IdividerProps>(
  ({
    width = '100%',
    thick = '0',
    color = 'black',
    margin = '0px',
    ...props
  }: IdividerProps) => ({
    margin: `${margin}`,
    width: `${width}`,
    height: `${thick}`,
    color: `${color}`,
    borderRadius: '4px',
  }),
);





