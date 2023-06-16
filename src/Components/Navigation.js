import React, {useContext} from 'react'
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Icon } from "react-materialize";

 const Navigation = () => {
  // const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <Navbar className='menu red'
    alignLinks='right'
    brand={<span className='brand-logo'>Player Cards</span>}
    id='mobile-nav'
    menuIcon ={<Icon>menu</Icon>}
    
    >
      <ul>
        <li><Link to='/'><Icon left>home</Icon>Home</Link></li>
        <li to='/about'><Link to='/about'><Icon left>info_outline</Icon>About</Link></li>
        <li to='/news'><Link to='/news'><Icon left>dvr</Icon>News</Link></li>
        <li><Link to='/contact'><Icon left>contacts</Icon>Contact</Link></li>
      </ul>
    </Navbar>
  )
}

export default Navigation;
