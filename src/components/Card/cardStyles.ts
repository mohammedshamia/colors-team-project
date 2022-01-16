import styled, { CSSProperties } from 'styled-components';
import {
  IstyleMainCard,
  IcontentProp,
  IheaderProps,
  IactionProps,
} from './interface';

export const MainCard = styled('div')<IstyleMainCard>(
  ({
    alignItems = 'baseline',
    alignContent = 'baseline',
    boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    width = '25%',
    margin = '20px auto',
    padding = 'none',
    ...props
  }: IstyleMainCard) => ({
    position: 'relative',
    alignItems: `${alignItems}`,
    alignContent: `${alignContent}`,
    boxShadow: `${boxShadow}`,
    transition: '0.3s',
    width: `${width}`,
    margin: `${margin}`,
    padding: `${padding}`,
    display: 'flex',
    flexDirection: `${(props.flexDirection as 'row') || ('column' as const)}`,
    borderRadius: `${props.borderRadius || '10px'}`,
    backgroundColor: `${props.backgroundColor || 'none'}`,
  }),
);

export const Content = styled('div')<IcontentProp>(
  ({
    padding = '0',
    width = 'none',
    height = 'none',
    maxHeight = '60%',
    margin = '5px auto',
  }: // ...props
  IcontentProp) => ({
    display: 'flex',
    padding: `${padding}`,
    width: `${width}`,
    height: `${height}`,
    maxHeight: `${maxHeight}`,
    margin: `${margin}`,
  }),
);

export const Header = styled('div')(
  ({
    height = '50px',
    width = '100%',
    padding = '10px',
  }: // ...props
  IheaderProps) => ({
    display: 'flex',
    height: `${height}`,
    width: `${width}`,
    padding: `${padding}`,
  }),
);

export const Action = styled('div')<IactionProps>(
  ({ padding = '10px', width = '100%' }: IactionProps) => ({
    display: 'flex',
    flexDirection: 'row' as const,
    padding: `${padding}`,
    width: `${width}`,
    boxSizing: 'border-box',
  }),
);

export const ContentAction = styled.div<CSSProperties>(
  ({
    padding = 'none',
    width = '100%',
    height = 'none',
    border = 'none',
    margin = '5px auto',
    // ...props
  }) => ({
    display: 'flex',
    padding: `${padding}`,
    width: `${width}`,
    height: `${height}`,
    // maxheight: ${props => props.maxHeight || '60%'},
    border: ` ${border}`,
    margin: `${margin}`,
    cursor: 'pointer',
  }),
);

export const HoverConentAction = styled(ContentAction)`
  &:hover {
    transition: 0.5s ease;
    opacity: 0.1;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    cursor: pointer;
  }
`;

export interface ICardMedia {
  padding?: string;
  float?: string;
  width?: string;
  space?: boolean;
  src?: string;
}

export const CardMedia = styled.img<ICardMedia>`
  padding: ${props => props.padding || 'none'};
  width: ${props => props.width || '100%'};
  maxheight: ${props => (props.space ? '100px' : 'none')};
  src: ${props => props.src};
  border: '1px solid black';
  height: 100%;
  &:hover {
    opacity: 0.1;
    font-size: 20px;
    backgroundcolor: rgba(0, 0, 0, 0.5);
  }
`;
