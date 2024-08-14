import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
    return (
      // it is just a react fragment :)
    <>
    <Outlet />
  </>
  )
}

export default HomeLayout