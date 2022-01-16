import styled from 'styled-components';
import { IStyleButton } from './IStyleButton';

// normal normal bold 16px/20px

const ButtonStyle = styled.button<IStyleButton>(
  ({
    minWidth = '100px',
    width = 'none',
    height = 'none',
    padding = '16px 32px',
    borderRadius = '4px',
    border = 'none',
    fontWeight = 'bold',
    background = '#FCDD06',
    color = '#242424',
    fontSize = '16px / 220px',
    cursor = 'pointer',
    letterSpace = '0px',
    ...props
  }) => ({
    minWidth: `${minWidth}`,
    width: `${width}`,
    height: `${height}`,
    padding: `${padding}`,
    borderRadius: `${borderRadius}`,
    border: `${border}`,
    fontWeight: `${fontWeight}`,
    background: `${background}`,
    color: `${color}`,
    fontSize: `${fontSize}`,
    cursor: `${cursor}`,
    letterSpacing: `${letterSpace}`,
    alignItems: 'baseline',
  }),
);

export const Button = styled(ButtonStyle)`
  &:hover {
    color: white;
    background: #bfa90d;
  }
`;
