import React from 'react'
import SidebarBody from './SideBarBody'
import SidebarFooter from './SideBarFooter'
import SidebarHeader from './SidebarHeader'
import './style.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <SidebarHeader />
        <SidebarBody />
        <SidebarFooter />
    </div>
  )
}

export default Sidebar


