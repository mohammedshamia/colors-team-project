import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { AllRouter } from './AllRouter';
import { UseTheme } from './Hook/useTheme';
import Store from './Redux';
import { DarkTheme } from './Theme/DarkTheme';
import GlobalStyle from './Theme/GloableStyle';
import { LightTheme } from './Theme/LightTheme';

export const Providers: React.FC = ({ children }) => {
  const [theme] = UseTheme();

  return (
    <>
      <HelmetProvider>
        <ThemeProvider theme={theme === 'Dark' ? DarkTheme : LightTheme}>
          {' '}
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
};
