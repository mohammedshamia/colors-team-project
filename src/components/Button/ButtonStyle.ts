import styled from 'styled-components';
import { IStyleButton } from './IStyleButton';

// normal normal bold 16px/20px

export const Button = styled.button<IStyleButton>`
  min-width: ${props => props.minWidth || '100px'};
  width: ${props => props.width || 'none'};
  height: ${props => props.height || 'none'};
  padding: ${props => props.padding || '16px 32px'};
  border-radius: ${props => props.borderRadius || '4px'};
  border: ${props => props.border || 'none'};
  font-weight: ${props => props.fontWeight || 'bold'};
  background: ${props => props.background || '#FCDD06'};
  color: ${props => props.color || '#242424'};
  font-size: ${props => props.fontSize || '16px / 20px'};
  cursor: ${props => props.cursor || 'pointer'};
  align-items: 'baseline';
  letter-spacing: ${props => props.letterSpace || '0px'};

  &:hover {
    color: white;
    background: #bfa90d;
  }
`;
