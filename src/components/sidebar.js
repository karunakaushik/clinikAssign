import React, { useState } from 'react';
import {NavLink } from 'react-router-dom';
import './sideBar.css';
import menu from './src/img/menu.png'
import { IconContext } from 'react-icons';
import { SidebarData } from './sideBarData';


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <NavLink to='#' className='menu-bars'>
            <img src={menu} onClick={showSidebar} />
          </NavLink>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <NavLink to='#' className='menu-bars' style={{textDecoration:"none"}} >
                <h1 style={{color:"white", fontSize:"25px"}}>X</h1>   
              </NavLink>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink to={item.path}>
                  <img src= {item.icon} />
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;