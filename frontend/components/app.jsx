import React from 'react';

import Header from './header/header_container';
import Footer from './footer/footer';
import Sidebar from './sidebar/sidebar';
import Home from './home/home';

const App = ({children}) => (
  <div className='homepage'>
    <Sidebar />
    <Header />
      {children}
    <Footer />
  </div>
);

export default App;
