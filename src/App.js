import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  
  return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
        </div>
      </div>
  );
}

export default App;

// Таймкод: #8, 36:03