import React from 'react';

const Header = ({currentUser, logout, router}) => {
  if (currentUser){
    return (
      <div>
        <h1>Hi {currentUser.username}</h1>
        <button onClick={logout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div className='header group'>
        <button id='sign_in' onClick={() => router.push('/addSession')}>SIGN IN</button>
      </div>
    );
  }
};

export default Header;
