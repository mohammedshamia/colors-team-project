import { CSSProperties } from 'react';

export interface IContainerProps extends CSSProperties {
  children?: any;
  direction?: 'row' | 'column';
}
