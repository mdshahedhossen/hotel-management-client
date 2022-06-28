import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
};
    const manueItem=
     <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/dashboard'>Dashboard</Link></li>
    {
      user? <li><Link to='' onClick={logout}>LogOut</Link></li>
      :
      <li><Link to='/login'>Login</Link></li>
    }
    </>
    return (
        <div className="navbar bg-white shadow-xl mb-8 p-3">
  <div className="navbar-start px-20">
    <div className="dropdown">
      <label  tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round"   strokeLinejoin="round"  strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul  tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {manueItem}
      </ul>
    </div>
    <img src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {manueItem}
    </ul>
  </div>
  <div className="navbar-end">
      <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
      </div>
</div>
    );
};

export default Header;