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
      <div>
        <button onClick={() => router.push('signup')}>Signup</button>
        <button onClick={() => router.push('login')}>Login</button>
      </div>
    );
  }
};

export default Header;
