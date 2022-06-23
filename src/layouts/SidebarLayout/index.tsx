import React from 'react'
import './style.css'
import { Outlet } from 'react-router-dom'

// Component Import 
import Sidebar from './SideBar'
import TopBar from './TopBar'

const SideBarLayout = () => {
  return (
    <div className="sidbar__layout">
        <div className="sidbar__layout-content">
            <Sidebar />
            <div className="sidebar__layout-body">
                <TopBar />
                <div className="sidebar__layout-body-scroll scroll__hide">
                  <Outlet />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBarLayout



