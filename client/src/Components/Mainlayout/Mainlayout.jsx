import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

import Sidebar from './Sidebar'

export default function Mainlayout() {
  return (
    <>
      <Sidebar/>
        <Outlet/>
      <Footer/>
    </>
  )
}
