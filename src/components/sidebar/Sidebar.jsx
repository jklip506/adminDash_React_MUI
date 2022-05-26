import React from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">JasonAdmin</span>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonIcon className='icon'/>
            <span>Users</span>
          </li>
          <li> 
            <CategoryIcon className='icon'/>
            <span>Products</span>
          </li>
          <li>
            <LocalShippingIcon className='icon'/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon className='icon'/>
            <span>Stats</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <HealthAndSafetyIcon className='icon'/>
            <span>System Health</span>
          </li>
          <li>
            <DescriptionIcon className='icon'/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icon'/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountBoxIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar