import React from 'react';
import { AppProvider, Store } from './context';
import { RootNavigation } from './navigation/rootNavigator';

export const App = () => {
  return (
    <AppProvider value={Store}>
      <RootNavigation />
    </AppProvider>
  );
}
