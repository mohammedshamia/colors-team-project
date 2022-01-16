import { CSSProperties } from 'styled-components';

export interface IstyleMainCard extends CSSProperties {
  boxShadow?: string;
  width?: string;
  margin?: string;
  padding?: string;
  borderRadius?: string;
  backgroundColor?: string;
  alignContent?: string;
  alignItems?: string;
  flipped?: boolean;
}

export interface IcontentProp extends CSSProperties {
  padding?: string;
  width?: string;
  height?: string;
  border?: string;
  margin?: string;
}

export interface IheaderProps {
  height?: string;
  width?: string;
  border?: string;
  maxHeight?: string;
  padding?: string;
}

export interface IactionProps {
  padding?: string;
  float?: string;
  width?: string;
  space?: boolean;
}