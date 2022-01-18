import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const ItemTitle = styled.a`
  width: 50%;
  text-decoration: none;
  color: #242424;
  padding-top: 20px;
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

export const PathName = styled.h2`
  color: #242424;
  font-size: 24px;
  letter-spacing: 0.96px;
  font-weight: 500;
`;

export const PathLink = styled.a`
  text-decoration: none;
  color: #707070;
  font-size: 24px;
  letter-spacing: 0.96px;
  font-weight: 500;
  &: hover {
    color: rgba(112, 112, 112, 0.8);
  }
`;
