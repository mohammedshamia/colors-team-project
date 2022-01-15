import styled from 'styled-components';

interface IDividerProps {
  width?: string;
  thick?: string;
  color?: string;
  margin?: string;
}

const Divider = styled('hr')<IDividerProps>(
  ({
    width = '100%',
    thick = '0',
    color = 'black',
    margin = '0px',
  }: IDividerProps) => ({
    margin: `${margin}`,
    width: `${width}`,
    height: `${thick}`,
    color: `${color}`,
    borderRadius: '4px',
  }),
);

export default Divider;
