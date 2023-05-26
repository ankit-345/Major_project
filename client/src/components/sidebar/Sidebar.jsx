import './sidebar.css'
import Img from './Img2.jpg'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() =>{
   const getCats = async () =>{
     const res = await axios.get('/categories')
     setCats(res.data);
   }
   getCats();
  }, [])

  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
         <span className='sidebarTitle'>ABOUT ME</span>
         <img src={Img} alt="" />
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatum, vitae nostrum, iure nisi tenetur numquam natus hic corporis tempora dolor repudiandae error.</p>
      </div>
      <div className='sidebarItem'>
         <span className='sidebarTitle'>CATEGORIES</span>
         <ul className='sidebarList'>
          {
            cats.map((cat) =>(
              <Link className='link' to={`/?cat=${cat.name}`} key={cat._id}>
                <li className='sidebarListItem' >{cat.name}</li>
              </Link>
            ))
          }
         </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
