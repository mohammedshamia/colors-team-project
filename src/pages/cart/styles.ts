import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const CloseIcon = styled.i`
  position: absolute;
  top: 17px;
  right: 13px;
  color: #242424;
  width: 32px;
  height: 32px;
  &: hover {
    cursor: pointer;
  }
`;

export const OldPrice = styled.div`
  position: absolute;
  top: 68px;
  right: 35px;
`;

export const ItemTitle = styled.a`
  width: 50%;
  text-decoration: none;
  color: #242424;
  padding-top: 20px;
`;

export const WrapCounter = styled.div`
  background: #fff;
`;
