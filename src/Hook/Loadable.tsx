import { Suspense, LazyExoticComponent, ComponentType } from 'react';
import { SpinnerContainer } from '../Components/widget/SpinnerContainer';

// -----------------------|| LOADABLE - LAZY LOADING ||-----------------------//

const Loadable =
  (
    Component:
      | LazyExoticComponent<() => JSX.Element>
      | ComponentType<React.ReactNode>,
  ) =>
  (props: any) =>
    (
      <Suspense fallback={<SpinnerContainer />}>
        <Component {...props} />
      </Suspense>
    );

export default Loadable;
