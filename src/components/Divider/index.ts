import styled, { DefaultTheme } from 'styled-components';


interface IDividerProps extends DefaultTheme {

  width?: string;
  thick?: string;
  color?: string;
  margin?: string;
  theme?: DefaultTheme;
}

const Divider = styled('hr')<IDividerProps>(
  ({
    width = '100%',
    thick = '0',
    margin = '0px',
  }: IDividerProps) => ({
    margin: `${margin}`,
    width: `${width}`,
    height: `${thick}`,
    backgroundColor: `${props.theme?.palette?.primary.darkYallow}`,
    borderRadius: '4px',
  }),
);

export default Divider;
