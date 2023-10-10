import React, { useState } from 'react'
import { Fragment, useContext } from 'react'
import { UserContext } from '../../Context/Contexts';
import { Link, Outlet } from 'react-router-dom';
import { signOutUser } from '../utils/Firebase';

const Navbar = () => {
  const { currentUser } = useContext(UserContext)
  console.log(currentUser)

  const signOutHandler = async() =>{
const res = await signOutUser()
console.log(res)
  }
  return (
    <Fragment>
      <div className='logo'>
        <Link to='/'>
          LoGo
        </Link>
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
        <Link to='/'><li>Home</li></Link>
        <Link to='cart'><li>Cart</li></Link>
        <Link to='shop'><li>Shop</li></Link>
        <li>
          {currentUser ?
            (<span onClick={signOutHandler}>Sign Out </span>) :
            (<Link to='signin'> <span >Sign in</span>  </Link>)}
        </li>
      </ul>
      <Outlet />
    </Fragment>
  )
}

export default Navbar
