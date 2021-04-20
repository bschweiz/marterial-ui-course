import React from 'react';
import { ThemeProvider } from '@material-ui/styles'

import theme from './ui/theme'
import Header from './ui/header'



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Art Goes Here...
    </ThemeProvider>
  );
}

export default App;
