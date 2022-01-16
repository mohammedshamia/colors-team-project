import styled, { CSSProperties } from 'styled-components';
import { IstyleMainCard, IcontentProp } from './interface';

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
    ...props
  }: IcontentProp) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: `${padding}`,
    width: `${width}`,
    height: `${height}`,
    // maxHeight: `${maxHeight}`,
    margin: `${margin}`,
    justifyContent: 'center',
    alignItems: 'center',
  }),
);

export const ContentAction = styled.div<CSSProperties>(
  ({
    padding = 'none',
    width = '100%',
    height = 'none',
    border = 'none',
    margin = '5px auto',
    boxShadow = 'none',
    ...props
  }) => ({
    display: 'flex',
    flexDirection: 'row',
    padding: `${padding}`,
    width: `${width}`,
    height: `${height}`,
    border: ` ${border}`,
    borderRadius: '10px',
    margin: `${margin}`,
    cursor: 'pointer',
    boxShadow: `${boxShadow}`,
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
