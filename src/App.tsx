import React, { Suspense } from 'react';
import { AllRouter } from './AllRouter';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import { Navbar } from './Components/NavBar/Navbar';
import { MainContainer } from './Components/Row';
import { SpinnerContainer } from './Components/widget/SpinnerContainer';
import { Providers } from './providers'
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
};

export default App;
