import './topbar.css'
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';

const Top = () => {
 const {user, dispatch} = useContext(Context);
 const PF = "http://localhost:5000/images/";

 const handleLogout = () =>{
  dispatch({type: 'LOGOUT'});
 }

 console.log(user);
  return (
    <div className='top'>
        <div className='topLeft'>
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topList_item'>
                  <Link to="/"  className='link'>Home</Link>
                </li>
                <li className='topList_item'>
                  <Link to="/"  className='link'>About</Link>
                  </li>
                <li className='topList_item'>
                  <Link to="/"  className='link'>Contact</Link>
                  </li>
                <li className='topList_item'>
                  <Link to="/write"  className='link'>Write</Link>
                  </li>
                <li className='topList_item' onClick={handleLogout}>
                  {user && "Logout"}
                  </li>
            </ul>
        </div>
        <div className='topRight'>
          {
            user ? (
              <Link to="/settings">
                <img className='topImg' src={PF+user.profilePic} alt="" />
              </Link>
            ): (
              <ul className='topList'>
                <li className='topList_item'>
                <Link className='link' to="/login">Login</Link>
                </li>
                <li className='topList_item'>
                <Link className='link' to="/register">Register</Link>
                </li>
              </ul>
            )
          }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Top