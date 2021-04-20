import React from 'react';
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import theme from './ui/theme'
import Header from './ui/header'



function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>HOME View</div>} />
          <Route exact path="/photos" component={() => <div>Photos</div>} />
          <Route exact path="/videos" component={() => <div>Videos</div>} />
          <Route exact path="/drawings" component={() => <div>Drawings</div>} />
          <Route exact path="/contact" component={() => <div>Contact</div>} />
          <Route exact path="/studio" component={() => <div>Studio Drawings</div>} />
          <Route exact path="/sketches" component={() => <div>Personal Sketches</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
