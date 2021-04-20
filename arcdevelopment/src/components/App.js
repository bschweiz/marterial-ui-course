import React from 'react';
import { ThemeProvider } from '@material-ui/styles'

import them from './ui/theme'
import Header from './ui/header'



function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}

export default App;
