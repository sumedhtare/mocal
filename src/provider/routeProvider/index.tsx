import * as React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Login from '../../pages/login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },
  {
    path: 'dashboard',
    element: <div>About</div>
  }
])

export default function Navigation () {
  return <RouterProvider router={router} />
}
