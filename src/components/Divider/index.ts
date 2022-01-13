import styled, { DefaultTheme } from 'styled-components';

interface IdividerProps extends DefaultTheme {
  width?: string;
  thick?: string;
  color?: string;
  margin?: string;
  theme?: DefaultTheme;
}

export const Divider = styled('hr')<IdividerProps>(
  ({
    width = '100%',
    thick = '0',
    margin = '0px',
    ...props
  }: IdividerProps) => ({
    margin: `${margin}`,
    width: `${width}`,
    height: `${thick}`,
    backgroundColor: `${props.theme?.palette?.primary.darkYallow}`,
    borderRadius: '4px',
  }),
);
