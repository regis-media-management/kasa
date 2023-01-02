import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import NoMatch from './pages/NoMatch'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'a-propos',
    element: <AboutUs />,
  },
  {
    path: '*',
    element: <NoMatch />,
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
