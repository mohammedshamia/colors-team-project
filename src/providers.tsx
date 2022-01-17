import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { theme } from './theme/index';
import GlobalStyle from './theme/GloableStyle';

export const Providers: React.FC = ({ children }) => {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          {' '}
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
};
