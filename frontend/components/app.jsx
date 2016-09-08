import React from 'react';

import Header from './header/header_container';
import SearchHeader from './search_header/search_header_container';
import Footer from './footer/footer';
import Sidebar from './sidebar/sidebar';

const App = ({children}) => (
  <div className='app'>
    <Sidebar />
    <SearchHeader />
    <Header />
      {children}
    <Footer />
  </div>
);

export default App;
