import React from 'react'
import SuperAdminSideBar from './SuperAdminSideBar'
import { Outlet } from 'react-router-dom'
import { DataProvider } from '../../SuperAdminContext'
 

const SuperAdminStateManagement = () => {
    
  return (
    <DataProvider>
      <div className="w-100 d-flex flex-wrap">
          <SuperAdminSideBar/>
          <Outlet/>
      </div>
    </DataProvider>
  )
}

export default SuperAdminStateManagement