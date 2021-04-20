import React from 'react';
import { ThemeProvider } from '@material-ui/styles'

import theme from './ui/theme'
import Header from './ui/header'



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
