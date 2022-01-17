import React, { Suspense } from 'react';
import { AllRouter } from './AllRouter';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import {
  Navbar,
  MainContainer,
  SpinnerContainer,
  Providers,
} from './components/index';

function App() {
  return (
    <Providers>
      <MainContainer>
        <Suspense fallback={<SpinnerContainer />}>
          <ErrorBoundary>
            <Navbar />
            <AllRouter />
          </ErrorBoundary>
        </Suspense>
      </MainContainer>
    </Providers>
  );
}

export default App;
