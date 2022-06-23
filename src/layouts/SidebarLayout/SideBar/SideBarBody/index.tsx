import './style.css'
import { IItem as IMenuItem } from '../../../../menu-items'
import menuItems from '../../../../menu-items'
import { useState } from 'react'
import { SidebarMenuItem } from '../../../../components'

const { items } = menuItems

const SidebarBody = () => {
  return (
    <div className="sidebar__body scroll__hide">
        {items?.map((item:IMenuItem, index:number) => <SidebarMenuItem key={index} {...item} />)}
    </div>
  )
}

export default SidebarBody


