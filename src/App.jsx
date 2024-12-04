import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import HomePage from './Pages/HomePage'
import Catagories from './Pages/Categories'
import Search from './Pages/Search'
import GifPage from './Pages/GifPage'
import Favourite from './Pages/Favourite'
import GifProvider from './Context/gif-context'


const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:'/:catagories',
        element:<Catagories/>
      },
      {
        path:'/:search/:query',
        element:<Search/>
      },
      {
        path:'/:type/:slug',
        element:<GifPage/>
      },
      {
        path:'/:favourite',
        element:<Favourite/>
      }]

  }])


const App = () => {
  return (
    <GifProvider>
   <RouterProvider router={router}/>
   </GifProvider>
  )
}

export default App
