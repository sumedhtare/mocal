import * as React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Login from '../../pages/login'
import DashboardPage from '../../pages/dashboard'
import ProfilePage from '../../pages/profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },
  {
    path: 'dashboard',
    element: <DashboardPage/>
  },
  {
    path: 'profile',
    element: <ProfilePage/>
  }
])

export default function Navigation () {
  return <RouterProvider router={router} />
}
