import React from 'react';
import './App.css';
import { Layout } from './features/gui/layout/layout'
import { ROUTES } from './app/routes'
import {ThemeProvider} from '@primer/components'

function App() {
  return (
      <ThemeProvider colorMode="night">
        <Layout routes={ ROUTES }/>
      </ThemeProvider>
  );
}

export default App;
