import React from 'react';

import Header from './header/header_container';
import Footer from './footer/footer';
import Sidebar from './sidebar/sidebar';

const App = ({children}) => (
  <div className='app'>
    <Sidebar />
    <Header />
      {children}
    <Footer />
  </div>
);

export default App;
