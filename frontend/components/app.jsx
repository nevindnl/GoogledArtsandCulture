import React from 'react';

import Header from './header/header_container';
import Images from './images/images_container';

const App = ({children}) => (
  <div>
    <Header />
    <Images />
  </div>
);

export default App;
