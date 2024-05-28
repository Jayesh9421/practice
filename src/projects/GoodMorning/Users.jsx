import React from 'react'
import { Link  , Outlet } from 'react-router-dom'

const Users = () => {
  return (
    <div>
      This Users page...

      <div className=' text-4xl'>
        <Link to="/users:1"/>
        <Link to="/users:2"/>
        <Link to="/users:3"/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Users
