import React, {PropsWithChildren} from 'react';

import {ServicesProvider} from 'doodoo/services';
import {StoresProvider} from 'doodoo/stores';

/**
 * `AppProvider` contains providers for stores and services to have access to them inside screens.
 */
export const AppProvider: React.FC<PropsWithChildren<{}>> = ({children}) => {
  return (
    <StoresProvider>
      <ServicesProvider>{children}</ServicesProvider>
    </StoresProvider>
  );
};
