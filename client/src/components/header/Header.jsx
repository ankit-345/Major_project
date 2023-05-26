import './header.css'
import Img from '../topbar/blogImage.jpg'

const Header = () => {
  return (
    <div className='header'>
        <div className='headerTitles'>
           <span className='headerTitlesSm'>React & Node</span>
           <span className='headerTitlesLg'>Blog</span>
        </div>
        <img className="headerImg" src={Img} alt="" />
    </div>
  )
}

export default Header