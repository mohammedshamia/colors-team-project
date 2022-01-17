import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { AllRouter } from './AllRouter';
import Store from './Redux/store';
import GlobalStyle from './Theme/GloableStyle';
import { theme } from './Theme';

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
