import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import '../App.scss'

function SharedLayout() {
  return (   <div  className="shared-layout">
    <Navbar className='layout-navbar' />
    <Outlet className="layout-outlet"/>
</div>
  )
}

export default SharedLayout