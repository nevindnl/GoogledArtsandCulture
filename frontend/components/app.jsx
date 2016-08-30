import React from 'react';

import Header from './header/header_container';

const App = ({children}) => (
  <div>
    <Header />
    <h1>
      {children}
    </h1>
  </div>
);

export default App;
