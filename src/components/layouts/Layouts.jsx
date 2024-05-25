import React from 'react'
import Topbar from '../topbar/Topbar'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'

const Layouts = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Outlet />
    </>
  )
}

export default Layouts
