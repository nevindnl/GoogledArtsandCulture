import React from 'react';
import Logo from '../logo/logo';

const Header = ({currentUser, logout, router}) => {
  const buttonContent = currentUser ? 'LOGOUT ' + currentUser.username : 'SIGN IN';
  const buttonClick = currentUser ? logout : () => router.push('/addSession');

  return (
    <div className='header group'>
      <img src='https://cdn2.iconfinder.com/data/icons/bank/100/Bankicons_Set-13-512.png'></img>
      <Logo />
      <button id='sign_in' onClick={buttonClick}>{buttonContent}</button>
      <img id='search' src='http://iconshow.me/media/images/ui/slim-square-icons/png/512/search.png'></img>
    </div>
  );
};

export default Header;
