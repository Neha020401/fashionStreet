import React, {useState} from 'react'
import { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom';
import Authentication from '../Routes/SignIn/Authentication';


const Navbar = () => {
 const [signInPage, setSignInPage] = useState(false)

 const pageChange = ()=>{
  setSignInPage(true)
 }

  return (
    <Fragment>
      <div className='logo'>
      <Link to='/'>     
        LoGo
      </Link> 
      </div>
      <ul  style={{listStyle:'none',display:'flex',gap:'20px'}}> 
         <Link to='/'><li>Home</li></Link>
        <Link to='cart'><li>Cart</li></Link>
        <Link to='shop'><li>Shop</li></Link>
         <Link to='signin'><li onClick={pageChange}>Sign in
         {signInPage && <Authentication/>}
        </li></Link>

      </ul>
      <Outlet/>
    </Fragment>
  )
}

export default Navbar
