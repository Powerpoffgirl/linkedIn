import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WorkIcon from '@mui/icons-material/Work';
import HeaderOption from './HeaderOption';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';
import AppsIcon from '@mui/icons-material/Apps';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  };

  return (
    <div className="header">
        
        <div className="header_left">
            
            <img src='https://i0.wp.com/www.vectorico.com/wp-content/uploads/2018/02/LinkedIn-Icon-squircle.png?fit=600%2C600' alt='' />
            
            <div className="header_search">
                <SearchIcon/>
                <input placeholder="Search" type="text"/>
            </div>

        </div>

        <div className="header_right">
            <HeaderOption Icon = {HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon}  title="My Network"/>
            <HeaderOption Icon = {WorkIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar = {true}
              title={'Me'}
              onClick={logoutOfApp}
              />
            <p><HeaderOption Icon ={AppsIcon} title="Work" /></p>  
            <h4> 
              <ul>Get Hired Faster, </ul>
              <ul>Try Premium Free</ul>
            </h4>
        </div>

    </div>

  )
}

export default Header