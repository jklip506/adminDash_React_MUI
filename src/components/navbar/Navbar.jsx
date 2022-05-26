import React from 'react'
import './navbar.scss';

import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import ListIcon from '@mui/icons-material/List';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchIcon className='icon'/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className='icon'/>
            English
          </div>
          <div className="item">
            <DarkModeIcon className='icon'/>
          </div>
          <div className="item">
            <FullscreenIcon className='icon'/>
          </div>
          <div className="item">
            <NotificationsIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatIcon className='icon'/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListIcon className='icon'/>
          </div>
          <div className="item">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"
             alt="" 
             className='avatar'
             />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar